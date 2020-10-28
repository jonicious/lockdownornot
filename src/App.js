import './App.css';
import Countdown from 'react-countdown';

// 2.11.2020 00:00:00 German time
const date = new Date(1604271600000)

const formatNumber = number => ("0" + number).slice(-2);

function App() {

    return (
        <>
            <h1>Noch nicht, aber bald! Ab 2.11.20.</h1>
            <Countdown date={date} renderer={props => {
                return <h2>Noch {props.days} Tage {formatNumber(props.hours)}:{formatNumber(props.minutes)}:{formatNumber(props.seconds)}</h2>
            }} />
        </>
    );
}

export default App;
