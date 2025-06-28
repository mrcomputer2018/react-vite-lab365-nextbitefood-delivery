import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/sign-up";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signin" element={ <SignIn />} />
                <Route path="signup" element={ <SignUp />} />
                <Route path="*" element={ <NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

