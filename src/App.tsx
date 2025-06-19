import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/Sign-in";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signin" element={ <SignIn />} />
                <Route path="*" element={ <NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

