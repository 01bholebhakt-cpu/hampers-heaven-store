
import Link from "next/link";

const collections = [
  {
    number: "01",
    name: "Luxury Gift Boxes",
    subtitle: "A LITTLE EXTRA LUXURY",
    description:
      "Thoughtfully arranged gifts with an elegant presentation for unforgettable moments.",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1000&q=85",
    href: "/shop",
  },
  {
    number: "02",
    name: "Chocolate Hampers",
    subtitle: "SWEET LITTLE MOMENTS",
    description:
      "Chocolate-inspired surprises for sweet celebrations and the people you adore.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85",
    href: "/shop",
  },
  {
    number: "03",
    name: "Flowers & Romance",
    subtitle: "SAY IT WITH FLOWERS",
    description:
      "Beautiful floral gifting for anniversaries, thoughtful gestures and romantic surprises.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
    href: "/shop",
  },
  {
    number: "04",
    name: "Celebration Boxes",
    subtitle: "MAKE IT MEMORABLE",
    description:
      "Celebrate birthdays, milestones and achievements with a gift that feels personal.",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1000&q=85",
    href: "/shop",
  },
  {
    number: "05",
    name: "Personalised Gifts",
    subtitle: "MADE MORE MEANINGFUL",
    description:
      "Explore gifting ideas that can be discussed and customised around your occasion.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85",
    href: "/gift-finder",
  },
  {
    number: "06",
    name: "Just Because",
    subtitle: "NO REASON NEEDED",
    description:
      "Because sometimes the best surprise is the one nobody was expecting.",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85",
    href: "/gift-finder",
  },
];

export default function GiftBoxesPage() {
  return (
    <main className="boxes-page">
      <div className="announcement">
        THOUGHTFUL GIFTS. BEAUTIFUL MEMORIES. ♡
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
          <Link href="/gift-finder">Gift Finder</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <span className="eyebrow">THE ART OF THOUGHTFUL GIVING</span>
        <h1>Beautiful Boxes. <em>Beautiful Feelings.</em></h1>
        <p>
          Discover thoughtful gifting collections for every person, every
          celebration and every little moment in between.
        </p>
        <Link href="/shop" className="hero-button">
          EXPLORE ALL GIFTS ↗
        </Link>
      </section>

      <section className="intro">
        <span>CURATED WITH LOVE</span>
        <h2>Find something <em>meaningful.</em></h2>
        <p>
          From elegant gift boxes to sweet surprises, find a collection that
          says what words sometimes cannot.
        </p>
      </section>

      <section className="collections">
        {collections.map((item, index) => (
          <article className="collection-card" key={item.number}>
            <Link href={item.href} className="collection-image">
              <img src={item.image} alt={item.name} />
              <span className="collection-number">{item.number}</span>
              <span className="image-arrow">↗</span>
            </Link>

            <div className="collection-info">
              <span className="subtitle">{item.subtitle}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <Link href={item.href} className="collection-link">
                EXPLORE COLLECTION <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="personal">
        <div className="personal-image">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1100&q=85"
            alt="Thoughtfully wrapped gift box"
          />
        </div>
        <div className="personal-copy">
          <span>NOT SURE WHAT TO CHOOSE?</span>
          <h2>Let's find the gift that feels <em>just right.</em></h2>
          <p>
            Tell us the occasion, who you are gifting and your budget. We'll
            help you explore ideas for your special person.
          </p>
          <Link href="/gift-finder">FIND YOUR PERFECT GIFT ↗</Link>
        </div>
      </section>

      <section className="bottom-cta">
        <span>A LITTLE THOUGHT GOES A LONG WAY</span>
        <h2>Make someone's day a little more beautiful.</h2>
        <Link href="/shop">SHOP THE COLLECTION ↗</Link>
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
        nav { display: flex; gap: 24px; color: #715d60; font-size: 12px; }
        .hero { padding: 78px 20px 85px; background: #f8eeeb; text-align: center; }
        .eyebrow, .intro > span, .personal-copy > span, .bottom-cta > span { color: #a66c78; font-size: 10px; font-weight: 700; letter-spacing: 2px; }
        .hero h1 { max-width: 800px; margin: 19px auto 15px; font: 400 clamp(38px, 5vw, 58px) Georgia, serif; line-height: 1.2; }
        .hero h1 em, .intro h2 em, .personal-copy h2 em { color: #b87884; font-weight: 400; }
        .hero > p { max-width: 560px; margin: 0 auto; color: #806e70; font-size: 13px; line-height: 2; }
        .hero-button, .personal-copy > a, .bottom-cta > a { display: inline-block; margin-top: 25px; padding: 16px 22px; background: #70424f; color: white; font-size: 10px; letter-spacing: 1.2px; }
        .intro { max-width: 680px; margin: auto; padding: 65px 25px 35px; text-align: center; }
        .intro h2 { margin: 14px 0; font: 400 36px Georgia, serif; }
        .intro p { color: #806e70; font-size: 12px; line-height: 1.9; }
        .collections { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 36px 23px; max-width: 1200px; margin: auto; padding: 25px 30px 75px; }
        .collection-card { min-width: 0; }
        .collection-image { position: relative; display: block; overflow: hidden; aspect-ratio: 4 / 4.4; background: #f8eeeb; }
        .collection-image img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .45s; }
        .collection-card:hover .collection-image img { transform: scale(1.05); }
        .collection-number { position: absolute; top: 14px; left: 14px; display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: #fffaf8eF; color: #70424f; font-size: 10px; }
        .image-arrow { position: absolute; right: 14px; bottom: 14px; display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; background: white; color: #70424f; font-size: 18px; }
        .collection-info { padding: 20px 3px 0; }
        .subtitle { color: #a47c7e; font-size: 8px; letter-spacing: 1.5px; }
        .collection-info h3 { margin: 10px 0; font: 400 24px Georgia, serif; }
        .collection-info p { min-height: 58px; margin: 0; color: #806e70; font-size: 11px; line-height: 1.9; }
        .collection-link { display: inline-block; margin-top: 16px; padding-bottom: 5px; border-bottom: 1px solid #c99ca3; color: #70424f; font-size: 9px; letter-spacing: .8px; }
        .collection-link span { margin-left: 8px; }
        .personal { display: grid; grid-template-columns: 1fr 1fr; max-width: 1140px; margin: 0 auto 75px; background: #f8eeeb; }
        .personal-image { min-height: 380px; overflow: hidden; }
        .personal-image img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .personal-copy { align-self: center; padding: 45px; }
        .personal-copy h2 { margin: 17px 0; font: 400 36px Georgia, serif; line-height: 1.3; }
        .personal-copy p { color: #806e70; font-size: 12px; line-height: 2; }
        .personal-copy > a { margin-top: 15px; }
        .bottom-cta { padding: 60px 20px 70px; background: #70424f; color: white; text-align: center; }
        .bottom-cta > span { color: #edc8cc; }
        .bottom-cta h2 { max-width: 600px; margin: 16px auto 0; font: 400 clamp(28px, 4vw, 39px) Georgia, serif; line-height: 1.35; }
        .bottom-cta > a { border: 1px solid #d8b2b9; background: transparent; }
        footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 28px 7%; border-top: 1px solid #eee1df; color: #826d70; font-size: 11px; }
        .footer-brand { font: 18px Georgia, serif; color: #402d32; }
        footer div { display: flex; flex-wrap: wrap; gap: 18px; }
        @media (max-width: 850px) { .collections { grid-template-columns: repeat(2, minmax(0, 1fr)); } .personal-copy { padding: 28px; } .personal-copy h2 { font-size: 29px; } }
        @media (max-width: 600px) {
          header { padding: 15px 5%; flex-wrap: wrap; }
          .brand strong { font-size: 19px; }
          .brand > span { font-size: 30px; }
          nav { width: 100%; justify-content: space-between; gap: 10px; padding-top: 12px; border-top: 1px solid #f0e3e1; }
          .hero { padding: 50px 6%; }
          .intro { padding: 45px 6% 20px; }
          .intro h2 { font-size: 29px; }
          .collections { gap: 25px 12px; padding: 20px 5% 50px; }
          .collection-info h3 { font-size: 19px; }
          .collection-info p { min-height: 80px; font-size: 10px; }
          .personal { grid-template-columns: 1fr; margin: 0 5% 50px; }
          .personal-image { min-height: 250px; height: 250px; }
          .personal-copy { padding: 28px 22px; }
          .personal-copy h2 { font-size: 30px; }
          footer { padding: 25px 5%; }
          footer div { width: 100%; justify-content: space-between; gap: 12px; }
        }
      `}</style>
    </main>
  );
}
