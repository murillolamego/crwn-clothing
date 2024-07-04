import { Outlet } from "react-router-dom";

import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div>
      <Outlet />
      <div className="directory-container">
        {categories.map((category) => (
          <DirectoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
