
import Link from "next/link";
import { notFound } from "next/navigation";

const occasions: Record<
  string,
  {
    title: string;
    accent: string;
    subtitle: string;
    description: string;
    image: string;
    ideas: string[];
  }
> = {
  birthday: {
    title: "Birthday",
    accent: "Magic",
    subtitle: "MAKE THEIR DAY EXTRA SPECIAL",
    description:
      "From thoughtful little surprises to luxurious gift hampers, find something that makes their birthday unforgettable.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85",
    ideas: ["Chocolate Hampers", "Luxury Gift Boxes", "Personalised Gifts"],
  },
  anniversary: {
    title: "Anniversary",
    accent: "Love",
    subtitle: "CELEBRATE YOUR STORY",
    description:
      "Celebrate the moments, memories and little things that make your relationship special with a thoughtful surprise.",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1400&q=85",
    ideas: ["Romantic Gifts", "Flowers & Chocolates", "Luxury Gift Boxes"],
  },
  wedding: {
    title: "Wedding",
    accent: "Wonders",
    subtitle: "FOR A BEAUTIFUL BEGINNING",
    description:
      "Discover elegant gifting inspiration for newlyweds, wedding celebrations and the people who make the occasion meaningful.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    ideas: ["Premium Hampers", "Couple Gifts", "Celebration Boxes"],
  },
  "thank-you": {
    title: "Thank You",
    accent: "Thoughtfully",
    subtitle: "A LITTLE GRATITUDE GOES A LONG WAY",
    description:
      "Show your appreciation with a thoughtful gift that says thank you in a way words sometimes cannot.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=85",
    ideas: ["Flower Gifts", "Sweet Treats", "Thoughtful Hampers"],
  },
  congratulations: {
    title: "Congratulations",
    accent: "Celebrations",
    subtitle: "BIG MOMENTS DESERVE BIG SMILES",
    description:
      "Celebrate achievements, new beginnings and proud moments with a gift that makes the occasion feel even more special.",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1400&q=85",
    ideas: ["Celebration Boxes", "Chocolate Hampers", "Luxury Gifts"],
  },
};

export default async function OccasionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const occasion = occasions[slug];

  if (!occasion) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hi Hampers Heaven! I'm looking for a gift for ${occasion.title}. Please suggest suitable options and prices.`
  );

  return (
    <main className="occasion-page">
      <div className="announcement">
        THOUGHTFUL GIFTS FOR LIFE'S LOVELY MOMENTS ♡
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
          <Link href="/shop">Shop All</Link>
          <Link href="/gift-boxes">Collections</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section
        className="hero"
        style={{ backgroundImage: `url("${occasion.image}")` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">{occasion.subtitle}</span>
          <h1>
            {occasion.title} <em>{occasion.accent}.</em>
          </h1>
          <p>{occasion.description}</p>
          <Link href="/shop" className="hero-button">
            EXPLORE GIFTS ↗
          </Link>
        </div>
      </section>

      <section className="intro">
        <span>CURATED WITH LOVE</span>
        <h2>A thoughtful gift. A lasting <em>memory.</em></h2>
        <p>
          Find inspiration for your special occasion or let us help you choose
          something meaningful.
        </p>
      </section>

      <section className="ideas">
        {occasion.ideas.map((idea, index) => (
          <Link
            href="/shop"
            className="idea-card"
            key={idea}
          >
            <span className="idea-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{idea}</h3>
              <p>Explore thoughtful gifting ideas for your special moment.</p>
            </div>
            <span className="arrow">↗</span>
          </Link>
        ))}
      </section>

      <section className="personal">
        <div className="personal-icon">♡</div>
        <span>NEED A LITTLE HELP?</span>
        <h2>Let's find something <em>just right.</em></h2>
        <p>
          Tell us about the person, the occasion and your budget. We can help
          you explore gift ideas before you order.
        </p>
        <a
          href={`https://wa.me/919122930001?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          GET GIFT SUGGESTIONS ON WHATSAPP ↗
        </a>
      </section>

      <section className="bottom">
        <h2>Make the moment memorable.</h2>
        <Link href="/shop">SHOP ALL GIFTS ↗</Link>
      </section>

      <footer>
        <Link href="/" className="footer-brand">
          Hampers Heaven ♡
        </Link>
        <div>
          <Link href="/about">Our Story</Link>
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
        .announcement { padding: 10px; background: #70424f; color: white; text-align: center; font-size: 10px; letter-spacing: 2px; }
        header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 7%; border-bottom: 1px solid #f0e3e1; }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand > span { color: #bd808b; font-size: 38px; }
        .brand strong, .brand small { display: block; }
        .brand strong { font: 22px Georgia, serif; }
        .brand small { margin-top: 5px; color: #a47c7e; font-size: 8px; letter-spacing: 1.7px; }
        nav { display: flex; gap: 23px; color: #715d60; font-size: 12px; }
        .hero { position: relative; display: grid; place-items: center; min-height: 470px; padding: 60px 20px; background-position: center; background-size: cover; text-align: center; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, #2d1722b8, #2d17225c); }
        .hero-content { position: relative; z-index: 1; max-width: 690px; color: white; }
        .eyebrow { color: #f0d0d3; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 { margin: 20px 0; font: 400 clamp(42px, 6vw, 68px) Georgia, serif; line-height: 1.15; }
        .hero h1 em { color: #f1c4cb; font-weight: 400; }
        .hero-content > p { max-width: 550px; margin: 0 auto; font-size: 13px; line-height: 2; }
        .hero-button { display: inline-block; margin-top: 25px; padding: 16px 22px; background: #fffaf8; color: #70424f; font-size: 10px; letter-spacing: 1px; }
        .intro { max-width: 680px; margin: auto; padding: 65px 25px 35px; text-align: center; }
        .intro > span, .personal > span { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .intro h2, .personal h2 { margin: 15px 0; font: 400 34px Georgia, serif; line-height: 1.3; }
        .intro h2 em, .personal h2 em { color: #b87884; font-weight: 400; }
        .intro p, .personal > p { color: #806e70; font-size: 12px; line-height: 2; }
        .ideas { max-width: 900px; margin: auto; padding: 15px 25px 65px; }
        .idea-card { display: flex; align-items: center; gap: 22px; padding: 23px 12px; border-bottom: 1px solid #eadbd9; transition: padding .2s; }
        .idea-card:hover { padding-left: 20px; }
        .idea-number { color: #b87884; font-size: 11px; letter-spacing: 1px; }
        .idea-card > div { flex: 1; }
        .idea-card h3 { margin: 0 0 8px; font: 400 23px Georgia, serif; }
        .idea-card p { margin: 0; color: #806e70; font-size: 11px; line-height: 1.8; }
        .arrow { color: #a66c78; font-size: 22px; }
        .personal { max-width: 850px; margin: 0 auto 65px; padding: 40px 25px; background: #f8eeeb; text-align: center; }
        .personal-icon { margin-bottom: 12px; color: #b87884; font-size: 38px; }
        .personal h2 { font-size: 32px; }
        .personal > p { max-width: 510px; margin: 0 auto; }
        .personal > a { display: inline-block; margin-top: 23px; padding: 16px 20px; background: #70424f; color: white; font-size: 9px; letter-spacing: 1px; }
        .bottom { padding: 42px 20px; background: #70424f; color: white; text-align: center; }
        .bottom h2 { font: 400 30px Georgia, serif; }
        .bottom > a { display: inline-block; margin-top: 10px; padding: 14px 20px; border: 1px solid #d8b2b9; font-size: 10px; letter-spacing: 1px; }
        footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 28px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        .footer-brand { font: 18px Georgia, serif; color: #402d32; }
        footer div { display: flex; flex-wrap: wrap; gap: 18px; }
        @media (max-width: 600px) {
          header { padding: 15px 5%; flex-wrap: wrap; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; gap: 8px; padding-top: 12px; border-top: 1px solid #f0e3e1; font-size: 10px; }
          .hero { min-height: 420px; padding: 45px 6%; }
          .intro { padding: 45px 6% 25px; }
          .intro h2, .personal h2 { font-size: 29px; }
          .ideas { padding: 10px 5% 45px; }
          .idea-card { gap: 13px; padding: 20px 3px; }
          .idea-card h3 { font-size: 20px; }
          .idea-card p { font-size: 10px; }
          .personal { margin: 0 5% 45px; padding: 30px 18px; }
          footer { padding: 25px 5%; }
          footer div { width: 100%; justify-content: space-between; gap: 10px; }
        }
      `}</style>
    </main>
  );
}
