import { useRef } from "react";

const assetPath = "/assets/trustbar";

const categories = [
  { label: "Cinema", icon: "64ab6.svg", featured: true },
  { label: "Concert", icon: "dd415.svg" },
  { label: "Art", icon: "ca5e8.svg" },
  { label: "Music", icon: "597a7.svg" },
  { label: "Brunches", icon: "5f64a.svg" },
  { label: "Sport", icon: "12761.svg" },
  { label: "Scientific", icon: "b22ed.svg", featured: true },
  { label: "Business", icon: "af92e.svg", featured: true },
  { label: "Technology", icon: "d7aea.svg" },
  { label: "Realstate", icon: "d4740.svg", featured: true },
  { label: "Automotive", icon: "c5582.svg" },
  { label: "Medicine", icon: "40014.svg" },
  { label: "Fashion", icon: "e1954.svg" },
  { label: "Outdoor", icon: "269ed.svg" },
  { label: "Education", icon: "a5ede.svg", featured: true },
  { label: "Design", icon: "972db.svg" },
  { label: "Nightlife", icon: "850c0.svg" },
  { label: "Zoo", icon: "ca5e8.svg" },
];

export function TrustBar() {
  const rail = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    rail.current?.scrollBy({ left: direction * 460, behavior: "smooth" });
  };

  return (
    <section className="trust-bar category-scroller" aria-label="Catégories d’événements">
      <style>{`
        @font-face {
          font-family: "Nunito:Regular";
          src: url("https://static.figma.com/font/Nunito_wght__1") format("woff2");
          font-style: normal;
          font-weight: 400;
        }
        @font-face {
          font-family: "Urbanist:SemiBold";
          src: url("https://static.figma.com/font/Urbanist_wght__2") format("woff2");
          font-style: normal;
          font-weight: 600;
        }
        .trust-bar.category-scroller {
          position: relative;
          justify-content: flex-start;
          gap: 13px;
          min-height: 89px;
          padding: 17px 0;
          overflow: hidden;
          background: #f7f7f2;
          border-color: #dfe1e4;
          text-transform: none;
          letter-spacing: 0;
        }
        .category-scroller .category-arrow {
          width: 55px;
          height: 55px;
          min-width: 55px;
          padding: 0;
          border: 0;
          border-radius: 16px;
          background: transparent;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: transform .2s ease;
          z-index: 2;
        }
        .category-scroller .category-arrow:hover {
          transform: scale(.94);
        }
        .category-scroller .category-arrow:first-of-type {
          margin-left: 0;
          transform: rotate(180deg);
        }
        .category-scroller .category-arrow:first-of-type:hover {
          transform: rotate(180deg) scale(.94);
        }
        .category-scroller .category-arrow:last-of-type {
          position: absolute;
          right: 0;
          top: 17px;
          box-shadow: 0 0 24px 20px #f7f7f2;
        }
        .category-scroller .category-arrow:last-of-type:hover {
          transform: scale(.94);
        }
        .category-scroller .category-arrow img {
          display: block;
        }
        .category-scroller .category-rail {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-behavior: smooth;
          scroll-snap-type: x proximity;
          scrollbar-width: none;
          padding-right: 76px;
        }
        .category-scroller .category-rail::-webkit-scrollbar {
          display: none;
        }
        .category-scroller .category-chip {
          flex: 0 0 auto;
          min-height: 48px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border: .3px solid #dfe1e4;
          border-radius: 100px;
          background: #fff;
          color: #000441;
          cursor: pointer;
          scroll-snap-align: start;
          font-family: "Urbanist:SemiBold", "Manrope", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: normal;
          white-space: nowrap;
          transition: background-color .2s ease, transform .2s ease;
        }
        .category-scroller .category-chip[data-featured="true"] {
          background: #16bda0;
          border-color: #16bda0;
        }
        .category-scroller .category-chip:hover {
          background: #16bda0;
          border-color: #16bda0;
          transform: translateY(-2px);
        }
        .category-scroller .category-chip img {
          display: block;
          flex: 0 0 auto;
        }
        @media (max-width: 900px) {
          .trust-bar.category-scroller {
            flex-wrap: nowrap;
            gap: 8px;
            padding: 14px 0;
          }
          .category-scroller .category-arrow {
            width: 48px;
            height: 48px;
            min-width: 48px;
            overflow: hidden;
          }
          .category-scroller .category-arrow:first-of-type {
            display: none;
          }
          .category-scroller .category-arrow:last-of-type {
            top: 14px;
          }
          .category-scroller .category-rail {
            padding-left: 14px;
          }
          .category-scroller .category-chip {
            min-height: 46px;
            padding: 11px 17px;
          }
        }
      `}</style>

      <button
        className="category-arrow"
        type="button"
        aria-label="Faire défiler vers la gauche"
        onClick={() => scroll(-1)}
      >
        <img src={`${assetPath}/ef8e2.svg`} alt="" />
      </button>

      <div className="category-rail" ref={rail}>
        {categories.map((category) => (
          <button
            className="category-chip"
            data-featured={category.featured ? "true" : "false"}
            type="button"
            key={category.label}
          >
            <img src={`${assetPath}/${category.icon}`} alt="" />
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      <button
        className="category-arrow"
        type="button"
        aria-label="Faire défiler vers la droite"
        onClick={() => scroll(1)}
      >
        <img src={`${assetPath}/ef8e2.svg`} alt="" />
      </button>
    </section>
  );
}
