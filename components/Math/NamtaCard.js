import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {Defs, LinearGradient, Stop, Svg, TSpan} from 'react-native-svg';

const NamtaCard = props => {
  const playSound = track => {
    try {
      SoundPlayer.playSoundFile(track, 'mp3');
    } catch (e) {
      console.log('Error playing sound:', e);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        gap: 20,
      }}>
      {props.array.map((items, index) => (
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 5,
            backgroundColor: 'white',
            height: 70,
            width: 300,
            borderRadius: 20,
            flexDirection: 'column',
          }}
          key={items.id}
          onPress={() => playSound(items.sound)}>
          <Svg width="100%" height="100%" viewBox="0 0 300 40">
            <Defs>
              <LinearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="red" />
                <Stop offset="100%" stopColor="blue" />
              </LinearGradient>
            </Defs>
            <Text>
              <TSpan
                style={{
                  fontWeight: 'bold',
                }}
                x="50%"
                y="50%"
                fontSize="45"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="url(#gradient)">
                {items.name}
              </TSpan>
            </Text>
          </Svg>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NamtaCard;
