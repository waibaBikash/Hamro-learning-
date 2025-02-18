import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'

const CourseDetials = () => {

  const {id} = useParams()

  const [courseData, setCourseData] = useState(null)

  const {allCourses, calculateRating} = useContext(AppContext)

  const fetchCourseData = async ()=>{
   const findCourse =  allCourses.find(course => course._id === id)
   setCourseData(findCourse)
  }

  useEffect(()=>{
   fetchCourseData()
  },[])
  return courseData ? (
    <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
      
      <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70 '></div>

      {/* Left Column */}
      <div className='max-w-xl z-10 text-gray-500'>
         <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>
         {/*  use double undescore */}
         <p className='pt-4 md:text-base text-sm'
         dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0,200)}}></p>

         {/* review and rating */}

         <div className='flex items-center space-x-2'> 
                      <p>{calculateRating(courseData)}</p>
                       <div className='flex'>
                         {[...Array(5)].map((_,i)=>(<img className='w-3.5 h-3.5' key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt=''/>
                       ))}
                       </div>
                       <p className='text-gray-500'>{courseData.courseRatings.length}</p>
                   </div>
      </div>

      {/* Right Column */}
      <div></div>

    </div>
    </>
  ) : <Loading/>
}

export default CourseDetials