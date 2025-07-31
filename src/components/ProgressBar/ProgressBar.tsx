import cls from "./progressBar.module.css";

interface progressBarProp {
  max: number;
  value: number;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly: boolean;
}

const ProgressBar = ({
  max,
  value,
  step,
  onChange,
  readOnly,
}: progressBarProp) => {
  return (
    <input
      className={cls.styledProgressInput}
      type="range"
      min="0"
      max={max}
      value={value}
      step={step}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export default ProgressBar;
