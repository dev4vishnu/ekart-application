import Header from './Header/Header';
import Footer from './Footer/Footer';
import { GlobalStyles } from './../styles/Pages/GlobalStyle';
import { ContentAreaStyle } from './../styles/Pages/Pages.styles';
import ToastNotification from './atoms/ToastNotification';


 
const Page=({children})=>{
    return (
        <>
        <GlobalStyles/>
        <Header />
        <ContentAreaStyle>
            {children}
        </ContentAreaStyle>
        <Footer/>
        <ToastNotification />
        </>
    )
}
export default Page;