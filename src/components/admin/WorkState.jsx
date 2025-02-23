import WorkStateList from "./WorkStateList";
import WorkStateListWM from "./WorkStateListWM";
import PeriodSelectorCompnent from "./../common/PeriodSelectorComponent";
import { useState } from "react";

function WorkState() {
  const { PeriodSelector, isClick } = PeriodSelectorCompnent();

  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState(null);

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

  const onClickDrop = () => {
    setIsActive((prev) => !prev);
  };

  const selectDept = (dept) => {
    // 부서선택
    setSelect(dept);
    // 메뉴닫기
    setIsActive(false);
  };

  return (
    <div className="inner admin">
      <section className="date-pick-section">
        <div id="calenderWrap" className="calender-wrap">
          <div className="select-cal">
            <div id="drawToday" className="get-today"></div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 11.825L8.825 8L5 4.175L6.18333 3L11.1833 8L6.18333 13L5 11.825Z" fill="#616161" />
            </svg>
          </div>
          <div id="calDrop" className="cal-drop">
            {/* 달력 */}
          </div>
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
          ) : (
            <></>
          )}
        </div>
        <div className="input-search-bar">
          <label htmlFor="searchInput">
            <input type="text" name="" id="searchInput" className="input-box small search" placeholder="직원 검색" />
          </label>
        </div>
      </section>

      <section className="emp-table">
        {isClick === "일" ? <WorkStateList /> : isClick === "주" || isClick === "월" ? <WorkStateListWM date={isClick} /> : null}
      </section>
    </div>
  );
}

export default WorkState;
