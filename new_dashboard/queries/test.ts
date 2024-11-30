import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Test = async () => {
    const ticketRef = collection(db, "tickets");
    const ticketSnapshot = await getDocs(ticketRef);
    const tickets:any[] = [];
    ticketSnapshot.forEach((doc) => {
        const data = doc.data();
        const dataKeys = Object.keys(data);
        for (let i = 0; i < dataKeys.length; i++) {
            tickets.push(data[dataKeys[i]]);
        }
        console.log(tickets);
    });
    return tickets;
}

export default Test;
