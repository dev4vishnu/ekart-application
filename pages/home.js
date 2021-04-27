import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getBannerList, getCategoryList, getProductList } from "../services/services";
import HomeContainer from "./../styles/Pages/Home.Styles";
import Category from "../components/molecules/Home/Category";
import Banner from './../components/molecules/Home/Banner';

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
