import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import NamtaCard from './NamtaCard';

const OneNamta = () => {
  const s = [
    {name: '১ x ১ = ১', sound: 'n1x1', id: 1},
    {name: '১ x ২ = ২', sound: 'n1x2', id: 2},
    {name: '১ x ৩ = ৩', sound: 'n1x3', id: 3},
    {name: '১ x ৪ = ৪', sound: 'n1x4', id: 4},
    {name: '১ x ৫ = ৫', sound: 'n1x5', id: 5},
    {name: '১ x ৬ = ৬', sound: 'n1x6', id: 6},
    {name: '১ x ৭ = ৭', sound: 'n1x7', id: 7},
    {name: '১ x ৮ = ৮', sound: 'n1x8', id: 8},
    {name: '১ x ৯ = ৯', sound: 'n1x9', id: 9},
    {name: '১ x ১০ = ১০', sound: 'n1x10', id: 10},
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
          flexDirection: 'row',
          flexWrap: 'wrap',
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
          ১ এর নামতা
        </Text>
        <NamtaCard array={s}></NamtaCard>
      </ScrollView>
    </View>
  );
};

export default OneNamta;
