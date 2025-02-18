import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { humanizeDuration} from 'humanize-duration'

export const AppContext = createContext()

export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY

  const navigate = useNavigate()

  const [allCourses, setAllCourses] = useState([])
  const [isEducator, setIsEducator] = useState(true)


  // Fetch All Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses)
  }
   // Function to calculate average rating of course
   const calculateRating = (course)=>{
      if(course.courseRatings.length === 0){
        return 0;
      }
      let totalRating = 0
      course.courseRatings.forEach(rating => {
        totalRating += rating.rating
      })
      return totalRating / course.courseRatings.length
   }
   // Function to Calculate Course Chapter Time
   const calculateChapterTime = (chapter) => {
    let time = 0
    chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
   }
   // Function to Calculate Course Duration
   const calculateCourseDuration = (course)=>{
     let time = 0

     course.courseContent.map((chapter)=> chapter.chapterContent.map((lecture)=> time =+ lecture.lectureDuration))
     return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
   }


  useEffect(()=>{
    fetchAllCourses()
  },[])

  const value = {
   currency, allCourses, navigate,calculateRating, isEducator, setIsEducator,
  }

return(
  <AppContext.Provider value={value}>
     {props.children}
  </AppContext.Provider>
)

}