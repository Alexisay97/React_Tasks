import classNames from "classnames";

const Checkbox = ({
  id,
  name,
  label,
  checked,
  onChange,
  disabled,
  styleClasses
}: CheckBoxProps) => {
  return (
    <div className={classNames("flex items-center mb-4 ", styleClasses)}>
      <input
        id={id}
        name={name}
        disabled={disabled}
        className={classNames(
          "flex w-5 h-5 border-2 justify-center items-center rounded mr-1 disabled:border-gray11",
          {
            "accent-blue2": checked,
          }
        )}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label && (
        <label htmlFor={id} className={disabled ? "text-gray7" : ""}>
          &nbsp;{label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
