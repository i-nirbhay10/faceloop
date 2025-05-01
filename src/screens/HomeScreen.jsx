import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import StartCallModal from '../components/StartCallModal';
import JoinCallModal from '../components/JoinCallModal';

const quotes = [
  'Stay connected, no matter the distance.',
  'Your people, just one tap away.',
  'Every face tells a story—start yours now.',
  'Bringing people closer, one call at a time.',
];

export default function HomeScreen({navigation}) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isjoinModalVisible, setIsjoinModalVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 4000); // Change quote every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const channelCode = 'tet code';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/iconface.png')}
          resizeMode="contain"
          style={styles.logo}
          tintColor={'white'}
        />
        <Text style={styles.appName}>Welcome to FaceLoop</Text>
      </View>

      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>{quotes[quoteIndex]}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 20,
        }}>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('CallScreen', {channelCode})}
          onPress={() => setIsModalVisible(true)}>
          <Text style={styles.buttonText}>Start Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsjoinModalVisible(true)}>
          <Text style={styles.buttonText}>Join Meet</Text>
        </TouchableOpacity>
      </View>
      <StartCallModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        // onSubmit={handleStartCall}
      />

      <JoinCallModal
        isVisible={isjoinModalVisible}
        onClose={() => setIsjoinModalVisible(false)}
        // onSubmit={handleStartCall}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  quoteContainer: {
    position: 'absolute',
    bottom: 30,
  },
  quote: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    color: '#B0B0C3',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#6A5AE0',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
