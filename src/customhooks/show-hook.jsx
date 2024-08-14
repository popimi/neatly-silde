import { useState } from "react";

function useShow(i = false) {
  const [show, setValue] = useState(i);

  const toggle = () => setValue(!show);

  return [show, toggle];
}

export default useShow;
