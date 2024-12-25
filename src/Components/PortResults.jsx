import React from 'react';
import PortBar from './Port';

const PortResults = ({ returnUrls }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-min gap-4 px-8 ">
      {returnUrls.length > 0 ? (
        returnUrls.map((port, index) => (
          <PortBar
            key={index} // Make sure to include a unique key for each item in the map
            name={port.getName()}
            index={index}
            number={port.getNum()}
            url={port.getUrl()}
            award={port.getAward()}
            place={port.getPlace()}
            region={port.getRegion()}
            season={port.getSeason()}
            level={port.getLevel()}
            seasonDisplay={port.seasonDisplay}
          />
        ))
      ) : (
        <div className="ml-9 text-white">
          <p>No Results</p>
        </div>
      )}
    </div>
  );
};

export default PortResults;
