/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
// import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate("/login");
  };

  return (
    <div css={mainCss}>
      <div css={contentCss}>
        <button css={buttonCss} type="button" onClick={handleClickBtn}>
          다음 페이지 이동!
        </button>
        <div>hello!!</div>
      </div>
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

const contentCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const buttonCss = css`
  width: 200px;
  height: 80px;
  background-color: tomato;
`;
