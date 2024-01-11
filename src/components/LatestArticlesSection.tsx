import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import GrilledTomatoesContainer from "./GrilledTomatoesContainer";
import TravelSnacksContainer from "./TravelSnacksContainer";

const LatestArticlesSection: FunctionComponent = () => {
  return (
    <section
      className={css`
        position: absolute;
        top: 1615px;
        left: 1554px;
        width: 1225px;
        height: 679px;
        text-align: left;
        font-size: var(--font-size-37xl);
        color: var(--primary);
        font-family: var(--font-source-sans-pro);
      `}
      data-scroll-to="groupSection"
    >
      <h1
        className={css`
          margin: 0;
          position: absolute;
          top: 0px;
          left: 0px;
          font-size: inherit;
          letter-spacing: 0.04em;
          line-height: 42px;
          font-weight: 600;
          font-family: inherit;
          display: inline-block;
          width: 461px;
          height: 84px;
        `}
      >
        Latest Articles
      </h1>
      <GrilledTomatoesContainer
        recipeImageUrl="/grilledtomatoes1846x846-111@2x.png"
        instructionImageUrl="How To Grill Corn"
        propWhiteSpace="unset"
      />
      <TravelSnacksContainer
        recipeImageUrl="Crunchwrap Supreme"
        imageSizeUrl="/mealprepideas846x846-13@2x.png"
        propLeft="422px"
      />
      <TravelSnacksContainer
        recipeImageUrl="Broccoli Cheese Soup"
        imageSizeUrl="/mealprepideas846x846-14@2x.png"
        propLeft="844px"
      />
    </section>
  );
};

export default LatestArticlesSection;
