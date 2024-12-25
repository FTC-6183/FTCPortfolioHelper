import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Ports } from './ports';
import Select from 'react-select';


const Searchbar = ({returnUrls, setReturnUrls}) => { 

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
    
      const [awardFilter, setAwardFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const handleAwardFilterChange = (e) => {
    const newAwardFilter = e.target.value;
    setAwardFilter(newAwardFilter);

    // Check if there are any portfolios that match the selected award and level
    const hasPortfoliosWithCombination = Ports.some(
      (port) => port.getAward() === newAwardFilter && port.getLevel() === levelFilter
    );

    // Reset the region filter if there are no portfolios with the selected award and level
    if (!hasPortfoliosWithCombination) {
      setRegionFilter('');
    }
};

  const handleLevelFilterChange = (e) => {
    setLevelFilter(e.target.value);

    if (e.target.value !== 'Regionals' && e.target.value !== 'Qualifiers') {
      setRegionFilter(''); // Reset region filter if level is changed to a different option
    }
  };

  const handleRegionFilterChange = (selectedOption) => {
    if (selectedOption && selectedOption.value !== null) {
      setRegionFilter(selectedOption.value);
    } else {
      setRegionFilter('');
    }
  };
    
  const filteredRegions = Array.from(
    new Set(
      Ports.filter(
        (port) => port.getLevel() === levelFilter && (awardFilter === 'Any' || port.getAward() === awardFilter)
      ).map((port) => port.getRegion())
    )
  );

  // Generate region options based on the filtered regions
  const regionOptions = filteredRegions
    .map((region) => ({ value: region, label: region }))
    .sort((a, b) => (a.label || '').localeCompare(b.label || '', 'en', { sensitivity: 'base' }));

          const [showSelectLevel, setShowSelectLevel] = useState(true);
  const [showSelectAward, setShowSelectAward] = useState(true);
  useEffect(() => {
      // Check if the user has made a selection for level and award
      // If yes, hide the "Select a level" and "Select an award" options from the dropdown
      if (levelFilter !== '') {
        setShowSelectLevel(false);
      }
      if (awardFilter !== '') {
        setShowSelectAward(false);
      }
    }, [levelFilter, awardFilter]);
    // Function to determine if an option should be disabled
const isOptionDisabled = (optionValue) => {
  return (
    (optionValue === 'Any' && !showSelectAward) ||
    (optionValue === 'Any' && !showSelectLevel)
  );
};
  const disable = !awardFilter || !levelFilter;
  return (
    
    <div>
      <div className="px-8" style={{ display: 'flex', justifyContent: 'left' }}>
        <div className="mr-2">
          <select
            className="bg-box border border-gray-300 text-white rounded py-2 px-4 mr-8 mt-4"
            value={awardFilter}
            onChange={handleAwardFilterChange}
          >
            <option disabled={isOptionDisabled('Any')} value="">Select an award</option>
            <option value="Any">Any/None</option>
            <option value="Control">Control</option>
            <option value="Inspire">Inspire</option>
            <option value="Motivate">Motivate</option>
            <option value="Innovate">Innovate</option>
            <option value="Design">Design</option>
            <option value="Connect">Connect</option>
            <option value="Think">Think</option>
          </select>
        </div>
        <div className="mr-2">
          <select
            className="bg-box border text-white border-gray-300 rounded py-2 mr-8 px-4 mt-4"
            value={levelFilter}
            onChange={handleLevelFilterChange}
          >
            <option disabled={isOptionDisabled('Any')} value="">Select a level </option>
            <option value="Any">Any</option>
            <option value="Worlds">Worlds</option>
            <option value="Regionals">Regionals</option>
            <option value="Qualifiers">Qualifiers</option>
          </select>
        </div>
        {levelFilter === 'Regionals' || levelFilter === 'Qualifiers' ? (
          <div className="mr-2">
            <Select
              className="w-64 mt-4  text-white"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: '#1e2028',
                  color: 'white',
                }),
                option: (provided) => ({
                  ...provided,
                  backgroundColor: '#1e2028',
                  color: 'white',
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: '#1e2028',
                }),
              }}
                                    
              placeholder="(Optional) Select a region"
              isClearable
              options={regionOptions}
              onChange={handleRegionFilterChange}
            />
          </div>
        ) : null}
        <button   className={`${disable ? 'bg-slate-500' : 'bg-owl-blue'} text-white py-2 px-4 rounded-full mt-4`}
  onClick={handleSearch} disabled = {disable}>
          <FontAwesomeIcon icon={faSearch} className="mr-1" /> Search
        </button>
      </div>
      <div className="ml-9 text-white">
        <p>Search results: {returnUrls.length}</p>
      </div>
    </div>
  );

}


export default Searchbar;
