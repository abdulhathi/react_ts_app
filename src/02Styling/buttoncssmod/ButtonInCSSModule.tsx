import { useState } from "react"
import styles from "./ButtonInCSSModule.module.css"

const ButtonInCSSModule = () => {
  const [buttonType, setButtonType] = useState("Primary")
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
      <div className="flex gap-5">
        {["Primary", "Secondary", "Danger"].map((btnType) => (
          <div className="flex gap-2" key={btnType}>
            <input
              type="radio"
              id={btnType.toLowerCase()}
              name="button"
              onChange={() => setButtonType(btnType)}
              checked={btnType === buttonType && true}
            ></input>
            <label htmlFor={btnType.toLowerCase()}>{btnType}</label>
          </div>
        ))}
      </div>
      <button
        className={[styles.buttonStyle, styles["button" + buttonType]].join(
          " "
        )}
      >
        Click Me
      </button>
    </div>
  )
}

export default ButtonInCSSModule
