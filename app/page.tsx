
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
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=85",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Chocolate Lover's Dream",
    category: "Chocolates",
    price: 999,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1548907040-4d42cfcf1e7b?auto=format&fit=crop&w=800&q=85",
    tag: "MOST LOVED",
  },
  {
    id: 3,
    name: "Forever Yours Bouquet",
    category: "Flowers",
    price: 1199,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=85",
    tag: "ROMANTIC",
  },
  {
    id: 4,
    name: "The Celebration Hamper",
    category: "Luxury Hampers",
    price: 1899,
    oldPrice: 2499,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=85",
    tag: "PREMIUM",
  },
  {
    id: 5,
    name: "Little Moments Gift Box",
    category: "Birthday Gifts",
    price: 799,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=800&q=85",
    tag: "THOUGHTFUL PICK",
  },
  {
    id: 6,
    name: "Sweet Indulgence",
    category: "Chocolates",
    price: 699,
    oldPrice: 899,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85",
    tag: "SWEET GIFT",
  },
  {
    id: 7,
    name: "Petals & Love",
    category: "Flowers",
    price: 899,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=85",
    tag: "FRESH PICK",
  },
  {
    id: 8,
    name: "Birthday Surprise Box",
    category: "Birthday Gifts",
    price: 1299,
    oldPrice: 1699,
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=85",
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
  const [category, setCategory] = useState("All Gifts");
  const [search, setSearch] = useState("");

  const filtered = products.filter((product) => {
    const matchesCategory =
      category === "All Gifts" || product.category === category;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  function enquire(name: string) {
    const message = encodeURIComponent(
      `Hi Hampers Heaven! I'm interested in ${name}. Please share availability and ordering details.`
    );

    window.open(
      `https://wa.me/919122930001?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="shop">
      <div className="announcement">
        LITTLE THINGS. BIG FEELINGS. ♡
      </div>

      <header className="header">
        <Link href="/" className="brand">
          <span className="brand-heart">♡</span>
          <span>
            <strong>Hampers Heaven</strong>
            <small>GIFTS THAT FEEL LIKE LOVE</small>
          </span>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/shop" className="active">Shop</Link>
          <a href="#collections">Collections</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="enquire-button"
          href="https://wa.me/919122930001"
          target="_blank"
          rel="noreferrer"
        >
          Enquire ♡
        </a>
      </header>

      <section className="hero">
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
          <a href="#collections" className="primary-button">
            EXPLORE THE COLLECTION <span>↗</span>
          </a>
          <div className="hero-note">
            <span>✳</span> Made for moments worth remembering
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=85"
            alt="Beautifully arranged gift boxes"
          />
          <div className="floating-card">
            <span>♡</span>
            <div>
              <strong>Wrapped with love</strong>
              <small>Made for someone special</small>
            </div>
          </div>
          <div className="round-stamp">A LITTLE<br />BOX OF<br />HAPPINESS</div>
        </div>
      </section>

      <section className="collection" id="collections">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</span>
            <h2>Shop the <em>collection</em></h2>
            <p>Because every occasion deserves a beautiful surprise.</p>
          </div>
          <span className="count">{filtered.length} BEAUTIFUL FINDS</span>
        </div>

        <div className="toolbar">
          <div className="categories">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={category === item ? "chip selected" : "chip"}
              >
                {item}
              </button>
            ))}
          </div>

          <input
            className="search"
            type="search"
            placeholder="Search gifts..."
            aria-label="Search gifts"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="products">
          {filtered.map((product) => (
            <article className="product" key={product.id}>
              <div className="product-visual">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="tag">{product.tag}</span>
                <button
                  className="quick-enquire"
                  onClick={() => enquire(product.name)}
                >
                  ENQUIRE ON WHATSAPP ↗
                </button>
              </div>

              <div className="product-details">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="price-row">
                  <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                  <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
                  <span>
                    {Math.round(
                      (1 - product.price / product.oldPrice) * 100
                    )}% OFF
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty">
            <span>♡</span>
            <h3>No gifts found</h3>
            <p>Try another search or explore all our gifts.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All Gifts");
              }}
            >
              View all gifts
            </button>
          </div>
        )}
      </section>

      <section className="gift-banner">
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

      <footer className="footer" id="contact">
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
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #fffaf8;
          color: #402d32;
          font-family: Arial, Helvetica, sans-serif;
        }
        a { color: inherit; text-decoration: none; }
        button, input { font: inherit; }
        button { cursor: pointer; }
        .announcement {
          padding: 10px;
          background: #70424f;
          color: white;
          text-align: center;
          font-size: 10px;
          letter-spacing: 2px;
        }
        .header {
          min-height: 86px;
          padding: 15px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          border-bottom: 1px solid #f0e3e1;
        }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand-heart { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong {
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 400;
        }
        .brand small {
          margin-top: 5px;
          color: #a47c7e;
          font-size: 8px;
          letter-spacing: 1.7px;
        }
        nav { display: flex; gap: 27px; font-size: 13px; color: #715d60; }
        nav a:hover, nav .active { color: #b46e7b; }
        .enquire-button {
          padding: 12px 18px;
          border: 1px solid #d7adb2;
          font-size: 12px;
          white-space: nowrap;
        }
        .hero {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 6%;
          padding: 55px 8%;
          background: #f8eeeb;
        }
        .eyebrow { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 {
          margin: 22px 0 18px;
          font-family: Georgia, serif;
          font-size: clamp(44px, 5vw, 72px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -2px;
        }
        .hero h1 em, .section-heading h2 em, .gift-banner h2 em {
          color: #b87884;
          font-weight: 400;
        }
        .hero-copy > p { max-width: 380px; color: #806a6d; font-size: 14px; line-height: 1.9; }
        .primary-button {
          display: inline-flex;
          gap: 20px;
          margin-top: 22px;
          padding: 16px 20px;
          background: #70424f;
          color: white;
          font-size: 10px;
          letter-spacing: 1px;
        }
        .hero-note { margin-top: 28px; color: #8d7375; font-size: 11px; }
        .hero-note span { color: #b87884; font-size: 18px; margin-right: 8px; }
        .hero-visual { position: relative; min-width: 0; }
        .hero-visual > img { display: block; width: 100%; height: 430px; object-fit: cover; }
        .floating-card {
          position: absolute;
          bottom: 22px;
          left: -24px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 18px;
          background: #fffaf8;
          box-shadow: 0 8px 30px #56343a18;
        }
        .floating-card > span { color: #b87884; font-size: 30px; }
        .floating-card strong, .floating-card small { display: block; }
        .floating-card strong { font-family: Georgia, serif; font-size: 14px; font-weight: 400; }
        .floating-card small { margin-top: 5px; color: #917c7e; font-size: 10px; }
        .round-stamp {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 82px;
          height: 82px;
          display: grid;
          place-content: center;
          border: 1px solid #fff;
          border-radius: 50%;
          background: #fffaf8df;
          text-align: center;
          font-family: Georgia, serif;
          font-size: 9px;
          line-height: 1.6;
          letter-spacing: 1px;
        }
        .collection { padding: 80px 7% 90px; scroll-margin-top: 20px; }
        .section-heading { display: flex; justify-content: space-between; align-items: end; gap: 20px; }
        .section-heading h2 {
          margin: 13px 0 8px;
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: -1px;
        }
        .section-heading p { margin: 0; color: #8d797a; font-size: 13px; line-height: 1.8; }
        .count { color: #9e8284; font-size: 9px; letter-spacing: 1.5px; white-space: nowrap; }
        .toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin: 32px 0 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee1df;
        }
        .categories { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          padding: 10px 14px;
          border: 1px solid #eadbd9;
          border-radius: 30px;
          background: transparent;
          color: #755e61;
          font-size: 11px;
        }
        .chip.selected, .chip:hover { background: #70424f; color: white; border-color: #70424f; }
        .search {
          width: 180px;
          min-width: 130px;
          padding: 11px 13px;
          border: 1px solid #eadbd9;
          border-radius: 3px;
          outline: none;
          background: #fffdfc;
          font-size: 12px;
        }
        .search:focus { border-color: #b87884; }
        .products { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 34px 20px; }
        .product { min-width: 0; }
        .product-visual { position: relative; overflow: hidden; aspect-ratio: .83; background: #f2e7e4; }
        .product-visual > img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
        .product:hover .product-visual > img { transform: scale(1.045); }
        .tag {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 7px 9px;
          background: #fffaf8ef;
          color: #81535d;
          font-size: 8px;
          letter-spacing: 1px;
        }
        .quick-enquire {
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 10px;
          padding: 13px 6px;
          border: 0;
          background: #fffaf8f2;
          color: #67404a;
          font-size: 9px;
          letter-spacing: .8px;
          opacity: 0;
          transform: translateY(8px);
          transition: .2s;
        }
        .product:hover .quick-enquire, .quick-enquire:focus { opacity: 1; transform: translateY(0); }
        .product-details { padding: 15px 2px 0; }
        .product-category { color: #ae7b82; font-size: 9px; letter-spacing: 1.2px; text-transform: uppercase; }
        .product-details h3 { margin: 8px 0 12px; font-family: Georgia, serif; font-size: 17px; line-height: 1.4; font-weight: 400; }
        .price-row { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
        .price-row strong { font-size: 14px; }
        .price-row del { color: #a99797; font-size: 11px; }
        .price-row span { color: #a56570; font-size: 9px; }
        .empty { padding: 55px 20px; text-align: center; background: #f9efec; }
        .empty > span { color: #b87884; font-size: 35px; }
        .empty h3 { font-family: Georgia, serif; font-weight: 400; }
        .empty p { color: #8d797a; font-size: 13px; }
        .empty button { margin-top: 12px; padding: 12px 18px; border: 0; background: #70424f; color: white; }
        .gift-banner { padding: 75px 20px; background: #f6e9e7; text-align: center; }
        .gift-banner h2 { margin: 17px 0 12px; font-family: Georgia, serif; font-size: clamp(30px, 4vw, 46px); font-weight: 400; }
        .gift-banner p { max-width: 500px; margin: 0 auto; color: #8b7375; font-size: 13px; line-height: 1.8; }
        .gift-banner > a { display: inline-block; margin-top: 24px; padding: 15px 22px; background: #70424f; color: white; font-size: 10px; letter-spacing: 1px; }
        .footer { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; padding: 38px 7%; }
        .footer-brand strong { font-family: Georgia, serif; font-size: 21px; font-weight: 400; }
        .footer-brand strong span { color: #b87884; }
        .footer-brand p { color: #987f81; font-size: 11px; }
        .footer-links { display: flex; justify-content: flex-end; align-items: center; flex-wrap: wrap; gap: 22px; font-size: 11px; color: #755e61; }
        .copyright { grid-column: 1 / -1; margin: 0; padding-top: 20px; border-top: 1px solid #eee1df; color: #a38c8d; font-size: 10px; }
        @media (max-width: 1000px) {
          .header { padding: 15px 4%; }
          nav { gap: 16px; }
          .hero { padding-right: 6%; padding-left: 6%; gap: 4%; }
          .hero-visual > img { height: 370px; }
          .collection { padding-right: 5%; padding-left: 5%; }
          .products { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 680px) {
          .header { padding: 15px 5%; flex-wrap: wrap; gap: 14px; }
          .brand strong { font-size: 19px; }
          .brand-heart { font-size: 30px; }
          .brand small { font-size: 7px; }
          nav { order: 3; width: 100%; justify-content: space-between; gap: 8px; padding-top: 12px; border-top: 1px solid #f1e4e3; font-size: 12px; }
          .hero { grid-template-columns: 1fr; padding: 38px 6% 45px; gap: 28px; }
          .hero h1 { font-size: 53px; }
          .hero-visual > img { height: 330px; }
          .floating-card { left: -5px; bottom: 14px; padding: 12px; }
          .round-stamp { width: 70px; height: 70px; top: 12px; right: 12px; font-size: 8px; }
          .collection { padding: 55px 5% 60px; }
          .section-heading { align-items: start; flex-direction: column; gap: 12px; }
          .section-heading h2 { font-size: 37px; }
          .toolbar { align-items: stretch; flex-direction: column; gap: 15px; margin-top: 24px; }
          .categories { gap: 7px; }
          .chip { padding: 9px 11px; font-size: 10px; }
          .search { width: 100%; }
          .products { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 27px 12px; }
          .tag { top: 7px; left: 7px; padding: 6px; font-size: 7px; }
          .quick-enquire { left: 5px; right: 5px; bottom: 5px; padding: 10px 3px; font-size: 8px; opacity: 1; transform: none; }
          .product-details { padding-top: 12px; }
          .product-details h3 { font-size: 15px; }
          .price-row { gap: 5px; }
          .price-row strong { font-size: 12px; }
          .price-row del, .price-row span { font-size: 9px; }
          .gift-banner { padding: 55px 6%; }
          .gift-banner h2 { font-size: 34px; }
          .footer { grid-template-columns: 1fr; padding: 30px 5%; gap: 18px; }
          .footer-links { justify-content: flex-start; gap: 16px; }
          .copyright { grid-column: auto; }
        }
      `}</style>
    </main>
  );
}
