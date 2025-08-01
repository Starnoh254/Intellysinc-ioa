import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api/pages/home';

function FeaturesEditor({ features, onChange }) {
  const handleFeatureChange = (idx, key, value) => {
    onChange(features.map((f, i) => i === idx ? { ...f, [key]: value } : f));
  };
  const handleRemove = idx => {
    onChange(features.filter((_, i) => i !== idx));
  };
  const handleAdd = () => {
    onChange([...features, { icon: '', title: '', description: '' }]);
  };
  return (
    <div style={{ marginTop: 8 }}>
      {features.map((f, idx) => (
        <div key={idx} style={{ border: '1px solid #ddd', borderRadius: 4, padding: 8, marginBottom: 8 }}>
          <label>Icon:</label>
          <input type="text" value={f.icon} onChange={e => handleFeatureChange(idx, 'icon', e.target.value)} style={{ width: '100%' }} />
          <label>Title:</label>
          <input type="text" value={f.title} onChange={e => handleFeatureChange(idx, 'title', e.target.value)} style={{ width: '100%' }} />
          <label>Description:</label>
          <input type="text" value={f.description} onChange={e => handleFeatureChange(idx, 'description', e.target.value)} style={{ width: '100%' }} />
          <button onClick={() => handleRemove(idx)} style={{ color: 'red', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer', marginTop: 4 }}>Remove</button>
        </div>
      ))}
      <button onClick={handleAdd} style={{ background: '#eee', border: 'none', borderRadius: 4, padding: '6px 14px', cursor: 'pointer', fontWeight: 600 }}>+ Add Feature</button>
    </div>
  );
}

function TestimonialsEditor({ testimonials, onChange }) {
  const handleTestimonialChange = (idx, key, value) => {
    onChange(testimonials.map((t, i) => i === idx ? { ...t, [key]: value } : t));
  };
  const handleRemove = idx => {
    onChange(testimonials.filter((_, i) => i !== idx));
  };
  const handleAdd = () => {
    onChange([...testimonials, { name: '', quote: '', image: '' }]);
  };
  return (
    <div style={{ marginTop: 8 }}>
      {testimonials.map((t, idx) => (
        <div key={idx} style={{ border: '1px solid #ddd', borderRadius: 4, padding: 8, marginBottom: 8 }}>
          <label>Name:</label>
          <input type="text" value={t.name} onChange={e => handleTestimonialChange(idx, 'name', e.target.value)} style={{ width: '100%' }} />
          <label>Quote:</label>
          <input type="text" value={t.quote} onChange={e => handleTestimonialChange(idx, 'quote', e.target.value)} style={{ width: '100%' }} />
          <label>Image URL:</label>
          <input type="text" value={t.image} onChange={e => handleTestimonialChange(idx, 'image', e.target.value)} style={{ width: '100%' }} />
          <button onClick={() => handleRemove(idx)} style={{ color: 'red', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer', marginTop: 4 }}>Remove</button>
        </div>
      ))}
      <button onClick={handleAdd} style={{ background: '#eee', border: 'none', borderRadius: 4, padding: '6px 14px', cursor: 'pointer', fontWeight: 600 }}>+ Add Testimonial</button>
    </div>
  );
}

function CTAEditor({ cta, onChange }) {
  return (
    <div style={{ marginTop: 8 }}>
      <label>Heading:</label>
      <input type="text" value={cta.heading || ''} onChange={e => onChange({ ...cta, heading: e.target.value })} style={{ width: '100%', marginBottom: 8 }} />
      <label>Subheading:</label>
      <input type="text" value={cta.subheading || ''} onChange={e => onChange({ ...cta, subheading: e.target.value })} style={{ width: '100%', marginBottom: 8 }} />
      <label>Button Text:</label>
      <input type="text" value={cta.buttonText || ''} onChange={e => onChange({ ...cta, buttonText: e.target.value })} style={{ width: '100%', marginBottom: 8 }} />
      <label>Button Link:</label>
      <input type="text" value={cta.buttonLink || ''} onChange={e => onChange({ ...cta, buttonLink: e.target.value })} style={{ width: '100%' }} />
    </div>
  );
}

function SectionEditor({ section, onChange, onRemove, index, onMoveUp, onMoveDown, canMoveUp, canMoveDown }) {
  let contentEditor = null;
  if (section.type === 'hero') {
    contentEditor = (
      <>
        <label>Heading:</label>
        <input type="text" value={section.content.heading || ''} onChange={e => onChange({ ...section, content: { ...section.content, heading: e.target.value } })} style={{ width: '100%', marginBottom: 8 }} />
        <label>Subheading:</label>
        <input type="text" value={section.content.subheading || ''} onChange={e => onChange({ ...section, content: { ...section.content, subheading: e.target.value } })} style={{ width: '100%', marginBottom: 8 }} />
        <label>Image URL:</label>
        <input type="text" value={section.content.image || ''} onChange={e => onChange({ ...section, content: { ...section.content, image: e.target.value } })} style={{ width: '100%' }} />
      </>
    );
  } else if (section.type === 'features') {
    contentEditor = <FeaturesEditor features={section.content.features || []} onChange={features => onChange({ ...section, content: { ...section.content, features } })} />;
  } else if (section.type === 'testimonials') {
    contentEditor = <TestimonialsEditor testimonials={section.content.testimonials || []} onChange={testimonials => onChange({ ...section, content: { ...section.content, testimonials } })} />;
  } else if (section.type === 'cta') {
    contentEditor = <CTAEditor cta={section.content} onChange={c => onChange({ ...section, content: c })} />;
  } else {
    contentEditor = (
      <>
        <label>Content (JSON):</label>
        <textarea value={JSON.stringify(section.content, null, 2)} onChange={e => {
          try {
            onChange({ ...section, content: JSON.parse(e.target.value) });
          } catch {}
        }} rows={4} style={{ width: '100%', fontFamily: 'monospace' }} />
      </>
    );
  }
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 6, padding: 12, marginBottom: 16, background: '#f9f9fc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>{section.type.charAt(0).toUpperCase() + section.type.slice(1)} Section</strong>
        <div>
          {canMoveUp && <button onClick={onMoveUp} style={{ marginRight: 8, background: 'none', border: 'none', cursor: 'pointer' }}>↑</button>}
          {canMoveDown && <button onClick={onMoveDown} style={{ marginRight: 8, background: 'none', border: 'none', cursor: 'pointer' }}>↓</button>}
          <button onClick={onRemove} style={{ color: 'red', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Remove</button>
        </div>
      </div>
      {contentEditor}
    </div>
  );
}

const SECTION_TYPES = [
  { value: 'hero', label: 'Hero' },
  { value: 'features', label: 'Features' },
  { value: 'cta', label: 'Call to Action' },
  { value: 'testimonials', label: 'Testimonials' },
  { value: 'custom', label: 'Custom (JSON)' }
];

function PageEditor({ slug }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [sections, setSections] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [newSectionType, setNewSectionType] = useState('hero');

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/pages/${slug}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title || '');
        setSections(data.sections || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch page content.');
        setLoading(false);
      });
  }, [slug]);

  const handleSectionChange = (idx, newSection) => {
    setSections(sections => sections.map((s, i) => i === idx ? newSection : s));
  };
  const handleSectionRemove = idx => {
    setSections(sections => sections.filter((_, i) => i !== idx));
  };
  const handleAddSection = () => {
    let content;
    if (newSectionType === 'hero') content = { heading: '', subheading: '', image: '' };
    else if (newSectionType === 'features') content = { features: [] };
    else if (newSectionType === 'cta') content = { heading: '', subheading: '', buttonText: '', buttonLink: '' };
    else if (newSectionType === 'testimonials') content = { testimonials: [] };
    else content = {};
    setSections(sections => [...sections, { type: newSectionType, content }]);
  };
  const handleMoveUp = idx => {
    if (idx === 0) return;
    setSections(sections => {
      const arr = [...sections];
      [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
      return arr;
    });
  };
  const handleMoveDown = idx => {
    setSections(sections => {
      const arr = [...sections];
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      return arr;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg('');
    setError('');
    try {
      const res = await fetch(`http://localhost:5000/api/pages/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, sections })
      });
      if (!res.ok) throw new Error('Save failed');
      setSaveMsg('Saved!');
    } catch (err) {
      setError('Failed to save.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading {slug} page content...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 12px #0001' }}>
      <h2>Edit {title || slug.charAt(0).toUpperCase() + slug.slice(1)} Page</h2>
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 600 }}>Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '100%', padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 600 }}>Sections:</label>
        {sections.map((section, idx) => (
          <SectionEditor
            key={idx}
            section={section}
            onChange={newSection => handleSectionChange(idx, newSection)}
            onRemove={() => handleSectionRemove(idx)}
            index={idx}
            onMoveUp={() => handleMoveUp(idx)}
            onMoveDown={() => handleMoveDown(idx)}
            canMoveUp={idx > 0}
            canMoveDown={idx < sections.length - 1}
          />
        ))}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
          <select value={newSectionType} onChange={e => setNewSectionType(e.target.value)} style={{ marginRight: 8, padding: 6, borderRadius: 4 }}>
            {SECTION_TYPES.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <button onClick={handleAddSection} style={{ background: '#eee', border: 'none', borderRadius: 4, padding: '8px 18px', cursor: 'pointer', fontWeight: 600 }}>+ Add Section</button>
        </div>
      </div>
      <button onClick={handleSave} disabled={saving || !!error} style={{ padding: '10px 32px', borderRadius: 4, background: '#0078d4', color: '#fff', border: 'none', fontWeight: 600 }}>
        {saving ? 'Saving...' : 'Save'}
      </button>
      {saveMsg && <span style={{ color: 'green', marginLeft: 16 }}>{saveMsg}</span>}
    </div>
  );
}

export default PageEditor; 