import React from 'react'

import Button from '@material-ui/core/Button'
import palette from '../../OverrideTheme/config/palette'

import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = {
    button: {
        paddingTop: 13,
        paddingBottom: 13,
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        boxShadow: 'none',
        borderRadius: 7,
        minWidth: 200,
        lineHeight: '25px',
        color: '#fff'
    },
    btnBlue: {
        background: `linear-gradient(to right bottom, ${palette.blue.main}, ${palette.blue.light})`,
        // '&:hover': {
        //     background: palette.blue.light,
        // }
    },
    btnGreen: {
        background: `linear-gradient(to right bottom, ${palette.green.main}, ${palette.green.light})`,
        // '&:hover': {
        //     background: palette.green.light,
        // }
    },
    btnOrange: {
        background: `linear-gradient(to right bottom, ${palette.orange.main}, ${palette.orange.light})`,
        // '&:hover': {
        //     background: palette.orange.light,
        // }
    },
    btnRed: {
        background: `linear-gradient(to right bottom, ${palette.red.main}, ${palette.red.light})`,
        // '&:hover': {
        //     background: palette.red.light,
        // }
    },
}

export const ButtonUnstyled = ({
    classes, onClick, children, color, type
}) => (
        <Button
            type={type}
            className={classNames(
                classes.button,
                { [classes.btnBlue]: color === 'blue' },
                { [classes.btnGreen]: color === 'green' },
                { [classes.btnOrange]: color === 'orange' },
                { [classes.btnRed]: color === 'red' },
            )}
            onClick={onClick}
        >
            {children}
        </Button>
    )

export default withStyles(styles)(ButtonUnstyled)
