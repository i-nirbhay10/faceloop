import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {Text, View} from 'react-native';
import {App_ID} from '@env';

const CallScreen = ({navigation, route}) => {
  const [videoCall, setVideoCall] = useState(true);
  // console.log(App_ID, 'App_ID');

  const {channelCode} = route.params;
  // console.log(channelCode, 'channelCode');

  const connectionData = {
    appId: `${App_ID}`,
    channel: `${channelCode}`, // must be the same for both users
  };

  const rtcCallbacks = {
    EndCall: () => {
      navigation.navigate('HomeScreen');
      setVideoCall(false);
    },
  };

  return (
    <View style={{flex: 1}}>
      {videoCall ? (
        <AgoraUIKit
          connectionData={connectionData}
          rtcCallbacks={rtcCallbacks}
        />
      ) : (
        <Text onPress={() => setVideoCall(true)}>Start Call</Text>
      )}
    </View>
  );
};

export default CallScreen;
