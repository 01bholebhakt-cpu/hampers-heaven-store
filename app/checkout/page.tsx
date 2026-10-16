
"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [notes, setNotes] = useState("");

  function submitOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = encodeURIComponent(
      `Hello Hampers Heaven! I'd like to enquire about placing an order.\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nCity: ${city}\nPincode: ${pincode}\nOccasion: ${occasion}\nAdditional details: ${notes || "None"}\n\nPlease confirm product availability, final price and delivery charges.`
    );

    window.open(
      `https://wa.me/919122930001?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="checkout-page">
      <div className="announcement">LITTLE THINGS. BIG FEELINGS. ♡</div>

      <header className="header">
        <Link href="/" className="brand">
          <span>♡</span>
          <div>
            <strong>Hampers Heaven</strong>
            <small>GIFTS THAT FEEL LIKE LOVE</small>
          </div>
        </Link>
        <Link href="/shop" className="back-link">← Continue shopping</Link>
      </header>

      <section className="checkout-container">
        <div className="page-heading">
          <span className="eyebrow">LET'S MAKE SOMEONE SMILE</span>
          <h1>Your gifting <em>details.</em></h1>
          <p>Tell us a little about your order. We’ll help you with the rest.</p>
        </div>

        <div className="checkout-grid">
          <form className="checkout-form" onSubmit={submitOrder}>
            <div className="form-heading">
              <span>01</span>
              <h2>Contact information</h2>
            </div>

            <label htmlFor="name">Full name *</label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
            />

            <label htmlFor="phone">Mobile number *</label>
            <input
              id="phone"
              required
              type="tel"
              pattern="[0-9+\-\s]{10,15}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your contact number"
            />

            <div className="form-heading second-heading">
              <span>02</span>
              <h2>Delivery details</h2>
            </div>

            <label htmlFor="address">Full delivery address *</label>
            <textarea
              id="address"
              required
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="House number, street, area..."
            />

            <div className="two-fields">
              <div>
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Your city"
                />
              </div>
              <div>
                <label htmlFor="pincode">PIN code *</label>
                <input
                  id="pincode"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="6-digit PIN"
                />
              </div>
            </div>

            <div className="form-heading second-heading">
              <span>03</span>
              <h2>Make it personal</h2>
            </div>

            <label htmlFor="occasion">What's the occasion?</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Wedding</option>
              <option>Festival</option>
              <option>Thank you</option>
              <option>Just because</option>
              <option>Other</option>
            </select>

            <label htmlFor="notes">Gift message or special requests</label>
            <textarea
              id="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any preferences or a message for your loved one..."
            />

            <button type="submit" className="submit-button">
              CONTINUE ON WHATSAPP ↗
            </button>

            <p className="form-disclaimer">
              This form opens WhatsApp with your details. Your order is not
              confirmed until the store confirms availability and pricing.
            </p>
          </form>

          <aside className="order-aside">
            <div className="aside-image">
              <img
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=85"
                alt="Gift boxes beautifully wrapped"
              />
            </div>
            <span className="eyebrow">A LITTLE NOTE</span>
            <h2>Every detail, wrapped with love.</h2>
            <p>
              Share your preferences and we’ll help you find the right gift
              for your special moment.
            </p>
            <div className="aside-divider" />
            <div className="aside-perk"><span>♡</span> Thoughtful gifting</div>
            <div className="aside-perk"><span>✳</span> Personalised enquiries</div>
            <div className="aside-perk"><span>✉</span> Delivery details confirmed directly</div>
            <Link href="/shop" className="browse-link">EXPLORE MORE GIFTS ↗</Link>
          </aside>
        </div>
      </section>

      <footer>
        <Link href="/">Hampers Heaven ♡</Link>
        <Link href="/contact">Need help? Contact us</Link>
        <span>© 2026 Hampers Heaven</span>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #fffaf8; color: #402d32; font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }
        input, textarea, select, button { font: inherit; }
        .announcement { padding: 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 2px; }
        .header { min-height: 84px; padding: 15px 7%; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f0e3e1; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand > span { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        .back-link { color: #80545e; font-size: 12px; }
        .checkout-container { max-width: 1200px; margin: 0 auto; padding: 65px 7% 90px; }
        .page-heading { margin-bottom: 42px; }
        .eyebrow { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 1.7px; }
        .page-heading h1 { margin: 15px 0 10px; font: 400 clamp(38px, 5vw, 56px) Georgia, serif; letter-spacing: -1.3px; }
        .page-heading h1 em { color: #b87884; font-weight: 400; }
        .page-heading > p { color: #8d797a; font-size: 13px; line-height: 1.8; }
        .checkout-grid { display: grid; grid-template-columns: 1.35fr .75fr; gap: 8%; align-items: start; }
        .checkout-form { padding: 30px; border: 1px solid #eadbd9; background: #fffdfc; }
        .form-heading { display: flex; align-items: center; gap: 13px; margin-bottom: 24px; }
        .form-heading > span { color: #b87884; font: 20px Georgia, serif; }
        .form-heading h2 { margin: 0; font: 400 23px Georgia, serif; }
        .second-heading { margin-top: 36px; padding-top: 25px; border-top: 1px solid #eee1df; }
        .checkout-form label { display: block; margin: 17px 0 8px; color: #70595d; font-size: 11px; }
        .checkout-form input, .checkout-form textarea, .checkout-form select {
          display: block; width: 100%; padding: 13px 14px; border: 1px solid #e8d8d6; border-radius: 0; outline: none; background: #fffaf8; color: #402d32; font-size: 12px;
        }
        .checkout-form textarea { resize: vertical; line-height: 1.7; }
        .checkout-form input:focus, .checkout-form textarea:focus, .checkout-form select:focus { border-color: #b87884; }
        .two-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .submit-button { width: 100%; margin-top: 28px; padding: 17px 12px; border: 0; background: #70424f; color: white; font-size: 10px; letter-spacing: 1px; cursor: pointer; }
        .submit-button:hover { background: #4d2b36; }
        .form-disclaimer { color: #927d7e; font-size: 10px; line-height: 1.8; }
        .order-aside { padding: 22px; background: #f8eeeb; }
        .aside-image img { display: block; width: 100%; aspect-ratio: 1.1; object-fit: cover; margin-bottom: 27px; }
        .order-aside h2 { margin: 13px 0; font: 400 29px/1.25 Georgia, serif; }
        .order-aside > p { color: #8b7375; font-size: 12px; line-height: 1.9; }
        .aside-divider { height: 1px; margin: 22px 0; background: #e7d6d3; }
        .aside-perk { display: flex; gap: 11px; align-items: center; margin: 15px 0; color: #785f63; font-size: 11px; }
        .aside-perk span { color: #b87884; font-size: 19px; }
        .browse-link { display: block; margin-top: 25px; padding: 15px 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 1px; }
        footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 18px; padding: 27px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        footer a:first-child { font: 18px Georgia, serif; color: #402d32; }
        @media (max-width: 800px) {
          .header { padding: 15px 5%; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          .checkout-container { padding: 45px 5% 60px; }
          .checkout-grid { grid-template-columns: 1fr; gap: 35px; }
          .checkout-form { padding: 22px; }
          .order-aside { padding: 18px; }
          .aside-image img { aspect-ratio: 1.5; }
          footer { padding: 25px 5%; }
        }
        @media (max-width: 420px) {
          .two-fields { grid-template-columns: 1fr; gap: 0; }
          .form-heading h2 { font-size: 20px; }
        }
      `}</style>
    </main>
  );
}
