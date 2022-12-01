import SingleCard from "../single-card/single-card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <SingleCard monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
