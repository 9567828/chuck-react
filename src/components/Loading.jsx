import { useEffect, useState } from "react";

function Loading() {
  const [showFallback, setShowFallBack] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFallBack(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  if (showFallback) {
    return (
      <div className="loading">
        <img src="../../img/loading.gif" alt="" />
      </div>
    );
  }
}

export default Loading;
