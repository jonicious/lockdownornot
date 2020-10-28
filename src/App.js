import './App.css';
import Countdown from 'react-countdown';

// 2.11.2020 00:00:00 German time
const date = new Date(1604271600000)

const formatNumber = number => ("0" + number).slice(-2);

function App() {

    return (
        <>
            <Countdown date={date} renderer={props => {
                return <h1>In {props.days} Tagen {formatNumber(props.hours)}:{formatNumber(props.minutes)}:{formatNumber(props.seconds)}</h1>
            }} />
        </>
    );
}

export default App;
