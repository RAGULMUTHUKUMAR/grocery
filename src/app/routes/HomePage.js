import Header from "../../features/home/components/Header";
import ServiceHighlights from "../../features/home/components/ServiceHighlights";
import SeasonalShowcase from "../../features/home/components/SeasonalShowcase";
import FeaturedProducts from "../../features/catalog/components/FeaturedProducts";
import ProductCatalog from "../../features/catalog/components/ProductCatalog";
import Footer from "../../features/layout/components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServiceHighlights />
        <SeasonalShowcase />
        <FeaturedProducts />
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;