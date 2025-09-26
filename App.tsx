import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import DonorSignUp from "./pages/DonorSignUp";
import ReceiverSignUp from "./pages/ReceiverSignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import DonorDashboard from "./pages/DonorDashboard";
import PostDonation from "./pages/PostDonation";
import GetMatched from "./pages/GetMatched";
import DonationList from "./pages/DonationList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/donor" element={<DonorSignUp />} />
          <Route path="/signup/receiver" element={<ReceiverSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<DonorDashboard />} />
          <Route path="/post-donation" element={<PostDonation />} />
          <Route path="/get-matched" element={<GetMatched />} />
          <Route path="/donation-list" element={<DonationList />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
