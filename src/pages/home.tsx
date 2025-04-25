import Hero from "@/components/landing_page/hero";
import SectionMaoNaMassa from "@/components/landing_page/section-mao-na-massa";
import SectionRestaurant from "@/components/landing_page/section-restaurant";
import SectionServices from "@/components/landing_page/section-services";

export default function Home() {
    return (
        <main className="bg-gray-50">
            <Hero />

            <SectionServices />

            <SectionRestaurant />

            <SectionMaoNaMassa />
        </main>
    );
}
