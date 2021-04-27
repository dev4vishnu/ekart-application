import { Button } from "@material-ui/core";
import { CategoryCardStyle,useStyles } from "../../../styles/Pages/Home.Styles";

export const CategoryCard = ({ flexDirection, category, handleClick }) => {
  const classes = useStyles();
    return (
      <>
        <CategoryCardStyle  flexDirection={flexDirection}>
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
              classes = {{root: classes.exploreButton}}
            >
              Explore {category.key}
            </Button>
          </div>
        </CategoryCardStyle>
      </>
    );
  };