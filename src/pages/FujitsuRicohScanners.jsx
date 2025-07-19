import React from 'react';
import './FujitsuRicohScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const fujitsuProducts = [
  // ScanSnap Series
  { name: 'ScanSnap S1100i', slug: 'scansnap-s1100i', image: `${import.meta.env.BASE_URL}images/fujitsu_66_408.jpg`, type: 'ScanSnap Series',
    overview: 'The ScanSnap S1100i is an ultra-portable, USB-powered scanner designed for professionals on the go. Its compact size makes it ideal for scanning receipts, business cards, and documents wherever you are, without the need for an external power source.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 8 ppm (simplex)' },
      { label: 'Max Paper Size', value: '216 x 360 mm' },
      { label: 'ADF Capacity', value: 'N/A (single sheet feed)' },
      { label: 'Duplex Scanning', value: 'No' },
      { label: 'Dimensions / Weight', value: '273 x 47.5 x 34 mm / 350g' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'ScanSnap Manager, CardMinder, ABBYY FineReader for ScanSnap' },
      { label: 'Mac Drivers / Software', value: 'ScanSnap Manager, CardMinder, ABBYY FineReader for ScanSnap' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  { name: 'ScanSnap iX100', slug: 'scansnap-ix100', image: `${import.meta.env.BASE_URL}images/fujitsu_69_393.jpg`, type: 'ScanSnap Series',
    overview: 'The ScanSnap iX100 is a dramatically compact, battery-powered scanner. Whether scanning receipts, contracts, recipes, or plastic cards, the iX100 takes scanning beyond the desktop and into your mobile world. Completely wireless and weighing only 400 grams, the iX100 brings mobility and wireless scanning to your PC or Mac as well as iOS or Android device.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Auto mode*2 Simplex: 5.2 seconds per page; Normal mode Simplex: 5.2 seconds per page (150 dpi); Better mode Simplex: 5.2 seconds per page (200 dpi); Best mode Simplex: 5.2 seconds per page (300 dpi); Excellent mode Simplex: 20.4 seconds per page (600 dpi)' },
      { label: 'Max Paper Size', value: '216 x 360 mm' },
      { label: 'ADF Capacity', value: 'N/A' },
      { label: 'Duplex Scanning', value: 'No' },
      { label: 'Dimensions / Weight', value: '273 x 47.5 x 36 mm / 400g' },
      { label: 'Interface', value: 'USB 2.0 (USB 1.1 Supported)' },
      { label: 'PC Compatibility', value: 'Supports Windows and Mac OS' },
      { label: 'PC Drivers / Software', value: 'ScanSnap Manager, ScanSnap Organizer (ScanSnap Sync), CardMinder™, ABBYY FineReader for ScanSnap™, Scan to Microsoft® SharePoint®, ScanSnap Receipt, ScanSnap Connect App (ScanSnap Sync*)' },
      { label: 'Mac Drivers / Software', value: 'ScanSnap Manager, ScanSnap Organizer (ScanSnap Sync), CardMinder™, ABBYY FineReader for ScanSnap™, ScanSnap Receipt, ScanSnap Connect App (ScanSnap Sync*)' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  { name: 'ScanSnap S1300i', slug: 'scansnap-s1300i', image: `${import.meta.env.BASE_URL}images/fujitsu_70_387.jpg`, type: 'ScanSnap Series',
    overview: 'The ScanSnap S1300i is a compact, portable document scanner designed for home offices and mobile professionals. It offers fast, double-sided scanning and is powered by USB, making it ideal for scanning documents, receipts, and business cards on the go.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 12 ppm (simplex), 24 ipm (duplex)' },
      { label: 'Max Paper Size', value: '216 x 360 mm' },
      { label: 'ADF Capacity', value: '10 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '284 x 99 x 77 mm / 1.4 kg' },
      { label: 'Interface', value: 'USB 2.0 (USB bus power or AC adapter)' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'ScanSnap Manager, CardMinder, ABBYY FineReader for ScanSnap, ScanSnap Organizer' },
      { label: 'Mac Drivers / Software', value: 'ScanSnap Manager, CardMinder, ABBYY FineReader for ScanSnap, ScanSnap Organizer' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  { name: 'ScanSnap SV600', slug: 'scansnap-sv600', image: `${import.meta.env.BASE_URL}images/fujitsu_73_371.jpg`, type: 'ScanSnap Series',
    overview: 'The ScanSnap SV600 is an overhead style contactless scanner that provides a new perspective on document scanning. Easily scan newspapers, magazines, books or documents of up to 30mm thick directly with the overhead LED, without cutting or damaging them.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Auto mode (2) 3 seconds / page; Normal mode 3 seconds / page (Color / Grayscale: 150 dpi, Monochrome: 300 dpi); Better mode 3 seconds / page (Color / Grayscale: 200 dpi, Monochrome: 400 dpi); Best mode 3 seconds / page (Color / Grayscale: 300 dpi, Monochrome: 600 dpi); Excellent mode 3 seconds / page (Color / Grayscale: 600 dpi, Monochrome: 1,200 dpi)' },
      { label: 'Max Paper Size', value: '432 x 300 mm (17.0 x 11.8 in.)' },
      { label: 'ADF Capacity', value: 'N/A' },
      { label: 'Duplex Scanning', value: 'No' },
      { label: 'Dimensions / Weight', value: '210 x 156 x 383 mm (8.27 × 6.14 × 15.08 in.)' },
      { label: 'Interface', value: 'USB2.0 / USB1.1 (Connector Type: Type-B)' },
      { label: 'PC Compatibility', value: 'Supports Windows and Mac OS' },
      { label: 'PC Drivers / Software', value: 'ScanSnap Home, ScanSnap Manager, ABBYY FineReader for ScanSnap™, Kofax Power PDF Standard' },
      { label: 'Mac Drivers / Software', value: 'ScanSnap Home, ScanSnap Manager, ABBYY FineReader for ScanSnap™, Kofax Power PDF Standard' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  { name: 'ScanSnap IX1400', slug: 'scansnap-ix1400', image: `${import.meta.env.BASE_URL}images/fujitsu_65f.jpg`, type: 'ScanSnap Series',
    overview: 'ScanSnap iX1400 is equipped with simplicity and does not compromise on speed and image quality. Users are able to experience scanning with the push of one-button. It is a simple and secure model that comes with USB connectivity that allows customers to scan in environments where use of Wi-Fi is limited.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Auto mode*3 Simplex / Duplex: 40 ppm; Normal mode Simplex / Duplex: 40 ppm (Color / Grayscale: 150 dpi, Monochrome: 300 dpi); Better mode Simplex / Duplex: 40 ppm (Color / Grayscale: 200 dpi, Monochrome: 400 dpi); Best mode Simplex / Duplex: 40 ppm (Color / Grayscale: 300 dpi, Monochrome: 600 dpi); Excellent mode*4 Simplex / Duplex: 10 ppm (Color / Grayscale: 600 dpi, Monochrome: 1,200 dpi)' },
      { label: 'Max Paper Size', value: 'Minimum 50.8 x 50.8 mm (2 x 2 in.)' },
      { label: 'ADF Capacity', value: '50 sheets (A4, 80 g/m2 or 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '292 x 161 x 152 mm (11.5 x 6.3 x 6.0 in.)' },
      { label: 'Interface', value: 'USB3.2 Gen1x1 / USB2.0 / USB1.1 (Connector Type: Type-B)' },
      { label: 'PC Compatibility', value: 'N/A' },
      { label: 'PC Drivers / Software', value: 'ScanSnap Home (All-in-one document management software/driver), ScanSnap Manager (Conventional driver), ABBYY FineReader for ScanSnap™' },
      { label: 'Mac Drivers / Software', value: 'ScanSnap specific driver Windows®: Does not support TWAIN / ISIS® macOS: Does not support TWAIN' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  { name: 'ScanSnap IX1500', slug: 'scansnap-ix1500', image: `${import.meta.env.BASE_URL}images/fujitsu_75_364.jpg`, type: 'ScanSnap Series',
    overview: 'The ScanSnap IX1500 is a user-friendly, touch-screen scanner designed for home and small office use. It offers fast, double-sided scanning, Wi-Fi connectivity, and a large color touch screen for easy operation and workflow customization.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 30 ppm (simplex), 60 ipm (duplex)' },
      { label: 'Max Paper Size', value: '216 x 360 mm' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '292 x 161 x 152 mm / 3.4 kg' },
      { label: 'Interface', value: 'USB 3.1, Wi-Fi' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'ScanSnap Home, ScanSnap Manager, ABBYY FineReader for ScanSnap' },
      { label: 'Mac Drivers / Software', value: 'ScanSnap Home, ScanSnap Manager, ABBYY FineReader for ScanSnap' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  { name: 'ScanSnap iX1600', slug: 'scansnap-ix1600', image: `${import.meta.env.BASE_URL}images/fujitsu_79_343.jpg`, type: 'ScanSnap Series',
    overview: 'ScanSnap iX1600 is the evolved flagship model of the ScanSnap series, enabling scanning at higher speeds of 40 ppm/80 ipm (A4-size documents, color, 300dpi). It comes with the all-familiar 4.3-inch touch screen to bridge the gap where the physical and digital meets. The device comes with Wi-Fi connectivity, making it the perfect model for team sharing and combined use with cloud services.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Auto mode*2 Simplex / Duplex: 40 ppm; Normal mode Simplex / Duplex: 40 ppm (Color / Grayscale: 150 dpi, Monochrome: 300 dpi); Better mode Simplex / Duplex: 40 ppm (Color / Grayscale: 200 dpi, Monochrome: 400 dpi); Best mode Simplex / Duplex: 40 ppm (Color / Grayscale: 300 dpi, Monochrome: 600 dpi); Excellent mode*3 Simplex / Duplex: 10 ppm (Color / Grayscale: 600 dpi, Monochrome: 1,200 dpi)' },
      { label: 'Max Paper Size', value: '216 x 360 mm (8.5 x 14.17 in.)' },
      { label: 'ADF Capacity', value: '50 sheets (A4, 80 g/m2 or 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '292 x 161 x 152 mm (11.5 x 6.3 x 6.0 in.)' },
      { label: 'Interface', value: 'USB3.2 Gen1x1 / USB2.0 / USB1.1 (Connector Type: Type-B)' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'ScanSnap Home, ScanSnap Manager, Kofax Power PDF Standard (Windows), ABBYY FineReader for ScanSnap™' },
      { label: 'Mac Drivers / Software', value: 'ScanSnap Home, ScanSnap Manager, Kofax Power PDF Standard for Mac (Mac), ABBYY FineReader for ScanSnap™' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  // Flatbed Series
  {
    name: 'fi-7240',
    slug: 'fi-7240',
    image: `${import.meta.env.BASE_URL}images/fujitsu_80_338.jpg`,
    type: 'Flatbed Series',
    overview: 'The fi-7240 provides high quality technology for reliable scanning and enhanced image processing functionalities to significantly empower business workflows. The device scans A4 portrait documents at 40 ppm/80 ipm (200/300 dpi), loads up to 80 sheets at a time with scanning capacity up to as many as 6,000 sheets a day. It ensures utmost efficiency with amazing scanning performance.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 40 ppm (200/300 dpi) Duplex: 80 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '80 Sheets (A4: 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 577 x 234 mm (11.8 x 22.7 x 9.2 in.)' },
      { label: 'Interface', value: 'USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  { name: 'fi-7260', slug: 'fi-7260', image: `${import.meta.env.BASE_URL}images/fujitsu_81_335.jpg`, type: 'Flatbed Series',
    overview: 'The fi-7260 is a versatile departmental scanner featuring both an ADF and flatbed for flexible document capture. It is ideal for offices that need to scan a variety of document types, including bound materials and fragile originals.',
    specs: [
      { label: 'A4 Pages Per Min', value: '60 ppm (simplex), 120 ipm (duplex)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm (ADF), up to A4 (flatbed)' },
      { label: 'ADF Capacity', value: '80 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 577 x 234 mm / 8.6 kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac (limited)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP, PaperStream Capture, ABBYY FineReader for ScanSnap' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  { name: 'fi-7280', slug: 'fi-7280', image: `${import.meta.env.BASE_URL}images/fujitsu_82_332.jpg`, type: 'Flatbed Series',
    overview: 'The fi-7280 is a high-speed scanner with both ADF and flatbed, designed for demanding office environments. It offers fast duplex scanning and advanced image processing for a wide range of document types.',
    specs: [
      { label: 'A4 Pages Per Min', value: '80 ppm (simplex), 160 ipm (duplex)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm (ADF), up to A4 (flatbed)' },
      { label: 'ADF Capacity', value: '80 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 577 x 234 mm / 8.6 kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac (limited)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP, PaperStream Capture, ABBYY FineReader for ScanSnap' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'FI-7700S',
    slug: 'fi-7700s',
    image: `${import.meta.env.BASE_URL}images/fujitsu_98_262.jpg`,
    type: 'Flatbed Series',
    overview: 'The fi-7700S achieves scanning speeds of 75 ppm (A4 landscape, color, 200/300 dpi), is capable of loading up to 300 sheets at a time and scanning up to as many as 33,000 sheets a day. With its high quality technologies and user-friendly design, the scanner is suitable for continuous high volume scanning.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 75 ppm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '304.8 x 431.8 mm (12 x 17 in.)' },
      { label: 'ADF Capacity', value: '300 sheets (A4 80 g/m2 or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'No' },
      { label: 'Dimensions / Weight', value: '706 x 500 x 345 mm (27.8 x 19.7 x 13.6 in.)' },
      { label: 'Interface', value: 'USB 3.1 Gen 1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'fi-65F',
    slug: 'fi-65f',
    image: `${import.meta.env.BASE_URL}images/fujitsu_89_293.jpg`,
    type: 'Flatbed Series',
    overview: 'The fi-65F designed for portability and compact spaces guarantees simple and fast scanning for a variety of identification and small cards.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Color: 1.7 seconds (200 dpi) Grayscale/Monochrome: 1.0 seconds (200/300 dpi)' },
      { label: 'Max Paper Size', value: '105 x 148 mm (4.1 x 5.8 in.)' },
      { label: 'ADF Capacity', value: 'N/A' },
      { label: 'Duplex Scanning', value: 'No' },
      { label: 'Dimensions / Weight', value: '145 x 234 x 40 mm (5.7 x 9.2 x 1.6 in.)' },
      { label: 'Interface', value: 'USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'SP-1425',
    slug: 'sp-1425',
    image: `${import.meta.env.BASE_URL}images/fujitsu_90_286.jpg`,
    type: 'Flatbed Series',
    overview: 'The SP-1425 is an A4-compatible ADF scanner equipped with a flatbed. Designed to be placed in limited spaces, the scanner delivers simple operation and reliable performance.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 25 ppm (200/300 dpi) Duplex: 50 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '216 x 356 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 sheets (A4 80 g/m2 or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '454 x 331 x 129 mm (17.9 x 13 x 5.1 in.)' },
      { label: 'Interface', value: 'USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP for SP Series (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for Linux (SANE), PaperStream Capture Lite, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, Scanner Central Admin, ABBYY™ FineReader Sprint™, Presto!™ PageManager™' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'SP-1130',
    slug: 'sp-1130',
    image: `${import.meta.env.BASE_URL}images/fujitsu_94_278.jpg`,
    type: 'Flatbed Series',
    overview: 'The SP-1130N provides high-value performance as an entry-level model for your business with scanning speeds of 30 ppm/60 ipm (A4 portrait, color, 200 / 300 dpi), ADF capacity of 50 sheets, ability to scan a wide range of documents.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 30 ppm (200/300 dpi) Duplex: 60 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 sheets (A4 80 g/m2 or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '298 x 135 x 133 mm (11.7 x 5.3 x 5.2 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen 1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, macOS, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP for SP Series (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for macOS (ICA), Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap, Scanner Central Admin, ABBYY™ FineReader Sprint™, Network Setup Tool for SP Series, SP Series Online Update' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'SP-1125',
    slug: 'sp-1125',
    image: `${import.meta.env.BASE_URL}images/fujitsu_95_273.jpg`,
    type: 'Flatbed Series',
    overview: 'The SP-1125N provides high-value performance as an entry-level model for your business with scanning speeds of 25 ppm/50 ipm (A4 portrait, color, 200 / 300 dpi), ADF capacity of 50 sheets, ability to scan a wide range of documents.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 25 ppm (200/300 dpi) Duplex: 50 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 sheets (A4 80 g/m2 or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '298 x 135 x 133 mm (11.7 x 5.3 x 5.2 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen 1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, macOS, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP for SP Series (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for macOS (ICA), Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap, Scanner Central Admin, ABBYY™ FineReader Sprint™, Network Setup Tool for SP Series, SP Series Online Update' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'SP-1120',
    slug: 'sp-1120',
    image: `${import.meta.env.BASE_URL}images/fujitsu_96_268.jpg`,
    type: 'Flatbed Series',
    overview: 'The SP-1120N provides high-value performance as an entry-level model for your business with scanning speeds of 20 ppm/40 ipm (A4 portrait, color, 200 / 300 dpi), ADF capacity of 50 sheets, ability to scan a wide range of documents.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 20 ppm (200/300 dpi) Duplex: 40 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 sheets (A4 80 g/m2 or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '298 x 135 x 133 mm (11.7 x 5.3 x 5.2 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen 1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, macOS, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP for SP Series (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for macOS (ICA), Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap, Scanner Central Admin, ABBYY™ FineReader Sprint™, Network Setup Tool for SP Series, SP Series Online Update' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'FI-800R',
    slug: 'fi-800r',
    image: `${import.meta.env.BASE_URL}images/fujitsu_97_265.jpg`,
    type: 'Flatbed Series',
    overview: 'The fi-800R achieves scanning speeds of 40 ppm/80 ipm with ADF and 3.5 seconds per sheet with Manual Feed (A4 portrait, color, 200/300 dpi), and is capable of scanning up to as many as 4,500 sheets a day. With its compact design, the scanner is ideal to use when space is limited, enabling better customer onboarding in spaces like reception desks and service counters.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 40 ppm (200/300 dpi) Duplex: 80 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '20 sheets (A4 80 g/m² or Letter 20 lb) 30 sheets (A4 52 g/m² or Letter 14 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '296 x 105 x 83 mm (11.7 x 4.1 x 3.3 in.)' },
      { label: 'Interface', value: 'USB 3.2 Gen1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008, macOS, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for macOS (ICA), Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  // Desktop Series
  { name: 'Fi-7030', slug: 'fi-7030', image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8170_2.jpg`, type: 'Desktop Series',
    overview: 'The fi-7030 is a compact desktop scanner designed for small and medium-sized businesses. It offers reliable, high-quality scanning for a variety of documents, including plastic cards and long paper.',
    specs: [
      { label: 'A4 Pages Per Min', value: '27 ppm (simplex), 54 ipm (duplex)' },
      { label: 'Max Paper Size', value: '216 x 5588 mm (long paper mode)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '298 x 135 x 133 mm / 2.9 kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac (limited)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP, PaperStream Capture, ABBYY FineReader for ScanSnap' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  { name: 'fi-7140', slug: 'fi-7140', image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8270_2.jpg`, type: 'Desktop Series',
    overview: 'The fi-7140 is a fast, reliable desktop scanner for busy workgroups. It features advanced paper handling and image processing, making it suitable for scanning a wide range of documents quickly and efficiently.',
    specs: [
      { label: 'A4 Pages Per Min', value: '40 ppm (simplex), 80 ipm (duplex)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm' },
      { label: 'ADF Capacity', value: '80 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 170 x 163 mm / 3.2 kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac (limited)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP, PaperStream Capture, ABBYY FineReader for ScanSnap' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  { name: 'fi-7160', slug: 'fi-7160', image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8180_2.jpg`, type: 'Desktop Series',
    overview: 'The fi-7160 is a robust, high-speed scanner designed for heavy-duty office use. It offers advanced feeding mechanisms and image enhancement features for reliable, high-volume scanning.',
    specs: [
      { label: 'A4 Pages Per Min', value: '60 ppm (simplex), 120 ipm (duplex)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm' },
      { label: 'ADF Capacity', value: '80 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 170 x 163 mm / 4.2 kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac (limited)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP, PaperStream Capture, ABBYY FineReader for ScanSnap' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'Fujitsu fi-8190',
    slug: 'fi-8190',
    image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8190_2.jpg`,
    type: 'Desktop Series',
    overview: 'The fi-8190 provides unmatched performance and market-leading document imaging capabilities. Compact and reliable, the scanner achieves scan speeds of 90 ppm/180 ipm (200/300 dpi, color, A4 portrait), loads up to 100 sheets at a time, and comes equipped with a capability of scanning up to as many as 13,000 sheets a day.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex 90 ppm (200/300 dpi) Duplex 180 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 170 x 163 mm (11.8 x 6.7 x 6.4 in.) 4 kg (8.8 lb)' },
      { label: 'Interface', value: 'USB 3.2 Gen1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 11, 10, 8.1, 7, Windows Server® 2022, 2019, 2016, 2012 R2, 2012, 2008 R2, macOS, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for macOS (ICA), Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, PaperStream NX Manager, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin, 2D Barcode for PaperStream' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Fujitsu fi-8290',
    slug: 'fi-8290',
    image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8290_2.jpg`,
    type: 'Desktop Series',
    overview: 'The fi-8290 provides unmatched performance and market-leading document imaging capabilities. It offers versatile scanning, with flatbed and ADF, providing quick scans in just 1.7 seconds ipm (200/300 dpi) as flatbed, and 90 ppm/180 ipm (200/300 dpi, color, A4 portrait) as ADF. The scanner loads up to 100 sheets at a time, and comes equipped with a capability of scanning up to as many as 13,000 sheets a day.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 90 ppm (200/300 dpi) Duplex: 180 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 577 x 234 mm (11.8 x 22.7 x 9.2 in.) 8.8 kg (19.4 lb)' },
      { label: 'Interface', value: 'USB 3.2 Gen1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 11, 10, 8.1, 7, Windows Server® 2022, 2019, 2016, 2012 R2, 2012, 2008 R2, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, PaperStream NX Manager, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin, 2D Barcode for PaperStream' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Fujitsu fi-8170',
    slug: 'fi-8170',
    image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8170_2.jpg`,
    type: 'Desktop Series',
    overview: 'The fi-8170 offers an innovative and superior scanning experience. Compact and reliable, the scanner achieves scan speeds of 70 ppm/140 ipm (200/300 dpi, color, A4 portrait), loads up to 100 sheets at a time, and comes equipped with a capability of scanning up to as many as 10,000 sheets a day.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex 70 ppm (200/300 dpi) Duplex 140 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 170 x 163 mm (11.8 x 6.7 x 6.4 in.) 4 kg (8.8 lb)' },
      { label: 'Interface', value: 'USB 3.2 Gen1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 11, 10, 8.1, 7, Windows Server® 2022, 2019, 2016, 2012 R2, 2012, 2008 R2, macOS, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for macOS (ICA), Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, PaperStream NX Manager, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin, 2D Barcode for PaperStream' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Fujitsu fi-8270',
    slug: 'fi-8270',
    image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8270_2.jpg`,
    type: 'Desktop Series',
    overview: 'The fi-8270 offers an innovative and superior experience, and comes with versatile scanning as flatbed and ADF. It provides quick scans in just 1.7 seconds ipm (200/300 dpi) as flatbed, and 70 ppm/140 ipm (200/300 dpi, color, A4 portrait) as ADF. The scanner loads up to 100 sheets at a time, and comes equipped with a capability of scanning up to as many as 10,000 sheets a day.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 70 ppm (200/300 dpi) Duplex: 140 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 577 x 234 mm (11.8 x 22.7 x 9.2 in.) 8.8 kg (19.4 lb)' },
      { label: 'Interface', value: 'USB 3.2 Gen1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 11, 10, 8.1, 7, Windows Server® 2022, 2019, 2016, 2012 R2, 2012, 2008 R2, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, PaperStream NX Manager, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin, 2D Barcode for PaperStream' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Fujitsu fi-8150',
    slug: 'fi-8150',
    image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8150_2.jpg`,
    type: 'Desktop Series',
    overview: 'The fi-8150 offers an innovative and superior scanning experience. Compact and reliable, the scanner achieves scan speeds of 50 ppm/100 ipm (200/300 dpi, color, A4 portrait), loads up to 100 sheets at a time, and comes equipped with a capability of scanning up to as many as 8,000 sheets a day.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex 50 ppm (200/300 dpi) Duplex 100 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 170 x 163 mm (11.8 x 6.7 x 6.4 in.) 4 kg (8.8 lb)' },
      { label: 'Interface', value: 'USB 3.2 Gen1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 11, 10, 8.1, 7, Windows Server® 2022, 2019, 2016, 2012 R2, 2012, 2008 R2, macOS, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for macOS (ICA), Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, PaperStream NX Manager, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Fujitsu fi-8250',
    slug: 'fi-8250',
    image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8250_2.jpg`,
    type: 'Desktop Series',
    overview: 'The fi-8250 offers an innovative and superior experience, and comes with versatile scanning as flatbed and ADF. It provides quick scans in just 1.7 seconds ipm (200/300 dpi) as flatbed, and 50 ppm/100 ipm (200/300 dpi, color, A4 portrait) as ADF. The scanner loads up to 100 sheets at a time, and comes equipped with a capability of scanning up to as many as 8,000 sheets a day.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 50 ppm (200/300 dpi) Duplex: 100 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '215.9 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 577 x 234 mm (11.8 x 22.7 x 9.2 in.) 8.8 kg (19.4 lb)' },
      { label: 'Interface', value: 'USB 3.2 Gen1x1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 11, 10, 8.1, 7, Windows Server® 2022, 2019, 2016, 2012 R2, 2012, 2008 R2, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, PaperStream NX Manager, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'FI-8040',
    slug: 'fi-8040',
    image: `${import.meta.env.BASE_URL}images/fujitsu_fi_8040_overview02.jpg`,
    type: 'Desktop Series',
    overview: 'The RICOH fi-8040 is a high-speed, high-resolution document scanner designed for businesses that need to scan large amounts of documents quickly and accurately. It features Clear Image Capture, DirectScan, and Scanner Central Admin for remote management.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 40 ppm' },
      { label: 'Max Paper Size', value: 'Supports a variety of document types, including paper, plastic cards, and receipts.' },
      { label: 'ADF Capacity', value: 'N/A' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'N/A' },
      { label: 'Interface', value: 'LAN, USB' },
      { label: 'PC Compatibility', value: 'Windows, Mac, Linux' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP, PaperStream Capture, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'PaperStream IP, PaperStream Capture, Scanner Central Admin' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  // Departmental Series
  {
    name: 'fi-7460',
    slug: 'fi-7460',
    image: `${import.meta.env.BASE_URL}images/fujitsu_101_428.jpg`,
    type: 'Departmental Series',
    overview: 'The fi-7460 provides high quality technology for reliable scanning and enhanced image processing functionalities to significantly empower business workflows. Even with its compact size, the device scans A4 landscape documents at 60 ppm/120 ipm (200/300 dpi), and is capable of loading up to 100 sheets at a time and scanning up to as many as 18,000 sheets a day.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 60 ppm (200/300 dpi) Duplex: 120 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '304.8 x 431.8 mm (12 x 17 in.)' },
      { label: 'ADF Capacity', value: '100 sheets (A4 80 g/m2 or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '380 x 209 x 168 mm (15.0 x 8.2 x 6.6 in.)' },
      { label: 'Interface', value: 'USB 3.0 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin, 2D Barcode for PaperStream' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'fi-7480',
    slug: 'fi-7480',
    image: `${import.meta.env.BASE_URL}images/fujitsu_103_420.jpg`,
    type: 'Departmental Series',
    overview: 'The fi-7480 provides high quality technology for reliable scanning and enhanced image processing functionalities to significantly empower business workflows. Even with its compact size, the device scans A4 landscape documents at 80 ppm/160 ipm (200/300 dpi), and is capable of loading up to 100 sheets at a time and scanning up to as many as 24,000 sheets a day.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 80 ppm (200/300 dpi) Duplex: 160 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '304.8 x 431.8 mm (12 x 17 in.)' },
      { label: 'ADF Capacity', value: '100 sheets (A4 80 g/m2 or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '380 x 209 x 168 mm (15.0 x 8.2 x 6.6 in.)' },
      { label: 'Interface', value: 'USB 3.0 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008, Linux (Ubuntu)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, Image Scanner Driver for Linux (SANE), PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin, 2D Barcode for PaperStream' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'FI-7600',
    slug: 'fi-7600',
    image: `${import.meta.env.BASE_URL}images/fujitsu_88_297.jpg`,
    type: 'Departmental Series',
    overview: 'The fi-7600 achieves scanning speeds of 100 ppm/200 ipm (A4 landscape, color, 200/300 dpi), is capable of loading up to 300 sheets at a time and scanning up to as many as 44,000 sheets a day. With its high quality technologies and user-friendly design, the scanner is suitable for continuous high volume scanning.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 100 ppm (200/300 dpi) Duplex: 200 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '304.8 x 431.8 mm (12 x 17 in.)' },
      { label: 'ADF Capacity', value: '300 sheets (A4 80 g/m2 or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '236 x 432 x 214 mm (9.3 x 17.0 x 8.4 in.)' },
      { label: 'Interface', value: 'USB 3.1 Gen 1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Error Recovery Guide, ABBYY FineReader for ScanSnap™, Scanner Central Admin, 2D Barcode for PaperStream' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'fi-6670',
    slug: 'fi-6670',
    image: `${import.meta.env.BASE_URL}images/fujitsu_79_343.jpg`,
    type: 'Departmental Series',
    overview: 'The fi-6670 delivers intelligent, reliable production scanning for a more productive work environment. Designed with outstanding paper handling, high scan speeds up to 90ppm/180ipm and intelligent productivity enhancement features, the fi-6670 scanner delivers the automation and dependability needed for production scanning applications.',
    specs: [
      { label: 'A4 Pages Per Min', value: '50 to 600 dpi' },
      { label: 'Max Paper Size', value: 'A3 Portrait (297 x 420 mm or 11.7 x 16.5 in.)' },
      { label: 'ADF Capacity', value: '200 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '641 x 432 x 300 mm / 17kg' },
      { label: 'Interface', value: 'USB' },
      { label: 'PC Compatibility', value: 'Windows® 10 (32-bit/64-bit), Windows® 8.1/8 (32-bit/64-bit), Windows® 7 (32-bit/64-bit), Windows Vista® (32-bit/64-bit), Windows Server® 2016 (64-bit), Windows Server® 2012 R2 (64-bit), Windows Server® 2012 (64-bit), Windows Server® 2008 R2 (64-bit), Windows Server® 2008 (32-bit/64-bit)' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP driver (TWAIN/TWAIN x64/ISIS), 2D Barcode for PaperStream, Software Operation Panel, Error Recovery Guide, PaperStream Capture, ScanSnap Manager for fi Series, Scan to Microsoft SharePoint, ABBYY FineReader for ScanSnap, Scanner Central Admin Agent' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'FI-7800',
    slug: 'fi-7800',
    image: `${import.meta.env.BASE_URL}images/fujitsu_101_428.jpg`,
    type: 'Departmental Series',
    overview: 'The fi-7800 achieves scanning speeds of 110 ppm/220 ipm (A4 landscape, color, 200/300 dpi), is capable of scanning up to as many as 100,000 sheets a day, and is highly optimized for centralized scanning. The scanner is designed with operator usability as its first priority.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 110 ppm (200/300 dpi) Duplex: 220 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '304.8 x 431.8 mm (12 x 17 in.)' },
      { label: 'ADF Capacity', value: '500 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '460 x 430 x 310 mm (18.1 x 16.9 x 12.2 in.)' },
      { label: 'Interface', value: 'USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, PaperStream Capture, PaperStream ClickScan, 2D Barcode for PaperStream, Software Operation Panel, Error Recovery Guide, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'FI-7900',
    slug: 'fi-7900',
    image: `${import.meta.env.BASE_URL}images/fujitsu_103_420.jpg`,
    type: 'Departmental Series',
    overview: 'The fi-7900 achieves scanning speeds of 120 ppm/240 ipm (A4 landscape, color, 200/300 dpi), is capable of scanning up to as many as 120,000 sheets a day, and is highly optimized for centralized scanning. The scanner is designed with operator usability as its first priority.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 120 ppm (200/300 dpi) Duplex: 240 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '304.8 x 431.8 mm (12 x 17 in.)' },
      { label: 'ADF Capacity', value: '600 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '460 x 430 x 310 mm (18.1 x 16.9 x 12.2 in.)' },
      { label: 'Interface', value: 'USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, PaperStream Capture, PaperStream ClickScan, 2D Barcode for PaperStream, Software Operation Panel, Error Recovery Guide, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  // Network Series
  {
    name: 'N7100',
    slug: 'n7100',
    image: `${import.meta.env.BASE_URL}images/fujitsu_75_364.jpg`,
    type: 'Network Series',
    overview: 'The N7100E network scanner secures stand-alone network operations and improves business processes through secure Ethernet connectivity and an extra-large touchscreen for customizable jobs.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 25 ppm (200, 300 dpi), Duplex: 50 ipm (200, 300 dpi)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm' },
      { label: 'ADF Capacity', value: '50 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 232 x 172 mm / 6 kg' },
      { label: 'Interface', value: '10BASE-T, 100BASE-TX, 1000 BASE-T' },
      { label: 'PC Compatibility', value: 'N/A' },
      { label: 'PC Drivers / Software', value: 'N/A' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'FI-7300',
    slug: 'fi-7300',
    image: `${import.meta.env.BASE_URL}images/fujitsu_73_371.jpg`,
    type: 'Network Series',
    overview: 'The fi-7300NX boasts a speed of 60 ppm/120 ipm (200/300 dpi) for scanning A4 portraits, loads up to 80 sheets at a time. Scan from the scanner with touch screen operation and various authentication methods for improved efficiency and security.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Simplex: 60 ppm (200/300 dpi) Duplex: 120 ipm (200/300 dpi)' },
      { label: 'Max Paper Size', value: '216 x 355.6 mm (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '80 sheets (A4 80 g/m² or Letter 20 lb)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '300 x 202 x 170 mm (11.8 x 7.9 x 6.6 in.)' },
      { label: 'Interface', value: 'USB 3.1 Gen1 / USB 2.0 / USB 1.1' },
      { label: 'PC Compatibility', value: 'Windows® 10, 8.1, 7, Windows Server® 2019, 2016, 2012 R2, 2012, 2008 R2, 2008' },
      { label: 'PC Drivers / Software', value: 'PaperStream IP Driver (TWAIN/TWAIN x64/ISIS), WIA Driver, PaperStream Capture, PaperStream ClickScan, Software Operation Panel, Network Setup Tool, ABBYY FineReader for ScanSnap™, Scanner Central Admin' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
];

export { fujitsuProducts };

const FujitsuRicohScanners = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = fujitsuProducts.find(p => p.slug === productSlug);
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
          <li className="active">Fujitsu-RICOH Scanners</li>
          <li><Link to="/kodak-scanners">Kodak Scanners</Link></li>
          <li><Link to="/microfilm-scanners">Microfilm Scanners</Link></li>
          <li><Link to="/scanning-software">Scanning Software</Link></li>
          <li><Link to="/servers">Servers</Link></li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Fujitsu-RICOH Scanners</h1>
        <div className="product-grid">
          {fujitsuProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/fujitsu-ricoh-scanners/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FujitsuRicohScanners; 