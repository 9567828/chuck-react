import { Link } from "react-router";

function FindIdResult() {
  return (
    <div className="result-container set-bottom">
      <div className="result-box">
        <span>rlawlgh486@naver.com</span>
        <span>2024.12.01 가입</span>
      </div>
      <Link to="/login/find-pw" className="go-find-pw body-sm">
        <span>비밀번호 찾기</span>
        <img src="/public/img/ic_move_in.svg" alt="화살표" />
      </Link>
    </div>
  );
}

export default FindIdResult;
