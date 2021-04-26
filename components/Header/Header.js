import Link from 'next/link';
import HeaderStyles from './../../styles/Header/Header.style';
import Logo from './Logo';
import NavBar from './NavBar';
import {useSelector} from "react-redux";
import ShoppingCart from './ShoppingCart';

function Header() {
    const {isLoggedIn} = useSelector(state=>state.userDetails);
    const CartArray = useSelector((state) => state.userCart);
    let cartItems = [...new Set(CartArray)];

    return (
        <HeaderStyles>
            <div className="lhs">
                <Logo />
               {isLoggedIn && <NavBar />}
            </div>
            <div className="rhs">
                <div className="login-reg">
                <Link href="/signin">Sign In</Link>
                <Link href="/signup">Sign Up</Link>
                </div>
                <ShoppingCart count={cartItems.length} isLoggedIn={isLoggedIn}/>
            </div>
        </HeaderStyles>
    )
}
export default Header;