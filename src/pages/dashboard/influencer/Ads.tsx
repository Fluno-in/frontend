import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

const InfluencerAds = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const availableAds = [
    {
      id: 1,
      businessName: 'Local Cafe',
      title: 'Coffee Shop Summer Campaign',
      budget: 500,
      duration: '2 weeks',
      requirements: [
        'Min. 5k followers',
        '2 Instagram posts',
        '3 Stories',
        'In-store visit required'
      ],
      description: 'Looking for food and lifestyle influencers to promote our new summer menu and outdoor seating area.',
      image: 'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      businessName: 'Fitness First',
      title: 'Gym Membership Drive',
      budget: 750,
      duration: '1 month',
      requirements: [
        'Min. 10k followers',
        '4 Instagram posts',
        '8 Stories',
        'Gym workout videos'
      ],
      description: 'Seeking fitness enthusiasts to showcase our facilities and promote our summer membership special.',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      businessName: 'Beauty Bar',
      title: 'New Product Launch',
      budget: 1000,
      duration: '3 weeks',
      requirements: [
        'Min. 8k followers',
        '3 Instagram posts',
        '6 Stories',
        'Product review video'
      ],
      description: 'Looking for beauty influencers to promote our new organic skincare line.',
      image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const handleApply = (adId: number) => {
    setToastMessage('Successfully applied for campaign!');
    setToastType('success');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReject = (adId: number) => {
    setToastMessage('Campaign removed from your feed');
    setToastType('error');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Available Campaigns</h1>
        <p className="text-slate-600">
          Discover and apply for campaigns that match your profile
        </p>
      </div>

      {/* Filters */}
      <Card className="flex flex-wrap items-center gap-4 p-4">
        <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
          <option>All Categories</option>
          <option>Food & Beverage</option>
          <option>Fashion & Beauty</option>
          <option>Health & Fitness</option>
          <option>Technology</option>
        </select>

        <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
          <option>All Budgets</option>
          <option>$0 - $500</option>
          <option>$501 - $1000</option>
          <option>$1001+</option>
        </select>

        <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
          <option>All Durations</option>
          <option>1 Week</option>
          <option>2 Weeks</option>
          <option>1 Month</option>
        </select>
      </Card>

      {/* Campaign Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {availableAds.map((ad, index) => (
          <motion.div
            key={ad.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">{ad.title}</h3>
                  <p className="text-sm text-white/80">{ad.businessName}</p>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Clock size={16} />
                    <span>{ad.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
                    <DollarSign size={16} />
                    <span>{ad.budget}</span>
                  </div>
                </div>

                <p className="mb-4 text-sm text-slate-600">{ad.description}</p>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-slate-900">Requirements:</h4>
                  <ul className="space-y-1">
                    {ad.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <AlertCircle size={14} className="mr-2 text-primary-500" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => handleApply(ad.id)}
                    icon={<CheckCircle size={16} />}
                  >
                    Apply
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => handleReject(ad.id)}
                    icon={<XCircle size={16} />}
                  >
                    Not Interested
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`rounded-lg p-4 shadow-lg ${
              toastType === 'success' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <div className="flex items-center space-x-2">
              {toastType === 'success' ? (
                <CheckCircle size={20} className="text-green-600" />
              ) : (
                <XCircle size={20} className="text-red-600" />
              )}
              <p className={`font-medium ${
                toastType === 'success' ? 'text-green-800' : 'text-red-800'
              }`}>
                {toastMessage}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default InfluencerAds;