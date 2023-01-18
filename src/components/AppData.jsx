import "./AppData.css"

export default function AppData(props){
    return (
        <div className="AppData">
            <p className="AppData--company">{props.company}</p>
            <p className="AppData--date">{props.date}</p>
            <p className="AppData--status">{props.status}</p>
        </div>
    )
}