
"use client";

import { useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "The Blush Luxury Box",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=85",
  };

  const total = product.price * quantity;

  const message = encodeURIComponent(
    `Hi Hampers Heaven! I'd like to enquire about ordering ${quantity} x ${product.name}. Listed total: ₹${total}. Please confirm availability and delivery details.`
  );

  return (
    <main className="cart-page">
      <div className="announcement">LITTLE THINGS. BIG FEELINGS. ♡</div>

      <header className="header">
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
        </nav>
      </header>

      <section className="cart-content">
        <div className="heading">
          <span className="eyebrow">YOUR LITTLE BOX OF HAPPINESS</span>
          <h1>Your <em>shopping bag.</em></h1>
          <p>A thoughtful gift is just a few steps away.</p>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-label">
              <span>YOUR SELECTION</span>
              <span>DEMO ITEM</span>
            </div>

            <article className="cart-product">
              <img src={product.image} alt={product.name} />
              <div className="item-details">
                <span className="eyebrow">LUXURY HAMPERS</span>
                <h2>{product.name}</h2>
                <p>Thoughtfully selected for someone special.</p>
                <div className="quantity">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() =>
                      setQuantity((value) => Math.max(1, value - 1))
                    }
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() =>
                      setQuantity((value) => Math.min(20, value + 1))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <strong className="item-price">
                ₹{total.toLocaleString("en-IN")}
              </strong>
            </article>

            <Link href="/shop" className="continue">
              ← CONTINUE EXPLORING GIFTS
            </Link>

            <div className="note">
              <span>♡</span>
              <p>
                This is a demonstration cart. Your order and final product
                availability will be confirmed directly with the store.
              </p>
            </div>
          </div>

          <aside className="summary">
            <h2>Order summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span className="confirm">Confirm on enquiry</span>
            </div>
            <div className="summary-row total">
              <strong>Listed total</strong>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>
            <a
              className="checkout"
              href={`https://wa.me/919122930001?text=${message}`}
              target="_blank"
              rel="noreferrer"
            >
              ENQUIRE TO ORDER ↗
            </a>
            <p className="secure-note">
              ♡ No online payment is collected on this demo page.
            </p>
            <div className="summary-footer">
              <span>✳</span>
              <p>Beautiful gifts. Thoughtful moments. A little more love.</p>
            </div>
          </aside>
        </div>
      </section>

      <footer>
        <Link href="/">Hampers Heaven ♡</Link>
        <Link href="/shop">Shop all gifts</Link>
        <span>© 2026 Hampers Heaven</span>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #fffaf8; color: #402d32; font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }
        button { cursor: pointer; font: inherit; }
        .announcement { padding: 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 2px; }
        .header { min-height: 84px; padding: 15px 7%; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #f0e3e1; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand > span { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        nav { display: flex; gap: 26px; font-size: 13px; color: #715d60; }
        .cart-content { max-width: 1250px; margin: 0 auto; padding: 65px 7% 90px; }
        .heading { margin-bottom: 40px; }
        .eyebrow { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 1.7px; }
        .heading h1 { margin: 15px 0 10px; font: 400 clamp(38px, 5vw, 57px) Georgia, serif; letter-spacing: -1.5px; }
        .heading h1 em { color: #b87884; font-weight: 400; }
        .heading > p { color: #8d797a; font-size: 13px; }
        .cart-layout { display: grid; grid-template-columns: 1.6fr 1fr; gap: 7%; align-items: start; }
        .cart-label { display: flex; justify-content: space-between; padding: 0 0 17px; border-bottom: 1px solid #eaddda; color: #9e8284; font-size: 9px; letter-spacing: 1.5px; }
        .cart-product { display: grid; grid-template-columns: 130px minmax(0, 1fr) auto; gap: 20px; padding: 25px 0; border-bottom: 1px solid #eaddda; }
        .cart-product > img { width: 130px; height: 150px; object-fit: cover; background: #f5e9e6; }
        .item-details h2 { margin: 10px 0; font: 400 21px Georgia, serif; }
        .item-details > p { color: #8d797a; font-size: 11px; line-height: 1.8; }
        .quantity { display: inline-flex; align-items: center; margin-top: 10px; border: 1px solid #e7d7d5; }
        .quantity button { width: 30px; height: 30px; border: 0; background: transparent; color: #70424f; font-size: 18px; }
        .quantity span { min-width: 25px; text-align: center; font-size: 12px; }
        .item-price { padding-top: 5px; font-size: 13px; white-space: nowrap; }
        .continue { display: inline-block; margin-top: 25px; color: #80545e; font-size: 10px; letter-spacing: 1px; }
        .note { display: flex; gap: 12px; margin-top: 35px; padding: 18px; background: #f8eeeb; }
        .note > span { color: #b87884; font-size: 24px; }
        .note p { margin: 0; color: #846e70; font-size: 11px; line-height: 1.8; }
        .summary { padding: 28px; border: 1px solid #eadbd9; background: #fffdfc; }
        .summary h2 { margin: 0 0 25px; font: 400 25px Georgia, serif; }
        .summary-row { display: flex; justify-content: space-between; gap: 15px; padding: 15px 0; border-bottom: 1px solid #f0e5e3; color: #826d70; font-size: 12px; }
        .confirm { max-width: 125px; text-align: right; font-size: 10px; }
        .summary-row.total { margin-top: 5px; border-bottom: 0; color: #402d32; font-size: 14px; }
        .checkout { display: block; margin-top: 20px; padding: 16px 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 1px; }
        .checkout:hover { background: #4d2b36; }
        .secure-note { color: #947e80; text-align: center; font-size: 10px; line-height: 1.8; }
        .summary-footer { display: flex; align-items: center; gap: 10px; margin-top: 22px; padding-top: 20px; border-top: 1px solid #eee1df; }
        .summary-footer span { color: #b87884; font-size: 23px; }
        .summary-footer p { color: #8d797a; font: 12px/1.7 Georgia, serif; }
        footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 18px; padding: 27px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        footer a:first-child { font: 18px Georgia, serif; color: #402d32; }
        @media (max-width: 750px) {
          .header { padding: 15px 5%; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          .cart-content { padding: 45px 5% 60px; }
          .cart-layout { grid-template-columns: 1fr; gap: 35px; }
          .cart-product { grid-template-columns: 95px minmax(0, 1fr); gap: 14px; }
          .cart-product > img { width: 95px; height: 120px; }
          .item-details h2 { font-size: 18px; }
          .item-price { grid-column: 2; padding: 0; }
          .summary { padding: 23px; }
          footer { padding: 25px 5%; }
        }
        @media (max-width: 400px) {
          .brand strong { font-size: 17px; }
          .brand small { font-size: 7px; letter-spacing: 1px; }
          nav { gap: 15px; }
        }
      `}</style>
    </main>
  );
}
