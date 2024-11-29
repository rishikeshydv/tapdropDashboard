import { db } from "@/firebase/config";
import { collection, setDoc,getDoc,doc, updateDoc } from "firebase/firestore"; 
interface TicketPropProps {
    username: string;
    subject: string;
    status: string;
    date: string;
    description: string;
    id: string;
}
const ResolveTicket = async (username:string,num:string,email:string,subject:string,date:string,description:string,) => {
    const receiverRef = collection(db, "tickets");
    const receiverDocRef =  doc(receiverRef, username);
    const receiverSnapshot = await getDoc(receiverDocRef);
    if(!receiverSnapshot.exists()){
        await setDoc( receiverDocRef, {
            // If the document doesn't exist, create a new one
            [`${num}`]: {
            username:username,
            email:email,
            subject:subject,
            status:"Resolved",
            date:date,
            description:description,
            num:num
            }
            });
        }

    else{
        await updateDoc(receiverDocRef, {
            [`${num}`]: {
              username:username,
              email:email,
              subject:subject,
              status:"Resolved",
              date:date,
              description:description,
              num:num
            }
          });
        }

  

}

export default ResolveTicket;

