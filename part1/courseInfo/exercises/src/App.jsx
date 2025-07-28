import Content from "./component/Content"
import Header from "./component/Header"
import Total from "./component/Total"

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
let total=0
parts.forEach(part => total += part.exercises)

  return (
    <div>
      <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
    </div>
  )
}

export default App
