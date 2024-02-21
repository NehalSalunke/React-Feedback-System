import { useState, createContext } from "react";

const FeedbackContext= createContext()

 export const FeedbackProvider=({children})=>{
    const [feedbacks]= useState([{id: 1, text:'this is great app', rating:10}])
    return(
        <FeedbackContext.Provider value={feedbacks}>
            {children}
        </FeedbackContext.Provider>

    )
}

export default FeedbackContext