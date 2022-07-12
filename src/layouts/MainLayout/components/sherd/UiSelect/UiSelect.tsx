import React from "react";
import Select, { components, ControlProps } from "react-select";
import cn from "classnames";

import styles from "./UiSelect.module.scss";
import Icon from "../../../../../preloader/images/_primitives/searchIcon.svg";

import reactSelectOverWriteStyles from "./reactSelectOverWriteStyles";

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

type UiSelectType = {
  label?: string;
  className?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  options: any;
  onChange?: (evt: unknown) => void;
  onFocus?: (evt: unknown) => void;
  value?: unknown;
  rightAction?: unknown;
  placeholder?: string;
};

const UiSelect: React.FC<UiSelectType> = ({
  label,
  onChange,
  onFocus,
  className,
  options,
  errorMessage,
  isInvalid,
  rightAction = null,

  ...res
}) => {
  const handleChange = (evt: unknown): void => {
    if (onChange) {
      onChange(evt);
    }
  };

  const handleFocus = (evt: unknown): void => {
    if (onFocus) {
      onFocus(evt);
    }
  };

  const Control = ({
    children,
    ...props
  }: ControlProps<ColourOption, false>) => {
    return (
      <components.Control {...props}>
        <img src={Icon} alt="mySvgImage" />
        {children}
      </components.Control>
    );
  };

  return (
    <div className={cn(styles.selectWrap, className)}>
      {/*<span>{label}</span>*/}

      <Select
        // {...res}
        components={{
          Control,
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
        }}
        className={cn(styles.select, { [styles.selectError]: isInvalid })}
        onChange={handleChange}
        onFocus={handleFocus}
        options={options}
        styles={reactSelectOverWriteStyles()}
        placeholder="Search any residential property in the City of LA"
      />
      <span className={styles.errorMessage}>{errorMessage}</span>
    </div>
  );
};

export default UiSelect;
