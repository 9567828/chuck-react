import { Link } from "react-router";
import { MessageStyle } from "../common/StyledComponent";
import * as s from "../../assets/scss/modules/style.module.scss";
import "../../assets/scss/screen/account/login.scss";

function Login() {
  return (
    <div className="sign-container">
      <h1 className="login-logo">
        <Link to={"/"}>
          <img src="/img/logo_combination.svg" alt="" />
        </Link>
      </h1>
      <form action="/mainPage" id="loginForm" name="loginForm" className="login-form" method="post">
        <div className="id-wrap">
          <div className="input-mailId">
            <label htmlFor="empEmail"></label>
            <input type="text" name="empEmail" id="empEmail" className="input-box" placeholder="chuckchuck@naver.com" />
          </div>
        </div>
        <div className="password-wrap login">
          <label htmlFor="empPw"></label>
          <input type="password" name="empPw" id="empPw" className="input-box" placeholder="비밀번호입력" />
        </div>
        <MessageStyle color={"red"}>아이디 또는 비밀번호를 확인해주세요.</MessageStyle>
      </form>
      <div className="save-login">
        <div className="auto-login-wrap">
          <input type="checkbox" name="" id="autoLogin" className="circle-check-box" />
          <label></label>
          <label htmlFor="autoLogin" className={`${s.bodySmR}`}>
            자동로그인
          </label>
        </div>
        <ul className="find-account">
          <li>
            <Link to="/login/find-id">아이디 찾기</Link>
          </li>
          <li>
            <Link to="/login/find-pw">비밀번호 찾기</Link>
          </li>
        </ul>
      </div>
      <button className="primary-btn long">
        <span>로그인</span>
      </button>
      <button className="google-login-btn">
        <img src="/img/google_icon.png" alt="구글" />
        <span>구글 계정으로 로그인하기</span>
      </button>
      <Link to="/join" className={`${s.textBtn}`}>
        회원가입
      </Link>
    </div>
  );
}

export default Login;
