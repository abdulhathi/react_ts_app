import Button from "../../core-components/button/Button"
import Heading from "../../core-components/heading/Heading"
import styled from "styled-components"

interface StyledComponentTestProps {
  active?: boolean
}

export const RootContainer = styled.div<StyledComponentTestProps>`
  background: ${({ active = false }: StyledComponentTestProps) =>
    active ? "black" : "white"};
`
const BodyContainer = styled.div`
  color: brown;
`

const StyledComponentTest = () => {
  return (
    <RootContainer active={true} className={`flex h-screen justify-center`}>
      <BodyContainer className="flex flex-col justify-center gap-5">
        <Heading>CSS in JS / Styled component</Heading>
        <span>This is the test application</span>
        <Button onClick={() => {}}>Click Me</Button>
      </BodyContainer>
    </RootContainer>
  )
}

export default StyledComponentTest
