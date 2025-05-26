import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const Security = () => {
  return (
    <>
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
    </>
  );
};

export default Security;
