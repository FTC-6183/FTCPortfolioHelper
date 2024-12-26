import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortBar = (props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-slate-800/50 p-4 transition-all duration-300 hover:bg-slate-800 hover:shadow-lg">
      {/* Header with team number and name */}
      <div className="mb-3">
        <h3 className="font-roboto text-xl font-bold text-white">
          #{props.number} - {props.name}
        </h3>
        
        <a 
          href={props.url} 
          target="_blank" 
          className="mt-2 inline-flex items-center gap-2 text-blue-400 transition-colors duration-300 hover:text-blue-300"
        >
          <span className="font-roboto">View Portfolio</span>
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="transform transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* Award section */}
      <div className="mb-3">
        <div className="inline-block rounded-full bg-orange-600/20 px-3 py-1">
          <span className="font-roboto text-sm font-medium text-orange-400">
            {props.award} {props.place}
          </span>
        </div>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="font-roboto block text-gray-400">Level</span>
          <span className="font-roboto text-white">{props.level}</span>
        </div>
        <div>
          <span className="font-roboto block text-gray-400">Season</span>
          <span className="font-roboto text-white">{props.seasonDisplay}</span>
        </div>
        <div className="col-span-2">
          <span className="font-roboto block text-gray-400">Region</span>
          <span className="font-roboto text-white">{props.region}</span>
        </div>
      </div>
    </div>
  );
};

export default PortBar;
