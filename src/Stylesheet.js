import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#111111',
    accent: '#E5E5E5',
  },
};

export const Styles = StyleSheet.create({
  marginBottomSmall: {
    marginBottom: 8,
  },
  marginBottomNormal: {
    marginBottom: 16,
  },
  marginBottomMedium: {
    marginBottom: 24,
  },
  marginBottomLarge: {
    marginBottom: 32,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export const ComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '90%',
  },
  button: {
    width: '100%',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 64,
  },
});
