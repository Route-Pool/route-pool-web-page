import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';

// Rider Imports
import RiderSignIn from './pages/Rider/Auth/SignIn';
import RiderSignUp from './pages/Rider/Auth/SignUp';
import RiderForgetPassword from './pages/Rider/Auth/ForgetPassword';
import RiderOTP from './pages/Rider/Auth/OTP';
import RiderResetPassword from './pages/Rider/Auth/ResetPassword';
import RiderDashboard from './pages/Rider/Dashboard/Dashboard';
import RiderLayout from './layouts/RiderLayout';
import BatchDetails from './pages/Rider/Batch/BatchDetails';
import DeliveryProcess from './pages/Rider/Batch/DeliveryProcess';
import CodeVerification from './pages/Rider/Batch/CodeVerification';
import { RiderSuccess, RiderFailed } from './pages/Rider/Batch/Feedback';
import RiderProfile from './pages/Rider/Settings/Profile';
import RiderSettings from './pages/Rider/Settings/Settings';
import RiderHistory from './pages/Rider/History/History';
import RiderVerification from './pages/Rider/Settings/Verification';
import RiderUploadProof from './pages/Rider/Settings/UploadProof';
import RiderLanguage from './pages/Rider/Settings/Language';
import RiderHelpCenter from './pages/Rider/Settings/HelpCenter';
import RiderTerms from './pages/Rider/Settings/Terms';

// Retailer Imports
import RetailerSignUp from './pages/Retailer/Auth/SignUp';
import RetailerSignIn from './pages/Retailer/Auth/SignIn';
import RetailerForgetPassword from './pages/Retailer/Auth/ForgetPassword';
import RetailerOTP from './pages/Retailer/Auth/OTP';
import RetailerResetPassword from './pages/Retailer/Auth/ResetPassword';
import RetailerDashboard from './pages/Retailer/Dashboard/Dashboard';
import NewDelivery from './pages/Retailer/Dashboard/NewDelivery';
import ConfirmPayment from './pages/Retailer/Dashboard/ConfirmPayment';
import { RetailerProgress, RetailerSuccess } from './pages/Retailer/Dashboard/Feedback';
import RetailerHistory from './pages/Retailer/History/History';
import RetailerProfile from './pages/Retailer/Settings/Profile';
import RetailerSettings from './pages/Retailer/Settings/Settings';
import RetailerSavedAddresses from './pages/Retailer/Settings/SavedAddresses';
import RetailerLanguage from './pages/Retailer/Settings/Language';
import RetailerHelpCenter from './pages/Retailer/Settings/HelpCenter';
import RetailerTerms from './pages/Retailer/Settings/Terms';
import RetailerLayout from './layouts/RetailerLayout';

import Placeholder from './components/Placeholder';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />

        {/* Rider Auth */}
        <Route path="/rider/signup" element={<RiderSignUp />} />
        <Route path="/rider/signin" element={<RiderSignIn />} />
        <Route path="/rider/forget-password" element={<RiderForgetPassword />} />
        <Route path="/rider/otp" element={<RiderOTP />} />
        <Route path="/rider/reset-password" element={<RiderResetPassword />} />

        {/* Rider App */}
        <Route path="/rider/dashboard" element={<RiderLayout><RiderDashboard /></RiderLayout>} />
        <Route path="/rider/batch" element={<RiderLayout><BatchDetails /></RiderLayout>} />
        <Route path="/rider/process" element={<RiderLayout><DeliveryProcess /></RiderLayout>} />
        <Route path="/rider/code" element={<RiderLayout><CodeVerification /></RiderLayout>} />
        <Route path="/rider/success" element={<RiderLayout><RiderSuccess /></RiderLayout>} />
        <Route path="/rider/failed" element={<RiderLayout><RiderFailed /></RiderLayout>} />
        <Route path="/rider/history" element={<RiderLayout><RiderHistory /></RiderLayout>} />

        {/* Rider Profile & Settings */}
        <Route path="/rider/settings" element={<RiderLayout><RiderSettings /></RiderLayout>} />
        <Route path="/rider/profile" element={<RiderLayout><RiderProfile /></RiderLayout>} />
        <Route path="/rider/verification" element={<RiderLayout><RiderVerification /></RiderLayout>} />
        <Route path="/rider/upload-document" element={<RiderLayout><RiderUploadProof /></RiderLayout>} />
        <Route path="/rider/language" element={<RiderLayout><RiderLanguage /></RiderLayout>} />
        <Route path="/rider/help" element={<RiderLayout><RiderHelpCenter /></RiderLayout>} />
        <Route path="/rider/terms" element={<RiderLayout><RiderTerms /></RiderLayout>} />

        {/* Retailer Auth */}
        <Route path="/retailer/signup" element={<RetailerSignUp />} />
        <Route path="/retailer/signin" element={<RetailerSignIn />} />
        <Route path="/retailer/forget-password" element={<RetailerForgetPassword />} />
        <Route path="/retailer/otp" element={<RetailerOTP />} />
        <Route path="/retailer/reset-password" element={<RetailerResetPassword />} />

        {/* Retailer App */}
        <Route path="/retailer/dashboard" element={<RetailerLayout><RetailerDashboard /></RetailerLayout>} />
        <Route path="/retailer/new-delivery" element={<RetailerLayout><NewDelivery /></RetailerLayout>} />
        <Route path="/retailer/confirm-payment" element={<RetailerLayout><ConfirmPayment /></RetailerLayout>} />
        <Route path="/retailer/progress" element={<RetailerLayout><RetailerProgress /></RetailerLayout>} />
        <Route path="/retailer/success" element={<RetailerLayout><RetailerSuccess /></RetailerLayout>} />
        <Route path="/retailer/history" element={<RetailerLayout><RetailerHistory /></RetailerLayout>} />

        {/* Retailer Settings */}
        <Route path="/retailer/settings" element={<RetailerLayout><RetailerSettings /></RetailerLayout>} />
        <Route path="/retailer/addresses" element={<RetailerLayout><RetailerSavedAddresses /></RetailerLayout>} />
        <Route path="/retailer/language" element={<RetailerLayout><RetailerLanguage /></RetailerLayout>} />
        <Route path="/retailer/profile" element={<RetailerLayout><RetailerProfile /></RetailerLayout>} />
        <Route path="/retailer/help" element={<RetailerLayout><RetailerHelpCenter /></RetailerLayout>} />
        <Route path="/retailer/terms" element={<RetailerLayout><RetailerTerms /></RetailerLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
