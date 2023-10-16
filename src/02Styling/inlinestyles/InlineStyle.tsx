import Heading from "../../core-components/heading/Heading"
import Button from "../../core-components/button/Button"

const InlineStyle = () => {
  return (
    <div
      className="flex"
      style={{
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="flex flex-col gap-5">
        <Heading>Inline styles</Heading>
        <span>This is the test application</span>
        <Button>Click Me</Button>
      </div>
    </div>
  )
}

export default InlineStyle
