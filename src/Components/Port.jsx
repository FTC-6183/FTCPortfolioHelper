import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PortBar = (props) => {
  return (
  <div className="bg-box rounded-md">

      {/* Text elements */}
      <div className=" p-2 rounded-[5px]">
        <span className="font-roboto text-white text-lg">#{props.number}- {props.name}</span>
        <br />
        <a href={props.url} target="_blank" className="font-roboto leading-[16.00px] text-blue-500 text-sm w-[94%] sm:w-full">
          Link <FontAwesomeIcon icon = {faArrowRight} />
        </a>
        <br />
        <span className="font-roboto text-orange-600 text-sm">Awards: {props.award} {props.place} </span>
        <br />
        <span className="font-roboto text-white text-sm mb-[13px]">Level: {props.level}</span>
        <br />
        <span className="font-roboto text-white text-sm">Season: {props.seasonDisplay}</span>
        <br />
        <span className="font-roboto text-white text-sm">Region: {props.region}</span>
        <br />

      </div>
    </div>
  );
};

export default PortBar;
