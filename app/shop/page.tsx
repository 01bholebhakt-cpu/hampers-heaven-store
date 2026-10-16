
"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "The Blush Luxury Box",
    category: "Luxury Hampers",
    price: 1499,
    oldPrice: 1999,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Chocolate Lover's Dream",
    category: "Chocolates",
    price: 999,
    oldPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1548907040-4d42cfcf1e7b?auto=format&fit=crop&w=900&q=85",
    tag: "MOST LOVED",
  },
  {
    id: 3,
    name: "Forever Yours Bouquet",
    category: "Flowers",
    price: 1199,
    oldPrice: 1499,
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85",
    tag: "ROMANTIC",
  },
  {
    id: 4,
    name: "The Celebration Hamper",
    category: "Luxury Hampers",
    price: 1899,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85",
    tag: "PREMIUM",
  },
  {
    id: 5,
    name: "Little Moments Gift Box",
    category: "Birthday Gifts",
    price: 799,
    oldPrice: 999,
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=900&q=85",
    tag: "THOUGHTFUL PICK",
  },
  {
    id: 6,
    name: "Sweet Indulgence",
    category: "Chocolates",
    price: 699,
    oldPrice: 899,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    tag: "SWEET GIFT",
  },
  {
    id: 7,
    name: "Petals & Love",
    category: "Flowers",
    price: 899,
    oldPrice: 1199,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
    tag: "FRESH PICK",
  },
  {
    id: 8,
    name: "Birthday Surprise Box",
    category: "Birthday Gifts",
    price: 1299,
    oldPrice: 1699,
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=900&q=85",
    tag: "CELEBRATE",
  },
];

const categories = [
  "All Gifts",
  "Luxury Hampers",
  "Chocolates",
  "Flowers",
  "Birthday Gifts",
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All Gifts");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All Gifts" ||
      product.category === activeCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const whatsapp = (productName: string) => {
    const message = encodeURIComponent(
      `Hi Hampers Heaven! I'm interested in ${productName}. Please share availability and ordering details.`
    );
    window.open(
      `https://wa.me/919122930001?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="shop-page">
      <div className="announcement">
        LITTLE THINGS. BIG FEELINGS. ♡
      </div>

      <header className="shop-header">
        <Link href="/" className="brand">
          <span className="brand-icon">♡</span>
          <span>
            <strong>Hampers Heaven</strong>
            <small>GIFTS THAT FEEL LIKE LOVE</small>
          </span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/shop" className="nav-active">Shop</Link>
          <a href="#collections">Collections</a>
          <a href="#footer">Contact</a>
        </nav>

        <a
          className="header-cta"
          href="https://wa.me/919122930001"
          target="_blank"
          rel="noreferrer"
        >
          Enquire ♡
        </a>
      </header>

      <section className="shop-hero">
        <div className="hero-copy">
          <span className="eyebrow">THE ART OF GIFTING</span>
          <h1>
            Find a gift
            <br />
            that says <em>it all.</em>
          </h1>
          <p>
            Thoughtfully curated hampers for your favourite people
            and your most unforgettable moments.
          </p>
          <a href="#collections" className="hero-button">
            EXPLORE THE COLLECTION <span>↗</span>
          </a>
          <div className="hero-note">
            <span>✳</span> Made for moments worth remembering
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=90"
            alt="Beautifully arranged gift boxes"
          />
          <div className="floating-note">
            <span>♡</span>
            <div>
              <strong>Wrapped with love</strong>
              <small>Delivered with happiness</small>
            </div>
          </div>
          <div className="hero-stamp">A LITTLE<br />BOX OF<br />HAPPINESS</div>
        </div>
      </section>

      <section className="collection-section" id="collections">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</span>
            <h2>Shop the <em>collection</em></h2>
            <p>Because every occasion deserves a beautiful surprise.</p>
          </div>
          <span className="product-count">
            {filteredProducts.length} BEAUTIFUL FINDS
          </span>
        </div>

        <div className="shop-tools">
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "category-chip selected"
                    : "category-chip"
                }
              >
                {category}
              </button>
            ))}
          </div>

          <input
            className="search-box"
            type="search"
            placeholder="Search gifts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search gifts"
          />
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-tag">{product.tag}</span>
                <button
                  className="quick-enquire"
                  onClick={() => whatsapp(product.name)}
                >
                  ENQUIRE ON WHATSAPP ↗
                </button>
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="price-line">
                  <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                  <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
                  <span className="discount">
                    {Math.round(
                      (1 - product.price / product.oldPrice) * 100
                    )}% OFF
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <span>♡</span>
            <h3>No gifts found just yet</h3>
            <p>Try another search or choose a different collection.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Gifts");
              }}
            >
              View all gifts
            </button>
          </div>
        )}
      </section>

      <section className="gift-note">
        <span className="eyebrow">YOUR THOUGHTFUL GIFTING PARTNER</span>
        <h2>Some feelings are better <em>gift-wrapped.</em></h2>
        <p>Have something special in mind? Let us help you find the perfect gift.</p>
        <a
          href="https://wa.me/919122930001?text=Hi%20Hampers%20Heaven!%20Help%20me%20choose%20a%20gift."
          target="_blank"
          rel="noreferrer"
        >
          LET&apos;S FIND YOUR GIFT ↗
        </a>
      </section>

      <footer className="shop-footer" id="footer">
        <div className="footer-brand">
          <strong>Hampers Heaven <span>♡</span></strong>
          <p>Little things. Big feelings.</p>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop gifts</Link>
          <a href="https://wa.me/919122930001" target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
        <p className="copyright">© 2026 Hampers Heaven. Made with love.</p>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          color: #402d32;
          background: #fffaf8;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .announcement {
          padding: 10px 16px;
          background: #70424f;
          color: white;
          text-align: center;
          font-size: 10px;
          letter-spacing: 2.2px;
        }

        .shop-header {
          height: 88px;
          padding: 0 6.5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: #fffaf8;
          border-bottom: 1px solid #f1e4e3;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .brand-icon {
          font-size: 37px;
          color: #bc7e88;
        }

        .brand strong,
        .brand small {
          display: block;
        }

        .brand strong {
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 500;
        }

        .brand small {
          margin-top: 5px;
          color: #a47c7e;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 31px;
          font-size: 13px;
          color: #6b5659;
        }

        .nav-links a:hover,
        .nav-active {
          color: #b46e7b !important;
        }

        .header-cta {
          border: 1px solid #d7adb2;
          border-radius: 3px;
          padding: 12px 20px;
          font-size: 12px;
          white-space: nowrap;
        }

        .shop-hero {
          padding: 48px 8% 65px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          gap: 7%;
          background: #f8eeeb;
        }

        .hero-copy {
          padding: 20px 0;
        }

        .eyebrow {
          font-size: 10px;
          letter-spacing: 2.2px;
          color: #a66c78;
          font-weight: 700;
        }

        .hero-copy h1 {
          margin: 22px 0 20px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(43px, 5.2vw, 72px);
          line-height: 1.08;
          font-weight: 400;
          letter-spacing: -2.5px;
        }

        .hero-copy h1 em,
        .section-heading h2 em,
        .gift-note h2 em {
          color: #b87884;
          font-weight: 400;
        }

        .hero-copy > p {
          max-width: 390px;
          color: #7e696b;
          font-size: 14px;
          line-height: 1.9;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          margin-top: 22px;
          padding: 16px 21px;
          background: #70424f;
          color: white;
          font-size: 10px;
          letter-spacing: 1.1px;
          transition: background 0.2s;
        }

        .hero-button:hover {
          background: #4d2b36;
        }

        .hero-note {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 28px;
          font-size: 11px;
          color: #8d7375;
        }

        .hero-note span {
          color: #b87884;
          font-size: 18px;
        }

        .hero-image {
          position: relative;
          min-width: 0;
        }

        .hero-image > img {
          display: block;
          width: 100%;
          height: 440px;
          object-fit: cover;
          object-position: center;
        }

        .floating-note {
          position: absolute;
          left: -28px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #fffaf8;
          box-shadow: 0 10px 35px #56343a16;
        }

        .floating-note > span {
          font-size: 30px;
          color: #b87884;
        }

        .floating-note strong,
        .floating-note small {
          display: block;
        }

        .floating-note strong {
          font-family: Georgia, serif;
          font-size: 14px;
          font-weight: 500;
        }

        .floating-note small {
          margin-top: 5px;
          color: #917c7e;
          font-size: 10px;
        }

        .hero-stamp {
          position: absolute;
          top: 20px;
          right: 20px;
          display: grid;
          place-content: center;
          width: 83px;
          height: 83px;
          border: 1px solid #ffffffa6;
          border-radius: 50%;
          background: #fffaf8dd;
          text-align: center;
          font-family: Georgia, serif;
          font-size: 10px;
          line-height: 1.5;
          letter-spacing: 1px;
        }

        .collection-section {
          padding: 82px 7% 90px;
          scroll-margin-top: 20px;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
        }

        .section-heading h2 {
          margin: 13px 0 8px;
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: -1.3px;
        }

        .section-heading p {
          margin: 0;
          color: #8d797a;
          font-size: 13px;
          line-height: 1.8;
        }

        .product-count {
          padding-bottom: 7px;
          color: #9e8284;
          font-size: 9px;
          letter-spacing: 1.6px;
          white-space: nowrap;
        }

        .shop-tools {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin: 33px 0 29px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee1df;
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .category-chip {
          padding: 10px 15px;
          border: 1px solid #eadbd9;
          border-radius: 30px;
          background: transparent;
          color: #755e61;
          font-size: 11px;
          transition: all 0.2s;
        }

        .category-chip:hover,
        .category-chip.selected {
          background: #70424f;
          color: white;
          border-color: #70424f;
        }

        .search-box {
          width: 180px;
          min-width: 135px;
          padding: 11px 13px;
          border: 1px solid #eadbd9;
          border-radius: 3px;
          outline: none;
          background: #fffdfc;
          color: #402d32;
          font-size: 12px;
        }

        .search-box:focus {
          border-color: #b87884;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 34px 20px;
        }

        .product-card {
          min-width: 0;
        }

        .product-image {
          position: relative;
          overflow: hidden;
          background: #f2e7e4;
          aspect-ratio: 0.83;
        }

        .product-image > img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .product-card:hover .product-image > img {
          transform: scale(1.045);
        }

        .product-tag {
          position: absolute;
          top: 13px;
          left: 12px;
          padding: 7px 9px;
          background: #fffaf8eF;
          color: #81535d;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .quick-enquire {
          position: absolute;
          right: 10px;
          bottom: 10px;
          left: 10px;
          padding: 13px 8px;
          border: 0;
          background: #fffaf8f2;
          color: #67404a;
          font-size: 9px;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.2s;
        }

        .product-card:hover .quick-enquire,
        .quick-enquire:focus {
          opacity: 1;
          transform: translateY(0);
        }

        .product-info {
          padding: 16px 2px 0;
        }

        .product-category {
          color: #ae7b82;
          font-size: 9px;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .product-info h3 {
          margin: 8px 0 12px;
          font-family: Georgia, serif;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 400;
        }

        .price-line {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .price-line strong {
          font-size: 14px;
        }

        .price-line del {
          color: #a99797;
          font-size: 11px;
        }

        .discount {
          color: #a56570;
          font-size: 9px;
        }

        .empty-state {
          padding: 60px 20px;
          text-align: center;
          background: #f9efec;
        }

        .empty-state > span {
          font-size: 35px;
          color: #b87884;
        }

        .empty-state h3 {
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .empty-state p {
          color: #8d797a;
          font-size: 13px;
        }

        .empty-state button {
          margin-top: 12px;
          padding: 12px 18px;
          border: 0;
          background: #70424f;
          color: white;
        }

        .gift-note {
          padding: 75px 20px;
          background: #f6e9e7;
          text-align: center;
        }

        .gift-note h2 {
          margin: 17px 0 12px;
          font-family: Georgia, serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 400;
        }

        .gift-note p {
          margin: 0 auto;
          max-width: 500px;
          color: #8b7375;
          font-size: 13px;
          line-height: 1.8;
        }

        .gift-note > a {
          display: inline-block;
          margin-top: 24px;
          padding: 15px 22px;
          background: #70424f;
          color: white;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .shop-footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          padding: 38px 7%;
          background: #fffaf8;
        }

        .footer-brand strong {
          font-family: Georgia, serif;
          font-size: 21px;
          font-weight: 400;
        }

        .footer-brand strong span {
          color: #b87884;
        }

        .footer-brand p {
          color: #987f81;
          font-size: 11px;
        }

        .footer-links {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-wrap: wrap;
          gap: 22px;
          font-size: 11px;
          color: #755e61;
        }

        .copyright {
          grid-column: 1 / -1;
          margin: 0;
          padding-top: 20px;
          border-top: 1px solid #eee1df;
          color: #a38c8d;
          font-size: 10px;
        }

        @media (max-width: 1000px) {
          .shop-header {
            padding: 0 4%;
          }

          .nav-links {
            gap: 17px;
          }

          .shop-hero {
            padding-right: 6%;
            padding-left: 6%;
            gap: 5%;
          }

          .hero-image > img {
            height: 380px;
          }

          .collection-section {
            padding-right: 5%;
            padding-left: 5%;
          }

          .product-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .announcement {
            font-size: 9px;
          }

          .shop-header {
            height: auto;
            min-height: 78px;
            padding: 15px 5%;
            flex-wrap: wrap;
            gap: 15px;
          }

          .brand strong {
            font-size: 19px;
          }

          .brand-icon {
            font-size: 30px;
          }

          .brand small {
            font-size: 7px;
          }

          .header-cta {
            padding: 10px 13px;
            font-size: 11px;
          }

          .nav-links {
            order: 3;
            width: 100%;
            justify-content: space-between;
            gap: 8px;
            padding-top: 12px;
            border-top: 1px solid #f1e4e3;
            font-size: 12px;
          }

          .shop-hero {
            grid-template-columns: 1fr;
            padding: 38px 6% 45px;
            gap: 30px;
          }

          .hero-copy {
            padding: 0;
          }

          .hero-copy h1 {
            font-size: 53px;
          }

          .hero-image > img {
            height: 340px;
          }

          .floating-note {
            left: -5px;
            bottom: 14px;
            padding: 12px;
          }

          .hero-stamp {
            width: 70px;
            height: 70px;
            top: 12px;
            right: 12px;
            font-size: 8px;
          }

          .collection-section {
            padding: 55px 5% 60px;
          }

          .section-heading {
            align-items: start;
            flex-direction: column;
            gap: 12px;
          }

          .section-heading h2 {
            font-size: 37px;
          }

          .product-count {
            padding: 0;
          }

          .shop-tools {
            align-items: stretch;
            flex-direction: column;
            gap: 15px;
            margin-top: 24px;
          }

          .category-list {
            gap: 7px;
          }

          .category-chip {
            padding: 9px 11px;
            font-size: 10px;
          }

          .search-box {
            width: 100%;
          }

          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 27px 12px;
          }

          .product-tag {
            top: 7px;
            left: 7px;
            padding: 6px;
            font-size: 7px;
          }

          .quick-enquire {
            left: 5px;
            right: 5px;
            bottom: 5px;
            padding: 10px 4px;
            font-size: 8px;
            opacity: 1;
            transform: none;
          }

          .product-info {
            padding-top: 12px;
          }

          .product-info h3 {
            font-size: 15px;
          }

          .price-line {
            gap: 5px;
          }

          .price-line strong {
            font-size: 12px;
          }

          .price-line del,
          .discount {
            font-size: 9px;
          }

          .gift-note {
            padding: 55px 6%;
          }

          .gift-note h2 {
            font-size: 34px;
          }

          .shop-footer {
            padding: 30px 5%;
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .footer-links {
            justify-content: flex-start;
            gap: 16px;
          }

          .copyright {
            grid-column: auto;
          }
        }
      `}</style>
    </main>
  );
}
