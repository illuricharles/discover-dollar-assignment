import background from "../../assets/images/background-3.jpg"
import "./index.css"
const HeroSection = () => {
    return (
      <section className="hero-section">
        <div className="container hero-container">
          <div>
            <h1 className="heading-primary">Shop everything you need, Discover your perfect look</h1>
            <p className="hero-description">Browse thousands of products, get exclusive deals, shop your favorite brands, find what suits you best, enjoy fast and secure checkout, and upgrade your wardrobe effortlessly.</p>
            <div className="hero-section-btn-container">
              <a href="#" className="hero-btn btn-primary">Shop Now</a>
              <a href="#" className="hero-btn btn">Learn more</a>
            </div>
          </div>
          <div>
            <img className="hero-section-img" src={background} alt="cloths" />
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection