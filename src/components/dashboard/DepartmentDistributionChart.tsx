import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { departmentData, PIE_COLORS } from "../../mockdata";

const DepartmentDistributionChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Department Distribution</h3>
      <p className="text-sm text-gray-600 mb-6">Current workforce breakdown</p>
      <div className="h-74">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={departmentData}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {departmentData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={PIE_COLORS[index % PIE_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DepartmentDistributionChart