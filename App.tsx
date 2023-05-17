import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper";
import { AppRoutes } from './src/routes/AppRoutes';

const theme = {
  ...DefaultTheme,
  roundness: 2
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <AppRoutes />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  }
})


