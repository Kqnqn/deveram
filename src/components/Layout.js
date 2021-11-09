import { makeStyles } from '@mui/styles'
import React from 'react'
import { Drawer } from '@mui/material'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemIcon } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'




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
    

})

export default function Layout( {children} ) {

const classes = useStyles()



    return (
        
        <div className={classes.root} >
 <Drawer className={classes.drawer}
 variant= "permanent"
 anchor="left"
 classes={{paper: classes.drawerPaper}}

 >
     <div>
         <Typography variant="h5">
             Ninja 

         </Typography>
     </div>
  <List>
      <ListItemText primary="hello"/>
  </List>
  <List>
      <ListItemText primary="hello"/>
  </List>
  <List>
      <ListItemText primary="hello"/>
  </List>

 </Drawer>

            <div className={classes.page}>
            {children}
        </div>
        </div>
    )
}
