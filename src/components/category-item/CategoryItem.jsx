import styled from "./CategoryItem.module.scss";

const CategoryItem = ({ category }) => {
  return (
    <>
      <div className={styled["category-container"]} key={category.id}>
        <div
          className={styled["background-image"]}
          style={{
            backgroundImage: `url(${category.imageUrl})`,
          }}
        />

        <div className={styled["category-body-container"]}>
          <h2>{category.title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    </>
  );
};
export default CategoryItem;
