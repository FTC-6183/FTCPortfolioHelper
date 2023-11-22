import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PortBar = (props) => {
  return (
      <div className="px-8 max-w-screen-lg">
      <div className={`border-4 border-owl-orange p-4 rounded-lg mb-4 bg-white`} key={props.index}>
            <div className="border-2 p-4 rounded-lg mb-4 bg-transparent text-black text-2xl">
              <div className="mr-4">
                <strong>Name:</strong> {props.name}
              </div>
              <div className="mr-4">
                <strong>Number:</strong> {props.number}
              </div>
              <div className="mr-4">
                <strong>URL:</strong>{' '}
                <a target="_blank" href={props.url} className="text-owl-blue">
                  Link <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </a>
              </div>
              <div className="mr-4">
                <strong>Award:</strong> {props.award} {props.place}
              </div>
              <div className="mr-4">
                <strong>Season:</strong> {props.seasonDisplay}
              </div>
              <div className="mr-4">
                <strong>Level:</strong> {props.level}
              </div>
              <div className="mr-4">
                <strong>Region:</strong> {props.region}
              </div>
            </div>
          </div>
      </div>);
};

export default PortBar;
