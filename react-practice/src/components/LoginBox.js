/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import Button from "./Button";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { setId, setIsModalVisible, setPw } from "../redux/slices/loginSlice";

export default function LoginBox() {
  const dispatch = useDispatch();
  const { id, pw } = useSelector(state => state.login.userInput);

  const isButtonDisabled = id.length === 0 || pw.length === 0;

  const handleClickButton = () => {
    if (id.length < 6) {
      return;
    }
    if (pw.length < 6) {
      return;
    }

    dispatch(setIsModalVisible(true));
  };

  const handleChangeIdInput = event => {
    dispatch(setId(event.target.value));
  };

  const handleChangePwInput = event => {
    dispatch(setPw(event.target.value));
  };

  // console.log(userInput);

  return (
    <div css={wrapperCss}>
      <div css={loginBoxCss}>
        <img css={imgCss} alt="logo" src="/RostLogo.png" />
        <div css={inputWrapperCss}>
          <Input
            iconSrc="idIcon.png"
            iconAlt="idIcon"
            inputType="text"
            placeholder="아이디"
            value={id}
            guideText="이메일 입력"
            onChange={handleChangeIdInput}
          />
          <Input
            iconSrc="pwIcon.png"
            iconAlt="pwIcon"
            inputType="password"
            placeholder="비밀번호"
            value={pw}
            guideText="영문,숫자 조합, 8~12자리"
            onChange={handleChangePwInput}
          />
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
