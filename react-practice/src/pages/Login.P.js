/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import LoginBox from "../components/LoginBox";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* <div css={loginCss}>
        <LoginBox />
      </div> */}

      <button onClick={openModal}>Open Modal</button>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          Hello
        </Modal>
      )}
    </>
  );
}

const loginCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
