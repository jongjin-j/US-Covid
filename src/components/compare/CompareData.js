import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
      width: '16rem',
      background: '#c7ebd0',
      marginTop: -50,
      float: 'right',
      marginRight: 40
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 0,
      marginTop: 10,
      alignItems: 'left'
    },
});

const CompareData = ({state, p, cases, death, vax, hos, icu}) => {
    const classes = useStyles();

    return(
        <Card className = {classes.root}>
            <CardContent>
                <Typography variant = "h5" component = "h2" className = "title">
                    {state}
                </Typography>
                <Typography className={classes.pos}>
                    Total cases: {cases}
                    <br/>
                    Deaths: {death}
                    <br/>
                    Percentage vaccinated: {Math.round(vax / p * 1000) / 10}%
                    <br/>
                    Hospitalized: {hos + icu}
                    <br/>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CompareData