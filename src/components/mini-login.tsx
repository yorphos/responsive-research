import React, { Component } from 'react';

import './mini-login.scss';

class MiniLogin extends Component {
	render() {
		return (
			<nav className='mini-login'>
				<div className='user-field-block'>
                    <p>Username</p>
					<input className='user-field' type='text' />
				</div>
                <div className='password-field-block'>
                    <p>Password</p>
					<input className='password-field' type='text' />
				</div>
                <button className='submit' children='submit' />
			</nav>
		);
	}
}

export default MiniLogin;
