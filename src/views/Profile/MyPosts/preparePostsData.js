const preparePostsData = (posts) => {
	let tableHead = [];
	let tableData = [];

	if (posts.length) {
		tableHead = Object.entries(posts[0]).map(([key, value]) => {
			return `${key[0].toUpperCase()}${key.slice(1)}`;
		});

		tableData = posts.map(post => {
			return Object.entries(post).map(([key, value]) => {
				return value;
			})
		});
	}

	return { tableHead, tableData };
};

export default preparePostsData;