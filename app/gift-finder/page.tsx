
"use client";

import { useState } from "react";
import Link from "next/link";

const occasions = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Congratulations",
  "Thank You",
  "Just Because",
];

const budgets = [
  { label: "Under ₹1,000", value: "1000" },
  { label: "₹1,000 – ₹2,000", value: "2000" },
  { label: "₹2,000 – ₹3,000", value: "3000" },
  { label: "₹3,000+", value: "3001" },
];

const recipients = [
  "Partner",
  "Friend",
  "Mother / Father",
  "Sibling",
  "Colleague",
  "Someone Special",
];

const suggestions = [
  {
    name: "The Blush Luxury Box",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=700&q=85",
    tags: ["Anniversary", "Wedding", "Partner"],
  },
  {
    name: "Sweet Chocolate Dreams",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=85",
    tags: ["Birthday", "Friend", "Sibling"],
  },
  {
    name: "Forever Floral Surprise",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85",
    tags: ["Anniversary", "Mother / Father", "Thank You"],
  },
  {
    name: "The Celebration Hamper",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=700&q=85",
    tags: ["Birthday", "Congratulations", "Wedding"],
  },
];

export default function GiftFinderPage() {
  const [occasion, setOccasion] = useState("Birthday");
  const [budget, setBudget] = useState("2000");
  const [recipient, setRecipient] = useState("Partner");
  const [showResults, setShowResults] = useState(false);

  const maxBudget = Number(budget);

  const filtered = suggestions.filter((item) => {
    const fitsBudget =
      budget === "3001" ? item.price >= 3000 : item.price <= maxBudget;

    const fitsOccasion =
      item.tags.includes(occasion) ||
      (occasion === "Just Because" && item.tags.includes("Partner"));

    const fitsRecipient = item.tags.includes(recipient);

    return fitsBudget && (fitsOccasion || fitsRecipient);
  });

  const results = filtered.length > 0 ? filtered : suggestions.filter((item) => {
    return budget === "3001"
      ? item.price >= 3000
      : item.price <= maxBudget;
  });

  function askForRecommendation() {
    const message = encodeURIComponent(
      `Hi Hampers Heaven! Please help me find a gift.\nOccasion: ${occasion}\nRecipient: ${recipient}\nBudget: ${budget === "3001" ? "₹3,000+" : `Up to ₹${budget}`}\nPlease recommend suitable gifts.`
    );

    window.open(
      `https://wa.me/919122930001?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="finder-page">
      <div className="topbar">FIND A GIFT THAT SAYS IT ALL ♡</div>

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
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <span className="eyebrow">A LITTLE HELP WITH A LOT OF LOVE</span>
        <h1>Find Your <em>Perfect Gift.</em></h1>
        <p>Three little questions. One thoughtful surprise.</p>
      </section>

      <section className="finder">
        <div className="form-card">
          <div className="step">
            <span>01</span>
            <div>
              <h2>What's the occasion?</h2>
              <p>Every special moment deserves a little something.</p>
            </div>
          </div>

          <div className="choices">
            {occasions.map((item) => (
              <button
                key={item}
                className={occasion === item ? "choice active" : "choice"}
                onClick={() => {
                  setOccasion(item);
                  setShowResults(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="step">
            <span>02</span>
            <div>
              <h2>Who are we celebrating?</h2>
              <p>Tell us who deserves to feel extra special.</p>
            </div>
          </div>

          <div className="choices">
            {recipients.map((item) => (
              <button
                key={item}
                className={recipient === item ? "choice active" : "choice"}
                onClick={() => {
                  setRecipient(item);
                  setShowResults(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="step">
            <span>03</span>
            <div>
              <h2>What's your budget?</h2>
              <p>Beautiful gifting for every budget.</p>
            </div>
          </div>

          <div className="choices">
            {budgets.map((item) => (
              <button
                key={item.value}
                className={budget === item.value ? "choice active" : "choice"}
                onClick={() => {
                  setBudget(item.value);
                  setShowResults(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="find-button"
            onClick={() => setShowResults(true)}
          >
            FIND MY PERFECT GIFT ♡
          </button>
        </div>

        <aside className="side-note">
          <div className="side-image">
            <img
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=85"
              alt="Beautifully wrapped gift"
            />
          </div>
          <span>THE ART OF GIVING</span>
          <h3>It’s not just a gift. It’s a feeling.</h3>
          <p>
            The best gifts aren't always the biggest. They're the ones that
            show someone you were thinking of them.
          </p>
          <div className="little-heart">♡</div>
        </aside>
      </section>

      {showResults && (
        <section className="results">
          <div className="results-heading">
            <span>MADE FOR YOUR MOMENT</span>
            <h2>Gifts you might <em>love.</em></h2>
            <p>
              For {recipient.toLowerCase()} · {occasion.toLowerCase()} ·{" "}
              {budget === "3001" ? "₹3,000+" : `up to ₹${budget}`}
            </p>
          </div>

          <div className="result-grid">
            {results.map((item) => {
              const id = suggestions.findIndex((product) => product.name === item.name) + 1;

              return (
                <article className="result-card" key={item.name}>
                  <Link href={`/product/${id}`} className="result-image">
                    <img src={item.image} alt={item.name} />
                  </Link>
                  <div className="result-info">
                    <h3>{item.name}</h3>
                    <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                    <Link href={`/product/${id}`} className="view-link">
                      VIEW GIFT ↗
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <button className="whatsapp-button" onClick={askForRecommendation}>
            GET PERSONAL RECOMMENDATIONS ON WHATSAPP ↗
          </button>
        </section>
      )}

      <footer>
        <Link href="/">Hampers Heaven ♡</Link>
        <div>
          <Link href="/shop">Shop</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms</Link>
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
        .eyebrow { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 { margin: 17px 0 12px; font: 400 clamp(38px, 5vw, 54px) Georgia, serif; }
        .hero h1 em, .results-heading h2 em { color: #b87884; font-weight: 400; }
        .hero > p { color: #8d797a; font-size: 13px; line-height: 1.8; }
        .finder { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(260px, .8fr); gap: 35px; max-width: 1120px; margin: auto; padding: 55px 25px 70px; align-items: start; }
        .form-card { padding: 30px; background: white; border: 1px solid #f0e4e1; }
        .step { display: flex; align-items: start; gap: 17px; margin-bottom: 22px; }
        .step > span { display: grid; place-items: center; flex-shrink: 0; width: 37px; height: 37px; border-radius: 50%; background: #f8eeeb; color: #a66c78; font-size: 11px; }
        .step h2 { margin: 2px 0 7px; font: 400 21px Georgia, serif; }
        .step p { margin: 0; color: #8d797a; font-size: 11px; line-height: 1.7; }
        .choices { display: flex; flex-wrap: wrap; gap: 9px; margin: 0 0 30px 54px; }
        .choice { padding: 11px 13px; border: 1px solid #eadbd9; background: white; color: #705b60; font-size: 11px; transition: .2s; }
        .choice:hover, .choice.active { border-color: #70424f; background: #70424f; color: white; }
        .find-button { width: 100%; padding: 17px; border: 0; background: #70424f; color: white; font-size: 10px; letter-spacing: 1.2px; }
        .side-note { padding: 18px 18px 28px; background: #f8eeeb; text-align: center; }
        .side-image { height: 235px; margin-bottom: 25px; overflow: hidden; }
        .side-image img { width: 100%; height: 100%; object-fit: cover; }
        .side-note > span, .results-heading > span { color: #a66c78; font-size: 9px; letter-spacing: 2px; }
        .side-note h3 { margin: 15px 0; font: 400 27px Georgia, serif; line-height: 1.3; }
        .side-note p { color: #806e70; font-size: 12px; line-height: 1.9; }
        .little-heart { margin-top: 18px; color: #b87884; font-size: 27px; }
        .results { max-width: 1120px; margin: 0 auto; padding: 0 25px 75px; text-align: center; }
        .results-heading h2 { margin: 13px 0; font: 400 34px Georgia, serif; }
        .results-heading p { color: #806e70; font-size: 12px; }
        .result-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; margin-top: 30px; text-align: left; }
        .result-card { border: 1px solid #f0e4e1; background: white; }
        .result-image { display: block; aspect-ratio: 4 / 4.5; overflow: hidden; background: #f8eeeb; }
        .result-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .3s; }
        .result-card:hover img { transform: scale(1.04); }
        .result-info { display: grid; gap: 11px; padding: 15px; }
        .result-info h3 { margin: 0; font: 400 18px Georgia, serif; }
        .result-info strong { font-size: 14px; }
        .view-link { color: #8e5967; font-size: 9px; letter-spacing: 1px; }
        .whatsapp-button { margin-top: 30px; padding: 16px 20px; border: 0; background: #70424f; color: white; font-size: 10px; letter-spacing: 1px; }
        footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 27px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        footer > a { font: 18px Georgia, serif; color: #402d32; }
        footer div { display: flex; gap: 18px; }
        @media (max-width: 850px) { .finder { grid-template-columns: 1fr; } .side-note { max-width: 500px; margin: auto; } .result-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 600px) {
          header { padding: 15px 5%; flex-wrap: wrap; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; gap: 10px; padding-top: 12px; border-top: 1px solid #f0e3e1; }
          .hero { padding: 48px 6%; }
          .finder { padding: 30px 5% 45px; gap: 25px; }
          .form-card { padding: 22px 15px; }
          .choices { margin-left: 0; }
          .choice { padding: 10px; }
          .step h2 { font-size: 19px; }
          .result-grid { gap: 12px; }
          .result-info { padding: 11px; }
          .result-info h3 { font-size: 16px; }
          .results { padding: 0 5% 50px; }
          footer { padding: 25px 5%; }
          footer div { width: 100%; justify-content: space-between; gap: 10px; }
        }
      `}</style>
    </main>
  );
}
