import { AppContainer, ButtonContainer, Calculator } from "./App.style"
import Button from "./components/button/Button"
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
            <Button key={item} item={item} />
          )}
          {operators.map((item)=><Button key={item} item={item} className="operator"/>)}
            <Button  item="=" className="equal"/>
        </ButtonContainer>
      </Calculator>
    </AppContainer>
  )
}

export default App
