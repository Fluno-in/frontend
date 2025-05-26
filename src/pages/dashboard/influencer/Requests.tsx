import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, DollarSign, MessageSquare } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

const InfluencerRequests = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const requests = [
    {
      id: 1,
      businessName: 'Urban Outfitters',
      title: 'Summer Fashion Collection',
      message: 'We love your style and think you had be perfect for our summer collection campaign. Looking for authentic, lifestyle content featuring our new pieces.',
      budget: 800,
      deadline: '2024-06-15',
      status: 'pending',
      image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      businessName: 'Green Juice Co',
      title: 'Healthy Living Campaign',
      message: 'Would you be interested in promoting our new line of organic juices? We are looking for health-conscious influencers to share their wellness journey.',
      budget: 600,
      deadline: '2024-06-20',
      status: 'pending',
      image: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      businessName: 'Tech Gadgets',
      title: 'New Product Launch',
      message: 'We are launching a new smart home device and would love to have you showcase its features to your tech-savvy audience.',
      budget: 1200,
      deadline: '2024-06-25',
      status: 'pending',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const handleAccept = (requestId: number) => {
    setToastMessage('Campaign request accepted!');
    setToastType('success');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReject = (requestId: number) => {
    setToastMessage('Campaign request declined');
    setToastType('error');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Campaign Requests</h1>
        <p className="text-slate-600">
          Review and respond to campaign requests from businesses
        </p>
      </div>

      {/* Requests List */}
      <div className="space-y-6">
        {requests.map((request, index) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={request.image}
                    alt={request.title}
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                
                <div className="flex-1 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-slate-900">{request.title}</h3>
                    <p className="text-sm text-slate-600">{request.businessName}</p>
                  </div>

                  <div className="mb-4 flex items-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>Due: {new Date(request.deadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1 font-medium text-green-600">
                      <DollarSign size={16} />
                      <span>{request.budget}</span>
                    </div>
                  </div>

                  <div className="mb-6 rounded-lg bg-slate-50 p-4">
                    <div className="flex items-start space-x-2">
                      <MessageSquare size={16} className="mt-1 text-slate-400" />
                      <p className="text-sm text-slate-600">{request.message}</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="primary"
                      onClick={() => handleAccept(request.id)}
                      icon={<CheckCircle size={16} />}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleReject(request.id)}
                      icon={<XCircle size={16} />}
                    >
                      Decline
                    </Button>
                  </div>
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

export default InfluencerRequests;