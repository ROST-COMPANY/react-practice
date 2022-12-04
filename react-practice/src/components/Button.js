/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export default function Button({ text, width, color, disabled, onClick }) {
  return (
    <button css={buttonCss(width, color, disabled)} onClick={onClick}>
      {text}
    </button>
  );
}

const buttonCss = (width, color, disabled) => css`
  width: ${width};
  height: 50px;
  border: none;
  border-radius: 8px;
  color: ${color};
  font-size: 20px;
  background-color: ${disabled ? "lightgray" : "#764cd2"};

  &:hover {
    opacity: ${disabled ? 1 : 0.5};
    cursor: ${disabled ? "default" : "pointer"};
  }
`;
