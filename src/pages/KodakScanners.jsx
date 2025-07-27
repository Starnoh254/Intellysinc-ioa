import React from 'react';
import './KodakScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import ProductSidebar from '../components/ProductSidebar';

const kodakProducts = [
  {
    name: 'ScanMate i940',
    slug: 'scanmate-i940',
    image: `${import.meta.env.BASE_URL}images/Kodak_1_200.jpg`,
    type: 'Scanmate Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'When AC-powered: black and white/greyscale: up to 20 ppm/40 ipm at 200 dpi; colour: up to 15 ppm/30 ipm at 200 dpi When USB-powered: black and white/greyscale/colour: up to 8 ppm/16 ipm at 200 dpi' },
      { label: 'Max Paper Size', value: '216 mm x 1524 mm' },
      { label: 'ADF Capacity', value: '20 sheets of 80 g/m2 paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Height: 78 mm with tray closed Width: 289 mm with tray closed Depth: 107 mm with tray closed Weight: 1.3 kg without power adapter' },
      { label: 'Interface', value: 'USB 2.0, USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows XP SP3 (32-bit and 64-bit), Windows Vista SP1 (32-bit and 64-bit), Windows 7 SP1 (32-bit and 64-bit), Windows 8 (32-bit and 64-bit), Windows 8.1 (32-bit and 64-bit), Windows 10 (32-bit and 64-bit), Linux Ubuntu 12.04 (LTS)*' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, WIA drivers; Smart Touch; and NewSoft Presto! BizCard, Kodak Capture Pro Software' },
      { label: 'Mac Drivers / Software', value: 'NewSoft Presto! Page Manager; NewSoft Presto! BizCard X press; TWAIN driver' },
      { label: 'Standard Warranty', value: '3 years' },
    ],
    overview: '',
  },
  {
    name: 'Alaris s2050',
    slug: 'alaris-s2050',
    image: `${import.meta.env.BASE_URL}images/Kodak_5_128.jpg`,
    type: 'S 2000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 50 ppm/100 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '216 mm x 356 mm' },
      { label: 'ADF Capacity', value: 'Up to 80 sheets of 80 g/m² (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Weight: 3.3 kg (7.2 lbs.) Depth: 204 mm (8.0 in.), not including input tray and output tray; Width: 312 mm (12.3 in.) Height: 182.5 mm (7.2 in.), not including input tray; Depth with Input Tray: 269 mm (10.6 in.); Height with Input Tray: 231.6 mm (9.1 in.)' },
      { label: 'Interface', value: 'USB 3.1 GEN1 (Compatible with USB 2.0 and 3.0)' },
      { label: 'PC Compatibility', value: 'Windows 10 (32-bit and 64-bit; up to Version 1903), Windows 8.1 (32-bit and 64-bit), Windows 7 SP1 (32-bit and 64-bit), Windows Server 2012 R2 (64-bit), Windows Server 2016 (64-bit), Linux * - (Intel/AMD x86/x64 processors only)), Ubuntu 18.04 64-bit, Ubuntu 16.04 64-bit and 32-bit, Open SUSE 11.3 (i586) 32-bit, Open SUSE LEAP 15.1 64-bit, SUSE Linux Enterprise Desktop 12.2 64-bit, SUSE Linux Enterprise Desktop 15 SP1 for 64-bit, Neokylin-NKLD-V7_U2-ZX64-REL-build54, NeoKylin-Live-Desktop-6.0-x86_64-B060-20160822, NeoKylin-Linux-Desktop-6.0-x86_64-B045-20141201 64-bit, NeoKylin-Linux-Desktop-6.0 i586 32-bit, Citrix Certified' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, WIA Drivers; Smart Touch; Kodak Capture Pro Limited Edition (via web download)W, KOFAX certified' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
    ],
    overview: 'Faster, easier scanning leaves more time for business. The Kodak S2050 Scanners enhance your productivity by handling more of the work traditionally done by people, computers and mobile devices. Embedded Image Processing in the scanner delivers crisp, high-quality images without depending on your computer. Active Feed technology aligns the leading edges of pages to avoid misfeeds and multifeeds, and Controlled Output Stacking places paper neatly in the output tray, so your team spends less time dealing with documents and more time on work that matters. Document and information handling you can trust. Ensure reliable data quality at the point of capture through a combined approach of hardware and software technologies. Intelligent Exception Processing1 handles immediate validation of forms so any missing information can be identified and fixed at the point of transaction. Intelligent Document Protection and multifeed sensor technology make scanning virtually jam-free and document-damage-free. Industry standard enterprise security protocols for scanning over networks protect document images and data in transit. Easy to set up, easy to use. An intuitive color interface and predefined job setups simplify the lives of users and network administrators. Predefined job setups let users change scanner configuration at the push of a button or by scanning auto-generated QR codes. Connect to various applications such as Dropbox, Salesforce, OneDrive, SharePoint, SharePoint Online, Box, Google Drive, and more. Network models, including wireless connectivity, enable multiple users to easily share scanners in a distributed environment. Information capture that evolves with your business. The Kodak S2050 Scanners are designed to fit seamlessly into your business environment and adapt as your needs change. Integrate easily using our Web API, so no device drivers need to be installed on the host computer, tablet, or mobile device.',
  },
  {
    name: 'Alaris s2060w',
    slug: 'alaris-s2060w',
    image: `${import.meta.env.BASE_URL}images/Kodak_6_123.jpg`,
    type: 'S 2000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 60 ppm/120 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '4064mm x 216mm' },
      { label: 'ADF Capacity', value: 'Up to 80 sheets of 80 g/m2 (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Weight: 3.3 kg (7.2 lbs.) Depth: 204 mm (8.0 in.), not including input tray and output tray Width: 312 mm (12.3 in.) Height:182.5 mm (7.2 in.), not including input tray Depth with input tray 269 mm (10.6 in.) Height with input tray 231.6 mm (9.1 in.)' },
      { label: 'Interface', value: 'USB 3.1' },
      { label: 'PC Compatibility', value: 'WINDOWS 7 SP1 (32-bit and 64-bit), WINDOWS 8.1 (32-bit and 64-bit), WINDOWS 10 (32-bit and 64-bit), WINDOWS Server 2012 x64 Editions, WINDOWS Server 2016 x64 Editions, LINUX UBUNTU and SUSE. Citrix Certified' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, WIA Drivers; Alaris Smart Touch, and Alaris Capture Pro Software Limited Edition' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '3 Years' },
    ],
    overview: '',
  },
  {
    name: 'Alaris S2070',
    slug: 'alaris-s2070',
    image: `${import.meta.env.BASE_URL}images/Kodak_7_119.jpg`,
    type: 'S 2000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 70 ppm/140 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '4064mm x 216mm' },
      { label: 'ADF Capacity', value: 'Up to 80 sheets of 80 g/m2 (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Weight: 3.3 kg (7.2 lbs.) Depth: 204 mm (8.0 in.), not including input tray and output tray Width: 312 mm (12.3 in.) Height:182.5 mm (7.2 in.), not including input tray Depth with input tray 269 mm (10.6 in.) Height with input tray 231.6 mm (9.1 in.)' },
      { label: 'Interface', value: 'USB 3.1' },
      { label: 'PC Compatibility', value: 'WINDOWS 7 SP1 (32-bit and 64-bit), WINDOWS 8.1 (32-bit and 64-bit), WINDOWS 10 (32-bit and 64-bit), WINDOWS Server 2012 x64 Editions, WINDOWS Server 2016 x64 Editions, LINUX UBUNTU and SUSE. Citrix Certified' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, WIA Drivers; Alaris Smart Touch, and Alaris Capture Pro Software Limited Edition' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '3 Years' },
    ],
    overview: '',
  },
  {
    name: 'Alaris S2080W',
    slug: 'alaris-s2080w',
    image: `${import.meta.env.BASE_URL}images/Kodak_15_226.jpg`,
    type: 'S 2000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 80 ppm/160 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '4064mm x 216mm' },
      { label: 'ADF Capacity', value: 'Up to 80 sheets of 80 g/m2 (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Weight: 3.3 kg (7.2 lbs.) Depth: 204 mm (8.0 in.), not including input tray and output tray Width: 312 mm (12.3 in.) Height:182.5 mm (7.2 in.), not including input tray Depth with input tray 269 mm (10.6 in.) Height with input tray 231.6 mm (9.1 in.)' },
      { label: 'Interface', value: 'USB 3.1, LAN, WAN' },
      { label: 'PC Compatibility', value: 'WINDOWS 7 SP1 (32-bit and 64-bit), WINDOWS 8.1 (32-bit and 64-bit), WINDOWS 10 (32-bit and 64-bit), WINDOWS Server 2012 x64 Editions, WINDOWS Server 2016 x64 Editions, LINUX UBUNTU, SUSE and NEOKYLIN. Citrix Certified' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, WIA Drivers; Smart Touch, and Kodak Capture Pro Software Limited Edition' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '3 Years' },
    ],
    overview: 'Faster, easier scanning leaves more time for business. The Alaris S2000 Series Scanners enhance your productivity by handling more of the work traditionally done by people, computers and mobile devices. Embedded Image Processing in the scanner delivers crisp, high-quality images without depending on your computer. Active Feed technology aligns the leading edges of pages to avoid misfeeds and multifeeds, and Controlled Output Stacking places paper neatly in the output tray, so your team spends less time dealing with documents and more time on work that matters. Document and information handling you can trust. Ensure reliable data quality at the point of capture through a combined approach of hardware and software technologies. Intelligent Exception Processing1 handles immediate validation of forms so any missing information can be identified and fixed at the point of transaction. Intelligent Document Protection and multifeed sensor technology make scanning virtually jam-free and document-damage-free. Industry standard enterprise security protocols for scanning over networks protect document images and data in transit. Easy to set up, easy to use. An intuitive color interface and predefined job setups simplify the lives of users and network administrators. Predefined job setups let users change scanner configuration at the push of a button or by scanning auto-generated QR codes. Connect to various applications such as Dropbox, Salesforce, OneDrive, SharePoint, SharePoint Online, Box, Google Drive, and more. Network models, including wireless connectivity, enable multiple users to easily share scanners in a distributed environment. Information capture that evolves with your business. The S2000 Series Scanners are designed to fit seamlessly into your business environment and adapt as your needs change. Integrate easily using our Web API, so no device drivers need to be installed on the host computer, tablet, or mobile device. For your peace of mind, S2000 Series Scanners include 3 years Advanced Unit Replacement support with the option to upgrade to 5 years.',
  },
  {
    name: 'Alaris S2085F',
    slug: 'alaris-s2085f',
    image: `${import.meta.env.BASE_URL}images/Kodak_16_222.jpg`,
    type: 'S 2000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 85 ppm/170 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '4,06 m x 216 mm' },
      { label: 'ADF Capacity', value: 'Up to 300 sheets of 80 g/m2 (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Weight: 16.8 kg (37.1 lbs.); Depth: 370.84 mm (14.6 in.), with the input tray in the upright position; Width: 457.2 mm (18 in.); Height:254 mm (10 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen 1x1 Compatible, 10/100/1000 ETHERNET' },
      { label: 'PC Compatibility', value: 'WINDOWS 7 SP1 (32-bit and 64-bit), WINDOWS 8.1 (32-bit and 64-bit), WINDOWS 10 (32-bit and 64-bit), WINDOWS Server 2012 x64 Editions, WINDOWS Server 2016 x64 Editions, WINDOWS Server 2019 x64 Editions, LINUX UBUNTU5 and Neokylin5. Citrix Certified (USB only)' },
      { label: 'PC Drivers / Software', value: 'Fully supported by Smart Touch, Kodak Info Input Solution, Kodak Capture Pro Software, and Kodak Asset Management Software (WINDOWS only); WINDOWS Bundled drivers: TWAIN, ISIS, WIA Drivers' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '3-Years (Advanced Unit Replacement); optional next business day on-site service*' },
    ],
    overview: 'Superb image quality and data accuracy – automatically. Minimize data entry costs and time spent while transforming important paper-based information into actionable data and insight. Perfect Page technology turns even poor-quality originals into crisp images – automatically assessing and improving each image while scanning at rated speeds. Image enhancements include streak removal, background smoothing, image edge fill, and more. Achieve superb accuracy that’s a must for barcode reading and critical business processes. Totally safeguard your paper and data. Potential throughput issues are caught before they become jams or misfeeds, thanks to Advanced Intelligent Document Protection (IDP) and multi-feed detectors. Documents transported smoothly and safely via a straightthrough paper path and adjustable feeder pressure. Smoothly handle varying weights and sizes in single batches, and gain mixed-batch handling accuracy with a bigger 300-sheet feeder and controlled exit stacking. Scan oversize and fragile documents safely, as well as books, photos, etc. on the integrated flatbed.',
  },
  // E 1000 Series
  { name: 'Alaris E1025', image: `${import.meta.env.BASE_URL}images/Kodak_17_217.jpg`, type: 'E 1000 Series' },
  { name: 'Alaris E1035', image: `${import.meta.env.BASE_URL}images/Kodak_18_211.jpg`, type: 'E 1000 Series' },
  { name: 'e1030', image: `${import.meta.env.BASE_URL}images/Kodak_19_205.jpg`, type: 'E 1000 Series' },
  { name: 'e1040', image: `${import.meta.env.BASE_URL}images/Kodak_20_195.jpg`, type: 'E 1000 Series' },
  // i 3000 Series
  { name: 'i3500', image: `${import.meta.env.BASE_URL}images/Kodak_26_175.jpg`, type: 'i 3000 Series' },
  // i 4000 Series
  {
    name: 'i4250',
    slug: 'i4250',
    image: `${import.meta.env.BASE_URL}images/Kodak_27_170.jpg`,
    type: 'i 4000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: '110 ppm' },
      { label: 'Max Paper Size', value: '5300 mm x 305 mm' },
      { label: 'ADF Capacity', value: 'Up to 500 sheets (20 lb. / 80 g/m2) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Height: 34.79 cm (13.7 in.) Width: 48.9 cm (19.2 in.) Depth: 46.73 cm (18.4 in.) - with tray closed Depth: 61.30 cm (24.1 in.) - with tray open' },
      { label: 'Interface', value: 'USB 3. 3.1 Certified' },
      { label: 'PC Compatibility', value: 'N/A' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, WIA Drivers; Alaris Smart Touch, and Alaris Capture Pro Software Limited Edition' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' },
    ],
    overview: 'Designed to keep pace with how work is done today. The i4000 Series offers a host of features combined with our exceptional image quality to help you deliver high productivity. Get crisp, clear images even with challenging originals, thanks to Perfect Page image processing. And Dual LED technology produces high OCR read rates for even better data extraction precision with no loss of scanning speed. Dependable expertise to empower any business. Our exclusive paper feeding technology captures virtually any document in almost any condition for unbeatable reliability. The i4000 has four layers of document protection to safeguard your important documents. Length detection protects against papers getting overlapped and appearing as one long document. Double document detection also ensures that only one document enters the scanner at a time, which is especially helpful when a small document sticks together with a larger document. Intelligent document protection “listens” for a telltale crumpling sound and immediately stops the scanning process. Metal detection prevents forgotten staples and paper clips from scratching the scanner glass. Flawless integration that saves time and money. The i4000 delivers business value by finding the fastest, most efficient ways to enhance your workflows. With multi-zone barcode recognition, the driver reads barcode values to extract metadata, enabling easy integration with line-of-business systems. Combine the scanner with Kodak Info Input Solution web capture software and you can manage applications, job setups, and users, as well as capture and index all from a centralized capture location. Effortless user experience Kodak Alaris delivers intuitive interfaces, one-touch buttons scanning, and other ease-of-use features, for a simplified user experience. Smart Touch technology uses one-touch for frequently used scan tasks such as scanning onboarding applications or accounts payable invoices. You can preprogram jobs to automatically scan hard copies and save them as searchable PDFs, enabling you to easily search for information in the future. Adaptable solutions for your ever-changing workplace. Software: Kodak Capture Pro Software, when combined with scanners from Kodak Alaris, provide intelligent capabilities that increase productivity and improve efficiency: Intelligent Exception Processing ensures immediate validation of forms so any missed information at the point of transaction is identified and fixed, resulting in better customer interactions and greater potential to drive revenue. Intelligent Barcode Reading produces the most accurate data extraction results and takes complexity out of the set-up process Services: Get the best possible performance from your scanners and software with a full range of world-class service and support options to protect your investment and keep productivity at peak levels.',
  },
  {
    name: 'i4850',
    slug: 'i4850',
    image: `${import.meta.env.BASE_URL}images/ScanStation-730EX.jpg`,
    type: 'i 4000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: '150 ppm' },
      { label: 'Max Paper Size', value: '5300 mm x 305 mm' },
      { label: 'ADF Capacity', value: 'Up to 500 sheets (20 lb. / 80 g/m2) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Height: 34.79 cm (13.7 in.) Width: 48.9 cm (19.2 in.) Depth: 46.73 cm (18.4 in.) - with tray closed Depth: 61.30 cm (24.1 in.) - with tray open' },
      { label: 'Interface', value: 'USB 3. 3.1 Certified' },
      { label: 'PC Compatibility', value: 'N/A' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, WIA Drivers; Alaris Smart Touch, and Alaris Capture Pro Software Limited Edition' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' },
    ],
    overview: 'Designed to keep pace with how work is done today. The i4000 Series offers a host of features combined with our exceptional image quality to help you deliver high productivity. Get crisp, clear images even with challenging originals, thanks to Perfect Page image processing. And Dual LED technology produces high OCR read rates for even better data extraction precision with no loss of scanning speed. Dependable expertise to empower any business. Our exclusive paper feeding technology captures virtually any document in almost any condition for unbeatable reliability. The i4000 has four layers of document protection to safeguard your important documents. Length detection protects against papers getting overlapped and appearing as one long document. Double document detection also ensures that only one document enters the scanner at a time, which is especially helpful when a small document sticks together with a larger document. Intelligent document protection “listens” for a telltale crumpling sound and immediately stops the scanning process. Metal detection prevents forgotten staples and paper clips from scratching the scanner glass. Flawless integration that saves time and money. The i4000 delivers business value by finding the fastest, most efficient ways to enhance your workflows. With multi-zone barcode recognition, the driver reads barcode values to extract metadata, enabling easy integration with line-of-business systems. Combine the scanner with Kodak Info Input Solution web capture software and you can manage applications, job setups, and users, as well as capture and index all from a centralized capture location. Effortless user experience Kodak Alaris delivers intuitive interfaces, one-touch buttons scanning, and other ease-of-use features, for a simplified user experience. Smart Touch technology uses one-touch for frequently used scan tasks such as scanning onboarding applications or accounts payable invoices. You can preprogram jobs to automatically scan hard copies and save them as searchable PDFs, enabling you to easily search for information in the future. Adaptable solutions for your ever-changing workplace. Software: Kodak Capture Pro Software, when combined with scanners from Kodak Alaris, provide intelligent capabilities that increase productivity and improve efficiency: Intelligent Exception Processing ensures immediate validation of forms so any missed information at the point of transaction is identified and fixed, resulting in better customer interactions and greater potential to drive revenue. Intelligent Barcode Reading produces the most accurate data extraction results and takes complexity out of the set-up process Services: Get the best possible performance from your scanners and software with a full range of world-class service and support options to protect your investment and keep productivity at peak levels.',
  },
  {
    name: 'i4650',
    slug: 'i4650',
    image: `${import.meta.env.BASE_URL}images/Kodak_30_161.jpg`,
    type: 'i 4000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: '130 ppm' },
      { label: 'Max Paper Size', value: '5300 mm x 305 mm' },
      { label: 'ADF Capacity', value: 'Up to 500 sheets (20 lb. / 80 g/m2) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Height: 34.79 cm (13.7 in.) Width: 48.9 cm (19.2 in.) Depth: 46.73 cm (18.4 in.) - with tray closed Depth: 61.30 cm (24.1 in.) - with tray open' },
      { label: 'Interface', value: 'USB 3. 3.1 Certified' },
      { label: 'PC Compatibility', value: 'N/A' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, WIA Drivers; Alaris Smart Touch, and Alaris Capture Pro Software Limited Edition' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' },
    ],
    overview: 'Designed to keep pace with how work is done today. The i4000 Series offers a host of features combined with our exceptional image quality to help you deliver high productivity. Get crisp, clear images even with challenging originals, thanks to Perfect Page image processing. And Dual LED technology produces high OCR read rates for even better data extraction precision with no loss of scanning speed. Dependable expertise to empower any business. Our exclusive paper feeding technology captures virtually any document in almost any condition for unbeatable reliability. The i4000 has four layers of document protection to safeguard your important documents. Length detection protects against papers getting overlapped and appearing as one long document. Double document detection also ensures that only one document enters the scanner at a time, which is especially helpful when a small document sticks together with a larger document. Intelligent document protection “listens” for a telltale crumpling sound and immediately stops the scanning process. Metal detection prevents forgotten staples and paper clips from scratching the scanner glass. Flawless integration that saves time and money. The i4000 delivers business value by finding the fastest, most efficient ways to enhance your workflows. With multi-zone barcode recognition, the driver reads barcode values to extract metadata, enabling easy integration with line-of-business systems. Combine the scanner with Kodak Info Input Solution web capture software and you can manage applications, job setups, and users, as well as capture and index all from a centralized capture location. Effortless user experience Kodak Alaris delivers intuitive interfaces, one-touch buttons scanning, and other ease-of-use features, for a simplified user experience. Smart Touch technology uses one-touch for frequently used scan tasks such as scanning onboarding applications or accounts payable invoices. You can preprogram jobs to automatically scan hard copies and save them as searchable PDFs, enabling you to easily search for information in the future. Adaptable solutions for your ever-changing workplace. Software: Kodak Capture Pro Software, when combined with scanners from Kodak Alaris, provide intelligent capabilities that increase productivity and improve efficiency: Intelligent Exception Processing ensures immediate validation of forms so any missed information at the point of transaction is identified and fixed, resulting in better customer interactions and greater potential to drive revenue. Intelligent Barcode Reading produces the most accurate data extraction results and takes complexity out of the set-up process Services: Get the best possible performance from your scanners and software with a full range of world-class service and support options to protect your investment and keep productivity at peak levels.',
  },
  {
    name: 'i4600',
    slug: 'i4600',
    image: `${import.meta.env.BASE_URL}images/Kodak_31_157.jpg`,
    type: 'i 4000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: '120ppm' },
      { label: 'Max Paper Size', value: '304.8 mm (12 in.)' },
      { label: 'ADF Capacity', value: '500' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '34.79 cm (13.7 in.) x 45.97 cm (18.1 in.) x 46.73 cm (18.4 in.) / 34 kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows 10, Windows 8, Windows 7, Vista' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, WIA drivers and Kofax VRS, Kodak’s Smart Touch Feature, KODAK Capture Desktop Software' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 year' },
    ],
    overview: '',
  },
  // i 5000 Series
  { name: 'i5250', image: `${import.meta.env.BASE_URL}images/Kodak_32_153.jpg`, type: 'i 5000 Series' },
  { name: 'i5650', image: `${import.meta.env.BASE_URL}images/Kodak_33_149.jpg`, type: 'i 5000 Series' },
  { name: 'i5850', image: `${import.meta.env.BASE_URL}images/Kodak_34_145.jpg`, type: 'i 5000 Series' },
  { name: 'i5600', image: `${import.meta.env.BASE_URL}images/Kodak_35_141.jpg`, type: 'i 5000 Series' },
  // Photo Scanner
  { name: 'PS50', image: `${import.meta.env.BASE_URL}images/Kodak_36_137.jpg`, type: 'Photo Scanner' },
  { name: 'PS80', image: `${import.meta.env.BASE_URL}images/s3100f-4.jpg`, type: 'Photo Scanner' },
  // Network Series
  { name: 'Alaris S2060W', image: `${import.meta.env.BASE_URL}images/i4600-1.jpg`, type: 'Network Series' },
  { name: 'Alaris S2080W', image: `${import.meta.env.BASE_URL}images/02_34378_i5650 office desktop.jpg`, type: 'Network Series' },
  { name: 'ScanStation 710', image: `${import.meta.env.BASE_URL}images/KODAKS3120 Max and S3140 Max_sm.jpg`, type: 'Network Series' },
  { name: 'ScanStation 730EX', image: `${import.meta.env.BASE_URL}images/KODAKS3120 Max and S3140 Max_sm (1).jpg`, type: 'Network Series' },
  // Other Kodak
  {
    name: 'Sceye',
    slug: 'sceye',
    image: `${import.meta.env.BASE_URL}images/e1030_1.jpg`,
    type: 'Other Kodak',
    specs: [
      { label: 'A4 Pages Per Min', value: '_' },
      { label: 'Max Paper Size', value: '325 x 244 mm' },
      { label: 'ADF Capacity', value: '_' },
      { label: 'Duplex Scanning', value: '_' },
      { label: 'Dimensions / Weight', value: '45cm - 35cm - 10cm (opened)' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows XP(32/64), Vista (32/64), Win7 (32/64), MAC (10.6.x or higher)' },
      { label: 'PC Drivers / Software', value: 'Drivers, sceye-Explorer, sceye-Autoscan, sceye-RACE, ExactScan for Macintosh OS' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'Three years' },
    ],
    overview: 'Easy No Buttons – just open it up and it’s ready to go. Flexible Enables you to scan: books, cards, small packages just as easily as scanning paper documents. It also works with both PC and Mac, providing total flexibility for users. Fast Several automated features make Sceye extremely quick to use: - Automatic capture when a document is placed in the capture area. - Auto Crop & Rotate. - Auto Save, to the file destination of your choice. User-friendly No need to remove staples or unbind documents as Sceye sees the documents how you see them. Maintenance Free There are no moving parts on the Sceye so it is practically maintenance free.',
  },
  // S 3000 Series
  {
    name: 'S3061',
    slug: 's3061',
    image: `${import.meta.env.BASE_URL}images/product-1.jpg`,
    type: 'S 3000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 60 ppm/120 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '4,06 m x 305 mm' },
      { label: 'ADF Capacity', value: 'Up to 300 sheets of 80 g/m2 (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '15.3 kg (33.8 lbs.), Depth: 370.84 mm (14.6 in.), with the input tray in the upright position; Width: 457.2 mm (18 in.); Height:254 mm (10 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen 1x1 Compatible, 10/100/1000 ETHERNET' },
      { label: 'PC Compatibility', value: 'WINDOWS 7 SP1 (32-bit and 64-bit), WINDOWS 8.1 (32-bit and 64-bit), WINDOWS 10 (32-bit and 64-bit), WINDOWS Server 2012 x64 Editions, WINDOWS Server 2016 x64 Editions, WINDOWS Server 2019 x64 Editions, LINUX UBUNTU5 and Neokylin5. Citrix Certified (USB only)' },
      { label: 'PC Drivers / Software', value: 'Fully supported by Smart Touch, Kodak Info Input Solution, Kodak Capture Pro Software, and Kodak Asset Management Software (WINDOWS only); WINDOWS Bundled drivers: TWAIN, ISIS, WIA Drivers' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '12 months on-site, 3-4 business days response time' },
    ],
    overview: 'Exceptional image quality for superior accuracy. Get sharper images to deliver more accurate data to applications via OCR, searchable PDF, and barcode reading. Turn even poor-quality originals into crisp images with Perfect Page technology while scanning at rated speeds. Streak removal, background smoothing, image edge fill, and more automatic image enhancements. Verify all originals have been scanned with digital stamping on front or back of documents. Unsurpassed protection for paper and data. Advanced Intelligent Document Protection (IDP) and multi-feed detectors catch throughput problems and alert you before they become jams or misfeeds. Straight-through or U-turn paper path with adjustable feeder pressure, and optional integrated flatbed for smooth, safe document handling. Feed a wide array of sizes and weights in any batch. Larger 300-sheet feeder and output tray, plus controlled exit stacking for mixed-batch handling accuracy.',
  },
  {
    name: 'S3060F',
    slug: 's3060f',
    image: `${import.meta.env.BASE_URL}images/Kodak_36_137.jpg`,
    type: 'S 3000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 60 ppm/120 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '4,06 m x 305 mm' },
      { label: 'ADF Capacity', value: 'Up to 300 sheets of 80 g/m2 (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '16.8 kg (37.1 lbs.) Depth: 370.84 mm (14.6 in.), with the input tray in the upright position; Width: 457.2 mm (18 in.); Height:254 mm (10 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen 1x1 Compatible, 10/100/1000 ETHERNET' },
      { label: 'PC Compatibility', value: 'WINDOWS 7 SP1 (32-bit and 64-bit), WINDOWS 8.1 (32-bit and 64-bit), WINDOWS 10 (32-bit and 64-bit), WINDOWS Server 2012 x64 Editions, WINDOWS Server 2016 x64 Editions, WINDOWS Server 2019 x64 Editions, LINUX UBUNTU5 and Neokylin5. Citrix Certified (USB only)' },
      { label: 'PC Drivers / Software', value: 'Fully supported by Smart Touch, Kodak Info Input Solution, Kodak Capture Pro Software, and Kodak Asset Management Software (WINDOWS only); WINDOWS Bundled drivers: TWAIN, ISIS, WIA Drivers' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '12 months on-site, 3-4 business days response time' },
    ],
    overview: 'Exceptional image quality for superior accuracy. Get sharper images to deliver more accurate data to applications via OCR, searchable PDF, and barcode reading. Turn even poor-quality originals into crisp images with Perfect Page technology while scanning at rated speeds. Streak removal, background smoothing, image edge fill, and more automatic image enhancements. Verify all originals have been scanned with digital stamping on front or back of documents. Unsurpassed protection for paper and data. Advanced Intelligent Document Protection (IDP) and multi-feed detectors catch throughput problems and alert you before they become jams or misfeeds. Straight-through or U-turn paper path with adjustable feeder pressure, and optional integrated flatbed for smooth, safe document handling. Feed a wide array of sizes and weights in any batch. Larger 300-sheet feeder and output tray, plus controlled exit stacking for mixed-batch handling accuracy.',
  },
  {
    name: 'S3101',
    slug: 's3101',
    image: `${import.meta.env.BASE_URL}images/Kodak_34_145.jpg`,
    type: 'S 3000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 100 ppm/200 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '4,06 m x 305 mm' },
      { label: 'ADF Capacity', value: 'Up to 300 sheets of 80 g/m2 (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '15.3 kg (33.8 lbs.), Depth: 370.84 mm (14.6 in.), with the input tray in the upright position; Width: 457.2 mm (18 in.); Height:254 mm (10 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen 1x1 Compatible, 10/100/1000 ETHERNET' },
      { label: 'PC Compatibility', value: 'WINDOWS 7 SP1 (32-bit and 64-bit), WINDOWS 8.1 (32-bit and 64-bit), WINDOWS 10 (32-bit and 64-bit), WINDOWS Server 2012 x64 Editions, WINDOWS Server 2016 x64 Editions, WINDOWS Server 2019 x64 Editions, LINUX UBUNTU5 and Neokylin5. Citrix Certified (USB only)' },
      { label: 'PC Drivers / Software', value: 'Fully supported by Smart Touch, Kodak Info Input Solution, Kodak Capture Pro Software, and Kodak Asset Management Software (WINDOWS only); WINDOWS Bundled drivers: TWAIN, ISIS, WIA Drivers' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '12 months on-site, 3-4 business days response time' },
    ],
    overview: 'Exceptional image quality for superior accuracy. Get sharper images to deliver more accurate data to applications via OCR, searchable PDF, and barcode reading. Turn even poor-quality originals into crisp images with Perfect Page technology while scanning at rated speeds. Streak removal, background smoothing, image edge fill, and more automatic image enhancements. Verify all originals have been scanned with digital stamping on front or back of documents. Unsurpassed protection for paper and data. Advanced Intelligent Document Protection (IDP) and multi-feed detectors catch throughput problems and alert you before they become jams or misfeeds. Straight-through or U-turn paper path with adjustable feeder pressure, and optional integrated flatbed for smooth, safe document handling. Feed a wide array of sizes and weights in any batch. Larger 300-sheet feeder and output tray, plus controlled exit stacking for mixed-batch handling accuracy.',
  },
  {
    name: 'S3100F',
    slug: 's3100f',
    image: `${import.meta.env.BASE_URL}images/Kodak_33_149.jpg`,
    type: 'S 3000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 100 ppm/200 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '4,06 m x 305 mm' },
      { label: 'ADF Capacity', value: 'Up to 300 sheets of 80 g/m2 (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '16.8 kg (37.1 lbs.) Depth: 370.84 mm (14.6 in.), with the input tray in the upright position; Width: 457.2 mm (18 in.); Height:254 mm (10 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen 1x1 Compatible, 10/100/1000 ETHERNET' },
      { label: 'PC Compatibility', value: 'WINDOWS 7 SP1 (32-bit and 64-bit), WINDOWS 8.1 (32-bit and 64-bit), WINDOWS 10 (32-bit and 64-bit), WINDOWS Server 2012 x64 Editions, WINDOWS Server 2016 x64 Editions, WINDOWS Server 2019 x64 Editions, LINUX UBUNTU5 and Neokylin5. Citrix Certified (USB only)' },
      { label: 'PC Drivers / Software', value: 'Fully supported by Smart Touch, Kodak Info Input Solution, Kodak Capture Pro Software, and Kodak Asset Management Software (WINDOWS only); WINDOWS Bundled drivers: TWAIN, ISIS, WIA Drivers' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '12 months on-site, 3-4 business days response time' },
    ],
    overview: 'Exceptional image quality for superior accuracy. Get sharper images to deliver more accurate data to applications via OCR, searchable PDF, and barcode reading. Turn even poor-quality originals into crisp images with Perfect Page technology while scanning at rated speeds. Streak removal, background smoothing, image edge fill, and more automatic image enhancements. Verify all originals have been scanned with digital stamping on front or back of documents. Unsurpassed protection for paper and data. Advanced Intelligent Document Protection (IDP) and multi-feed detectors catch throughput problems and alert you before they become jams or misfeeds. Straight-through or U-turn paper path with adjustable feeder pressure, and optional integrated flatbed for smooth, safe document handling. Feed a wide array of sizes and weights in any batch. Larger 300-sheet feeder and output tray, plus controlled exit stacking for mixed-batch handling accuracy.',
  },
  {
    name: 'S3120',
    slug: 's3120',
    image: `${import.meta.env.BASE_URL}images/Kodak_32_153.jpg`,
    type: 'S 3000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 120 ppm/240 ipm at 200 and 300 dpi' },
      { label: 'Max Paper Size', value: '4,06 m x 305 mm' },
      { label: 'ADF Capacity', value: 'Up to 300 sheets of 80 g/m2 (20 lb.) paper' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '15.3 kg (33.8 lbs.), Depth: 370.84 mm (14.6 in.), with the input tray in the upright position; Width: 457.2 mm (18 in.); Height:254 mm (10 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen 1x1 Compatible, 10/100/1000 ETHERNET' },
      { label: 'PC Compatibility', value: 'WINDOWS 7 SP1 (32-bit and 64-bit), WINDOWS 8.1 (32-bit and 64-bit), WINDOWS 10 (32-bit and 64-bit), WINDOWS Server 2012 x64 Editions, WINDOWS Server 2016 x64 Editions, WINDOWS Server 2019 x64 Editions, LINUX UBUNTU5 and Neokylin5. Citrix Certified (USB only)' },
      { label: 'PC Drivers / Software', value: 'Fully supported by Smart Touch, Kodak Info Input Solution, Kodak Capture Pro Software, and Kodak Asset Management Software (WINDOWS only); WINDOWS Bundled drivers: TWAIN, ISIS, WIA Drivers' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '12 months on-site, 3-4 business days response time' },
    ],
    overview: 'Exceptional image quality for superior accuracy. Get sharper images to deliver more accurate data to applications via OCR, searchable PDF, and barcode reading. Turn even poor-quality originals into crisp images with Perfect Page technology while scanning at rated speeds. Streak removal, background smoothing, image edge fill, and more automatic image enhancements. Verify all originals have been scanned with digital stamping on front or back of documents. Unsurpassed protection for paper and data. Advanced Intelligent Document Protection (IDP) and multi-feed detectors catch throughput problems and alert you before they become jams or misfeeds. Straight-through or U-turn paper path with adjustable feeder pressure, and optional integrated flatbed for smooth, safe document handling. Feed a wide array of sizes and weights in any batch. Larger 300-sheet feeder and output tray, plus controlled exit stacking for mixed-batch handling accuracy.',
  },
  {
    name: 'S3140 Max',
    slug: 's3140-max',
    image: `${import.meta.env.BASE_URL}images/KODAK S3140 Max_sm.jpg`,
    type: 'S 3000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: 'up to 140 ppm' },
      { label: 'Max Paper Size', value: 'N/A' },
      { label: 'ADF Capacity', value: '500-sheet' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'N/A' },
      { label: 'Interface', value: 'N/A' },
      { label: 'PC Compatibility', value: 'N/A' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' },
    ],
    overview: 'The Kodak S3140 Max Scanner is a high-speed, high-volume document scanner that is designed for businesses that need to scan large amounts of documents quickly and accurately. The scanner has a throughput of up to 140 pages per minute (ppm) and can handle a recommended daily volume of 70,000 pages. It also features built-in image processing and networking capability, making it easy to integrate into existing business workflows. Some of the key features of the Kodak S3140 Max Scanner include: High-speed scanning: The scanner can scan up to 140 ppm, making it one of the fastest scanners in its class. Large document feeder: The scanner has a 500-sheet document feeder, so you can scan large batches of documents without having to reload the feeder frequently. Built-in image processing: The scanner features built-in image processing that can improve the quality of scanned images. Networking capability: The scanner can be networked, so multiple users can share it. Security features: The scanner includes security features such as secure boot and encryption, which help to protect your scanned data. The Kodak S3140 Max Scanner is a powerful and versatile scanner that is ideal for businesses that need to scan large amounts of documents quickly and accurately. It is easy to use and maintain, and it comes with a variety of features that make it a valuable asset to any business. Here are some additional details about the Kodak S3140 Max Scanner: The scanner supports a variety of document types, including paper, plastic cards, and receipts. The scanner can be used to scan documents to a variety of file formats, including PDF, TIFF, and JPEG. The scanner includes a software suite that makes it easy to automate scanning tasks and manage scanned data. The Kodak S3140 Max Scanner is a great choice for businesses that need a high-speed, high-volume document scanner that is easy to use and maintain. It is a powerful and versatile scanner that can help businesses to improve their efficiency and productivity.',
  },
  {
    name: 'E1030',
    slug: 'e1030',
    image: `${import.meta.env.BASE_URL}images/e1030_1.jpg`,
    type: 'E 1000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: '30 ppm' },
      { label: 'Max Paper Size', value: 'N/A' },
      { label: 'ADF Capacity', value: '80-page' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'N/A' },
      { label: 'Interface', value: 'N/A' },
      { label: 'PC Compatibility', value: 'N/A' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' },
    ],
    overview: 'The Kodak Alaris E1030 is a compact, efficient, and reliable document scanner that is perfect for small and medium-sized businesses. It has a scanning speed of 30 pages per minute (ppm) and a duplex scanning speed of 60 images per minute (ipm), making it ideal for scanning large volumes of documents. The E1030 can also scan IDs, passports, and delicate documents with its optional flatbed accessory. Key Features: Scanning speed of 30 ppm. Duplex scanning speed of 60 ipm. 80-page document feeder. Daily scan volume of 4000 pages per day. EPEAT Registered & ENERGY STAR Qualified. Intelligent Document Protection to safeguard documents from multi-feeds and provide a smooth paper path for crisp and clear professional scans. Scan to file location, common cloud services, email, networked office printers, and third-party applications. Optical Character Recognition (OCR) and Perfect Page technology to ensure scanned images look even better than the originals. Benefits: Fast and efficient scanning of large volumes of documents. Accurate and reliable scanning of IDs, passports, and delicate documents. Versatile scanning options to meet a variety of needs. Eco-friendly design. Easy to use and maintain. Ideal for: Small and medium-sized businesses. Home offices. Workgroups. Reception areas. Overall, the Kodak Alaris E1030 is a great option for businesses that need a fast, reliable, and affordable document scanner.',
  },
  {
    name: 'E1040',
    slug: 'e1040',
    image: `${import.meta.env.BASE_URL}images/Kodak_20_195.jpg`,
    type: 'E 1000 Series',
    specs: [
      { label: 'A4 Pages Per Min', value: '40 ppm' },
      { label: 'Max Paper Size', value: 'N/A' },
      { label: 'ADF Capacity', value: '80-page' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'N/A' },
      { label: 'Interface', value: 'N/A' },
      { label: 'PC Compatibility', value: 'N/A' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' },
    ],
    overview: 'The Kodak Alaris E1040 is a compact, versatile, and efficient document scanner designed for small and medium-sized businesses. It offers a scanning speed of 40 pages per minute (ppm) and a duplex scanning speed of 80 images per minute (ipm), allowing for the rapid processing of large volumes of documents. Additionally, the E1040 supports scanning IDs, passports, and delicate documents through its optional flatbed accessory. Key Features: Scanning speed of 40 ppm. Duplex scanning speed of 80 ipm. 80-page document feeder. Daily scan volume of 5000 pages per day. EPEAT Registered & ENERGY STAR Qualified. Intelligent Document Protection to prevent multi-feeds and ensure smooth paper handling for crisp, clear scans. Scan to file location, popular cloud services, email, networked office printers, and third-party applications. Optical Character Recognition (OCR) and Perfect Page technology to enhance scanned images beyond original quality. Benefits: Efficient scanning of large volumes of documents at an accelerated pace. Accurate and reliable scanning of IDs, passports, and delicate documents. Flexible scanning options to accommodate various needs. Environmentally friendly design. User-friendly interface and straightforward maintenance. Ideal for: Small and medium-sized businesses. Home offices. Workgroups. Reception areas. Overall, the Kodak Alaris E1040 is an excellent choice for businesses seeking a fast, dependable, and cost-effective document scanner.',
  },
];

export { kodakProducts };

const KodakScanners = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = kodakProducts.find(p => p.slug === productSlug);
    if (!product) {
      return <div style={{ padding: 40 }}><h2>Product Not Found</h2><button onClick={() => navigate(-1)}>Go Back</button></div>;
    }
    return <ProductInfo product={product} />;
  }

  return (
    <div className="product-page-container">
      <ProductSidebar />
      <main className="product-main">
        <h1>Kodak Scanners</h1>
        <div className="product-grid">
          {kodakProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/kodak-scanners/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default KodakScanners; 