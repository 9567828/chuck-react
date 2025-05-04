import { RouterProvider } from "react-router";
import root from "./router/root";
import { isMobile, isTablet } from "react-device-detect";

function App() {
  if (isMobile && !isTablet) {
    alert("모바일에서는 접근 불가합니다.");
    return null;
  }
  return <RouterProvider router={root} />;
}

export default App;
