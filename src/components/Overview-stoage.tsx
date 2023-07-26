import * as React from 'react';
import {FiImage} from "react-icons/fi"
import {BiSolidVideos,BiSquare} from "react-icons/bi"
import {HiOutlineDocument} from "react-icons/hi"

interface IOSProps {
}

const OS: React.FunctionComponent<IOSProps> = (props) => {
  return (
    
        
         <div className='ml-[18%] pl-8 mt-3'>
            <p>Overview Storage</p>
            {/* elmenets */}
           <div className='flex gap-5 mt-4' >

           <div className='bg-gray-400 w-[22.4%]  p-3 rounded-sm' >
                <div className='flex gap-2'>
                    
                    <FiImage size={20} />
                    
                    <small className=''>
                    Image <br />
                    154 items
                    </small>
                </div>
                <input type="range" name="" id="" />
                <small>22 GB of 100GB</small>
            </div>

            <div className='bg-gray-400 w-[22.4%]  p-3 rounded-sm' >
                <div className='flex gap-2'>
                    
                       <BiSolidVideos size={20}/>
                   
                    <small className=''>
                    Video <br />
                    24 items
                    </small>
                </div>
                <input type="range" name="" id="" />
                <small>32 GB of 100GB</small>
            </div>

            <div className='bg-gray-400 w-[22.4%]  p-3 rounded-sm' >
                <div className='flex gap-2'>
                  <HiOutlineDocument size={20}/>
                    <small className=''>
                    Document <br />
                    232 items
                    </small>
                </div>
                <input type="range" name="" id="" />
                <small>22 GB of 100GB</small>
            </div>

            <div className='bg-gray-400 w-[22.4%]  p-3 rounded-sm' >
                <div className='flex gap-2'>
                    <BiSquare size={20}/>
                    <small className=''>
                    Other <br />
                    154 items
                    </small>
                </div>
                <input type="range" name="" id="" />
                <small>22 GB of 100GB</small>
            </div>

           </div>

            {/* end */}
        </div>
    
  );
};

export default OS;
