import { useState } from "react";
import {Link } from 'react-router-dom'
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import {GrHomeRounded} from 'react-icons/gr'
import {BsFire} from "react-icons/bs"
import {GiGamepad} from "react-icons/gi"
import {MdSportsGymnastics} from "react-icons/md"
import {IoIosBusiness} from "react-icons/io"
import {RiComputerFill} from "react-icons/ri"
import {FcAbout} from "react-icons/fc"
import {CgCommunity} from "react-icons/cg"
import {MdOutlinePrivacyTip} from "react-icons/md"



const SideBar = () => {
  const [topicsVisible, setTopicsVisible] = useState(true);
  const [resourcesVisible, setResourcesVisible] = useState(true);

  const icon = (
    <span>
      <span> {topicsVisible ? <GoChevronDown /> : <GoChevronRight /> }</span>
    </span>
  );

  const icon2 = (
    <span>
      <span> {resourcesVisible ? <GoChevronDown /> : <GoChevronRight /> }</span>
    </span>
  );

  return (
    <section className="mx-10">
      <div>
        <div className="pt-5 flex items-start gap-2  ">< GrHomeRounded />  Home</div>
        <div className="pt-4 flex items-start gap-2 border-b"> <BsFire/> Popular</div>
      </div>

      <div className="pt-5 pb-5 border-b cursor-pointer flex justify-between font-semibold">
        Topics
        <button onClick={() => setTopicsVisible(!topicsVisible)}> {icon} </button>
      </div>

      {topicsVisible && (
        <ul className="text-white transition-opacity ease-in duration-300 font-thin space-y-5 ">
       
       <Link to ='/gaming'><li className="flex items-start gap-2 mt-2  hover:bg-blue-500 hover:w-full hover:p-2 hover:h-auto border-rounded cursor-pointer"> <GiGamepad/> Gaming</li> </Link>
       <Link to ='/about'><li className="flex items-start gap-2 mt-2  hover:bg-blue-500 hover:w-full hover:p-2 hover:h-auto border-rounded cursor-pointer"> <MdSportsGymnastics/> Sports</li> </Link>
       <Link to ='/about'><li className="flex items-start gap-2 mt-2  hover:bg-blue-500 hover:w-full hover:p-2 hover:h-auto border-rounded cursor-pointer">  <IoIosBusiness/> Business</li> </Link>
       <Link to ='/technology'><li className="flex items-start gap-2 mt-2  hover:bg-blue-500 hover:w-full hover:p-2 hover:h-auto border-rounded cursor-pointer"> <RiComputerFill/> Technology</li> </Link>
         
        </ul>
      )}

      <div className="pt-5 pb-5 border-b cursor-pointer flex justify-between font-semibold  ">
        Resources
        <button onClick={() => setResourcesVisible(!resourcesVisible)}> {icon2} </button>
      </div>

      {resourcesVisible && (
        <ul className="text-white">
          <div className="mt-4 mb-4 font-thin space-y-5">
            <Link to ='/about'><li className="flex items-start gap-2 mt-2 hover:bg-blue-500 hover:w-full hover:p-2 hover:h-auto border-rounded cursor-pointer "><FcAbout className="bg-black-500" /> About FSHub</li></Link> 
            <Link to ='/communities'><li className="flex items-start gap-2 mt-2  hover:bg-blue-500 hover:w-full hover:p-2 hover:h-auto border-rounded cursor-pointer "> <CgCommunity/> Communities</li></Link> 
            <Link to ='/trending'><li className="flex items-start gap-2 mt-2 hover:bg-blue-500 hover:w-full hover:p-2 hover:h-auto border-rounded cursor-pointer "> <BsFire/> Trending topics</li></Link> 
            <Link to ='/policy'><li className="flex items-start gap-2 mt-2  hover:bg-blue-500 hover:w-full hover:p-2 hover:h-auto border-rounded cursor-pointer"><MdOutlinePrivacyTip/>  Privacy  Policy</li></Link> 

          </div>
        </ul>
      )}
    </section>
  );
};

export default SideBar;
