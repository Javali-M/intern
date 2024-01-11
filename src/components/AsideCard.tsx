import { FunctionComponent, useCallback } from "react";
import { css } from "@emotion/css";
import GrilledTomatoesContainer from "./GrilledTomatoesContainer";
import TravelSnacksContainer from "./TravelSnacksContainer";

const AsideCard: FunctionComponent = () => {
  const onGroupAsideClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <aside
      className={css`
        position: absolute;
        top: 1614px;
        left: 108px;
        width: 1225px;
        height: 679px;
        cursor: pointer;
        text-align: left;
        font-size: var(--font-size-2xl);
        color: var(--primary);
        font-family: var(--font-poppins);
      `}
      onClick={onGroupAsideClick}
    >
      <h1
        className={css`
          margin: 0;
          position: absolute;
          top: 0px;
          left: 0px;
          font-size: var(--font-size-37xl);
          letter-spacing: 0.04em;
          line-height: 42px;
          font-weight: 600;
          font-family: var(--font-source-sans-pro);
          display: inline-block;
          width: 461px;
          height: 84px;
        `}
      >
        Latest Articles
      </h1>
      <GrilledTomatoesContainer
        recipeImageUrl="/grilledtomatoes1846x846-1@2x.png"
        instructionImageUrl="Grilled  Tomatoes at Home"
        propWhiteSpace="pre-wrap"
      />
      <TravelSnacksContainer
        recipeImageUrl="Snacks for Travel"
        imageSizeUrl="/mealprepideas846x846-1@2x.png"
        propLeft="422px"
      />
      <TravelSnacksContainer
        recipeImageUrl="Post-workout Recipes"
        imageSizeUrl="/mealprepideas846x846-111@2x.png"
        propLeft="844px"
      />
    </aside>
  );
};

export default AsideCard;
