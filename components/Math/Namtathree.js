import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import NamtaCard from './NamtaCard';

const NamtaThree = () => {
  const s = [
    {name: '৩ x ১ = ৩', sound: 'n1x3', id: 1},
    {name: '৩ x ২ = ৬', sound: 'n2x3', id: 2},
    {name: '৩ x ৩ = ৯', sound: 'n3x3', id: 3},
    {name: '৩ x ৪ = ১২', sound: 'n3x4', id: 4},
    {name: '৩ x ৫ = ১৫', sound: 'n3x5', id: 5},
    {name: '৩ x ৬ = ১৮', sound: 'n3x6', id: 6},
    {name: '৩ x ৭ = ২১', sound: 'n3x7', id: 7},
    {name: '৩ x ৮ = ২৪', sound: 'n3x8', id: 8},
    {name: '৩ x ৯ = ২৭', sound: 'n3x9', id: 9},
    {name: '৩ x ১০ = ৩০', sound: 'n3x10', id: 10},
  ];

  const playSound = track => {
    try {
      SoundPlayer.playSoundFile(track, 'mp3');
    } catch (e) {
      console.log('Error playing sound:', e);
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'wheat',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          gap: 20,
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            width: '100%',
            color: 'black',
            textAlign: 'center',
            borderBottomWidth: 1,
          }}>
          ৩ এর নামতা
        </Text>
        <NamtaCard array={s}></NamtaCard>
      </ScrollView>
    </View>
  );
};

export default NamtaThree;
