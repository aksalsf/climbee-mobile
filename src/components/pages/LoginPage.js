import React from 'react';
import {View} from 'react-native';
import {styles} from '../../Stylesheet';
import {Button, TextInput} from 'react-native-paper';

export default function LoginPage() {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
}
