import React from 'react';
import {View, Linking} from 'react-native';
import {Button, TextInput, Caption} from 'react-native-paper';
import {componentStyles, styles} from '../../Stylesheet';
import Logo from '../../assets/images/logo.svg';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let isFilled = email && password ? false : true;
  const [isVisible, setPasswordVisibility] = React.useState(true);

  return (
    <View style={componentStyles.container}>
      <View style={componentStyles.safeViewContainer}>
        <Logo height={48} style={componentStyles.logo} />
        <TextInput
          mode="outlined"
          label="Surel"
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          style={styles.marginBottomSmall}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          mode="outlined"
          label="Kata sandi"
          secureTextEntry={isVisible}
          value={password}
          style={styles.marginBottomMedium}
          onChangeText={password => setPassword(password)}
          right={
            <TextInput.Icon
              name={isVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisibility(isVisible ? false : true)}
            />
          }
        />
        <Button
          mode="contained"
          disabled={isFilled}
          style={(componentStyles.button, styles.marginBottomNormal)}>
          Masuk
        </Button>
        <Caption onPress={() => Linking.openURL('http://google.com')}>
          Lupa kata sandi?
        </Caption>
      </View>
    </View>
  );
}
