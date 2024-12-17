import { AppContainer, ButtonContainer, Calculator } from "./App.style"
import EqualButton from "./components/equalButton/EqualButton";
import Button from "./components/numberButton/Button"
import OpButton from "./components/operatorButton/OpButton";
import Result from "./components/result/Result"

const numbers = [0,1,2,3,4,5,6,7,8,9];
const operators = ["-","+"];
function App() {
  return (
    <AppContainer>
      <Calculator>
        <Result expression=""/>
        <ButtonContainer>
          {numbers.map((item)=>
            <Button key={item} item={item}/>
          )}
          {operators.map((item)=><OpButton key={item} item={item}/>)}
            <EqualButton item="="/>
        </ButtonContainer>
      </Calculator>
    </AppContainer>
  )
}

export default App
