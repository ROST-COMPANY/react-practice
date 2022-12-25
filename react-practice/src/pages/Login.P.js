/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useSelector } from "react-redux";
import LoginBox from "../components/LoginBox";
import Modal from "../components/Modal";

export default function Login() {
  const { isModalVisible, userInput } = useSelector(state => state.login);

  const content = `환영합니다. ${userInput.id}님!`;

  return (
    <div css={loginCss}>
      <Modal isVisible={isModalVisible} title="로그인 성공" content={content} />
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
