import * as s from "../../assets/scss/modules/style.module.scss";
import PropTypes from "prop-types";

function AlamModal({ closeFn }) {
  return (
    <div className="alarm-modal">
      <div className="modal-head">
        <h3 className={`${s.captionXsB}`}>알림</h3>
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
      <div className="modal-inner alarm">
        <div className="modal-content">
          <div className="content-title alarm">
            <p className={`${s.captionXsM} alarm`}>카테고리</p>
            <span className="alarm-circle"></span>
          </div>
          <div className={`content-info alarm ${s.captionXsM}`}>
            <p>글자는 최대 2줄 까지 노출됩니다. 글자는 최대 2줄 까지 노출됩니다.글자는 최대 2줄 까지 노출됩니다.</p>
          </div>
          <p className={`period-date ${s.captionXxsM}`}>1달 전</p>
        </div>
        <div className="modal-content">
          <div className="content-title alarm">
            <p className={`${s.captionXsM} alarm`}>카테고리</p>
            <span className="alarm-circle"></span>
          </div>
          <div className={`content-info alarm ${s.captionXsM}`}>
            <p>글자는 최대 2줄 까지 노출됩니다. 글자는 최대 2줄 까지 노출됩니다.글자는 최대 2줄 까지 노출됩니다.</p>
          </div>
          <p className={`period-date ${s.captionXxsM}`}>1달 전</p>
        </div>
        <div className="modal-content">
          <div className="content-title alarm">
            <p className={`${s.captionXsM} alarm`}>카테고리</p>
            <span className="alarm-circle"></span>
          </div>
          <div className={`content-info alarm ${s.captionXsM}`}>
            <p>글자는 최대 2줄 까지 노출됩니다. 글자는 최대 2줄 까지 노출됩니다.글자는 최대 2줄 까지 노출됩니다.</p>
          </div>
          <p className={`period-date ${s.captionXxsM}`}>1달 전</p>
        </div>
        <div className="modal-content">
          <div className="content-title alarm">
            <p className={`${s.captionXsM} alarm`}>카테고리</p>
            <span className="alarm-circle"></span>
          </div>
          <div className={`content-info alarm ${s.captionXsM}`}>
            <p>글자는 최대 2줄 까지 노출됩니다. 글자는 최대 2줄 까지 노출됩니다.글자는 최대 2줄 까지 노출됩니다.</p>
          </div>
          <p className={`period-date ${s.captionXxsM}`}>1달 전</p>
        </div>
      </div>
    </div>
  );
}

export default AlamModal;

AlamModal.propTypes = {
  closeFn: PropTypes.func,
};
