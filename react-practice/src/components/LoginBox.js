/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/react";
import Button from "./Button";
import IdInput from "./IdInput";
import PwInput from "./PwInput";

export default function LoginBox() {
  const [userInput, setUserInput] = useState({
    id: "",
    pw: "",
  });

  const handleClickButton = () => {
    alert("test");
  };

  const handleChangeIdInput = event => {
    setUserInput(prev => {
      return { id: event.target.value, pw: prev.pw };
    });
  };

  console.log(userInput);

  return (
    <div css={wrapperCss}>
      <div css={loginBoxCss}>
        <img css={imgCss} alt="logo" src="/RostLogo.png" />
        <div css={inputWrapperCss}>
          <IdInput vaule={userInput.id} onChange={handleChangeIdInput} />
          <PwInput />
        </div>
        <Button
          text="로그인"
          width="100%"
          color="white"
          // onClick={
          //   (idInputValue.length > 6
          //     ? (setIsIdPassed = true)
          //     : alert("아이디는 6자리 이상이어야 합니다.")) &&
          //   (pwInputValue.length > 6
          //     ? (setIsPwPassed = true)
          //     : alert("비밀번호는 6자리 이상이어야 합니다."))
          // }
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
  width: 400px;
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
