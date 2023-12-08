import "./Tip.scss";

interface Props {
  icon: string;
  title: string;
  text: string;
}

const Tip = ({ icon, title, text }: Props) => (
  <article className="tip">
    <div>
      <img src={icon} alt="icon" />
    </div>
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  </article>
);

export default Tip;
