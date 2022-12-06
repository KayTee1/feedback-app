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
      <StatisticLine text={'good'} value={props.good}/>
      <StatisticLine text={'neutral'} value={props.neutral}/>
      <StatisticLine text={'bad'} value={props.bad}/>

      <StatisticLine text={'all'} value={props.all}/>
      <StatisticLine text={'average'} value={props.average}/>
      <StatisticLine text={'positive'} value={props.positive}/>
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
      <Header headerContent={'give feedback'}/>
      
      <Button handleClick={handleGood} text={'good'}/>
      <Button handleClick={handleNeutral} text={'neutral'}/>
      <Button handleClick={handleBad} text={'bad'}/>


      <Header headerContent={'statistics'}/>

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