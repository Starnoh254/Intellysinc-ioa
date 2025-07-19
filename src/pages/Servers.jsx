import React from 'react';
import './Servers.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const serverProducts = [
  // HP Rack Servers
  { name: 'ProLiant DL180 Gen10', slug: 'proliant-dl180-gen10', image: `${import.meta.env.BASE_URL}images/ID-26NEW_S26-2.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL180 Gen10 is a 2U rack server built to handle demanding workloads with efficiency and flexibility. Ideal for on-premises and hybrid cloud applications, this server supports dual Intel Xeon Scalable processors and offers vast storage configurations, making it a robust choice for growing IT needs.\n\nThe HPE ProLiant DL180 Gen10 server ensures efficient operation with advanced features like dense storage configurations, enhanced management tools, and a 1-year warranty for peace of mind.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Max Processors', value: '2' },
      { label: 'Max Cores', value: '24 per processor' },
      { label: 'Memory Type', value: 'DDR4' },
      { label: 'Max Memory', value: '1TB' },
      { label: 'Remote Management', value: 'HPE iLO5' },
      { label: 'Storage Options', value: 'SAS/SATA HDDs/SSDs' },
      { label: 'Max Storage Capacity', value: '48TB' },
      { label: 'Power Supply', value: 'Dual' }
    ]
  },
  { name: 'ProLiant DL360 Gen11', slug: 'proliant-dl360-gen11', image: `${import.meta.env.BASE_URL}images/ID-27NEW_S27-2.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL360 Gen11 is a high-performance 1U rack server engineered for compute-intensive workloads and virtualized environments. With its compact design, it is perfect for businesses with space constraints, offering exceptional flexibility and scalability for hybrid cloud solutions.\n\nThe HPE ProLiant DL360 Gen11 server is an ideal solution for businesses requiring high performance, flexible storage configurations, and robust remote management capabilities. With its advanced technology, it supports diverse workloads such as EDA, CAD, and VDI, while ensuring efficient operations in a compact design.`,
    specs: [
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Max Processors', value: '2' },
      { label: 'Max Cores', value: '64 per processor' },
      { label: 'Memory Type', value: 'DDR5' },
      { label: 'Max Memory', value: '4TB' },
      { label: 'Supported Drive Types', value: 'SATA, SAS, NVMe' },
      { label: 'RAID Controllers', value: 'HPE MR216i/MR416i/MR408i MR, Smart Array Gen11' },
      { label: 'PCI Slots', value: '3' },
      { label: 'Network Connectivity', value: '2×16 PCIe Gen5 slots, 2 OCP slots' }
    ]
  },
  { name: 'ProLiant DL365 Gen10 Plus', slug: 'proliant-dl365-gen10-plus', image: `${import.meta.env.BASE_URL}images/ID-28NEW_S28-2.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL365 Gen10 Plus is a powerful and compact 1U rack server designed to handle demanding workloads with ease. Built for performance, scalability, and reliability, this server is an excellent solution for virtualisation, HPC, AI, and data-intensive applications.\n\nThis server combines high-density computing with advanced security features in an optimised 1U form factor. It is ideal for enterprises looking to improve efficiency while maintaining a cost-effective infrastructure.`,
    specs: [
      { label: 'Processor', value: '2nd or 3rd Gen AMD EPYC CPU' },
      { label: 'No. of Processor Sockets', value: '2' },
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Max RAM', value: '8TB' },
      { label: 'Maximum Storage Capacity', value: '153.6TB' },
      { label: 'PCI Slots', value: '3 (Gen4)' },
      { label: 'Power Supply', value: 'Dual' },
      { label: 'RAID Levels', value: '0, 1, 5, 6, 10, 50, 60' },
      { label: 'Remote Management', value: 'Yes' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  { name: 'ProLiant DL365 Gen11', slug: 'proliant-dl365-gen11', image: `${import.meta.env.BASE_URL}images/ID-29NEW_S29-1 NEW.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL365 Gen11 is a cutting-edge 1U rack server engineered to meet the demands of high-performance workloads. It combines advanced security, powerful processing capabilities, and scalability to deliver enterprise-class performance, making it an ideal choice for virtualisation, HPC, CAD, EDA, and VDI applications.\n\nThe HPE DL365 Gen11 delivers exceptional performance with next-generation processors and DDR5 technology, making it ideal for complex applications requiring high-speed data transfer and superior memory capacity. With advanced security, efficient power and cooling, and support for future upgrades, this server offers unmatched value.`,
    specs: [
      { label: 'Processor', value: 'AMD EPYC (4th Gen)' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'RAM Type', value: 'DDR5' },
      { label: 'Memory Size', value: '8GB, 16GB, 32GB, 64GB' },
      { label: 'Memory Slots', value: '24' },
      { label: 'Maximum Storage Capacity', value: '153.6TB' },
      { label: 'Hard Drive Options', value: 'NVMe SSD, SAS SSD, SATA SSD' },
      { label: 'Remote Management', value: 'Yes' },
      { label: 'Supported Management', value: 'iLO' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  { name: 'ProLiant DL380 Gen11', slug: 'proliant-dl380-gen11', image: `${import.meta.env.BASE_URL}images/ID-30NEW_S30-1N.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL380 Gen11 Server is a powerful 2U rack server tailored to meet the demands of hybrid cloud workloads and data-intensive applications. It combines scalability, high performance, and advanced security in a feature-rich design, making it ideal for virtualisation, video processing, and enterprise-level operations.\n\nThe DL380 Gen11 Server is engineered to deliver outstanding flexibility and performance. With support for DDR5 memory, PCIe Gen5, and multiple RAID options, this server ensures high-speed processing, enhanced storage capabilities, and maximum uptime. Its iLO 6 integration simplifies server management, while its robust design and advanced security features protect your data and infrastructure.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack Server' },
      { label: 'Processor', value: '4th and 5th Gen Intel Xeon Scalable' },
      { label: 'Max Cores', value: '16 to 60' },
      { label: 'Memory Type', value: 'HPE DDR5 Smart Memory' },
      { label: 'Max RAM', value: '8TB' },
      { label: 'Supported Drive', value: 'SATA, SAS, NVMe' },
      { label: 'RAID Controllers', value: 'HPE Smart Array MR/SR, HBA, SAS' },
      { label: 'Remote Management', value: 'Yes (iLO 6)' },
      { label: 'Warranty', value: '1 year' }
    ]
  },
  { name: 'ProLiant DL385 Gen10 Plus v2', slug: 'proliant-dl385-gen10-plus-v2', image: `${import.meta.env.BASE_URL}images/ID-31NEW_S31-1-removebg-preview.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL385 Gen10 Plus v2 Server is an advanced 2U rack server optimised for memory-intensive applications and secure operations. Featuring 3rd Generation AMD EPYC processors and up to 8TB DDR4 memory, this server is perfect for virtualisation, data analytics, and AI workloads.\n\nWith robust performance and advanced security, the HPE ProLiant DL385 Gen10 Plus v2 Server is an excellent choice for businesses aiming to boost efficiency while ensuring secure operations.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Processor', value: '3rd Gen AMD EPYC' },
      { label: 'Memory Type', value: 'DDR4 HPE SmartMemory' },
      { label: 'Max Memory', value: '8TB' },
      { label: 'Memory Slots', value: '32' },
      { label: 'Max Storage', value: '491TB' },
      { label: 'PCI Slots', value: '4 x16 PCIe 4' },
      { label: 'Remote Management', value: 'iLO 5' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  { name: 'ProLiant DL385 Gen11', slug: 'proliant-dl385-gen11', image: `${import.meta.env.BASE_URL}images/ID-32NEW_s32-1.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL385 Gen11 Server is a powerful, 2U rack-optimized solution engineered to meet the needs of modern data centers. With cutting-edge AMD EPYC processors, enhanced security features, and the ability to support advanced workloads, this server is ideal for AI, ML, Big Data analytics, and other compute-intensive applications.\n\nThis server combines top-tier performance, scalability, and reliability, making it an excellent choice for organisations seeking a robust infrastructure for critical workloads. With advanced features like PCIe Gen5 and state-of-the-art security, the HPE ProLiant DL385 Gen11 Server ensures seamless operations in diverse environments.`,
    specs: [
      { label: 'Form Factor', value: 'Rack Server' },
      { label: 'Processor', value: 'AMD EPYC Processor' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'RAM Type', value: 'DDR5' },
      { label: 'Max RAM', value: '6TB' },
      { label: 'Memory Slots', value: '24' },
      { label: 'PCI Slots', value: '8' },
      { label: 'Power Supply', value: 'Dual' },
      { label: 'Remote Management', value: 'Yes, via iLO 5' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  { name: 'ProLiant DL560 Gen10', slug: 'proliant-dl560-gen10', image: `${import.meta.env.BASE_URL}images/ID-33NEW_33-2.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL560 Gen10 Server is a powerful and scalable 2U rack server designed to meet the needs of demanding enterprise workloads. Featuring support for Intel Xeon Scalable processors, this server delivers exceptional performance, reliability, and efficiency for virtualization, data analytics, and mission-critical applications.\n\nWith its advanced virtualization capabilities, scalable design, and energy-efficient features, the HPE ProLiant DL560 Gen10 Server is an excellent choice for businesses aiming to optimise their IT infrastructure. Ideal for VMware ESXi, Windows Server, and Linux environments, this server offers a cost-effective solution for growing business demands.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Processor', value: 'Intel Xeon Scalable Processors' },
      { label: 'Processor Sockets', value: '4' },
      { label: 'Memory Type', value: 'DDR4' },
      { label: 'Max Memory', value: '6TB' },
      { label: 'Memory Slots', value: '48' },
      { label: 'PCI Slots', value: '8 x16 PCIe' },
      { label: 'Hard Drive Options', value: 'SAS/SATA/NVMe' },
      { label: 'Power Supply', value: '4 HPE Flexible Slot Power Supplies' },
      { label: 'Remote Management', value: 'iLO 5' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  { name: 'ProLiant DL580 G10', slug: 'proliant-dl580-g10', image: `${import.meta.env.BASE_URL}images/ID-34NEW_S34-1.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL580 Gen10 is a high-performance, four-socket 4U rack server designed to handle critical workloads with exceptional processing power, advanced memory capacity, and enhanced data protection. Its intelligent management features make it a perfect choice for virtualization, database applications, and high-demand workflows in businesses of all sizes.\n\nThe HPE ProLiant DL580 Gen10 server is engineered for reliability, scalability, and efficiency. With its large memory capacity, robust processor options, and intelligent management capabilities, this server is well-suited for handling virtualization, large databases, and mission-critical applications with ease. Perfect for enterprises looking for a powerful and flexible server solution.`,
    specs: [
      { label: 'Form Factor', value: '4U Rack' },
      { label: 'Processor', value: 'Intel Xeon Scalable Processor' },
      { label: 'Max RAM', value: '6TB' },
      { label: 'Memory Type', value: 'DDR4' },
      { label: 'Power Supply', value: '1600W' }
    ]
  },
  { name: 'ProLiant DL360 Plus', slug: 'proliant-dl360-plus', image: `${import.meta.env.BASE_URL}images/ID-35NEW_35-2.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL360 Gen10 Plus is a compact yet robust 1U rack server engineered to handle data-intensive workloads efficiently. It is equipped with advanced processing power, expansive memory capacity, and reliable storage options, making it an excellent choice for businesses seeking scalable performance within a compact form factor.\n\nThe HPE ProLiant DL360 Gen10 Plus server combines high performance, energy efficiency, and security features in a compact design. Its scalable configuration options make it a reliable solution for virtualization, database management, and compute-heavy workloads.`,
    specs: [
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor', value: 'Up to 2x 3rd Gen Intel Xeon Scalable CPUs' },
      { label: 'Max RAM', value: '6TB DDR4' },
      { label: 'Memory Slots', value: '32' },
      { label: 'Power Supply', value: 'HPE 500W Flex Slot Platinum Hot Plug' },
      { label: 'PCI Slots', value: '3 PCIe Gen4' },
      { label: 'Internal RAID Controller', value: 'HPE Smart Array E208i-a SR Gen10' }
    ]
  },
  { name: 'DL380 Gen10 Plus', slug: 'dl380-gen10-plus', image: `${import.meta.env.BASE_URL}images/ID-36NEW_S36-2N.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL380 Gen10 Plus is a versatile and budget-friendly 2U rack server tailored to handle compute-intensive workloads efficiently. With its robust processing capabilities, large memory capacity, and massive storage expandability, it offers reliable performance for a range of business applications.\n\nThe HPE DL380 Gen10 Plus server delivers superior performance, energy efficiency, and reliability in a compact 2U form factor. Ideal for virtualization, database hosting, and storage-heavy applications, it ensures optimal scalability and flexibility for growing business needs.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Processor', value: '3rd Gen Intel Xeon Scalable Processor' },
      { label: 'Max RAM', value: '3TB DDR4' },
      { label: 'Memory Slots', value: '32' },
      { label: 'Max Storage', value: 'Up to 581.4TB' },
      { label: 'Power Supply', value: 'HPE 1600W Flex Slot Platinum Hot Plug' },
      { label: 'PCI Slots', value: '6 PCIe Gen4' },
      { label: 'RAID Controller', value: 'HPE Smart Array P408i-a SR Gen10 Controller' },
      { label: 'Core Options', value: '8, 10, 12, 16, 18, 20, 22, 24' }
    ]
  },
  { name: 'ProLiant DL560 Gen9', slug: 'proliant-dl560-gen9', image: `${import.meta.env.BASE_URL}images/ID-37NEW_S37-2.jpg`, type: 'HP Rack Server',
    overview: `The HPE ProLiant DL560 Gen9 is a powerful, dense, and scalable 2U rack server designed for businesses looking to optimise their IT infrastructure. With support for advanced Intel Xeon processors, high memory capacity, and efficient resource management, this server is ideal for compute-intensive applications and virtualized environments. Its compact design and robust performance make it a versatile solution for modern data centres.\n\nThe HPE ProLiant DL560 Gen9 is engineered to deliver maximum performance, scalability, and reliability in a compact design. Whether you're managing complex workloads, deploying virtual environments, or scaling your business IT infrastructure, this server is the perfect fit for high-efficiency operations.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Processor', value: 'Intel® Xeon® E5-4600 v4' },
      { label: 'Max RAM', value: '3TB DDR4' },
      { label: 'RAM Slots', value: '48' },
      { label: 'Processor Sockets', value: '4' },
      { label: 'PCI Slots', value: '7' }
    ]
  },
  { name: 'ProLiant DL160 Gen9', slug: 'proliant-dl160-gen9', image: `${import.meta.env.BASE_URL}images/ID-38NEW_S38-1N.jpg`, type: 'HP Rack Server',
    overview: `The HP ProLiant DL160 Gen9 is a compact 1U rack server, engineered to meet the demands of cloud computing, big data applications, and data-intensive workloads. Designed for performance and efficiency, it offers dual Intel Xeon processors, robust DDR4 memory support, and scalable storage options, making it an excellent choice for growing businesses.\n\nThe HP ProLiant DL160 Gen9 is an ideal solution for businesses seeking high performance in a compact and energy-efficient design. Its advanced features, coupled with iLO management and RAID capabilities, ensure seamless operations for cloud computing, virtualization, and demanding workloads.`,
    specs: [
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor', value: 'Dual Intel® Xeon® E5-2600 v3 Series' },
      { label: 'Max RAM', value: '512GB DDR4' },
      { label: 'RAM Slots', value: '16' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Power Supply', value: 'HPE 900W Redundant Power Supply' }
    ]
  },
  { name: 'ProLiant DL180 Gen9', slug: 'proliant-dl180-gen9', image: `${import.meta.env.BASE_URL}images/ID-39NEW_39-2.jpg`, type: 'HP Rack Server',
    overview: `The HP ProLiant DL180 Gen9 server is a cost-effective, 2U rack server tailored for data storage applications and diverse workloads. Equipped with the powerful Intel Xeon E5-2600 processor family, it offers a balance of performance, scalability, and reliability. Designed for budget-conscious businesses, this server is ideal for SMBs seeking advanced technology without overspending.\n\nThe HP ProLiant DL180 Gen9 server combines affordability, reliability, and scalability, making it a perfect choice for data storage applications and SMBs. With its 2U rack design, advanced RAID capabilities, and remote management features, this server delivers excellent value for businesses looking to streamline their IT infrastructure.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Processor', value: 'Dual Intel® Xeon® E5-2600 v3 Series' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Max RAM', value: '512GB DDR4' },
      { label: 'RAM Slots', value: '16' },
      { label: 'Max Storage', value: '6TB' }
    ]
  },
  { name: 'ProLiant DL60 Gen9', slug: 'proliant-dl60-gen9', image: `${import.meta.env.BASE_URL}images/ID-40NEW_40-1.jpg`, type: 'HP Rack Server',
    overview: `The HP ProLiant DL60 Gen9 Server is an affordable, high-performance solution designed specifically for SMBs. This compact 1U rack server offers scalable storage options and efficient performance to handle diverse business applications, including messaging, file sharing, collaboration, and cloud workloads. Ideal for start-ups and growing businesses, the DL60 Gen9 provides the right balance of features and cost-effectiveness.\n\nThe HP ProLiant DL60 Gen9 Server is an excellent choice for SMBs seeking a low-cost yet reliable server to power their business applications. Its robust performance, compact design, and simplified management make it a dependable option for small and medium-sized businesses aiming to optimise their IT infrastructure efficiently.`,
    specs: [
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor', value: 'Intel Xeon Processors' },
      { label: 'Storage Options', value: 'Scalable' },
      { label: 'Memory Capacity', value: 'Good Memory Capacity' },
      { label: 'Management Interface', value: 'Standard iLO4' }
    ]
  },
  // HP Blade Servers
  { name: 'Apollo R2600 Gen10 Blade', slug: 'apollo-r2600-gen10-blade', image: `${import.meta.env.BASE_URL}images/ID-41NEW_41-2.jpg`, type: 'HP Blade Server' },
  // HP Tower Servers
  { name: 'ProLiant ML350 Gen11', slug: 'proliant-ml350-gen11', image: `${import.meta.env.BASE_URL}images/ID-42NEW_42-1N.jpg`, type: 'HP Tower Server' },
  { name: 'ProLiant ML150 Gen9', slug: 'proliant-ml150-gen9', image: `${import.meta.env.BASE_URL}images/ID-43NEW_43-2N.jpg`, type: 'HP Tower Server' },
  { name: 'ProLiant ML350 Gen9', slug: 'proliant-ml350-gen9', image: `${import.meta.env.BASE_URL}images/ID-44NEW_44.jpg`, type: 'HP Tower Server' },
  { name: 'ProLiant ML30 Gen10', slug: 'proliant-ml30-gen10', image: `${import.meta.env.BASE_URL}images/ID-45NEW_45-1new.jpg`, type: 'HP Tower Server' },
  // Dell Rack Servers
  { name: 'PowerEdge R620 (10SFF)', slug: 'poweredge-r620-10sff', image: `${import.meta.env.BASE_URL}images/ID-46NEW_46-3.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R830', slug: 'poweredge-r830', image: `${import.meta.env.BASE_URL}images/ID-47NEW_47-1n.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R720', slug: 'poweredge-r720', image: `${import.meta.env.BASE_URL}images/ID-48NEW_48-1n.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R710 With 128GB RAM', slug: 'poweredge-r710-128gb', image: `${import.meta.env.BASE_URL}images/ID-49NEW_49-2.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R820 (8SFF)', slug: 'poweredge-r820-8sff', image: `${import.meta.env.BASE_URL}images/ID-50NEW_50-2.jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R720 (8SFF)', slug: 'poweredge-r720-8sff', image: `${import.meta.env.BASE_URL}images/ID-26NEW_S26-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R210', slug: 'poweredge-r210', image: `${import.meta.env.BASE_URL}images/ID-27NEW_S27-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R230', slug: 'poweredge-r230', image: `${import.meta.env.BASE_URL}images/ID-28NEW_S28-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R330', slug: 'poweredge-r330', image: `${import.meta.env.BASE_URL}images/ID-29NEW_S29-1 NEW (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge T110 II', slug: 'poweredge-t110-ii', image: `${import.meta.env.BASE_URL}images/ID-30NEW_S30-1N (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R210 II', slug: 'poweredge-r210-ii', image: `${import.meta.env.BASE_URL}images/ID-31NEW_S31-1-removebg-preview (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R220', slug: 'poweredge-r220', image: `${import.meta.env.BASE_URL}images/ID-32NEW_s32-1 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R320', slug: 'poweredge-r320', image: `${import.meta.env.BASE_URL}images/ID-33NEW_33-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R410', slug: 'poweredge-r410', image: `${import.meta.env.BASE_URL}images/ID-34NEW_S34-1 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R530', slug: 'poweredge-r530', image: `${import.meta.env.BASE_URL}images/ID-35NEW_35-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R910', slug: 'poweredge-r910', image: `${import.meta.env.BASE_URL}images/ID-36NEW_S36-2N (1).jpg`, type: 'Dell Rack Server' },
  { name: 'R930', slug: 'r930', image: `${import.meta.env.BASE_URL}images/ID-37NEW_S37-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge 2950', slug: 'poweredge-2950', image: `${import.meta.env.BASE_URL}images/ID-38NEW_S38-1N (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge 1950', slug: 'poweredge-1950', image: `${import.meta.env.BASE_URL}images/ID-39NEW_39-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R730xd', slug: 'poweredge-r730xd', image: `${import.meta.env.BASE_URL}images/ID-40NEW_40-1 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R620', slug: 'poweredge-r620', image: `${import.meta.env.BASE_URL}images/ID-41NEW_41-2 (1).jpg`, type: 'Dell Rack Server' },
  { name: 'PowerEdge R810', slug: 'poweredge-r810', image: `${import.meta.env.BASE_URL}images/ID-42NEW_42-1N (1).jpg`, type: 'Dell Rack Server' },
  // Dell Blade Servers
  { name: 'M620 Blade', slug: 'm620-blade', image: `${import.meta.env.BASE_URL}images/ID-43NEW_43-2N (1).jpg`, type: 'Dell Blade Server' },
  { name: 'MX7000 Enclosure', slug: 'mx7000-enclosure', image: `${import.meta.env.BASE_URL}images/ID-44NEW_44 (1).jpg`, type: 'Dell Blade Server' },
  { name: 'PowerEdge M1000e Blade Enclosure', slug: 'poweredge-m1000e-blade-enclosure', image: `${import.meta.env.BASE_URL}images/ID-45NEW_45-1new (1).jpg`, type: 'Dell Blade Server' },
  { name: 'M610 Blade', slug: 'm610-blade', image: `${import.meta.env.BASE_URL}images/ID-46NEW_46-3 (1).jpg`, type: 'Dell Blade Server' },
  { name: 'M630 Blade', slug: 'm630-blade', image: `${import.meta.env.BASE_URL}images/ID-47NEW_47-1n (1).jpg`, type: 'Dell Blade Server' },
  // Dell Tower Servers
  { name: 'PowerEdge T310', slug: 'poweredge-t310', image: `${import.meta.env.BASE_URL}images/ID-48NEW_48-1n (1).jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T320', slug: 'poweredge-t320', image: `${import.meta.env.BASE_URL}images/ID-49NEW_49-2 (1).jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T330', slug: 'poweredge-t330', image: `${import.meta.env.BASE_URL}images/ID-50NEW_50-2 (1).jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T430', slug: 'poweredge-t430', image: `${import.meta.env.BASE_URL}images/ID-51NEW_51-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T610', slug: 'poweredge-t610', image: `${import.meta.env.BASE_URL}images/ID-52NEW_52-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T110', slug: 'poweredge-t110', image: `${import.meta.env.BASE_URL}images/ID-53NEW_53-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T130', slug: 'poweredge-t130', image: `${import.meta.env.BASE_URL}images/ID-54NEW_54-2.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T20 Mini', slug: 'poweredge-t20-mini', image: `${import.meta.env.BASE_URL}images/ID-55NEW_55-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T2900', slug: 'poweredge-t2900', image: `${import.meta.env.BASE_URL}images/ID-56NEW_56-2N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T410', slug: 'poweredge-t410', image: `${import.meta.env.BASE_URL}images/ID-57NEW_57-3N.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T630', slug: 'poweredge-t630', image: `${import.meta.env.BASE_URL}images/ID-58NEW_58-2.jpg`, type: 'Dell Tower Server' },
  { name: 'PowerEdge T420', slug: 'poweredge-t420', image: `${import.meta.env.BASE_URL}images/ID-59NEW_59-2.jpg`, type: 'Dell Tower Server' },
  { name: 'T30 Mini', slug: 't30-mini', image: `${import.meta.env.BASE_URL}images/ID-60NEW_60-3.jpg`, type: 'Dell Tower Server' },
];

export { serverProducts };

const Servers = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = serverProducts.find(p => p.slug === productSlug);
    if (!product) {
      return <div style={{ padding: 40 }}><h2>Product Not Found</h2><button onClick={() => navigate(-1)}>Go Back</button></div>;
    }
    return <ProductInfo product={product} />;
  }

  return (
    <div className="product-page-container">
      <aside className="sidebar">
        <h2>Product Categories</h2>
        <ul>
          <li><Link to="/avision-scanners">Avision Scanners</Link></li>
          <li><Link to="/brother-scanners">Brother Scanners</Link></li>
          <li><Link to="/canon-scanners">Canon Scanners</Link></li>
          <li><Link to="/fujitsu-ricoh-scanners">Fujitsu-RICOH Scanners</Link></li>
          <li><Link to="/kodak-scanners">Kodak Scanners</Link></li>
          <li><Link to="/microfilm-scanners">Microfilm Scanners</Link></li>
          <li><Link to="/scanning-software">Scanning Software</Link></li>
          <li className="active">Servers</li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Servers</h1>
        <div className="product-grid">
          {serverProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/servers/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Servers; 