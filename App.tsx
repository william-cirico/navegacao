import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { StackNavigationRoutes } from './routes/StackNavigationRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigationRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
