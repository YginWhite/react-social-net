import React from 'react';
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Pagination = ({ pageNumber, setPageNumber, totalItems, itemsCount }) => {
	const totalPages = Math.ceil(totalItems / itemsCount);

	const forward = () => setPageNumber(pageNumber + 1);
	const back = () => setPageNumber(pageNumber - 1);

	return (
		<div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
			<Button 
				justIcon 
				color="primary"
				onClick={back}
				disabled={pageNumber === 1}
			>
				<ArrowBackIosIcon />
			</Button>
			<Muted>{`${pageNumber} of ${totalPages}`}</Muted>
			<Button 
				justIcon
				color="primary"
				onClick={forward}
				disabled={pageNumber === itemsCount}
			>
				<ArrowForwardIosIcon />
			</Button>
		</div>
	);
};

export default Pagination;