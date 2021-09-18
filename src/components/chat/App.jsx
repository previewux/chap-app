import React from 'react'
import SendMessage from './SendMessage';
import { makeStyles } from '@material-ui/core/styles';
import ReadMessages from './ReadMessages';
import './Chat.css'
const useStyles = makeStyles((theme) => ({
    main_box: {
        width: '25rem',
        display: 'flex',
        justifyContent: 'center',
        margin: '4.5rem auto'
    },

}));

const App = () => {
    const classess = useStyles()

    return (
        <>
            <main className={classess.main_box}>
                <div className="wrapper">
                    <ReadMessages />
                    <div className="write_massages">
                        <SendMessage />
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
