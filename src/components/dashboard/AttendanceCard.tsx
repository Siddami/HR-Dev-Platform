import Attendance from '../../assets/attendance.svg?react' 

const AttendanceCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-5">
        <Attendance className="inline-flex mr-2 w-5 h-5" />
        Today's Attendance
      </h3>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">In-Office / Remote</span>
          <span className="font-medium text-green-600">189</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Out / On Leave</span>
          <span className="font-medium text-amber-600">58</span>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-4">
            <span>77% workforce active today</span>
            <span>Active</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: "77%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCard