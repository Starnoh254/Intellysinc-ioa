import React from "react";
import "../styles/readiris-showcase.css";

export default function ReadirisShowcase() {
  return (
    <section className="ri-wrapper">
      {/* LEFT COLUMN ---------------------------------------------------- */}
      <div className="ri-col ri-left">
        <img
          className="ri-box"
          src="/images/readiris-pdf-elite-box.png"
          alt="Readiris PDF Elite box"
        />

        <h4 className="ri-heading">PDF Manager :</h4>
        <p className="ri-sub">Product range comparison</p>

        <ul className="ri-list">
          <li>
            <Icon type="pdf" /> Readiris PDF Essential{" "}
            <OSIcons win mac />
          </li>
          <li>
            <Icon type="pdf" /> Readiris PDF Elite{" "}
            <OSIcons win mac />
          </li>
        </ul>
      </div>

      {/* MIDDLE COLUMN -------------------------------------------------- */}
      <div className="ri-col ri-center">
        <img
          className="ri-box ri-box-big"
          src="/images/readiris-17-box.png"
          alt="Readiris 17 box"
        />
      </div>

      {/* RIGHT COLUMN --------------------------------------------------- */}
      <div className="ri-col ri-right">
        <h4 className="ri-heading">OCR Solutions :</h4>
        <p className="ri-sub">Product range comparison</p>

        <ul className="ri-list">
          <li>
          <Icon type="ocr" /> Readiris Pro 17 <OSIcons win />
          </li>
          <li>
          <Icon type="ocr" /> Readiris Corporate 17 <OSIcons win />
          </li>
          <li>
          <Icon type="ocr" /> Readiris Dyslexic <OSIcons win />
          </li>
          <li>
          <Icon type="ocr" /> Readiris Pro 17 <OSIcons mac />
          </li>
          <li>
          <Icon type="ocr" /> Readiris Corporate 17 <OSIcons mac />
          </li>
        </ul>
      </div>
    </section>
  );
}

/* --- Small helpers --------------------------------------------------- */

function OSIcons({ win, mac }) {
  return (
    <span className="ri-os">
      {win && <span className="ri-os-badge ri-os-win" title="Windows">🪟</span>}
      {mac && <span className="ri-os-badge ri-os-mac" title="macOS"></span>}
    </span>
  );
}

function Icon({ type }) {
  return (
    <span
      className={`ri-product-icon ${type === "pdf" ? "ri-pdf" : "ri-ocr"}`}
      aria-hidden
    />
  );
}
