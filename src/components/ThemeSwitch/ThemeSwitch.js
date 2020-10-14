import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const useStyles = makeStyles(
    ({
        palette: {
            common: { white, secondary, yellow },
        },
        shape: { borderRadius },
        zIndex: { tooltip },
    }) => ({
        switchContainer: {
            position: 'fixed',
            zIndex: tooltip + 1,
            backgroundColor: white,
            right: '0.625rem',
            padding: '0 0.625rem',
            borderRadius: borderRadius,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        switchContainerDark: {
            backgroundColor: secondary,
        },
        switchControl: {
            marginRight: '0',
        },
        darkIcon: {
            color: white,
        },
        lightIcon: {
            color: yellow,
        },
        darkChecked: {
            backgroundColor: white,
        },
    })
);

const ThemeSwitch = ({ isDark, changeTheme }) => {
    const classes = useStyles();
    let formGroupClass = [
        classes.switchContainer,
        !isDark ? classes.switchContainerDark : '',
    ];
    return (
        <FormGroup className={formGroupClass.join(' ')}>
            <FormControlLabel
                className={classes.switchControl}
                control={
                    <Switch
                        checked={isDark}
                        onChange={changeTheme}
                        classes={{
                            track: !isDark ? classes.darkChecked : '',
                        }}
                        disableRipple
                    />
                }
            />
            {!isDark ? (
                <Brightness3Icon className={classes.darkIcon} />
            ) : (
                <WbSunnyIcon className={classes.lightIcon} />
            )}
        </FormGroup>
    );
};

ThemeSwitch.propTypes = {
    isDark: PropTypes.bool.isRequired,
    changeTheme: PropTypes.func.isRequired,
};

export default ThemeSwitch;
