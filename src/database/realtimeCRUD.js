import database from '@react-native-firebase/database';

export const addUserData = async userData => {
  try {
    const newRef = database().ref('/users').push();
    await newRef.set(userData);
    console.log('User added successfully!');
  } catch (error) {
    console.error('Error adding user: ', error);
  }
};

export const getUsers = async () => {
  try {
    const snapshot = await database().ref('/users').once('value');
    const userData = snapshot.val()
      ? Object.entries(snapshot.val()).map(([id, data]) => ({id, ...data}))
      : [];

    console.log('Fetched Users:', userData);
    return userData;
  } catch (error) {
    console.error('Error fetching users: ', error);
  }
};

export const updateUserData = async (id, updatedData) => {
  try {
    await database().ref(`/users/${id}`).update(updatedData);
    console.log('User updated successfully!');
  } catch (error) {
    console.error('Error updating user: ', error);
    throw error;
  }
};

export const deleteUser = async id => {
  try {
    await database()
      .ref('/users/' + id)
      .remove();
    console.log('User deleted successfully!');
  } catch (error) {
    console.error('Error deleting user: ', error);
  }
};
