import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Save, User, Mail, Lock, Bell, CreditCard, Shield } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h3 className="mb-4 text-lg font-medium text-slate-900">Business Information</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Business Name"
                  id="businessName"
                  placeholder="Your business name"
                  defaultValue="EcoStyle Boutique"
                />
                <Input
                  label="Business Website"
                  id="businessWebsite"
                  placeholder="Your business website"
                  defaultValue="https://ecostyle.example.com"
                />
                <Input
                  label="Phone Number"
                  id="phoneNumber"
                  type="tel"
                  placeholder="Your phone number"
                  defaultValue="+1 (555) 123-4567"
                />
                <Input
                  label="Industry"
                  id="industry"
                  placeholder="Your industry"
                  defaultValue="Retail"
                />
                <Input
                  label="State"
                  id="state"
                  placeholder="Your state"
                  defaultValue="California"
                />
                <Input
                  label="City"
                  id="city"
                  placeholder="Your city"
                  defaultValue="San Francisco"
                />
                <div className="md:col-span-2">
                  <label htmlFor="additionalInfo" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    rows={3}
                    className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Any additional information about your business"
                    defaultValue="EcoStyle Boutique offers sustainable, eco-friendly fashion for the conscious consumer. We work with local artisans and ethical manufacturers to create stylish, environmentally responsible clothing."
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button icon={<Save size={16} />}>
                  Save Changes
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {activeTab === 'security' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h3 className="mb-4 text-lg font-medium text-slate-900">Change Password</h3>
              <div className="space-y-4">
                <Input
                  label="Current Password"
                  id="currentPassword"
                  type="password"
                  placeholder="Enter your current password"
                />
                <Input
                  label="New Password"
                  id="newPassword"
                  type="password"
                  placeholder="Enter your new password"
                />
                <Input
                  label="Confirm New Password"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your new password"
                />
              </div>
              <div className="mt-6 flex justify-end">
                <Button>
                  Update Password
                </Button>
              </div>
            </Card>

            <Card className="mt-6">
              <h3 className="mb-4 text-lg font-medium text-slate-900">Two-Factor Authentication</h3>
              <p className="mb-4 text-slate-600">
                Add an extra layer of security to your account by enabling two-factor authentication.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-700">
                  Two-factor authentication is currently disabled.
                </div>
                <Button variant="outline">
                  Enable 2FA
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other tabs would go here with their own content */}
        {activeTab !== 'profile' && activeTab !== 'security' && (
          <Card>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 rounded-full bg-slate-100 p-4">
                {tabs.find(tab => tab.id === activeTab)?.icon}
              </div>
              <h3 className="mb-2 text-lg font-medium text-slate-900">
                {tabs.find(tab => tab.id === activeTab)?.label} Settings
              </h3>
              <p className="max-w-md text-slate-600">
                This section is under development. Please check back soon for updates to manage your {tabs.find(tab => tab.id === activeTab)?.label.toLowerCase()} settings.
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BusinessProfile;
