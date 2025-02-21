import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MoreVertical, X } from 'lucide-react';

const TimesheetEntry = ({ project, activity, hours, onDelete }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
      <div className="flex-1 pr-4">
        <div className="text-sm font-medium text-gray-700">{project}</div>
        <div className="text-xs text-gray-500">{activity}</div>
      </div>
      <div className="w-20 text-right text-sm font-medium text-gray-900">{hours}</div>
      <button onClick={onDelete} className="ml-4 text-gray-500 hover:text-gray-700">
        <X size={16} />
      </button>
    </div>
  );
};


const BillableOffshoreSegment = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [timesheetEntries, setTimesheetEntries] = useState([
    { id: 1, project: "Internal Project-R&D", activity: "Devlopment", hours: "8.00" },
    { id: 2, project: "Internal Project-R&D", activity: "Testing", hours: "8.00" },

  ]);

    const handleAddEntry = () => {
        const newEntry = {
          id: Date.now(),
          project: "Select Project",
          activity: 'Select Activity',
          hours: '0.00',
        };
        setTimesheetEntries([...timesheetEntries, newEntry]);
    };

    const handleDeleteEntry = (id) => {
      setTimesheetEntries(timesheetEntries.filter((entry) => entry.id !== id));
    };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-t-lg">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-gray-800 mr-2">Billable</h2>
                <span className="text-xs font-medium text-gray-600">(Offshore)</span>

        </div>
        <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 mr-4">40.00 / 40.00</span>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-600 hover:text-gray-800"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <button className="ml-2 text-gray-600 hover:text-gray-800">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="p-4">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-gray-600">Date</h3>
            <span className="text-sm font-medium text-gray-600">4/12/2023</span>
          </div>
          <div className="pt-2">
                    {timesheetEntries.map((entry) => (
                        <TimesheetEntry
                            key={entry.id}
                            project={entry.project}
                            activity={entry.activity}
                            hours={entry.hours}
                            onDelete={() => handleDeleteEntry(entry.id)}
                        />
                    ))}
                </div>
          <button
            onClick={handleAddEntry}
            className="mt-4 w-full text-center py-2 text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none"
          >
            + Add Row
          </button>
        </div>
      )}
    </div>
  );
};

export default BillableOffshoreSegment;