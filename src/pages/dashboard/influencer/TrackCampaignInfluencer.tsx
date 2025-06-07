import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link2, Upload, FileText, CheckCircle, XCircle, Clock, ExternalLink, Image as ImageIcon, Plus, Trash2 } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import toast, { Toaster } from 'react-hot-toast';

// Mock data for demonstration
const mockCampaigns = [
  { id: 1, name: 'Summer Collection 2025', platform: 'Instagram' },
  { id: 2, name: 'Fitness App Launch', platform: 'YouTube' },
  { id: 3, name: 'Tech Gadget Review', platform: 'TikTok' },
];

interface ContentLink {
  id: string;
  url: string;
  platform: string;
}

interface Submission {
  id: string;
  campaignName: string;
  platform: string;
  links: ContentLink[];
  screenshot?: string;
  notes?: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

const TrackCampaignInfluencer = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: '1',
      campaignName: 'Summer Collection Promotion',
      platform: 'Instagram',
      links: [
        { id: '1', url: 'https://instagram.com/p/summer-post-1', platform: 'Instagram' },
        { id: '2', url: 'https://instagram.com/stories/summer-story', platform: 'Instagram Stories' }
      ],
      screenshot: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg',
      notes: 'Posted with all required hashtags and mentions',
      status: 'approved',
      submittedAt: '2025-01-15T10:30:00Z',
    },
    {
      id: '2',
      campaignName: 'Fitness App Launch',
      platform: 'YouTube',
      links: [
        { id: '3', url: 'https://youtube.com/watch?v=fitness-review', platform: 'YouTube' }
      ],
      screenshot: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
      notes: 'Full workout video with product demonstration',
      status: 'pending',
      submittedAt: '2025-01-14T15:45:00Z',
    },
    {
      id: '3',
      campaignName: 'Organic Snacks Brand',
      platform: 'TikTok',
      links: [
        { id: '4', url: 'https://tiktok.com/@user/video/snack-review', platform: 'TikTok' },
        { id: '5', url: 'https://instagram.com/p/snack-post', platform: 'Instagram' }
      ],
      status: 'rejected',
      submittedAt: '2025-01-13T09:20:00Z',
    }
  ]);

  const [formData, setFormData] = useState({
    campaignId: '',
    links: [{ id: '1', url: '', platform: 'Instagram' }] as ContentLink[],
    notes: '',
  });
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  });

  const addContentLink = () => {
    const newLink: ContentLink = {
      id: Date.now().toString(),
      url: '',
      platform: 'Instagram'
    };
    setFormData(prev => ({
      ...prev,
      links: [...prev.links, newLink]
    }));
  };

  const removeContentLink = (linkId: string) => {
    if (formData.links.length > 1) {
      setFormData(prev => ({
        ...prev,
        links: prev.links.filter(link => link.id !== linkId)
      }));
    }
  };

  const updateContentLink = (linkId: string, field: 'url' | 'platform', value: string) => {
    setFormData(prev => ({
      ...prev,
      links: prev.links.map(link =>
        link.id === linkId ? { ...link, [field]: value } : link
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.campaignId || formData.links.some(link => !link.url)) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const campaign = mockCampaigns.find(c => c.id.toString() === formData.campaignId);
      const newSubmission: Submission = {
        id: Date.now().toString(),
        campaignName: campaign?.name || '',
        platform: campaign?.platform || '',
        links: formData.links.filter(link => link.url),
        screenshot: previewUrl,
        notes: formData.notes,
        status: 'pending',
        submittedAt: new Date().toISOString(),
      };

      setSubmissions(prev => [newSubmission, ...prev]);
      setFormData({ 
        campaignId: '', 
        links: [{ id: '1', url: '', platform: 'Instagram' }], 
        notes: '' 
      });
      setScreenshot(null);
      setPreviewUrl('');
      toast.success('Proof submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit proof');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="text-emerald-500\" size={20} />;
      case 'rejected':
        return <XCircle className="text-red-500" size={20} />;
      default:
        return <Clock className="text-amber-500" size={20} />;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-emerald-100 text-emerald-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-amber-100 text-amber-800';
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <Toaster position="top-right" />
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Track Campaign Submissions</h1>
        <p className="text-slate-600 mt-2">Submit and monitor your campaign deliverables</p>
      </div>

      {/* Submission Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-6 border border-slate-200"
      >
        <h2 className="text-lg font-semibold text-slate-900 mb-6">Submit Campaign Proof</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campaign Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Campaign
            </label>
            <select
              value={formData.campaignId}
              onChange={(e) => setFormData(prev => ({ ...prev, campaignId: e.target.value }))}
              className="w-full rounded-lg border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              required
            >
              <option value="">Select a campaign</option>
              {mockCampaigns.map(campaign => (
                <option key={campaign.id} value={campaign.id}>
                  {campaign.name} ({campaign.platform})
                </option>
              ))}
            </select>
          </div>

          {/* Content Links */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-slate-700">
                Content Links
              </label>
              <button
                type="button"
                onClick={addContentLink}
                className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
              >
                <Plus size={16} />
                Add Link
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.links.map((link, index) => (
                <div key={link.id} className="flex gap-3 items-start">
                  <div className="flex-1">
                    <div className="relative">
                      <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="url"
                        value={link.url}
                        onChange={(e) => updateContentLink(link.id, 'url', e.target.value)}
                        placeholder="Paste your content URL here"
                        className="w-full pl-10 rounded-lg border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  <select
                    value={link.platform}
                    onChange={(e) => updateContentLink(link.id, 'platform', e.target.value)}
                    className="rounded-lg border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="Instagram">Instagram</option>
                    <option value="Instagram Stories">Instagram Stories</option>
                    <option value="YouTube">YouTube</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                  </select>
                  {formData.links.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeContentLink(link.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot Upload */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Screenshot (Optional)
            </label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-indigo-400'}`}
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto text-slate-400 mb-2" size={24} />
              <p className="text-sm text-slate-600">
                {isDragActive ? 'Drop your image here' : 'Drag & drop or click to upload'}
              </p>
            </div>
            {previewUrl && (
              <div className="mt-2 relative">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="h-20 w-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setScreenshot(null);
                    setPreviewUrl('');
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <XCircle size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Additional Notes
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 text-slate-400" size={20} />
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Any additional information..."
                className="w-full pl-10 rounded-lg border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                rows={4}
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium
              bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 transform hover:scale-[1.02]`}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Proof'}
          </motion.button>
        </form>
      </motion.div>

      {/* Submissions Grid */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">Submission History</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {submissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden border border-slate-200"
              >
                {/* Header with Status */}
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
                      {submission.campaignName}
                    </h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(submission.status)}`}>
                      {getStatusIcon(submission.status)}
                      <span className="ml-1 capitalize">{submission.status}</span>
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{submission.platform}</p>
                </div>

                {/* Screenshot */}
                {submission.screenshot && (
                  <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                    <img
                      src={submission.screenshot}
                      alt={submission.campaignName}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col">
                  {/* Content Links */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-medium text-slate-700">Content Links:</h4>
                    {submission.links.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 group"
                      >
                        <ExternalLink size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                        <span className="truncate">{link.platform}</span>
                      </a>
                    ))}
                  </div>

                  {/* Notes */}
                  {submission.notes && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-slate-700 mb-1">Notes:</h4>
                      <p className="text-sm text-slate-600 line-clamp-3">{submission.notes}</p>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>Submitted</span>
                      <span>{formatDate(submission.submittedAt)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {submissions.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-600">No submissions yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackCampaignInfluencer;