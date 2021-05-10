import firebase from 'firebase/app';
import 'firebase/auth';

async function login(email, password, callback) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        callback(true);
    } catch (err) {
        switch (err.code) {
            case 'auth/user-not-found':
                alert('존재하지 않는 유저입니다');
                break;
            case 'auth/wrong-password':
                alert('비밀번호가 틀립니다');
                break;
            case 'auth/invalid-email':
                alert('이메일 형식이 아닙니다');
                break;
            default:
                alert('알 수 없는 에러가 발생했습니다');
        }
        callback(false);
    }
}

export default login;