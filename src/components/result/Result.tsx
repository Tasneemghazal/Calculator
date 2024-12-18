import { ResultProps } from '../../interfaces/IResult';
import { ResultContainer } from './Result.style';

function Result({expression}: ResultProps) {
  return (
    <ResultContainer>
        {expression}
    </ResultContainer>
  )
}

export default Result;