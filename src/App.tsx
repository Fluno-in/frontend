import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AuthLayout from './components/layout/AuthLayout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FeaturesPage from './pages/FeaturesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import VerifyEmailPage from './pages/auth/VerifyEmailPage';
import VerifyOtp from './pages/auth/VerifyOtp';
import BusinessOnboarding from './pages/onboarding/BusinessOnboarding';
import InfluencerOnboarding from './pages/onboarding/InfluencerOnboarding';
import LinkSocials from './pages/onboarding/LinkSocials';
import InfluencerDashboard from './pages/InfluencerDashboard';
import BusinessDashboard from './pages/BusinessDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="cookie-policy" element={<CookiePolicyPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
        <Route path="verify-otp" element={<VerifyOtp />} />
        <Route path="onboarding/business" element={<BusinessOnboarding />} />
        <Route path="onboarding/influencer" element={<InfluencerOnboarding />} />
        <Route path="onboarding/linksocials" element={<LinkSocials />} />
        <Route path="dashboard/influencer" element={<InfluencerDashboard />} />
        <Route path="dashboard/business" element={<BusinessDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
