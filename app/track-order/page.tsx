
"use client";

import { useState } from "react";
import Link from "next/link";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const message = encodeURIComponent(
    `Hi Hampers Heaven! I want to check my order status.\nOrder ID: ${orderId}\nPhone: ${phone}`
  );

  return (
    <main className="track-page">
      <div className="topbar">A LITTLE LOVE, ON ITS WAY ♡</div>

      <header>
        <Link href="/" className="brand">
          <span className="brand-heart">♡</span>
          <div>
            <strong>Hampers Heaven</strong>
            <small>GIFTS THAT FEEL LIKE LOVE</small>
          </div>
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <span className="eyebrow">YOUR GIFT JOURNEY</span>
        <h1>Track Your <em>Order.</em></h1>
        <p>Wondering where your little surprise is? We’re here to help.</p>
      </section>

      <section className="track-content">
        <div className="track-card">
          <div className="icon-circle">♡</div>
          <h2>Where is the love?</h2>
          <p className="description">
            Enter your order details below and contact our team to get the
            latest update on your delivery.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="orderId">ORDER ID</label>
            <input
              id="orderId"
              value={orderId}
              onChange={(e) => {
                setOrderId(e.target.value);
                setSubmitted(false);
              }}
              placeholder="e.g. HH-1001"
              required
            />

            <label htmlFor="phone">PHONE NUMBER USED FOR ORDER</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setSubmitted(false);
              }}
              placeholder="Enter your phone number"
              required
            />

            <button type="submit">CHECK ORDER DETAILS ↗</button>
          </form>

          {submitted && (
            <div className="result">
              <strong>Let's find your order ♡</strong>
              <p>
                This website does not have live order tracking connected yet.
                Send your details to our team on WhatsApp to request an update.
              </p>
              <a
                href={`https://wa.me/919122930001?text=${message}`}
                target="_blank"
                rel="noreferrer"
              >
                REQUEST UPDATE ON WHATSAPP
              </a>
            </div>
          )}

          <p className="secure-note">
            ♡ Your order status must be confirmed by our team.
          </p>
        </div>

        <div className="help">
          <span>NEED A LITTLE HELP?</span>
          <h3>We’re just a message away.</h3>
          <p>
            If you haven’t received an order confirmation, reach out to us
            with your order details.
          </p>
          <a
            href="https://wa.me/919122930001?text=Hi%20Hampers%20Heaven!%20I%20need%20help%20with%20my%20order."
            target="_blank"
            rel="noreferrer"
          >
            CHAT WITH US ↗
          </a>
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
        .topbar { padding: 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 2px; }
        header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 7%; border-bottom: 1px solid #f0e3e1; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand-heart { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        nav { display: flex; gap: 25px; color: #715d60; font-size: 12px; }
        .hero { padding: 65px 20px; background: #f8eeeb; text-align: center; }
        .eyebrow { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 { margin: 17px 0 12px; font: 400 clamp(38px, 5vw, 54px) Georgia, serif; }
        .hero h1 em { color: #b87884; font-weight: 400; }
        .hero > p { color: #8d797a; font-size: 13px; line-height: 1.8; }
        .track-content { max-width: 760px; margin: 0 auto; padding: 55px 22px 75px; }
        .track-card { padding: 35px; border: 1px solid #eee0de; background: white; box-shadow: 0 12px 45px #70424f0b; }
        .icon-circle { display: grid; place-items: center; width: 55px; height: 55px; margin: 0 auto 18px; border-radius: 50%; background: #f8eeeb; color: #b87884; font-size: 30px; }
        .track-card h2 { margin: 0 0 12px; text-align: center; font: 400 29px Georgia, serif; }
        .description { max-width: 440px; margin: 0 auto 30px; color: #8d797a; text-align: center; font-size: 12px; line-height: 1.9; }
        form { display: grid; gap: 10px; }
        label { margin-top: 10px; color: #795d62; font-size: 9px; font-weight: 700; letter-spacing: 1.3px; }
        input { width: 100%; padding: 14px; border: 1px solid #e9d9d7; border-radius: 0; outline: none; background: #fffdfc; color: #402d32; font-size: 12px; }
        input:focus { border-color: #b87884; }
        button { margin-top: 12px; padding: 16px; border: 0; background: #70424f; color: white; font-size: 10px; letter-spacing: 1.2px; }
        button:hover { background: #59313d; }
        .result { margin-top: 25px; padding: 20px; background: #f8eeeb; }
        .result strong { font: 20px Georgia, serif; }
        .result p { color: #806e70; font-size: 12px; line-height: 1.9; }
        .result a, .help a { display: inline-block; margin-top: 10px; padding: 13px 16px; background: #70424f; color: white; font-size: 9px; letter-spacing: 1px; }
        .secure-note { margin-top: 22px; color: #a18a8b; text-align: center; font-size: 10px; }
        .help { margin-top: 35px; padding: 30px; background: #f8eeeb; text-align: center; }
        .help > span { color: #a66c78; font-size: 9px; letter-spacing: 2px; }
        .help h3 { margin: 12px 0; font: 400 25px Georgia, serif; }
        .help p { color: #806e70; font-size: 12px; line-height: 1.9; }
        footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 27px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        footer > a { font: 18px Georgia, serif; color: #402d32; }
        footer div { display: flex; gap: 18px; }
        @media (max-width: 600px) {
          header { padding: 15px 5%; flex-wrap: wrap; }
          .brand strong { font-size: 19px; }
          .brand-heart { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; padding-top: 12px; border-top: 1px solid #f0e3e1; }
          .hero { padding: 48px 6%; }
          .track-content { padding: 35px 5% 50px; }
          .track-card { padding: 25px 18px; }
          .help { padding: 25px 18px; }
          footer { padding: 25px 5%; }
          footer div { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </main>
  );
}
