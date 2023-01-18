import "./MainBody.css"
import AppData from "./AppData"

// class application{
//     company;
//     date;
//     status;
//     constructor(company, date, status){
//         this.company = company;
//         this.date = date;
//         this.status = status;
//     }
// }
const data = [
    {
        company: "poaefefes",
        date: "Jan 01",
        status: "Submitted"
    },
    {
        company: "poo2",
        date: "Dec 01",
        status: "Submitted"
    },
    {
        company: "poo3wefjwoei",
        date: "Dec 48",
        status: "Subeed"
    }
]
const mappedData = data.map(item => {
    return(
        <AppData 
            company={item.company}
            date={item.date}
            status={item.status}
        />
    )
})
export default function MainBody(){
    return(
        <div className="MainBody">
            <div className="MainBody--Header">
                <p>Company</p>
                <p>Date Submitted</p>
                <p>Status</p>
            </div>
            {mappedData}
        </div>
    )
}