import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        width={180}
        alt="Loading..."
        className="mx-auto text-center"
      />
    </div>
  )
}

export default Spinner
