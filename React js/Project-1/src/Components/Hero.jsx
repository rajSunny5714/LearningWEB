const Hero = () => {
    return ( 
        <main className="hero container">
        <div className="hero-content">
            <h1> Your Feet Deserve The Best</h1>
            <p>
            Quality and style. Nike backs up its marketing with quality products and continuous design 
            experimentation, seeking to strike a balance between what consumers want and the functional 
            needs of athletes. Each product division is positioned as a unique offering to build loyalty
            within a particular sport.
            </p>

            <div className="hero-button">
                <button>Shop Now</button>
                <button className="secondary-button">Category</button>
            </div>

            <div
            className="shopping">
                <p>Also Avialable On</p>
            </div>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon-logo" />
                <img src="/images/flipkart.png" alt="flipcart-logo" />
           
            </div>
        </div>
        <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoes-image" />
           
        </div>
    </main>
    );
};

export default Hero;