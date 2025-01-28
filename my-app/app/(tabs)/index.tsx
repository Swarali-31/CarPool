import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Carpool App</Text>
      <Text style={styles.heading}>Get a Ride in Minutes</Text>
      <Text style={styles.subheading}>
        Tap below to start your journey or offer a ride.
      </Text>
      <TouchableOpacity style={styles.primaryButton}>
        <Link href="/ride" style={styles.buttonText}>
          Find a Ride
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton}>
        <Link href="/offer" style={styles.secondaryButtonText}>
          Offer a Ride
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#1db954',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textDecorationLine: 'none',
  },
  secondaryButton: {
    borderColor: '#1db954',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#1db954',
    fontSize: 18,
    fontWeight: '600',
    textDecorationLine: 'none',
  },
});
