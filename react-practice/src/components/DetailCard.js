/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export default function DetailCard({ imgUrl, description }) {
  return (
    <div css={DetailCardCss}>
      <div css={imgWrapperCss}>
        <img css={imgCss} src={imgUrl} alt="img" />
      </div>
      <p css={descriptionCss}>{description}</p>
    </div>
  );
}

const DetailCardCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  width: 60%;
  height: 90%;
  border: 1px solid #764cd2;
  border-radius: 8px;
`;

const imgWrapperCss = css`
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

const imgCss = css`
  width: 400px;
  height: 400px;
  object-fit: cover;
  transition: all 1.5s;

  &:hover {
    transform: scale(1.2);
  }
`;

const descriptionCss = css`
  font-size: 40px;
  color: gray;
`;
