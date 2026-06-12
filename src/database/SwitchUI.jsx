import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';

const SwitchUI = () => {
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable(previousState => !previousState);

  return (
    <View
      className={`flex-1 justify-center items-center ${isEnable ? 'bg-black' : 'bg-white'}`}>
      <Text
        className={`text-lg mb-4 ${isEnable ? 'text-white' : 'text-black'}`}>
        Switch is {isEnable ? 'Enabled' : 'Disabled'}
      </Text>

      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnable ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnable}
        style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
      />
    </View>
  );
};

export default SwitchUI;
