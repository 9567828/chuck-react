import { Link } from "react-router";

function FindId() {
  return (
    <div className="sign-container">
      <h1 className="title-xl font-bold join find-id-title">아이디 찾기</h1>
      <form action="" id="findIdForm" className="find-id-form set-bottom">
        <div className="input-wrap">
          <div className="findId-wrap">
            <label htmlFor="inputFindId"></label>
            <input type="text" name="" id="inputFindId" className="input-box" placeholder="사번입력" />
          </div>
          <p className="message info">소속된 회사의 사번을 입력해주세요.</p>
        </div>
      </form>
      <button className="primary-btn long" form="findIdForm">
        <span>다음</span>
      </button>
      <Link to="/login" className="text-btn back">
        돌아가기
      </Link>
    </div>
  );
}

export default FindId;
