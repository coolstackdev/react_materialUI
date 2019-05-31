import React from 'react'

import Button from '@material-ui/core/Button'
import palette from '../../OverrideTheme/config/palette'

import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = {
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        boxShadow: 'none',
        borderRadius: 7,
        minWidth: 200,
        lineHeight: '25px',
        color: '#fff'
    },
    btnBlue: {
        backgroundColor: palette.blue.main,
        '&:hover': {
            background: palette.blue.light,
        }
    },
    btnGreen: {
        backgroundColor: palette.green.main,
        '&:hover': {
            background: palette.green.light,
        }
    },
    btnOrange: {
        backgroundColor: palette.orange.main,
        '&:hover': {
            background: palette.orange.light,
        }
    },
    btnRed: {
        backgroundColor: palette.red.main,
        '&:hover': {
            background: palette.red.light,
        }
    },
}

export const ButtonUnstyled = ({
    classes, onClick, children, style, buttonType,
}) => (
        <Button
            className={classNames(
                style,
                classes.button,
                { [classes.btnBlue]: buttonType === 'blue' },
                { [classes.btnGreen]: buttonType === 'green' },
                { [classes.btnOrange]: buttonType === 'orange' },
                { [classes.btnRed]: buttonType === 'red' },
            )}
            onClick={onClick}
        >
            {children}
        </Button>
    )

export default withStyles(styles)(ButtonUnstyled)
