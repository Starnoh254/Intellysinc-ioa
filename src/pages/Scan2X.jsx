import React, { useState } from 'react';
import '../styles/Scan2X.css';
import FeatureCard from './FeatureCard';
import { FaRobot, FaUserCheck, FaSearch, FaMagic, FaSlidersH, FaBrain } from 'react-icons/fa';

export default function Scan2X() {
  return (
    <div className="scan2x-page" style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      {/* Hero Section */}
      <section className="scan2x-hero" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.7rem', marginBottom: '0.5rem', color: '#008a96' }}>Scan2X</h1>
        <h2 style={{ color: '#008a96', fontWeight: 600, fontSize: '1.5rem' }}>Intelligent scanning software without the complexity</h2>
        <p style={{ fontSize: '1.18rem', margin: '1rem auto 0', maxWidth: 700 }}>
          Focus on your business while the Scan2x captures your documents. Advanced technology automatically applies the right settings, recognises key data and transfers it, making it ideal for optimising efficiency without extra training.
        </p>
      </section>

      {/* Features as Cards Section */}
      <section className="scan2x-cards-grid">
        {(() => {
          const cards = [
            {
              key: 'accuracy',
              title: 'Accuracy & Automation',
              icon: <FaRobot size={28} color="#4f46e5" />,
              content: 'Onboarding documents can be tedious and can result in human error. Scan2x automatically recognizes documents, verifies the details, and forwards them to the relevant department. Simply drop the document into any scanning device, scan, and walk away.'
            },
            {
              key: 'accountability',
              title: 'Accountability',
              icon: <FaUserCheck size={28} color="#4f46e5" />,
              content: 'With Scan2x, your documents can be traced back to the person that entered them into your system. Today’s businesses face stringent regulatory checks; this makes your system completely intuitive, transparent and traceable.'
            },
            {
              key: 'traceability',
              title: 'Traceability',
              icon: <FaSearch size={28} color="#4f46e5" />,
              content: 'How quickly could you access last year’s forecast figures, or your phone bills from 2012? Instantly! Scan2x automatically organises where and how your documents are filed, making it easy for you to track them down when you need them.'
            },
            {
              key: 'simplicity',
              title: 'Simplicity',
              icon: <FaMagic size={28} color="#4f46e5" />,
              content: 'Scan2x takes decision-making out of the scanning process by doing all the thinking for you. Simply select the job you wish to do, and the automatic settings will determine everything from scanner settings to that document’s next destination.'
            },
            {
              key: 'customisation',
              title: 'Customisation',
              icon: <FaSlidersH size={28} color="#4f46e5" />,
              content: 'Whatever your business process, Scan2x can be tailored to meet the intricate requirements of a multi-national, financial institution, or paired right down to suit the needs of a small online start-up.'
            },
            {
              key: 'adaptability',
              title: 'Adaptability',
              icon: <FaBrain size={28} color="#4f46e5" />,
              content: 'Scan2x can be taught to recognise anything, from identity documents to bank statements and invoices, through built-In OCR, Forms Recognition, QR Code and Barcode Recognition, and Cheque MICR Functionality. Scan2x just keeps on learning.'
            }
          ];
          return cards.map(card => (
            <FeatureCard
              key={card.key}
              title={card.title}
              content={card.content}
              icon={card.icon}
            />
          ));
        })()}
      </section>

      {/* Features/Interface Section */}
      <section className="scan2x-interface" style={{ marginTop: '2.5rem', marginBottom: '2rem' }}>
        <h2 style={{ color: '#008a96', fontSize: '1.35rem' }}>Scan2x Interface Features</h2>
        <ul style={{ columns: 2, maxWidth: 700, margin: '1rem auto', fontSize: '1.07rem', lineHeight: 1.6 }}>
          <li>Active Directory integration</li>
          <li>Intelligent batch splitting</li>
          <li>Integration with DMS, Sharepoint, FTP, databases, web services, email etc</li>
          <li>Multiple simultaneous outputs</li>
          <li>Full activity audit for compliance and security</li>
          <li>ID/Passport scan, expiry date, tamper checking</li>
          <li>Comprehensive scan workflows for automated distribution</li>
          <li>Form line-item extraction (e.g. invoices)</li>
          <li>Intelligent document type recognition</li>
          <li>Optical Mark Recognition (for exam auto-grading, surveys etc.)</li>
          <li>Network fault tolerance (works when disconnected)</li>
          <li>High-performance PDF compression</li>
          <li>Monitor folders and email boxes to automatically process incoming documents*</li>
        </ul>
        <p style={{ fontSize: '0.98rem', color: '#555', marginTop: '-1rem' }}>*Requires Scan2x Workload Server licence</p>
      </section>

      <section className="scan2x-brochure" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <p style={{ fontWeight: 500 }}>
          Full details and specifications on the product brochure.
        </p>
      </section>
    </div>
  );
}


