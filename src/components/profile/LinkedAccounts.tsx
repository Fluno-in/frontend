import React from 'react';
import Card from '../../components/ui/Card';
import { Instagram, Facebook, Twitter, Youtube, CheckCircle } from 'lucide-react';

const LinkedAccounts = () => {
  return (
    <Card className="mt-6">
      <h3 className="mb-4 text-lg font-medium text-slate-900">Linked Accounts</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative overflow-hidden rounded-xl border border-pink-200 bg-white p-4 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-all duration-200">
          <div className="flex items-center space-x-3">
            <Instagram size={24} />
            <span className="font-medium">Instagram</span>
          </div>
          <span className="absolute top-3 right-3 flex items-center space-x-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
            <CheckCircle size={14} />
            <span>Linked</span>
          </span>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-blue-200 bg-white p-4 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200">
          <div className="flex items-center space-x-3">
            <Facebook size={24} />
            <span className="font-medium">Facebook</span>
          </div>
          <span className="absolute top-3 right-3 italic text-slate-400">Coming Soon</span>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-sky-200 bg-white p-4 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all duration-200">
          <div className="flex items-center space-x-3">
            <Twitter size={24} />
            <span className="font-medium">Twitter</span>
          </div>
          <span className="absolute top-3 right-3 italic text-slate-400">Coming Soon</span>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-red-200 bg-white p-4 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-200">
          <div className="flex items-center space-x-3">
            <Youtube size={24} />
            <span className="font-medium">YouTube</span>
          </div>
          <span className="absolute top-3 right-3 italic text-slate-400">Coming Soon</span>
        </div>
      </div>
    </Card>
  );
};

export default LinkedAccounts;
