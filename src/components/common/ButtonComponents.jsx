import PropTypes from "prop-types";

const ButtonComponent = () => {
  const ButtonPrimary = ({ type, className, form, disabled, text }) => {
    return (
      <button type={type} className={className} form={form} disabled={disabled}>
        <span>{text}</span>
      </button>
    );
  };

  ButtonPrimary.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    form: PropTypes.string,
    disabled: PropTypes.any,
    text: PropTypes.string,
  };

  const EditWorkBtn = () => {
    return (
      <div className="edit-btn-box">
        <button className="edit-btn">
          <img src="/img/ic_edit.svg" alt="수정버튼" />
          <span>수정하기</span>
        </button>
      </div>
    );
  };

  return { ButtonPrimary, EditWorkBtn };
};

export default ButtonComponent;
