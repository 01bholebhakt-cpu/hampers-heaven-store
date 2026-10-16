
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="success-page">
      <div className="announcement">LITTLE THINGS. BIG FEELINGS. ♡</div>

      <header>
        <Link href="/" className="brand">
          <span>♡</span>
          <div>
            <strong>Hampers Heaven</strong>
            <small>GIFTS THAT FEEL LIKE LOVE</small>
          </div>
        </Link>
      </header>

      <section className="success-content">
        <div className="success-icon">♡</div>
        <span className="eyebrow">A LITTLE MOMENT OF HAPPINESS</span>
        <h1>Thank you for <em>choosing us.</em></h1>
        <p className="description">
          Your gifting journey is just beginning. We hope your surprise
          brings a beautiful smile to someone special.
        </p>

        <div className="status-card">
          <span className="status-icon">✉</span>
          <div>
            <h2>Ready to make it official?</h2>
            <p>
              Contact us on WhatsApp to confirm your order, product
              availability, final price and delivery details.
            </p>
          </div>
        </div>

        <a
          className="whatsapp-button"
          href="https://wa.me/919122930001?text=Hi%20Hampers%20Heaven!%20I%27d%20like%20to%20confirm%20my%20gift%20order."
          target="_blank"
          rel="noreferrer"
        >
          CONFIRM ON WHATSAPP ↗
        </a>

        <Link href="/shop" className="continue-link">
          ← CONTINUE EXPLORING GIFTS
        </Link>

        <div className="thank-you-note">
          <span>“</span>
          <p>Some gifts are remembered long after the wrapping is gone.</p>
        </div>
      </section>

      <footer>
        <Link href="/">Hampers Heaven ♡</Link>
        <Link href="/shop">Shop gifts</Link>
        <Link href="/contact">Contact us</Link>
        <span>© 2026 Hampers Heaven</span>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          background: #fffaf8;
          color: #402d32;
          font-family: Arial, Helvetica, sans-serif;
        }
        a { color: inherit; text-decoration: none; }
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
          border-bottom: 1px solid #f0e3e1;
        }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand > span { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        .success-content {
          max-width: 720px;
          margin: 0 auto;
          padding: 75px 25px 85px;
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }
        .success-icon {
          width: 92px;
          height: 92px;
          display: grid;
          place-items: center;
          margin-bottom: 28px;
          border: 1px solid #dcb7bc;
          border-radius: 50%;
          background: #f8eeeb;
          color: #b87884;
          font-size: 48px;
        }
        .eyebrow { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        h1 {
          margin: 20px 0 14px;
          font: 400 clamp(38px, 5vw, 55px)/1.15 Georgia, serif;
          letter-spacing: -1px;
        }
        h1 em { color: #b87884; font-weight: 400; }
        .description {
          max-width: 500px;
          margin: 0;
          color: #8d797a;
          font-size: 13px;
          line-height: 2;
        }
        .status-card {
          display: flex;
          gap: 17px;
          width: 100%;
          margin-top: 34px;
          padding: 24px;
          background: #f8eeeb;
          text-align: left;
        }
        .status-icon { color: #b87884; font-size: 28px; }
        .status-card h2 { margin: 0 0 9px; font: 400 21px Georgia, serif; }
        .status-card p { margin: 0; color: #8b7375; font-size: 12px; line-height: 1.9; }
        .whatsapp-button {
          display: block;
          width: 100%;
          margin-top: 24px;
          padding: 17px;
          background: #70424f;
          color: white;
          font-size: 10px;
          letter-spacing: 1.2px;
        }
        .whatsapp-button:hover { background: #4d2b36; }
        .continue-link { margin-top: 22px; color: #80545e; font-size: 10px; letter-spacing: 1px; }
        .thank-you-note { margin-top: 43px; padding-top: 25px; border-top: 1px solid #eee1df; }
        .thank-you-note span { color: #bd808b; font: 48px Georgia, serif; line-height: 1; }
        .thank-you-note p { margin: 8px 0 0; color: #826d70; font: italic 17px Georgia, serif; }
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
        footer a:first-child { font: 18px Georgia, serif; color: #402d32; }
        @media (max-width: 600px) {
          header { padding: 15px 5%; }
          .success-content { padding: 55px 6% 65px; }
          .status-card { padding: 18px; }
          footer { padding: 25px 5%; }
        }
      `}</style>
    </main>
  );
}
