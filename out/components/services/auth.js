import auth from '@react-native-firebase/auth'

export const registerUser = async (email,password) => {
try {
    
    const userCredential = await auth().createUserWithEmailAndPassword(email,password)
    await userCredential.user.sendEmailVerification();
    return userCredential.user; 

} catch (error) {
    let errorMessage;
    switch (error.code) {
        case 'auth/email-already-in-use':
            errorMessage = 'This email is already in use. Please use a different email address';
            break;

        case 'auth/invalid-email':
            errorMessage = 'Invalid email address';
            break;

        case 'auth/weak-password':
            errorMessage = 'Password must be at least 6 characters';
            break;

        case 'auth/operation-not-allowed':
            errorMessage = 'Email/password sign-in is not enabled in Firebase Console';
            break;

        case 'auth/network-request-failed':
            errorMessage = 'Network error. Check your internet connection';
            break;

        default:
            errorMessage = error.message || 'An unknown error occurred';
            break;
    }
    throw new Error(errorMessage);
}
};

export const loginUser = async(email,password) =>{
try {
    const userCredential = await auth().signInWithEmailAndPassword(email,password)
    const user = userCredential.user;
    return {user, emailVerified: user.emailVerified};

} catch (error) {
    let errorMessage;

    switch (error.code) {
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
            errorMessage = 'Incorrect email or password';
            break;

        case 'auth/user-not-found':
            errorMessage = 'No user found with this email';
            break;

        case 'auth/invalid-email':
            errorMessage = 'Invalid email address';
            break;

        case 'auth/user-disabled':
            errorMessage = 'This account has been disabled';
            break;

        default:
            errorMessage = error.message || 'An unknown error occurred';
            break;
    }
    throw new Error(errorMessage);
}
}

export const resetPasswordResetEmail = async(email) =>{
try {
    await auth().sendPasswordResetEmail(email);
    return true;
} catch (error) {
    let errorMessage;
    switch (error.code) {
        case 'auth/invalid-email':
            errorMessage = 'Invalid email address';
            break;

        case 'auth/user-not-found':
            errorMessage = 'No user found with this email';
            break;

        default:
            errorMessage = error.message || 'An unknown error occurred';
            break;
    }
    throw new Error(errorMessage);
}
}