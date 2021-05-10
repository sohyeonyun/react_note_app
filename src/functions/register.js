import firebase from 'firebase/app';
import 'firebase/auth';

async function register(email, password, callback) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        callback(true);
    } catch (err) {
        switch (err.code) {
            case 'auth/email-already-use':
                alert('이미 등록된 이메일입니다');
                break;
            case 'auth/invalid-email':
                alert('이메일 형식이 다릅니다');
                break;
            default:
                alert('알 수 없는 에러가 발생했습니다');
        }
        callback(false);
    }
}

export default register;