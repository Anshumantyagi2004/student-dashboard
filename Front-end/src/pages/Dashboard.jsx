import { useEffect, useState } from "react";

export default function Dashboard() {
  const [monthlyData, setMonthlyData] = useState([]);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const chartHeight = 200;

  // Fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/findAllStudents");
        const result = await res.json();

        if (res.ok) {
          const data = months.map((m) => {
            const count = result.data.filter((s) => s.month?.startsWith(m)).length;
            return { month: m, count };
          });
          setMonthlyData(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
  }, []);

  if (monthlyData.length === 0) return <p className="text-center mt-10">Loading...</p>;

  const maxValue = Math.max(...monthlyData.map((d) => d.count)) || 1;

  return (
    <div className="p-6 max-w-xl mt-3 mx-auto bg-gradient-to-br from-sky-50 to-indigo-100 border border-indigo-200 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-center text-indigo-700">
        Monthly Student Entry
      </h2>

      {/* Chart Container */}
      <div className="bg-white p-4 rounded-lg border relative">
        {/* Horizontal Grid Lines */}
        <div className="absolute top-4 bottom-12 left-0 right-0 flex flex-col justify-between pointer-events-none">
          {[0.25, 0.5, 0.75, 1].map((v, i) => (
            <div key={i} className="border-t border-gray-200 w-full" />
          ))}
        </div>

        {/* Bars + Labels */}
        <div className="flex items-end justify-between h-[300px] gap-4 relative z-10">
          {monthlyData.map(({ month, count }) => (
            <div key={month} className="flex flex-col items-center group">
              {/* Bar */}
              <div
                className="w-10 rounded-t-lg bg-gradient-to-t from-indigo-500 to-blue-500 hover:from-purple-500 hover:to-indigo-600 transition-all duration-500"
                style={{ height: `${(count / maxValue) * chartHeight}px` }}
              />
              {/* Count */}
              <span className="mt-1 text-sm text-gray-700 font-medium">{count}</span>
              {/* Month */}
              <span className="text-xs text-gray-500">{month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
