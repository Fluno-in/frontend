import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Save } from 'lucide-react';

const BusinessInfo = () => {
  return (
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
  );
};

export default BusinessInfo;
