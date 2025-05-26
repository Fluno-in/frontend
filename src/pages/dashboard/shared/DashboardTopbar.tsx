import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Settings, LogOut, ChevronDown } from 'lucide-react';

interface DashboardTopbarProps {
  userType: 'influencer' | 'business';
}

const DashboardTopbar: React.FC<DashboardTopbarProps> = ({ userType }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'New campaign invitation',
      description: 'Local Cafe wants to collaborate with you',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Campaign approved',
      description: 'Your content for Fashion Store has been approved',
      time: '5 hours ago',
      unread: false,
    },
    {
      id: 3,
      title: 'Payment received',
      description: 'Payment for Restaurant Campaign has been processed',
      time: '1 day ago',
      unread: false,
    },
  ];

  return (
    <div className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-8">
      {/* Left side - empty for now, could add breadcrumbs later */}
      <div></div>

      {/* Right side - notifications and profile */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100"
          >
            <Bell size={20} />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary-500"></span>
          </button>

          <AnimatePresence>
            {isNotificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-80 rounded-xl bg-white p-4 shadow-lg"
              >
                <h3 className="mb-4 font-medium text-slate-900">Notifications</h3>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start rounded-lg p-2 transition-colors ${
                        notification.unread ? 'bg-primary-50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex-1">
                        <p className={`text-sm ${notification.unread ? 'font-medium' : ''}`}>
                          {notification.title}
                        </p>
                        <p className="text-xs text-slate-500">{notification.description}</p>
                        <p className="mt-1 text-xs text-slate-400">{notification.time}</p>
                      </div>
                      {notification.unread && (
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary-500"></div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 rounded-full py-2 pl-2 pr-4 hover:bg-slate-100"
          >
            <img
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-slate-700">Alex Morgan</span>
            <ChevronDown size={16} className="text-slate-400" />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-48 rounded-xl bg-white p-2 shadow-lg"
              >
                <Link
                  to={`/dashboard/${userType}/profile`}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  <Settings size={16} />
                  <span>Settings</span>
                </Link>
                <button className="flex w-full items-center space-x-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                  <LogOut size={16} />
                  <span>Log out</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;