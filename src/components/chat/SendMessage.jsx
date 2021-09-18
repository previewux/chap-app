import React, { useState } from 'react'
import { auth, rtdb } from '../../Firebase/config'
import SendIcon from '@material-ui/icons/Send';

const SendMassage = () => {
    const [userMessage, setuserMessage] = useState('')

    const handleUserMessage = (e) => {
        setuserMessage(e.target.value);
    }


    const SEND_THE_MESSAGE = (e) => {
        e.preventDefault()
        if (userMessage) {
            const { uid, photoURL } = auth.currentUser
            const rtdbref = rtdb.ref('User/messages')
            rtdbref.push({
                massage: userMessage,
                uid,
                photoURL
            })
            setuserMessage('');
        }

    }

    return (
        <div className={'form_container'}>
            <form onSubmit={SEND_THE_MESSAGE} className={'form__'}>
                <input className='input_fild' type="text" value={userMessage} placeholder='send massage...' onChange={handleUserMessage} />
                <button className="sent_btn" type='submit' >
                    <SendIcon className='sent_svg' />
                </button>
            </form>
        </div>
    )
}

export default SendMassage
