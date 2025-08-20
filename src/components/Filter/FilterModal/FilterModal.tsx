"use client";

import cls from "./filterModal.module.css";
import { TrackType } from "@/sharedtypes/sharedTypes";

interface FilterModalProps {
  currentFilter: string | null;
  filteredData: TrackType[];
  onClose: () => void;
  onSelect: (value: string) => void;
  selectedValues: string | string[] | null;
}

const FilterModal = ({
  currentFilter,
  filteredData,
  onClose,
  onSelect,
  selectedValues,
}: FilterModalProps) => {
  const getValueToCompare = (item: TrackType) => {
    switch (currentFilter) {
      case "исполнителю":
        return item.author;
      case "году выпуска":
        return item.name;
      case "жанру":
        return item.name;
      default:
        return "";
    }
  };

  const isSelected = (value: string) => {
    if (!selectedValues) return false;

    console.log("isSelected", value);
    console.log("selectedValues", selectedValues);
    console.log("selectedValues.includes(value)", selectedValues.includes(value));

    return currentFilter === "году выпуска"
      ? selectedValues === value
      : selectedValues.includes(value);
  };

  return (
    <div className={cls.modalOverlay} onClick={onClose}>
      <div className={cls.filter__list} onClick={e => e.stopPropagation()}>
        <ul className={cls.modalList}>
          {filteredData.map(item => {
            const value = getValueToCompare(item);
            const selected = isSelected(value);

            return (
              <li
                key={item._id}
                className={`${cls.modalItem} ${
                  selected ? cls.modalItem_active : ""
                }`}
                onClick={() => onSelect(value)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterModal;
