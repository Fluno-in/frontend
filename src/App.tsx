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

// Influencer Dashboard
import InfluencerDashboardLayout from './components/layout/InfluencerDashboardLayout';
import InfluencerOverview from './pages/dashboard/influencer/influencerOverview';
import InfluencerAds from './pages/dashboard/influencer/Ads';
import InfluencerRequests from './pages/dashboard/influencer/Requests';
import InfluencerProfile from './pages/dashboard/influencer/influencerProfile';;
import InfluencerHelp from './pages/dashboard/shared/HelpAndSupport'

// Business Dashboard
import BusinessDashboardLayout from './components/layout/BusinessDashboardLayout';
import BusinessOverview from './pages/dashboard/business/businessOverview';
import BusinessPostAds from './pages/dashboard/business/PostAds';
import BusinessApplications from './pages/dashboard/business/Applications';
import BusinessInfluencers from './pages/dashboard/business/AvailableInfluencers';
import BusinessProfile from './pages/dashboard/influencer/influencerProfile';
import BusinessHelp from './pages/dashboard/shared/HelpAndSupport'
;


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

       {/* Influencer Dashboard Routes */}
      <Route path="dashboard/influencer" element={<InfluencerDashboardLayout />}>
        <Route index element={<InfluencerOverview />} />
        <Route path='overview' element={< InfluencerOverview />} />
        <Route path="ads" element={<InfluencerAds />} />
        <Route path="requests" element={<InfluencerRequests />} />
        <Route path="profile" element={<InfluencerProfile />} />
        <Route path="help" element={<InfluencerHelp />} />
      </Route>

      {/* Business Dashboard Routes */}
      <Route path="dashboard/business" element={<BusinessDashboardLayout />}>
        <Route index element={<BusinessOverview />} />
        <Route path='overview' element={< BusinessOverview/>} />
        <Route path="post-ads" element={<BusinessPostAds />} />
        <Route path="applications" element={<BusinessApplications />} />
        <Route path="influencers" element={<BusinessInfluencers />} />
        <Route path="profile" element={<BusinessProfile />} />
        <Route path="help" element={<BusinessHelp />} />
      </Route>
    </Routes>
  );
}

export default App;
