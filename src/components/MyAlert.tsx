import Alert from "../core-components/alert/Alert"

const MyAlert = () => {
  return (
    <Alert type="orange">
      <span className="font-medium">Info alert!</span> Change a few things up
      and try submitting again.
    </Alert>
  )
}

export default MyAlert
