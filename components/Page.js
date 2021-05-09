import Header from './organisms/Header/index';
import { GlobalStyles } from './../styles/Pages/GlobalStyle';
import { ContentAreaStyle } from './../styles/Pages/Pages.styles';
import ToastNotification from './atoms/ToastNotification';
import Footer from './organisms/Footer';


 
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