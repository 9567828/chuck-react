import { useNavigate } from "react-router";

const CustomMove = () => {
  const navigate = useNavigate();

  const moveToPage = (url) => {
    navigate(url);
  };

  return { moveToPage };
};

export default CustomMove;
