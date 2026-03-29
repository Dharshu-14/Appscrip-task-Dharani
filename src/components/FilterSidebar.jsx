import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FILTER_CATEGORIES } from '../constants/mockData';
import './FilterSidebar.css';


const FilterBox = ({ title, options, open, onToggle, selectedOptions, onSelectOption, onUnselectAll }) => {
  return (
    <div className="filter-box">
      <div className="filter-box-head" onClick={onToggle}>
        <div>
          <span className="box-title">{title}</span>
          <p className="box-sub">{selectedOptions.size > 0 ? `${selectedOptions.size} selected` : 'All'}</p>
        </div>
        {open ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
      </div>
      {open && (
        <div className="box-content">
          <button className="unselect" onClick={onUnselectAll}>Unselect all</button>
          {options && options.length > 0 ? (
            options.map((option) => (
              <label key={option}>
                <input 
                  type="checkbox" 
                  checked={selectedOptions.has(option)}
                  onChange={() => onSelectOption(option)}
                /> 
                {option}
              </label>
            ))
          ) : (
            <p>No options available</p>
          )}
        </div>
      )}
    </div>
  );
};



const FilterSidebar = ({ onClose, selected, setSelected }) => {
  const [openIndex, setOpenIndex] = useState(0); // open first by default

  const handleSelectOption = (catId, option) => {
    setSelected(prev => {
      const next = { ...prev };
      const set = new Set(next[catId]);
      if (set.has(option)) set.delete(option);
      else set.add(option);
      next[catId] = set;
      return next;
    });
  };

  const handleUnselectAll = (catId) => {
    setSelected(prev => ({ ...prev, [catId]: new Set() }));
  };

  const handleClearAll = () => {
    setSelected(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(key => { next[key] = new Set(); });
      return next;
    });
  };

  return (
    <>
      <div className="filter-top">
        <h2 id="filters-heading">Filters</h2>
        <button className="close-btn mobile-only" aria-label="Close filters" onClick={onClose}>
          Close
        </button>
      </div>

      <button className="clear-all-btn" onClick={handleClearAll} style={{marginBottom: 12, color: 'var(--primary-black)', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: 13, textDecoration: 'underline', padding: 0}}>Clear All</button>

      <div className="custom-row">
        <input type="checkbox" id="c" /> <label htmlFor="c">CUSTOMIZABLE</label>
      </div>

      {FILTER_CATEGORIES.filter(cat => cat.type !== 'checkbox').map((category, idx) => (
        <FilterBox
          key={category.id}
          title={category.label}
          options={category.options}
          open={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          selectedOptions={selected[category.id] || new Set()}
          onSelectOption={option => handleSelectOption(category.id, option)}
          onUnselectAll={() => handleUnselectAll(category.id)}
        />
      ))}
    </>
  );
};

export default FilterSidebar;