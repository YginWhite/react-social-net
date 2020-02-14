import React from 'react';

class ProfileInfoStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	enableEditMode() {
		this.setState({editMode: true});
	}

	disableEditMode() {
		this.setState({editMode: false});
		this.props.changeStatus(this.state.status);
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}

	render() {
		return (
			<span>
				{
					this.state.editMode
						? <span>
							  <input autoFocus={true} 
									 onBlur={this.disableEditMode.bind(this)} type="text" value={this.state.status}
									 onChange={this.onStatusChange}/>
						  </span>
						: <span onDoubleClick={this.enableEditMode.bind(this)}>{this.props.status || 'no status'}</span>
				}
			</span>
		);
	}
}

export default ProfileInfoStatus;