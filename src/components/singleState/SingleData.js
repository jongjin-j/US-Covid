import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
      width: '16rem',
      background: '#e0e0e0',
      marginTop: -50,
      float: 'right',
      marginRight: 40
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 0,
      marginTop: 10
    },
});

const SingleData = ({cases, death, newCases, newDeaths}) => {
    const classes = useStyles();

    return(
        <Card className = {classes.root}>
            <CardContent>
                <Typography variant = "h5" component = "h2"/>
                <Typography className={classes.pos}>
                    Total cases: {cases}
                    <br/>
                    Deaths: {death}
                    <br/>
                    New cases: {newCases}
                    <br/>
                    New deaths: {newDeaths}
                    <br/>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SingleData