import { Link } from 'react-router-dom'
import { Button, Input, Logo } from '../../../components/Reusable';

export default function Login_Main() {
	return (
		<div className="container__login">
			<div className="login__title">
				<Logo /> Log In
			</div>
			<div className="login__input">
				<label htmlFor="">Email</label>
				<Input type='text' />
			</div>
			<div className="login__input">
				<label htmlFor="">Password</label>
				<Input type='password' />
			</div>
			<div className="login__text">
				<Link to="">Forgot Password?</Link>
			</div>
			<div className="login__input">
				<Button text='Log In' />
			</div>
		</div>
	);
}
