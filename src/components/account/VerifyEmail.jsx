import { Link } from "react-router";
import VerifyComponent from "../common/VerifyComponent";
import style from "../../assets/scss/modules/style.module.scss";

function VerifyEmail() {
  return (
    <div className="sign-container">
      <h1 className={`${style.titleXl} ${style.fontBold} ${style.mb}`}>아이디 생성</h1>
      <form action="" id="emailForm" className="email-form">
        <div className="input-wrap">
          <div className="email-wrap">
            <label htmlFor="inputEmail"></label>
            <input type="email" name="" id="inputEmail" className="input-box" placeholder="이메일 ex) chuckchuck@naver.com" />
          </div>
          <p id="checkEmail" className={`${style.grayMsgFont} ${style.info}`}>
            이메일을 입력하고 전송을 눌러주세요.
          </p>
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
