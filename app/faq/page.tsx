
import Link from "next/link";

const faqs = [
  {
    q: "What can I find at Hampers Heaven?",
    a: "Explore curated gift hampers, chocolates, flowers and thoughtful gifts for birthdays, anniversaries, celebrations and special moments.",
  },
  {
    q: "How do I place an order?",
    a: "Browse our shop, choose a product and contact us through WhatsApp. We will confirm availability, the final price and delivery details before accepting your order.",
  },
  {
    q: "Can I customise a gift hamper?",
    a: "Customisation requests can be discussed through WhatsApp. Share your preferred colours, products, budget and occasion so we can discuss suitable options.",
  },
  {
    q: "Can I include a personal message?",
    a: "You can ask about adding a personal message with your gift. Availability and any additional charges will be confirmed before your order is accepted.",
  },
  {
    q: "Do you deliver to my location?",
    a: "Please contact us with your city and PIN code to confirm whether delivery is available and to check the applicable delivery charges and estimated timeframe.",
  },
  {
    q: "How can I check product availability?",
    a: "Send us the product name or a screenshot through WhatsApp. We will confirm current availability and the final details.",
  },
  {
    q: "Can I cancel or return an order?",
    a: "Please discuss cancellation, returns or damaged products with us before ordering. The applicable policy must be confirmed directly with the store.",
  },
  {
    q: "Can I pay online through this website?",
    a: "This demonstration website does not currently process online payments. Contact us to discuss available payment arrangements before placing an order.",
  },
];

export default function FAQPage() {
  return (
    <main className="faq-page">
      <div className="topbar">
        A LITTLE SOMETHING FOR SOMEONE SPECIAL ♡
      </div>

      <header className="header">
        <Link href="/" className="logo">
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
        <div className="eyebrow">WE ARE HERE TO HELP</div>
        <h1>Frequently Asked <em>Questions.</em></h1>
        <p>Everything you need to know before sending a little love.</p>
      </section>

      <section className="faq-content">
        <div className="intro">
          <span>THE LITTLE DETAILS</span>
          <h2>Questions? We have answers.</h2>
          <p>
            Still unsure about something? Browse the answers below or get in
            touch with our team.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.q}>
              <summary>
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="question">{faq.q}</span>
                <span className="plus">+</span>
              </summary>
              <p className="answer">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="help-card">
          <div className="heart">♡</div>
          <h2>Didn't find your answer?</h2>
          <p>
            Tell us what you have in mind. We would love to help you find the
            perfect gift.
          </p>
          <a
            href="https://wa.me/919122930001?text=Hi%20Hampers%20Heaven!%20I%20have%20a%20question%20about%20your%20gifts."
            target="_blank"
            rel="noreferrer"
          >
            CHAT WITH US ON WHATSAPP ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <Link href="/" className="footer-logo">
          Hampers Heaven ♡
        </Link>
        <div className="footer-links">
          <Link href="/shop">Shop</Link>
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
        .topbar { padding: 10px; background: #70424f; color: #fff; text-align: center; font-size: 10px; letter-spacing: 2px; }
        .header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 7%; border-bottom: 1px solid #f0e3e1; }
        .logo { display: flex; align-items: center; gap: 10px; }
        .logo > span { color: #bd808b; font-size: 38px; }
        .logo strong, .logo small { display: block; }
        .logo strong { font: 22px Georgia, serif; }
        .logo small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        nav { display: flex; gap: 24px; color: #715d60; font-size: 12px; }
        .hero { padding: 70px 20px; background: #f8eeeb; text-align: center; }
        .eyebrow { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 { margin: 17px 0 13px; font: 400 clamp(36px, 5vw, 54px) Georgia, serif; }
        .hero h1 em { color: #b87884; font-weight: 400; }
        .hero > p { color: #8d797a; font-size: 13px; line-height: 1.8; }
        .faq-content { max-width: 850px; margin: auto; padding: 65px 25px 80px; }
        .intro { margin-bottom: 35px; text-align: center; }
        .intro > span { color: #ad7780; font-size: 9px; letter-spacing: 2px; }
        .intro h2 { margin: 14px 0; font: 400 29px Georgia, serif; }
        .intro p { color: #8d797a; font-size: 12px; line-height: 1.9; }
        .faq-list { border-top: 1px solid #eadbd9; }
        .faq-item { border-bottom: 1px solid #eadbd9; }
        .faq-item summary { display: flex; align-items: center; gap: 17px; padding: 23px 5px; cursor: pointer; list-style: none; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .number { color: #b87884; font-size: 10px; letter-spacing: 1px; }
        .question { flex: 1; font: 17px Georgia, serif; }
        .plus { color: #a66c78; font-size: 23px; transition: transform .2s; }
        .faq-item[open] .plus { transform: rotate(45deg); }
        .answer { margin: -4px 35px 24px 36px; color: #806e70; font-size: 12px; line-height: 2; }
        .help-card { margin-top: 60px; padding: 40px 25px; background: #f8eeeb; text-align: center; }
        .heart { color: #b87884; font-size: 35px; }
        .help-card h2 { margin: 12px 0; font: 400 28px Georgia, serif; }
        .help-card p { max-width: 430px; margin: 0 auto; color: #806e70; font-size: 12px; line-height: 1.9; }
        .help-card a { display: inline-block; margin-top: 22px; padding: 15px 20px; background: #70424f; color: white; font-size: 10px; letter-spacing: 1px; }
        .footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 28px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        .footer-logo { font: 19px Georgia, serif; color: #402d32; }
        .footer-links { display: flex; gap: 18px; }
        @media (max-width: 650px) {
          .header { padding: 15px 5%; flex-wrap: wrap; }
          .logo strong { font-size: 19px; }
          .logo > span { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; gap: 10px; padding-top: 13px; border-top: 1px solid #f0e3e1; }
          .hero { padding: 50px 6%; }
          .faq-content { padding: 45px 6% 55px; }
          .faq-item summary { gap: 10px; }
          .question { font-size: 15px; line-height: 1.5; }
          .answer { margin-left: 25px; }
          .help-card { padding: 30px 18px; }
          .footer { padding: 25px 5%; }
          .footer-links { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </main>
  );
}
