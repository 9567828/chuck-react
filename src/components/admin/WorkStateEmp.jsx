// 출퇴근 관리 주/월 리스트
import PropTypes from "prop-types";
import * as s from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";

const Rate = styled.div`
  margin: 16px 0 12px;
  font-size: 10px;
  font-weight: 500;
  line-height: 150%;
  color: #757575;
`;

const Ul = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6px;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 16px;
    p:first-child {
      font-size: 12px;
      font-weight: 500;
      line-height: 150%;
      color: #757575;
    }
    p:last-child {
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
    }
  }
`;

function WorkStateEmp({ date }) {
  return (
    <div className="emp-work-info">
      <div className="emp-info">
        <div className={s.bodySmB}>김영식</div>
        <div className={s.captionXxsM}>CEO</div>
      </div>
      <Rate>
        단위: <span className="rate-name">{date}</span>
      </Rate>
      <Ul>
        <li>
          <p>근무가능시간</p>
          <p>52시간</p>
        </li>
        <li>
          <p>필수근무시간</p>
          <p>40시간</p>
        </li>
        <li>
          <p>실근무시간</p>
          <p>40시간</p>
        </li>
        <li>
          <p>연장근무시간</p>
          <p>00시간</p>
        </li>
        <li>
          <p>야간근무시간</p>
          <p>00시간</p>
        </li>
      </Ul>
    </div>
  );
}

export default WorkStateEmp;

WorkStateEmp.propTypes = {
  date: PropTypes.string,
};
