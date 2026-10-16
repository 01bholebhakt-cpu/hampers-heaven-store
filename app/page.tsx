
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const WA = "919122930001";

const products = [
  { id: 1, name: "The Blush Bouquet", category: "Bouquets", price: 1499, image: "photo-1490750967868-88aa4486c946", tag: "BESTSELLER" },
  { id: 2, name: "The Grand Gift Hamper", category: "Hampers", price: 2499, image: "photo-1549465220-1a8b9238cd48", tag: "MOST LOVED" },
  { id: 3, name: "Chocolate Indulgence", category: "Chocolates", price: 999, image: "photo-1481391319762-47dff72954d9", tag: "SWEETEST GIFT" },
  { id: 4, name: "A Little Love Box", category: "Personalized", price: 1299, image: "photo-1512909006721-3d6018887383", tag: "THOUGHTFUL" },
  { id: 5, name: "Pink Rose Collection", category: "Bouquets", price: 1799, image: "photo-1520763185298-1b434c919102", tag: "SIGNATURE" },
  { id: 6, name: "Birthday Celebration", category: "Occasions", price: 1899, image: "photo-1530103862676-de8c9debad1d", tag: "CELEBRATE" },
  { id: 7, name: "Sweet Moments Hamper", category: "Hampers", price: 1599, image: "photo-1607344645866-009c320c5ab8", tag: "GIFT FAVOURITE" },
  { id: 8, name: "Chocolate Gift Box", category: "Chocolates", price: 1199, image: "photo-1549007994-cb92caebd54b", tag: "A SWEET SURPRISE" },
];

const imageUrl = (id: string, width = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function Home() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);

  const visibleProducts = useMemo(
    () => products.filter((p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    ),
    [category, search]
  );

  const addToCart = (id: number) => {
    setCart((old) => {
      const found = old.find((p) => p.id === id);
      return found
        ? old.map((p) => p.id === id ? { ...p, qty: p.qty + 1 } : p)
        : [...old, { id, qty: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, p) => sum + p.qty, 0);

  const orderOnWhatsApp = (id: number) => {
    const p = products.find((item) => item.id === id);
    if (!p) return;
    const text = `Hello Hampers Heaven! I am interested in ${p.name} priced at ₹${p.price.toLocaleString("en-IN")}. Please confirm availability and delivery.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main>
      <div className="announcement">
        THOUGHTFUL GIFTS · BEAUTIFUL MOMENTS · MADE WITH LOVE
      </div>

      <header className="header">
        <Link href="/" className="brand">
          <span className="brand-mark">H</span>
          <span>
            <strong>Hampers Heaven</strong>
            <small>THE ART OF THOUGHTFUL GIFTING</small>
          </span>
        </Link>

        <nav>
          <a href="#collections">Collections</a>
          <a href="#shop">Shop All</a>
          <a href="#story">Our Story</a>
        </nav>

        <a className="bag" href="#shop">
          BAG <span>{cartCount}</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> THE GIFTING EDITION</div>
          <h1>Make them feel<br /><i>extra special.</i></h1>
          <p>
            Beautifully curated gifts for the people who make
            life beautiful. Find something they will remember.
          </p>
          <a href="#shop" className="primary">DISCOVER THE COLLECTION ↗</a>
          <div className="hero-note">FOR THE MOMENTS THAT MATTER.</div>
        </div>

        <div className="hero-image">
          <img
            src={imageUrl("photo-1512909006721-3d6018887383", 1400)}
            alt="Beautifully wrapped gifts"
          />
          <div className="floating-note">
            <span>THE PERFECT LITTLE SURPRISE</span>
            <strong>Thoughtfully chosen.<br />Beautifully remembered.</strong>
          </div>
          <div className="image-number">01 / THE GIFT COLLECTION</div>
        </div>
      </section>

      <div className="promise">
        <div><b>♡</b><span>Thoughtfully Curated<small>Gifts for every feeling</small></span></div>
        <div><b>✳</b><span>Beautifully Presented<small>Details that delight</small></span></div>
        <div><b>✧</b><span>Made Personal<small>Your message, your moment</small></span></div>
        <div><b>↗</b><span>Easy Ordering<small>Just a few simple steps</small></span></div>
      </div>

      <section className="section" id="collections">
        <div className="section-heading">
          <div><span className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</span>
            <h2>Find their kind of lovely.</h2></div>
          <a href="#shop" className="underlink">EXPLORE ALL GIFTS ↗</a>
        </div>
        <div className="categories">
          {[
            ["Bouquets", "Flowers that say it all", "photo-1490750967868-88aa4486c946"],
            ["Hampers", "A world of little surprises", "photo-1549465220-1a8b9238cd48"],
            ["Chocolates", "Something sweet, always", "photo-1481391319762-47dff72954d9"],
            ["Personalized", "A gift made uniquely theirs", "photo-1512909006721-3d6018887383"],
          ].map(([name, caption, image]) => (
            <button key={name} className="category-card"
              onClick={() => { setCategory(name); document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }); }}>
              <div className="category-photo"><img src={imageUrl(image)} alt={name} loading="lazy" /></div>
              <div className="category-title"><span><strong>{name}</strong><small>{caption}</small></span><b>↗</b></div>
            </button>
          ))}
        </div>
      </section>

      <section className="shop" id="shop">
        <div className="shop-inner">
          <div className="center-heading">
            <span className="eyebrow">THOUGHTFULLY PICKED FOR YOU</span>
            <h2>The signature collection.</h2>
            <p>Little luxuries. Meaningful gestures. Gifts worth giving.</p>
          </div>

          <div className="shop-tools">
            <div className="filters">
              {["All", "Bouquets", "Hampers", "Chocolates", "Personalized", "Occasions"].map((c) => (
                <button key={c} onClick={() => setCategory(c)}
                  className={category === c ? "filter active" : "filter"}>{c}</button>
              ))}
            </div>
            <input value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Find something lovely..." aria-label="Search products" />
          </div>

          <div className="products">
            {visibleProducts.map((p) => (
              <article className="product" key={p.id}>
                <div className="product-photo">
                  <img src={imageUrl(p.image)} alt={p.name} loading="lazy" />
                  <span className="tag">{p.tag}</span>
                  <button className="quick-add" onClick={() => addToCart(p.id)} aria-label="Add to bag">+</button>
                </div>
                <div className="product-info">
                  <div className="product-category">{p.category}</div>
                  <h3>{p.name}</h3>
                  <div className="product-bottom">
                    <strong>₹{p.price.toLocaleString("en-IN")}</strong>
                    <button onClick={() => orderOnWhatsApp(p.id)}>ENQUIRE ↗</button>
                  </div>
                  <button className="add-button" onClick={() => addToCart(p.id)}>
                    ADD TO BAG <span>＋</span>
                  </button>
                </div>
              </article>
            ))}
            {visibleProducts.length === 0 && <p className="no-results">No matching gifts. Try another search.</p>}
          </div>
          <p className="demo-note">Demo collection · Prices and product availability must be confirmed by the store.</p>
        </div>
      </section>

      <section className="personal" id="story">
        <div className="personal-photo">
          <img src={imageUrl("photo-1549465220-1a8b9238cd48", 1000)} alt="Gift boxes" loading="lazy" />
        </div>
        <div className="personal-copy">
          <span className="eyebrow">THE PERSONAL TOUCH</span>
          <h2>Some gifts say<br /><i>what words cannot.</i></h2>
          <p>Add a heartfelt message and make a thoughtful gift feel unmistakably theirs.</p>
          <button className="primary" onClick={() => orderOnWhatsApp(4)}>CREATE A SPECIAL GIFT ↗</button>
        </div>
      </section>

      <section className="closing">
        <span className="eyebrow">A LITTLE LOVE GOES A LONG WAY</span>
        <h2>Make a moment<br /><i>mean more.</i></h2>
        <a href="#shop" className="primary">FIND YOUR PERFECT GIFT ↗</a>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-mark">H</div>
            <h3>Hampers Heaven</h3>
            <p>Thoughtful gifts for the moments<br />you want to make unforgettable.</p>
          </div>
          <div><b>DISCOVER</b><a href="#collections">Collections</a><a href="#shop">Shop All</a><a href="#story">Personalized Gifts</a></div>
          <div><b>WE'RE HERE TO HELP</b><p>Questions about a gift or delivery?</p>
            <a target="_blank" rel="noreferrer" href={`https://wa.me/${WA}`}>Contact us on WhatsApp ↗</a></div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Hampers Heaven · A gifting experience made with care.</div>
      </footer>

      <style jsx global>{`
        *{box-sizing:border-box}
        html{scroll-behavior:smooth;scroll-padding-top:100px}
        body{margin:0;background:#fffaf8;color:#38242b;font-family:"DM Sans",sans-serif}
        a{color:inherit;text-decoration:none}
        button,input{font:inherit}
        button{cursor:pointer}
        img{display:block;width:100%;height:100%;object-fit:cover}
        .announcement{background:#37212b;color:#f6e4e8;text-align:center;padding:10px;font-size:9px;letter-spacing:2px}
        .header{height:86px;padding:0 5%;display:flex;align-items:center;justify-content:space-between;background:#fffaf8;position:sticky;top:0;z-index:20;border-bottom:1px solid #eddee1}
        .brand{display:flex;align-items:center;gap:10px}
        .brand-mark{height:42px;width:42px;border:1px solid #a14b65;border-radius:50%;display:grid;place-items:center;font:28px Georgia;color:#922746}
        .brand strong{font:23px "Playfair Display",serif;color:#812640;display:block;font-weight:400}
        .brand small{font-size:7px;letter-spacing:1.7px;display:block;text-align:center;margin-top:4px;color:#92767e}
        nav{display:flex;gap:28px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#654c55}
        nav a:hover{color:#922746}
        .bag{background:#922746;color:white;padding:12px 15px;font-size:10px;letter-spacing:1px}
        .bag span{background:white;color:#922746;border-radius:50%;padding:4px 7px;margin-left:8px}
        .hero{margin:20px auto 0;width:94%;display:grid;grid-template-columns:.9fr 1.1fr;min-height:590px;background:#f4e1e4}
        .hero-copy{padding:clamp(30px,5vw,80px);align-self:center}
        .eyebrow{font-size:9px;letter-spacing:2px;color:#922746;font-weight:700}
        .eyebrow span{display:inline-block;width:23px;height:1px;background:#922746;vertical-align:middle;margin-right:9px}
        .hero h1,.personal h2,.closing h2{font:clamp(46px,5.3vw,75px)/1.05 "Playfair Display",serif;letter-spacing:-1.5px;font-weight:400;margin:25px 0}
        h1 i,h2 i{color:#922746;font-weight:400}
        .hero-copy p,.personal-copy p{max-width:390px;font-size:12px;line-height:2;color:#7b626a}
        .primary{display:inline-block;background:#922746;color:white;padding:16px 19px;border:0;font-size:9px;letter-spacing:1px;font-weight:600;margin-top:17px}
        .primary:hover{background:#6e1834}
        .hero-note{font-size:8px;letter-spacing:1.4px;margin-top:24px;color:#8d7079}
        .hero-image{position:relative;min-height:590px;background:#e8d3d9}
        .hero-image>img{position:absolute;inset:0}
        .floating-note{position:absolute;left:22px;bottom:24px;background:#fffaf4;padding:17px 20px}
        .floating-note span{font-size:8px;letter-spacing:1.4px;color:#922746}
        .floating-note strong{font:19px/1.5 "Playfair Display",serif;display:block;font-weight:400;margin-top:5px}
        .image-number{position:absolute;right:15px;bottom:12px;color:white;font-size:8px;letter-spacing:1px;text-shadow:0 1px 6px #333}
        .promise{width:90%;margin:auto;display:grid;grid-template-columns:repeat(4,1fr);padding:27px 0;border-bottom:1px solid #ead9dd;gap:15px}
        .promise>div{display:flex;align-items:center;justify-content:center;gap:12px;font-size:10px}
        .promise b{font-size:23px;color:#922746;font-weight:400}
        .promise small{display:block;color:#927b82;font-size:9px;margin-top:5px}
        .section{width:90%;margin:auto;padding:82px 0}
        .section-heading{display:flex;justify-content:space-between;align-items:end;margin-bottom:28px}
        .section h2,.center-heading h2{font:clamp(32px,4vw,48px)/1.15 "Playfair Display",serif;font-weight:400;margin:12px 0}
        .underlink{font-size:9px;color:#922746;border-bottom:1px solid #cba3ae;padding-bottom:7px}
        .categories{display:grid;grid-template-columns:repeat(4,1fr);gap:19px}
        .category-card{padding:0;text-align:left;background:none;border:0;color:inherit;min-width:0}
        .category-photo{height:260px;overflow:hidden;background:#f1e0e5}
        .category-photo img{transition:transform .4s}
        .category-card:hover img,.product:hover .product-photo img{transform:scale(1.04)}
        .category-title{display:flex;justify-content:space-between;align-items:center;padding:13px 2px}
        .category-title strong{font:19px "Playfair Display",serif;font-weight:400}
        .category-title small{display:block;font-size:9px;color:#927b82;margin-top:6px}
        .category-title b{font-size:20px;color:#922746;font-weight:400}
        .shop{background:#f7ebed;padding:75px 0}
        .shop-inner{width:90%;margin:auto}
        .center-heading{text-align:center}
        .center-heading p{font-size:11px;color:#8b727a}
        .shop-tools{display:flex;justify-content:space-between;align-items:center;gap:15px;flex-wrap:wrap;margin:30px 0}
        .filters{display:flex;gap:6px;flex-wrap:wrap}
        .filter{border:1px solid #e5ccd3;background:#fffaf8;color:#755963;padding:10px 13px;font-size:9px}
        .filter.active,.filter:hover{background:#922746;color:white;border-color:#922746}
        .shop-tools input{padding:12px 14px;width:240px;max-width:100%;border:1px solid #e5ccd3;background:#fffaf8;font-size:10px;outline-color:#922746}
        .products{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}
        .product{background:#fffdfb;min-width:0}
        .product-photo{position:relative;height:330px;overflow:hidden;background:#eedde2}
        .product-photo img{transition:transform .4s}
        .tag{position:absolute;top:12px;left:12px;background:#fffaf8;color:#922746;padding:7px 9px;font-size:7px;letter-spacing:1px}
        .quick-add{position:absolute;right:12px;bottom:12px;width:37px;height:37px;border:0;border-radius:50%;background:#fffaf8;color:#922746;font-size:22px}
        .product-info{padding:16px}
        .product-category{font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:#9b7783}
        .product h3{font:20px "Playfair Display",serif;font-weight:400;margin:9px 0 16px}
        .product-bottom{display:flex;justify-content:space-between;align-items:center}
        .product-bottom strong{color:#922746;font-size:15px}
        .product-bottom button{background:none;border:0;border-bottom:1px solid #d2aab6;padding:5px 0;color:#922746;font-size:8px;letter-spacing:.7px}
        .add-button{width:100%;display:flex;justify-content:space-between;align-items:center;background:#922746;color:white;border:0;padding:12px;margin-top:15px;font-size:9px;letter-spacing:1px}
        .add-button span{font-size:16px}
        .no-results{grid-column:1/-1;text-align:center;padding:40px;color:#806c72}
        .demo-note{text-align:center;font-size:9px;color:#8b727a;margin-top:27px}
        .personal{display:grid;grid-template-columns:1fr 1fr;min-height:480px;background:#f1dce2}
        .personal-photo{height:480px}
        .personal-copy{align-self:center;padding:50px 12%}
        .personal h2{font-size:clamp(38px,4.5vw,58px)}
        .closing{text-align:center;padding:90px 20px;background:#fffaf8}
        .closing h2{font-size:56px}
        .closing .primary{margin-top:0}
        footer{background:#35212a;color:#f8e9ed;padding:45px 5% 16px}
        .footer-main{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:30px;padding-bottom:30px}
        .footer-brand h3{font:23px "Playfair Display",serif;font-weight:400}
        .footer-brand p,footer p,footer a{font-size:10px;line-height:2;color:#d8c2ca}
        .footer-main>div:not(:first-child)>b{font-size:9px;letter-spacing:1.5px;display:block;margin:9px 0 14px}
        .footer-main>div:not(:first-child)>a{display:block}
        .copyright{border-top:1px solid #ffffff22;padding-top:15px;font-size:9px;color:#d8c2ca}
        @media(max-width:950px){nav{gap:13px}.hero{min-height:470px}.hero-image{min-height:470px}.categories{grid-template-columns:repeat(2,1fr)}.category-photo{height:250px}.products{grid-template-columns:repeat(2,minmax(0,1fr))}.product-photo{height:300px}}
        @media(max-width:600px){
          .header{height:68px;padding:0 4%}.brand-mark{width:34px;height:34px;font-size:22px}.brand strong{font-size:18px}.brand small{font-size:6px;letter-spacing:1px}nav{display:none}
          .hero{width:93%;grid-template-columns:1fr}.hero-image{grid-row:1;min-height:0;height:300px}.hero-copy{padding:28px 22px 33px}.hero h1{font-size:48px;margin:18px 0}.floating-note{left:12px;bottom:12px;padding:12px}.floating-note strong{font-size:16px}
          .promise{width:92%;grid-template-columns:1fr 1fr;gap:20px 7px}.promise>div{justify-content:flex-start;font-size:9px}.promise b{font-size:19px}.promise small{font-size:8px}
          .section{width:92%;padding:50px 0}.section-heading{align-items:flex-start;gap:10px}.section h2,.center-heading h2{font-size:32px}.underlink{font-size:8px;white-space:nowrap;margin-top:24px}
          .categories{gap:17px 11px}.category-photo{height:190px}.category-title strong{font-size:16px}.category-title small{font-size:8px}
          .shop{padding:48px 0}.shop-inner{width:92%}.shop-tools{align-items:stretch}.filters{gap:5px}.filter{padding:9px 8px;font-size:8px}.shop-tools input{width:100%}.products{gap:10px}.product-photo{height:220px}.product-info{padding:11px 9px}.product h3{font-size:16px;margin:8px 0 12px}.product-bottom strong{font-size:13px}.product-bottom button{font-size:7px}.add-button{font-size:8px;padding:10px}
          .personal{grid-template-columns:1fr}.personal-photo{height:290px}.personal-copy{padding:32px 7%}.personal h2{font-size:42px}.closing{padding:60px 15px}.closing h2{font-size:43px}
          .footer-main{grid-template-columns:1fr 1fr;gap:20px}.footer-brand{grid-column:1/-1}
        }
      `}</style>
    </main>
  );
}
