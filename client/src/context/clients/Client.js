import React, {createContext, useEffect, useState} from "react" 

export const ClientContext = createContext() 

export const ClientProvider = ({children}) => { 
    function clientLS(){
        let clientDetails = localStorage.getItem('clients') 
        if(clientDetails){
            return JSON.parse(clientDetails)
        } else {
            return []
        }
    }
    const [clients, setClients] = useState(clientLS())  
    useEffect(() => {
        localStorage.setItem('clients', JSON.stringify(clients))
    }, [clients])

  

    function addClients(client){ 
        setClients([...clients, client]) 
        

    } 
    return <ClientContext.Provider value={{clients, addClients, clients}}> 
       {children}

    </ClientContext.Provider>

}