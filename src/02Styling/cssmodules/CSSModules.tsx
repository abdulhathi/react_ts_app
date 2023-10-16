import Button from "../../core-components/button/Button"
import Heading from "../../core-components/heading/Heading"
import Style from "./CSSModules.module.css"

const CSSModules = () => {
  return (
    <div
      className={`flex h-screen justify-center ${[
        Style.testStyle,
        Style.testFontStyle,
      ].join(" ")}`}
    >
      <div className="flex flex-col justify-center gap-5">
        <Heading>CSS Module</Heading>
        <span>This is the test application</span>
        <Button>Click Me</Button>
      </div>
    </div>
  )
}

export default CSSModules
