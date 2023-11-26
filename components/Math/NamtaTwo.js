import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import NamtaCard from './NamtaCard';

const NamtaTwo = () => {
  const s = [
    {name: '২ x ১ = ২', sound: 'n1x2', id: 1},
    {name: '২ x ২ = ৪', sound: 'n2x2', id: 2},
    {name: '২ x ৩ = ৬', sound: 'n2x3', id: 3},
    {name: '২ x ৪ = ৮', sound: 'n2x4', id: 4},
    {name: '২ x ৫ = ১০', sound: 'n2x5', id: 5},
    {name: '২ x ৬ = ১২', sound: 'n2x6', id: 6},
    {name: '২ x ৭ = ১৪', sound: 'n2x7', id: 7},
    {name: '২ x ৮ = ১৬', sound: 'n2x8', id: 8},
    {name: '২ x ৯ = ১৮', sound: 'n2x9', id: 9},
    {name: '২ x ১০ = ২০', sound: 'n2x10', id: 10},
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
          ২ এর নামতা
        </Text>
        <NamtaCard array={s}></NamtaCard>
      </ScrollView>
    </View>
  );
};

export default NamtaTwo;
