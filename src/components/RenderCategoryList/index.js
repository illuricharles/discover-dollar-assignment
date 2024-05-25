import RenderSubCategory from "../RenderSubCategory";
  
  const RenderCategoryList = ({ subCategory }) => {
    if (subCategory.subcategories) {
      return <RenderSubCategory nestedCategory={subCategory} />;
    }
    return (
      <li key={subCategory.name}>
        <a href="#" className="subcategory-item">
          {subCategory.name}
        </a>
      </li>
    );
  };

  export default RenderCategoryList;