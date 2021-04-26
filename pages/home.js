import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getBannerList, getCategoryList, getProductList } from "../services/services";
import HomeContainer from "./../styles/Pages/Home.Styles";
import Banner from './../components/Home/Banner';
import Category from "../components/Home/Category";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBannerList());
    dispatch(getCategoryList());
    dispatch(getProductList());
  }, []);

  return (
    <HomeContainer>
      <div className="banner">
        <Banner/>
      </div>
      <div role="main">
        <Category />
      </div>
    </HomeContainer>
  );
}
