import {Container, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography} from "@material-ui/core";
import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import {SubjectOutlined} from "@material-ui/icons";

const drawerWidth = 280;

const useStyles = makeStyles({
    root: {
        display: "flex"
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    active: {
        backgroundColor: "#e72828"
    }

})

const Layout = ({children}) => {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            path: "/react-material-ui-exercises/TypographyExamples",
            name: "TypographyExamples"
        },
        {
            path: "/react-material-ui-exercises/ButtonExamples",
            name: "ButtonExamples"
        },
        {
            path: "/react-material-ui-exercises/IconExamples",
            name: "IconExamples"
        },
        {
            path: "/react-material-ui-exercises/TextFieldExamples",
            name: "TextFieldExamples"
        },
        {
            path: "/react-material-ui-exercises/RadioButtonExamples",
            name: "RadioButtonExamples"
        },
        {
            path: "/react-material-ui-exercises/JsonServerExamples",
            name: "JsonServerExamples"
        },
        {
            path: "/react-material-ui-exercises/GridExamples",
            name: "GridExamples"
        },
        {
            path: "/react-material-ui-exercises/CardComponentExamples",
            name: "CardComponentExamples"
        }
    ]

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper
                }}>
                <div>
                    <Typography variant="h5">Menu</Typography>
                </div>
                <List>
                    {menuItems.map(item => {
                        return (
                            <ListItem
                                button
                                key={item.name}
                                onClick={() => {
                                    history.push(item.path)
                                }}
                                className={location.pathname === item.path ? classes.active : ""}>
                                <ListItemIcon><SubjectOutlined color="secondary"/></ListItemIcon>
                                <ListItemText primary={item.name}/>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
            <Container>{children}</Container>
        </div>
    );
}

export default Layout