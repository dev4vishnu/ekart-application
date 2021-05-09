import Link from 'next/link';
import NavStyles from '../../../styles/Header/NavBar.style';
function NavBar() {
    return (
        <NavStyles>
            <Link href="/home">Home</Link>
            <Link href="/products">Products</Link>
        </NavStyles>
    )
}
export default NavBar;