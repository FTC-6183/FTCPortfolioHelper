import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Select from 'react-select';
import { Ports } from './ports';


const Searchbar = ({ returnUrls, setReturnUrls }) => {
  const [awardFilter, setAwardFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [showSelectLevel, setShowSelectLevel] = useState(true);
  const [showSelectAward, setShowSelectAward] = useState(true);

  const search = (level, award, region) => {
    let filteredPorts = Ports;
    if (award !== 'Any') {
      filteredPorts = filteredPorts.filter((port) => port.getAward() === award);
    }
    if (level !== 'Any') {
      filteredPorts = filteredPorts.filter((port) => port.getLevel() === level);
    }
    if (region !== '') {
      filteredPorts = filteredPorts.filter((port) => port.getRegion() === region);
    }
    setReturnUrls(filteredPorts);
  };

  const handleSearch = () => {
    search(levelFilter, awardFilter, regionFilter);
  };

  // Your existing filter handling functions remain the same
  const handleAwardFilterChange = (selectedOption) => {
    const newAwardFilter = selectedOption.value;
    setAwardFilter(newAwardFilter);
    const hasPortfoliosWithCombination = Ports.some(
      (port) => port.getAward() === newAwardFilter && port.getLevel() === levelFilter
    );
    if (!hasPortfoliosWithCombination) {
      setRegionFilter('');
    }
  };

  const handleLevelFilterChange = (selectedOption) => {
    setLevelFilter(selectedOption.value);
    if (selectedOption.value !== 'Regionals' && selectedOption.value !== 'Qualifiers') {
      setRegionFilter('');
    }
  };

  const handleRegionFilterChange = (selectedOption) => {
    setRegionFilter(selectedOption ? selectedOption.value : '');
  };

  const filteredRegions = Array.from(
    new Set(
      Ports.filter(
        (port) => port.getLevel() === levelFilter && (awardFilter === 'Any' || port.getAward() === awardFilter)
      ).map((port) => port.getRegion())
    )
  );

  const regionOptions = filteredRegions
    .map((region) => ({ value: region, label: region }))
    .sort((a, b) => (a.label || '').localeCompare(b.label || '', 'en', { sensitivity: 'base' }));

  const awardOptions = [
    { value: '', label: 'Select an award', isDisabled: true },
    { value: 'Any', label: 'Any/None' },
    { value: 'Control', label: 'Control Award' },
    { value: 'Inspire', label: 'Inspire Award' },
    { value: 'Motivate', label: 'Motivate Award' },
    { value: 'Innovate', label: 'Innovate Award' },
    { value: 'Design', label: 'Design Award' },
    { value: 'Connect', label: 'Connect Award' },
    { value: 'Think', label: 'Think Award' }
  ];

  const levelOptions = [
    { value: '', label: 'Select a level', isDisabled: true },
    { value: 'Any', label: 'Any Level' },
    { value: 'Worlds', label: 'Worlds' },
    { value: 'Regionals', label: 'Regionals' },
    { value: 'Qualifiers', label: 'Qualifiers' }
  ];

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      background: '#1e293b',
      borderColor: '#3f4865',
      minWidth: '200px',
      '&:hover': {
        borderColor: '#60a5fa'
      }
    }),
    menu: (base) => ({
      ...base,
      background: '#1e293b',
      border: '1px solid #3f4865'
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      background: isSelected ? '#2563eb' : isFocused ? '#334155' : '#1e293b',
      color: 'white',
      '&:active': {
        background: '#2563eb'
      }
    }),
    singleValue: (base) => ({
      ...base,
      color: 'white'
    }),
    input: (base) => ({
      ...base,
      color: 'white'
    }),
    placeholder: (base) => ({
      ...base,
      color: '#94a3b8'
    })
  };

  const disable = !awardFilter || !levelFilter;

  return (
    <div className="w-full px-6 py-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="flex-1 space-y-2">
          <Select
            options={awardOptions}
            styles={customSelectStyles}
            onChange={handleAwardFilterChange}
            placeholder="Select an award"
            className="text-sm"
          />
        </div>
        
        <div className="flex-1 space-y-2">
          <Select
            options={levelOptions}
            styles={customSelectStyles}
            onChange={handleLevelFilterChange}
            placeholder="Select a level"
            className="text-sm"
          />
        </div>

        {(levelFilter === 'Regionals' || levelFilter === 'Qualifiers') && (
          <div className="flex-1 space-y-2">
            <Select
              options={regionOptions}
              styles={customSelectStyles}
              onChange={handleRegionFilterChange}
              placeholder="Select a region (Optional)"
              isClearable
              className="text-sm"
            />
          </div>
        )}

        <button
          onClick={handleSearch}
          disabled={disable}
          className={`flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium text-white transition-colors
            ${disable ? 'bg-slate-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          <Search className="mr-2 h-4 w-4" />
          Search
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        Search results: {returnUrls.length}
      </div>
    </div>
  );
};

export default Searchbar;