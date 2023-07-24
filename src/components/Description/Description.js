import React from "react";
import { useParams } from "react-router-dom";
import "../Description/Description.css";
import housing from "../../data/Housing.json";
import Dropdown from "../Dropdown/Dropdown";
import Tag from "./Tag";
import Stars from "./Stars";
import redStar from "../../assets/icons/red-star.png";
import greyStar from "../../assets/icons/grey-star.png";

function Description() {
  const { id } = useParams();
  console.log({ id });
  const card = housing.find((item) => item.id === id);
  return (
    <div id="description">
      <div id="descriptionHeader">
        <div id="descriptionTitleLocation">
          <h2>{card.title}</h2>
          <p>{card.location}</p>
        </div>
        <div id="descriptionNamePicture">
          <p>{card.host.name}</p>
          <img src={card.host.picture} alt="profil" />
        </div>
      </div>
      <div id="tagAndRating">
        <div id="descriptionTags">
          {card.tags.map((tag, index) => (
            <Tag key={index} tags={tag} />
          ))}
        </div>
        <div id="descriptionRating">
          <Stars star={greyStar} rating={card.rating} filledStar={redStar} />
        </div>
      </div>
      <div id="descriptionDropdown">
        <Dropdown title="Description" text={card.description} />
        <Dropdown title="Equipements" equipments={card.equipments} />
      </div>
    </div>
  );
}

export default Description;
