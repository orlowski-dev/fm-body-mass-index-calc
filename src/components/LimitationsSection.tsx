import LimitationCard from "./LimitationCard";
import "./LimitationsSection.scss";

const LimitationsSection = () => (
  <section className="limitations-section">
    <article className="content">
      <header className="header">
        <h2>Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </header>
      <section className="cards-section">
        <div className="bg"></div>
        <div className="content">
          <LimitationCard
            icon="/images/icon-gender.svg"
            title="Gender"
            text="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          />
          <LimitationCard
            icon="/images/icon-age.svg"
            title="Age"
            text="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          />
          <LimitationCard
            icon="/images/icon-muscle.svg"
            title="Muscle"
            text="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          />
          <LimitationCard
            icon="/images/icon-pregnancy.svg"
            title="Pregnancy"
            text="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
          />
          <LimitationCard
            icon="/images/icon-race.svg"
            title="Race"
            text="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          />
        </div>
      </section>
    </article>
  </section>
);

export default LimitationsSection;
