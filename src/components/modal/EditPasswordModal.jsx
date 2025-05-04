import ModalComp from "./ModalComp";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MessageStyle } from "../common/StyledComponent";
import { useState } from "react";

const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 임시 확인용
const pw = "qwer1234!";

const EditPasswordModal = ({ closeModal }) => {
  const [btnText, setBtnText] = useState("다음");
  const [inputPw, setInputPw] = useState("");
  const [editPw, setEditPw] = useState(false);
  const [error, setError] = useState(false);
  const [inputEditPw, setInputEditPw] = useState("");
  const [checkEditPw, setcheckEditPw] = useState("");

  const handlePrevChange = (e) => {
    setInputPw(e.target.value);
  };

  const handleEditPwChange = (e) => {
    console.log(e.target.value);
    setInputEditPw(e.target.value);
  };

  const handleCheckPwChange = (e) => {
    console.log(e.target.value);
    setcheckEditPw(e.target.value);
  };

  // api로 비밀번호 확인 작업
  const handlePwChange = () => {
    if (!inputPw.match(pw)) {
      setError(true);
      setEditPw(false);
    } else {
      setError(false);
      setInputPw("");
      setEditPw(true);
      setBtnText("저장");

      // 비밀번호 변경
      if (inputEditPw.match(checkEditPw)) {
        console.log("일치");
      }
    }
  };

  console.log(editPw);

  return (
    <ModalComp
      width={"478px"}
      title={"비밀번호 변경하기"}
      btnClass={"sub-btn-large"}
      cancelBtnClass={"sub-btn-large cancel"}
      btnName={btnText}
      cancelBtnName={"취소"}
      confirmFn={handlePwChange}
      cancelFn={closeModal}
    >
      <>
        <div>
          <input type="password" className="input-box-regular" onChange={handlePrevChange} placeholder="현재 비밀번호" />
          {error ? (
            <MessageStyle color="red" padding="4px 8px 0">
              비밀번호가 일치하지 않습니다.
            </MessageStyle>
          ) : null}
        </div>
        {editPw ? (
          <ColDiv>
            <div>
              <input type="password" className="input-box-regular" onChange={handleEditPwChange} placeholder="변경할 패스워드" />
              <MessageStyle padding="4px 8px 0">
                영문 대소문자, 숫자, 특수문자 3가지 이상으로 조합하여
                <br />
                8자 이상 32자 이하로 입력해주세요.
              </MessageStyle>
            </div>
            <div>
              <input
                type="password"
                className="input-box-regular"
                onChange={handleCheckPwChange}
                placeholder="변경할 패스워드 확인"
              />
              {error ? (
                <MessageStyle color="red" padding="4px 8px 0">
                  비밀번호가 일치하지 않습니다.
                </MessageStyle>
              ) : null}
            </div>
          </ColDiv>
        ) : null}
      </>
    </ModalComp>
  );
};

export default EditPasswordModal;

EditPasswordModal.propTypes = {
  closeModal: PropTypes.any,
};
