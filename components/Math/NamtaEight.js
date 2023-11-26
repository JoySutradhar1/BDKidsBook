import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import NamtaCard from './NamtaCard';
import LinearGradient from 'react-native-linear-gradient';

const NamtaEight = () => {
  const s = [
    {name: '৮ x ১ = ৮', sound: 'n1x8', id: 1},
    {name: '৮ x ২ = ১৬', sound: 'n2x8', id: 2},
    {name: '৮ x ৩ = ২৪', sound: 'n3x8', id: 3},
    {name: '৮ x ৪ = ৩২', sound: 'n4x8', id: 4},
    {name: '৮ x ৫ = ৪০', sound: 'n5x8', id: 5},
    {name: '৮ x ৬ = ৪৮', sound: 'n6x8', id: 6},
    {name: '৮ x ৭ = ৫৬', sound: 'n7x8', id: 7},
    {name: '৮ x ৮ = ৬৪', sound: 'n8x8', id: 8},
    {name: '৮ x ৯ = ৭২', sound: 'n8x9', id: 9},
    {name: '৮ x ১০ = ৮০', sound: 'n8x10', id: 10},
  ];

  const playSound = track => {
    try {
      SoundPlayer.playSoundFile(track, 'mp3');
    } catch (e) {
      console.log('Error playing sound:', e);
    }
  };
  return (
    <LinearGradient colors={['#12CFF3', '#5AB2F7']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
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
            ৮ এর নামতা
          </Text>
          <NamtaCard array={s}></NamtaCard>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default NamtaEight;
