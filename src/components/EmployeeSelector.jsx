import React, { useState } from 'react';
import './EmployeeSelector.css';

const EmployeeSelector = ({ employees, selectedEmployeeId, onEmployeeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedEmployee = employees.find(emp => emp.id === selectedEmployeeId);
  
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEmployeeSelect = (employeeId) => {
    onEmployeeChange(employeeId);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="employee-selector">
      <div className="selector-header">
        <h2 className="selector-title font-primary glow-text">
          <i className="fas fa-users"></i>
          Employee Database
        </h2>
        <p className="selector-subtitle font-secondary">
          Select an employee to view their digital ID card
        </p>
      </div>

      <div className="selector-container">
        {/* Current Selection Display */}
        <div className="current-selection" onClick={() => setIsOpen(!isOpen)}>
          <div className="selection-content">
            <div className="selected-employee">
              <div className="selected-avatar">
                <img 
                  src={selectedEmployee?.photo} 
                  alt={selectedEmployee?.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/60x60/1a2332/00ffff?text=?';
                  }}
                />
                <div className="avatar-status"></div>
              </div>
              <div className="selected-info">
                <h3 className="selected-name font-primary">
                  {selectedEmployee?.name}
                </h3>
                <p className="selected-id font-mono">
                  ID: {selectedEmployee?.id}
                </p>
                <p className="selected-designation">
                  {selectedEmployee?.designation}
                </p>
              </div>
            </div>
            <div className="dropdown-arrow">
              <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          <div className="search-container">
            <div className="search-input-wrapper">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input font-secondary"
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>

          <div className="employee-list">
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className={`employee-item ${employee.id === selectedEmployeeId ? 'selected' : ''}`}
                  onClick={() => handleEmployeeSelect(employee.id)}
                >
                  <div className="employee-avatar">
                    <img 
                      src={employee.photo} 
                      alt={employee.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/40x40/1a2332/00ffff?text=?';
                      }}
                    />
                    <div className="avatar-status"></div>
                  </div>
                  <div className="employee-info">
                    <h4 className="employee-name font-secondary">
                      {employee.name}
                    </h4>
                    <p className="employee-id font-mono">
                      {employee.id}
                    </p>
                    <p className="employee-designation">
                      {employee.designation}
                    </p>
                  </div>
                  <div className="employee-status">
                    <span className={`status-badge ${employee.status.toLowerCase()}`}>
                      {employee.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <p>No employees found matching "{searchTerm}"</p>
              </div>
            )}
          </div>

          <div className="dropdown-footer">
            <div className="employee-count">
              <i className="fas fa-users"></i>
              <span>{filteredEmployees.length} of {employees.length} employees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="selector-overlay" onClick={() => setIsOpen(false)}></div>}
    </div>
  );
};

export default EmployeeSelector;