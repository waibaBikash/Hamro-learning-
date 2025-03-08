import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import Loading from '../../components/student/Loading'

const StudentsEnrolled = () => {

  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrolledstudents = async () => {
     setEnrolledStudents(dummyStudentEnrolled)
  }

  useEffect(()=>{
   fetchEnrolledstudents()
  },[])
  return enrolledStudents ? (
    <div className='min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 pt-8 pb-0'>
       <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
          <table className='table-fixed md:table-auto w-full overflow-hidden pb-4'>
             <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
               <tr>
                 <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                 <th className='px-4 py-3 font-semibold'>Student Name</th>
                 <th className='px-4 py-3 font-semibold'>Course Title</th>
                 <th className='px-4 py-3 font-semibold'>Date</th>
               </tr>
             </thead>
          </table>
       </div>
      
   </div>
  ) : <Loading/>
}

export default StudentsEnrolled