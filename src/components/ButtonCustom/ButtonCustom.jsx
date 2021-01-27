import React from 'react'
import PropTypes from 'prop-types'
import  classNames from 'classnames'
import './ButtonCustom.scss'
import { Button, makeStyles, useTheme } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    custom: {
        boxShadow: theme.shadows[0],
    },
    
}))

const ButtonCustom = ({typeIcon='', icon=null, color, size, variant, children}) => {
    const theme = useTheme()
    const classes = useStyles(theme)


    return (
       <Button
       className={classNames('btn', classes.custom, )}
        color={color}
        variant={variant}
        size={size}
        startIcon={typeIcon === 'left' && icon}
        endIcon={typeIcon === 'right' && icon}

       >{children}</Button>
    )
}

ButtonCustom.propTypes = {
    typeIcon: PropTypes.string,
    icon: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
}

export default ButtonCustom
