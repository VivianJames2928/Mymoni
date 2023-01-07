import { createContext,useState } from "react";
// import { authentication } from '../Firebase/firebase';
// import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


const AppContext = createContext();
// createUserWithEmailAndPassword(authentication,values.email,values.password)
// .then(() => {
//     onAuthStateChanged(authentication,(user) => {
//         console.log(user.uid)
//         console.log(user.email);
//     })
// })

// const FirebaseUser = FirebaseAuth.getInstance().getCurrentUser();
// if (user != null) {
    
//     email = user.getEmail();
//     uid = user.getUid();
// }

function AppProvider ({children}){
    // destructuring
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [uid, setUid] = useState("")

    return(
        <AppContext.Provider value={{email,setEmail,fullName,setFullName,setUid,uid}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}