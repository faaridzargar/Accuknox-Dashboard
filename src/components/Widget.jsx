import React from 'react';
import { XCircle } from 'lucide-react';

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-md">{widget.name}</h3>
        <button onClick={removeWidget} className="text-gray-400 hover:text-gray-600">
          <XCircle className="text-red-500 hover:text-red-700" size={20} />
        </button>
      </div>
      <div className="h-40 rounded-lg flex items-center justify-center text-gray-500">
        {widget.content}
      </div>
    </div>
  );
};

export default Widget;