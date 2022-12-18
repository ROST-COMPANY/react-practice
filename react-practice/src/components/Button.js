/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export default function Button({
  text,
  width = "100%",
  height = "50px",
  color,
  disabled,
  onClick,
}) {
  return (
    <button css={buttonCss(width, height, color, disabled)} onClick={onClick}>
      {text}
    </button>
  );
}

const buttonCss = (width, height, color, disabled) => css`
  width: ${width};
  height: ${height};
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
