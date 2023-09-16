import CountDownTimer from "../components/Countdown"
const Home = () => {
    return (
        <div className="wrapper">
            <div>
            <CountDownTimer days={1} hours={1} minutes={20} seconds={40}/>
            </div>

        </div>
    )
}

export default Home