import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PostAds = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    campaignName: '',
    platforms: [] as string[],
    startDate: '',
    endDate: '',
    taskCount: '',
    barterOrPaid: 'barter',
    budget: '',
    requirements: '',
  });

  const platformsOptions = ['Instagram', 'Facebook', 'TikTok', 'YouTube'];

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, checked } = target;
    if (name === 'platforms') {
      let newPlatforms = [...formData.platforms];
      if (checked) {
        newPlatforms.push(value);
      } else {
        newPlatforms = newPlatforms.filter((p) => p !== value);
      }
      setFormData({ ...formData, platforms: newPlatforms });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission logic
    togglePopup();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Post New Ad</h1>
        <Button onClick={togglePopup}>Create Campaign</Button>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <Card className="w-full max-w-lg p-6 relative">
            <button
              onClick={togglePopup}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-600 hover:bg-slate-100"
            >
              <X size={20} />
            </button>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Create New Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Campaign Name"
                name="campaignName"
                value={formData.campaignName}
                onChange={handleInputChange}
                required
              />
              <fieldset>
                <legend className="mb-2 font-medium text-slate-700">Platform(s)</legend>
                <div className="flex flex-wrap gap-3">
                  {platformsOptions.map((platform) => (
                    <label key={platform} className="inline-flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="platforms"
                        value={platform}
                        checked={formData.platforms.includes(platform)}
                        onChange={handleInputChange}
                      />
                      <span>{platform}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="flex space-x-4">
                <Input
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="End Date"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Input
                label="Task (No. of posts/stories)"
                name="taskCount"
                type="number"
                value={formData.taskCount}
                onChange={handleInputChange}
                required
              />
              <fieldset>
                <legend className="mb-2 font-medium text-slate-700">Barter or Paid</legend>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="barterOrPaid"
                    value="barter"
                    checked={formData.barterOrPaid === 'barter'}
                    onChange={handleInputChange}
                  />
                  <span>Barter</span>
                </label>
                <label className="inline-flex items-center space-x-2 ml-6">
                  <input
                    type="radio"
                    name="barterOrPaid"
                    value="paid"
                    checked={formData.barterOrPaid === 'paid'}
                    onChange={handleInputChange}
                  />
                  <span>Paid</span>
                </label>
              </fieldset>
              {formData.barterOrPaid === 'paid' && (
                <Input
                  label="Budget"
                  name="budget"
                  type="number"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                />
              )}
              <Input
                label="Requirements (followers, niche)"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
              />
              <div className="flex justify-end">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
                <Button type="button" variant="outline" onClick={togglePopup} className="ml-2">
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default PostAds;
