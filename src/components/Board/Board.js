import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import BoardItem from './BoardItem';

const useStyles = makeStyles((theme) => ({
    boardItems: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));

const Board = ({ items }) => {
    const classes = useStyles();
    const renderBoardItems = items.map((item) => (
        <BoardItem item={item} key={item.id} />
    ));
    return <List className={classes.boardItems}>{renderBoardItems}</List>;
};

export default Board;
