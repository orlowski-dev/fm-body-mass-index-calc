import "./BmiMeansSection.scss";

const BmiMeansSection = () => {
  return (
    <section className="bmi-means-section">
      <div className="bg-image"></div>
      <img
        src="/images/image-man-eating.webp"
        alt="image man eating"
        height={534}
        width={534}
      />
      <article>
        <h2>What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </article>
    </section>
  );
};

export default BmiMeansSection;
