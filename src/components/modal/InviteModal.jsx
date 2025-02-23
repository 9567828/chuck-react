import * as s from "../../assets/scss/modules/style.module.scss";
import PropTypes from "prop-types";

function InviteModal({ closeFn, confirmFn, cancelFn }) {
  return (
    <div className="invite-modal">
      <div className="modal-head">
        <h3 className={`${s.captionXs} ${s.fontBold}`}>요청</h3>
        <button
          className="close-modal"
          onClick={() => {
            if (closeFn) {
              closeFn();
            }
          }}
        >
          <img src="/img/main-icons/ic_cancle_small-24x24.svg" alt="취소" />
        </button>
      </div>
      <div className="modal-inner">
        <div className="modal-content">
          <h3 className={`content-title ${s.captionXs}`}>새로운 가입 요청이 있어요.</h3>
          <div className={`content-info invite ${s.captionXxs}`}>
            <p>아이디 : rlawlgh486@naver.com</p>
            <p>코드 : 246825</p>
          </div>
          <div className="modal-btn-wrap">
            <button
              className="modal-btn"
              onClick={() => {
                if (confirmFn) {
                  confirmFn();
                }
              }}
            >
              수락
            </button>
            <button
              className="modal-btn cancel"
              onClick={() => {
                if (cancelFn) {
                  cancelFn();
                }
              }}
            >
              거절
            </button>
          </div>
        </div>
      </div>
      <div className="modal-footer"></div>
    </div>
  );
}

export default InviteModal;

InviteModal.propTypes = {
  closeFn: PropTypes.func,
  confirmFn: PropTypes.func,
  cancelFn: PropTypes.func,
};
