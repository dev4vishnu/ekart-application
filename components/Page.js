import Header from './Header/Header';
import Footer from './Footer/Footer';
import { GlobalStyles } from './../styles/Pages/GlobalStyle';
import { ContentAreaStyle } from './../styles/Pages/Pages.styles';


 
const Page=({children})=>{
    return (
        <>
        <GlobalStyles/>
        <Header />
        <ContentAreaStyle>
            {children}
        </ContentAreaStyle>
        <Footer/>
        </>
    )
}
export default Page;