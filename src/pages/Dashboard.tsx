// src/pages/Dashboard.tsx
import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../services/api";
import type { DashboardData } from "../types/dashboard";

import StatCardsGrid from "../components/dashboard/StatCardsGrid";
import AttendanceCard from "../components/dashboard/AttendanceCard";
import ActionItemsCard from "../components/dashboard/ActionItemsCard";
import HeadcountGrowthChart from "../components/dashboard/HeadcountGrowthChart";
import DepartmentDistributionChart from "../components/dashboard/DepartmentDistributionChart";
import UpcomingBirthdays from "../components/dashboard/UpcomingBirthdays";

const Dashboard = () => {
  const { data, isLoading, error } = useQuery<DashboardData>({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center text-red-600 p-8">
        Failed to load dashboard data. Please try again later.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-primary-text mt-12 mb-4">
          Dashboard
        </h1>
        <p className="mt-1 text-gray">
          Welcome back! Here's what's happening with your organization.
        </p>
      </div>

      <StatCardsGrid data={data} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceCard />
        <ActionItemsCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HeadcountGrowthChart />
        <DepartmentDistributionChart />
      </div>

      <UpcomingBirthdays />
    </div>
  );
};

export default Dashboard;
