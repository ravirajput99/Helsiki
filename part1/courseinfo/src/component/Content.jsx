import Part from "./Part"

function Content({ course }) {
  return (
    <>
      {course.parts.map((part) => <Part key={part.id} part={part} />)}
      <p><strong>Total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>
    </>
  )
}

export default Content