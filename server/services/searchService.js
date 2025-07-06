const { getDb } = require('../config/database');

// Simple text search implementation
const searchInText = (text, query) => {
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
  const textLower = text.toLowerCase();
  
  let score = 0;
  searchTerms.forEach(term => {
    if (textLower.includes(term)) {
      score += 1;
      // Bonus for exact matches
      if (textLower.includes(` ${term} `)) {
        score += 0.5;
      }
    }
  });
  
  return score;
};

// Search in blogs
const searchInBlogs = async (blogs, query) => {
  const results = [];
  
  blogs.forEach(blog => {
    const titleScore = searchInText(blog.title || '', query) * 2;
    const contentScore = searchInText(blog.content || '', query);
    const excerptScore = searchInText(blog.excerpt || '', query) * 1.5;
    const tagsScore = blog.tags ? searchInText(blog.tags.join(' '), query) * 0.5 : 0;
    
    const totalScore = titleScore + contentScore + excerptScore + tagsScore;
    
    if (totalScore > 0) {
      results.push({
        ...blog,
        searchScore: totalScore,
        matchedFields: []
      });
    }
  });
  
  return results.sort((a, b) => b.searchScore - a.searchScore);
};

// Search in pages
const searchInPages = async (query, limit = 20, offset = 0) => {
  try {
    const db = getDb();
    const pagesSnapshot = await db.collection('pages').get();
    const results = [];
    
    pagesSnapshot.forEach(doc => {
      const page = { id: doc.id, ...doc.data() };
      const titleScore = searchInText(page.title || '', query) * 2;
      let contentScore = 0;
      
      // Search in page sections
      if (page.sections) {
        page.sections.forEach(section => {
          if (section.content) {
            contentScore += searchInText(JSON.stringify(section.content), query);
          }
        });
      }
      
      const totalScore = titleScore + contentScore;
      
      if (totalScore > 0) {
        results.push({
          ...page,
          searchScore: totalScore,
          type: 'page'
        });
      }
    });
    
    return results
      .sort((a, b) => b.searchScore - a.searchScore)
      .slice(offset, offset + limit);
  } catch (error) {
    console.error('Search in pages error:', error);
    return [];
  }
};

// Search in resources
const searchInResources = async (query, limit = 20, offset = 0) => {
  try {
    const db = getDb();
    const resourcesSnapshot = await db.collection('resources').get();
    const results = [];
    
    resourcesSnapshot.forEach(doc => {
      const resource = { id: doc.id, ...doc.data() };
      const titleScore = searchInText(resource.title || '', query) * 2;
      const descriptionScore = searchInText(resource.description || '', query);
      const categoryScore = searchInText(resource.category || '', query) * 1.5;
      const tagsScore = resource.tags ? searchInText(resource.tags.join(' '), query) * 0.5 : 0;
      
      const totalScore = titleScore + descriptionScore + categoryScore + tagsScore;
      
      if (totalScore > 0) {
        results.push({
          ...resource,
          searchScore: totalScore,
          type: 'resource'
        });
      }
    });
    
    return results
      .sort((a, b) => b.searchScore - a.searchScore)
      .slice(offset, offset + limit);
  } catch (error) {
    console.error('Search in resources error:', error);
    return [];
  }
};

// Search in content
const searchInContent = async (query, limit = 20, offset = 0) => {
  try {
    const db = getDb();
    const contentSnapshot = await db.collection('content').get();
    const results = [];
    
    contentSnapshot.forEach(doc => {
      const content = { id: doc.id, ...doc.data() };
      const titleScore = searchInText(content.title || '', query) * 2;
      const contentScore = searchInText(content.content || '', query);
      const categoryScore = searchInText(content.category || '', query) * 1.5;
      const tagsScore = content.tags ? searchInText(content.tags.join(' '), query) * 0.5 : 0;
      
      const totalScore = titleScore + contentScore + categoryScore + tagsScore;
      
      if (totalScore > 0) {
        results.push({
          ...content,
          searchScore: totalScore,
          type: 'content'
        });
      }
    });
    
    return results
      .sort((a, b) => b.searchScore - a.searchScore)
      .slice(offset, offset + limit);
  } catch (error) {
    console.error('Search in content error:', error);
    return [];
  }
};

// Main search function
const search = async (query, type = 'all', limit = 20, offset = 0) => {
  try {
    const results = {
      query,
      total: 0,
      results: [],
      pagination: {
        page: Math.floor(offset / limit) + 1,
        limit,
        offset
      }
    };
    
    let searchResults = [];
    
    switch (type) {
      case 'pages':
        searchResults = await searchInPages(query, limit, offset);
        break;
      case 'blogs':
        const blogsData = await getBlogsForSearch();
        searchResults = await searchInBlogs(blogsData, query);
        searchResults = searchResults.slice(offset, offset + limit);
        break;
      case 'resources':
        searchResults = await searchInResources(query, limit, offset);
        break;
      case 'content':
        searchResults = await searchInContent(query, limit, offset);
        break;
      case 'all':
      default:
        const [pages, blogs, resources, content] = await Promise.all([
          searchInPages(query, limit, offset),
          getBlogsForSearch().then(blogs => searchInBlogs(blogs, query)),
          searchInResources(query, limit, offset),
          searchInContent(query, limit, offset)
        ]);
        
        // Combine and sort all results
        searchResults = [...pages, ...blogs, ...resources, ...content]
          .sort((a, b) => b.searchScore - a.searchScore)
          .slice(offset, offset + limit);
        break;
    }
    
    results.results = searchResults;
    results.total = searchResults.length;
    
    return results;
  } catch (error) {
    console.error('Search error:', error);
    return {
      query,
      total: 0,
      results: [],
      error: 'Search failed'
    };
  }
};

// Helper function to get blogs for search
const getBlogsForSearch = async () => {
  try {
    const db = getDb();
    const blogsSnapshot = await db.collection('blogs').get();
    const blogs = [];
    
    blogsSnapshot.forEach(doc => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    
    return blogs;
  } catch (error) {
    console.error('Get blogs for search error:', error);
    return [];
  }
};

// Advanced search with filters
const advancedSearch = async (query, filters = {}, limit = 20, offset = 0) => {
  try {
    const { type, category, tags, dateFrom, dateTo, status } = filters;
    
    let results = await search(query, type, limit * 2, offset); // Get more results for filtering
    
    // Apply filters
    if (category) {
      results.results = results.results.filter(item => 
        item.category && item.category.toLowerCase().includes(category.toLowerCase())
      );
    }
    
    if (tags && tags.length > 0) {
      results.results = results.results.filter(item => 
        item.tags && item.tags.some(tag => 
          tags.some(filterTag => 
            tag.toLowerCase().includes(filterTag.toLowerCase())
          )
        )
      );
    }
    
    if (dateFrom || dateTo) {
      results.results = results.results.filter(item => {
        const itemDate = new Date(item.createdAt || item.updatedAt);
        if (dateFrom && itemDate < new Date(dateFrom)) return false;
        if (dateTo && itemDate > new Date(dateTo)) return false;
        return true;
      });
    }
    
    if (status) {
      results.results = results.results.filter(item => 
        item.status === status
      );
    }
    
    // Apply pagination
    results.results = results.results.slice(0, limit);
    results.total = results.results.length;
    results.pagination = {
      page: Math.floor(offset / limit) + 1,
      limit,
      offset
    };
    
    return results;
  } catch (error) {
    console.error('Advanced search error:', error);
    return {
      query,
      total: 0,
      results: [],
      error: 'Advanced search failed'
    };
  }
};

module.exports = {
  search,
  advancedSearch,
  searchInBlogs,
  searchInPages,
  searchInResources,
  searchInContent
}; 