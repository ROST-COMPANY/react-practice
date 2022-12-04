/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export default function IdInput({ value, onChange }) {
  return (
    <div css={wrapperCss}>
      <img css={iconCss} alt="idIcon" src="idIcon.png" />
      <input
        css={inputCss}
        type="text"
        value={value}
        placeholder="아이디"
        onChange={onChange}
      />
      <div css={guideTextCss}>이메일 입력</div>
    </div>
  );
}

const wrapperCss = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid #764cd2;
  border-radius: 8px;
`;

const iconCss = css`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;

const inputCss = css`
  width: 80%;
  margin-left: 8px;
  border: none;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b5b5b5;
    font-size: 16px;
  }
`;

const guideTextCss = css`
  position: absolute;
  top: 30%;
  right: 8px;
  font-size: 14px;
`;
