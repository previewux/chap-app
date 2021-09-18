import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import { useHistory } from 'react-router';
import { auth } from '../../Firebase/config';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    userPhoto: {
        borderRadius: '50%',
        width: '2rem'
    }
}));

function ErrorAlert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});




export default function Navbar() {
    // const location = useHistory()
    const [personphoto, setpersonphoto] = useState('')
    const [massage, setMassage] = React.useState({ massage: '', type: 'error', state: false });



    const [open, setOpen] = React.useState(false);




    useEffect(() => {
        const subscrbe = auth.onAuthStateChanged(user => {
            if (user) {
                setpersonphoto(user.photoURL || '/img/user.png')
            } else {
                setpersonphoto(' ')
            }
        })
        return subscrbe
    }, [])

    const handleLogout = () => {
        try {
            auth.signOut()
            setOpen(false)
        } catch (error) {
            console.log(error);
            setMassage({
                massage: 'Something wrong try again',
                type: 'error',
                state: true
            })
        }
    }


    const HandleSingin = () => {
        if (personphoto) {
            setOpen(true);
        }

    }
    const handleClose = () => {
        setOpen(false);
    };


    const classes = useStyles();

    return (
        <>

            <div className={classes.root}>
                <AppBar position="static" className='do-dark'>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Chat app
                        </Typography>
                        <Button color="inherit" onClick={HandleSingin} > {
                            personphoto ? <img src={personphoto} alt="user" className={classes.userPhoto} /> : 'login'
                        } </Button>
                    </Toolbar>
                </AppBar>
            </div>

            <div>

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Are you sure to log out"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Do you want to log out
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={handleLogout} color="primary">
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className="errorMassage">
                <Snackbar open={massage.state} autoHideDuration={1500} onClose={handleClose}>
                    <ErrorAlert onClose={handleClose} severity={massage.type}>
                        {massage.massage}
                    </ErrorAlert>
                </Snackbar>
            </div>
        </>

    );
}
