import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Eye, 
  ExternalLink, 
  Image as ImageIcon,
  AlertCircle,
  ChevronDown,
  Users,
  BarChart
} from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

interface Submission {
  id: string;
  influencerName: string;
  influencerAvatar: string;
  campaignName: string;
  link: string;
  screenshot: string;
  notes: string;
  submittedOn: string;
  status: 'pending' | 'verified' | 'rejected';
}

const TrackCampaignBusiness = () => {
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<string | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const [submissions] = useState<Submission[]>([
    {
      id: '1',
      influencerName: 'Sarah Wilson',
      influencerAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      campaignName: 'Summer Collection Launch',
      link: 'https://instagram.com/post/123',
      screenshot: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg',
      notes: 'Posted with all required hashtags and mentions',
      submittedOn: '2024-05-15',
      status: 'pending'
    },
    {
      id: '2',
      influencerName: 'Mike Chen',
      influencerAvatar: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg',
      campaignName: 'Product Review Series',
      link: 'https://instagram.com/post/456',
      screenshot: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg',
      notes: 'Included product demonstration video',
      submittedOn: '2024-05-14',
      status: 'verified'
    },
    {
      id: '3',
      influencerName: 'Emma Davis',
      influencerAvatar: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
      campaignName: 'Brand Awareness Campaign',
      link: 'https://instagram.com/post/789',
      screenshot: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
      notes: 'Story series with product features',
      submittedOn: '2024-05-13',
      status: 'rejected'
    },
  ]);

  const stats = [
    {
      title: 'Total Submissions',
      value: submissions.length,
      icon: <Users className="text-primary-500" />,
      color: 'bg-primary-50'
    },
    {
      title: 'Approved',
      value: submissions.filter(s => s.status === 'verified').length,
      icon: <CheckCircle className="text-green-500" />,
      color: 'bg-green-50'
    },
    {
      title: 'Pending',
      value: submissions.filter(s => s.status === 'pending').length,
      icon: <Clock className="text-yellow-500" />,
      color: 'bg-yellow-50'
    },
    {
      title: 'Rejected',
      value: submissions.filter(s => s.status === 'rejected').length,
      icon: <XCircle className="text-red-500" />,
      color: 'bg-red-50'
    },
    {
      title: 'Total Reach',
      value: '45.2K',
      icon: <Eye className="text-blue-500" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Engagement Rate',
      value: '4.8%',
      icon: <BarChart className="text-purple-500" />,
      color: 'bg-purple-50'
    },
  ];

  const handleVerify = (submissionId: string) => {
    // Handle verification logic here
    setToastMessage('Submission verified successfully!');
    setToastType('success');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReject = (submissionId: string) => {
    setSelectedSubmissionId(submissionId);
    setShowRejectionModal(true);
  };

  const handleRejectionSubmit = () => {
    if (!rejectionReason.trim()) {
      setToastMessage('Please provide a reason for rejection');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    // Handle rejection logic here
    setShowRejectionModal(false);
    setRejectionReason('');
    setSelectedSubmissionId(null);
    setToastMessage('Submission rejected');
    setToastType('success');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowImageModal(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Track Campaign Submissions</h1>
        <p className="text-slate-600">Monitor and verify influencer content submissions</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="flex items-center p-6">
              <div className={`mr-4 rounded-full ${stat.color} p-3`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Submissions Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">Influencer</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">Campaign</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">Link</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">Proof</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">Submitted</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {submissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={submission.influencerAvatar}
                        alt={submission.influencerName}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="ml-2 font-medium text-slate-900">
                        {submission.influencerName}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-900">{submission.campaignName}</td>
                  <td className="px-6 py-4">
                    <a
                      href={submission.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700"
                    >
                      View Post
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleImageClick(submission.screenshot)}
                      className="flex items-center text-slate-600 hover:text-slate-900"
                    >
                      <ImageIcon size={14} className="mr-1" />
                      View Screenshot
                    </button>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {new Date(submission.submittedOn).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        submission.status === 'verified'
                          ? 'bg-green-100 text-green-800'
                          : submission.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => handleVerify(submission.id)}
                        disabled={submission.status === 'verified'}
                      >
                        Verify
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleReject(submission.id)}
                        disabled={submission.status === 'rejected'}
                      >
                        Reject
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Rejection Modal */}
      <AnimatePresence>
        {showRejectionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md"
            >
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-slate-900">Reject Submission</h3>
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="Please provide a reason for rejection..."
                  className="mb-4 w-full rounded-xl border border-slate-300 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  rows={4}
                />
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setShowRejectionModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleRejectionSubmit}>
                    Submit
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setShowImageModal(false)}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImage}
              alt="Submission Screenshot"
              className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 z-50 rounded-lg px-6 py-3 shadow-lg ${
              toastType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrackCampaignBusiness;