import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FunnelProvider } from "./contexts/FunnelContext";
import Index from "./pages/Index";
import Checkout from "./pages/Checkout";
import PostCompra from "./pages/PostCompra";
import Onboarding from "./pages/Onboarding";
import SeleccionarPlan from "./pages/SeleccionarPlan";
import Gracias from "./pages/Gracias";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FunnelProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/post-compra" element={<PostCompra />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/seleccionar-plan" element={<SeleccionarPlan />} />
            <Route path="/gracias" element={<Gracias />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FunnelProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
