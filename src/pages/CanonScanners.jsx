import React from 'react';
import './CanonScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import ProductSidebar from '../components/ProductSidebar';

const canonProducts = [
  {
    name: 'DR-F120',
    slug: 'dr-f120',
    image: `${import.meta.env.BASE_URL}images/Canon_37_548.jpg`,
    type: 'Flatbed Scanner',
    overview: 'The DR-F120 is a compact all-in-one scanning solution with both an automatic document feeder (ADF) and flatbed, offering fast 20ppm scanning, flexible media handling, and superior image quality for small offices.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'A4 / LTR, Portrait, 200dpi: Black and White: 20ppm (simplex) / 36ipm (duplex); Grayscale: 20ppm (simplex) / 36ipm (duplex); Colour: 10ppm (simplex) / 18ipm (duplex)' },
      { label: 'Max Paper Size', value: 'Width: 51 – 216 mm, Length: 89 – 356 mm' },
      { label: 'ADF Capacity', value: '50 sheets (80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 469 (W) x 335 (D) x 120 (H) mm; Tray Opened: 469 (W) x 335 (D) x 151 (H) mm' },
      { label: 'Interface', value: 'High speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver (Windows XP/VISTA/7/8/10 Server 2008/Server 2012); CaptureOnTouch; EMC Captiva Cloud Runtime Controls' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-G2090',
    slug: 'dr-g2090',
    image: `${import.meta.env.BASE_URL}images/Canon_38_544.jpg`,
    type: 'Production Scanner',
    overview: 'The DR-G2090 is a high-speed production scanner for large-volume document processing, offering up to 150ipm duplex scanning, robust design, and advanced image processing.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Black and White/Grayscale/Colour: 75ppm (simplex) / 150ipm (duplex)' },
      { label: 'Max Paper Size', value: 'A3/ LGL Width: 50 – 305 mm Length: 70 – 432 mm' },
      { label: 'ADF Capacity', value: '300 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 480 (W) x 569 (D) x 315 (H)mm; Tray Open: 480 (W) x 723 (D) x 390 (H)mm' },
      { label: 'Interface', value: 'USB 3.1' },
      { label: 'PC Compatibility', value: 'Windows' },
      { label: 'PC Drivers / Software', value: 'ISIS Driver, TWAIN Driver (32/64bit), WIA Driver, Kofax VRS Driver, CaptureOnTouch Pro, Driver Setting Tool' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-G2110',
    slug: 'dr-g2110',
    image: `${import.meta.env.BASE_URL}images/Canon_39_540.jpg`,
    type: 'Production Scanner',
    overview: 'The DR-G2110 is a robust, high-speed production scanner with network capability, ideal for centralized scanning in large organizations, handling up to 110ppm and 500-sheet ADF.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 220 ipm' },
      { label: 'Max Paper Size', value: 'Width: 2” - 12” Length: 2.8” - 17”' },
      { label: 'ADF Capacity', value: 'Up to 500 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '12.4’’ x 18.9’’ x 22.4’’ (with trays closed)' },
      { label: 'Interface', value: 'Hi-Speed USB 3.1, 10Base-T/ 100Base-TX/1000Base-T Ethernet' },
      { label: 'PC Compatibility', value: 'Windows 7/8/8.1/10 (32-bit/64-bit) or later, Windows Server 2008 R2/ 2012 R2/2016' },
      { label: 'PC Drivers / Software', value: 'ISIS/TWAIN Canon CaptureOnTouch, Kofax VRS Professional' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-G2140',
    slug: 'dr-g2140',
    image: `${import.meta.env.BASE_URL}images/Canon_40_536.jpg`,
    type: 'Production Scanner',
    overview: 'The DR-G2140 is a network-ready, ultra-fast production scanner with advanced paper handling and image processing for high-volume environments, up to 140ppm/280ipm.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Up to 140 ppm/Up to 280 ipm' },
      { label: 'Max Paper Size', value: 'Width: 2 - 12 Length: 2.8 - 17' },
      { label: 'ADF Capacity', value: 'Up to 500 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '12.4 x 18.9 x 22.4 (with trays closed)' },
      { label: 'Interface', value: 'Hi-Speed USB 3.1, 10Base-T/ 100Base-TX/1000Base-T Ethernet' },
      { label: 'PC Compatibility', value: 'Windows 8.1 (32bit/64bit), Windows 10 (32bit/64bit), Microsoft Windows Server 2012 R2, Microsoft Windows Server 2016, Microsoft Windows Server 2019' },
      { label: 'PC Drivers / Software', value: 'ISIS/TWAIN Canon CaptureOnTouch, Kofax VRS Professional' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-X10C',
    slug: 'dr-x10c',
    image: `${import.meta.env.BASE_URL}images/Canon_41_534.jpg`,
    type: 'Production Scanner',
    overview: 'The DR-X10C is a premium production scanner with exceptional image quality, high-speed scanning up to 130ppm/256ipm, and advanced paper protection features for demanding environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'A4 / LTR, Portrait, 200dpi: Black and White: 100ppm (simplex) / 200ipm (duplex); Grayscale: 100ppm (simplex) / 200ipm (duplex); Colour: 100ppm (simplex) / 200ipm (duplex); A4 / LTR, Landscape, 200dpi: Black and White: 130ppm (simplex) / 256ipm (duplex); Grayscale: 130ppm (simplex) / 256ipm (duplex); Colour: 130ppm (simplex) / 256ipm (duplex)' },
      { label: 'Max Paper Size', value: 'Width: 50.8 – 305 mm, Length: 70 – 432 mm' },
      { label: 'ADF Capacity', value: '500 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Trays closed: 528 × 563 × 375 mm; Trays open: 528 x 861 x 432 mm' },
      { label: 'Interface', value: 'SCSI-III / Hi-speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows' },
      { label: 'PC Drivers / Software', value: 'ISIS/TWAIN CapturePerfect, Job Registration Tool' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-6010C',
    slug: 'dr-6010c',
    image: `${import.meta.env.BASE_URL}images/Canon_42_528.jpg`,
    type: '6000 Series',
    overview: 'The DR-6010C is a fast departmental scanner with a 100-sheet ADF, flexible paper handling, and energy-efficient design for busy office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'A4 / LTR, Portrait, 200dpi: Black and White: 60ppm (simplex) / 120ipm (duplex); Grayscale: 60ppm (simplex) / 120ipm (duplex); Colour: 60ppm (simplex) / 120ipm (duplex)' },
      { label: 'Max Paper Size', value: 'Width: 53 – 219 mm, Length: 70 – 356 mm; up to 297 × 420 mm in Folio mode, up to 3,000 mm in Long Document Mode.' },
      { label: 'ADF Capacity', value: '100 Sheets (80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 318 (W) × 278 (D) × 185.5 (H) mm; Tray Opened: 318 (W) × 545 (D) ×187 (H) mm at U-Turn path' },
      { label: 'Interface', value: 'Dual Interface (High speed USB 2.0 & SCSI-3)' },
      { label: 'PC Compatibility', value: 'Windows' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver (Windows 2000 / XP / VISTA / 7 / 8 / 10) CapturePerfect Kofax VRS' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-6030C',
    slug: 'dr-6030c',
    image: `${import.meta.env.BASE_URL}images/Canon_43_524.jpg`,
    type: '6000 Series',
    overview: 'The DR-6030C is a compact A3 production scanner with rapid color scanning speeds, advanced image processing, and reliable paper handling for high-volume environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'A4 / LTR, Portrait, 200dpi: Black and White: 60ppm (simplex) / 120ipm (duplex); Grayscale: 60ppm (simplex) / 120ipm (duplex); Colour: 60ppm (simplex) / 120ipm (duplex); A4 / LTR, Landscape, 200dpi: Black and White: 80ppm (simplex) / 160ipm (duplex); Grayscale: 80ppm (simplex) / 160ipm (duplex); Colour: 80ppm (simplex) / 160ipm (duplex)' },
      { label: 'Max Paper Size', value: 'Width: 53 –300 mm, Length: 70 – 432 mm' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Trays closed: 398.4 × 312 × 191.4 mm; Trays open: 398.4 x 668 x 194 mm' },
      { label: 'Interface', value: 'Hi-speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows' },
      { label: 'PC Drivers / Software', value: 'ISIS/TWAIN Drivers (Windows 2000/XP Pro/XP Home/Vista/7/8/10), CapturePerfect, Kofax VRS' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  // Portable Series
  {
    name: 'P-215II',
    slug: 'p-215ii',
    image: `${import.meta.env.BASE_URL}images/Canon_44_520.jpg`,
    type: 'Portable Scanner',
    overview: 'The imageFORMULA P-215II is a highly productive, ultra-compact USB-powered scanner with double-sided scanning up to 30ipm, a 20-page ADF, and dedicated card scanning slot, ideal for office, home, or mobile use.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'USB 2.0: B/W: 12ppm (simplex) / 14ipm (duplex); Colour: 10ppm (simplex) / 10ipm (duplex); USB 3.0: B/W: 15ppm (simplex) / 30ipm (duplex); Colour: 10ppm (simplex) / 20ipm (duplex)' },
      { label: 'Max Paper Size', value: 'Width: 50.8 – 216 mm, Length: 70 – 356 mm' },
      { label: 'ADF Capacity', value: '20 sheets (64g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 285 (W) x 95 (D) x 40 (H)mm; Tray Opened: 285 (W) x 257 (D) x 174 (H)mm' },
      { label: 'Interface', value: 'Hi speed USB 2.0 & USB 3.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'Windows: ISIS/TWAIN driver, CaptureOnTouch, CaptureOnTouch Lite (built-in); Mac: TWAIN driver, CaptureOnTouch, CaptureOnTouch Lite (built-in)' },
      { label: 'Mac Drivers / Software', value: 'Mac: TWAIN driver, CaptureOnTouch, CaptureOnTouch Lite (built-in)' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'P-208II',
    slug: 'p-208ii',
    image: `${import.meta.env.BASE_URL}images/Canon_45_515.jpg`,
    type: 'Portable Scanner',
    overview: 'The Canon P-208II is a compact, USB-powered mobile scanner with double-sided scanning up to 16ipm, a 10-sheet ADF, and plug-and-scan convenience for productive scanning on the go.',
    specs: [
      { label: 'A4 Pages Per Min', value: '8ppm / 16ipm' },
      { label: 'Max Paper Size', value: 'Width: 50.8 – 216 mm, Length: 70 – 356 mm' },
      { label: 'ADF Capacity', value: '10 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 312.5 (W) x 56.5 (D) x 40 (H)mm; Tray Opened: 312.5 (W) x 89.5 (D) x 40 (H)mm' },
      { label: 'Interface', value: 'Hi speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver (Windows XP Pro / XP Home / VISTA / 7 / 8 / 10); CaptureOnTouch; CaptureOnTouch Lite; Cardiris' },
      { label: 'Mac Drivers / Software', value: 'TWAIN Driver; CaptureOnTouch; CaptureOnTouch Lite' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Canon R10',
    slug: 'canon-r10',
    image: `${import.meta.env.BASE_URL}images/Canon_47_510.jpg`,
    type: 'Portable Scanner',
    overview: 'The Canon R10 is a compact, portable scanner with one-touch scanning, double-sided capability, and a 20-sheet ADF, ideal for quick and easy document digitization at home or on the go.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B&W, Grayscale: Up to 12 ppm / Up to 14 ipm; Color: Up to 9 ppm / Up to 10 ipm' },
      { label: 'Max Paper Size', value: 'Width: 2” to 8.5” Length: 2.8” to 14”' },
      { label: 'ADF Capacity', value: 'Up to 20 sheets' },
      { label: 'Duplex Scanning', value: 'No' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 285 (W) x 95 (D) x 40 (H)mm; Tray Opened: 285 (W) x 257 (D) x 174 (H)mm; Approx. 0.9kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows 8.1(32bit/64bit), Windows 10 (32bit/64bit), Mac OS 10.13, 10.14, 10.15' },
      { label: 'PC Drivers / Software', value: 'Built-in CaptureOnTouch Lite Scanning software (Windows 8.1 / 10 - 32bit/64bit)' },
      { label: 'Mac Drivers / Software', value: 'Built-in CaptureOnTouch Lite Scanning software (macOS 10.12 / 10.13/ 10.14/ 10.15)' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Canon R40',
    slug: 'canon-r40',
    image: `${import.meta.env.BASE_URL}images/Canon_48_507.jpg`,
    type: 'Portable Scanner',
    overview: 'The Canon R40 is a fast, efficient desktop scanner with one-touch operation, double-sided scanning, and a 60-sheet ADF, perfect for organizing and digitizing documents at home or in the office.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Black and White: 40 ppm (simplex) / 80 ipm (duplex); Grayscale: 40 ppm (simplex) / 80 ipm (duplex); Colour: 30 ppm (simplex) / 60 ipm (duplex)' },
      { label: 'Max Paper Size', value: 'Width: 2” - 8.5” Length: 2.1” - 14”' },
      { label: 'ADF Capacity', value: '60 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '9.6 X 11.4 X 9.9 (trays closed) 6.17 lb.' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows 7 SP1 or later (32bit/64bit), Windows 8.1 (32bit/64bit), Windows 10 (32/64-bit), MacOS 10.12, MacOS 10.13, MacOS 10.14, MacOS 10.15' },
      { label: 'PC Drivers / Software', value: 'TWAIN Driver (Windows 7 SP1 / 8.1 / 10 - 32bit/64bit), Canon CaptureOnTouch Scanning Software, Readiris PDF Software, Cardiris Business Card Software' },
      { label: 'Mac Drivers / Software', value: 'TWAIN Driver (macOS 10.12 / 10.13/ 10.14/ 10.15), CaptureOnTouch Scanning Software' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'ScanFront 400',
    slug: 'scanfront-400',
    image: `${import.meta.env.BASE_URL}images/Canon_49_499.jpg`,
    type: 'Network Scanner',
    overview: 'The ScanFront 400 is a powerful standalone desktop network scanner offering fast, easy, and reliable scanning of various document sizes and types directly to your business workflow with no PC required.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'A4 / LTR, Portrait, 200dpi: Black and White: 45ppm (simplex) / 90ipm (duplex); Grayscale: 45ppm (simplex) / 90ipm (duplex); Colour: 45ppm (simplex) / 90ipm (duplex)' },
      { label: 'Max Paper Size', value: 'Width: 50 – 216 mm, Length: 54 – 356 mm' },
      { label: 'ADF Capacity', value: '85 sheets (A4, 80 g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Trays closed: 305 × 282 × 230 mm; Trays opened: 305 × 629 × 366 mm' },
      { label: 'Interface', value: 'LAN: 10Base-T/100Base-TX/1000Base-T (RJ-45 connector) 3x USB 2.0 (for USB Memory, Keyboard, Mouse, etc.)' },
      { label: 'PC Compatibility', value: 'Linux' },
      { label: 'PC Drivers / Software', value: 'ScanFront Administration Tool, ScanFront 400 Web Application SDK, ScanFront 400 Embedded SDK' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-M140',
    slug: 'dr-m140',
    image: `${import.meta.env.BASE_URL}images/Canon_50_493.jpg`,
    type: 'M Series',
    overview: 'The DR-M140 is a compact, versatile desktop scanner with dual feeding paths, 80ipm duplex scanning, and a 80-sheet ADF, ideal for legal, medical, government, and financial offices.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Black and White/grayscale/Color: 40 ppm/80 ipm' },
      { label: 'Max Paper Size', value: 'U-Turn Path: Width: 2.0 - 8.5 Length: 2.9 - 14.0; Straight Path: Width: 2.0 - 8.5 Length: 2.1 - 14.0' },
      { label: 'ADF Capacity', value: '80 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 313 (W) x 181 (D) x 93 (H)mm; Tray Opened: 313 (W) x 288 (D) x 93 (H)mm' },
      { label: 'Interface', value: 'Hi-Speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows 8.1 (32bit/64bit), Windows 10 (32bit/64bit), Microsoft Windows Server 2012 R2, Microsoft Windows Server 2016, Microsoft Windows Server 2019' },
      { label: 'PC Drivers / Software', value: 'Canon CaptureOnTouch, Canon CapturePerfect, Nuance eCopy PDF Pro Office, Kofax VRS' },
      { label: 'Mac Drivers / Software', value: 'Mac OS 10.13, Mac OS 10.14, Mac OS 10.15' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-M160II',
    slug: 'dr-m160ii',
    image: `${import.meta.env.BASE_URL}images/Canon_51_486.jpg`,
    type: 'M Series',
    overview: 'The DR-M160II is a fast, robust desktop scanner with a 75-sheet feeder, 120ipm duplex scanning, and heavy-duty feed rollers, ideal for paper-intensive environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: '60 ppm (300 dpi)' },
      { label: 'Max Paper Size', value: '50,8 - 356 mm x 54 - 216 mm' },
      { label: 'ADF Capacity', value: '75 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed : 280mm (W) x 172 (D) x 178 (H) mm; Tray Opened: 280 (W) x 606 (D) x 366.4 (H) mm' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'N/A' },
      { label: 'PC Drivers / Software', value: 'CaptureOnTouch v2, CapturePerfect3.1, eCopy PDF Pro and Kofax VRS 5.1 AIPE' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-M260',
    slug: 'dr-m260',
    image: `${import.meta.env.BASE_URL}images/Canon_52_483.jpg`,
    type: 'M Series',
    overview: 'The DR-M260 is a compact, high-performance desktop scanner with a 80-sheet ADF, 120ipm duplex scanning, and advanced image processing, ideal for customer-facing environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'A4 / LTR, Portrait, 200dpi: Black and White: 60ppm (simplex) / 120ipm (duplex); Grayscale: 60ppm (simplex) / 120ipm (duplex); Colour: 60ppm (simplex) / 120ipm (duplex)' },
      { label: 'Max Paper Size', value: 'Width: 50.8 – 216 mm, Length: 54 – 356 mm' },
      { label: 'ADF Capacity', value: '80 sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Trays Closed : 285 x 180 x 178 mm; Trays Opened : 285 x 254 x 231 mm' },
      { label: 'Interface', value: 'USB3.1 Gen1' },
      { label: 'PC Compatibility', value: 'Windows' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver (Microsoft Windows 7/8.1/10/ Server 2008 R2 SP1/Server 2012 R2/ Server 2016) CaptureOnTouch Pro CapturePerfect Kofax VRS eCopy PDF Pro Office' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  // C Series
  {
    name: 'DR-C225',
    slug: 'dr-c225',
    image: `${import.meta.env.BASE_URL}images/Canon_58_459.jpg`,
    type: 'C Series',
    overview: 'The DR-C225 is a compact, vertical J-Path scanner with a 30-sheet ADF, 50ipm duplex scanning, and innovative face-up document feeding, ideal for tight office spaces.',
    specs: [
      { label: 'A4 Pages Per Min', value: '25ppm/50ipm' },
      { label: 'Max Paper Size', value: 'Width: 51 – 216 mm, Length: 54 – 356 mm' },
      { label: 'ADF Capacity', value: '30 Sheets (80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 300 (W) x 156 (D) x 220 (H)mm; Tray Opened: 300 (W) x 235 (D) x 339 (H)mm' },
      { label: 'Interface', value: 'High speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver (Windows 2000/XP Pro/XP Home/Vista/7/8/10) CaptureOnTouch Nuance eCopy PDF Pro Office Nuance PaperPort Nuance OmniPage Presto! BizCard Reader Plug-in: Evernote, SharePoint, GoogleDocs, SugarSync, Dropbox, OneDrive EMC Captiva Cloud Runtime controls' },
      { label: 'Mac Drivers / Software', value: 'ISIS /TWAIN Driver CaptureOnTouch Presto! PageManager Presto! BizCard Reader Plug-in: Evernote, SharePoint, GoogleDocs, SugarSync, Dropbox' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-C225 II',
    slug: 'dr-c225-ii',
    image: `${import.meta.env.BASE_URL}images/Canon_54_473.jpg`,
    type: 'C Series',
    overview: 'The DR-C225 II is an ultra-compact, vertical J-Path scanner with a 30-sheet ADF, 50ipm duplex scanning, and advanced image processing, perfect for small offices and tight spaces.',
    specs: [
      { label: 'A4 Pages Per Min', value: '25ppm/50ipm' },
      { label: 'Max Paper Size', value: 'Width: 51 – 216 mm, Length: 54 – 356 mm' },
      { label: 'ADF Capacity', value: '30 Sheets (80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 300 (W) x 156 (D) x 220 (H)mm; Tray Opened: 300 (W) x 235 (D) x 339 (H)mm' },
      { label: 'Interface', value: 'High speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver, CaptureOnTouch, Nuance eCopy PDF Pro Office, Nuance PaperPort, Nuance OmniPage, Presto! BizCard Reader, Plug-in: Evernote, SharePoint, GoogleDocs, SugarSync, Dropbox, OneDrive, EMC Captiva Cloud Runtime controls' },
      { label: 'Mac Drivers / Software', value: 'ISIS /TWAIN Driver, CaptureOnTouch, Presto! PageManager, Presto! BizCard Reader, Plug-in: Evernote, SharePoint, GoogleDocs, SugarSync, Dropbox' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-C240',
    slug: 'dr-c240',
    image: `${import.meta.env.BASE_URL}images/Canon_59_455.jpg`,
    type: 'C Series',
    overview: 'The DR-C240 is a robust, high-speed desktop scanner with a 60-sheet ADF, 90ipm duplex scanning, and versatile media handling, ideal for busy workgroups and departments.',
    specs: [
      { label: 'A4 Pages Per Min', value: '40ppm/80ipm (B&W/Colour, 200/300dpi)' },
      { label: 'Max Paper Size', value: 'Width: 50.8 – 216 mm, Length: 54 – 356 mm' },
      { label: 'ADF Capacity', value: '60 Sheets (80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 291 (W) x 253 (D) x 231 (H)mm; Tray Opened: 291 (W) x 603 (D) x 363 (H)mm' },
      { label: 'Interface', value: 'High speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver, CaptureOnTouch, Nuance eCopy PDF Pro Office, Nuance PaperPort, Nuance OmniPage, Presto! BizCard Reader' },
      { label: 'Mac Drivers / Software', value: 'TWAIN Driver, CaptureOnTouch, Presto! PageManager, Presto! BizCard Reader' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-C230',
    slug: 'dr-c230',
    image: `${import.meta.env.BASE_URL}images/Canon_60_454.jpg`,
    type: 'C Series',
    overview: 'The DR-C230 is a compact, reliable desktop scanner with a 60-sheet ADF, 60ipm duplex scanning, and advanced image processing, perfect for small and medium-sized businesses.',
    specs: [
      { label: 'A4 Pages Per Min', value: '30ppm/60ipm (B&W/Colour, 200/300dpi)' },
      { label: 'Max Paper Size', value: 'Width: 50.8 – 216 mm, Length: 54 – 356 mm' },
      { label: 'ADF Capacity', value: '60 Sheets (80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 291 (W) x 253 (D) x 231 (H)mm; Tray Opened: 291 (W) x 603 (D) x 363 (H)mm' },
      { label: 'Interface', value: 'High speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows, Mac' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver, CaptureOnTouch, Nuance eCopy PDF Pro Office, Nuance PaperPort, Nuance OmniPage, Presto! BizCard Reader' },
      { label: 'Mac Drivers / Software', value: 'TWAIN Driver, CaptureOnTouch, Presto! PageManager, Presto! BizCard Reader' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'Canon DR-C225W II',
    slug: 'canon-drc225w-ii',
    image: `${import.meta.env.BASE_URL}images/Canon_61_452.jpg`,
    type: 'C Series',
    overview: 'The DR-C225W II is a Wi-Fi enabled, ultra-compact vertical J-Path scanner with a 30-sheet ADF, 50ipm duplex scanning, and wireless connectivity for flexible placement and mobile scanning.',
    specs: [
      { label: 'A4 Pages Per Min', value: '25ppm/50ipm' },
      { label: 'Max Paper Size', value: 'Width: 51 – 216 mm, Length: 54 – 356 mm' },
      { label: 'ADF Capacity', value: '30 Sheets (80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 300 (W) x 156 (D) x 220 (H)mm; Tray Opened: 300 (W) x 235 (D) x 339 (H)mm' },
      { label: 'Interface', value: 'High speed USB 2.0, Wi-Fi' },
      { label: 'PC Compatibility', value: 'Windows, Mac, Mobile' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver, CaptureOnTouch, Nuance eCopy PDF Pro Office, Nuance PaperPort, Nuance OmniPage, Presto! BizCard Reader, Plug-in: Evernote, SharePoint, GoogleDocs, SugarSync, Dropbox, OneDrive, EMC Captiva Cloud Runtime controls' },
      { label: 'Mac Drivers / Software', value: 'ISIS /TWAIN Driver, CaptureOnTouch, Presto! PageManager, Presto! BizCard Reader, Plug-in: Evernote, SharePoint, GoogleDocs, SugarSync, Dropbox' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  // Cheque Scanners
  {
    name: 'CR-120',
    slug: 'cr-120',
    image: `${import.meta.env.BASE_URL}images/Canon_63_445.jpg`,
    type: 'Cheque Scanner',
    overview: 'The CR-120 is a compact cheque scanner with a 120-item per minute scanning speed, 150-item input hopper, and advanced MICR reading, ideal for banks and financial institutions.',
    specs: [
      { label: 'Scanning Speed', value: '120 items per minute' },
      { label: 'Max Document Size', value: 'Width: 68 – 108 mm, Length: 120 – 245 mm' },
      { label: 'Input Hopper Capacity', value: '150 items' },
      { label: 'MICR Reading', value: 'Supported' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 170 (W) x 239 (D) x 204 (H)mm' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows' },
      { label: 'PC Drivers / Software', value: 'Canon Scanning Utility, Driver' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'CR-150N',
    slug: 'cr-150n',
    image: `${import.meta.env.BASE_URL}images/Canon-r10 (1).png`,
    type: 'Cheque Scanner',
    overview: 'The CR-150N is a high-speed cheque scanner with network capability, 150-item per minute scanning, and advanced image processing, designed for high-volume cheque processing environments.',
    specs: [
      { label: 'Scanning Speed', value: '150 items per minute' },
      { label: 'Max Document Size', value: 'Width: 68 – 108 mm, Length: 120 – 245 mm' },
      { label: 'Input Hopper Capacity', value: '150 items' },
      { label: 'MICR Reading', value: 'Supported' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 170 (W) x 239 (D) x 204 (H)mm' },
      { label: 'Interface', value: 'USB 2.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Windows, Network' },
      { label: 'PC Drivers / Software', value: 'Canon Scanning Utility, Driver' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  // Other Canon
  {
    name: 'DR-S130',
    slug: 'dr-s130',
    image: `${import.meta.env.BASE_URL}images/Canon-r40 (2).jpg`,
    type: 'Other Canon',
    overview: 'The DR-S130 is a versatile desktop scanner with a 60-sheet ADF, 60ipm duplex scanning, and both USB and Wi-Fi connectivity, ideal for flexible office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: '30ppm/60ipm' },
      { label: 'Max Paper Size', value: 'Width: 50.8 – 216 mm, Length: 54 – 356 mm' },
      { label: 'ADF Capacity', value: '60 Sheets (80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 291 (W) x 253 (D) x 231 (H)mm; Tray Opened: 291 (W) x 603 (D) x 363 (H)mm' },
      { label: 'Interface', value: 'High speed USB 3.2, Wi-Fi' },
      { label: 'PC Compatibility', value: 'Windows, Mac, Mobile' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver, CaptureOnTouch, Nuance eCopy PDF Pro Office, Nuance PaperPort, Nuance OmniPage, Presto! BizCard Reader' },
      { label: 'Mac Drivers / Software', value: 'TWAIN Driver, CaptureOnTouch, Presto! PageManager, Presto! BizCard Reader' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-S150',
    slug: 'dr-s150',
    image: `${import.meta.env.BASE_URL}images/Canon-DRC225wII.webp`,
    type: 'Other Canon',
    overview: 'The DR-S150 is a high-speed, network-ready desktop scanner with a 60-sheet ADF, 90ipm duplex scanning, and multiple connectivity options including USB, Ethernet, and Wi-Fi.',
    specs: [
      { label: 'A4 Pages Per Min', value: '45ppm/90ipm' },
      { label: 'Max Paper Size', value: 'Width: 50.8 – 216 mm, Length: 54 – 356 mm' },
      { label: 'ADF Capacity', value: '60 Sheets (80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 291 (W) x 253 (D) x 231 (H)mm; Tray Opened: 291 (W) x 603 (D) x 363 (H)mm' },
      { label: 'Interface', value: 'High speed USB 3.2, Ethernet, Wi-Fi' },
      { label: 'PC Compatibility', value: 'Windows, Mac, Network' },
      { label: 'PC Drivers / Software', value: 'ISIS /TWAIN Driver, CaptureOnTouch, Nuance eCopy PDF Pro Office, Nuance PaperPort, Nuance OmniPage, Presto! BizCard Reader' },
      { label: 'Mac Drivers / Software', value: 'TWAIN Driver, CaptureOnTouch, Presto! PageManager, Presto! BizCard Reader' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
  {
    name: 'DR-M1060',
    slug: 'dr-m1060',
    image: `${import.meta.env.BASE_URL}images/Canon_53_480.jpg`,
    type: 'M Series',
    overview: 'The DR-M1060 is a uniquely compact A3 scanner with a 80-sheet ADF, ultra-fast duplex scanning, and versatile paper handling, ideal for offices with limited space but high scanning demands.',
    specs: [
      { label: 'A4 Pages Per Min', value: '60 ppm (300 dpi)' },
      { label: 'Max Paper Size', value: '50,8 - 3.000 mm x 54 - 216 mm' },
      { label: 'ADF Capacity', value: '80 Sheets (A4, 80g/m²)' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: 'Tray Closed: 424 (W) x 246 (D) x 120 (H)mm; Tray Opened: 424 (W) x 440 (D) x 210 (H)mm' },
      { label: 'Interface', value: 'Hi-Speed USB 2.0' },
      { label: 'PC Compatibility', value: 'Windows' },
      { label: 'PC Drivers / Software', value: 'CaptureOnTouch v2, CapturePerfect3.1, eCopy PDF Pro and Kofax VRS 5.1 AIPE' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: 'N/A' }
    ]
  },
];

export { canonProducts };

const CanonScanners = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = canonProducts.find(p => p.slug === productSlug);
    if (!product) {
      return <div style={{ padding: 40 }}><h2>Product Not Found</h2><button onClick={() => navigate(-1)}>Go Back</button></div>;
    }
    return <ProductInfo product={product} />;
  }

  return (
    <div className="product-page-container">
      <ProductSidebar />
      <main className="product-main">
        <h1>Canon Scanners</h1>
        <div className="product-grid">
          {canonProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/canon-scanners/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CanonScanners; 