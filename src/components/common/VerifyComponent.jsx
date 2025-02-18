import style from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";

const Pred = styled.p`
  color: #ff3333;
  font-size: 14px;
`;

function VerifyComponent() {
  return (
    <div className="verify-container" id="verifyContainer">
      <div className="verify-input-wrap">
        <label htmlFor="verifyCode"></label>
        <input type="text" name="" id="verifyCode" className="input-box" placeholder="인증번호 (숫자6자리)" />
      </div>
      <div className="time-container">
        <div className="code-time-wrap">
          <Pred>2분 내로 인증을 완료해주세요.</Pred>
          <Pred id="timer">02:00</Pred>
        </div>
        <div id="resendBtn" className={`${style.grayMsgFont} resend-btn`}>
          재전송
        </div>
      </div>
    </div>
  );
}

export default VerifyComponent;
