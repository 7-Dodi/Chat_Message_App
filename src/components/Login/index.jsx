import { auth, provider } from '../../service/firebase';
import './style.css';

export const Login = () => {
    
    const handleSigIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return(
        <div className='container'>
            <button onClick={handleSigIn}>Login com o Google</button>
        </div>
    )
}