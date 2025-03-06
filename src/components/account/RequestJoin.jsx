import { Link } from "react-router";
import * as s from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";

const H1 = styled.h1`
  margin-bottom: 17px;
`;

const P1 = styled.p`
  font-weight: 500;
`;

const P2 = styled.p`
  margin-top: 11px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`;

function RequestJoin() {
  return (
    <div className="sign-container">
      <div className="title-head">
        <H1 className={`${s.titleXl} ${s.fontBold}`}>가입요청 보내기</H1>
        <P1>해당 정보로 회사에 가입요청을 보내시겠습니까?</P1>
      </div>
      <form action="" id="joinForm" className="result-form">
        <div className="result-box join">
          <span id="resultEmail"></span>
          <span id="resultName"></span>
        </div>
        <P2>가입 요청이 성공적으로 전송되었습니다. 관리자가 승인하면 로그인할 수 있습니다.</P2>
      </form>
      {/* 버튼 state로 확인 완료 되면 삼항으로 보여주기 */}
      <button type="submit" className="primary-btn long" form="joinForm">
        <span>가입 요청 보내기</span>
      </button>
      <button type="button" className="primary-btn long">
        <span>로그인하러 가기</span>
      </button>
      <Link to="/join/set-password" className={`${s.textBtnMt}`}>
        돌아가기
      </Link>
    </div>
  );
}

export default RequestJoin;
