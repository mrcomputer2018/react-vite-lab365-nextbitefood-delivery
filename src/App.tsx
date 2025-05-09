import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import MyCart from "./pages/my-cart";
import NotFound from "./pages/not-found";
import SignUp from "./pages/sign-up";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/signin" element={ < SignIn /> } />
                <Route path="/signup" element={ <SignUp /> } />
                <Route path="/mycart" element={ <MyCart /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
