import PropTypes from "prop-types";

function EditWorkStateModal({ beforeWorkTime, confirmFn, cancelFn, changeFn }) {
  return (
    <div className="time-edit-modal">
      <div className="edit-modal-inner">
        <div className="edit-modal-header">
          <span className="emp-name-modal"></span>
          <span id="modalWorkDate" className="work-date">
            2024년 12월 28일
          </span>
        </div>
        <div className="work-time-wrap">
          <div className="edit-wrap before-edit">
            <p className="edit-text">변경 전</p>
            <p className="work-time-box before-time">{beforeWorkTime}</p>
          </div>
          <img src="/img/ic_move_in.svg" alt="화살표" />
          <div className="edit-wrap after-edit">
            <label htmlFor="workTimeInput" className="edit-text">
              변경 후
            </label>
            <input
              type="text"
              name=""
              id="workTimeInput"
              className="work-time-box work-time-input"
              onChange={() => {
                if (changeFn) {
                  changeFn();
                }
              }}
            />
          </div>
        </div>
        <p className="message edit-work-info">변경하실 시간을 입력해 주세요.</p>
        <div className="edit-btn-wrap">
          <button
            className="confirm-btn"
            onClick={() => {
              if (confirmFn) {
                confirmFn();
              }
            }}
          >
            확인
          </button>
          <button
            className="confirm-btn cancel"
            onClick={() => {
              if (cancelFn) {
                cancelFn();
              }
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditWorkStateModal;

EditWorkStateModal.propTypes = {
  beforeWorkTime: PropTypes.any,
  confirmFn: PropTypes.func,
  cancelFn: PropTypes.func,
  changeFn: PropTypes.func,
};
