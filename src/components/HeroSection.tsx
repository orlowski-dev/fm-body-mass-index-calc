import "./HeroSection.scss";

const HeroSection = () => (
  <section className="hero-section">
    <div className="bg"></div>
    <article className="content">
      <section>
        <img src="/images/logo.svg" alt="logo" width={40} height={40} />
        <h1>Body Mass Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </section>
      <div className="calculator"></div>
    </article>
  </section>
);

export default HeroSection;
