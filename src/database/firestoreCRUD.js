import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const addUserData = async userData => {
  try {
    const user = auth().currentUser;
    if (!user) throw new Error('Not authenticated');
    await firestore()
      .collection('users')
      .add({...userData, ownerId: user.uid});
    console.log('User added successfully!');
  } catch (error) {
    console.error('Error adding user: ', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const user = auth().currentUser;
    if (!user) throw new Error('Not authenticated');
    const usersSnapshot = await firestore()
      .collection('users')
      .where('ownerId', '==', user.uid)
      .get();
    const users = usersSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    console.log('Feteched Users:', users);
    return users;
  } catch (error) {
    console.error('Error fetching users: ', error);
    throw error;
  }
};

export const updateUserData = async (userId, updatedData) => {
  try {
    const user = auth().currentUser;
    if (!user) throw new Error('Not authenticated');
    await firestore()
      .collection('users')
      .doc(userId)
      .update({...updatedData, ownerId: user.uid});
    console.log('User updated successfully!');
  } catch (error) {
    console.error('Error updating user: ', error);
    throw error;
  }
};
export const deleteUser = async userId => {
  try {
    const user = auth().currentUser;
    if (!user) throw new Error('Not authenticated');
    await firestore().collection('users').doc(userId).delete();
    console.log('User deleted successfully!');
  } catch (error) {
    console.error('Error deleting user: ', error);
    throw error;
  }
};
