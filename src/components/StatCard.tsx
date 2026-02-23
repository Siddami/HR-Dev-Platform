interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend: string;
  trendColor: string;
}

const StatCard = ({ title, value, icon, trend, trendColor }: StatCardProps) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow transition">
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      {icon}
    </div>
    <p className="text-3xl font-bold text-gray-900 mb-3">{value}</p>
    <p className={`text-sm ${trendColor}`}>{trend}</p>
  </div>
);

export default StatCard;