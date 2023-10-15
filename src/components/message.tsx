export const Message = () => {
  const name = "Abdul"
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-96 h-96 gap-10">
        <h1 className="text-3xl font-bold">Hi {name} how are you</h1>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          button
        </button>
      </div>
    </div>
  )
}
