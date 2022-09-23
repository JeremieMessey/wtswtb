import style from './Form.module.css'; 

//import fontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';


const Registration = () => {

	return(

		<div>
			<div className={style.blockRegister}>
				<h2>Register to WTSWTB</h2>
				<form method="post">
					<div className={style.blockInput}>
						<FontAwesomeIcon icon={faEnvelope} className={style.iconForm} />
						<div>
							<label>Email</label>
							<input type="email" name="" />
						</div>
					</div>
					<div className={style.blockInput}>
						<FontAwesomeIcon icon={faLock} className={style.iconForm} />
						<div>
							<label>Password</label>
							<input type="password" name="" />
						</div>
						<FontAwesomeIcon icon={faEye} className={style.iconEye} />
					</div>
					<div className={style.blockInput}>
						<FontAwesomeIcon icon={faLock} className={style.iconForm} />
						<div>
							<label>Confirm Password</label>
							<input type="password" name="" />
						</div>
						<FontAwesomeIcon icon={faEye} className={style.iconEye} />
					</div>
					<button type="submit">Register</button>
				</form>
			</div>
		</div>
	)
}
export default Registration;