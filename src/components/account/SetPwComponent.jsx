import { Link } from "react-router";
import style from "../../assets/scss/modules/style.module.scss";
import ErrorMessage from "../common/ErrorMessage";
import PropTypes from "prop-types";

function SetPassword({ title }) {
  return (
    <div className="sign-container">
      <h1 className={`${style.titleXl} ${style.fontBold} ${style.mb}`}>{title}</h1>
      <form action="" id="passwordForm" className="password-form">
        <div className="input-wrap">
          <div className="input-password">
            <label htmlFor="password"></label>
            <input
              type="password"
              name=""
              id="password"
              className="input-box"
              placeholder="비밀번호"
              minLength="8"
              maxLength="32"
            />
          </div>
          {/* state 훅으로 메시지 왔다갔다 보여주기 삼항 이용 */}
          <p id="isValidPw" className={`${style.grayMsgFont} ${style.info}`}>
            영문 대소문자, 숫자, 특수문자 3가지 이상으로 조합하여
            <br />
            8자 이상 32자 이하로 입력해주세요.
          </p>
          <ErrorMessage text={"비밀번호 형식이 잘못 되었습니다."} />
        </div>
        <div className="password-chk-wrap">
          <label htmlFor="passwordChk"></label>
          <input type="password" name="" id="passwordChk" className="input-box" placeholder="비밀번호 확인" />
        </div>
        <p id="notMatchPw" className="message"></p>
      </form>
      <button id="nextBtn" className="primary-btn long" form="passwordForm" disabled>
        <span>다음</span>
      </button>
      <Link to="/join/verify-email" className="text-btn back">
        돌아가기
      </Link>
    </div>
  );
}

export default SetPassword;

SetPassword.propTypes = {
  title: PropTypes.string.isRequired,
};
