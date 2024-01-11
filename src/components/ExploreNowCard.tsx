import { FunctionComponent } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { css } from "@emotion/css";

const ExploreNowCard: FunctionComponent = () => {
  return (
    <Button
      className={css`
        position: absolute;
        top: 556px;
        left: 97px;
      `}
      variant="solid"
      w="190px"
      colorScheme="teal"
    >
      Explore Now!
    </Button>
  );
};

export default ExploreNowCard;
