
import Link from "next/link";

const occasions = [
  {
    size: "THE MINI",
    price: "Under ₹999",
    description: "A little gesture with a lot of heart.",
    includes: [
      "Small thoughtful gifts",
      "Chocolates or sweet treats",
      "Simple gift presentation",
    ],
    label: "LITTLE SURPRISES",
  },
  {
    size: "THE CLASSIC",
    price: "₹1,000 – ₹1,999",
    description: "The perfect balance of thoughtful and beautiful.",
    includes: [
      "Curated gift combinations",
      "Chocolates and accessories",
      "Elegant gift presentation",
    ],
    label: "EVERYDAY MAGIC",
  },
  {
    size: "THE LUXE",
    price: "₹2,000 – ₹2,999",
    description: "For moments that deserve something extra special.",
    includes: [
      "Premium gifting combinations",
      "More room for customisation",
      "Elevated presentation ideas",
    ],
    label: "EXTRA SPECIAL",
  },
  {
    size: "THE GRAND",
    price: "₹3,000+",
    description: "A statement gift for unforgettable celebrations.",
    includes: [
      "Larger gifting combinations",
      "Premium gifting inspiration",
      "Custom requests on discussion",
    ],
    label: "GRAND GESTURES",
  },
];

export default function SizeGuidePage() {
  return (
    <main className="guide-page">
      <div className="topbar">THOUGHTFUL GIFTING FOR EVERY BUDGET ♡</div>

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
          <Link href="/gift-boxes">Collections</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <span className="eyebrow">A GUIDE TO GIFTING</span>
        <h1>Every Budget. <em>More Meaning.</em></h1>
        <p>
          Find the right gifting experience for your occasion, your loved ones
          and your budget.
        </p>
      </section>

      <section className="intro">
        <span>FIND YOUR PERFECT FIT</span>
        <h2>How much love are we <em>sending?</em></h2>
        <p>
          Great gifting isn't about spending the most. It's about choosing
          something that feels right.
        </p>
      </section>

      <section className="budget-grid">
        {occasions.map((item, index) => (
          <article
            key={item.size}
            className={`budget-card ${index === 2 ? "featured" : ""}`}
          >
            {index === 2 && (
              <span className="popular">A LITTLE EXTRA LOVE</span>
            )}

            <span className="card-label">{item.label}</span>
            <h2>{item.size}</h2>
            <div className="price">{item.price}</div>
            <p className="description">{item.description}</p>

            <div className="line" />

            <span className="includes-title">GIFTING INSPIRATION</span>
            <ul>
              {item.includes.map((feature) => (
                <li key={feature}>
                  <span>♡</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/gift-finder" className="card-button">
              FIND MY GIFT ↗
            </Link>
          </article>
        ))}
      </section>

      <section className="note">
        <div className="note-heart">♡</div>
        <div>
          <h2>A little note about pricing</h2>
          <p>
            These are suggested budget ranges, not confirmed product prices or
            package guarantees. Actual products, availability, personalisation
            and delivery charges should be confirmed with the store before
            ordering.
          </p>
        </div>
      </section>

      <section className="custom">
        <span>HAVE SOMETHING SPECIAL IN MIND?</span>
        <h2>Let's create a gift that feels <em>like you.</em></h2>
        <p>
          Share your occasion, preferred budget and ideas with us. We can
          discuss suitable gifting options.
        </p>
        <a
          href="https://wa.me/919122930001?text=Hi%20Hampers%20Heaven!%20I%20would%20like%20help%20choosing%20a%20gift%20within%20my%20budget."
          target="_blank"
          rel="noreferrer"
        >
          DISCUSS YOUR GIFT ON WHATSAPP ↗
        </a>
      </section>

      <footer>
        <Link href="/" className="footer-brand">
          Hampers Heaven ♡
        </Link>
        <div>
          <Link href="/shop">Shop</Link>
          <Link href="/gift-finder">Gift Finder</Link>
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
        .topbar { padding: 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 2px; }
        header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 7%; border-bottom: 1px solid #f0e3e1; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand > span { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        nav { display: flex; gap: 24px; color: #715d60; font-size: 12px; }
        .hero { padding: 70px 20px; background: #f8eeeb; text-align: center; }
        .eyebrow, .intro > span, .custom > span { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 { margin: 18px 0 12px; font: 400 clamp(38px, 5vw, 56px) Georgia, serif; }
        .hero h1 em, .intro h2 em, .custom h2 em { color: #b87884; font-weight: 400; }
        .hero > p { max-width: 560px; margin: auto; color: #806e70; font-size: 13px; line-height: 1.9; }
        .intro { max-width: 680px; margin: auto; padding: 60px 25px 30px; text-align: center; }
        .intro h2 { margin: 15px 0; font: 400 33px Georgia, serif; }
        .intro p { color: #806e70; font-size: 12px; line-height: 1.9; }
        .budget-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; max-width: 1200px; margin: auto; padding: 25px 25px 65px; align-items: stretch; }
        .budget-card { position: relative; display: flex; flex-direction: column; padding: 28px 20px 22px; border: 1px solid #eadbd9; background: white; }
        .budget-card.featured { border: 1px solid #b87884; background: #fff8f6; }
        .popular { position: absolute; top: -11px; left: 50%; transform: translateX(-50%); width: max-content; padding: 6px 10px; background: #70424f; color: white; font-size: 8px; letter-spacing: 1px; }
        .card-label { color: #a66c78; font-size: 9px; letter-spacing: 1.5px; }
        .budget-card h2 { margin: 17px 0 12px; font: 400 23px Georgia, serif; }
        .price { font: 400 23px Georgia, serif; color: #70424f; }
        .description { min-height: 58px; margin: 13px 0 20px; color: #806e70; font-size: 11px; line-height: 1.8; }
        .line { height: 1px; background: #eadbd9; }
        .includes-title { margin-top: 20px; color: #a66c78; font-size: 8px; letter-spacing: 1px; }
        ul { display: grid; gap: 15px; margin: 18px 0 25px; padding: 0; list-style: none; }
        li { display: flex; align-items: start; gap: 8px; color: #705b60; font-size: 10px; line-height: 1.7; }
        li span { color: #b87884; }
        .card-button { display: block; margin-top: auto; padding: 14px 8px; background: #70424f; color: white; text-align: center; font-size: 9px; letter-spacing: 1px; }
        .note { display: flex; align-items: start; gap: 16px; max-width: 950px; margin: 0 auto 65px; padding: 22px; background: #f8eeeb; }
        .note-heart { color: #b87884; font-size: 30px; }
        .note h2 { margin: 0 0 8px; font: 400 22px Georgia, serif; }
        .note p { margin: 0; color: #806e70; font-size: 11px; line-height: 1.9; }
        .custom { padding: 55px 20px 65px; background: #70424f; color: white; text-align: center; }
        .custom > span { color: #edc8cc; }
        .custom h2 { max-width: 650px; margin: 16px auto; font: 400 36px Georgia, serif; line-height: 1.35; }
        .custom p { max-width: 520px; margin: auto; color: #f1dfe1; font-size: 12px; line-height: 1.9; }
        .custom > a { display: inline-block; margin-top: 23px; padding: 16px 20px; border: 1px solid #d8b2b9; font-size: 9px; letter-spacing: 1px; }
        footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 28px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        .footer-brand { font: 18px Georgia, serif; color: #402d32; }
        footer div { display: flex; flex-wrap: wrap; gap: 18px; }
        @media (max-width: 1000px) { .budget-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 750px; gap: 25px; } }
        @media (max-width: 600px) {
          header { padding: 15px 5%; flex-wrap: wrap; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; gap: 8px; padding-top: 12px; border-top: 1px solid #f0e3e1; font-size: 10px; }
          .hero { padding: 50px 6%; }
          .intro { padding: 45px 6% 20px; }
          .intro h2 { font-size: 28px; }
          .budget-grid { grid-template-columns: 1fr; padding: 25px 5% 45px; gap: 20px; }
          .budget-card { padding: 27px 22px 22px; }
          .description { min-height: auto; }
          .note { margin: 0 5% 45px; padding: 18px; }
          .custom h2 { font-size: 29px; }
          footer { padding: 25px 5%; }
          footer div { width: 100%; justify-content: space-between; gap: 10px; }
        }
      `}</style>
    </main>
  );
}
