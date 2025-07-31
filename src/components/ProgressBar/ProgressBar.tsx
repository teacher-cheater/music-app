import cls from './progressBar.module.css'

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
      className={cls.styledProgressInput} // Применение стилей к ползунку
      type="range" // Тип элемента - ползунок
      min="0" // Минимальное значение ползунка
      max={max} // Максимальное значение, зависит от длительности аудио
      value={value} // Текущее значение ползунка
      step={step} // Шаг изменения значения
      onChange={onChange} // Обработчик события изменения
      readOnly={readOnly}
    />
  );
};

export default ProgressBar;
