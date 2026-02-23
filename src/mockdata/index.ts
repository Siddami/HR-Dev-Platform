export const headcountData = [
  { month: "Aug", value: 195 },
  { month: "Sep", value: 200 },
  { month: "Oct", value: 205 },
  { month: "Nov", value: 210 },
  { month: "Dec", value: 215 },
  { month: "Jan", value: 220 },
  { month: "Feb", value: 247 },
];

export const departmentData = [
  { name: "Engineering", value: 85 },
  { name: "Sales", value: 52 },
  { name: "Marketing", value: 38 },
  { name: "Product", value: 28 },
  { name: "Finance", value: 12 },
  { name: "Other", value: 17 },
];

export const PIE_COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
  "#EC4899",
];

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "text-red-600 bg-red-200";
    case "medium":
      return "text-amber-600 bg-amber-200";
    case "low":
      return "text-green-600 bg-green-200";
    default:
      return "text-gray-600 bg-gray-200";
  }
};
