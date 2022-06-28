import React, {useState} from 'react';
import {View, Linking} from 'react-native';
import {Button, TextInput, Caption, Divider} from 'react-native-paper';
import {Styles, ComponentStyles} from '../../Stylesheet';
import Logo from '../../assets/images/logo.svg';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let isFilled = email && password ? false : true;
  const [isVisible, setPasswordVisibility] = useState(false);

  return (
    <View style={ComponentStyles.container}>
      <View style={ComponentStyles.wrapper}>
        <Logo height={48} style={ComponentStyles.logo} />
        <TextInput
          mode="outlined"
          label="Surel"
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          style={Styles.marginBottomSmall}
          onChangeText={email => setEmail(email)}
        />
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
        <Caption
          onPress={() => Linking.openURL('http://google.com')}
          style={Styles.marginBottomNormal}>
          Lupa kata sandi?
        </Caption>
        <Button
          mode="contained"
          disabled={isFilled}
          style={Styles.marginBottomNormal}>
          Masuk
        </Button>
        <Divider style={Styles.marginBottomNormal} />
        <Button
          mode="outlined"
          style={ComponentStyles.button}
          onPress={() => navigation.navigate('Register')}>
          Daftar
        </Button>
      </View>
    </View>
  );
};

export default LoginPage;
