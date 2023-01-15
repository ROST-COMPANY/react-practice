/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import Button from "./Button";

export default function ModalPractice({
  title,
  content,
  setIsVisible,
  isVisible,
}) {
  const handleClickClose = () => {
    setIsVisible(() => false);
  };

  return (
    <>
      {isVisible && (
        <div css={overLayCss}>
          <div css={containerCss}>
            <div css={headerCss}>
              <h3 css={ModalTitleCss}>{title}</h3>
              <img
                css={closeIconCss}
                src="close.png"
                alt="logoIcon"
                onClick={handleClickClose}
              ></img>
            </div>
            <div css={bodyCss}>
              <p>{content}</p>
            </div>
            <div css={footerCss}>
              <Button
                text="close"
                width="80px"
                height="35px"
                color="white"
                onClick={handleClickClose}
              ></Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const overLayCss = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 10000;
`;

const containerCss = css`
  position: absolute;
  width: 300px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const headerCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 15px;
`;

const ModalTitleCss = css`
  font-size: 12px;
  font-weight: 500;
`;

const closeIconCss = css`
  width: 12px;
  height: 12px;
  opacity: 0.6;
  cursor: pointer;
`;

const bodyCss = css`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const footerCss = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 35px;
  padding: 15px;
`;
