const PortBar = (props) => {
  return (
  <div className="bg-box rounded-md">
    <div className="flex flex-col items-start justify-start p-2.5 rounded-[5px] ">
      {/* Box for the image */}
      <div className="overflow-hidden">
        <img
          className="w-[100px] h-[100px] object-cover"
          src="https://ecgrobotics.org/wp-content/uploads/2019/11/logo_10195-300x300.png"
          alt="frame"
        />
      </div>

      {/* Text elements */}
      <div className=" p-2 rounded-[5px]">
        <span className="font-roboto text-white text-lg">{props.name}- Team {props.number}</span>
        <br />
        <a href={props.url} target="_blank" className="font-roboto leading-[16.00px] text-blue-500 text-sm w-[94%] sm:w-full">
          Link.
        </a>
        <br />
        <span className="font-roboto text-white text-sm">Awards: {props.award} {props.place} </span>
        <br />
        <span className="font-roboto text-white text-sm mb-[13px]">Level: {props.level}</span>
      </div>
    </div>
    </div>
  );
};

export default PortBar;
