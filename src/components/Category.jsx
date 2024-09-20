import React from 'react';
import Widget from './Widget';
import { PlusCircle } from 'lucide-react';

const Category = ({ category, removeWidget, addWidget }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(widget.id)}
          />
        ))}
        <button
          onClick={addWidget}
          className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md border-2 border-dashed border-gray-300 hover:border-green-300 transition-colors duration-200"
        >
          <PlusCircle className="mr-2 h-5 w-5 text-slate-300 hover:text-green-500" />
          <span className="text-slate-300 font-medium hover:text-green-500 ">Add Widget</span>
        </button>
      </div>
    </div>
  );
};

export default Category;