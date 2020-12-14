import React, { useState,useEffect } from 'react';

const ProfileInfoStatus = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const enableEditMode = () => setEditMode(true);
	const disableEditMode = () => {
		setEditMode(false);
		props.changeStatus(status);
	};

	const onStatusChange = (e) => setStatus(e.currentTarget.value);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	return (
		<span>
			{
				editMode
					? <span>
						  <input autoFocus={true} 
								 onBlur={disableEditMode} type="text" value={status}
								 onChange={onStatusChange}/>
					  </span>
					: <span onDoubleClick={enableEditMode}>{status || 'no status'}</span>
			}
		</span>
	);
};

// class ProfileInfoStatus extends React.Component {
// 	state = {
// 		editMode: false,
// 		status: this.props.status
// 	}

// 	enableEditMode() {
// 		this.setState({editMode: true});
// 	}

// 	disableEditMode() {
// 		this.setState({editMode: false});
// 		this.props.changeStatus(this.state.status);
// 	}

// 	onStatusChange = (e) => {
// 		this.setState({
// 			status: e.currentTarget.value
// 		});
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevProps.status !== this.props.status) {
// 			this.setState({
// 				status: this.props.status
// 			});
// 		}
// 	}

// 	render() {
// 		return (
// 			<span>
// 				{
// 					this.state.editMode
// 						? <span>
// 							  <input autoFocus={true} 
// 									 onBlur={this.disableEditMode.bind(this)} type="text" value={this.state.status}
// 									 onChange={this.onStatusChange}/>
// 						  </span>
// 						: <span onDoubleClick={this.enableEditMode.bind(this)}>{this.props.status || 'no status'}</span>
// 				}
// 			</span>
// 		);
// 	}
// }

export default ProfileInfoStatus;