function Login() {
  return (
    <div className="sign-container">
      <h1 className="login-logo">
        <a href="">
          <img src="/imgs/logo_combination.svg" alt="" />
        </a>
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
        <p className="message error">아이디 또는 비밀번호를 확인해주세요.</p>
      </form>
      <div className="save-login">
        <div className="auto-login-wrap">
          <input type="checkbox" name="" id="autoLogin" className="circle-check-box" />
          <label></label>
          <label htmlFor="autoLogin" className="body-sm font-regular">
            자동로그인
          </label>
        </div>
        <ul className="find-account">
          <li>
            <a href="/login/find-id">아이디 찾기</a>
          </li>
          <li>
            <a href="/login/find-pw">비밀번호 찾기</a>
          </li>
        </ul>
      </div>
      <button className="primary-btn long">
        <span>로그인</span>
      </button>
      <button className="google-login-btn">
        <img src="/imgs/google_icon.png" alt="구글" />
        <span>구글 계정으로 로그인하기</span>
      </button>
      <a href="/join" className="text-btn">
        회원가입
      </a>
    </div>
  );
}

export default Login;
