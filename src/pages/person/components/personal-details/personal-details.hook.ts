import React, { useCallback } from "react";

const useHomeHook = () => {
  const [topFive, _] = React.useState([
    "GrahamCampbell",
    "fabpot",
    "weierophinney",
    "rkh",
    "josh",
  ]);

  const generatePathname = useCallback((username: string) => {
    return { to: ["/person", username].join("/") };
  }, []);

  return { topFive, generatePathname };
};

export default useHomeHook;
