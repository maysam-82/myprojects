import React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger } from '@material-ui/core';

/**
 * This component is used to add elevation scroll behavior while scrolling the container.
 *  As soon as use start scrolling (threshold:0), this behavior is set to container.
 *
 *
 * @param {React.ReactElement} children
 * @return {*} ReactElement
 */

export default function ElevationScroll({ children }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};
