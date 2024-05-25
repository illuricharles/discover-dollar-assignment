const RenderSubCategory = ({ nestedCategory }) => {
    return (
      <li>
        <div className="nested-dropbox">
          <a href="#" className="subcategory-item">
            {nestedCategory.name}
          </a>
          <ul className="nested-subcategory-item">
            {nestedCategory.subcategories.map((eachCategory) => {
              return (
                <li key={eachCategory.name}>
                  <a href="#" className="subcategory-item-nested">
                    {eachCategory.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    );
  };

export default RenderSubCategory