import React from 'react';
import { X, Plus, Calendar, Hash, DollarSign, Users, MessageSquare} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';

const platformsOptions = [
  { name: 'Instagram', icon: <Instagram size={20} /> },
  { name: 'Facebook', icon: <Facebook size={20} /> },
  { name: 'Twitter', icon: <Twitter size={20} /> },
  { name: 'YouTube', icon: <Youtube size={20} /> }
];

// To avoid duplicate icons import, we will import the needed icons here
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

interface CreateCampaignCardProps {
  formData: {
    campaignName: string;
    platforms: string[];
    startDate: string;
    endDate: string;
    taskCount: string;
    barterOrPaid: string;
    budget: string;
    requirements: string;
    image?: File | null;
    campaignDescription: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  togglePopup: () => void;
}

const CreateCampaignCard: React.FC<CreateCampaignCardProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
  togglePopup,
}) => {
  return (
    <Card className="w-full max-w-lg rounded-2xl p-6 relative bg-white">
      {/* <button
        onClick={togglePopup}
        className="absolute right-4 top-4 rounded-full p-2 text-slate-600 hover:bg-slate-100 transition-colors"
      >
        <X size={20} />
      </button>
      <h2 className="mb-4 text-xl font-semibold text-slate-900">Create New Campaign</h2> */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar"
        encType="multipart/form-data"
      >
        <Input
          label="Campaign Name"
          name="campaignName"
          value={formData.campaignName}
          onChange={handleInputChange}
          icon={<MessageSquare size={18} className="text-slate-400" />}
          required
        />

        <div>
          <label htmlFor="image" className="block mb-2 font-medium text-slate-700">
            Campaign Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
          />
        </div>

        <fieldset>
          <legend className="mb-3 font-medium text-slate-700">Select Platforms</legend>
          <div className="grid grid-cols-2 gap-4">
            {platformsOptions.map((platform) => (
              <label
                key={platform.name}
                className={`flex items-center space-x-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                  formData.platforms.includes(platform.name)
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="checkbox"
                  name="platforms"
                  value={platform.name}
                  checked={formData.platforms.includes(platform.name)}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                {platform.icon}
                <span>{platform.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleInputChange}
            icon={<Calendar size={18} className="text-slate-400" />}
            required
          />
          <Input
            label="End Date"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleInputChange}
            icon={<Calendar size={18} className="text-slate-400" />}
            required
          />
        </div>

        <Input
          label="Number of Posts/Stories"
          name="taskCount"
          type="number"
          value={formData.taskCount}
          onChange={handleInputChange}
          icon={<Hash size={18} className="text-slate-400" />}
          required
        />

        <fieldset>
          <legend className="mb-3 font-medium text-slate-700">Compensation Type</legend>
          <div className="grid grid-cols-2 gap-4">
            {['barter', 'paid'].map((type) => (
              <label
                key={type}
                className={`flex items-center justify-center p-3 rounded-xl border transition-colors cursor-pointer ${
                  formData.barterOrPaid === type
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="barterOrPaid"
                  value={type}
                  checked={formData.barterOrPaid === type}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <span className="capitalize">{type}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {formData.barterOrPaid === 'paid' && (
          <Input
            label="Budget"
            name="budget"
            type="number"
            value={formData.budget}
            onChange={handleInputChange}
            icon={<DollarSign size={18} className="text-slate-400" />}
            required
          />
        )}

        <Input
          label="Requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleInputChange}
          icon={<Users size={18} className="text-slate-400" />}
          placeholder="e.g., Minimum followers, specific niche, content guidelines"
        />

        <div className="space-y-1">
  <label htmlFor="campaignDescription" className="text-slate-700 font-medium">Campaign Description</label>
  <textarea
    id="campaignDescription"
    name="campaignDescription"
    value={formData.campaignDescription}
    onChange={handleInputChange}
    placeholder="Looking for food and lifestyle influencers..."
    className="w-full p-3 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
    rows={4}
  />
</div>


        <div className="flex justify-end space-x-3 pt-4 border-t">
          <Button type="button" variant="outline" onClick={togglePopup}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Create Campaign
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateCampaignCard;
