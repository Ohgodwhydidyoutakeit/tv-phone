import { StyleSheet, Text, View } from 'react-native';
import Gyroscope from './src/Components/GyroscopeComponent/Gyroscope';
import GyroscopeComponent from './src/Components/GyroscopeComponent/Gyroscope';

export default function App() {
  return (
    <View style={styles.container}>
      <GyroscopeComponent></GyroscopeComponent>
    </View>
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
