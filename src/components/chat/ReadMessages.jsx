import React, { useEffect, useState, useRef } from 'react'
import { auth, rtdb, } from '../../Firebase/config'
import { makeStyles } from '@material-ui/core/styles';
import Spinner from './../SingleComponents/Spinner';

const useStyles = makeStyles((theme) => ({
    common: {
        width: '15rem',
        display: 'flex',
    },
    img_container: {
        width: '2rem',
        borderRadius: '50%',
        verticalAlign: 'middle'
    },

    userText_: {
        margin: '0'
    }

}));


const Message = () => {

    const [userAllMessage, setuserAllMessage] = useState([])
    const [chatLoading, setloading] = useState(true)

    const messagesEndRef = useRef(null)


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, []);
    useEffect(scrollToBottom, [userAllMessage]);


    useEffect(() => {
        let mounted = true
        const massgeDb = rtdb.ref('User/messages')
        massgeDb.on('value', (shot) => {
            const allMessages = []
            const shotRef = shot.val()
            for (const key in shotRef) {
                if (shotRef.hasOwnProperty.call(shotRef, key)) {
                    allMessages.push({ id: key, ...shotRef[key] })
                }
            }
            if (mounted) setloading(false); setuserAllMessage(allMessages)
            // setMessageBoxHeitght(message_box.current?.getBoundingClientRect().height)
        })
        return () => {
            mounted = false
        }
    }, [])



    const classess = useStyles()

    if (chatLoading) {
        return <Spinner />
    }
    return (
        <aside className='full_box'>
            <div className="title__wrappper">
                <h4>
                    Happy chat
                </h4>
            </div>
            <div className={userAllMessage.length > 9 ? `setscroolbar_ read_massages` : `read_massages`} >
                <div className="massagebox_container" >
                    <div className='message_sector'  >
                        {userAllMessage.length !== 0 && userAllMessage.map(e => {
                            const { id, uid, massage, photoURL } = e
                            return <div className={uid === auth.currentUser.uid ? `current_user common_` : `opposite_user common_`} key={id} ref={messagesEndRef} >
                                <div className='img_container' >
                                    <img src={photoURL || '/img/user.png'} alt="user" className={classess.img_container} />
                                </div>
                                <div className={'text_container'}>
                                    <p className={classess.userText_}> {massage} </p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Message
