import { calculateInvestmentResults , formatter} from "../util/investment"

export default function Results({userInput}){


    const result = calculateInvestmentResults(userInput)
    console.log(result)
    return<div id ='result'>
        {result.map((yearData) => 
        
        (<div>{yearData.year}&emsp;  {formatter.format(yearData.interest)}&emsp; {formatter.format(yearData.valueEndOfYear)} </div>))}
    </div>
}