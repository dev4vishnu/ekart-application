import {
  CategoriesContainer,
  CategoryCardStyle,
} from "./../../styles/Pages/Home.Styles";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const CategoryCard = ({ flexDirection, category, handleClick }) => {
  return (
    <>
      <CategoryCardStyle flexDirection={flexDirection}>
        <div className="category-img">
          <img src={category.imageUrl} alt={category.name} />
        </div>
        <div className="category-details">
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          <Button
            onClick={()=>handleClick(category.id)}
            size="small"
            variant="contained"
            color="secondary"
          >
            Explore {category.key}
          </Button>
        </div>
      </CategoryCardStyle>
    </>
  );
};

export default function Category() {
    const categories = useSelector((state) => state.categories);
    const route = useRouter();

    const categoryDetailedView = (id) => {
      route.push({
        pathname: `products/${id}`
    });
  };

  return (
    <CategoriesContainer>
      {categories.map((_category, index) => {
        if (_category.enabled) {
          return (
            <CategoryCard
              category={_category}
              flexDirection={index % 2 == 0 ? "row" : "row-reverse"}
              handleClick={categoryDetailedView}
              key={_category.id}
            />
          );
        } else return ;
      })}
    </CategoriesContainer>
  );
}
