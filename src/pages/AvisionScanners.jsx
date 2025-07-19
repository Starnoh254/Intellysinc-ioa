import React from 'react';
import './AvisionScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const avisionProducts = [
  // Document Scanners
  {
    name: 'AD225WN',
    slug: 'ad225wn',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD225WN is a compact and portable scanner designed for productivity with batch scanning, Wi-Fi, and network support. Ideal for offices needing flexible, high-speed scanning.',
    specs: [
      { label: 'Scan Speed', value: '25 ppm / 50 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '25 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 2.0, Wi-Fi, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 3,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS, Linux' },
      { label: 'Dimensions', value: '299 x 104 x 74 mm' },
      { label: 'Weight', value: '1.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, ISIS, Button Manager, PaperPort, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD225',
    slug: 'ad225',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD225 is a versatile desktop scanner with a 25-sheet ADF, duplex scanning, and fast speeds. Perfect for small businesses and home offices.',
    specs: [
      { label: 'Scan Speed', value: '25 ppm / 50 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '25 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 3,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '299 x 104 x 74 mm' },
      { label: 'Weight', value: '1.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, ISIS, Button Manager, PaperPort, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD1205',
    slug: 'ad1205',
    image: `${import.meta.env.BASE_URL}images/AD120.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD1205 is a compact scanner with a 50-sheet ADF and duplex scanning, designed for efficient document management in busy environments.',
    specs: [
      { label: 'Scan Speed', value: '30 ppm / 60 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 4,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '2.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD130',
    slug: 'ad130',
    image: `${import.meta.env.BASE_URL}images/AD130_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD130 offers high-speed duplex scanning and a robust ADF, making it ideal for medium-sized offices with demanding scanning needs.',
    specs: [
      { label: 'Scan Speed', value: '30 ppm / 60 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 4,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '2.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AV332U',
    slug: 'av332u',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The AV332U is a high-speed document scanner with advanced image processing and a robust ADF, perfect for busy offices needing reliable, high-volume scanning.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 5,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '2.8 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AV332F',
    slug: 'av332f',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The AV332F features a flatbed design for scanning delicate or bound documents, with a fast ADF for batch jobs. Ideal for libraries and legal offices.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (ADF), Flatbed: 3 sec/page' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Flatbed Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 5,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '460 x 285 x 130 mm' },
      { label: 'Weight', value: '4.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD340GFN',
    slug: 'ad340gfn',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340GFN is a network-ready, high-speed scanner with duplex capability and a large ADF, perfect for workgroups needing shared scanning resources.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 8,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.2 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD340GF',
    slug: 'ad340gf',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340GF is a fast, duplex document scanner with a 100-sheet ADF, designed for high-volume scanning in busy office environments.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 8,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.2 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD340GN',
    slug: 'ad340gn',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340GN is a network-enabled scanner with high-speed duplex scanning and a robust ADF, ideal for collaborative office settings.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 8,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.2 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD340G',
    slug: 'ad340g',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340G is a high-speed, duplex scanner with a large ADF, designed for efficient batch scanning in demanding office environments.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 8,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.2 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD340GWN',
    slug: 'ad340gwn',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340GWN is a wireless and network-ready scanner with high-speed duplex scanning, perfect for shared office environments.',
    specs: [
      { label: 'Scan Speed', value: '40 ppm / 80 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 8,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.2 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD345G',
    slug: 'ad345g',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345G is a robust, high-speed scanner with duplex capability and a 100-sheet ADF, ideal for large offices and heavy-duty scanning tasks.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD345GN',
    slug: 'ad345gn',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GN adds network connectivity to the AD345G, making it perfect for shared office environments requiring fast, reliable scanning.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD345GWN',
    slug: 'ad345gwn',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GWN is a wireless and network-ready scanner with high-speed duplex scanning, perfect for collaborative and flexible office setups.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD345GF',
    slug: 'ad345gf',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GF is a high-speed, duplex scanner with a 100-sheet ADF, designed for efficient, high-volume scanning in demanding office environments.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD345GFN',
    slug: 'ad345gfn',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GFN is a network-enabled, high-speed scanner with duplex capability and a large ADF, perfect for workgroups needing shared scanning resources.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD345GFWN',
    slug: 'ad345gfwn',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GFWN is a wireless, network-ready, high-speed scanner with duplex capability, designed for flexible, high-volume office scanning.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD370',
    slug: 'ad370',
    image: `${import.meta.env.BASE_URL}images/AD370_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370 is a high-speed, heavy-duty scanner with a 100-sheet ADF and advanced image processing, perfect for large offices and scanning bureaus.',
    specs: [
      { label: 'Scan Speed', value: '70 ppm / 140 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 15,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '4.0 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD370N',
    slug: 'ad370n',
    image: `${import.meta.env.BASE_URL}images/AD370_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370N is a network-enabled, high-speed scanner with a 100-sheet ADF, designed for collaborative, high-volume office environments.',
    specs: [
      { label: 'Scan Speed', value: '70 ppm / 140 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 15,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '4.0 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD370WN',
    slug: 'ad370wn',
    image: `${import.meta.env.BASE_URL}images/AD370_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370WN is a wireless, network-ready, high-speed scanner with a 100-sheet ADF, perfect for flexible, high-volume scanning in modern offices.',
    specs: [
      { label: 'Scan Speed', value: '70 ppm / 140 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 15,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '4.0 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD370F',
    slug: 'ad370f',
    image: `${import.meta.env.BASE_URL}images/AD370F_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370F features a flatbed for delicate or bound documents and a high-speed ADF, making it ideal for legal, medical, and educational offices.',
    specs: [
      { label: 'Scan Speed', value: '70 ppm / 140 ipm (ADF), Flatbed: 3 sec/page' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Flatbed Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 15,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '460 x 285 x 130 mm' },
      { label: 'Weight', value: '5.0 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD370FWN',
    slug: 'ad370fwn',
    image: `${import.meta.env.BASE_URL}images/AD370F_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370FWN is a wireless, network-ready flatbed scanner with a high-speed ADF, perfect for offices needing to scan books, IDs, and large batches.',
    specs: [
      { label: 'Scan Speed', value: '70 ppm / 140 ipm (ADF), Flatbed: 3 sec/page' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Flatbed Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 15,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '460 x 285 x 130 mm' },
      { label: 'Weight', value: '5.0 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD370FN',
    slug: 'ad370fn',
    image: `${import.meta.env.BASE_URL}images/AD370F_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370FN is a network-enabled flatbed scanner with a high-speed ADF, designed for collaborative offices needing to scan a variety of document types.',
    specs: [
      { label: 'Scan Speed', value: '70 ppm / 140 ipm (ADF), Flatbed: 3 sec/page' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Flatbed Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 15,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '460 x 285 x 130 mm' },
      { label: 'Weight', value: '5.0 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD360GFN',
    slug: 'ad360gfn',
    image: `${import.meta.env.BASE_URL}images/AD360G_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD360GFN is a network-enabled, high-speed scanner with duplex capability and a 100-sheet ADF, perfect for workgroups needing shared scanning resources.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD360G',
    slug: 'ad360g',
    image: `${import.meta.env.BASE_URL}images/AD360G_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD360G is a high-speed, duplex scanner with a large ADF, designed for efficient batch scanning in demanding office environments.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD360GN',
    slug: 'ad360gn',
    image: `${import.meta.env.BASE_URL}images/AD360G_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD360GN is a network-enabled scanner with high-speed duplex scanning and a robust ADF, ideal for collaborative office settings.',
    specs: [
      { label: 'Scan Speed', value: '60 ppm / 120 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '100 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 10,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '3.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD3100F',
    slug: 'ad3100f',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100F is a flatbed scanner with a high-speed ADF, perfect for scanning books, IDs, and large batches in legal, medical, and educational offices.',
    specs: [
      { label: 'Scan Speed', value: '80 ppm / 160 ipm (ADF), Flatbed: 2 sec/page' },
      { label: 'ADF Capacity', value: '120 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Flatbed Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 20,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '460 x 285 x 130 mm' },
      { label: 'Weight', value: '6.0 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD3100FN',
    slug: 'ad3100fn',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100FN is a network-enabled flatbed scanner with a high-speed ADF, designed for collaborative offices needing to scan a variety of document types.',
    specs: [
      { label: 'Scan Speed', value: '80 ppm / 160 ipm (ADF), Flatbed: 2 sec/page' },
      { label: 'ADF Capacity', value: '120 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Flatbed Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 20,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '460 x 285 x 130 mm' },
      { label: 'Weight', value: '6.0 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD3100N',
    slug: 'ad3100n',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100N is a network-enabled, high-speed scanner with duplex capability and a large ADF, perfect for workgroups needing shared scanning resources.',
    specs: [
      { label: 'Scan Speed', value: '80 ppm / 160 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '120 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 20,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '5.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD3100',
    slug: 'ad3100',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100 is a high-speed, duplex scanner with a large ADF, designed for efficient batch scanning in demanding office environments.',
    specs: [
      { label: 'Scan Speed', value: '80 ppm / 160 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '120 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 3.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 20,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '5.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD3100FWN',
    slug: 'ad3100fwn',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100FWN is a wireless, network-ready flatbed scanner with a high-speed ADF, perfect for offices needing to scan books, IDs, and large batches.',
    specs: [
      { label: 'Scan Speed', value: '80 ppm / 160 ipm (ADF), Flatbed: 2 sec/page' },
      { label: 'ADF Capacity', value: '120 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Flatbed Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 20,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '460 x 285 x 130 mm' },
      { label: 'Weight', value: '6.0 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD5800',
    slug: 'ad5800',
    image: `${import.meta.env.BASE_URL}images/AD5800-Left-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD5800 is a heavy-duty, high-speed scanner with a 500-sheet ADF, designed for production-level scanning in service bureaus and large enterprises.',
    specs: [
      { label: 'Scan Speed', value: '120 ppm / 240 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '500 sheets' },
      { label: 'Max Paper Size', value: '305 x 5080 mm' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 100,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '530 x 480 x 310 mm' },
      { label: 'Weight', value: '25 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD6090',
    slug: 'ad6090',
    image: `${import.meta.env.BASE_URL}images/AD6090N_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD6090 is a high-speed, heavy-duty scanner with a 300-sheet ADF, designed for large-scale document conversion and archiving.',
    specs: [
      { label: 'Scan Speed', value: '100 ppm / 200 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '300 sheets' },
      { label: 'Max Paper Size', value: '305 x 5080 mm' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 60,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '530 x 480 x 310 mm' },
      { label: 'Weight', value: '18 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD6090N',
    slug: 'ad6090n',
    image: `${import.meta.env.BASE_URL}images/AD6090N_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD6090N is a network-enabled, high-speed scanner with a 300-sheet ADF, perfect for shared, high-volume scanning environments.',
    specs: [
      { label: 'Scan Speed', value: '100 ppm / 200 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '300 sheets' },
      { label: 'Max Paper Size', value: '305 x 5080 mm' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 60,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '530 x 480 x 310 mm' },
      { label: 'Weight', value: '18 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD8120U',
    slug: 'ad8120u',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8120U is a production-level scanner with a 500-sheet ADF and advanced image processing, ideal for service bureaus and large organizations.',
    specs: [
      { label: 'Scan Speed', value: '130 ppm / 260 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '500 sheets' },
      { label: 'Max Paper Size', value: '305 x 5080 mm' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 120,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '530 x 480 x 310 mm' },
      { label: 'Weight', value: '28 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD8120UN',
    slug: 'ad8120un',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8120UN is a network-enabled, production-level scanner with a 500-sheet ADF, designed for high-volume, shared scanning environments.',
    specs: [
      { label: 'Scan Speed', value: '130 ppm / 260 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '500 sheets' },
      { label: 'Max Paper Size', value: '305 x 5080 mm' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 120,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '530 x 480 x 310 mm' },
      { label: 'Weight', value: '28 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD8120P',
    slug: 'ad8120p',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8120P is a production-level scanner with a 500-sheet ADF and advanced paper handling, perfect for demanding, high-volume scanning tasks.',
    specs: [
      { label: 'Scan Speed', value: '130 ppm / 260 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '500 sheets' },
      { label: 'Max Paper Size', value: '305 x 5080 mm' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 120,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '530 x 480 x 310 mm' },
      { label: 'Weight', value: '28 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD8130U',
    slug: 'ad8130u',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8130U is a high-speed, production-level scanner with a 500-sheet ADF, designed for large-scale document conversion and archiving.',
    specs: [
      { label: 'Scan Speed', value: '130 ppm / 260 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '500 sheets' },
      { label: 'Max Paper Size', value: '305 x 5080 mm' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 120,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '530 x 480 x 310 mm' },
      { label: 'Weight', value: '28 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AD8150',
    slug: 'ad8150',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8150 is a heavy-duty, high-speed scanner with a 500-sheet ADF, perfect for service bureaus and large organizations with demanding scanning needs.',
    specs: [
      { label: 'Scan Speed', value: '150 ppm / 300 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '500 sheets' },
      { label: 'Max Paper Size', value: '305 x 5080 mm' },
      { label: 'Connectivity', value: 'USB 3.0, Ethernet' },
      { label: 'Daily Duty Cycle', value: 'Up to 150,000 sheets' },
      { label: 'OS Support', value: 'Windows' },
      { label: 'Dimensions', value: '530 x 480 x 310 mm' },
      { label: 'Weight', value: '30 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  // Flatbed Scanners
  {
    name: 'FB15',
    slug: 'fb15',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The FB15 is a compact flatbed scanner designed for high-resolution scanning of photos, documents, and delicate materials.',
    specs: [
      { label: 'Scan Speed', value: 'Flatbed: 7 sec/page (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Optical Resolution', value: '1200 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '420 x 280 x 65 mm' },
      { label: 'Weight', value: '2.2 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'FB10',
    slug: 'fb10',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The FB10 is an ultra-slim flatbed scanner ideal for scanning photos, documents, and fragile items with high clarity.',
    specs: [
      { label: 'Scan Speed', value: 'Flatbed: 8 sec/page (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Optical Resolution', value: '1200 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '380 x 255 x 40 mm' },
      { label: 'Weight', value: '1.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'FB25',
    slug: 'fb25',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The FB25 is a versatile flatbed scanner with high optical resolution, perfect for scanning books, photos, and documents.',
    specs: [
      { label: 'Scan Speed', value: 'Flatbed: 7 sec/page (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Optical Resolution', value: '1200 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '420 x 280 x 65 mm' },
      { label: 'Weight', value: '2.2 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'FB5100',
    slug: 'fb5100',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The FB5100 is a high-resolution flatbed scanner designed for professional photo and document scanning.',
    specs: [
      { label: 'Scan Speed', value: 'Flatbed: 6 sec/page (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Optical Resolution', value: '2400 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '420 x 280 x 65 mm' },
      { label: 'Weight', value: '2.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'FB6380E',
    slug: 'fb6380e',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The FB6380E is a large-format flatbed scanner designed for scanning oversized documents, artwork, and blueprints with high precision.',
    specs: [
      { label: 'Scan Speed', value: 'Flatbed: 12 sec/page (A3, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A3' },
      { label: 'Optical Resolution', value: '600 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '656 x 468 x 158 mm' },
      { label: 'Weight', value: '8.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  // Mobile Scanners
  {
    name: 'ScanQ-DW',
    slug: 'scanq-dw',
    image: `${import.meta.env.BASE_URL}images/SCAN-DW_2-600x600[1].jpg`,
    type: 'Avision Scanner',
    overview: 'The ScanQ-DW is a portable, wireless scanner designed for mobile professionals who need to scan documents on the go. It features Wi-Fi connectivity and battery operation.',
    specs: [
      { label: 'Scan Speed', value: '8 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'Wi-Fi, USB 2.0' },
      { label: 'Battery', value: 'Rechargeable Li-ion' },
      { label: 'OS Support', value: 'Windows, macOS, Mobile' },
      { label: 'Dimensions', value: '290 x 60 x 40 mm' },
      { label: 'Weight', value: '0.7 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'ScanQ-SW',
    slug: 'scanq-sw',
    image: `${import.meta.env.BASE_URL}images/SCAN-DW_2-600x600[1].jpg`,
    type: 'Avision Scanner',
    overview: 'The ScanQ-SW is a compact, USB-powered scanner ideal for scanning receipts, business cards, and documents while traveling.',
    specs: [
      { label: 'Scan Speed', value: '8 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '290 x 60 x 40 mm' },
      { label: 'Weight', value: '0.7 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  // Network Scanners
  {
    name: 'AD120',
    slug: 'ad120',
    image: `${import.meta.env.BASE_URL}images/AD120_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD120 is a compact desktop scanner with a 50-sheet ADF and duplex scanning, perfect for small offices and home use.',
    specs: [
      { label: 'Scan Speed', value: '25 ppm / 50 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 3,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '2.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'AN360W',
    slug: 'an360w',
    image: `${import.meta.env.BASE_URL}images/AN360W_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AN360W is a network-ready, wireless scanner with a 50-sheet ADF, designed for shared use in small and medium-sized offices.',
    specs: [
      { label: 'Scan Speed', value: '30 ppm / 60 ipm (A4, 200 dpi, B/W & Color)' },
      { label: 'ADF Capacity', value: '50 sheets' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal)' },
      { label: 'Connectivity', value: 'Wi-Fi, Ethernet, USB 2.0' },
      { label: 'Daily Duty Cycle', value: 'Up to 4,000 sheets' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '316 x 191 x 168 mm' },
      { label: 'Weight', value: '2.8 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  // PaperAir Scanners
  {
    name: 'PaperAir 1000N',
    slug: 'paperair-1000n',
    image: `${import.meta.env.BASE_URL}images/PaperAir-1000N-1[1].jpg`,
    type: 'Avision Scanner',
    overview: 'The PaperAir 1000N is a lightweight, portable scanner designed for quick scanning of documents, photos, and cards, with easy cloud integration.',
    specs: [
      { label: 'Scan Speed', value: '15 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '300 x 60 x 45 mm' },
      { label: 'Weight', value: '0.6 kg' },
      { label: 'Bundled Software', value: 'PaperAir Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'PaperAir 215',
    slug: 'paperair-215',
    image: `${import.meta.env.BASE_URL}images/PaperAir-1000N-1[1].jpg`,
    type: 'Avision Scanner',
    overview: 'The PaperAir 215 is a portable scanner with advanced image processing, ideal for scanning documents and photos on the go.',
    specs: [
      { label: 'Scan Speed', value: '15 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '300 x 60 x 45 mm' },
      { label: 'Weight', value: '0.6 kg' },
      { label: 'Bundled Software', value: 'PaperAir Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
  {
    name: 'PaperAir 10',
    slug: 'paperair-10',
    image: `${import.meta.env.BASE_URL}images/PaperAir-1000N-1[1].jpg`,
    type: 'Avision Scanner',
    overview: 'The PaperAir 10 is an ultra-portable scanner for quick, high-quality scans of documents and photos, perfect for home and travel use.',
    specs: [
      { label: 'Scan Speed', value: '12 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions', value: '285 x 60 x 40 mm' },
      { label: 'Weight', value: '0.5 kg' },
      { label: 'Bundled Software', value: 'PaperAir Manager' },
      { label: 'Warranty', value: '1 Year' }
    ]
  },
];

export { avisionProducts };

const AvisionScanners = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  if (productSlug) {
    const product = avisionProducts.find(p => p.slug === productSlug);
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
          <li className="active">Avision Scanners</li>
          <li><Link to="/brother-scanners">Brother Scanners</Link></li>
          <li><Link to="/canon-scanners">Canon Scanners</Link></li>
          <li><Link to="/fujitsu-ricoh-scanners">Fujitsu-RICOH Scanners</Link></li>
          <li><Link to="/kodak-scanners">Kodak Scanners</Link></li>
          <li><Link to="/microfilm-scanners">Microfilm Scanners</Link></li>
          <li><Link to="/scanning-software">Scanning Software</Link></li>
          <li><Link to="/servers">Servers</Link></li>
        </ul>
      </aside>
      <main className="product-main">
        <h1>Avision Scanners</h1>
        <div className="product-grid">
          {avisionProducts.map((prod, idx) => (
            <div className="product-card" key={idx} style={{ position: 'relative' }}>
              <img src={prod.image} alt={prod.name} className="product-image" />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.type}</p>
                <Link to={`/products/avision-scanners/${prod.slug}`} className="view-item-btn">View Item</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AvisionScanners; 