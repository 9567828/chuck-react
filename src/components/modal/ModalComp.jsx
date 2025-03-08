import PropTypes from "prop-types";
import styled from "styled-components";
import * as s from "../../assets/scss/modules/style.module.scss";

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 240px;
  padding: 17px 17px 10px 22px;
  border-radius: 10px;
  background-color: #fff;
`;

const ModalComp = ({ titleEle, elements, btnClass, btnName, cancelBtnClass, cancelBtnName }) => {
  return (
    <Modal>
      <ModalInner>
        <div className={s.bodyMdM}>{titleEle}</div>
        <div className="modal-content">{elements}</div>
        <div className="modal-footer">
          <div className="btn-wrap">
            <button className={btnClass}>{btnName}</button>
            <button className={cancelBtnClass}>{cancelBtnName}</button>
          </div>
        </div>
      </ModalInner>
    </Modal>
  );
};

export default ModalComp;

ModalComp.propTypes = {
  titleEle: PropTypes.element,
  elements: PropTypes.element,
  btnClass: PropTypes.string,
  btnName: PropTypes.string,
  cancelBtnClass: PropTypes.string,
  cancelBtnName: PropTypes.string,
};
