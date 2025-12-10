import { useEffect, useState } from 'react';

export default function Table(props) {
  return (<>
    <div className="px-2">
      <table className='w-full'>
        <thead className='bg-blue-500 text-white'>
          <tr>
            <th className='p-2'>S.no</th>
            <th className='p-2'>Name</th>
            <th className='p-2'>Class</th>
            <th className='p-2'>Roll no.</th>
            <th className='p-2'>Section</th>
            <th className='p-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((i, idx) => (
            <tr>
              <td className='text-center'>{idx + 1}</td>
              <td className='text-center'>{i?.name}</td>
              <td className='text-center'>{i?.class}</td>
              <td className='text-center'>{i?.rollNo}</td>
              <td className='text-center'>{i?.section}</td>
              <td className='text-center'>
                <button className='p-1 bg-red-500 rounded-md border-0 text-white'
                onClick={()=>props.setFormData(i)}>
                  Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>)
}
