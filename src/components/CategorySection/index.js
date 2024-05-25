import React from "react";
import backgroundImg from '../../assets/images/background-image.jpg'
import RenderCategoryList from "../RenderCategoryList";
import categories from "../../assets/json/category";
import "./index.css"



const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="container categories-container">
        <h2 className="heading-secondary">Top categories</h2>

        <div className="category-img-section-container">
          <div className="flex-center">
            <nav className="nav-category-section">
              {categories.map((eachCategory, index) => (
                <div className="category-dropdown" key={index}>
                  <a href="#" className="category-item">
                    {eachCategory.name}
                  </a>
                  <ul className="subcategory-list">
                    {eachCategory.subcategories.map(
                      (eachSubCategory, subIndex) => (
                        <RenderCategoryList
                          key={subIndex}
                          subCategory={eachSubCategory}
                        />
                      )
                    )}
                  </ul>
                </div>
              ))}

            </nav>
          </div>

          <div className="img-section-container">
            <img src={backgroundImg} alt="dressed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
