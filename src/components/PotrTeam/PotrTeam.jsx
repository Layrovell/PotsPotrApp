import React from "react";
import Owners from "../../images/photos/potr-team/owners.jpg";

export const PotrTeam = () => {
  const PotrTeamText = () => (
    <div className="potr-team__text">
      <p className="potr-team__text--item">
        Andy and Martin are experienced product designers with a love of plants
        and the environment. They have over ten years combined industry
        experience in bringing products to market at some of the worlds largest
        consumer product companies.
      </p>
      <p className="potr-team__text--item">
        Having studied Product Design Engineering together at the Glasgow School
        of Art, they have a long history of working as a team on a variety
        of design projects.
      </p>
    </div>
  );

  const PotrTeamOwners = () => (
    <div className="potr-team__img-wrapper">
      <img src={Owners} alt="img" className="potr-team__img pulse" />
    </div>
  );

  return (
    <article className="potr-team" id="POTRteam">
      <div className="potr-team__bg"></div>
      <div className="content-container potr-team__content-container">
        <h2 className="potr-team__title">Meet the POTR team!</h2>
        <span className="potr-team__tagline potr-team__tagline--first transparent">
          Martin
        </span>
        <div className="potr-team__owners">
          <PotrTeamText />
          <PotrTeamOwners />
        </div>
        <span className="potr-team__tagline potr-team__tagline--second transparent">
          Andy
        </span>
      </div>
    </article>
  );
};
