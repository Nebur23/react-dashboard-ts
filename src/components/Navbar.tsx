import * as React from 'react';
import {AiOutlineSearch,AiOutlineBell} from "react-icons/ai"
import {IoSettingsOutline} from "react-icons/io5"
import {CiCirclePlus} from "react-icons/ci"

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return(
    <div className='ml-[18%]'>
         <div className='  py-[9.5px] border-b-2 border-gray-500  flex gap-2 justify-start pl-8 items-center '>
            <p>File Manager</p>
            <small className='flex justify-start items-center ml-6  bg-gray-400 p-[6px] gap-2 w-[40%]'>
                <AiOutlineSearch size={20}/>
                 <input type="text" placeholder='Search here' className='bg-transparent outline-none placeholder:text-white' />
            </small>
            {/* profile , settings icons */}
            <div className=' w-[43%] flex justify-end items-center gap-4'>
                <CiCirclePlus/>
                <AiOutlineBell/>
                <IoSettingsOutline/>
                <img 
            className="h-[40px] w-[40px] p-2 rounded-full"
            src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwcGVvcGxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" 
            alt="" />
            </div>
        </div>
    </div>
  ) ;
};

export default Navbar;
