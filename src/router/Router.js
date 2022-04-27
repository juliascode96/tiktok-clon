import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UploadPage from '../pages/UploadPage'
import Header from '../components/Header'

const Router = () => {
    return(
        <HashRouter>
            <Header />
            <Routes>
                <Route path='/upload' element={<UploadPage />}/>
                <Route path='/' element={<Home />} />
            </Routes>
        </HashRouter>
    )
}

export default Router