import { Link } from "react-router";
import VerifyComponent from "./../common/VerifyComponent";
import { MessageStyle, Title } from "./../common/StyledComponent";

function FindPw() {
  return (
    <div className="sign-container">
      <Title>비밀번호 찾기</Title>
      <form action="" id="findPwForm" className="find-pw-form set-bottom">
        <div className="input-wrap">
          <div className="findPw-wrap">
            <label htmlFor="inputFindPw"></label>
            <input type="email" name="" id="inputFindPw" className="input-box" placeholder="이메일" />
          </div>
          <MessageStyle>비밀번호를 찾으려는 이메일을 입력해주세요.</MessageStyle>
        </div>
        <VerifyComponent />
      </form>
      <button className="primary-btn long" form="findPwForm">
        <span>다음</span>
      </button>
      <Link to="/login" className="text-btn back">
        돌아가기
      </Link>
    </div>
  );
}

export default FindPw;
