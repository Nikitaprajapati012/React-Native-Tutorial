/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import auth from '@react-native-firebase/auth';
// import {
//   getUsers,
//   updateUserData,
//   addUserData,
//   deleteUser,
// } from '../database/firestoreCRUD';
import {
  getUsers,
  updateUserData,
  addUserData,
  deleteUser,
} from '../database/realtimeCRUD';

const UserFirebaseCRUD = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  //   const [currentUser, setCurrentUser] = useState(null);
  //   const [authChecked, setAuthChecked] = useState(false);

  const fetchUsers = async () => {
    try {
      const userList = await getUsers();
      setUsers(userList);
    } catch (error) {
      Alert.alert(
        'Error fetching users',
        error.message || 'Failed to fetch users',
      );
    }
  };

  //   useEffect(() => {
  //     const unsubscribe = auth().onAuthStateChanged(user => {
  //       setCurrentUser(user);
  //       setAuthChecked(true);
  //     });
  //     return unsubscribe;
  //   }, []);

  useEffect(() => {
    // if (currentUser) {
    fetchUsers();
    // }
  }, []);

  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      Alert.alert('Validation Error', 'Please fill all fields');
      return;
    }
    const userData = {name, email, phone};
    try {
      if (editId) {
        await updateUserData(editId, userData);
        Alert.alert('Success', 'User updated successfully');
      } else {
        await addUserData(userData);
        Alert.alert('Success', 'User added successfully');
      }
      setName('');
      setEmail('');
      setPhone('');
      setEditId(null);
      fetchUsers();
    } catch (error) {
      Alert.alert('Error', 'Failed to submit user data');
    }
  };

  const handleDelete = async userId => {
    try {
      await deleteUser(userId);
      Alert.alert('Success', 'User deleted successfully');
      fetchUsers();
    } catch (error) {
      Alert.alert('Error', 'Failed to delete user');
    }
  };

  const handleEdit = user => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setEditId(user.id);
  };

  //   if (!authChecked) {
  //     return (
  //       <View className="flex-1 items-center justify-center bg-gray-200 p-8">
  //         <Text className="text-gray-700 text-lg">Checking login...</Text>
  //       </View>
  //     );
  //   }

  //   if (!currentUser) {
  //     return (
  //       <View className="flex-1 items-center justify-center bg-gray-200 p-8">
  //         <Text className="text-gray-800 text-lg text-center mb-4">
  //           Please login before opening user data.
  //         </Text>
  //         <TouchableOpacity
  //           onPress={() => navigation.replace('Login')}
  //           className="bg-blue-600 rounded-lg px-6 py-3">
  //           <Text className="text-white font-semibold">Go to Login</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }

  return (
    <View className="flex-1 bg-gray-200 p-8">
      <View className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <Text className="font-bold text-3xl text-blue-700 mb-8 text-center">
          {editId ? 'Edit User' : 'Add User'}
        </Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-blue-500"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-blue-500"
        />
        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-blue-500"
          keyboardType="phone-pad"
        />

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-blue-600 rounded-lg p-4">
          <Text className="text-center text-white font-semibold text-lg">
            {editId ? 'Update User' : 'Add User'}
          </Text>
        </TouchableOpacity>

        <FlatList
          nestedScrollEnabled={true}
          data={users}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View className="bg-white flex-col justify-start items-center p-4 mt-4 rounded-lg shadow-lg w-full max-w-md mx-auto">
              <View>
                <Text className="font-semibold text-lg text-gray-800">
                  {item.name}
                </Text>
                <Text className="text-gray-600">{item.email}</Text>
                <Text className="text-gray-600">{item.phone}</Text>
              </View>

              <View className="flex-row">
                <TouchableOpacity
                  onPress={() => handleEdit(item)}
                  className="rounded-lg bg-green-500 p-2 mr-2">
                  <Text className="text-white font-semibold">Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleDelete(item.id)}
                  className="rounded-lg bg-red-500 p-2 mr-2">
                  <Text className="text-white font-semibold">Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <Text className="text-gray-500 text-center mt-4">
              No users found
            </Text>
          }
          contentContainerStyle={{paddingBottom: 20}}
        />
      </View>
    </View>
  );
};

export default UserFirebaseCRUD;
