import { FunctionComponent } from "react";
import { Img, Button, IconButton } from "@chakra-ui/react";
import { css } from "@emotion/css";
import ContactSection from "../components/ContactSection";
import ExploreNowCard from "../components/ExploreNowCard";
import AsideCard from "../components/AsideCard";
import LatestArticlesSection from "../components/LatestArticlesSection";

const LandingPageDesktop: FunctionComponent = () => {
  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 3527px;
        text-align: left;
        font-size: var(--font-size-3xl);
        color: var(--primary);
        font-family: var(--font-source-sans-pro);
      `}
    >
      <section
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: var(--color-white);
          width: 1440px;
          height: 804px;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 33px;
          left: 100px;
          width: 107px;
          height: 83px;
          object-fit: cover;
        `}
        alt=""
        src="/screenshot-669-1@2x.png"
      />
      <section
        className={css`
          position: absolute;
          top: 803px;
          left: 0px;
          background-color: var(--color-white);
          width: 1440px;
          height: 653px;
        `}
      />
      <section
        className={css`
          position: absolute;
          top: 989px;
          left: 0px;
          background: linear-gradient(
            90.07deg,
            rgba(30, 42, 93, 0.04),
            rgba(48, 62, 130, 0.04) 55.51%,
            rgba(60, 80, 157, 0.04)
          );
          width: 1440px;
          height: 467px;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: calc(50% - 1758.5px);
          left: calc(50% - 15px);
          width: 735px;
          height: 804px;
          object-fit: cover;
        `}
        alt=""
        src="/group-289@2x.png"
      />
      <ContactSection />
      <ExploreNowCard />
      <h1
        className={css`
          margin: 0;
          position: absolute;
          top: 227px;
          left: 100px;
          font-size: 62px;
          line-height: 69px;
          font-weight: 700;
          font-family: inherit;
          display: inline-block;
          width: 345px;
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >{`Discover the `}</p>
        <p
          className={css`
            margin: 0;
          `}
        >
          <span
            className={css`
              color: #e23744;
            `}
          >
            Best
          </span>
          <span className={css``}> Food and Drinks</span>
        </p>
      </h1>
      <div
        className={css`
          position: absolute;
          top: 460px;
          left: 100px;
          font-size: 16.4px;
          line-height: 27.41px;
          font-family: var(--font-open-sans);
          color: var(--body);
          display: inline-block;
          width: 345px;
        `}
      >{`Naturally made Healthcare Products for the better care & support of your body.`}</div>
      <div
        className={css`
          position: absolute;
          top: 989px;
          left: 205px;
          width: 384px;
          height: 468px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 384px;
            height: 468px;
            object-fit: cover;
          `}
          alt=""
          src="/mask-group@2x.png"
        />
        <img
          className={css`
            position: absolute;
            top: 341.6px;
            left: 53.4px;
            width: 25.7px;
            height: 47px;
            object-fit: contain;
          `}
          alt=""
        />
      </div>
      <section
        className={css`
          position: absolute;
          top: 1456px;
          left: 0px;
          width: 1440px;
          height: 995px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: var(--color-white);
            width: 1440px;
            height: 995px;
          `}
        />
      </section>
      <img
        className={css`
          position: absolute;
          top: 2574px;
          left: 104px;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 0px;
          left: 688px;
          width: 752px;
          height: 839px;
        `}
        alt=""
        src="/vector-1.svg"
      />
      <Button
        className={css`
          position: absolute;
          top: 32px;
          left: 1277px;
        `}
        variant="solid"
        w="122px"
        colorScheme="teal"
      >
        Get In Touch
      </Button>
      <img
        className={css`
          position: absolute;
          top: 162.7px;
          left: 1215.5px;
          width: 115.1px;
          height: 76.8px;
          display: none;
        `}
        alt=""
        src="/vector-2.svg"
      />
      <AsideCard />
      <div
        className={css`
          position: absolute;
          top: 1096px;
          left: 789px;
          width: 447px;
          height: 254px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 21px;
          font-size: 45px;
          font-family: var(--font-poppins);
        `}
      >
        <div
          className={css`
            width: 447px;
            height: 192px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 27.41px;
            `}
          >
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 27px;
                font-weight: 600;
                font-family: inherit;
                display: inline-block;
                width: 422px;
                height: 26px;
                flex-shrink: 0;
              `}
            >
              About Us
            </h1>
            <div
              className={css`
                position: relative;
                font-size: var(--font-size-mini);
                line-height: 27px;
                font-family: var(--font-open-sans);
                color: var(--body);
                display: inline-block;
                width: 447px;
                height: 138px;
                flex-shrink: 0;
              `}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </div>
          </div>
        </div>
        <Button className={css``} variant="solid" w="132px" colorScheme="teal">
          Read More
        </Button>
      </div>
      <div
        className={css`
          position: absolute;
          top: 2358px;
          left: 705px;
          line-height: 27.22px;
          color: var(--color-darkslategray-100);
        `}
      >
        1/2
      </div>
      <div
        className={css`
          position: absolute;
          height: 0.82%;
          width: 1.94%;
          top: 66.83%;
          right: 52.01%;
          bottom: 32.35%;
          left: 46.04%;
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 55.17%;
            width: 35.71%;
            top: 24.14%;
            right: 32.14%;
            bottom: 20.69%;
            left: 32.14%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: contain;
          `}
          alt=""
          src="/image-1-traced@2x.png"
        />
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-8xs);
            width: 28px;
            height: 29px;
            object-fit: cover;
          `}
          alt=""
          src="/rectangle-417@2x.png"
        />
      </div>
      <Button
        className={css`
          position: absolute;
          height: 0.82%;
          width: 1.94%;
          top: 66.83%;
          right: 46.04%;
          bottom: 32.35%;
          left: 52.01%;
        `}
        variant="outline"
        w="28px"
        colorScheme="teal"
      />
      <section
        className={css`
          position: absolute;
          top: 1457px;
          left: 1440px;
          background-color: var(--color-white);
          width: 1440px;
          height: 994px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 2359px;
          left: 2145px;
          line-height: 27.22px;
          color: var(--color-darkslategray-100);
        `}
      >
        2/2
      </div>
      <div
        className={css`
          position: absolute;
          height: 0.82%;
          width: 1.94%;
          top: 66.86%;
          right: -47.99%;
          bottom: 32.32%;
          left: 146.04%;
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 55.17%;
            width: 35.71%;
            top: 24.14%;
            right: 32.14%;
            bottom: 20.69%;
            left: 32.14%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: contain;
          `}
          alt=""
          src="/image-1-traced1@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-8xs);
            background-color: rgba(217, 217, 217, 0);
            border: 1px solid var(--color-darkslategray-100);
            box-sizing: border-box;
            width: 28px;
            height: 29px;
          `}
        />
      </div>
      <img
        className={css`
          position: absolute;
          height: 0.82%;
          width: 1.94%;
          top: 66.86%;
          right: -53.96%;
          bottom: 32.32%;
          left: 152.01%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src="/group-325@2x.png"
      />
      <LatestArticlesSection />
    </div>
  );
};

export default LandingPageDesktop;
