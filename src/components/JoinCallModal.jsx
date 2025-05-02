import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const JoinCallModal = ({isVisible, onClose}) => {
  const navigation = useNavigation();
  const [meetCode, setMeetCode] = useState('');
  const [showValidation, setShowValidation] = useState(false);

  const handleStart = () => {
    const trimmedCode = meetCode.trim();
    if (!trimmedCode) {
      setShowValidation(true);
      return;
    }

    setShowValidation(false);
    // console.log('Meeting Code:', trimmedCode);
    navigation.navigate('CallScreen', {channelCode: trimmedCode});
    setMeetCode('');
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      animationIn="slideInUp">
      <View style={styles.modalContent}>
        {/* Close icon button in the top-right corner */}
        <TouchableOpacity style={styles.iconClose} onPress={onClose}>
          <Icon name="closecircle" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>Enter Meeting Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Meet code"
          value={meetCode}
          onChangeText={setMeetCode}
          autoCapitalize="none"
          maxLength={15}
          autoCorrect={false}
        />
        {showValidation && (
          <Text style={styles.validationText}>
            Please enter a meeting code.
          </Text>
        )}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default JoinCallModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: hp(2),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    minHeight: hp(30),
    position: 'relative',
  },
  iconClose: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: hp(2),
    fontWeight: '600',
    // textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: hp(1),
  },
  validationText: {
    color: 'red',
    fontSize: 14,
    marginBottom: hp(1),
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#6A5AE0',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    marginTop: hp(2),
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
