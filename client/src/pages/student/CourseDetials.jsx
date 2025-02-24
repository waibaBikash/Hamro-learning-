import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'

const CourseDetials = () => {

  const {id} = useParams()

  const [courseData, setCourseData] = useState(null)

  const {allCourses, calculateRating,claculateNoOfLectures, calculateCourseDuration, calculateChapterTime, humanizeDuration} = useContext(AppContext)

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

         <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'> 
                      <p>{calculateRating(courseData)}</p>
                       <div className='flex'>
                         {[...Array(5)].map((_,i)=>(<img className='w-3.5 h-3.5' key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt=''/>
                       ))}
                       </div>
                       <p className='text-gray-500'>({courseData.courseRatings.length}
                        {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})</p>

                        <p>{courseData.enrolledStudents.length}{courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
                   </div>

                   <p className='text-sm'>Course by <span className='text-blue-600 underline'>Hamro-Learning</span></p>
                    <div className='pt-8 text-gray-800'>
                      <h2 className='text-xl font-semibold'>Course Sturcture</h2>
                        <div className='pt-5'>
                            {courseData.courseContent.map((chapter, index)=> (
                               <div key={index}>
                                  <div>
                                      <div>
                                        <img src={assets.down_arrow_icon} alt="arrow icon" />
                                        <p>{chapter.chapterTitle}</p>
                                      </div>
                                       <p>{chapter.chapterContent.length}lectures - {calculateChapterTime(chapter)}</p>
                                  </div>
                                   <div>
                                     <ul>
                                       {chapter.chapterContent.map((lecture, i)=>(
                                        <li key={i}>
                                           <img className='w-4 h-4 mt-1' src={assets.play_icon} alt="play icon" />
                                            <div>
                                               <p>{lecture.lectureTitle}</p>
                                                <div>
                                                   {lecture.isPreviewFree && <p>Preview</p>}
                                                   <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, {units: ['h', 'm']})}</p>
                                                </div>
                                            </div>
                                        </li>
                                       ))}
                                     </ul>
                                   </div>
                               </div>
                            ))}
                        </div>
                    </div>
      </div>

      {/* Right Column */}
      <div></div>

    </div>
    </>
  ) : <Loading/>
}

export default CourseDetials