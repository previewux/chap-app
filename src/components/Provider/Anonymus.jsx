import React, { useEffect, createContext, useContext, useState } from 'react'
import { auth, db, } from '../../Firebase/config'

const AnonymusProvider = createContext()

const Anonymus = ({ children }) => {

    const [loading, setloading] = useState(true)
    const [userisok, setuserisok] = useState(false)


    useEffect(() => {
        const subscribe = auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                let detailscarryer = []
                db.collection('users').get().then(snapshot => {
                    snapshot.forEach((doc) => {
                        detailscarryer.push(doc.data().mail)
                    });
                    if (detailscarryer) {
                        const exist = detailscarryer.some(e => e === user.email)
                        console.log(exist, 'exist');
                        if (exist) {
                            setTimeout(() => {
                                setuserisok(true)
                                setloading(false)
                            }, 1500)
                        } else {
                            setuserisok(false)
                            setloading(false)
                        }
                    }
                }).catch(e => console.log(e))
            } else {
                setuserisok(false)
                setloading(false)
            }
        })
        return subscribe
    }, [])


    return (
        <AnonymusProvider.Provider value={{ loading, userisok }}>
            {children}
        </AnonymusProvider.Provider>
    )
}

export const UseGlobalContext = () => {
    return useContext(AnonymusProvider)
}

export default Anonymus
