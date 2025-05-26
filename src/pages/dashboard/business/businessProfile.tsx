import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Save, User, Mail, Lock, Bell, CreditCard, Shield } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Security from '../../../components/profile/Security';
import Notifications from '../../../components/profile/Notifications';
import Billing from '../../../components/profile/Billing';
import Privacy from '../../../components/profile/Privacy';
import BusinessInfo from '../../../components/profile/BusinessInfo';
import LinkedAccounts from '../../../components/profile/LinkedAccounts';

const BusinessProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={16} /> },
    { id: 'security', label: 'Security', icon: <Lock size={16} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={16} /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard size={16} /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield size={16} /> },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Business Account Settings</h1>
        <p className="text-slate-600">
          Manage your business profile, preferences, and account settings.
        </p>
      </div>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
            <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full sm:mb-0">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Business Logo"
                className="h-full w-full object-cover"
              />
              <button className="absolute bottom-0 right-0 rounded-full bg-primary-600 p-1.5 text-white shadow-md hover:bg-primary-700">
                <Camera size={16} />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">EcoStyle Boutique</h2>
              <p className="text-slate-600">Business Account · Premium Plan</p>
              <p className="mt-1 text-sm text-slate-500">Member since March 2025</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tabs */}
      <div className="border-b border-slate-200">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'profile' && (
          <>
            <BusinessInfo />
            <LinkedAccounts />
          </>
        )}

        {activeTab === 'security' && <Security />}

        {activeTab === 'notifications' && <Notifications />}

        {activeTab === 'billing' && <Billing />}

        {activeTab === 'privacy' && <Privacy />}
      </div>
    </div>
  );
};

export default BusinessProfile;
