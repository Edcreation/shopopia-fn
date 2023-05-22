import { tfa_text } from "../../../constants";

export default function Tfa() {
	return (
		<div className="container__box_tfa">
			<div className="container__box__text">
				<img
					src="https://cdn4.iconfinder.com/data/icons/cyber-security-29/512/security-cyber-digital-secure-21-512.png"
					alt="image"
				/>
				<h2>Authenticate Your Account</h2>
				<p>
					{tfa_text}
				</p>
				<p className="email">***mugi***@****.com</p>
			</div>
			<div className="container__box__input">
				<form action="">
					<input type="text" maxLength={6} />
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}
