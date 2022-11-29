import { Component } from "react";
import SingleCard from "../single-card/single-card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <SingleCard monster={monster}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
