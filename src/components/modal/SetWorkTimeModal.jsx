import ModalComp from "./ModalComp";
import "../../assets/scss/components/set-worktime-modal.scss";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function SetWorkTimeModal({ closeModal }) {
  const [isClick, setIsClick] = useState({});
  const lists = [
    {
      id: 1,
      week: "월",
      startHour: "09",
      startMin: "00",
      finishHour: "18",
      finishMin: "00",
      lunchStart: "12",
      lunchStartMin: "00",
      lunchFinish: "13",
      luchFinishMin: "00",
    },
    {
      id: 2,
      week: "화",
      startHour: "09",
      startMin: "00",
      finishHour: "18",
      finishMin: "00",
      lunchStart: "12",
      lunchStartMin: "00",
      lunchFinish: "13",
      luchFinishMin: "00",
    },
    {
      id: 3,
      week: "수",
      startHour: "09",
      startMin: "00",
      finishHour: "18",
      finishMin: "00",
      lunchStart: "12",
      lunchStartMin: "00",
      lunchFinish: "13",
      luchFinishMin: "00",
    },
    {
      id: 4,
      week: "목",
      startHour: "09",
      startMin: "00",
      finishHour: "18",
      finishMin: "00",
      lunchStart: "12",
      lunchStartMin: "00",
      lunchFinish: "13",
      luchFinishMin: "00",
    },
    {
      id: 5,
      week: "금",
      startHour: "09",
      startMin: "00",
      finishHour: "18",
      finishMin: "00",
      lunchStart: "12",
      lunchStartMin: "00",
      lunchFinish: "13",
      luchFinishMin: "00",
    },
    {
      id: 6,
      week: "토",
      startHour: "09",
      startMin: "00",
      finishHour: "18",
      finishMin: "00",
      lunchStart: "12",
      lunchStartMin: "00",
      lunchFinish: "13",
      luchFinishMin: "00",
    },
    {
      id: 7,
      week: "일",
      startHour: "09",
      startMin: "00",
      finishHour: "18",
      finishMin: "00",
      lunchStart: "12",
      lunchStartMin: "00",
      lunchFinish: "13",
      luchFinishMin: "00",
    },
  ];

  const handleToggleBtn = (idx) => {
    setIsClick((prev) => ({
      ...prev,
      [idx]: !prev[idx], // 해당 id의 상태를 반전
    }));
  };

  return (
    <ModalComp
      width={"990px"}
      padding={"30px 40px"}
      innerGap={"40px"}
      title={"근무 시간 설정"}
      isLargeTit={true}
      gap={"8px"}
      btnClass={"sub-btn-xlarge"}
      cancelBtnClass={"sub-btn-xlarge cancel"}
      btnName={"저장하기"}
      cancelBtnName={"취소"}
      confirmFn={confirm}
      cancelFn={closeModal}
    >
      <div className="set-table">
        <ul>
          <li>근무일</li>
          <li>근무 시간</li>
          <li>점심 시간</li>
          <li>근무일 활성화</li>
        </ul>
        <div className="setting-container">
          {lists.map((item) => (
            <div className="setting-wrap" key={item.id}>
              <p>{item.week}</p>
              <div className="set-work-time">
                <div className="input-wrap">
                  <input type="number" name="" id="" className="input-box-small" />
                  <span>:</span>
                  <input type="number" name="" id="" className="input-box-small" />
                </div>
                <p>~</p>
                <div className="input-wrap">
                  <input type="number" name="" id="" className="input-box-small" />
                  <span>:</span>
                  <input type="number" name="" id="" className="input-box-small" />
                </div>
              </div>
              <div className="set-lunch-time">
                <div className="input-wrap">
                  <input type="number" name="" id="" className="input-box-small" />
                  <span>:</span>
                  <input type="number" name="" id="" className="input-box-small" />
                </div>
                <p>~</p>
                <div className="input-wrap">
                  <input type="number" name="" id="" className="input-box-small" />
                  <span>:</span>
                  <input type="number" name="" id="" className="input-box-small" />
                </div>
              </div>
              <div className={isClick[item.id] ? "toggle-btn on" : "toggle-btn"} onClick={() => handleToggleBtn(item.id)}>
                <div className="toggle"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalComp>
  );
}

export default SetWorkTimeModal;

SetWorkTimeModal.propTypes = {
  closeModal: PropTypes.func,
};
