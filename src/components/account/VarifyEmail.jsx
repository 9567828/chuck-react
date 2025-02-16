import { Link } from "react-router";

function VarifyEmail() {
  return (
    <div className="sign-container">
      <h1 className="title-xl font-bold join">아이디 생성</h1>
      <form action="" id="emailForm" className="email-form">
        <div className="input-wrap">
          <div className="email-wrap">
            <label htmlFor="inputEmail"></label>
            <input type="email" name="" id="inputEmail" className="input-box" placeholder="이메일 ex) chuckchuck@naver.com" />
          </div>
          <p id="checkEmail" className="message info">
            이메일을 입력하고 전송을 눌러주세요.
          </p>
        </div>
        <div className="verify-container" id="verifyContainer">
          <div className="verify-input-wrap">
            <label htmlFor="verifyCode"></label>
            <input type="text" name="" id="verifyCode" className="input-box" placeholder="인증번호 (숫자6자리)" />
          </div>
          <div className="time-container">
            <div className="code-time-wrap">
              <p id="verifyError" className="message code">
                2분 내로 인증을 완료해주세요.
              </p>
              <p id="timer" className="message code">
                02:00
              </p>
            </div>
            <div id="resendBtn" className="resend-btn">
              재전송
            </div>
          </div>
        </div>
      </form>
      <button id="sendBtn" className="primary-btn long send-btn" disabled>
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

export default VarifyEmail;
