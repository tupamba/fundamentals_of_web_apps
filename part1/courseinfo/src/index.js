import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>
{
    return(
    <>
    <h1>{props.course}</h1>
    </>)
}
const Content = (props) =>
{
  
    return(
    <>
    {props.parts.map(element => <Part part={element.name} exercise={element.exercises}></Part>)}
    </>)
}
const Total = (props) =>
{
  let amount = 0;
  props.parts.forEach(element => {
    amount += element.exercises;
  });
    return(
    <>
   <p>Number of exercises {amount}</p>
    </>)
}
const Part = (props) =>
{
    return(
        <>
          <p>
            {props.part} {props.exercise}
          </p>
        </>)
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
