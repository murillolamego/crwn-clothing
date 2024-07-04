import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ key, title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="nav-link" to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={key} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
