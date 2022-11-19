/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export default function Button({ text, width, color, onClick }) {
  return (
    <button css={buttonCss(width, color)} onClick={onClick}>
      {text}
    </button>
  );
}

const buttonCss = (width, color) => css`
  width: ${width};
  height: 50px;
  border: none;
  border-radius: 8px;
  color: ${color};
  font-size: 20px;
  background-color: #764cd2;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
