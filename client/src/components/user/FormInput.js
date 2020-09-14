import React from "react";

const FormInput = ({
  id,
  inputType,
  labelVisibility = true,
  pattern,
  fixedValue,
  inputValue,
  setInputValue,
  options,
}) => {
  const correctInput = text => {
    if (inputType === "tel") return text.replace(/[^0-9-]/, "");
    return text;
  };

  const inputValidityCheck = () => {
    if (inputValue) setInputValue(inputValue.trim());
  };

  const handleInputChange = e => {
    let breaks = [3, 8];
    setInputValue(correctInput(e.target.value));
    if (e.nativeEvent.inputType === "deleteContentBackward") return;
    if (inputType === "tel" && breaks.includes(inputValue.length)) {
      setInputValue(inputValue + "-");
    }
  };

  return (
    <div className="form-input-container">
      <label className={labelVisibility ? "" : "invisible"} htmlFor={id}>
        {id}
      </label>
      {inputType === "select" ? (
        <select
          className="form-input-field"
          id={id}
          name={id}
          value={inputValue}
          onChange={handleInputChange}
        >
          <option value="" selected disabled>
            선택해주세요
          </option>
          {options.map((opt, i) => {
            return (
              <option key={i} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          onBlur={inputValidityCheck}
          maxLength={inputType === "tel" ? 13 : null}
          type={inputType}
          id={id}
          className="form-input-field"
          pattern={pattern ? "[0-2]{3}-[0-9]{4}-[0-9]{4}" : null}
          value={fixedValue ? fixedValue : inputValue}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default FormInput;
