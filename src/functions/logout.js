import firebase from 'firebase/app';
import 'firebase/auth';

async function logout(callback) {
    try {
        await firebase.auth().signOut();
        callback(true);
    } catch (err) {
        alert('알 수 없는 에러가 발생했습니다');
        callback(false);
    }
}

export default logout;