import { makeStyles } from '@mui/styles'
import React from 'react'
import { Drawer } from '@mui/material'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemIcon } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material'
import { useHistory, useLocation } from 'react-router'




const drawerWidth = 240

const useStyles = makeStyles({
    
    page: {
    background :'#f9f9f9',
    width: '100%',
    },
    drawer: {
        width:drawerWidth
        
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    },  
    
    active: {
        background: '#a2a2a2'
    },
    

})

export default function Layout( {children} ) {

const classes = useStyles()
const history = useHistory()
const location = useLocation()

const menuItems = [
    {
        text: <ListItemText font="quicksand"> Zadaci </ListItemText>,
        icon: <SubjectOutlined color= "secondary"/>,
        path: "/"
    },
    {
        text: <ListItemText> Kreiraj zadatak </ListItemText>,
        icon: <AddCircleOutlined color= "secondary"/>,
        path: "/create"
    },
    
]


    return (
    
     /* side drawer */

<div className={classes.root} >
 <Drawer className={classes.drawer}
 variant= "permanent"
 anchor="left"
 classes={{paper: classes.drawerPaper}}

 >
     <div>
         <Typography variant="h5" align="center">
             Ninja 

         </Typography>
     </div>

 {/* list of links */}
<List>
    {menuItems.map(item =>(
        <ListItem 
        button
        key={item.text} 
        onClick={() => history.push(item.path)}
        // ne znam zasto ne radi
        className={location.pathname == item.path ? classes.active : null}
        >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemIcon>{item.text}</ListItemIcon>
        </ListItem>

    ))
}

</List>


 </Drawer>

            <div className={classes.page}>
            {children}
        </div>
        </div>
    )
}
