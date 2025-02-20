function WorkState() {
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
            {/* 수정버튼 */}
          </div>
        </div>
        <div className="date-pick-wrap">
          <div id="todayBtn" className="date-btn date-today">
            오늘
          </div>
          <div className="date-pick">
            <div className="date-btn date-day on">일</div>
            <div className="date-btn date-week">주</div>
            <div className="date-btn date-month">월</div>
          </div>
        </div>
      </section>

      <section className="select-emp">
        <div className="select-wrap">
          <div className="select-box">
            <div className="select-one">부서 선택</div>
            <img src="/img/ic_move_in.svg" alt="화살표" />
          </div>
          <div className="sel-options">
            <p>전체</p>
            <p>경영팀</p>
            <p>기획전략팀</p>
            <p>재무팀</p>
            <p>개발팀</p>
            <p>프로덕트 디자인팀</p>
            <p>브랜드 디자인팀</p>
            <p>퍼포먼스 마케팅팀</p>
            <p>콘텐츠 기획팀</p>
            <p>CS팀</p>
          </div>
        </div>
        <div className="input-search-bar">
          <label htmlFor="searchInput">
            <input type="text" name="" id="searchInput" className="input-box small search" placeholder="직원 검색" />
          </label>
        </div>
      </section>

      <section className="emp-table">
        <div id="dateTable" className="table-wrap date-table">
          <ul className="table-title">
            <li className="table-head">이름</li>
            <li className="table-head">직책</li>
            <li className="table-head">출근시간</li>
            <li className="table-head">퇴근시간</li>
            <li className="table-head">근무형태</li>
            <li className="table-head">휴게시간</li>
            <li className="table-head">연장근무시간</li>
            <li className="table-head">근무시간</li>
            <li className="table-head">야간근무시간</li>
          </ul>
          <ul className="table-content">
            <li className="table-data emp-name">김성은</li>
            <li className="table-data dept-name">프론트엔드 개발자</li>
            <li className="table-data edit-data">
              <p>-</p>
              {/* 수정버튼 */}
            </li>
            <li className="table-data edit-data">
              <p>-</p>
              {/* 수정버튼 */}
            </li>
            <li className="table-data">결근</li>
            <li className="table-data">1시간</li>
            <li className="table-data edit-data">
              <p>-</p>
              {/* 수정버튼 */}
            </li>
            <li className="table-data">-</li>
            <li className="table-data">-</li>
          </ul>
        </div>
        <div id="weekMonthTable" className="week-month-wrap">
          <div className="table-grid">
            <div className="emp-work-info">
              <div className="emp-info">
                <div className="emp-name">김영식</div>
                <div className="emp-position">CEO</div>
              </div>
              <div className="daily-rate">
                단위: <span className="rate-name">주</span>
              </div>
              <ul className="work-times">
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
                <li className="table-head">날짜</li>
                <li className="table-head">출근시간</li>
                <li className="table-head">퇴근시간</li>
                <li className="table-head">근무형태</li>
                <li className="table-head">휴게시간</li>
                <li className="table-head">연장근무시간</li>
                <li className="table-head">근무시간</li>
                <li className="table-head">야간근무시간</li>
              </ul>
              <ul className="table-content">
                <li className="table-data work-date">2025.01.23</li>
                <li className="table-data edit-data">
                  <p>10:30</p>
                  {/* 수정버튼 */}
                </li>
                <li className="table-data edit-data">
                  <p>-</p>
                  {/* 수정버튼 */}
                </li>
                <li className="table-data">결근</li>
                <li className="table-data">1시간</li>
                <li className="table-data edit-data">
                  <p>-</p>
                  {/* 수정버튼 */}
                </li>
                <li className="table-data">-</li>
                <li className="table-data">-</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 모달 */}
    </div>
  );
}

export default WorkState;
