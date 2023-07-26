import * as React from 'react';

interface IRFProps {
}

const RF: React.FunctionComponent<IRFProps> = (props) => {
  return (
    <div className='ml-[18%] mt-8 pl-8'>
        <p>Recent files</p>
        <table className='w-[96%] text-right'>
            <tr>
                <th className='p-4 text-left'><input type="checkbox" name="" id="" /> <small>Name</small></th>
                <th className='p-4'><small>size</small></th>
                <th className='p-4'><small>shared</small></th>
                <th className='p-4'><small>Last modified </small></th>
            </tr>
            <tr>
                <td className='p-4 text-left'><small>TobaLake Proposal 2023.doc</small></td>
                <td className='p-4'><small>8.45 MB</small></td>
                <td className='p-4'><small>me</small></td>
                <td className='p-4'><small>23/O3/2023 - 17:15</small></td>
            </tr>

            <tr>
                <td className='p-4 text-left'><small>TobaLake Proposal 2023.doc</small></td>
                <td className='p-4'><small>8.45 MB</small></td>
                <td className='p-4'><small>me</small></td>
                <td className='p-4'><small>23/O3/2023 - 17:15</small></td>
            </tr>
            <tr>
                <td className='p-4 text-left'><small>TobaLake Proposal 2023.doc</small></td>
                <td className='p-4'><small>8.45 MB</small></td>
                <td className='p-4'><small>me</small></td>
                <td className='p-4'><small>23/O3/2023 - 17:15</small></td>
            </tr>
            <tr>
                <td className='p-4 text-left'><small>TobaLake Proposal 2023.doc</small></td>
                <td className='p-4'><small>8.45 MB</small></td>
                <td className='p-4'><small>me</small></td>
                <td className='p-4'><small>23/O3/2023 - 17:15</small></td>
            </tr>
            <tr>
                <td className='p-4 text-left'><small>TobaLake Proposal 2023.doc</small></td>
                <td className='p-4'><small>8.45 MB</small></td>
                <td className='p-4'><small>me</small></td>
                <td className='p-4'><small>23/O3/2023 - 17:15</small></td>
            </tr>
        </table>

    </div>
  );
};

export default RF;
