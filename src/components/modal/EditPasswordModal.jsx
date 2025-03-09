import ModalComp from "./ModalComp";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MessageStyle } from "../common/StyledComponent";

const TopDiv = styled.div`
  margin-bottom: 48px;
`;

const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EditPasswordModal = ({ closeModal }) => {
  return (
    <ModalComp
      width={"478px"}
      title={"비밀번호 변경하기"}
      btnClass={"sub-btn-large"}
      cancelBtnClass={"sub-btn-large cancel"}
      btnName={"확인"}
      cancelBtnName={"취소"}
      confirmFn={confirm}
      cancelFn={closeModal}
    >
      <>
        <TopDiv>
          <input type="text" className="input-box-regular" placeholder="현재 비밀번호" />
          <MessageStyle color="red" padding="4px 8px 0">
            비밀번호가 일치하지 않습니다.
          </MessageStyle>
        </TopDiv>
        <ColDiv>
          <div>
            <input type="text" className="input-box-regular" placeholder="변경할 패스워드" />
            <MessageStyle padding="4px 8px 0">
              영문 대소문자, 숫자, 특수문자 3가지 이상으로 조합하여
              <br />
              8자 이상 32자 이하로 입력해주세요.
            </MessageStyle>
          </div>
          <div>
            <input type="text" className="input-box-regular" placeholder="변경할 패스워드 확인" />
            <MessageStyle color="red" padding="4px 8px 0">
              비밀번호가 일치하지 않습니다.
            </MessageStyle>
          </div>
        </ColDiv>
      </>
    </ModalComp>
  );
};

export default EditPasswordModal;

EditPasswordModal.propTypes = {
  closeModal: PropTypes.any,
};
