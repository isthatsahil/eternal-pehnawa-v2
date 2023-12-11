import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import RecentProducts from "@/components/RecentProducts";

export default async function Home() {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <RecentProducts />
      <Mission />
    </div>
  );
}
