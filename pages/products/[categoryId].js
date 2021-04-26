import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  LeftSideNavStyle,
  ProductListing,
  ProductsGridStyle,
  SoldOutStyle,
} from "./../../styles/Pages/Products.Styles";
import ProductView from './../../components/Products/ProductView';

export default function CategoryDetailedView() {
  const { query } = useRouter();
  const productsList = useSelector((state) => state.products);
  const categoryList = useSelector((state) => state.categories);
  const [selectedProductCategory, setCategory] = useState([]);
  const { categoryId } = query;
  useEffect(() => {
    let list = productsList.length
      ? productsList.filter((product) => product.category === categoryId)
      : [];
    setCategory(list);
  }, []);

  const toggleCategory = (id) => {
    let key = id ? id : categoryId
    let list = productsList.length
      ? productsList.filter((product) => product.category === key)
      : [];
    setCategory(list);
    renderResult();
  };

  const renderResult = () => {
    if (selectedProductCategory.length) {
      return selectedProductCategory.map(product => {
        return( 
            <ProductView product={product} />
        )
      });
    }else{
        return <SoldOutStyle>Oops! All products under this category are SOLD OUT ! </SoldOutStyle>
    }
  };

  return (
    <ProductListing>
      <LeftSideNavStyle>
        <ul>
          {categoryList.map((category, key) => (
            <li
              key={category.key}
              onClick={() => {
                toggleCategory(category.id);
              }}
            >
              {" "}
              {category.name}{" "}
            </li>
          ))}
        </ul>
      </LeftSideNavStyle>
      <ProductsGridStyle>
          {renderResult()}
     </ProductsGridStyle>
    </ProductListing>
  );
}
