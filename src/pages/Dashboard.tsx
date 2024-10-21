import React from 'react';
import { Activity, Users, Clock, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Active Projects" value="12" icon={<Activity size={24} />} color="bg-blue-500" />
        <DashboardCard title="Team Members" value="24" icon={<Users size={24} />} color="bg-green-500" />
        <DashboardCard title="Hours Logged" value="164" icon={<Clock size={24} />} color="bg-yellow-500" />
        <DashboardCard title="Pending Tasks" value="18" icon={<AlertTriangle size={24} />} color="bg-red-500" />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">AI Insights</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-700">
            Based on current project data, there's a 15% chance of delay in Project X. Consider allocating additional resources to the critical path tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className={`${color} rounded-lg shadow p-6 text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default Dashboard;