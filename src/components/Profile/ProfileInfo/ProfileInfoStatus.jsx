import React from 'react';

class ProfileInfoStatus extends React.Component {
	state = {
		editMode: false
	}

	enableEditMode() {
		this.setState({editMode: true});
	}

	disableEditMode() {
		this.setState({editMode: false});
	}

	render() {
		return (
			<span>
				{
					this.state.editMode
						? <span>
							  <input autoFocus={true} 
									 onBlur={this.disableEditMode.bind(this)} type="text" value="Some status"/>
						  </span>
						: <span onDoubleClick={this.enableEditMode.bind(this)}>Some status</span>
				}
			</span>
		);
	}
}

export default ProfileInfoStatus;