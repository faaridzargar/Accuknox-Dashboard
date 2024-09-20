import React, { useState, useMemo } from 'react';
import Category from './Category';
import AddWidgetForm from './AddWidgetForm';
import SearchWidgets from './SearchWidgets';
import Modal from './Modal';
import { PlusCircle, RotateCw, MoreVertical, Clock } from 'lucide-react';

const Dashboard = ({ initialData }) => {
  const [dashboardData, setDashboardData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addWidget = (categoryId, widgetName, widgetContent) => {
    setDashboardData(prevData => {
      const newData = { ...prevData };
      const category = newData.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets.push({
          id: `w${Date.now()}`,
          name: widgetName,
          content: widgetContent
        });
      }
      return newData;
    });
    setIsModalOpen(false);
  };

  const removeWidget = (categoryId, widgetId) => {
    setDashboardData(prevData => {
      const newData = { ...prevData };
      const category = newData.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
      return newData;
    });
  };

  const openAddWidgetModal = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsModalOpen(true);
  };

  const filteredDashboardData = useMemo(() => {
    if (!searchTerm) return dashboardData;

    return {
      ...dashboardData,
      categories: dashboardData.categories.map(category => ({
        ...category,
        widgets: category.widgets.filter(widget => 
          widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          widget.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.widgets.length > 0)
    };
  }, [dashboardData, searchTerm]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen bg-gray-200">
      <div className="rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">CNAPP Dashboard</h1>
          <div className="flex items-center space-x-4">
            <SearchWidgets searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
            <button 
              onClick={() => openAddWidgetModal(null)} 
              className="flex items-center px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 border border-blue-600 rounded-md shadow-sm text-sm font-medium"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Add Widget
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <RotateCw onClick={()=>{
                location.reload()
              }} className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <MoreVertical className="h-5 w-5" />
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Clock className="mr-2 h-5 w-5" />
              Last 5 days
            </button>
          </div>
        </div>
      </div>
      {filteredDashboardData.categories.map(category => (
        <Category
          key={category.id}
          category={category}
          removeWidget={(widgetId) => removeWidget(category.id, widgetId)}
          addWidget={() => openAddWidgetModal(category.id)}
        />
      ))}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Widget">
        <AddWidgetForm 
          categories={dashboardData.categories} 
          addWidget={addWidget}
          selectedCategory={selectedCategory}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;