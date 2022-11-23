import MainLayout from "@/components/Layouts/MainLayout";
import Home from "@/containers/Home";
import CartProvider from "@/containers/Home/Cart/CartProvider";

export default function HomePage() {
  return (
    <MainLayout>
      <CartProvider>
        <Home />
      </CartProvider>
    </MainLayout>
  );
}
