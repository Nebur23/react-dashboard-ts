import * as React from 'react';
import {TbBrandWindows} from "react-icons/tb"
import {BsCloud }from "react-icons/bs"
import {AiOutlineClockCircle,AiOutlineTeam,AiOutlinePlus,AiOutlineFolderOpen} from "react-icons/ai"
import {BsStar} from "react-icons/bs"
import {RiDeleteBin6Line} from "react-icons/ri"
import {FiFolderMinus} from "react-icons/fi"
import {LiaFileAltSolid} from "react-icons/lia"
import {SiCivicrm} from "react-icons/si"


interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
    <div className='w-[18%] min-h-screen fixed border-r-2 border-gray-500 '>
        {/*  brand name and logo  */}
        <div className='  p-5 border-b-2 border-gray-500  flex gap-2 justify-center items-center'>
            <small>logo</small>
            <small>StackDrive</small>
        </div>

        {/* overview */}
        <div className='border-b-2 border-gray-500 p-4 '>
            <div className=' w-[85%] mx-auto flex flex-col gap-1 items-start'>
                    <small>overview</small>
                    <button className='bg-orange-500 w-full rounded-sm py-1 flex justify-center items-center gap-1'><TbBrandWindows /> <small>overview storage</small></button>
                </div>
        </div>

        {/* file manager */}
        <div className='border-b-2 border-gray-500'>
        <div className='flex  w-[85%]  flex-col mx-auto p-[10px] gap-2 '>
            <small className='pl-1'>  File Manager</small>
            <small className='pl-3 flex items-center gap-2'>  {">"} <BsCloud/> My Storage </small>
            <small className='pl-3 flex items-center gap-2'> {">"} <AiOutlineClockCircle /> Recent </small>
            <small className='pl-3 flex items-center gap-2'> {">"} <BsStar/> Favourites </small>
            <small className='pl-3 flex items-center gap-2'> {">"}<RiDeleteBin6Line/>  Trash</small>
        </div>
        </div>

        {/* share file */}
        <div className='border-b-2 border-gray-500'>
        <div className='flex  w-[85%] flex-col mx-auto p-[10px] gap-2 '>
            <small className='pl-1'> Shared File</small>
            <small className='pl-3 flex items-center gap-2'> {">"}  <FiFolderMinus/> Shared Folder</small>
            <small className='pl-3 flex items-center gap-2'> {">"} <LiaFileAltSolid/> Shared File</small>
        </div>
        </div>

         {/* Team Storage */}
        <div className=' border-b-2 border-gray-500'>
        <div className='flex  w-[85%] flex-col mx-auto p-[10px] gap-2'>
            <small className='pl-1'>Team Storage</small>
            <small className='pl-3 flex items-center gap-2'> {">"} <SiCivicrm/> Civic Team </small>
            <small className='pl-3 flex items-center gap-2'> {">"}<AiOutlineTeam/> Developer Team</small>
            <button className='border-orange-500 border-2 opacity-50 text-orange-500  rounded-sm py-1 flex items-center justify-center gap-2'><AiOutlinePlus/> <small>Add team storage</small></button>
        </div>
        </div>

        {/* sider footer */}
        <div className='mx-auto pb-28'>
            <div className='flex  w-[85%] flex-col mx-auto p-[10px] gap-2'>
            <small className='flex items-center gap-2'> <AiOutlineFolderOpen size={25}/> Storage <small className='flex justify-end w-[90%]'>92%</small></small>
            <input type="range" name="" id="" />
            <button className='bg-orange-500  rounded-sm py-1 '><small>Upgrade Plan</small></button>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
