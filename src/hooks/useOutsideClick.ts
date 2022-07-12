import { useEffect } from "react";

const useOutsideClick = (ref: any, callback: any, active: boolean) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = (e: any) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      e.target.type !== "button"
    ) {
      console.log(active);
      if (active) {
        callback(e);
      }
    }
  };
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.addEventListener("click", handleClick);

    return () => {
      // eslint-disable-next-line no-undef
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
};

export default useOutsideClick;
