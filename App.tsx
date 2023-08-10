import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper";
import { AppRoutes } from './src/routes/AppRoutes';
import { Ionicons } from '@expo/vector-icons';
import { AuthProvider } from './src/contexts/AuthContext';

const theme = {
  ...DefaultTheme,
  roundness: 2
};

export default function App() {
  return (
    <NavigationContainer>
      {/* @ts-ignore */}
      <PaperProvider theme={theme} settings={{ icon: props => <Ionicons {...props} /> }}>
        <SafeAreaView style={styles.container}>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
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


