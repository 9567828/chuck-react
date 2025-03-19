import ModalComp from "./ModalComp";
import PropTypes from "prop-types";
import "../../assets/scss/components/edit-workstate-modal.scss";
import * as s from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";

const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const BeforeTime = styled.p`
  line-height: 30px;
  color: #fff;
`;

const InfoP = styled.p`
  line-height: 21px;
  margin-bottom: 8px;
`;

const EditWorkModal = ({ isEditWork, title, name, date, confirm, closeModal, changeFn, beforeWorkTime }) => {
  return (
    <ModalComp
      width="400px"
      title={
        isEditWork ? (
          <HeadWrap>
            <h1>{name}</h1>
            <p>{date}</p>
          </HeadWrap>
        ) : (
          <>{title}</>
        )
      }
      btnClass={"sub-btn-large"}
      cancelBtnClass={"sub-btn-large cancel"}
      btnName={"확인"}
      cancelBtnName={"취소"}
      confirmFn={confirm}
      cancelFn={closeModal}
    >
      <div className="work-time-wrap">
        <div>
          <p className="edit-text">변경 전</p>
          <BeforeTime className="work-time-box">{beforeWorkTime}</BeforeTime>
        </div>
        <img src="/img/ic_move_in.svg" alt="화살표" />
        <div className="after-edit">
          <label htmlFor="workTimeInput" className="edit-text">
            변경 후
          </label>
          <input
            type="text"
            name=""
            id="workTimeInput"
            className="work-time-input"
            onChange={() => {
              if (changeFn) {
                changeFn();
              }
            }}
          />
        </div>
      </div>
      <InfoP className={`${s.captionXsM} ${s.gray700Font}`}>변경하실 시간을 입력해 주세요.</InfoP>
    </ModalComp>
  );
};

export default EditWorkModal;

EditWorkModal.propTypes = {
  isEditWork: PropTypes.bool,
  title: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  confirm: PropTypes.any,
  closeModal: PropTypes.any,
  changeFn: PropTypes.any,
  beforeWorkTime: PropTypes.any,
};
