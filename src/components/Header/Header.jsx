import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDY_4wqrhI71TkYkqtXxiDDgrF8GvD-2TNQp4EUWXvVkSaQRFS&s" alt="Logo"/>
    </header>
	);
}

export default Header;