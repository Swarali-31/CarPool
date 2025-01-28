import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={40} color="white" />
        <Text style={styles.branding}>Uber</Text>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Map will go here</Text>
      </View>

      {/* Ride Options */}
      <View style={styles.rideOptions}>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="car-outline" size={24} color="black" />
          <Text style={styles.optionText}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="bicycle-outline" size={24} color="black" />
          <Text style={styles.optionText}>Bike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="fast-food-outline" size={24} color="black" />
          <Text style={styles.optionText}>Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Link href="/about" style={styles.linkButton}>
        Learn More
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  branding: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mapText: {
    color: 'white',
    fontSize: 16,
  },
  rideOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: 100,
  },
  optionText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  linkButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
