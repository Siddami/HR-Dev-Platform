import Upcoming from '../../assets/upcoming.svg?react'


const UpcomingBirthdays = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4">
        <Upcoming className="inline-flex mr-4" />
        Upcoming Birthdays & Anniversaries
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Sarah Johnson - Feb 15",
          "Michael Rodriguez - Feb 18",
          "Emily Chen - Feb 22",
        ].map((person, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-pink-fade rounded-lg border border-gray-100 hover:shadow-sm transition"
          >
            <div className="w-14 h-14 rounded-full bg-pink flex items-center justify-center font-bold">
              <p className="text-2xl">🎂</p>
            </div>
            <div>
              <p className="font-medium">{person.split(" - ")[0]}</p>
              <p className="text-sm text-gray-600">{person.split(" - ")[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingBirthdays