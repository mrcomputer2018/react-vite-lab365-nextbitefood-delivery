import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import MyCart from "./pages/my-cart";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/signin" element={ < SignIn /> } />
                <Route path="/mycart" element={ <MyCart /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
