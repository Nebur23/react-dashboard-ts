import * as React from 'react';
import {TbBrandWindows} from "react-icons/tb"
import {AiOutlinePlus } from "react-icons/ai"

interface ISubNavProps {
}

const SubNav: React.FunctionComponent<ISubNavProps> = (props) => {
  return (
    <div className='ml-[18%] flex items-center '>
        <div className=' w-[70%]'>
            <small className='flex justify-start pl-8 gap-2 items-center'> <TbBrandWindows size={20}/> overview storage</small>
        </div>
        {/* buttons */}
        <div className='flex items-center gap-2 pt-3'>
            <button className='py-2 px-5 bg-gray-400'><small>Sort</small></button>
            <button className='py-2 px-5 bg-gray-400 flex justify-center items-center gap-1'>
                <TbBrandWindows size={20}/> <small>view</small>
            </button>
            <button className='py-2 px-5 bg-orange-500 flex justify-center items-center gap-1'>
            <AiOutlinePlus/>   <small>Create</small>
            </button>
        </div>
       
    </div>
  );
};

export default SubNav;
