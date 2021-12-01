import {Container, makeStyles, Typography} from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button";
import {useState} from "react";


const useStyles = makeStyles({
    lgn_btn: {
        marginTop: '10px'
    },
    txt_field: {
        marginBottom: '10px',
        display: "block"
    }
})

const TextFieldExamples = () => {
    const classes = useStyles();
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault()
        setNameError(false)
        if (name === '') {
            setNameError(true)
        }
    }

    return (
        <Container>
            <Typography gutterBottom variant='h4' color='primary'>Login</Typography>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    className={classes.txt_field}
                    variant='outlined'
                    size='small'
                    label="name"
                    color="primary"
                    required
                    onChange={(e) => setName(e.target.value)}
                    error={nameError}
                />
                <TextField
                    className={classes.txt_field}
                    variant='outlined'
                    size='small'
                    label="e-mail"
                    color="primary"
                    required
                />
                <TextField
                    className={classes.txt_field}
                    variant='outlined'
                    size='small'
                    label="detail"
                    color="primary"
                    required
                    multiline
                    rows='5'
                />
                <Button
                    className={classes.lgn_btn}
                    color="primary"
                    type="submit"
                    variant="contained">Login</Button>
            </form>
        </Container>);
}

export default TextFieldExamples