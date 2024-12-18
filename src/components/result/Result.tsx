import { ResultProps } from '../../interfaces/IResult';
import { ResultContainer } from './Result.style';

function Result({expression, result}: ResultProps) {
  return (
    <ResultContainer>
        {expression}{result}
    </ResultContainer>
  )
}

export default Result;