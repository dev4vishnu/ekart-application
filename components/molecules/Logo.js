import Link from 'next/link';
import LogoStyles from '../../styles/Header/Logo.style';
function Logo(){
    return (        
        <LogoStyles>
            <Link href="/home">
                <img src="static/images/logo.png" />
            </Link>
        </LogoStyles>
    )
}
export default Logo;