import ModalComp from "./ModalComp";
import "../../assets/scss/components/set-worktime-modal.scss";
import PropTypes from "prop-types";
import { useState } from "react";

function SetWorkTimeModal({ closeModal, workingList }) {
  // const [isClick, setIsClick] = useState({});

  const [workList, setWorkList] = useState(workingList);

  console.log(workList);

  const splitMinutes = (time) => {
    let startTime = "";
    let finishTime = "";
    workingList
      .map((m) => m[time])
      .forEach((v) => {
        startTime = v.slice(0, 2);
        finishTime = v.slice(3, 5);
      });

    return { startTime, finishTime };
  };

  const workTimeStart = splitMinutes("start");
  const workTimeFinish = splitMinutes("finish");
  const lunchStart = splitMinutes("lunchStart");
  const lunchFinish = splitMinutes("lunchFinish");

  const handleToggleBtn = (idx) => {
    // setIsClick((prev) => ({
    //   ...prev,
    //   [idx]: !prev[idx], // 해당 id의 상태를 반전
    // }));

    console.log(idx);
    const updateBool = workList.map((opt) => (opt.id === idx ? { ...opt, work: true } : { ...opt, work: false }));

    setWorkList(updateBool);
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
          <li>
            <span>근무일</span>
            <span>근무 시간</span>
          </li>
          <li>
            <span>점심 시간</span>
            <span>근무일 활성화</span>
          </li>
        </ul>
        <div className="setting-container">
          {workList.map((item) => {
            return (
              <div className="setting-wrap" key={item.id}>
                <p>{item.day}</p>
                <div className="set-work-time">
                  {/* 근무시간 */}
                  <div className="input-wrap">
                    {/* 시작시간 */}
                    <input type="number" name="" id="" className="input-box-small" placeholder={workTimeStart.startTime} />
                    <span>:</span>
                    <input type="number" name="" id="" className="input-box-small" placeholder={workTimeStart.finishTime} />
                  </div>
                  <p>~</p>
                  {/* 종료시간 */}
                  <div className="input-wrap">
                    <input type="number" name="" id="" className="input-box-small" placeholder={workTimeFinish.startTime} />
                    <span>:</span>
                    <input type="number" name="" id="" className="input-box-small" placeholder={workTimeFinish.finishTime} />
                  </div>
                </div>
                <div className="set-lunch-time">
                  {/* 점심시간 */}
                  <div className="input-wrap">
                    {/* 시작 시간 */}
                    <input type="number" name="" id="" className="input-box-small" placeholder={lunchStart.startTime} />
                    <span>:</span>
                    <input type="number" name="" id="" className="input-box-small" placeholder={lunchStart.finishTime} />
                  </div>
                  <p>~</p>
                  {/* 종료 시간 */}
                  <div className="input-wrap">
                    <input type="number" name="" id="" className="input-box-small" placeholder={lunchFinish.startTime} />
                    <span>:</span>
                    <input type="number" name="" id="" className="input-box-small" placeholder={lunchFinish.finishTime} />
                  </div>
                </div>
                <div
                  // className={item.work ? "toggle-btn on" : isClick[item.id] ? "toggle-btn on" : "toggle-btn"}
                  className={item.work ? "toggle-btn on" : "toggle-btn"}
                  onClick={() => handleToggleBtn(item.id)}
                >
                  <div className="toggle"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ModalComp>
  );
}

export default SetWorkTimeModal;

SetWorkTimeModal.propTypes = {
  closeModal: PropTypes.func,
  workingList: PropTypes.object,
};
