import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { CategoriesContainer } from "../../../styles/Pages/Home.Styles";
import { CategoryCard } from "./../../atoms/Home/CategoryCard";

export default function Category() {
  const categories = useSelector((state) => state.categories);
  const route = useRouter();

  const categoryDetailedView = (id) => {
    route.push({
      pathname: `products/${id}`,
    });
  };

  return (
    <CategoriesContainer>
      {categories.map((_category, index) => {
        if (_category.enabled) {
          return (
            <div className="EachCategoryCard">
              <CategoryCard
                category={_category}
                flexDirection={index % 2 == 0 ? "row" : "row-reverse"}
                handleClick={categoryDetailedView}
                key={_category.id}
              />
            </div>
          );
        } else return;
      })}
    </CategoriesContainer>
  );
}
