const reactSelectOverWriteStyles = () => {
  return {
    option: (provided: any, state: any): any => ({
      ...provided,
      backgroundColor: "$white",
      color: "$selectFontColor",
      border: undefined,
      "&:hover": {
        backgroundColor: "#F5F6FA",
        color: "#404040",
      },
      cursor: "pointer",
    }),
    control: (provided: any): any => ({
      ...provided,
      backgroundColor: "$white",
      borderColor: undefined,
      borderStyle: undefined,
      borderWidth: undefined,
      minHeight: undefined,
      padding: "0 8px",
      outline: undefined,
      boxShadow: "none",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      border: undefined,
    }),
    singleValue: (provided: any, state: any): any => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
    menu: (provided: any) => ({
      ...provided,
      width: "100%",
      border: undefined,
    }),
  };
};

export default reactSelectOverWriteStyles;
