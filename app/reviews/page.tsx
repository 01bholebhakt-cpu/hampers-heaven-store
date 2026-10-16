
"use client";

import { useState } from "react";
import Link from "next/link";

const reviews = [
  {
    name: "Aarohi S.",
    city: "Patna",
    title: "Beautiful presentation",
    text: "The packaging inspiration was exactly what I was looking for. The entire gifting experience felt elegant and thoughtful.",
    rating: 5,
    occasion: "Birthday",
  },
  {
    name: "Riya M.",
    city: "Delhi",
    title: "Lovely gifting ideas",
    text: "I loved exploring the different hamper styles. The soft colours and curated collections make choosing a gift feel special.",
    rating: 5,
    occasion: "Anniversary",
  },
  {
    name: "Ananya K.",
    city: "Kolkata",
    title: "Such a pretty collection",
    text: "The gift ideas are lovely and the website is easy to browse. I found several options for upcoming celebrations.",
    rating: 4,
    occasion: "Celebration",
  },
];

export default function ReviewsPage() {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [notice, setNotice] = useState("");

  function submitReview(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hi Hampers Heaven! I'd like to submit a review for consideration.\nName: ${name}\nCity: ${city || "Not provided"}\nRating: ${rating}/5\nTitle: ${title}\nReview: ${review}`
    );

    window.open(
      `https://wa.me/919122930001?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );

    setNotice(
      "Your review draft is ready in WhatsApp. Send the message to submit it for consideration."
    );
  }

  return (
    <main className="reviews-page">
      <div className="announcement">
        EVERY GIFT TELLS A STORY ♡
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
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <span className="eyebrow">LOVE IS IN THE LITTLE DETAILS</span>
        <h1>Words of <em>Love.</em></h1>
        <p>
          Discover gifting inspiration and share your experience with our
          community.
        </p>
      </section>

      <section className="reviews-content">
        <div className="intro">
          <span>THE GIFTING JOURNAL</span>
          <h2>A little love goes a long way.</h2>
          <p>
            Every thoughtful gesture creates a memory. Here is a space for
            stories, feedback and gifting inspiration.
          </p>
        </div>

        <div className="demo-notice">
          <span>♡</span>
          <p>
            <strong>Sample reviews</strong>
            <br />
            The reviews below are illustrative design examples, not verified
            customer testimonials. Replace them with genuine reviews shared
            with permission before publishing.
          </p>
        </div>

        <div className="review-grid">
          {reviews.map((item) => (
            <article className="review-card" key={item.name}>
              <div className="stars" aria-label={`${item.rating} out of 5 stars`}>
                {"★".repeat(item.rating)}
                <span>{"★".repeat(5 - item.rating)}</span>
              </div>

              <div className="quote">“</div>
              <h3>{item.title}</h3>
              <p className="review-text">{item.text}</p>

              <div className="review-footer">
                <div className="avatar">{item.name.charAt(0)}</div>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.city} · {item.occasion}</small>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="write-review">
          <div className="form-intro">
            <span>SHARE YOUR EXPERIENCE</span>
            <h2>Your words matter <em>to us.</em></h2>
            <p>
              Have feedback or a gifting story to share? Send your review to
              our team for consideration.
            </p>
            <div className="heart-decoration">♡</div>
          </div>

          <form onSubmit={submitReview}>
            <label htmlFor="review-name">YOUR NAME *</label>
            <input
              id="review-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="review-city">YOUR CITY</label>
            <input
              id="review-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city"
            />

            <label>YOUR RATING *</label>
            <div className="rating-picker">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={value <= rating ? "star selected" : "star"}
                  onClick={() => setRating(value)}
                  aria-label={`Rate ${value} out of 5`}
                >
                  ★
                </button>
              ))}
              <span>{rating}/5</span>
            </div>

            <label htmlFor="review-title">REVIEW TITLE *</label>
            <input
              id="review-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Sum up your experience"
              required
            />

            <label htmlFor="review-text">YOUR REVIEW *</label>
            <textarea
              id="review-text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={5}
              required
            />

            <button type="submit" className="submit-button">
              SEND REVIEW VIA WHATSAPP ↗
            </button>

            {notice && <p className="notice">{notice}</p>}

            <small className="privacy-note">
              Please do not include sensitive personal or payment information.
              Reviews may be published only with appropriate permission.
            </small>
          </form>
        </section>
      </section>

      <section className="bottom-cta">
        <span>A THOUGHTFUL GIFT STARTS HERE</span>
        <h2>Make someone's ordinary day extraordinary.</h2>
        <Link href="/shop">EXPLORE OUR GIFTS ↗</Link>
      </section>

      <footer>
        <Link href="/" className="footer-brand">
          Hampers Heaven ♡
        </Link>
        <div>
          <Link href="/shop">Shop</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <span>© 2026 Hampers Heaven</span>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #fffaf8; color: #402d32; font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }
        button, input, textarea { font: inherit; }
        button { cursor: pointer; }
        .announcement { padding: 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 2px; }
        header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 7%; border-bottom: 1px solid #f0e3e1; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand > span { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        nav { display: flex; gap: 24px; color: #715d60; font-size: 12px; }
        .hero { padding: 70px 20px; background: #f8eeeb; text-align: center; }
        .eyebrow, .intro > span, .form-intro > span, .bottom-cta > span { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 { margin: 18px 0 12px; font: 400 clamp(42px, 5vw, 58px) Georgia, serif; }
        .hero h1 em, .form-intro h2 em { color: #b87884; font-weight: 400; }
        .hero > p { color: #806e70; font-size: 13px; line-height: 1.9; }
        .reviews-content { max-width: 1100px; margin: auto; padding: 60px 25px 80px; }
        .intro { max-width: 650px; margin: 0 auto 30px; text-align: center; }
        .intro h2 { margin: 15px 0; font: 400 32px Georgia, serif; }
        .intro p { color: #806e70; font-size: 12px; line-height: 1.9; }
        .demo-notice { display: flex; align-items: start; gap: 15px; margin-bottom: 28px; padding: 18px; background: #f8eeeb; }
        .demo-notice > span { color: #b87884; font-size: 25px; }
        .demo-notice p { margin: 0; color: #806e70; font-size: 11px; line-height: 1.9; }
        .demo-notice strong { color: #402d32; }
        .review-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        .review-card { padding: 25px 22px; border: 1px solid #eee1df; background: white; }
        .stars { color: #b87884; font-size: 14px; letter-spacing: 3px; }
        .stars span { color: #e4d8d7; }
        .quote { height: 38px; margin-top: 10px; color: #d7aab0; font: 50px Georgia, serif; }
        .review-card h3 { margin: 6px 0 12px; font: 400 22px Georgia, serif; }
        .review-text { min-height: 100px; color: #806e70; font-size: 12px; line-height: 1.9; }
        .review-footer { display: flex; align-items: center; gap: 12px; margin-top: 22px; padding-top: 18px; border-top: 1px solid #eee1df; }
        .avatar { display: grid; place-items: center; width: 37px; height: 37px; border-radius: 50%; background: #f8eeeb; color: #70424f; font: 18px Georgia, serif; }
        .review-footer strong, .review-footer small { display: block; }
        .review-footer strong { font-size: 11px; }
        .review-footer small { margin-top: 5px; color: #9b8386; font-size: 9px; }
        .write-review { display: grid; grid-template-columns: .85fr 1.15fr; gap: 45px; margin-top: 70px; padding: 35px; background: #f8eeeb; }
        .form-intro h2 { margin: 15px 0; font: 400 34px Georgia, serif; line-height: 1.3; }
        .form-intro p { color: #806e70; font-size: 12px; line-height: 2; }
        .heart-decoration { margin-top: 25px; color: #b87884; font-size: 45px; }
        .write-review form { display: flex; flex-direction: column; gap: 10px; }
        .write-review label { margin-top: 8px; color: #795d62; font-size: 9px; font-weight: 700; letter-spacing: 1.2px; }
        .write-review input, .write-review textarea { width: 100%; padding: 13px; border: 1px solid #e9d9d7; border-radius: 0; outline: none; background: #fffdfc; color: #402d32; font-size: 12px; }
        .write-review input:focus, .write-review textarea:focus { border-color: #b87884; }
        .rating-picker { display: flex; align-items: center; gap: 5px; }
        .star { padding: 0 2px; border: 0; background: transparent; color: #e0cece; font-size: 25px; }
        .star.selected { color: #b87884; }
        .rating-picker > span { margin-left: 8px; color: #806e70; font-size: 11px; }
        .submit-button { margin-top: 10px; padding: 16px; border: 0; background: #70424f; color: white; font-size: 10px; letter-spacing: 1px; }
        .notice { padding: 12px; background: white; color: #70424f; font-size: 11px; line-height: 1.8; }
        .privacy-note { margin-top: 5px; color: #927e80; font-size: 10px; line-height: 1.8; }
        .bottom-cta { padding: 55px 20px; background: #70424f; color: white; text-align: center; }
        .bottom-cta > span { color: #edc8cc; }
        .bottom-cta h2 { max-width: 600px; margin: 15px auto; font: 400 34px Georgia, serif; line-height: 1.4; }
        .bottom-cta > a { display: inline-block; margin-top: 10px; padding: 15px 20px; border: 1px solid #d8b2b9; font-size: 10px; letter-spacing: 1px; }
        footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 28px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        .footer-brand { font: 18px Georgia, serif; color: #402d32; }
        footer div { display: flex; flex-wrap: wrap; gap: 18px; }
        @media (max-width: 800px) { .review-grid { grid-template-columns: 1fr; } .review-text { min-height: auto; } .write-review { grid-template-columns: 1fr; gap: 25px; } .heart-decoration { display: none; } }
        @media (max-width: 600px) {
          header { padding: 15px 5%; flex-wrap: wrap; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; gap: 10px; padding-top: 12px; border-top: 1px solid #f0e3e1; }
          .hero { padding: 50px 6%; }
          .reviews-content { padding: 40px 5% 55px; }
          .intro h2 { font-size: 28px; }
          .write-review { margin-top: 45px; padding: 23px 16px; }
          .form-intro h2 { font-size: 29px; }
          .bottom-cta h2 { font-size: 28px; }
          footer { padding: 25px 5%; }
          footer div { width: 100%; justify-content: space-between; gap: 10px; }
        }
      `}</style>
    </main>
  );
}
