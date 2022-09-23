import style from './Form.module.css'; 

//import fontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';


const Login = () => {

	return(

		<div>
			<div className={style.blockRegister}>
				<h2 className={style.loginTitle}>Log in to WTSWTB</h2>
				<p>Welcome back, happy to see you again !</p>
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

					<div className={style.blockCheck}>
					    <div>
					      <input type="checkbox" className={style.checkbox} />
					      <label>Remember me</label>
					    </div>
					    <a>Forgot your password ?</a>
					</div>

					<button type="submit">Login</button>
				</form>
				<p>Dont have account yet ? <a href="/">Register</a></p>
			</div>
		</div>
	)
}
export default Login;