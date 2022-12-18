/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState } from "react";
import LoginBox from "../components/LoginBox";
import Modal from "../components/Modal";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div css={loginCss}>
      <Modal
        isVisible={isVisible}
        title="로그인 성공"
        content="환영합니다!!"
        setIsVisible={setIsVisible}
      />
      <LoginBox setIsVisible={setIsVisible} />
    </div>
  );
}

const loginCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
