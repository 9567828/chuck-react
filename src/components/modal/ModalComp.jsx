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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: 24px;
  border-radius: 10px;
  background-color: #fff;
`;

const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`;

const ModalComp = ({
  width,
  height,
  title,
  isEditWork,
  children,
  btnClass,
  btnName,
  cancelBtnClass,
  cancelBtnName,
  confirmFn,
  cancelFn,
}) => {
  return (
    <Modal>
      <ModalInner width={width} height={height}>
        {isEditWork ? <HeadWrap className={s.bodyMdM}>{title}</HeadWrap> : <div className={s.bodyMdM}>{title}</div>}
        <div className="modal-content">{children}</div>
        <BtnWrap>
          <button
            onClick={() => {
              if (confirmFn) {
                confirmFn();
              }
            }}
            className={btnClass}
          >
            {btnName}
          </button>
          <button
            onClick={() => {
              if (cancelFn) {
                cancelFn();
              }
            }}
            className={cancelBtnClass}
          >
            {cancelBtnName}
          </button>
        </BtnWrap>
      </ModalInner>
    </Modal>
  );
};

export default ModalComp;

ModalComp.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isEditWork: PropTypes.bool,
  title: PropTypes.any,
  children: PropTypes.element,
  btnClass: PropTypes.string,
  btnName: PropTypes.string,
  cancelBtnClass: PropTypes.string,
  cancelBtnName: PropTypes.string,
  confirmFn: PropTypes.any,
  cancelFn: PropTypes.any,
};
