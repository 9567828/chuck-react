// 출퇴근 관리 주/월 리스트
import PropTypes from "prop-types";
import ButtonComponent from "../common/ButtonComponents";
import * as w from "../../assets/scss/modules/workstate.module.scss";

function WorkStateListWM({ date }) {
  const { EditWorkBtn } = ButtonComponent();
  const thItems = [
    { id: 1, name: "날짜" },
    { id: 2, name: "출근시간" },
    { id: 3, name: "퇴근시간" },
    { id: 4, name: "근무형태" },
    { id: 5, name: "연장근무시간" },
    { id: 6, name: "근무시간" },
    { id: 7, name: "야간근무시간" },
  ];

  return (
    <div className="week-month-wrap">
      <div className="table-grid">
        <div className="emp-work-info">
          <div className="emp-info">
            <div className={w.empName}>김영식</div>
            <div className={w.empPosition}>CEO</div>
          </div>
          <div className={w.dailyRate}>
            단위: <span className="rate-name">{date}</span>
          </div>
          <ul className={w.workTimes}>
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
          </ul>
        </div>
        <div className="table-wrap weekMonth-table">
          <ul className="table-title">
            {thItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <ul className="table-content">
            <li className="table-data work-date">2025.01.23</li>
            <li className="table-data edit-data">
              <p>10:30</p>
              <EditWorkBtn />
            </li>
            <li className="table-data edit-data">
              <p>-</p>
              <EditWorkBtn />
            </li>
            <li className="table-data">결근</li>
            <li className="table-data">1시간</li>
            <li className="table-data edit-data">
              <p>-</p>
              <EditWorkBtn />
            </li>
            <li className="table-data">-</li>
            <li className="table-data">-</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkStateListWM;

WorkStateListWM.propTypes = {
  date: PropTypes.string,
};
