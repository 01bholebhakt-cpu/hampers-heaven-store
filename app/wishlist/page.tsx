
"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "The Blush Luxury Box",
    price: 1999,
    category: "LUXURY GIFTING",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    name: "Sweet Chocolate Dreams",
    price: 1299,
    category: "CHOCOLATE HAMPERS",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Forever Floral Surprise",
    price: 1599,
    category: "FLOWER GIFTS",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    name: "The Celebration Hamper",
    price: 2499,
    category: "SPECIAL OCCASIONS",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=700&q=85",
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<number[]>([1, 2, 3]);

  function removeItem(id: number) {
    setWishlist((current) => current.filter((item) => item !== id));
  }

  const savedProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  return (
    <main className="wishlist-page">
      <div className="topbar">
        A LITTLE LOVE, SAVED FOR LATER ♡
      </div>

      <header>
        <Link href="/" className="brand">
          <span>♡</span>
          <div>
            <strong>Hampers Heaven</strong>
            <small>GIFTS THAT FEEL LIKE LOVE</small>
          </div>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <span className="eyebrow">YOUR PERSONAL COLLECTION</span>
        <h1>Saved with <em>Love.</em></h1>
        <p>Your favourite little things, all in one place.</p>
      </section>

      <section className="content">
        <div className="section-heading">
          <div>
            <span>THE THINGS YOU ADORE</span>
            <h2>Your Wishlist <small>({savedProducts.length})</small></h2>
          </div>
          <Link href="/shop" className="continue">
            CONTINUE SHOPPING ↗
          </Link>
        </div>

        {savedProducts.length > 0 ? (
          <div className="product-grid">
            {savedProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <Link href={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <button
                    className="heart-button"
                    onClick={() => removeItem(product.id)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    title="Remove from wishlist"
                  >
                    ♥
                  </button>
                </div>

                <div className="product-info">
                  <span className="category">{product.category}</span>
                  <Link href={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>
                  <div className="product-bottom">
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <a
                      href={`https://wa.me/919122930001?text=${encodeURIComponent(
                        `Hi Hampers Heaven! I'm interested in ${product.name} priced at ₹${product.price}. Please share availability and ordering details.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ENQUIRE ↗
                    </a>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(product.id)}
                  >
                    Remove from wishlist
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty">
            <span>♡</span>
            <h2>Your wishlist is waiting.</h2>
            <p>
              You haven't saved any gifts here yet. Explore our collection and
              keep the ones you love close.
            </p>
            <Link href="/shop">EXPLORE THE COLLECTION ↗</Link>
          </div>
        )}

        <div className="note">
          <span>♡</span>
          <p>
            <strong>A little note</strong>
            <br />
            This wishlist is a front-end demo. Saved items reset when you
            refresh the page. Persistent wishlists can be added with a database
            and customer accounts.
          </p>
        </div>
      </section>

      <footer>
        <Link href="/">Hampers Heaven ♡</Link>
        <div>
          <Link href="/shop">Shop</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <span>© 2026 Hampers Heaven</span>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #fffaf8; color: #402d32; font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }
        button { font: inherit; cursor: pointer; }
        .topbar { padding: 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 2px; }
        header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 7%; border-bottom: 1px solid #f0e3e1; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand > span { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        nav { display: flex; gap: 22px; color: #715d60; font-size: 12px; }
        .hero { padding: 65px 20px; background: #f8eeeb; text-align: center; }
        .eyebrow, .section-heading > div > span { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 { margin: 17px 0 12px; font: 400 clamp(38px, 5vw, 54px) Georgia, serif; }
        .hero h1 em { color: #b87884; font-weight: 400; }
        .hero > p { color: #8d797a; font-size: 13px; line-height: 1.8; }
        .content { max-width: 1200px; margin: auto; padding: 55px 30px 75px; }
        .section-heading { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 28px; }
        .section-heading h2 { margin: 10px 0 0; font: 400 31px Georgia, serif; }
        .section-heading h2 small { color: #b87884; font: 14px Arial, sans-serif; }
        .continue { padding-bottom: 8px; color: #79545f; font-size: 10px; letter-spacing: 1px; }
        .product-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 22px; }
        .product-card { min-width: 0; background: white; border: 1px solid #f0e4e1; }
        .product-image { position: relative; overflow: hidden; aspect-ratio: 4 / 4.7; background: #f6ece9; }
        .product-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .4s; }
        .product-card:hover .product-image img { transform: scale(1.04); }
        .heart-button { position: absolute; top: 12px; right: 12px; display: grid; place-items: center; width: 36px; height: 36px; border: 0; border-radius: 50%; background: white; color: #bd808b; font-size: 19px; }
        .product-info { padding: 18px 15px; }
        .category { color: #a47c7e; font-size: 8px; letter-spacing: 1.2px; }
        .product-info h3 { min-height: 42px; margin: 10px 0 15px; font: 400 19px Georgia, serif; line-height: 1.35; }
        .product-bottom { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding-top: 14px; border-top: 1px solid #f0e4e1; }
        .product-bottom strong { font-size: 15px; }
        .product-bottom a { color: #8e5967; font-size: 9px; letter-spacing: .7px; }
        .remove-button { margin-top: 16px; padding: 0; border: 0; background: transparent; color: #9c8588; font-size: 10px; text-decoration: underline; text-underline-offset: 3px; }
        .empty { padding: 55px 20px; background: white; border: 1px solid #f0e4e1; text-align: center; }
        .empty > span { color: #bd808b; font-size: 48px; }
        .empty h2 { font: 400 29px Georgia, serif; }
        .empty p { max-width: 450px; margin: 0 auto 25px; color: #806e70; font-size: 12px; line-height: 1.9; }
        .empty a { display: inline-block; padding: 15px 20px; background: #70424f; color: white; font-size: 10px; letter-spacing: 1px; }
        .note { display: flex; align-items: start; gap: 14px; margin-top: 35px; padding: 20px; background: #f8eeeb; }
        .note > span { color: #b87884; font-size: 25px; }
        .note p { margin: 0; color: #806e70; font-size: 11px; line-height: 1.9; }
        .note strong { color: #402d32; }
        footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 27px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        footer > a { font: 18px Georgia, serif; color: #402d32; }
        footer div { display: flex; gap: 18px; }
        @media (max-width: 900px) { .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 600px) {
          header { padding: 15px 5%; flex-wrap: wrap; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; gap: 10px; padding-top: 12px; border-top: 1px solid #f0e3e1; }
          .hero { padding: 48px 6%; }
          .content { padding: 35px 5% 50px; }
          .section-heading { align-items: start; flex-direction: column; }
          .product-grid { gap: 12px; }
          .product-info { padding: 13px 10px; }
          .product-info h3 { font-size: 16px; }
          .product-bottom { align-items: start; flex-direction: column; }
          footer { padding: 25px 5%; }
          footer div { width: 100%; justify-content: space-between; gap: 10px; }
        }
      `}</style>
    </main>
  );
}
