import StatCard from "../StatCard";
import Employee from "../../assets/employees.svg?react";
import NewHire from "../../assets/new-hire.svg?react";
import Events from "../../assets/events.svg?react";
import Positions from "../../assets/open-positions.svg?react";
import type { DashboardData } from "../../types/dashboard";

interface Props {
  data: DashboardData;
}

export default function StatCardsGrid({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Employees"
        value={data.total_employees}
        icon={<Employee className="text-3xl text-primary" />}
        trend="+12% from last month"
        trendColor="text-green-600"
      />
      <StatCard
        title="New Hires This Month"
        value={data.new_hire_count}
        icon={<NewHire className="text-3xl text-green-600" />}
        trend="5 more next week"
        trendColor="text-gray"
      />
      <StatCard
        title="Upcoming Events"
        value={data.upcoming_event}
        icon={<Events className="text-3xl text-blue-600" />}
        trend="Birthdays & anniversaries"
        trendColor="text-gray"
      />
      <StatCard
        title="Open Positions"
        value={data.open_positions}
        icon={<Positions className="text-3xl text-amber-600" />}
        trend="Across 6 departments"
        trendColor="text-gray"
      />
    </div>
  );
}
