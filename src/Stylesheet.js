import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
});

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#111111',
    accent: '#cccccc',
  },
};
