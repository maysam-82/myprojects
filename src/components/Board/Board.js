import React from 'react';
import classes from './board.module.scss';
import BoardItem from './BoardItem';

const Board = ({ items }) => {
	const renderBoardItems = items.map((item) => <BoardItem item={item} key={item.id} />);
	return (
		<div className={classes.boardContainer}>
			<ul className={classes.boardItems}>{renderBoardItems}</ul>
		</div>
	);
};

export default Board;
