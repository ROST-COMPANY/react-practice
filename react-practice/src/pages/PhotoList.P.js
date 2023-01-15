/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import DetailCard from "../components/DetailCard";
export default function PhotoList() {
  return (
    <div css={mainCss}>
      <DetailCard
        imgUrl="https://cdn.pixabay.com/photo/2019/07/18/04/23/coffe-4345449_960_720.jpg"
        description="Premium Latte"
      />
    </div>
  );
}

const mainCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
