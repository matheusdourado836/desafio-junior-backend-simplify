import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Home from 'pages/Home';
import { DefaultPage } from 'components/DefaultPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Login />} />
                <Route path='/home/:userId' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}