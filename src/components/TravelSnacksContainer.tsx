import { FunctionComponent, type CSSProperties } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type TravelSnacksContainerType = {
  recipeImageUrl?: string;
  imageSizeUrl?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const TravelSnacksContainer: FunctionComponent<TravelSnacksContainerType> = ({
  recipeImageUrl,
  imageSizeUrl,
  propLeft,
}) => {
  return (
    <div
      className={css`
        position: absolute;
        top: 125px;
        left: 422px;
        width: 381px;
        height: 554px;
        text-align: left;
        font-size: var(--font-size-2xl);
        color: var(--primary);
        font-family: var(--font-poppins);
        left: ${propLeft};
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          width: 381px;
          height: 554px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: 20.94px;
            background-color: var(--color-white);
            border: 1.4px solid var(--color-lightsteelblue);
            box-sizing: border-box;
            width: 381px;
            height: 554px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 319.5px;
            left: 43.2px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 27.41px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-sm-7);
            `}
          >
            <h3
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 27px;
                font-weight: 700;
                font-family: inherit;
              `}
            >
              {recipeImageUrl}
            </h3>
            <div
              className={css`
                position: relative;
                font-size: var(--font-size-mini);
                letter-spacing: -0.02em;
                line-height: 27px;
                font-family: var(--font-open-sans);
                color: var(--body);
                display: inline-block;
                width: 295px;
              `}
            >
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
          </div>
          <Button
            className={css``}
            variant="solid"
            w="131px"
            colorScheme="teal"
          >
            Read More
          </Button>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          top: 27px;
          left: 27px;
          border-radius: var(--br-2xl);
          width: 326px;
          height: 258px;
          object-fit: cover;
        `}
        alt=""
        src={imageSizeUrl}
      />
    </div>
  );
};

export default TravelSnacksContainer;
