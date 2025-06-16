import { createRoot } from 'react-dom/client'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import SubscriptionList from './subscription/SubscriptionList.tsx'
import './index.css'
import CommentSection from './comment/CommentSection.tsx'

createRoot(document.getElementById('root')!).render(
    <>
        <Header/>
        <CommentSection articleId={2} commentUserName="Jimmy" />
        <Footer/>
    </>

)
