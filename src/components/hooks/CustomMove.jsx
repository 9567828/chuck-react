import { useNavigate } from "react-router";

const CustomMove = () => {
  const navigate = useNavigate();

  const moveToPage = (url) => {
    navigate(url);
  };

  const moveToEditPage = (url, value) => {
    navigate(url, { state: { value } });
  };

  return { moveToPage, moveToEditPage };
};

export default CustomMove;
