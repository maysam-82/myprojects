import React, { useState, useEffect } from 'react';
import classes from './slider.module.scss';
import SliderItem from './SliderItem';

const Slider = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeoutId;
        timeoutId = setTimeout(() => {
            setCurrentIndex(
                currentIndex >= items.length ? 1 : currentIndex + 1
            );
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [currentIndex, items.length]);

    const renderSliderItems = items.map((item) => {
        const prevIndex =
            currentIndex - 1 === 0 ? items.length : currentIndex - 1;
        return (
            <SliderItem
                item={item}
                key={item.id}
                isActive={item.id === currentIndex}
                wasActive={item.id === prevIndex}
            />
        );
    });
    return (
        <div className={classes.sliderContainer}>
            <ul className={classes.sliderItemContainer}>{renderSliderItems}</ul>
        </div>
    );
};

export default Slider;
