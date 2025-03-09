import { useEffect, useState } from "react";
import ModalComp from "./ModalComp";
import PropTypes from "prop-types";

const TermsAgreeModal = ({ confirm, closeModal, checked }) => {
  const [isCheck, setIsCheck] = useState(checked);

  const handleOnChange = () => {
    setIsCheck((prev) => !prev);
  };

  useEffect(() => {
    // 부모로부터 받아온 `checked` 값에 따라 초기 상태를 설정
    setIsCheck(checked);
  }, [checked]);

  return (
    <ModalComp
      width="478px"
      title={"마케팅 이용 • 수신 동의 변경하기"}
      btnClass={"sub-btn-large"}
      cancelBtnClass={"sub-btn-large cancel"}
      btnName={"확인"}
      cancelBtnName={"취소"}
      confirmFn={confirm}
      cancelFn={closeModal}
    >
      <div className="check-box">
        <input
          type="checkbox"
          name=""
          id="marketingAgree"
          className="square-check-box"
          onChange={handleOnChange}
          checked={isCheck}
        />
        <label></label>
        <label htmlFor="marketingAgree">(선택) 메일, SNS 수신에 동의합니다.</label>
      </div>
    </ModalComp>
  );
};

export default TermsAgreeModal;

TermsAgreeModal.propTypes = {
  confirm: PropTypes.any,
  closeModal: PropTypes.any,
  checked: PropTypes.bool,
};
