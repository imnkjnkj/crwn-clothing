import styled from "./Directory.module.scss";
import CategoryItem from "../category-item/CategoryItem";
const Directory = ({ categories }) => {
  return (
    <div className={styled["categories-container"]}>
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default Directory;
