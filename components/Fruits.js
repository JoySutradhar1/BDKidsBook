import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from './AppCard';
import CreatureCard from './CreatureCard';
import LinearGradient from 'react-native-linear-gradient';

const Fruits = () => {
  const s = [
    {
      id: '1',
      name: 'কাঁঠাল',
      title: 'Jack Fruit',
      img: require('../rsc/img/fruit/kathal.jpg'),
      sound: 'jack',
    },
    {
      id: '2',
      name: 'কলা',
      title: 'Banana',
      img: require('../rsc/img/fruit/Bananas.jpg'),
      sound: 'banana',
    },
    {
      id: '3',
      name: 'লিচু',
      title: 'Litchi',
      img: require('../rsc/img/fruit/lichu.jpg'),
      sound: 'litchi',
    },
    {
      id: '4',
      name: 'আপেল',
      title: 'Apple',
      img: require('../rsc/img/fruit/apple.webp'),
      sound: 'apple',
    },
    {
      id: '5',
      name: 'কমলা',
      title: 'Orange',
      img: require('../rsc/img/fruit/orange.jpg'),
      sound: 'orange',
    },
    {
      id: '6',
      name: 'আঙ্গুর',
      title: 'Grape',
      img: require('../rsc/img/fruit/angur.jpg'),
      sound: 'grape',
    },
    {
      id: '7',
      name: 'পেয়ারা',
      title: 'Guava',
      img: require('../rsc/img/fruit/peyara.jpg'),
      sound: 'guava',
    },
    {
      id: '8',
      name: 'আম',
      title: 'Mango',
      img: require('../rsc/img/fruit/mango.jpg'),
      sound: 'mango',
    },
    {
      id: '9',
      name: 'আনারস',
      title: 'Pineapple',
      img: require('../rsc/img/fruit/anaros.jpg'),
      sound: 'pineapple',
    },
    {
      id: '10',
      name: 'নারিকেল',
      title: 'Coconut',
      img: require('../rsc/img/fruit/narikel.jpg'),
      sound: 'coconut',
    },
  ];
  const playSound = track => {
    try {
      SoundPlayer.playSoundFile(track, 'mp3');
    } catch (e) {
      console.log('Error playing sound:', e);
    }
  };
  const title = 'ফলের নাম';
  return (
    <LinearGradient colors={['#c8b6ff', '#ff758f']} style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
          gap: 10,
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
          ফলের নাম
        </Text>
        <CreatureCard title={title} array={s}></CreatureCard>
      </ScrollView>
    </LinearGradient>
  );
};

export default Fruits;
