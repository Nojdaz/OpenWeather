import React from "react";

const DayTable = (props) =>{

    let rawData = props.inData.list
    let today = new Date()
    const date = today.getDay()


    const todayToTxt = (weekDayNr) =>{
        switch(weekDayNr % 7){
            case 1: return "Mån"
            case 2: return "Tis"
            case 3: return "Ons"
            case 4: return "Tor"
            case 5: return "Fre"
            case 6: return "Lör"
            case 0: return "Sön"

            default: return "Trouble reading"
        }
    }

    return(
        <>
        {rawData ?
        <>
        <div className="key-details dayTable">
            <div>
                <h2>{Math.round(rawData[0].main.temp)} °C</h2>
                <img alt={"icon"}src={`http://openweathermap.org/img/wn/${rawData[0].weather[0].icon}@2x.png`}/>
                <p>Idag</p>
            </div>
            <div>
                <h2>{Math.round(rawData[8].main.temp)} °C</h2>
                <img alt={"icon"}src={`http://openweathermap.org/img/wn/${rawData[7].weather[0].icon}@2x.png`}/>

                <p>{todayToTxt(date +1)}</p>
            </div>
            <div>
                <h2>{Math.round(rawData[16].main.temp)} °C</h2> 
                <img alt={"icon"}src={`http://openweathermap.org/img/wn/${rawData[15].weather[0].icon}@2x.png`}/>

                <p>{todayToTxt(date +2)}</p> 
            </div>
            <div>
                <h2>{Math.round(rawData[24].main.temp)} °C</h2>
                <img alt={"icon"}src={`http://openweathermap.org/img/wn/${rawData[23].weather[0].icon}@2x.png`}/>

                <p>{todayToTxt(date +3)}</p> 
            </div>
        </div>
        </>
        : null}
        </>
    );
}

export default DayTable