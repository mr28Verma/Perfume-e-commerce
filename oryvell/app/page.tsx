"use client";

import { useState } from "react";
import Link from "next/link";

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Collection", "Brands", "Shop", "Gifts", "Contact"];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Oud Saffron",
    brand: "Oryvell Noir",
    price: "₹4,800",
    tag: "Bestseller",
    bg: "#ede0d4",
    accent: "#c4a882",
    emoji: "🟤",
  },
  {
    id: 2,
    name: "Rose Absolute",
    brand: "Oryvell Bloom",
    price: "₹3,600",
    tag: "New",
    bg: "#f0dcd8",
    accent: "#c48070",
    emoji: "🌸",
  },
  {
    id: 3,
    name: "Neroli Mist",
    brand: "Oryvell Lumière",
    price: "₹3,200",
    tag: "Limited",
    bg: "#dde8e0",
    accent: "#7a9e8c",
    emoji: "🌿",
  },
  {
    id: 4,
    name: "White Amber",
    brand: "Oryvell Éclat",
    price: "₹5,200",
    tag: "Exclusive",
    bg: "#ece8dc",
    accent: "#b8a070",
    emoji: "✨",
  },
];

const CATEGORIES = [
  { name: "Floral", count: "24 scents", color: "#f0dcd8" },
  { name: "Woody", count: "18 scents", color: "#e8ddd0" },
  { name: "Oriental", count: "31 scents", color: "#ede0d4" },
  { name: "Fresh", count: "15 scents", color: "#dde8e0" },
];

// ── Components ────────────────────────────────────────────────────────────────

function Navbar({ cartCount }: { cartCount: number }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <span className="logo-o">O</span>
          <span className="logo-text">RYVELL</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <Link href={`/${l.toLowerCase()}`} className="nav-link">
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M13 13l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Search</span>
          </button>
          <Link href="/login" className="nav-icon-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 16c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
          <button className="nav-cart-btn" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1h2.5l2 9h9l2-7H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="7.5" cy="14.5" r="1" fill="currentColor"/>
              <circle cx="13.5" cy="14.5" r="1" fill="currentColor"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* Mobile hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={menuOpen ? "bar open" : "bar"} />
            <span className={menuOpen ? "bar open" : "bar"} />
            <span className={menuOpen ? "bar open" : "bar"} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <Link key={l} href={`/${l.toLowerCase()}`} className="mobile-link" onClick={() => setMenuOpen(false)}>
              {l}
            </Link>
          ))}
          <Link href="/login" className="mobile-link" onClick={() => setMenuOpen(false)}>Sign In</Link>
        </div>
      )}
    </nav>
  );
}

function ProductCard({ product }: { product: typeof FEATURED_PRODUCTS[0] }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="product-card">
      <div className="product-img-wrap" style={{ background: product.bg }}>
        {/* Decorative circle */}
        <div className="product-circle" style={{ background: product.accent + "33" }} />
        {/* Placeholder bottle illustration */}
        <div className="product-bottle">
          <div className="bottle-body" style={{ background: `linear-gradient(145deg, ${product.accent}cc, ${product.accent}66)` }}>
            <div className="bottle-neck" style={{ background: product.accent }} />
            <div className="bottle-cap" style={{ background: product.accent + "dd" }} />
            <div className="bottle-label">
              <span className="bottle-brand">{product.brand.split(" ")[1]}</span>
            </div>
            <div className="bottle-shine" />
          </div>
        </div>
        <span className="product-tag" style={{ background: product.accent, color: "#fff" }}>
          {product.tag}
        </span>
        <button
          className={`add-btn ${added ? "added" : ""}`}
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1800); }}
          aria-label="Add to cart"
        >
          {added ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>
      <div className="product-info">
        <p className="product-brand">{product.brand}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <Link href="/shop" className="product-view">View →</Link>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [cartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="main">

        {/* ── HERO ── */}
        <section className="hero">
          {/* Ambient blobs */}
          <div className="hero-blob blob-a" />
          <div className="hero-blob blob-b" />
          <div className="hero-blob blob-c" />

          <div className="hero-layout">
            {/* Left copy */}
            <div className="hero-copy">
              <span className="hero-eyebrow">New Collection 2026</span>
              <h1 className="hero-headline">
                Discover <em>Rare</em><br />
                Fragrances<br />
                Crafted for You
              </h1>
              <p className="hero-sub">
                Unlock your signature scent.<br />
                Find the perfect fragrance for every occasion.
              </p>
              <div className="hero-ctas">
                <Link href="/shop" className="btn-fill">
                  Shop Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/collection" className="btn-outline">Explore Collection</Link>
              </div>
              <div className="hero-stats">
                {[["200+", "Fragrances"], ["50+", "Brands"], ["10K+", "Customers"]].map(([n, l]) => (
                  <div key={l} className="stat">
                    <span className="stat-num">{n}</span>
                    <span className="stat-label">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center — hero visual */}
            <div className="hero-visual">
              <div className="hero-orb" />
              {/* Large hero bottle placeholder */}
              <div className="hero-bottle-wrap">
                <div className="hero-bottle">
                  <div className="hb-cap" />
                  <div className="hb-neck" />
                  <div className="hb-body">
                    <div className="hb-shine" />
                    <div className="hb-label">
                      <span className="hb-brand">ORYVELL</span>
                      <span className="hb-name">OUD SAFFRON</span>
                      <span className="hb-sub">Eau de Parfum</span>
                    </div>
                  </div>
                  <div className="hb-base" />
                </div>
              </div>
              {/* Floating scent chips */}
              <div className="float-chip chip-1">Woody · Warm</div>
              <div className="float-chip chip-2">100ml · EDP</div>
              <div className="float-chip chip-3">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 9l.5-2.9L2 4l2.9-.4z" fill="#c4a882"/>
                </svg>
                4.9 · 2.1k reviews
              </div>
            </div>

            {/* Right — featured card */}
            <div className="hero-aside">
              <div className="aside-card">
                <p className="aside-eyebrow">Featured Pick</p>
                <h3 className="aside-title">Discover Exquisite Fragrances at Your Fingertips</h3>
                <p className="aside-body">Indulge your senses in a world of captivating aromas</p>
                <div className="aside-img">
                  <div className="aside-bottle">
                    <div className="ab-cap" />
                    <div className="ab-body" />
                  </div>
                </div>
                <Link href="/shop" className="aside-cta">
                  Shop Now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="categories-section">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <p className="section-eyebrow">Browse by Mood</p>
                <h2 className="section-title">Find Your <em>Scent Family</em></h2>
              </div>
              <Link href="/collection" className="see-all">See all →</Link>
            </div>
            <div className="categories-grid">
              {CATEGORIES.map((c) => (
                <Link href={`/collection?type=${c.name.toLowerCase()}`} key={c.name} className="category-card" style={{ background: c.color }}>
                  <div className="category-inner">
                    <h3 className="category-name">{c.name}</h3>
                    <p className="category-count">{c.count}</p>
                  </div>
                  <div className="category-arrow">→</div>
                  <div className="category-orb" style={{ background: c.color }} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEST SELLERS ── */}
        <section className="products-section">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <p className="section-eyebrow">Most Loved</p>
                <h2 className="section-title">Best Selling <em>Products</em></h2>
              </div>
              <div className="offer-badge">
                <span className="offer-num">20%</span>
                <span className="offer-txt">Off<br/><small>New Arrivals</small></span>
                <Link href="/shop?sale=1" className="offer-link">Explore More →</Link>
              </div>
            </div>
            <div className="products-grid">
              {FEATURED_PRODUCTS.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <div className="marquee-strip">
          <div className="marquee-track">
            {Array(3).fill(["Oud Saffron", "Rose Absolute", "Neroli Mist", "White Amber", "Black Cedar", "Jasmine Vert"]).flat().map((t, i) => (
              <span key={i} className="marquee-item">{t} <span className="marquee-dot">✦</span></span>
            ))}
          </div>
        </div>

        {/* ── BANNER ── */}
        <section className="banner-section">
          <div className="banner-inner">
            <div className="banner-copy">
              <p className="banner-eyebrow">Limited Edition</p>
              <h2 className="banner-title">The <em>Oryvell</em><br />Signature Collection</h2>
              <p className="banner-sub">Eight rare fragrances. One extraordinary journey.</p>
              <Link href="/collection/signature" className="btn-fill light">
                Discover Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="banner-visual">
              <div className="banner-circle-1" />
              <div className="banner-circle-2" />
              <div className="banner-bottles">
                {["#c4a882", "#c48070", "#7a9e8c", "#b8a070"].map((col, i) => (
                  <div key={i} className="banner-mini-bottle" style={{ background: `linear-gradient(145deg, ${col}dd, ${col}88)`, transform: `rotate(${(i - 1.5) * 8}deg) translateY(${i % 2 === 0 ? "-10px" : "10px"})` }}>
                    <div className="bmb-cap" style={{ background: col }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ── */}
        <section className="newsletter-section">
          <div className="newsletter-inner">
            <div className="nl-text">
              <p className="section-eyebrow">Stay in the Loop</p>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>Get Early Access & <em>Exclusive Offers</em></h2>
            </div>
            <form className="nl-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="nl-input" placeholder="Your email address" />
              <button type="submit" className="btn-fill">Subscribe</button>
            </form>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-o">O</span>
              <span className="logo-text">RYVELL</span>
            </div>
            <p className="footer-tagline">Where silence holds<br />the weight of petals.</p>
            <p className="footer-copy">© 2024 Oryvell. All rights reserved.</p>
          </div>
          {[
            { title: "Shop", links: ["New Arrivals", "Best Sellers", "Collections", "Gifts"] },
            { title: "About", links: ["Our Story", "Sustainability", "Press", "Careers"] },
            { title: "Help", links: ["FAQ", "Shipping", "Returns", "Contact Us"] },
          ].map((col) => (
            <div key={col.title} className="footer-col">
              <h4 className="footer-col-title">{col.title}</h4>
              {col.links.map((l) => (
                <Link key={l} href="#" className="footer-link">{l}</Link>
              ))}
            </div>
          ))}
        </div>
      </footer>

    </>
  );
}