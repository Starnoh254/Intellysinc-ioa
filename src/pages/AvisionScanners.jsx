import React from 'react';
import './AvisionScanners.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';

const avisionProducts = [
  {
    name: 'AD225WN',
    slug: 'ad225wn',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD225WN is a compact, portable scanner with Wi-Fi and network support, 25-page ADF, and eco-friendly LED technology. Ideal for batch scanning and versatile document handling in any workplace.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 25 ppm; Duplex: 50 ipm; Color @ 200dpi, A4 Simplex: 25 ppm; Duplex: 50 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '25 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '299 x 104 x 74 mm / 1.5 kg' },
      { label: 'Interface', value: 'USB 2.0, Network, Wi-Fi' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, Button Manager, PaperPort, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '25 ppm/50 ipm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'Yes + Wi-Fi' }
    ]
  },
  {
    name: 'AD225',
    slug: 'ad225',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD225 is a portable, compact scanner with a 25-page ADF, dual eject paths, and eco-friendly LED technology. Designed for batch scanning and versatile document handling on the go.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 25 ppm; Duplex: 50 ipm; Color @ 200dpi, A4 Simplex: 25 ppm; Duplex: 50 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '25 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '299 x 104 x 74 mm / 1.5 kg' },
      { label: 'Interface', value: 'USB 2.0, Network' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, ISIS, Button Manager, PaperPort, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '25 ppm/50 ipm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD1205',
    slug: 'ad1205',
    image: `${import.meta.env.BASE_URL}images/AD120.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD1205 is a compact scanner with a 50-sheet ADF and duplex scanning, designed for efficient document management in busy environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 30 ppm; Duplex: 60 ipm; Color @ 200dpi, A4 Simplex: 30 ppm; Duplex: 60 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 2.5 kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '30 ppm/60 ipm' },
      { label: 'Duty Cycle', value: 'Up to 4,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD130',
    slug: 'ad130',
    image: `${import.meta.env.BASE_URL}images/AD130_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD130 offers high-speed duplex scanning and a robust ADF, making it ideal for medium-sized offices with demanding scanning needs.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 30 ppm; Duplex: 60 ipm; Color @ 200dpi, A4 Simplex: 30 ppm; Duplex: 60 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 2.5 kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '30 ppm/60 ipm' },
      { label: 'Duty Cycle', value: 'Up to 4,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AV332U',
    slug: 'av332u',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The AV332U is a high-speed document scanner with advanced image processing and a robust ADF, perfect for busy offices needing reliable, high-volume scanning.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm; Color @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 2.8 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '40 ppm/80 ipm' },
      { label: 'Duty Cycle', value: 'Up to 5,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AV332F',
    slug: 'av332f',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The AV332F features a flatbed design for scanning delicate or bound documents, with a fast ADF for batch jobs. Ideal for libraries and legal offices.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm; Color @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '460 x 285 x 130 mm / 4.5 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '40 ppm/80 ipm' },
      { label: 'Duty Cycle', value: 'Up to 5,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD340GFN',
    slug: 'ad340gfn',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340GFN is a network-ready, high-speed scanner with duplex capability and a large ADF, perfect for workgroups needing shared scanning resources.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm; Color @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.2 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '40 ppm/80 ipm' },
      { label: 'Duty Cycle', value: 'Up to 8,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD340GF',
    slug: 'ad340gf',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340GF is a fast, duplex document scanner with a 100-sheet ADF, designed for high-volume scanning in busy office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm; Color @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.2 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '40 ppm/80 ipm' },
      { label: 'Duty Cycle', value: 'Up to 8,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD340GN',
    slug: 'ad340gn',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340GN is a network-enabled scanner with high-speed duplex scanning and a robust ADF, ideal for collaborative office settings.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm; Color @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.2 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '40 ppm/80 ipm' },
      { label: 'Duty Cycle', value: 'Up to 8,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD340G',
    slug: 'ad340g',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340G is a high-speed, duplex scanner with a large ADF, designed for efficient batch scanning in demanding office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm; Color @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.2 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '40 ppm/80 ipm' },
      { label: 'Duty Cycle', value: 'Up to 8,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD340GWN',
    slug: 'ad340gwn',
    image: `${import.meta.env.BASE_URL}images/AD225WN.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD340GWN is a wireless and network-ready scanner with high-speed duplex scanning, perfect for shared office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm; Color @ 200dpi, A4 Simplex: 40 ppm; Duplex: 80 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.2 kg' },
      { label: 'Interface', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '40 ppm/80 ipm' },
      { label: 'Duty Cycle', value: 'Up to 8,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD345G',
    slug: 'ad345g',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345G is a robust, high-speed scanner with duplex capability and a 100-sheet ADF, ideal for large offices and heavy-duty scanning tasks.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm; Color @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.5 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '60 ppm/120 ipm' },
      { label: 'Duty Cycle', value: 'Up to 10,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD345GN',
    slug: 'ad345gn',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GN adds network connectivity to the AD345G, making it perfect for shared office environments requiring fast, reliable scanning.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm; Color @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.5 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '60 ppm/120 ipm' },
      { label: 'Duty Cycle', value: 'Up to 10,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD345GWN',
    slug: 'ad345gwn',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GWN is a wireless and network-ready scanner with high-speed duplex scanning, perfect for collaborative and flexible office setups.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm; Color @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.5 kg' },
      { label: 'Interface', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '60 ppm/120 ipm' },
      { label: 'Duty Cycle', value: 'Up to 10,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD345GF',
    slug: 'ad345gf',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GF is a high-speed, duplex scanner with a 100-sheet ADF, designed for efficient, high-volume scanning in demanding office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm; Color @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.5 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '60 ppm/120 ipm' },
      { label: 'Duty Cycle', value: 'Up to 10,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD345GFN',
    slug: 'ad345gfn',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GFN is a network-enabled, high-speed scanner with duplex capability and a large ADF, perfect for workgroups needing shared scanning resources.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm; Color @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.5 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '60 ppm/120 ipm' },
      { label: 'Duty Cycle', value: 'Up to 10,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD345GFWN',
    slug: 'ad345gfwn',
    image: `${import.meta.env.BASE_URL}images/AD345G_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD345GFWN is a wireless, network-ready, high-speed scanner with duplex capability, designed for flexible, high-volume office scanning.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm; Color @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.5 kg' },
      { label: 'Interface', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '60 ppm/120 ipm' },
      { label: 'Duty Cycle', value: 'Up to 10,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD370',
    slug: 'ad370',
    image: `${import.meta.env.BASE_URL}images/AD370_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370 is a high-speed, heavy-duty scanner with a 100-sheet ADF and advanced image processing, perfect for large offices and scanning bureaus.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm; Color @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 4.0 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '70 ppm/140 ipm' },
      { label: 'Duty Cycle', value: 'Up to 15,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD370N',
    slug: 'ad370n',
    image: `${import.meta.env.BASE_URL}images/AD370_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370N is a network-enabled, high-speed scanner with a 100-sheet ADF, designed for collaborative, high-volume office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm; Color @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 4.0 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '70 ppm/140 ipm' },
      { label: 'Duty Cycle', value: 'Up to 15,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD370WN',
    slug: 'ad370wn',
    image: `${import.meta.env.BASE_URL}images/AD370_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370WN is a wireless, network-ready, high-speed scanner with a 100-sheet ADF, perfect for flexible, high-volume scanning in modern offices.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm; Color @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 4.0 kg' },
      { label: 'Interface', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '70 ppm/140 ipm' },
      { label: 'Duty Cycle', value: 'Up to 15,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD370F',
    slug: 'ad370f',
    image: `${import.meta.env.BASE_URL}images/AD370F_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370F features a flatbed for delicate or bound documents and a high-speed ADF, making it ideal for legal, medical, and educational offices.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm; Color @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '460 x 285 x 130 mm / 5.0 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '70 ppm/140 ipm' },
      { label: 'Duty Cycle', value: 'Up to 15,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD370FWN',
    slug: 'ad370fwn',
    image: `${import.meta.env.BASE_URL}images/AD370F_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370FWN is a wireless, network-ready flatbed scanner with a high-speed ADF, perfect for offices needing to scan books, IDs, and large batches.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm; Color @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '460 x 285 x 130 mm / 5.0 kg' },
      { label: 'Interface', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '70 ppm/140 ipm' },
      { label: 'Duty Cycle', value: 'Up to 15,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD370FN',
    slug: 'ad370fn',
    image: `${import.meta.env.BASE_URL}images/AD370F_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD370FN is a network-enabled flatbed scanner with a high-speed ADF, designed for collaborative offices needing to scan a variety of document types.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm; Color @ 200dpi, A4 Simplex: 70 ppm; Duplex: 140 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '460 x 285 x 130 mm / 5.0 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '70 ppm/140 ipm' },
      { label: 'Duty Cycle', value: 'Up to 15,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD360GFN',
    slug: 'ad360gfn',
    image: `${import.meta.env.BASE_URL}images/AD360G_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD360GFN is a network-enabled, high-speed scanner with duplex capability and a 100-sheet ADF, perfect for workgroups needing shared scanning resources.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm; Color @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.5 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '60 ppm/120 ipm' },
      { label: 'Duty Cycle', value: 'Up to 10,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD360G',
    slug: 'ad360g',
    image: `${import.meta.env.BASE_URL}images/AD360G_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD360G is a high-speed, duplex scanner with a large ADF, designed for efficient batch scanning in demanding office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm; Color @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.5 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '60 ppm/120 ipm' },
      { label: 'Duty Cycle', value: 'Up to 10,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD360GN',
    slug: 'ad360gn',
    image: `${import.meta.env.BASE_URL}images/AD360G_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD360GN is a network-enabled scanner with high-speed duplex scanning and a robust ADF, ideal for collaborative office settings.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm; Color @ 200dpi, A4 Simplex: 60 ppm; Duplex: 120 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '100 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 3.5 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '60 ppm/120 ipm' },
      { label: 'Duty Cycle', value: 'Up to 10,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD3100F',
    slug: 'ad3100f',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100F is a flatbed scanner with a high-speed ADF, perfect for scanning books, IDs, and large batches in legal, medical, and educational offices.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm; Color @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '120 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '460 x 285 x 130 mm / 6.0 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '80 ppm/160 ipm' },
      { label: 'Duty Cycle', value: 'Up to 20,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD3100FN',
    slug: 'ad3100fn',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100FN is a network-enabled flatbed scanner with a high-speed ADF, designed for collaborative offices needing to scan a variety of document types.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm; Color @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '120 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '460 x 285 x 130 mm / 6.0 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '80 ppm/160 ipm' },
      { label: 'Duty Cycle', value: 'Up to 20,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD3100N',
    slug: 'ad3100n',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100N is a network-enabled, high-speed scanner with duplex capability and a large ADF, perfect for workgroups needing shared scanning resources.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm; Color @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '120 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 5.5 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '80 ppm/160 ipm' },
      { label: 'Duty Cycle', value: 'Up to 20,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD3100',
    slug: 'ad3100',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100 is a high-speed, duplex scanner with a large ADF, designed for efficient batch scanning in demanding office environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm; Color @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '120 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 5.5 kg' },
      { label: 'Interface', value: 'USB 3.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '80 ppm/160 ipm' },
      { label: 'Duty Cycle', value: 'Up to 20,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AD3100FWN',
    slug: 'ad3100fwn',
    image: `${import.meta.env.BASE_URL}images/AD3100F_A4.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD3100FWN is a wireless, network-ready flatbed scanner with a high-speed ADF, perfect for offices needing to scan books, IDs, and large batches.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm; Color @ 200dpi, A4 Simplex: 80 ppm; Duplex: 160 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '120 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '460 x 285 x 130 mm / 6.0 kg' },
      { label: 'Interface', value: 'USB 3.0, Wi-Fi, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '80 ppm/160 ipm' },
      { label: 'Duty Cycle', value: 'Up to 20,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD5800',
    slug: 'ad5800',
    image: `${import.meta.env.BASE_URL}images/AD5800-Left-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD5800 is a heavy-duty, high-speed scanner with a 500-sheet ADF, designed for production-level scanning in service bureaus and large enterprises.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 120 ppm; Duplex: 240 ipm; Color @ 200dpi, A4 Simplex: 120 ppm; Duplex: 240 ipm' },
      { label: 'Max Paper Size', value: '305 x 5080 mm (12 x 200 in.)' },
      { label: 'ADF Capacity', value: '500 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '530 x 480 x 310 mm / 25 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '120 ppm/240 ipm' },
      { label: 'Duty Cycle', value: 'Up to 100,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD6090',
    slug: 'ad6090',
    image: `${import.meta.env.BASE_URL}images/AD6090N_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD6090 is a high-speed, heavy-duty scanner with a 300-sheet ADF, designed for large-scale document conversion and archiving.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 100 ppm; Duplex: 200 ipm; Color @ 200dpi, A4 Simplex: 100 ppm; Duplex: 200 ipm' },
      { label: 'Max Paper Size', value: '305 x 5080 mm (12 x 200 in.)' },
      { label: 'ADF Capacity', value: '300 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '530 x 480 x 310 mm / 18 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '100 ppm/200 ipm' },
      { label: 'Duty Cycle', value: 'Up to 60,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD6090N',
    slug: 'ad6090n',
    image: `${import.meta.env.BASE_URL}images/AD6090N_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD6090N is a network-enabled, high-speed scanner with a 300-sheet ADF, perfect for shared, high-volume scanning environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 100 ppm; Duplex: 200 ipm; Color @ 200dpi, A4 Simplex: 100 ppm; Duplex: 200 ipm' },
      { label: 'Max Paper Size', value: '305 x 5080 mm (12 x 200 in.)' },
      { label: 'ADF Capacity', value: '300 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '530 x 480 x 310 mm / 18 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '100 ppm/200 ipm' },
      { label: 'Duty Cycle', value: 'Up to 60,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD8120U',
    slug: 'ad8120u',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8120U is a production-level scanner with a 500-sheet ADF and advanced image processing, ideal for service bureaus and large organizations.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 130 ppm; Duplex: 260 ipm; Color @ 200dpi, A4 Simplex: 130 ppm; Duplex: 260 ipm' },
      { label: 'Max Paper Size', value: '305 x 5080 mm (12 x 200 in.)' },
      { label: 'ADF Capacity', value: '500 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '530 x 480 x 310 mm / 28 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '130 ppm/260 ipm' },
      { label: 'Duty Cycle', value: 'Up to 120,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD8120UN',
    slug: 'ad8120un',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8120UN is a network-enabled, production-level scanner with a 500-sheet ADF, designed for high-volume, shared scanning environments.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 130 ppm; Duplex: 260 ipm; Color @ 200dpi, A4 Simplex: 130 ppm; Duplex: 260 ipm' },
      { label: 'Max Paper Size', value: '305 x 5080 mm (12 x 200 in.)' },
      { label: 'ADF Capacity', value: '500 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '530 x 480 x 310 mm / 28 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '130 ppm/260 ipm' },
      { label: 'Duty Cycle', value: 'Up to 120,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD8120P',
    slug: 'ad8120p',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8120P is a production-level scanner with a 500-sheet ADF and advanced paper handling, perfect for demanding, high-volume scanning tasks.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 130 ppm; Duplex: 260 ipm; Color @ 200dpi, A4 Simplex: 130 ppm; Duplex: 260 ipm' },
      { label: 'Max Paper Size', value: '305 x 5080 mm (12 x 200 in.)' },
      { label: 'ADF Capacity', value: '500 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '530 x 480 x 310 mm / 28 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '130 ppm/260 ipm' },
      { label: 'Duty Cycle', value: 'Up to 120,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD8130U',
    slug: 'ad8130u',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8130U is a high-speed, production-level scanner with a 500-sheet ADF, designed for large-scale document conversion and archiving.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 130 ppm; Duplex: 260 ipm; Color @ 200dpi, A4 Simplex: 130 ppm; Duplex: 260 ipm' },
      { label: 'Max Paper Size', value: '305 x 5080 mm (12 x 200 in.)' },
      { label: 'ADF Capacity', value: '500 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '530 x 480 x 310 mm / 28 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '130 ppm/260 ipm' },
      { label: 'Duty Cycle', value: 'Up to 120,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
    ]
  },
  {
    name: 'AD8150',
    slug: 'ad8150',
    image: `${import.meta.env.BASE_URL}images/AD8120U_1-600x600.jpg`,
    type: 'Avision Scanner',
    overview: 'The AD8150 is a heavy-duty, high-speed scanner with a 500-sheet ADF, perfect for service bureaus and large organizations with demanding scanning needs.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 150 ppm; Duplex: 300 ipm; Color @ 200dpi, A4 Simplex: 150 ppm; Duplex: 300 ipm' },
      { label: 'Max Paper Size', value: '305 x 5080 mm (12 x 200 in.)' },
      { label: 'ADF Capacity', value: '500 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '530 x 480 x 310 mm / 30 kg' },
      { label: 'Interface', value: 'USB 3.0, Ethernet' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '150 ppm/300 ipm' },
      { label: 'Duty Cycle', value: 'Up to 150,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
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
      { label: 'A4 Pages Per Min', value: 'Flatbed: 7 sec/page (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Optical Resolution', value: '1200 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions / Weight', value: '420 x 280 x 65 mm / 2.2 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '7 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'FB10',
    slug: 'fb10',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The FB10 is an ultra-slim flatbed scanner ideal for scanning photos, documents, and fragile items with high clarity.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Flatbed: 8 sec/page (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Optical Resolution', value: '1200 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions / Weight', value: '380 x 255 x 40 mm / 1.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '8 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'FB25',
    slug: 'fb25',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The FB25 is a versatile flatbed scanner with high optical resolution, perfect for scanning books, photos, and documents.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Flatbed: 7 sec/page (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Optical Resolution', value: '1200 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions / Weight', value: '420 x 280 x 65 mm / 2.2 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '7 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'FB5100',
    slug: 'fb5100',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The FB5100 is a high-resolution flatbed scanner designed for professional photo and document scanning.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'Flatbed: 6 sec/page (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Optical Resolution', value: '2400 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions / Weight', value: '420 x 280 x 65 mm / 2.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '6 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'FB6380E',
    slug: 'fb6380e',
    image: `${import.meta.env.BASE_URL}images/AV332F-front-600x695.jpg`,
    type: 'Avision Scanner',
    overview: 'The FB6380E is a large-format flatbed scanner designed for scanning oversized documents, artwork, and blueprints with high precision.',
    specs: [
      { label: 'A3 Pages Per Min', value: 'Flatbed: 12 sec/page (A3, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A3' },
      { label: 'Optical Resolution', value: '600 dpi' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions / Weight', value: '656 x 468 x 158 mm / 8.5 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '12 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
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
      { label: 'A4 Pages Per Min', value: '8 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'Wi-Fi, USB 2.0' },
      { label: 'Battery', value: 'Rechargeable Li-ion' },
      { label: 'OS Support', value: 'Windows, macOS, Mobile' },
      { label: 'Dimensions / Weight', value: '290 x 60 x 40 mm / 0.7 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '8 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'ScanQ-SW',
    slug: 'scanq-sw',
    image: `${import.meta.env.BASE_URL}images/SCAN-DW_2-600x600[1].jpg`,
    type: 'Avision Scanner',
    overview: 'The ScanQ-SW is a compact, USB-powered scanner ideal for scanning receipts, business cards, and documents while traveling.',
    specs: [
      { label: 'A4 Pages Per Min', value: '8 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions / Weight', value: '290 x 60 x 40 mm / 0.7 kg' },
      { label: 'Bundled Software', value: 'TWAIN, Button Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '8 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
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
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 25 ppm; Duplex: 50 ipm; Color @ 200dpi, A4 Simplex: 25 ppm; Duplex: 50 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 2.5 kg' },
      { label: 'Interface', value: 'USB 2.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '25 ppm/50 ipm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'AN360W',
    slug: 'an360w',
    image: `${import.meta.env.BASE_URL}images/AN360W_1.jpg`,
    type: 'Avision Scanner',
    overview: 'The AN360W is a network-ready, wireless scanner with a 50-sheet ADF, designed for shared use in small and medium-sized offices.',
    specs: [
      { label: 'A4 Pages Per Min', value: 'B/W @ 200dpi, A4 Simplex: 30 ppm; Duplex: 60 ipm; Color @ 200dpi, A4 Simplex: 30 ppm; Duplex: 60 ipm' },
      { label: 'Max Paper Size', value: '216 x 356 mm (Legal) (8.5 x 14 in.)' },
      { label: 'ADF Capacity', value: '50 Sheets' },
      { label: 'Duplex Scanning', value: 'Yes' },
      { label: 'Dimensions / Weight', value: '316 x 191 x 168 mm / 2.8 kg' },
      { label: 'Interface', value: 'Wi-Fi, Ethernet, USB 2.0' },
      { label: 'PC Compatibility', value: 'Win 7, 8, 10, 11, Fedora, openSUSE, Debian, Ubuntu, macOS 10.12~14 Sonoma' },
      { label: 'PC Drivers / Software', value: 'TWAIN, Button Manager, AVScan' },
      { label: 'Mac Drivers / Software', value: 'N/A' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'ADF' },
      { label: 'PPM', value: '30 ppm/60 ipm' },
      { label: 'Duty Cycle', value: 'Up to 4,000 sheets per day' },
      { label: 'Network', value: 'Yes' }
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
      { label: 'A4 Pages Per Min', value: '15 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions / Weight', value: '300 x 60 x 45 mm / 0.6 kg' },
      { label: 'Bundled Software', value: 'PaperAir Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '15 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'PaperAir 215',
    slug: 'paperair-215',
    image: `${import.meta.env.BASE_URL}images/PaperAir-1000N-1[1].jpg`,
    type: 'Avision Scanner',
    overview: 'The PaperAir 215 is a portable scanner with advanced image processing, ideal for scanning documents and photos on the go.',
    specs: [
      { label: 'A4 Pages Per Min', value: '15 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions / Weight', value: '300 x 60 x 45 mm / 0.6 kg' },
      { label: 'Bundled Software', value: 'PaperAir Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '15 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
    ]
  },
  {
    name: 'PaperAir 10',
    slug: 'paperair-10',
    image: `${import.meta.env.BASE_URL}images/PaperAir-1000N-1[1].jpg`,
    type: 'Avision Scanner',
    overview: 'The PaperAir 10 is an ultra-portable scanner for quick, high-quality scans of documents and photos, perfect for home and travel use.',
    specs: [
      { label: 'A4 Pages Per Min', value: '12 ppm (A4, 300 dpi, Color)' },
      { label: 'Max Paper Size', value: 'A4 / Letter' },
      { label: 'Connectivity', value: 'USB 2.0' },
      { label: 'OS Support', value: 'Windows, macOS' },
      { label: 'Dimensions / Weight', value: '285 x 60 x 40 mm / 0.5 kg' },
      { label: 'Bundled Software', value: 'PaperAir Manager' },
      { label: 'Standard Warranty', value: '1 Year' },
      { label: 'ADF or Flatbed', value: 'Flatbed' },
      { label: 'PPM', value: '12 ppm' },
      { label: 'Duty Cycle', value: 'Up to 3,000 sheets per day' },
      { label: 'Network', value: 'No' }
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