import WorkStateList from "./WorkStateList";
import WorkStateEmp from "./WorkStateEmp";
import * as s from "../../assets/scss/modules/style.module.scss";
import PeriodSelectorCompnent from "./../common/PeriodSelectorComponent";
import { useState } from "react";
import DateFormatter from "../hooks/MakeDate";
import Calender from "./../common/Calender";
import { getWorkHours } from "../hooks/CalculateTime";

function WorkState() {
  const { PeriodSelector, isClick } = PeriodSelectorCompnent();
  const date = new DateFormatter();

  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState(null);
  const [row, setRow] = useState(5);
  const [onCal, setOnCal] = useState(false);
  const [clickDate, setClickDate] = useState(null);

  const selectMenu = [
    { id: 1, name: "전체" },
    { id: 2, name: "경영팀" },
    { id: 3, name: "기획전략팀" },
    { id: 4, name: "재무팀" },
    { id: 5, name: "개발팀" },
    { id: 6, name: "프로덕트 디자인팀" },
    { id: 7, name: "브랜드 디자인팀" },
    { id: 8, name: "퍼포먼스 마케팅팀" },
    { id: 9, name: "콘텐츠 기획팀" },
    { id: 10, name: "CS팀" },
  ];

  // api로 정보 받아올 때 이름, 직책, 날짜(근무날짜), 출근시간, 퇴근시간, 근무형태, 휴게시간은 받고
  // 연장근무, 근무시간(하루 총 근무시간), 야간근무시간은 자동 계산 되어서 서버에서 받을 지? 아니면 프론트에서 계산할지
  // 사내 근무규칙을 정해서 그 시간에 맞춰서 계산할지
  // 사원별로 근무 시간을 각각 넣어서 따로 계산할지

  const thItems = [
    { id: 1, name: "이름", isMonthly: false, default: true },
    { id: 2, name: "직책", isMonthly: false, default: true },
    { id: 3, name: "날짜", isMonthly: true, default: false },
    { id: 4, name: "출근시간", isMonthly: true, default: true },
    { id: 5, name: "퇴근시간", isMonthly: true, default: true },
    { id: 6, name: "근무형태", isMonthly: true, default: true },
    { id: 7, name: "휴게시간", isMonthly: true, default: true },
    { id: 8, name: "연장근무시간", isMonthly: true, default: true },
    { id: 9, name: "근무시간", isMonthly: true, default: true },
    { id: 10, name: "야간근무시간", isMonthly: true, default: true },
  ];

  const contentList = [
    {
      id: 1,
      name: "김성은",
      dept: "프론트엔드 개발자",
      atWork: "-",
      fromWork: "-",
      workType: "결근",
      restTime: "1시간",
      overtime: "-",
      workTime: "-",
      nigthWork: "-",
    },
    {
      id: 2,
      name: "이현정",
      dept: "BX 디자이너",
      atWork: "10:02",
      fromWork: "19:02",
      workType: "지각",
      restTime: "1시간",
      overtime: "-",
      workTime: "00시간 00분",
      nigthWork: "-",
    },
    {
      id: 3,
      name: "정우성",
      dept: "인사관리자",
      atWork: "-",
      fromWork: "-",
      workType: "휴가",
      restTime: "1시간",
      overtime: "-",
      workTime: "-",
      nigthWork: "-",
    },
    {
      id: 4,
      name: "김지호",
      dept: "BX 디자이너",
      atWork: "09:02",
      fromWork: "18:09",
      workType: "정상",
      restTime: "1시간",
      overtime: "-",
      workTime: "09시간 00분",
      nigthWork: "-",
    },
    {
      id: 5,
      name: "이신우",
      dept: "퍼포먼스 마케터",
      atWork: "08:24",
      fromWork: "22:24",
      workType: "정상",
      restTime: "1시간",
      overtime: "3시간 24분",
      workTime: "12시간 24분",
      nigthWork: "24분",
    },
  ];

  const isWeekMonth = isClick === "주" || isClick === "월";

  const onClickDrop = () => {
    setIsActive((prev) => !prev);
  };

  const selectDept = (dept) => {
    // 부서선택
    setSelect(dept);
    // 메뉴닫기
    setIsActive(false);
  };

  const handleRowDate = (r) => {
    setRow(r);
  };

  const onCalender = () => {
    setOnCal(true);
  };

  const handleDateClick = (e) => {
    console.log(e.target.parentElement);
    setOnCal(false);
  };

  const handleMouseEnter = (e) => {
    console.log(e.target);
    const selDate = e.target;
    selDate.classList.add("onMouse");
  };

  return (
    <>
      <section className="date-pick-section">
        <div className="calender-wrap" onClick={onCalender}>
          <div className="select-cal">
            <div className="get-today">{date.defaultDate}</div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 11.825L8.825 8L5 4.175L6.18333 3L11.1833 8L6.18333 13L5 11.825Z" fill="#616161" />
            </svg>
          </div>
          {onCal ? (
            <div className="cal-drop">
              <Calender rowData={handleRowDate} clickFn={handleDateClick} mouseFn={handleMouseEnter} />
            </div>
          ) : null}
        </div>
        <PeriodSelector />
      </section>

      <section className="select-emp">
        <div className="select-wrap">
          <div className="select-box" onClick={onClickDrop}>
            <div className={select ? `select-one on` : "select-one"}>{select ? select : "부서 선택"}</div>
            <img src="/img/ic_move_in.svg" alt="화살표" />
          </div>
          {isActive ? (
            <div className="sel-options">
              {selectMenu.map((menu) => (
                <p key={menu.id} onClick={() => selectDept(menu.name)}>
                  {menu.name}
                </p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="input-search-bar">
          <label htmlFor="searchInput">
            <input type="text" name="" id="searchInput" className="input-box-search" placeholder="직원 검색" />
          </label>
        </div>
      </section>

      {/* 클릭 상태가 주 또는 월(isWeekMonth)인 경우 클래스, dom요소를 리턴 아니면 null처리 */}
      <section className={isWeekMonth ? "table-grid" : null}>
        {isWeekMonth ? <WorkStateEmp date={isClick} /> : null}
        <div>
          <ul className={isWeekMonth ? "table-title onWeekMonth" : "table-title"}>
            {thItems.map((item) =>
              isWeekMonth ? (
                item.isMonthly ? (
                  <li key={item.id}>{item.name}</li>
                ) : null
              ) : item.default ? (
                <li key={item.id}>{item.name}</li>
              ) : null
            )}
          </ul>
          {/* 
            일인 경우 조회 된 기록에 따라 리스트업
            주 또는 월인 경우 조회 된 한 사람의 기록을
            주 또는 월 단위로 리스트업
           */}
          {contentList.map((item) => (
            <WorkStateList
              key={item.id}
              workDate={date.defaultDate}
              dates={"2024-12-30"}
              isMontly={isWeekMonth}
              empName={item.name}
              dept={item.dept}
              atWork={item.atWork}
              fromWork={item.fromWork}
              nigthWork={item.nigthWork}
              overtime={item.overtime}
              restTime={item.restTime}
              // workTime={item.workTime}
              workTime={getWorkHours(item.atWork, item.fromWork, item.restTime)}
              workType={item.workType}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default WorkState;
