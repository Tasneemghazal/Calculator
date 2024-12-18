import { useState } from "react"
import { AppContainer, ButtonContainer, Calculator } from "./App.style"
import Result from "./components/result/Result"
import Button from "./components/numberButton/Button";

const buttons = [
  {btn:"0", className:"num"},
  {btn: "1", className: "num"},
  {btn: "2", className: "num"},
  {btn: "3", className: "num"},
  {btn: "4", className: "num"},
  {btn: "5", className: "num"},
  {btn: "6", className: "num"},
  {btn: "7", className: "num"},
  {btn: "8", className: "num"},
  {btn: "9", className: "num"},
  {btn: "+", className: "operator"},
  {btn: "-", className: "operator"},
  {btn: "=", className: "equal"},
]
function App() {
  const [expression, setExpression] =  useState("");
  const [result, setResult] = useState("");
  const handleClick = (value: string)=>{
    if(value === "="){
      const result = calcResult(expression);
      setResult(`=${result}`);
    }else{
      setExpression((prev)=>prev + value);
    }
  }
  const calcResult = (exp: string): string=>{
    const numbers = exp.split(/(\+|-)/);
    let total = parseInt(numbers[0]) || 0;
    for(let i=1;i<numbers.length;i+=2){
      const operator = numbers[i];
      const num = parseInt(numbers[i+1]);

      if( operator === "+"){
        total += num;
      }
      else if( operator === "-"){
        total -= num;
      }

  }
  return total.toString();
}

  return (
    <AppContainer>
      <Calculator>
        <Result expression={expression} result={result}/>
        <ButtonContainer>
          {buttons.map((item)=>
            <Button key={item.btn} item={item.btn} onClick={handleClick} className={item.className}/>
          )}
        </ButtonContainer>
      </Calculator>
    </AppContainer>
  )
}

export default App
