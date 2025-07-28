import Part from "./Part"

function Content({course}) {
  return (
    <>
      {course.parts.map((part, index) => <Part key={index} part={part} />)}
    </>
  )
}

export default Content