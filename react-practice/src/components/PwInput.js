/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export default function PwInput({ onChange, value }) {
  return (
    <div css={wrapperCss}>
      <img css={iconCss} alt="pwIcon" src="pwIcon.png" />
      <input
        css={inputCss}
        type="password"
        placeholder="비밀번호"
        onChange={onChange}
        value={value}
      />
      <div css={guideTextCss}>영문,숫자 조합, 8~12자리</div>
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
