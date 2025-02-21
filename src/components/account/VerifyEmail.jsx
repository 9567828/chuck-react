import { Link } from "react-router";
import VerifyComponent from "../common/VerifyComponent";
import { MessageStyle, Title } from "./../common/StyledComponent";

function VerifyEmail() {
  return (
    <div className="sign-container">
      <Title>아이디 생성</Title>
      <form action="" id="emailForm" className="email-form">
        <div className="input-wrap">
          <div className="email-wrap">
            <label htmlFor="inputEmail"></label>
            <input type="email" name="" id="inputEmail" className="input-box" placeholder="이메일 ex) chuckchuck@naver.com" />
          </div>
          <MessageStyle>이메일을 입력하고 전송을 눌러주세요.</MessageStyle>
        </div>
        <VerifyComponent />
      </form>
      {/* state 훅으로 이메일 확인 되면 인증하기 버튼으로 보이게 */}
      <button id="sendBtn" className="primary-btn long send-btn" disabled={true}>
        <span>전송하기</span>
      </button>
      <button className="primary-btn long verify-btn" id="verifyBtn" form="emailForm">
        <span>인증하기</span>
      </button>
      <Link to="/join" className="text-btn back">
        돌아가기
      </Link>
    </div>
  );
}

export default VerifyEmail;
