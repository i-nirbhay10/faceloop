import {StyleSheet, Text, View} from 'react-native';
import ZegoUIKitPrebuiltCall, {
  GROUP_VOICE_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import React from 'react';

const CallScreen = () => {
  randomUserID = String(Math.floor(Math.random() * 100000));
  return (
    <View style={{flex: 1}}>
      <ZegoUIKitPrebuiltCall
        appID={1484647939}
        appSign="Your App Sign"
        userID={randomUserID}
        userName={'user_' + randomUserID}
        config={{
          ...GROUP_VOICE_CALL_CONFIG,
          onHangUp: () => {
            props.navigation.navigate('HomePage');
          },
        }}
      />
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({});
