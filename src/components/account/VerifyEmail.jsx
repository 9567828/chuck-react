import { Link } from "react-router";
import VerifyComponent from "../common/VerifyComponent";
import { MessageStyle, Title } from "./../common/StyledComponent";
import * as s from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";

const EmailForm = styled.form`
  margin-bottom: 38px;
`;

const EmailWrap = styled.div`
  padding-top: 16px;
`;

function VerifyEmail() {
  return (
    <div className="sign-container">
      <Title>아이디 생성</Title>
      <EmailForm action="" id="emailForm">
        <div className={s.inputWrap}>
          <EmailWrap>
            <label htmlFor="inputEmail"></label>
            <input type="email" name="" id="inputEmail" className="input-box" placeholder="이메일 ex) chuckchuck@naver.com" />
          </EmailWrap>
          <MessageStyle>이메일을 입력하고 전송을 눌러주세요.</MessageStyle>
        </div>
        <VerifyComponent />
      </EmailForm>
      {/* state 훅으로 이메일 확인 되면 인증하기 버튼으로 보이게 */}
      <button id="sendBtn" className="primary-btn long send-btn" disabled={true}>
        <span>전송하기</span>
      </button>
      <button className="primary-btn long verify-btn" id="verifyBtn" form="emailForm">
        <span>인증하기</span>
      </button>
      <Link to="/join" className={`${s.textBtnMt}`}>
        돌아가기
      </Link>
    </div>
  );
}

export default VerifyEmail;
