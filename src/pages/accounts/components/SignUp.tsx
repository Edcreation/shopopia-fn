import { Button, Input, Logo } from '../../../components/Reusable';

export default function SignUp() {
	return (
		<div className="container__login">
			<div className="login__title">
				<Logo /> Sign Up
			</div>
			<div className="login__input">
				<label htmlFor="">Email</label>
				<Input type='email' />
			</div>
            <div className="login__input">
				<label htmlFor="">Username</label>
				<Input />
			</div>
			<div className="login__input">
				<label htmlFor="">Password</label>
				<Input type='password' />
			</div>
			<div className="login__input">
				<Button text='Sign Up'/>
			</div>
		</div>
	);
}
