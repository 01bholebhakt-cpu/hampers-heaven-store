
"use client";

import Link from "next/link";

const sections = [
  {
    title: "1. Information We Collect",
    text: "When you contact us or enquire about a gift, you may choose to share your name, phone number, delivery address and gifting preferences. We use this information to respond to your enquiry and coordinate your requested order.",
  },
  {
    title: "2. How We Use Your Information",
    text: "Information you voluntarily provide may be used to respond to enquiries, confirm product availability, discuss delivery arrangements and provide customer support.",
  },
  {
    title: "3. WhatsApp Communication",
    text: "Our website may link to WhatsApp for enquiries. When you open WhatsApp, your communication is subject to WhatsApp's own terms and privacy policy. Review your message before sending it.",
  },
  {
    title: "4. Payments and Financial Information",
    text: "This demonstration website does not process online payments. Never share card numbers, passwords, OTPs or other confidential financial credentials through a gift enquiry.",
  },
  {
    title: "5. Cookies and Third-Party Services",
    text: "The website may load images from third-party image hosting services. Those services may process technical information according to their own policies. This demo does not intentionally request payment credentials.",
  },
  {
    title: "6. Data Security and Retention",
    text: "We aim to handle information responsibly and retain it only as needed for the relevant enquiry or applicable legal requirements. No internet transmission or storage method can be guaranteed completely secure.",
  },
  {
    title: "7. Your Choices",
    text: "You may choose what information to share in an enquiry. If you have questions about information you have sent us, contact us through the channel below.",
  },
  {
    title: "8. Policy Updates",
    text: "This policy may be updated as our services and website change. Any revised version should be published on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="announcement">
        LITTLE THINGS. BIG FEELINGS. ♡
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
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="legal-hero">
        <span className="eyebrow">YOUR TRUST MATTERS</span>
        <h1>
          Privacy <em>Policy.</em>
        </h1>
        <p>How information shared with Hampers Heaven is handled.</p>
      </section>

      <article className="legal-content">
        <div className="intro">
          <span>♡</span>
          <p>
            We respect your privacy. This page explains the general approach
            to information shared through this demonstration website.
            The website owner should review and customise this policy before
            using the site commercially.
          </p>
        </div>

        {sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}

        <section className="contact-box">
          <h2>Questions about privacy?</h2>
          <p>
            Contact us if you have a question about information you have shared.
          </p>
          <a
            href="https://wa.me/919122930001?text=Hi%20Hampers%20Heaven%2C%20I%20have%20a%20privacy%20question."
            target="_blank"
            rel="noreferrer"
          >
            CONTACT US ON WHATSAPP ↗
          </a>
        </section>

        <p className="effective">Effective date: 16 October 2026</p>
      </article>

      <footer>
        <Link href="/">Hampers Heaven ♡</Link>
        <Link href="/terms">Terms & Conditions</Link>
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

        header {
          min-height: 85px;
          padding: 15px 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
          gap: 25px;
          color: #715d60;
          font-size: 13px;
        }

        .legal-hero {
          padding: 65px 20px;
          background: #f8eeeb;
          text-align: center;
        }

        .eyebrow {
          color: #a66c78;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .legal-hero h1 {
          margin: 17px 0 12px;
          font: 400 clamp(40px, 5vw, 56px) Georgia, serif;
        }

        .legal-hero h1 em {
          color: #b87884;
          font-weight: 400;
        }

        .legal-hero p {
          color: #8d797a;
          font-size: 13px;
          line-height: 1.8;
        }

        .legal-content {
          max-width: 850px;
          margin: 0 auto;
          padding: 55px 25px 75px;
        }

        .intro {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: #f8eeeb;
        }

        .intro > span {
          color: #b87884;
          font-size: 27px;
        }

        .intro p {
          margin: 0;
          color: #806e70;
          font-size: 12px;
          line-height: 2;
        }

        .legal-section {
          padding: 25px 0;
          border-bottom: 1px solid #eee1df;
        }

        .legal-section h2,
        .contact-box h2 {
          margin: 0 0 12px;
          font: 400 23px Georgia, serif;
        }

        .legal-section p,
        .contact-box p {
          margin: 0;
          color: #806e70;
          font-size: 12px;
          line-height: 2;
        }

        .contact-box {
          margin-top: 35px;
          padding: 28px;
          background: #f8eeeb;
        }

        .contact-box a {
          display: inline-block;
          margin-top: 20px;
          padding: 14px 18px;
          background: #70424f;
          color: white;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .effective {
          margin-top: 25px;
          color: #a18a8b;
          font-size: 10px;
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

        @media (max-width: 650px) {
          header {
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
            padding-top: 12px;
            border-top: 1px solid #f0e3e1;
          }

          .legal-hero {
            padding: 50px 6%;
          }

          .legal-content {
            padding: 35px 6% 55px;
          }

          .contact-box {
            padding: 22px;
          }

          footer {
            padding: 25px 5%;
          }
        }
      `}</style>
    </main>
  );
}
