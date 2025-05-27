import React from 'react';
import { Calendar, Hash, DollarSign, Users, Trash2 } from 'lucide-react';
import Card from '../../components/ui/Card';

interface AdCardProps {
  ad: {
    _id: string;
    campaignName: string;
    startDate: string;
    endDate: string;
    platforms: string[];
    taskCount: number;
    barterOrPaid: string;
    budget?: number;
    requirements?: string;
    image?: string;
    campaignDescription?: string;
  };
  onDelete?: (id: string) => void;
}

const AdCard: React.FC<AdCardProps> = ({ ad, onDelete }) => {
  return (
    <Card className="h-full overflow-hidden relative">
      {/* Trash Icon Button */}
      {onDelete && (
        <button
          onClick={() => onDelete(ad._id)}
          className="absolute top-3 right-3 z-10 bg-white/80 p-1.5 rounded-full shadow hover:bg-red-100 transition-colors"
        >
          <Trash2 size={16} className="text-red-600" />
        </button>
      )}

      {ad.image && (
        <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
          <img
            src={ad.image}
            alt={ad.campaignName}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <h3 className="text-white text-lg font-semibold">{ad.campaignName}</h3>
          </div>
        </div>
      )}
      <div className="p-6">
        {!ad.image && (
          <h3 className="text-lg font-semibold text-slate-900 mb-2">{ad.campaignName}</h3>
        )}
        {ad.campaignDescription && (
          <p className="text-sm text-gray-500 mb-4">{ad.campaignDescription}</p>
        )}
        <div className="space-y-3 text-sm">
          <div className="flex items-center text-slate-600">
            <Calendar size={16} className="mr-2" />
            <span>
              {new Date(ad.startDate).toLocaleDateString()} -{' '}
              {new Date(ad.endDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {ad.platforms.map((platform: string) => (
              <span
                key={platform}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
              >
                {platform}
              </span>
            ))}
          </div>
          <div className="flex items-center text-slate-600">
            <Hash size={16} className="mr-2" />
            <span>{ad.taskCount} posts required</span>
          </div>
          {ad.barterOrPaid === 'paid' && (
            <div className="flex items-center text-green-600 font-medium">
              <DollarSign size={16} className="mr-2" />
              <span>${ad.budget}</span>
            </div>
          )}
          <div className="flex items-center text-slate-600">
            <Users size={16} className="mr-2" />
            <span>{ad.requirements || 'No specific requirements'}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdCard;
