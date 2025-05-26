import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, X } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AvailableInfluencers = () => {
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

  const influencers = [
    {
      id: 1,
      name: 'Sarah Wilson',
      location: 'New York, USA',
      followers: '120K',
      niche: 'Fashion',
      image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Los Angeles, USA',
      followers: '85K',
      niche: 'Health & Wellness',
      image: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Emma Johnson',
      location: 'Chicago, USA',
      followers: '150K',
      niche: 'Tech',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

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
        <h1 className="text-2xl font-bold text-slate-900">Available Influencers</h1>
        <Button onClick={togglePopup}>Send Request</Button>
      </div>

      {/* Influencers Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {influencers.map((influencer) => (
          <Card key={influencer.id} className="overflow-hidden">
            <div className="flex flex-col items-center p-6 text-center">
              <img
                src={influencer.image}
                alt={influencer.name}
                className="mb-4 h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mb-1 text-lg font-semibold text-slate-900">{influencer.name}</h3>
              <p className="mb-1 text-sm text-slate-600">{influencer.location}</p>
              <p className="mb-2 text-sm text-slate-600">{influencer.followers} followers</p>
              <p className="mb-4 text-sm text-slate-600">Niche: {influencer.niche}</p>
              <Button onClick={togglePopup} icon={<UserPlus size={16} />}>
                Send Request
              </Button>
            </div>
          </Card>
        ))}
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
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Send Request</h2>
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
                  {['Instagram', 'Facebook', 'TikTok', 'YouTube'].map((platform) => (
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

export default AvailableInfluencers;
