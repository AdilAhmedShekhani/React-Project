const HeroSection = () => {
  return (
    <main className="main container">
      <div className="main-content">
        <h1>YOUR STYLE DESERVE THE BEST</h1>
        <p>
          An homage to Louis Vuitton’s first store, opened in 1854 on Rue
          Neuve-des-Capucines in Paris, the Capucines exemplifies the artisanal
          savoir-faire of this historic area. Unveiled in an array of color and
          sizes, the model, worn in multiple ways, epitomizes timeless elegance.
        </p>
        <div className="main-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" width={30} alt="amazon-logo" />
            <img src="/images/noon.png" width={30} alt="noon-logo" />
          </div>
        </div>
      </div>
      <div className="main-image">
        <img src="/images/main.png" alt="main-img" />
      </div>
    </main>
  );
};

export default HeroSection;
