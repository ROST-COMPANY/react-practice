/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import Button from "./Button";
import IdInput from "./IdInput";

export default function LoginBox() {
  const handleClickButton = () => {
    alert("test");
  };

  return (
    <div css={wrapperCss}>
      <div css={loginBoxCss}>
        <img css={imgCss} alt="logo" src="/RostLogo.png" />
        <div css={inputWrapperCss}>
          <IdInput />
          <div>input</div>
        </div>
        <Button
          text="로그인"
          width="100%"
          color="white"
          onClick={handleClickButton}
        />
      </div>
      <div>© 2018 COPYRIGHT © ROST.ALL RIGHTS RESERVED.</div>
    </div>
  );
}

const wrapperCss = css`
  display: flex;
  flex-direction: column;

  div:last-child {
    color: #656565;
  }
`;

const loginBoxCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 350px;
  padding: 20px;
  border: 1px solid #b5b5b5;
  border-radius: 8px;
`;

const inputWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const imgCss = css`
  width: 250px;
  margin: 30px 0;
`;
