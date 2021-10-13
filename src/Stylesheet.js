import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

export const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeViewContainer: {
    width: '90%',
  },
  button: {
    width: '100%',
    paddingTop: 6,
    paddingBottom: 6,
    alignSelf: 'flex-end',
  },
});

export const styles = StyleSheet.create({
  marginBottomNormal: {
    marginBottom: 16,
  },
  marginBottomMedium: {
    marginBottom: 24,
  },
});

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#111111',
    accent: '#E5E5E5',
  },
};
