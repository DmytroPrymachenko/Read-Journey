import { useState } from "react";
import { FilterSelect } from "./MyBooksFilter.Styled";

const options = [
  { value: "desc", label: "Unread" },
  { value: "after10", label: "In progress" },
  { value: "past10", label: "Done" },
  { value: "all", label: "All books" },
];

const MyBooksFilter = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <FilterSelect
      onChange={setSelectedOption}
      name="filter"
      components={{
        IndicatorSeparator: () => null,
      }}
      options={options}
      aria-label="Filter for the books"
      placeholder="All books"
      defaultValue={selectedOption}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "var(--dark-grey)",
          boxShadow: state.isFocused ? "#3e3e3e" : "#3e3e3e",
          borderRadius: "12px",
          width: "120px",
          height: "40px",
          cursor: "pointer",
          border: "1px solid #3e3e3e",
          ":hover": {
            borderColor: "#3e3e3e",
            outline: "none",
          },
          ":active": {
            borderColor: "#3e3e3e",
            outline: "none",
          },
          caretColor: "transparent",
        }),
        singleValue: (b) => ({
          ...b,
          color: "var(--white)",
        }),
        dropdownIndicator: (b, s) => ({
          ...b,
          color: s.isFocused ? "var(--white)" : "var(--white)",
          transform: s.isFocused ? "rotate(180deg)" : "rotate(0deg)",
          ":hover": {
            color: "var(--white)",
            transform: "rotate(180deg)",
          },
          ":active": {
            transform: "rotate(180deg)",
          },
        }),
        option: (b, s) => ({
          ...b,
          color: !s.isSelected ? "var(--input-title)" : "var(--white)",
          backgroundColor: "var(--input-bg)",
          height: "22px",
          cursor: "pointer",
          "&:last-child": {
            paddingBottom: "28px",
          },
          ":active": {
            color: s.isSelected ? "var(--white)" : "var(--input-title)",
          },
        }),
        menu: (styles) => ({
          ...styles,
          borderRadius: "12px",
          backgroundColor: "var(--input-bg)",
        }),
        placeholder: (defaultStyles) => ({
          ...defaultStyles,
          color: "var(--white)",
        }),
        menuList: (styles) => ({
          ...styles,
          borderRadius: "12px",
          color: "var(--white)",
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            borderRadius: "10px",

            background: "rgba(255, 255, 255, 0.05)",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "10px",

            background: "rgba(18, 20, 23, 0.05)",
          },
          "::-webkit-scrollbar-thumb:hover": {
            borderRadius: "10px",

            background: "rgba(7, 8, 9, 0.05)",
          },
        }),
      }}
    />
  );
};

export default MyBooksFilter;
