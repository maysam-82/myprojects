import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

function Logo({
    width,
    height,
    animationData,
    hasLoop,
    hasAutoPlay,
    isStopped,
    isPaused,
}) {
    const defaultOptions = {
        loop: hasLoop,
        autoplay: hasAutoPlay,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Fragment>
            <Lottie
                options={defaultOptions}
                height={width}
                width={height}
                isStopped={isStopped}
                isPaused={isPaused}
            />
        </Fragment>
    );
}

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    animationData: PropTypes.any,
    hasLoop: PropTypes.bool,
    hasAutoPlay: PropTypes.bool,
    isStopped: PropTypes.bool,
    isPaused: PropTypes.bool,
};

export default Logo;
