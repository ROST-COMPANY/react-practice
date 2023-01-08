/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsModalVisible } from "../redux/slices/loginSlice";
import Button from "./Button";

export default function Modal({ title, content, isVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickClose = () => {
    dispatch(setIsModalVisible(false));
    navigate("/mainWithRedux");
  };

  return (
    <>
      {isVisible && (
        <div css={overlayCss}>
          <div css={containerCss}>
            <div css={headerCss}>
              <h3 css={modalTitleCss}>{title}</h3>
              <img
                css={closeImgCss}
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

const overlayCss = css`
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
  border-radius: 8px;
`;

const headerCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  padding: 15px;
  border-bottom: 1px solid lightgray;
`;

const modalTitleCss = css`
  font-size: 20px;
  font-weight: 500;
`;

const closeImgCss = css`
  width: 16px;
  height: 16px;
  opacity: 0.7;
  cursor: pointer;
`;

const bodyCss = css`
  padding: 25px 15px;
`;

const footerCss = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 35px;
  padding: 15px;
  border-top: 1px solid lightgray;
`;
