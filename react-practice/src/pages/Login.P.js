/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import LoginBox from "../components/LoginBox";

export default function Login() {
  return (
    <div css={loginCss}>
      <LoginBox />
    </div>
  );
}

const loginCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
