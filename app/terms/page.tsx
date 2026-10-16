
import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    text: "Welcome to Hampers Heaven. These Terms & Conditions describe the general terms for browsing this website and making gift enquiries. By using the website, you agree to use it responsibly.",
  },
  {
    title: "2. Product Listings and Images",
    text: "Product descriptions, photographs, prices and availability shown on this demonstration website are illustrative and may not represent actual inventory. Colours and presentation may vary. Confirm the final product details directly with us before placing an order.",
  },
  {
    title: "3. Prices and Availability",
    text: "Displayed prices are indicative demo prices and are not a guarantee of sale or availability. The final price, customisation charges, delivery charges and estimated delivery date must be confirmed directly before an order is accepted.",
  },
  {
    title: "4. Orders and Confirmation",
    text: "Submitting a form or opening WhatsApp does not by itself create a confirmed order. An order is considered accepted only after the store confirms the requested products, final price, delivery details and any applicable payment terms.",
  },
  {
    title: "5. Payments",
    text: "This demonstration website does not process online payments. Do not enter or send payment card details, banking passwords or OTPs through the enquiry forms or WhatsApp messages.",
  },
  {
    title: "6. Delivery",
    text: "Delivery availability, charges, timeframes and service areas depend on the product and destination. These details should be agreed with the store before an order is confirmed.",
  },
  {
    title: "7. Cancellations, Returns and Damaged Items",
    text: "Before commercial launch, the store should publish a clear policy covering cancellations, refunds, returns, personalised gifts and damaged or incorrect products. Please confirm the applicable terms with the store before ordering.",
  },
  {
    title: "8. Website Use",
    text: "You agree not to misuse the website, attempt unauthorised access, disrupt its operation or use its content for unlawful purposes.",
  },
  {
    title: "9. Third-Party Services",
    text: "The website may link to third-party services, including WhatsApp and external image hosting. Their services are governed by their own terms and policies.",
  },
  {
    title: "10. Changes to These Terms",
    text: "These terms may be updated as the website and services evolve. The website owner should review and publish any changes before relying on this page for commercial orders.",
  },
  {
    title: "11. Contact",
    text: "For questions about these terms, contact Hampers Heaven using the WhatsApp link provided below.",
  },
];

export default function TermsPage() {
  return (
    <main className="terms-page">
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
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <span className="eyebrow">A FEW IMPORTANT DETAILS</span>
        <h1>Terms & <em>Conditions.</em></h1>
        <p>Please read these terms before making a gift enquiry.</p>
      </section>

      <article className="content">
        <div className="notice">
          <span>♡</span>
          <p>
            <strong>Demo website notice</strong>
            <br />
            This page is a starter template. The business owner should
            customise it to reflect actual business practices and obtain
            appropriate legal advice before commercial use.
          </p>
        </div>

        {sections.map((section) => (
          <section className="term-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}

        <div className="contact-card">
          <h2>Have a question?</h2>
          <p>We’re happy to help with your gifting enquiry.</p>
          <a
            href="https://wa.me/919122930001?text=Hi%20Hampers%20Heaven!%20I%20have%20a%20question%20about%20your%20terms."
            target="_blank"
            rel="noreferrer"
          >
            CONTACT US ON WHATSAPP ↗
          </a>
        </div>

        <p className="updated">Last updated: 16 October 2026</p>
      </article>

      <footer>
        <Link href="/">Hampers Heaven ♡</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/contact">Contact us</Link>
        <span>© 2026 Hampers Heaven</span>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #fffaf8; color: #402d32; font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }
        .announcement { padding: 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 2px; }
        header { min-height: 85px; padding: 15px 7%; display: flex; justify-content: space-between; align-items: center; gap: 20px; border-bottom: 1px solid #f0e3e1; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand > span { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        nav { display: flex; gap: 25px; color: #715d60; font-size: 13px; }
        .hero { padding: 65px 20px; background: #f8eeeb; text-align: center; }
        .eyebrow { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 { margin: 17px 0 12px; font: 400 clamp(38px, 5vw, 55px) Georgia, serif; }
        .hero h1 em { color: #b87884; font-weight: 400; }
        .hero > p { color: #8d797a; font-size: 13px; line-height: 1.8; }
        .content { max-width: 850px; margin: 0 auto; padding: 50px 25px 75px; }
        .notice { display: flex; gap: 15px; padding: 20px; background: #f8eeeb; }
        .notice > span { color: #b87884; font-size: 27px; }
        .notice p { margin: 0; color: #806e70; font-size: 12px; line-height: 1.9; }
        .notice strong { color: #402d32; }
        .term-section { padding: 24px 0; border-bottom: 1px solid #eee1df; }
        .term-section h2, .contact-card h2 { margin: 0 0 12px; font: 400 23px Georgia, serif; }
        .term-section p, .contact-card p { margin: 0; color: #806e70; font-size: 12px; line-height: 2; }
        .contact-card { margin-top: 35px; padding: 28px; background: #f8eeeb; }
        .contact-card a { display: inline-block; margin-top: 20px; padding: 14px 18px; background: #70424f; color: white; font-size: 10px; letter-spacing: 1px; }
        .updated { margin-top: 25px; color: #a18a8b; font-size: 10px; }
        footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 18px; padding: 27px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        footer a:first-child { font: 18px Georgia, serif; color: #402d32; }
        @media (max-width: 650px) {
          header { padding: 15px 5%; flex-wrap: wrap; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; padding-top: 12px; border-top: 1px solid #f0e3e1; }
          .hero { padding: 50px 6%; }
          .content { padding: 35px 6% 55px; }
          .contact-card { padding: 22px; }
          footer { padding: 25px 5%; }
        }
      `}</style>
    </main>
  );
}
