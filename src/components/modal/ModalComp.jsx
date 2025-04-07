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
  z-index: 100;
`;

const ModalInner = styled.div.withConfig({
  shouldForwardProp: (prop) => !["padding", "width", "innerGap"].includes(prop),
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props) => (props.innerGap ? props.innerGap : "24px")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "24px")};
  border-radius: 10px;
  background-color: #fff;
`;

// 혹시 몰라서 안지워둔 것
// const HeadWrap = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 13px;
// `;

const BtnWrap = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap",
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "4px")};
`;

// width, height, padding, innerGap(inner의 gap), gap(모달 전체 gap) 까지 스타일 적용
// title: 모달 타이틀, isLargetitle: 모달의 기본 폰트18 이고 그 이상일 때 boolean으로
// childern: 모달내용으로 자식 컴포넌트 설정 props
// btnClass, cancelBtnClass: 모달내의 버튼 스타일 적용 할 클래스명
// btnName, cancelBtnName: 버튼에 들어가는 innerText
// confirmFn, cancelFn: 모달에 들어갈 함수 (cancel은 닫는 기능임)
// isEdit은 필요없으면 지울 예정
const ModalComp = ({
  width,
  height,
  padding,
  innerGap,
  gap,
  title,
  isLargeTit,
  // isEditWork,
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
      <ModalInner width={width} height={height} padding={padding} innerGap={innerGap}>
        {/* {isEditWork ? (
          <HeadWrap className={!isLargeTit ? s.bodyMdM : s.titleLgB}>{title}</HeadWrap>
        ) : (
          <div className={!isLargeTit ? s.bodyMdM : s.titleLgB}>{title}</div>
        )} */}
        <div className={!isLargeTit ? s.bodyMdM : s.titleLgB}>{title}</div>
        <div className="modal-content">{children}</div>
        <BtnWrap gap={gap}>
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
  padding: PropTypes.string,
  innerGap: PropTypes.string,
  gap: PropTypes.string,
  // isEditWork: PropTypes.bool,
  title: PropTypes.any,
  isLargeTit: PropTypes.bool,
  children: PropTypes.element,
  btnClass: PropTypes.string,
  btnName: PropTypes.string,
  cancelBtnClass: PropTypes.string,
  cancelBtnName: PropTypes.string,
  confirmFn: PropTypes.any,
  cancelFn: PropTypes.any,
};
