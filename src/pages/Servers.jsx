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
  { name: 'Apollo R2600 Gen10 Blade', slug: 'apollo-r2600-gen10-blade', image: `${import.meta.env.BASE_URL}images/ID-41NEW_41-2.jpg`, type: 'HP Blade Server',
    overview: `The HPE Apollo R2600 Gen10 Blade Server is a high-performing, compact, and scalable solution ideal for small and medium businesses or high-performance computing (HPC) environments. Its 2U rack-mountable design and flexible configuration allow for efficient data center operations, offering shared storage and advanced processing capabilities.\n\nThe HPE Apollo R2600 Gen10 is designed for businesses that demand scalable performance and compact efficiency. Perfect for HPC workloads or small-to-medium-sized enterprises, this server ensures operational excellence, flexibility, and cost-effectiveness.`,
    specs: [
      { label: 'Form Factor', value: 'Rack-mountable – 2U' },
      { label: 'Max Supported Memory', value: '128GB' },
      { label: 'DIMM Slots', value: '64' },
      { label: 'Processor', value: 'Intel Xeon Scalable Processor' },
      { label: 'Supported GPUs', value: 'NVIDIA, AMD, Intel (up to 2 per server)' }
    ]
  },
  // HP Tower Servers
  { name: 'ProLiant ML350 Gen11', slug: 'proliant-ml350-gen11', image: `${import.meta.env.BASE_URL}images/ID-42NEW_42-1N.jpg`, type: 'HP Tower Server',
    overview: `The HP ProLiant ML350 Gen11 Server is a robust and versatile 5U tower server designed for enterprise-grade applications and datacenters. Featuring dual Intel Xeon E5-2600 V3/V4 processors and a high memory capacity, this server provides unmatched performance and reliability for critical workloads.\n\nThe HP ProLiant ML350 Gen11 Server combines powerful performance, scalability, and reliability, making it the perfect solution for datacenters, enterprise-level workloads, and growing businesses.`,
    specs: [
      { label: 'Brand', value: 'HP' },
      { label: 'Form Factor', value: '5U Tower' },
      { label: 'Processor', value: 'Dual Intel Xeon E5-2600 V3/V4' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Memory Size', value: 'Up to 768GB' },
      { label: 'Storage Capacity', value: 'Up to 288TB' },
      { label: 'Internal RAID Controllers', value: 'RAID 0, RAID 1, RAID 5' },
      { label: 'PCI Slots', value: '9' }
    ]
  },
  { name: 'ProLiant ML150 Gen9', slug: 'proliant-ml150-gen9', image: `${import.meta.env.BASE_URL}images/ID-43NEW_43-2N.jpg`, type: 'HP Tower Server',
    overview: `The HP ProLiant ML150 Gen9 Tower Server is a powerful and scalable solution, designed to meet the diverse needs of growing businesses. Equipped with Intel Xeon E5-2600 V4 processors, this server offers exceptional performance and expandability, making it ideal for handling a wide range of workloads efficiently.\n\nThe HP ProLiant ML150 Gen9 is an excellent choice for small to medium businesses (SMBs) and enterprise organizations. With its powerful configuration options and value-added services such as free tech support, installation assistance, and a three-year warranty, this server ensures an efficient and cost-effective IT infrastructure for your business needs.`,
    specs: [
      { label: 'Processor', value: 'Intel Xeon E5-2600 V4 (dual processors supported)' },
      { label: 'Memory', value: 'High-capacity RAM configurations available' },
      { label: 'Storage', value: 'Scalable and flexible storage options' },
      { label: 'Expansion Slots', value: 'Yes, to accommodate growth' },
      { label: 'Warranty', value: '1 year' }
    ]
  },
  { name: 'ProLiant ML350 Gen9', slug: 'proliant-ml350-gen9', image: `${import.meta.env.BASE_URL}images/ID-44NEW_44.jpg`, type: 'HP Tower Server',
    overview: `The HP ProLiant ML350 Gen9 Server is a robust and versatile 5U tower server designed for enterprise-grade applications and datacenters. Featuring dual Intel Xeon E5-2600 V3/V4 processors and a high memory capacity, this server provides unmatched performance and reliability for critical workloads.\n\nThe HP ProLiant ML350 Gen9 Server combines powerful performance, scalability, and reliability, making it the perfect solution for datacenters, enterprise-level workloads, and growing businesses. With free worldwide shipping, a price match promise, and additional configuration options, this server ensures an excellent value for your investment.`,
    specs: [
      { label: 'Brand', value: 'HP' },
      { label: 'Form Factor', value: '5U Tower' },
      { label: 'Processor', value: 'Dual Intel Xeon E5-2600 V3/V4' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Memory Size', value: 'Up to 768GB' },
      { label: 'Storage Capacity', value: 'Up to 288TB' },
      { label: 'Internal RAID Controllers', value: 'RAID 0, RAID 1, RAID 5' },
      { label: 'PCI Slots', value: '9' }
    ]
  },
  { name: 'ProLiant ML30 Gen10', slug: 'proliant-ml30-gen10', image: `${import.meta.env.BASE_URL}images/ID-45NEW_45-1new.jpg`, type: 'HP Tower Server',
    overview: `The HPE ProLiant ML30 Gen10 Tower Server is an ideal solution for small, remote, and branch offices seeking reliable performance, robust security, and cost-effective on-premise or hybrid cloud solutions. Equipped with multi-core Intel Xeon processors and expandable DDR4 memory, this server delivers exceptional speed, efficiency, and flexibility to handle business-critical tasks.\n\nThe HPE ProLiant ML30 Gen10 Tower Server offers high performance, security, and scalability at a competitive price. With features like ISV certification, extensive quality testing, a manufacturer warranty, and fast delivery, it is a perfect investment for small and growing businesses aiming for operational efficiency and data security.`,
    specs: [
      { label: 'Brand', value: 'HPE' },
      { label: 'Processor', value: 'Intel Xeon Multi-Core' },
      { label: 'Memory', value: 'Expandable DDR4' },
      { label: 'Storage', value: 'Reliable internal storage options' },
      { label: 'RAID Options', value: 'Multiple RAID configurations supported' },
      { label: 'Use Case', value: 'Small and remote offices, branch locations, hybrid cloud solutions' }
    ]
  },
  // Dell Rack Servers
  { name: 'PowerEdge R620', slug: 'poweredge-r620', image: `${import.meta.env.BASE_URL}images/ID-41NEW_41-2 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R620 Server Bezel is designed to provide an essential front cover for your server, enhancing its aesthetic and protecting internal components from dust and other potential hazards. Compatible with a range of Dell PowerEdge servers, this bezel ensures a seamless fit while maintaining functionality.\n\nThis bezel is perfect for maintaining the clean appearance of your server setup, while providing an added layer of protection for your equipment.`,
    specs: [
      { label: 'Device Type', value: 'Server Bezel' },
      { label: 'Server Size', value: '1U' },
      { label: 'Compatible Models', value: 'Dell PowerEdge R620, R430, R420, R340, R330, R320, R230 Servers' }
    ]
  },
  { name: 'PowerEdge R810', slug: 'poweredge-r810', image: `${import.meta.env.BASE_URL}images/ID-42NEW_42-1N (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R810 is designed for high-performance virtualization and demanding workloads. With powerful Intel Xeon CPUs and ample memory capacity, this server is perfect for businesses that require reliability and scalability.\n\nThis refurbished server offers outstanding performance and scalability at an affordable price. It's an excellent solution for businesses looking to scale their operations.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Max RAM', value: '1.5TB' },
      { label: 'RAM Type', value: 'DDR3' },
      { label: 'Processor', value: 'Intel Xeon E5-4600 product family' },
      { label: 'Processor Sockets', value: '4' },
      { label: 'Max Storage', value: '6TB' },
      { label: 'PCI Slots', value: '7' }
    ]
  },
  { name: 'PowerEdge R720 (8SFF)', slug: 'poweredge-r720-8sff', image: `${import.meta.env.BASE_URL}images/ID-26NEW_S26-2 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R720 server is a cost-effective and flexible solution for businesses, start-ups, and short-term projects requiring high-performance computing. Ideal for application testing and demanding workloads, this server provides the perfect balance of power and adaptability without the need for a long-term investment.\n\nWhy Choose Dell PowerEdge R720 Rental?\n• Perfect for Short-Term Projects: Avoid upfront costs by renting servers only for the duration you need.\n• Application Testing: Seamlessly test applications with high performance and reliability.\n• Support Services Included: Free installation support and expert technical assistance.\nContact us today to explore flexible rental plans and configurations tailored to your project requirements. Enjoy reliable server performance at a fraction of the cost with our Dell PowerEdge R720.`,
    specs: [
      { label: 'Processor', value: 'High-performance Intel Xeon processors' },
      { label: 'Memory Options', value: 'Configurable to handle demanding tasks' },
      { label: 'Storage Options', value: 'Flexible configurations for data needs' },
      { label: 'Applications Supported', value: 'Virtual systems, application testing' },
      { label: 'Power Efficiency', value: 'Reduces heating and cooling costs' }
    ]
  },
  { name: 'PowerEdge R210', slug: 'poweredge-r210', image: `${import.meta.env.BASE_URL}images/ID-27NEW_S27-2 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R210 is an entry-level 1U rack server, designed to meet the needs of small offices and businesses requiring compact and cost-effective server solutions. With support for various Intel processors, scalable memory, and multiple storage options, this server is ideal for basic IT infrastructure, file sharing, and small-scale applications.\n\nThe Dell PowerEdge R210 is a compact and reliable server solution for small businesses looking for affordability and essential server features. With its flexibility, excellent management capabilities, and a 1-year warranty, it is a dependable choice for basic IT operations and small-scale deployments.`,
    specs: [
      { label: 'Brand', value: 'Dell' },
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor', value: 'Intel Celeron, Pentium, i3 500 series, Xeon 3400 series' },
      { label: 'Processor Sockets', value: '1' },
      { label: 'RAM Type', value: 'DDR3' },
      { label: 'Memory Size', value: '1GB, 2GB, 4GB' },
      { label: 'Max RAM', value: '16GB' },
      { label: 'Memory Slots', value: '4' },
      { label: 'Max Storage', value: '2TB' },
      { label: 'Hard Drive Bays', value: 'Up to 2 x 2.5" or 2 x 3.5" drives' },
      { label: 'Hard Drive Options', value: 'SAS HDD, SAS SSD, SATA HDD, SATA SSD' },
      { label: 'PCI Slots', value: '1' },
      { label: 'RAID Controllers', value: 'Internal: PERC H200; External: PERC H800' },
      { label: 'Power Supply', value: 'Single' },
      { label: 'Warranty', value: '1 Year' },
      { label: 'Remote Management', value: 'iDRAC6 Enterprise' }
    ]
  },
  { name: 'PowerEdge R230', slug: 'poweredge-r230', image: `${import.meta.env.BASE_URL}images/ID-28NEW_S28-2 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R230 Rack Server is an affordable and efficient 1U single-socket server tailored for small and medium-sized businesses (SMBs). Designed to accelerate application performance, it features advanced DDR4 memory, scalable storage, and remote management capabilities, making it a reliable choice for growing IT infrastructures.\n\nThe Dell PowerEdge R230 Rack Server offers SMBs a cost-effective solution for enhancing application performance while maintaining flexibility for future growth. Its combination of powerful processing, scalable storage, and simplified management makes it a valuable asset for any small to medium-sized IT environment.`,
    specs: [
      { label: 'Brand', value: 'Dell' },
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor', value: 'Intel® Xeon® E3-1200 v6 product family' },
      { label: 'Processor Sockets', value: '1' },
      { label: 'Memory Size', value: 'Up to 64GB DDR4' },
      { label: 'Memory Slots', value: '4' },
      { label: 'Hard Drive Bays', value: 'Up to 4 x 3.5" drives' },
      { label: 'PCI Slots', value: '2' }
    ]
  },
  { name: 'PowerEdge R330', slug: 'poweredge-r330', image: `${import.meta.env.BASE_URL}images/ID-29NEW_S29-1 NEW (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R330 Rack Server is a robust and efficient 1U server designed for small to medium businesses (SMBs) and remote or branch offices. Equipped with an Intel Xeon E3-1200 v6 processor and scalable DDR4 memory, it provides the performance, storage capacity, and management features necessary for a wide range of IT applications.\n\nThe Dell PowerEdge R330 Rack Server delivers excellent performance, reliability, and scalability for businesses looking to optimize their IT infrastructure. Its compact size, combined with advanced management tools and flexible storage options, makes it a versatile and valuable asset for any IT environment.`,
    specs: [
      { label: 'Brand', value: 'Dell' },
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor', value: 'Intel Xeon E3-1200 v6 series' },
      { label: 'Processor Sockets', value: '1' },
      { label: 'RAM Type', value: 'DDR4' },
      { label: 'Max RAM', value: '64GB' },
      { label: 'Memory Slots', value: '4 DIMMs' },
      { label: 'Max Storage', value: '16TB' },
      { label: 'PCI Slots', value: '2' }
    ]
  },
  { name: 'PowerEdge T110 II', slug: 'poweredge-t110-ii', image: `${import.meta.env.BASE_URL}images/ID-30NEW_S30-1N (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge T110 II is a powerful and reliable tower server designed to deliver high performance and efficiency for small to medium-sized businesses. With its robust hardware and support for multiple processors, this server ensures seamless data processing, high throughput, and exceptional uptime, making it an ideal choice for demanding workloads.\n\nThe Dell PowerEdge T110 II is engineered for businesses needing reliable performance at a budget-friendly price. It also offers excellent scalability for future growth, making it a valuable investment for IT infrastructure. This server is an excellent choice for performance-driven environments.`,
    specs: [
      { label: 'Form Factor', value: 'Tower' },
      { label: 'Processor Support', value: 'Single or Dual Processor' },
      { label: 'Storage Options', value: 'Multiple bays for HDD/SSD support' },
      { label: 'Memory Capacity', value: 'Up to 32GB DDR3 ECC RAM' },
      { label: 'RAID Support', value: 'RAID 0, 1, 5, 10' },
      { label: 'Network Connectivity', value: 'Dual Gigabit Ethernet Ports' },
      { label: 'Power Supply', value: 'Energy-efficient PSU' }
    ]
  },
  { name: 'PowerEdge R210 II', slug: 'poweredge-r210-ii', image: `${import.meta.env.BASE_URL}images/ID-31NEW_S31-1-removebg-preview (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R210 II is a compact and cost-effective 1U rack server, specifically designed for small businesses, remote offices, and environments with space constraints. Despite its small size, this server delivers powerful performance, efficient data management, and flexible configuration options to meet your business needs.\n\nBuilt for reliability and flexibility, the Dell PowerEdge R210 II Rack Server is the perfect choice for businesses looking for affordable and efficient server solutions.`,
    specs: [
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor Series', value: 'Intel Xeon E2-1200' },
      { label: 'Memory Type', value: 'DDR3' },
      { label: 'Data Protection', value: 'RAID Support' },
      { label: 'Use Case', value: 'Small businesses, remote offices' }
    ]
  },
  { name: 'PowerEdge R220', slug: 'poweredge-r220', image: `${import.meta.env.BASE_URL}images/ID-32NEW_s32-1 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R220 is a compact and efficient 1U rack server designed for businesses that require reliable performance for web hosting, video streaming, and general-purpose applications. With its robust Intel Xeon processors, scalable memory, and simplified management tools, this server is ideal for environments with limited space but high-performance demands.\n\nThe Dell PowerEdge R220 is a versatile solution for small to medium-sized businesses seeking reliable server performance in a compact package.`,
    specs: [
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor Series', value: 'Intel Xeon E3-1200 v3' },
      { label: 'Processor Sockets', value: '1' },
      { label: 'Memory Size', value: '32GB' },
      { label: 'Memory Slots', value: '4' },
      { label: 'Hard Drive Bays', value: 'Up to 2 x 3.5" Drives' },
      { label: 'PCI Slots', value: '1' }
    ]
  },
  { name: 'PowerEdge R320', slug: 'poweredge-r320', image: `${import.meta.env.BASE_URL}images/ID-33NEW_33-2 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R320 is a powerful and affordable 1U rack server designed for data centre usage and virtualized environments. Engineered for efficiency and reliability, it features robust processors, scalable memory, and advanced remote management tools, making it an ideal choice for businesses aiming to optimise performance while staying within budget.\n\nThe Dell PowerEdge R320 rack server delivers the perfect balance of performance, reliability, and affordability for small to medium-sized businesses.`,
    specs: [
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor Series', value: 'Intel Xeon E5-2400' },
      { label: 'Processor Sockets', value: '1' },
      { label: 'Memory Size', value: '192GB' },
      { label: 'Memory Slots', value: '6' },
      { label: 'PCI Slots', value: '2' },
      { label: 'Power Supply', value: '550W Redundant' }
    ]
  },
  { name: 'PowerEdge R410', slug: 'poweredge-r410', image: `${import.meta.env.BASE_URL}images/ID-34NEW_S34-1 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R410 Server Bezel is a robust and reliable front bezel designed to protect and enhance the appearance of your server. Built to fit seamlessly with a range of 1U Dell PowerEdge servers, this bezel ensures durability, security, and style.\n\nEnsure your Dell PowerEdge server is protected and looks professional with this high-quality front bezel.`,
    specs: [
      { label: 'Device Type', value: 'Server Bezel' },
      { label: 'Server Size', value: '1U' },
      { label: 'Compatible Models', value: 'R415, R410, R310, R220, R210' },
      { label: 'Warranty', value: '1 year' }
    ]
  },
  { name: 'PowerEdge R530', slug: 'poweredge-r530', image: `${import.meta.env.BASE_URL}images/ID-35NEW_35-2 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R530 is a robust 2U rack server built for demanding workloads, virtualization, and enterprise-level applications. Designed with scalability and performance in mind, it features powerful Intel Xeon processors, expandable memory, and comprehensive storage options, making it suitable for businesses of all sizes.\n\nThe Dell PowerEdge R530 is an energy-efficient, scalable, and virtualization-ready solution for data centres and enterprises. With its high memory capacity, expansive storage, and robust remote management capabilities, it provides exceptional performance while adapting to your growing workload needs.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Processor', value: 'Intel Xeon E5-2600 v4 Product Family' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Memory Slots', value: '12' },
      { label: 'Max RAM', value: '384GB DDR4' },
      { label: 'Max Storage', value: '96TB' },
      { label: 'Hard Drive Bays', value: 'Up to 8 x 3.5" Drives' },
      { label: 'RAID Controllers', value: 'PERC H330, H730, H730P, S130 (Internal), H830 (External)' },
      { label: 'Remote Management', value: 'iDRAC8 Enterprise, Express with Lifecycle Controller' }
    ]
  },
  { name: 'PowerEdge R910', slug: 'poweredge-r910', image: `${import.meta.env.BASE_URL}images/ID-36NEW_S36-2N (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge R910 Rack Server is a robust, scalable four-socket server designed to meet the demands of virtualization, large-scale computing, and intensive workloads. With a high processing power and ample memory expansion capabilities, it offers excellent performance and reliability for enterprises looking to scale their operations.\n\nThe Dell PowerEdge R910 is a powerful, versatile solution for businesses requiring exceptional performance, scalability, and reliability. Whether for virtualization, big data applications, or enterprise-level computing, this server delivers the necessary infrastructure to support demanding workloads while ensuring easy management and maintenance.`,
    specs: [
      { label: 'Form Factor', value: '4U Rack' },
      { label: 'Processor Options', value: 'Intel Xeon 7500 Series processors' },
      { label: 'Processor Sockets', value: '4' },
      { label: 'Memory Size', value: 'Up to 2TB (32 DIMM slots)' },
      { label: 'Hard Drive Bays', value: 'Up to 16 x 2.5" Drives' },
      { label: 'Max Storage', value: '16TB' },
      { label: 'PCI Slots', value: '10' },
      { label: 'RAID Support', value: 'Multiple RAID options' },
      { label: 'Remote Management', value: 'Yes, with remote management tools' }
    ]
  },
  { name: 'R930', slug: 'r930', image: `${import.meta.env.BASE_URL}images/ID-37NEW_S37-2 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell R930 is a powerful 4U rack server designed for extreme virtualization and enterprise applications. With its robust processing capabilities, enormous RAM capacity, and leading internal storage, the R930 ensures unmatched performance in demanding environments. This server is perfect for large-scale applications, high-performance computing, and big data processing.\n\nThe Dell R930 Rack Server offers exceptional value for enterprises looking to scale their operations, handle large workloads, and ensure high availability, all while benefiting from industry-leading features and support.`,
    specs: [
      { label: 'Form Factor', value: '4U Rack' },
      { label: 'Processor', value: 'Intel Xeon E7-4800 v4, Intel Xeon E7-8800 v4' },
      { label: 'Processor Sockets', value: '4' },
      { label: 'Memory Slots', value: '96' },
      { label: 'Max RAM', value: '12TB DDR4' },
      { label: 'Max Storage', value: '96TB' },
      { label: 'PCI Slots', value: '10' },
      { label: 'Remote Management', value: 'Advanced features with robust remote management' }
    ]
  },
  { name: 'PowerEdge 2950', slug: 'poweredge-2950', image: `${import.meta.env.BASE_URL}images/ID-38NEW_S38-1N (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge 2950 is a versatile and high-performance 2U rack server, designed to support demanding workloads with its powerful Intel Xeon processors and ample memory capacity. Perfect for small to mid-sized businesses, this server offers a range of storage options, up to 64GB of memory, and features multiple PCI slots for flexible expansion.\n\nThe Dell PowerEdge 2950 is a solid choice for businesses seeking reliable, scalable performance without the cost of new hardware.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Processor', value: 'Intel Xeon 5400 Series' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Memory Slots', value: '8' },
      { label: 'Max RAM', value: '64GB DDR2' },
      { label: 'Max Storage', value: '6TB' },
      { label: 'PCI Slots', value: '3' }
    ]
  },
  { name: 'PowerEdge 1950', slug: 'poweredge-1950', image: `${import.meta.env.BASE_URL}images/ID-39NEW_39-2 (1).jpg`, type: 'Dell Rack Server',
    overview: `The Dell PowerEdge 1950 is a powerful and cost-effective 1U rack server, ideal for back-office applications and data center co-location. With support for multi-user applications, ECC registered memory, and secure RAID configurations, this server ensures data integrity and high performance. Equipped with inbuilt BMC and optional iDRAC for remote management, it's a reliable choice for growing businesses.\n\nThe Dell PowerEdge 1950 is an excellent choice for businesses needing reliable performance, memory expansion, and storage flexibility, all at an affordable price.`,
    specs: [
      { label: 'Form Factor', value: '1U Rack' },
      { label: 'Processor', value: 'Intel Xeon 5000, 5100, 5300, Low Volt Xeon 5148' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Memory Slots', value: '8' },
      { label: 'Max RAM', value: '32GB DDR2' },
      { label: 'Max Storage', value: '1.5TB' },
      { label: 'Hard Drive Bays', value: '2 x 3.5" or 4 x 2.5" Drives' },
      { label: 'PCI Slots', value: '2' },
      { label: 'Power Supply', value: 'Dual' },
      { label: 'Remote Management', value: 'DRAC5' }
    ]
  },
  { name: 'PowerEdge R730xd', slug: 'poweredge-r730xd', image: `${import.meta.env.BASE_URL}images/ID-40NEW_40-1 (1).jpg`, type: 'Dell Rack Server',
    overview: `The DELL PowerEdge R730XD is a high-performance server designed to handle data-intensive workloads while providing flexibility in storage options. As part of Dell's 13th generation PowerEdge series, this server is an ideal solution for businesses requiring reliable performance and scalability at a lower cost. Renting the R730XD gives you access to top-tier storage and processing power without the upfront investment of buying a new server.\n\nBy choosing the DELL PowerEdge R730XD server rental, you save on initial costs and avoid maintenance overhead. Ideal for growing businesses and enterprises with fluctuating resource demands, this server offers seamless scalability and top-notch performance for mission-critical applications.`,
    specs: [
      { label: 'Form Factor', value: '2U Rack' },
      { label: 'Processor Options', value: 'Intel Xeon E5-2600 V3/V4 processors' },
      { label: 'Max RAM', value: 'Up to 1.5TB DDR4' },
      { label: 'Storage Options', value: 'Supports up to 16 x 3.5" or 24 x 2.5" drives' },
      { label: 'Max Storage', value: '192TB' },
      { label: 'PCI Slots', value: '7 PCIe slots' },
      { label: 'Network Connectivity', value: 'Dual-port 10GbE' },
      { label: 'Power Supply', value: 'Redundant, 1100W/1600W Power Supply' },
      { label: 'RAID Support', value: 'PERC H730P, H730, H830 RAID Controllers' },
      { label: 'Remote Management', value: 'iDRAC8 with Lifecycle Controller' }
    ]
  },
  // Dell Blade Servers
  { name: 'M620 Blade', slug: 'm620-blade', image: `${import.meta.env.BASE_URL}images/ID-43NEW_43-2N (1).jpg`, type: 'Dell Blade Server',
    overview: `The Dell M620 Blade Server is a high-performance solution designed for demanding virtualized environments. It offers advanced features, flexibility, and scalability, making it an ideal choice for businesses needing high-density computing power.\n\nThis refurbished Dell M620 Blade Server offers top-tier performance, making it a reliable and cost-effective solution for businesses looking to scale their infrastructure efficiently.`,
    specs: [
      { label: 'Form Factor', value: 'Half-Height Blade' },
      { label: 'Processor', value: 'Intel® Xeon® E5-2600 v2' },
      { label: 'Memory Size', value: '768GB' },
      { label: 'Memory Slots', value: '24 DIMMs' },
      { label: 'Hard Drive Bays', value: 'Up to 2 x 2.5" Drives' },
      { label: 'Internal RAID Controllers', value: 'PERC H710P' }
    ]
  },
  { name: 'MX7000 Enclosure', slug: 'mx7000-enclosure', image: `${import.meta.env.BASE_URL}images/ID-44NEW_44 (1).jpg`, type: 'Dell Blade Server',
    overview: `The DELL MX7000 Enclosure is a powerful, high-performance chassis designed for high-end computing needs. Featuring a flexible 7U modular design, it is ideal for businesses requiring cutting-edge technology integration with scalability and efficiency.\n\nThe DELL MX7000 Enclosure offers a seamless, scalable solution for enterprises, combining state-of-the-art performance with efficient architecture to maximize IT resources and support future growth.`,
    specs: [
      { label: 'Form Factor', value: '7U Modular Chassis' },
      { label: 'Processor Support', value: 'Multi-Core Processors' },
      { label: 'Storage Connectivity', value: 'Latest Storage Devices' },
      { label: 'Networking', value: 'Multi-Chassis Networking' },
      { label: 'Management Features', value: 'Agile and Responsive Design' }
    ]
  },
  { name: 'PowerEdge M1000e Blade Enclosure', slug: 'poweredge-m1000e-blade-enclosure', image: `${import.meta.env.BASE_URL}images/ID-45NEW_45-1new (1).jpg`, type: 'Dell Blade Server',
    overview: `The Dell PowerEdge M1000e Blade Enclosure is the ultimate solution for large-scale enterprises seeking efficient and scalable server infrastructure. Designed for CPU and GPU rendering, it enhances productivity, reduces maintenance costs, and ensures seamless server management with centralized control and simplified cabling.\n\nThe Dell PowerEdge M1000e ensures enhanced productivity and longevity of your servers by offering unmatched flexibility, scalability, and efficiency. With features tailored to modern enterprise needs, this enclosure is designed to deliver superior operational performance while keeping costs low.`,
    specs: [
      { label: 'Brand', value: 'Dell' },
      { label: 'Form Factor', value: 'Blade Enclosure' },
      { label: 'Compatibility', value: 'Supports servers of all generations' },
      { label: 'Scalability', value: 'Add/remove servers per demand' },
      { label: 'Management', value: 'Centralized with simple cabling' }
    ]
  },
  { name: 'M610 Blade', slug: 'm610-blade', image: `${import.meta.env.BASE_URL}images/ID-46NEW_46-3 (1).jpg`, type: 'Dell Blade Server',
    overview: `The Dell M610 Blade Server is an exceptional choice for private cloud environments and XaaS (Anything-as-a-Service) applications. With grade A refurbished quality and supreme performance powered by Intel processors, this server is custom-configured to handle demanding workloads efficiently. Designed to fit into Dell's M1000e Blade Enclosure, the M610 provides excellent scalability and versatility in memory and storage configurations.\n\nThe Dell M610 Blade Server is designed for high performance, flexibility, and scalability, offering a great solution for enterprise-level virtualized environments or private cloud infrastructures.`,
    specs: [
      { label: 'Form Factor', value: 'Half-Height Blade' },
      { label: 'Max RAM', value: '192GB' },
      { label: 'RAM Type', value: 'DDR3' },
      { label: 'Processor', value: 'Intel Xeon 5500, 5600 Series' },
      { label: 'Max Storage', value: '1.8TB' }
    ]
  },
  { name: 'M630 Blade', slug: 'm630-blade', image: `${import.meta.env.BASE_URL}images/ID-47NEW_47-1n (1).jpg`, type: 'Dell Blade Server',
    overview: `The Dell M630 Blade Server is designed for high performance and flexibility, making it the ideal choice for private cloud environments and XaaS applications. With grade A refurbished quality and Intel Xeon processors, this server delivers exceptional processing power and memory options. The M630 is built for scalability and is perfectly suited for environments requiring advanced customization of memory and storage configurations.\n\nThe Dell M630 Blade Server is ideal for scaling and managing large workloads with its powerful configuration options. This versatile server is designed to meet the growing demands of cloud and enterprise applications.`,
    specs: [
      { label: 'Form Factor', value: 'Half-Height Blade' },
      { label: 'Core Options', value: '10, 12, 14, 16, 18, 20, 22, 4, 8 cores' },
      { label: 'Max RAM', value: '1.5TB' },
      { label: 'RAM Type', value: 'DDR4' },
      { label: 'Processor', value: 'Intel Xeon E5-2600 v3, v4 Series' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Max Storage', value: '7.68TB' },
      { label: 'PCI Slots', value: '2' }
    ]
  },
  { name: 'PowerEdge T310', slug: 'poweredge-t310', image: `${import.meta.env.BASE_URL}images/ID-48NEW_48-1n (1).jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T310 Tower Server is a compact, energy-efficient server designed for remote offices and small to medium-sized businesses (SMBs). It delivers enterprise-level performance in a versatile tower form, offering scalability and manageability with features like iDRAC. This server is ideal for businesses looking for reliable performance and high storage capabilities at an affordable price.\n\nThe Dell PowerEdge T310 Tower Server is designed for businesses seeking a cost-effective and scalable solution for their IT infrastructure, making it ideal for remote offices and growing SMBs.`,
    specs: [
      { label: 'Form Factor', value: 'Tower' },
      { label: 'Processor', value: 'Intel Xeon Processor 3400 Series' },
      { label: 'Processor Sockets', value: '1' },
      { label: 'Memory Size', value: '32GB' },
      { label: 'Memory Slots', value: '6' },
      { label: 'Max Storage', value: '12TB' },
      { label: 'Hard Drive Bays', value: 'Up to 4 x 2.5" Drives' }
    ]
  },
  { name: 'PowerEdge T320', slug: 'poweredge-t320', image: `${import.meta.env.BASE_URL}images/ID-49NEW_49-2 (1).jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T320 Tower Server is an ideal solution for SMBs and remote offices. Powered by Intel Xeon processors, this versatile server offers powerful performance for data-intensive tasks and supports secure RAID cards to protect your data. With the ability to be converted into a rack server using a conversion kit, it provides flexible storage options and upgradable memory for future growth.\n\nThe Dell PowerEdge T320 Tower Server offers a flexible and scalable solution for businesses looking to handle demanding workloads while maintaining a balance of performance and data protection.`,
    specs: [
      { label: 'Form Factor', value: '5U Rackable Tower' },
      { label: 'Processor', value: 'Intel Xeon Processor E5-2400 Product Family' },
      { label: 'Processor Sockets', value: '1' },
      { label: 'Memory Size', value: '192GB' },
      { label: 'Memory Slots', value: '6' },
      { label: 'Hard Drive Bays', value: 'Up to 16 x 2.5" Drives' },
      { label: 'PCI Slots', value: '5' }
    ]
  },
  { name: 'PowerEdge T330', slug: 'poweredge-t330', image: `${import.meta.env.BASE_URL}images/ID-50NEW_50-2 (1).jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T330 Tower Server is a robust server designed for small to medium-sized businesses (SMBs) and remote offices. Equipped with the latest Intel processors, it is perfect for productivity and collaboration applications. Its expandable storage and DDR4 memory allow for future upgrades, while the iDRAC8 controller enables remote management. Additionally, the server comes with a dual redundant power supply and offers quick delivery with free installation and tech support.\n\nThe Dell PowerEdge T330 Tower Server provides excellent performance for SMBs and remote offices, with efficient management and the flexibility to scale as your business grows.`,
    specs: [
      { label: 'Form Factor', value: '5U Rackable Tower' },
      { label: 'Processor', value: 'Intel Xeon Processor E3-1200 v6 Product Family' },
      { label: 'Processor Sockets', value: '1' },
      { label: 'Memory Size', value: '64GB' },
      { label: 'Hard Drive Bays', value: 'Up to 8 x 3.5" Drives' },
      { label: 'RAID Level', value: '0, 1, 5, 10, 50' },
      { label: 'Power Supply', value: '495W Dual Redundant Power Supply' }
    ]
  },
  // Dell Tower Servers
  { name: 'PowerEdge T430', slug: 'poweredge-t430', image: `${import.meta.env.BASE_URL}images/ID-51NEW_51-2N.jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T430 Tower Server offers exceptional performance and high density in a compact design, making it the ideal choice for single users or businesses needing high-end memory and graphics-intensive applications. With its flexible configuration options and comprehensive cyber-resilient architecture, it ensures optimal performance and security. Whether you're handling demanding workloads or running multiple applications, the T430 is built to handle it all.\n\nThe Dell PowerEdge T430 Tower Server provides high-end performance with versatile configurations, perfect for tackling complex workloads while ensuring reliability and security.`,
    specs: [
      { label: 'Form Factor', value: 'Tower Server' },
      { label: 'Processor', value: 'Intel Xeon E5-2600 v4 Product Family' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Max RAM', value: '384GB' },
      { label: 'RAM Type', value: 'DDR4' },
      { label: 'Memory Slots', value: '12' },
      { label: 'Max Storage', value: '32TB' }
    ]
  },
  { name: 'PowerEdge T610', slug: 'poweredge-t610', image: `${import.meta.env.BASE_URL}images/ID-52NEW_52-2N.jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T610 Tower Server is designed to support mission-critical applications for small to medium-sized businesses (SMBs) and remote offices. Powered by Intel Xeon 5500 and 5600 Series CPUs, this energy-efficient 5U rackable tower server offers high memory capacity and flexible storage options. It's an ideal solution for businesses needing reliable and scalable server performance, with easy monitoring and management.\n\nThe Dell PowerEdge T610 Tower Server delivers solid performance, energy efficiency, and a flexible configuration, ensuring reliable operations for SMBs and remote offices.`,
    specs: [
      { label: 'Form Factor', value: '5U rackable tower' },
      { label: 'Processor', value: 'Intel Xeon 5500 and 5600 series' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Memory Size', value: '192GB' },
      { label: 'Memory Slots', value: '12' },
      { label: 'Maximum Storage', value: '24TB' },
      { label: 'Hard Drive Bays', value: 'Up to 8 x 2.5" Drives' }
    ]
  },
  { name: 'PowerEdge T110', slug: 'poweredge-t110', image: `${import.meta.env.BASE_URL}images/ID-53NEW_53-2N.jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T110 Tower Server is an excellent choice for small businesses, offering reliable performance for collaboration, file sharing, and data protection. Powered by a Quad-core Intel Xeon 3400 Series processor, this server provides expandable storage and DDR3 memory. With its robust RAID controllers and server management features, it ensures secure and efficient operations for businesses.\n\nThe Dell PowerEdge T110 Tower Server offers the ideal balance of performance, scalability, and reliability, making it perfect for small businesses looking to enhance their IT infrastructure.`,
    specs: [
      { label: 'Form Factor', value: 'Tower' },
      { label: 'Processor', value: 'Quad-core Intel Xeon 3400 series' },
      { label: 'Processor Sockets', value: '1' },
      { label: 'Memory Size', value: '16GB' },
      { label: 'Memory Slots', value: '4' },
      { label: 'Max Storage', value: '12TB' },
      { label: 'Hard Drive Bays', value: 'Up to 4 x 3.5" Drives' }
    ]
  },
  { name: 'PowerEdge T130', slug: 'poweredge-t130', image: `${import.meta.env.BASE_URL}images/ID-54NEW_54-2.jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T130 Tower Server is designed to meet the needs of home offices and small businesses, providing reliable processing power and efficient storage solutions. With support for multiple Intel CPUs, expandable DDR4 memory, and a software RAID system for reliable storage, this server is ideal for consolidating data from multiple devices. It can be easily managed remotely using iDRAC8 and is perfect for virtualization workloads.\n\nThe Dell PowerEdge T130 Tower Server offers flexible performance for various workloads, providing the ideal solution for SMBs and home offices looking for high-quality, manageable, and expandable server solutions.`,
    specs: [
      { label: 'Form Factor', value: 'Tower' },
      { label: 'Processor', value: 'Multiple Intel CPUs' },
      { label: 'Memory Size', value: 'Expandable DDR4 memory' },
      { label: 'Storage', value: 'Software RAID for reliable storage' },
      { label: 'Remote Management', value: 'Managed remotely with iDRAC8' }
    ]
  },
  { name: 'PowerEdge T20 Mini', slug: 'poweredge-t20-mini', image: `${import.meta.env.BASE_URL}images/ID-55NEW_55-2N.jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T20 Mini Tower Server is a compact yet powerful entry-level solution designed for small offices. It offers excellent performance with Intel Xeon CPUs and supports ECC registered memory for enhanced data reliability. With easy management features and a large internal storage capacity, it is perfect for businesses looking to collaborate efficiently and manage workloads effectively.\n\nThe Dell PowerEdge T20 Mini Tower Server offers a reliable and efficient solution for small businesses needing an entry-level server with expandability and high storage capacity.`,
    specs: [
      { label: 'Form Factor', value: 'Mini Tower' },
      { label: 'Processor', value: 'Intel Xeon E3-1225 v3' },
      { label: 'No. of Processor Sockets', value: '1' },
      { label: 'Max RAM Capacity', value: '32GB' },
      { label: 'Memory Type', value: 'DDR3' },
      { label: 'Storage Capacity', value: '13TB' },
      { label: 'RAID Levels', value: 'RAID 0, RAID 1' }
    ]
  },
  { name: 'PowerEdge T2900', slug: 'poweredge-t2900', image: `${import.meta.env.BASE_URL}images/ID-56NEW_56-2N.jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T2900 Server is a powerful and rack-mountable tower server designed for enterprise-level performance. Ideal for databases, collaboration applications, and file or print services, it offers massive storage and memory expansion capabilities. With Intel Xeon processors and 12 DIMM slots, the T2900 ensures high performance and scalability to meet the demands of growing businesses. The server can be managed remotely through the iDRAC system, offering convenience for data centers and branch offices.\n\nThe Dell PowerEdge T2900 Server provides excellent performance, scalability, and remote management, making it a great choice for businesses looking to streamline operations and handle demanding tasks.`,
    specs: [
      { label: 'Form Factor', value: 'Rack-Mountable Tower' },
      { label: 'Processor', value: 'Intel Xeon processors' },
      { label: 'DIMM Slots', value: '12 slots for memory expansion' },
      { label: 'Storage Capacity', value: 'Large internal storage capacity' },
      { label: 'Management', value: 'Remote management via iDRAC' },
      { label: 'Ideal Applications', value: 'Databases, collaboration, file/print, and messaging' }
    ]
  },
  { name: 'PowerEdge T410', slug: 'poweredge-t410', image: `${import.meta.env.BASE_URL}images/ID-57NEW_57-3N.jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T410 Tower Server is designed for virtualization, databases, and data-intensive tasks. This energy-efficient compact server is powered by Intel Xeon 5500 and 5600 series processors, ensuring excellent performance. It offers scalable memory and storage, making it highly adaptable for various workloads. The T410 also features remote management capabilities for easy access and control. With RAID support, it ensures data security, making it ideal for businesses looking for robust and efficient server solutions.\n\nThe Dell PowerEdge T410 is a reliable, high-performance server with robust memory and storage options, making it perfect for businesses requiring scalability, virtualization, and data security.`,
    specs: [
      { label: 'Form Factor', value: 'Tower' },
      { label: 'Processor', value: 'Intel Xeon 5500 & 5600 series' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Memory Size', value: '128GB' },
      { label: 'Memory Slots', value: '8' },
      { label: 'Max Storage', value: '18TB' },
      { label: 'Hard Drive Bays', value: 'Up to 6 x 3.5" Drives' },
      { label: 'RAID Support', value: 'Yes' }
    ]
  },
  { name: 'PowerEdge T630', slug: 'poweredge-t630', image: `${import.meta.env.BASE_URL}images/ID-58NEW_58-2.jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T630 Tower Server is a high-performance, versatile solution designed for small to medium-sized businesses (SMBs) and remote offices. It delivers excellent processing power with Intel Xeon E5-2600 V4 family CPUs, making it suitable for demanding applications like databases, virtualization, and enterprise resource planning (ERP). With faster DDR4 memory and scalable storage, the T630 is built to handle a wide range of workloads. It also offers multiple RAID options for data protection and is equipped with the iDRAC8 controller for efficient remote management.\n\nThe Dell PowerEdge T630 is a flexible and powerful server solution, offering high performance for virtualization, databases, and enterprise applications. With its expandable memory and storage, it's an excellent choice for growing businesses needing a reliable and secure infrastructure.`,
    specs: [
      { label: 'Form Factor', value: 'Tower' },
      { label: 'Processor', value: 'Intel Xeon E5-2600 V4 family' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Memory Size', value: 'Up to 512GB DDR4' },
      { label: 'Memory Slots', value: '12' },
      { label: 'Max Storage', value: 'Up to 32TB (expandable)' },
      { label: 'RAID Support', value: 'Yes, multiple RAID options' },
      { label: 'Remote Management', value: 'iDRAC8 controller' }
    ]
  },
  { name: 'PowerEdge T420', slug: 'poweredge-t420', image: `${import.meta.env.BASE_URL}images/ID-59NEW_59-2.jpg`, type: 'Dell Tower Server',
    overview: `The Dell PowerEdge T420 Tower Server is a robust, general-purpose rack-mountable tower server designed for virtualized environments. With dual Intel Xeon E5-2400 processors, it offers excellent performance for a variety of tasks, including virtualization, data processing, and enterprise applications. The T420 also provides high storage capacity, multiple RAID options for data security, and a huge DDR3 memory capacity of up to 384GB, making it ideal for demanding workloads. Remote management is facilitated through the iDRAC interface, offering great flexibility and control.\n\nThe Dell PowerEdge T420 is a powerful and scalable server solution suitable for demanding virtualized environments, offering high performance and flexibility with ample storage and memory. It is well-suited for businesses looking for reliability, scalability, and ease of management.`,
    specs: [
      { label: 'Form Factor', value: '5U rackable tower' },
      { label: 'Processor', value: 'Dual Intel Xeon E5-2400 product family' },
      { label: 'Processor Sockets', value: '2' },
      { label: 'Memory Size', value: 'Up to 384GB DDR3' },
      { label: 'Memory Slots', value: '12' },
      { label: 'Max Storage', value: 'Up to 16 x 2.5" drives' },
      { label: 'RAID Support', value: 'Yes, multiple RAID options' },
      { label: 'PCI Slots', value: '6' },
      { label: 'Remote Management', value: 'iDRAC' }
    ]
  },
  { name: 'T30 Mini', slug: 't30-mini', image: `${import.meta.env.BASE_URL}images/ID-60NEW_60-3.jpg`, type: 'Dell Tower Server',
    overview: `The Dell T30 Mini Tower Server is a powerful and reliable server designed for small offices and businesses, equipped with an Intel Xeon processor for efficient performance. It offers expandable storage options and ample memory to support a variety of workloads, making it an ideal choice for any growing business.\n\nThe Dell T30 is engineered to offer robust performance in a compact design, with ample storage and memory for handling a range of office tasks.`,
    specs: [
      { label: 'Form Factor', value: 'Mini Tower' },
      { label: 'Processor', value: 'Intel Xeon E3-1225 v5' },
      { label: 'Max RAM', value: '64GB' },
      { label: 'Memory Slots', value: '4' },
      { label: 'RAM Type', value: 'DDR4' },
      { label: 'Max Storage', value: '1TB' },
      { label: 'PCI Slots', value: '1' }
    ]
  },
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