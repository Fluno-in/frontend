import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Save } from 'lucide-react';

const PersonalInfo = () => {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-medium text-slate-900">Personal Information</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Full Name"
          id="fullName"
          placeholder="Your full name"
          defaultValue="Alex Morgan"
        />
        <Input
          label="Phone Number"
          id="phoneNumber"
          type="tel"
          placeholder="Your phone number"
          defaultValue="+1 (555) 123-4567"
        />
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Gender
          </label>
          <select
            id="gender"
            className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            defaultValue="male"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <Input
          label="Date of Birth"
          id="dateOfBirth"
          type="date"
          placeholder="Your date of birth"
          defaultValue="1990-01-01"
        />
        <div className="md:col-span-2">
          <label htmlFor="bio" className="mb-1.5 block text-sm font-medium text-slate-700">
            Bio
          </label>
          <textarea
            id="bio"
            rows={3}
            className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Tell us about yourself"
            defaultValue="Lifestyle influencer focusing on sustainable fashion and wellness."
          />
        </div>
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
      </div>
      <div className="mt-6 flex justify-end">
        <Button icon={<Save size={16} />}>
          Save Changes
        </Button>
      </div>
    </Card>
  );
};

export default PersonalInfo;
