import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Placeholder title="Каталог" />} />
          <Route path="/catalog/laboratory" element={<Placeholder title="Лабораторные печи" />} />
          <Route path="/catalog/industrial" element={<Placeholder title="Промышленные печи" />} />
          <Route path="/catalog/tunnel" element={<Placeholder title="Тунельные печи" />} />
          <Route path="/catalog/high-temp" element={<Placeholder title="Высокотемпературные печи" />} />
          <Route path="/solutions" element={<Placeholder title="Решения" />} />
          <Route path="/service" element={<Placeholder title="Сервисное обслуживание" />} />
          <Route path="/about" element={<Placeholder title="О нас" />} />
          <Route path="/contacts" element={<Placeholder title="Контакты" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
