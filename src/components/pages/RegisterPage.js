import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Text, Caption, HelperText} from 'react-native-paper';
/* assets */
import {ComponentStyles, Styles} from '../../Stylesheet';
import Logo from '../../assets/images/logo.svg';

const RegisterPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setPasswordVisibility] = useState(false);
  const _isHasMinimumPassword = () => {
    return password.length > 8;
  };
  return (
    <View style={ComponentStyles.container}>
      <View style={ComponentStyles.wrapper}>
        {/* logo */}
        <Logo height={48} style={ComponentStyles.logo} />
        {/* nama */}
        <TextInput
          mode="outlined"
          label="Nama"
          autoComplete="name"
          value={name}
          style={Styles.marginBottomSmall}
          onChangeText={name => setName(name)}
        />
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
          onChangeText={password => setPassword(password)}
          error={
            !_isHasMinimumPassword() && password.length !== 0 ? true : false
          }
          right={
            <TextInput.Icon
              name={isVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisibility(isVisible ? false : true)}
            />
          }
        />
        <HelperText
          type={
            _isHasMinimumPassword() || password.length === 0 ? 'info' : 'error'
          }
          style={Styles.marginBottomLarge}>
          Gunakan minimal 8 karakter dengan campuran huruf, angka & simbol
        </HelperText>
        {/* daftar */}
        <Button mode="contained" style={Styles.marginBottomNormal}>
          Daftar
        </Button>
        <Caption style={Styles.textCenter}>
          Dengan mendaftar, saya menyetujui <Text>Syarat dan Ketentuan</Text>{' '}
          serta <Text>Kebijakan Privasi</Text> Climbee.
        </Caption>
      </View>
    </View>
  );
};

export default RegisterPage;
