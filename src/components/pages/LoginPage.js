import React from 'react';
import {View, Image} from 'react-native';
import {componentStyles, styles} from '../../Stylesheet';
import {Headline, Button, TextInput} from 'react-native-paper';
import {Logo} from '../../assets/images';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let isFilled = email && password ? false : true;

  return (
    <View style={componentStyles.container}>
      <View style={componentStyles.safeViewContainer}>
        <Image style={{height: 72}} source={Logo} />
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          style={styles.marginBottomNormal}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          value={password}
          style={styles.marginBottomMedium}
          onChangeText={password => setPassword(password)}
        />
        <Button
          mode="contained"
          disabled={isFilled}
          onPress={() => console.log('Pressed')}
          style={componentStyles.button}>
          Login
        </Button>
      </View>
    </View>
  );
}
