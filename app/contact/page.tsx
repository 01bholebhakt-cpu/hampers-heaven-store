
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Gift enquiry");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = encodeURIComponent(
      `Hello Hampers Heaven!\n\nName: ${name}\nPhone: ${phone}\nEnquiry: ${subject}\nMessage: ${message}`
    );

    window.open(
      `https://wa.me/919122930001?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="contact-page">
      <div className="announcement">LITTLE THINGS. BIG FEELINGS. ♡</div>

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
          <Link href="/about">Our Story</Link>
        </nav>
      </header>

      <section className="contact-hero">
        <span className="eyebrow">WE'RE HERE FOR YOU</span>
        <h1>Let's talk about <em>something lovely.</em></h1>
        <p>
          Need help choosing a gift? Have a special request? We'd love
          to hear from you.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Every great gift starts with a little conversation.</h2>
          <p>
            Tell us what you're celebrating and who you're celebrating.
            We'll help you explore the gifting options available.
          </p>

          <a
            className="info-card"
            href="https://wa.me/919122930001"
            target="_blank"
            rel="noreferrer"
          >
            <span className="info-icon">♡</span>
            <div>
              <small>WHATSAPP</small>
              <strong>Chat with us</strong>
              <span>+91 91229 30001 ↗</span>
            </div>
          </a>

          <div className="info-card">
            <span className="info-icon">✉</span>
            <div>
              <small>PERSONALISED GIFTING</small>
              <strong>Made for your moment</strong>
              <span>Share your preferences with us.</span>
            </div>
          </div>

          <div className="contact-note">
            <span>✳</span>
            <p>
              Product availability, delivery options and final prices
              are confirmed directly with our team.
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <span className="eyebrow">SEND US A MESSAGE</span>
          <h2>How can we help?</h2>

          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label htmlFor="phone">Mobile number *</label>
          <input
            id="phone"
            type="tel"
            required
            pattern="[0-9+\-\s]{10,15}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />

          <label htmlFor="subject">What can we help with?</label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option>Gift enquiry</option>
            <option>Custom hamper</option>
            <option>Birthday gift</option>
            <option>Wedding or anniversary</option>
            <option>Delivery enquiry</option>
            <option>Order support</option>
            <option>Other</option>
          </select>

          <label htmlFor="message">Your message *</label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us a little about what you have in mind..."
          />

          <button type="submit">SEND VIA WHATSAPP ↗</button>
          <small className="form-note">
            Your message opens in WhatsApp so you can review it before sending.
          </small>
        </form>
      </section>

      <section className="bottom-banner">
        <span>♡</span>
        <h2>A little thought can mean a lot.</h2>
        <Link href="/shop">FIND YOUR PERFECT GIFT ↗</Link>
      </section>

      <footer>
        <Link href="/">Hampers Heaven ♡</Link>
        <Link href="/shop">Shop gifts</Link>
        <a href="https://wa.me/919122930001" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <span>© 2026 Hampers Heaven</span>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #fffaf8; color: #402d32; font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }
        input, select, textarea, button { font: inherit; }
        button { cursor: pointer; }
        .announcement { padding: 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 2px; }
        header { min-height: 85px; padding: 15px 7%; display: flex; align-items: center; justify-content: space-between; gap: 20px; border-bottom: 1px solid #f0e3e1; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand > span { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        nav { display: flex; gap: 26px; color: #715d60; font-size: 13px; }
        nav a:hover { color: #b46e7b; }
        .contact-hero { padding: 75px 20px 68px; background: #f8eeeb; text-align: center; }
        .eyebrow { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 1.8px; }
        .contact-hero h1 { max-width: 750px; margin: 20px auto 15px; font: 400 clamp(38px, 5vw, 59px)/1.15 Georgia, serif; letter-spacing: -1.3px; }
        .contact-hero h1 em { color: #b87884; font-weight: 400; }
        .contact-hero > p { max-width: 520px; margin: 0 auto; color: #8d797a; font-size: 13px; line-height: 1.9; }
        .contact-layout { max-width: 1200px; margin: 0 auto; padding: 75px 7% 85px; display: grid; grid-template-columns: .9fr 1.1fr; gap: 9%; align-items: start; }
        .contact-info h2 { margin: 17px 0; font: 400 34px/1.25 Georgia, serif; }
        .contact-info > p { color: #8b7375; font-size: 13px; line-height: 2; }
        .info-card { display: flex; gap: 16px; align-items: center; margin-top: 22px; padding: 20px; border: 1px solid #eadbd9; background: #fffdfc; }
        .info-icon { color: #b87884; font-size: 29px; }
        .info-card small, .info-card strong, .info-card div > span { display: block; }
        .info-card small { color: #a66c78; font-size: 9px; letter-spacing: 1.5px; }
        .info-card strong { margin: 7px 0; font: 18px Georgia, serif; font-weight: 400; }
        .info-card div > span { color: #8d797a; font-size: 11px; }
        .contact-note { display: flex; gap: 12px; margin-top: 28px; padding: 17px; background: #f8eeeb; }
        .contact-note > span { color: #b87884; font-size: 22px; }
        .contact-note p { margin: 0; color: #826d70; font-size: 11px; line-height: 1.9; }
        .contact-form { padding: 30px; border: 1px solid #eadbd9; background: #fffdfc; }
        .contact-form h2 { margin: 12px 0 24px; font: 400 29px Georgia, serif; }
        .contact-form label { display: block; margin: 17px 0 8px; color: #70595d; font-size: 11px; }
        .contact-form input, .contact-form select, .contact-form textarea { width: 100%; padding: 13px 14px; border: 1px solid #e8d8d6; border-radius: 0; outline: none; background: #fffaf8; color: #402d32; font-size: 12px; }
        .contact-form textarea { resize: vertical; line-height: 1.7; }
        .contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus { border-color: #b87884; }
        .contact-form button { width: 100%; margin-top: 23px; padding: 16px 10px; border: 0; background: #70424f; color: white; font-size: 10px; letter-spacing: 1px; }
        .contact-form button:hover { background: #4d2b36; }
        .form-note { display: block; margin-top: 12px; color: #927d7e; font-size: 10px; line-height: 1.8; }
        .bottom-banner { padding: 50px 20px; background: #f6e9e7; text-align: center; }
        .bottom-banner > span { color: #b87884; font-size: 33px; }
        .bottom-banner h2 { margin: 12px 0 23px; font: 400 clamp(27px, 4vw, 38px) Georgia, serif; }
        .bottom-banner > a { display: inline-block; padding: 15px 20px; background: #70424f; color: white; font-size: 10px; letter-spacing: 1px; }
        footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 18px; padding: 27px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        footer a:first-child { font: 18px Georgia, serif; color: #402d32; }
        @media (max-width: 760px) {
          header { padding: 15px 5%; flex-wrap: wrap; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; gap: 12px; padding-top: 12px; border-top: 1px solid #f0e3e1; }
          .contact-hero { padding: 55px 6%; }
          .contact-layout { grid-template-columns: 1fr; gap: 35px; padding: 50px 5% 60px; }
          .contact-info h2 { font-size: 30px; }
          .contact-form { padding: 22px; }
          footer { padding: 25px 5%; }
        }
      `}</style>
    </main>
  );
}
