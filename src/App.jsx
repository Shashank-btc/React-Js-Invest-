import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {

  const [ userInput , setUserInput ] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
})

function handleChange(inputIdentifier, newVal){
  setUserInput((pervUserInput) => {
      return {
          ...pervUserInput,
          [inputIdentifier] : +newVal
      }
  })
}

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results userInput={userInput}/>

    </>
  )
}

export default App
