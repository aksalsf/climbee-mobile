import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import styles from '../../Stylesheet';

export default function LoginPage() {
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
}
