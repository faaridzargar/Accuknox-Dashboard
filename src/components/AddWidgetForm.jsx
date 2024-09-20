import React, { useState, useEffect } from 'react';

const AddWidgetForm = ({ categories, addWidget, selectedCategory }) => {
  const [categoryId, setCategoryId] = useState(selectedCategory || '');
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');

  useEffect(() => {
    setCategoryId(selectedCategory || '');
  }, [selectedCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryId && widgetName && widgetContent) {
      addWidget(categoryId, widgetName, widgetContent);
      setCategoryId('');
      setWidgetName('');
      setWidgetContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Category:</label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          required
        >
          <option value="">Select a category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Widget Name:</label>
        <input
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Widget Content:</label>
        <textarea
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          rows="3"
          required
        />
      </div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Add Widget
      </button>
    </form>
  );
};

export default AddWidgetForm;