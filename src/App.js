import { useState } from 'react'

const Header = (props)=>{
  return(
    <div>
      <h1>{props.headerContent}</h1>
    </div>
  )
}

const Button = (props)=>{
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) =>{
  if(props.all === 0){
    return(
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text={'Good'} value={props.good}/>
      <StatisticLine text={'Neutral'} value={props.neutral}/>
      <StatisticLine text={'Bad'} value={props.bad}/>

      <StatisticLine text={'All'} value={props.all}/>
      <StatisticLine text={'Average'} value={props.average}/>
      <StatisticLine text={'Positive'} value={props.positive}/>
    </div>
  )
}

const StatisticLine = (props) => {

  return (
    <div>
      {props.text} {props.value}
    </div>

  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  let all=good+neutral+bad
  let average = ((good + bad * -1) / all)
  let positive = ((good / all) * 100) + '%'

  return (
    <div>
      <Header headerContent={'Give Feedback!'}/>
      
      <Button handleClick={handleGood} text={'Good'}/>
      <Button handleClick={handleNeutral} text={'Neutral'}/>
      <Button handleClick={handleBad} text={'Bad'}/>


      <Header headerContent={'Statistics'}/>

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
      </div>
  )
}

export default App