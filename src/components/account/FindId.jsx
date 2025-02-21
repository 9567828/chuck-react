import { Link } from "react-router";
import * as s from "../../assets/scss/modules/style.module.scss";
import Message from "./../common/Message";

function FindId() {
  // 결과화면 state훅으로 설정해서 UI 바꿔서 보여주기
  return (
    <div className="sign-container">
      <h1 className={`${s.titleXl} ${s.fontBold} ${s.mb} find-id-title`}>아이디 찾기</h1>
      <form action="" id="findIdForm" className="find-id-form set-bottom">
        <div className="input-wrap">
          <div className="findId-wrap">
            <label htmlFor="inputFindId"></label>
            <input type="text" name="" id="inputFindId" className="input-box" placeholder="사번입력" />
          </div>
          {/* state훅으로 메시지 설정 */}
          <Message text={"소속된 회사의 사번을 입력해주세요."} />
          <Message color={"red"} text={"입력하신 사번이 일치하지 않습니다"} />
        </div>
      </form>
      <button type="submit" className="primary-btn long" form="findIdForm">
        <span>다음</span>
      </button>
      <Link to="/login" className="text-btn back">
        돌아가기
      </Link>
    </div>
  );
}

export default FindId;
