import Hero from "./components/landing_page/hero";
import SectionRestaurant from "./components/landing_page/section-restaurant";
import SectionServices from "./components/landing_page/section-services";

function App() {
    return (
        <main className="bg-gray-50">
            <Hero />

            <SectionServices />

            <SectionRestaurant />
        </main>
    );
}

export default App;
