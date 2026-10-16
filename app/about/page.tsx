
"use client";

import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Thoughtful by nature",
    description:
      "We believe the best gifts are the ones that show someone you truly know and care about them.",
  },
  {
    number: "02",
    title: "Beautifully presented",
    description:
      "From the little details to the final wrapping, presentation makes every surprise feel special.",
  },
  {
    number: "03",
    title: "Made for every moment",
    description:
      "Birthdays, anniversaries, celebrations or just because — every moment deserves a little love.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="announcement">
        LITTLE THINGS. BIG FEELINGS. ♡
      </div>

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
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">OUR LITTLE WORLD</span>
          <h1>
            More than a gift.
            <br />
            A feeling <em>to remember.</em>
          </h1>
          <p>
            At Hampers Heaven, we believe that the most beautiful gifts
            aren't measured by their size, but by the feelings they carry.
          </p>
          <Link href="/shop" className="primary-button">
            EXPLORE OUR GIFTS ↗
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1100&q=85"
            alt="Beautifully presented gift boxes"
          />
          <div className="image-caption">
            <span>♡</span>
            <p>A little something, chosen with love.</p>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85"
            alt="Gift wrapped for a special occasion"
            loading="lazy"
          />
        </div>

        <div className="story-copy">
          <span className="eyebrow">THE THOUGHT BEHIND THE GIFT</span>
          <h2>
            Because it's never just <em>what's inside.</em>
          </h2>
          <p>
            A gift can say thank you when words feel too small. It can
            celebrate a new beginning, make a birthday unforgettable, or
            remind someone that they're loved.
          </p>
          <p>
            That's the feeling we want every gift from Hampers Heaven to
            carry — a little thoughtfulness, a little beauty, and a memory
            worth keeping.
          </p>
          <Link href="/shop" className="text-link">
            FIND SOMETHING SPECIAL ↗
          </Link>
        </div>
      </section>

      <section className="values">
        <div className="values-heading">
          <span className="eyebrow">WHAT MATTERS TO US</span>
          <h2>
            Our philosophy of <em>giving.</em>
          </h2>
          <p>Little details make the biggest difference.</p>
        </div>

        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.number}>
              <span className="value-number">{value.number}</span>
              <span className="value-heart">♡</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <span className="eyebrow">LET'S MAKE SOMEONE SMILE</span>
        <h2>
          Your next beautiful moment starts <em>here.</em>
        </h2>
        <p>Find a gift that feels just right for someone special.</p>

        <div className="closing-buttons">
          <Link href="/shop" className="primary-button">
            SHOP THE COLLECTION ↗
          </Link>
          <Link href="/contact" className="secondary-button">
            TALK TO US
          </Link>
        </div>
      </section>

      <footer>
        <Link href="/">Hampers Heaven ♡</Link>
        <Link href="/shop">Shop gifts</Link>
        <Link href="/contact">Contact us</Link>
        <span>© 2026 Hampers Heaven</span>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #fffaf8;
          color: #402d32;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .announcement {
          padding: 10px;
          background: #70424f;
          color: white;
          text-align: center;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .header {
          min-height: 85px;
          padding: 15px 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          border-bottom: 1px solid #f0e3e1;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand > span {
          color: #bd808b;
          font-size: 38px;
        }

        .brand strong,
        .brand small {
          display: block;
        }

        .brand strong {
          font: 22px Georgia, serif;
        }

        .brand small {
          margin-top: 5px;
          color: #a47c7e;
          font-size: 8px;
          letter-spacing: 1.7px;
        }

        nav {
          display: flex;
          gap: 26px;
          color: #715d60;
          font-size: 13px;
        }

        nav a:hover {
          color: #b46e7b;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7%;
          align-items: center;
          padding: 65px 8%;
          background: #f8eeeb;
        }

        .eyebrow {
          color: #a66c78;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .hero h1 {
          margin: 20px 0;
          font: 400 clamp(40px, 4.7vw, 63px)/1.15 Georgia, serif;
          letter-spacing: -1.5px;
        }

        .hero h1 em,
        .story-copy h2 em,
        .values-heading h2 em,
        .closing h2 em {
          color: #b87884;
          font-weight: 400;
        }

        .hero-copy > p,
        .story-copy > p {
          color: #806e70;
          font-size: 13px;
          line-height: 2;
        }

        .primary-button {
          display: inline-block;
          margin-top: 22px;
          padding: 16px 20px;
          background: #70424f;
          color: white;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .hero-image {
          position: relative;
          min-width: 0;
        }

        .hero-image > img {
          display: block;
          width: 100%;
          height: 410px;
          object-fit: cover;
        }

        .image-caption {
          position: absolute;
          bottom: 17px;
          left: -20px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 17px;
          background: #fffaf8;
        }

        .image-caption span {
          color: #b87884;
          font-size: 27px;
        }

        .image-caption p {
          font: 14px Georgia, serif;
        }

        .story {
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 7%;
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          align-items: center;
          gap: 9%;
        }

        .story-image img {
          display: block;
          width: 100%;
          aspect-ratio: 0.85;
          object-fit: cover;
        }

        .story-copy h2 {
          margin: 18px 0;
          font: 400 clamp(33px, 4vw, 46px)/1.2 Georgia, serif;
        }

        .story-copy > p {
          margin: 15px 0;
        }

        .text-link {
          display: inline-block;
          margin-top: 18px;
          padding-bottom: 8px;
          border-bottom: 1px solid #b87884;
          color: #70424f;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .values {
          padding: 75px 7% 85px;
          background: #f8eeeb;
        }

        .values-heading {
          text-align: center;
        }

        .values-heading h2 {
          margin: 15px 0 10px;
          font: 400 clamp(32px, 4vw, 45px) Georgia, serif;
        }

        .values-heading > p {
          color: #8d797a;
          font-size: 13px;
        }

        .value-grid {
          max-width: 1100px;
          margin: 42px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .value-card {
          position: relative;
          padding: 30px 25px;
          background: #fffaf8;
        }

        .value-number {
          color: #c79aa0;
          font: 17px Georgia, serif;
        }

        .value-heart {
          display: block;
          margin-top: 22px;
          color: #b87884;
          font-size: 28px;
        }

        .value-card h3 {
          margin: 15px 0 10px;
          font: 400 22px Georgia, serif;
        }

        .value-card p {
          color: #8b7375;
          font-size: 12px;
          line-height: 1.9;
        }

        .closing {
          padding: 75px 20px;
          text-align: center;
        }

        .closing h2 {
          margin: 18px auto 12px;
          font: 400 clamp(32px, 4vw, 45px) Georgia, serif;
        }

        .closing > p {
          color: #8d797a;
          font-size: 13px;
        }

        .closing-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .closing-buttons .primary-button {
          margin-top: 20px;
        }

        .secondary-button {
          display: inline-block;
          margin-top: 20px;
          padding: 15px 20px;
          border: 1px solid #d7adb2;
          font-size: 10px;
          letter-spacing: 1px;
        }

        footer {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          padding: 27px 7%;
          border-top: 1px solid #eee1df;
          color: #826d70;
          font-size: 11px;
        }

        footer a:first-child {
          font: 18px Georgia, serif;
          color: #402d32;
        }

        @media (max-width: 760px) {
          .header {
            padding: 15px 5%;
            flex-wrap: wrap;
          }

          .brand strong {
            font-size: 19px;
          }

          .brand > span {
            font-size: 30px;
          }

          nav {
            width: 100%;
            justify-content: space-between;
            gap: 12px;
            padding-top: 12px;
            border-top: 1px solid #f0e3e1;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 45px 6%;
            gap: 30px;
          }

          .hero h1 {
            font-size: 46px;
          }

          .hero-image > img {
            height: 330px;
          }

          .image-caption {
            left: -5px;
            bottom: 12px;
          }

          .story {
            grid-template-columns: 1fr;
            padding: 55px 6%;
            gap: 30px;
          }

          .story-image img {
            aspect-ratio: 1.1;
          }

          .values {
            padding: 55px 5%;
          }

          .value-grid {
            grid-template-columns: 1fr;
            gap: 13px;
            margin-top: 30px;
          }

          .value-card {
            padding: 24px;
          }

          .value-heart {
            margin-top: 12px;
          }

          .closing {
            padding: 55px 6%;
          }

          footer {
            padding: 25px 5%;
          }
        }
      `}</style>
    </main>
  );
}
