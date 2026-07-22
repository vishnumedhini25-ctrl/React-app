import html from './assets/Html.png'
import css from './assets/css.png'
import js from './assets/javaScript-logo.png';
import Course from './Course'

function CourseList(){
    let courses = [
        {
            id:1,
            name:"HTML",
            price:150,
            image:html
        },
        {
            id:2,
            name:"CSS",
            price:99,
            image:css
        },
        {
            id:3,
            name:"JavaScript",
            price:299,
            image:js
        }
    ]

    courses.sort((X,Y)=> Y.price-X.price)

    let vfmCourses = courses.filter((course)=>course.price)

    let coursesList = vfmCourses.map((course) => <Course
    key={course.id} name={course.name}
    image={course.image} price={course.price}/>)

    return(
        <>
        {coursesList}
        </>

    )
}
export default CourseList