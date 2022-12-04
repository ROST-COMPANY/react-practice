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

  const isButtonDisabled =
    userInput.id.length === 0 || userInput.pw.length === 0;

  const handleClickButton = () => {
    if (userInput.id.length < 6) {
      return;
    }

    if (userInput.pw.length < 6) {
      return;
    }

    alert("환영합니다" + userInput.id + "님!");
  };

  const handleChangeIdInput = event => {
    setUserInput(prev => {
      return { id: event.target.value, pw: prev.pw };
    });
  };

  const handleChangePwInput = event => {
    setUserInput(prev => {
      return { id: prev.id, pw: event.target.value };
    });
  };

  console.log(userInput);

  return (
    <div css={wrapperCss}>
      <div css={loginBoxCss}>
        <img css={imgCss} alt="logo" src="/RostLogo.png" />
        <div css={inputWrapperCss}>
          <IdInput value={userInput.id} onChange={handleChangeIdInput} />
          <PwInput value={userInput.pw} onChange={handleChangePwInput} />
        </div>
        <Button
          text="로그인"
          width="100%"
          color="white"
          disabled={isButtonDisabled}
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
