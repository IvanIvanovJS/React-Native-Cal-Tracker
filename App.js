import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          CalTrack
        </Text>
      </View>
      <View>
        <Text>
          Remaining
        </Text>
      </View>
      <View>
        <Text>
         Meals
        </Text>
      </View>
      <View>
        <Text>
         App Bar
        </Text>
      </View>
           <StatusBar style="auto" />
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
