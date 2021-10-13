import React, {useState} from 'react';
import {View, Linking} from 'react-native';
import {Button, TextInput, Caption, Divider} from 'react-native-paper';
/* assets */
import {Styles, ComponentStyles} from '../../Stylesheet';
import Logo from '../../assets/images/logo.svg';

const LoginPage = () => {
  /* data input user */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /* data untuk conditional component */
  let isFilled = email && password ? false : true;
  const [isVisible, setPasswordVisibility] = useState(false);

  return (
    <View style={ComponentStyles.container}>
      <View style={ComponentStyles.wrapper}>
        {/* logo */}
        <Logo height={48} style={ComponentStyles.logo} />
        {/* email */}
        <TextInput
          mode="outlined"
          label="Surel"
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          style={Styles.marginBottomSmall}
          onChangeText={email => setEmail(email)}
        />
        {/* password */}
        <TextInput
          mode="outlined"
          label="Kata sandi"
          secureTextEntry={!isVisible}
          value={password}
          style={Styles.marginBottomSmall}
          onChangeText={password => setPassword(password)}
          right={
            <TextInput.Icon
              name={isVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisibility(isVisible ? false : true)}
            />
          }
        />
        {/* forgot password */}
        <Caption
          onPress={() => Linking.openURL('http://google.com')}
          style={Styles.marginBottomNormal}>
          Lupa kata sandi?
        </Caption>
        {/* login button */}
        <Button
          mode="contained"
          disabled={isFilled}
          style={Styles.marginBottomNormal}>
          Masuk
        </Button>
        <Divider style={Styles.marginBottomNormal} />
        {/* register button */}
        <Button mode="outlined" style={ComponentStyles.button}>
          Daftar
        </Button>
      </View>
    </View>
  );
};

export default LoginPage;
