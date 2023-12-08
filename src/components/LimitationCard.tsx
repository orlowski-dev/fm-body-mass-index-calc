import "./LimitationCard.scss";

interface Props {
  icon: string;
  title: string;
  text: string;
}

const LimitationCard = (props: Props) => (
  <article className="limitation-card">
    <header>
      <img src={props.icon} alt="icon" />
      <h3>{props.title}</h3>
    </header>
    <p>{props.text}</p>
  </article>
);

export default LimitationCard;
