import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from './AppCard';
import CreatureCard from './CreatureCard';
import LinearGradient from 'react-native-linear-gradient';

const Animal = () => {
  const s = [
    {
      id: '1',
      name: 'বাঘ',
      img: require('../rsc/img/animal/tiger.jpg'),
      title: 'Tiger',
      sound: 'tiger',
    },
    {
      id: '2',
      name: 'সিংহ',
      img: require('../rsc/img/animal/lion.jpg'),
      title: 'Lion',
      sound: 'lion',
    },
    {
      id: '3',
      name: 'হাতি',
      img: require('../rsc/img/animal/elephant.jpg'),
      title: 'Elephant',
      sound: 'elephant',
    },
    {
      id: '4',
      name: 'ঘোড়া',
      img: require('../rsc/img/animal/horse.jpg'),
      title: 'Horse',
      sound: 'horse',
    },
    {
      id: '5',
      name: 'ভাল্লুক',
      img: require('../rsc/img/animal/bear.jpg'),
      title: 'Bear',
      sound: 'bear',
    },
    {
      id: '6',
      name: 'ষাঁড়',
      img: require('../rsc/img/animal/ox.jpg'),
      title: 'Ox',
      sound: 'ox',
    },
    {
      id: '7',
      name: 'শিয়াল',
      img: require('../rsc/img/animal/fox.jpg'),
      title: 'Fox',
      sound: 'fox',
    },
    {
      id: '8',
      name: 'জেব্রা',
      img: require('../rsc/img/animal/zebra.jpg'),
      title: 'Zebra',
      sound: 'zebra',
    },
    {
      id: '9',
      name: 'জিরাফ',
      img: require('../rsc/img/animal/camelopard.jpg'),
      title: 'Camelopard',
      sound: 'camelopard',
    },
    {
      id: '10',
      name: 'হরিণ',
      img: require('../rsc/img/animal/deer.jpg'),
      title: 'Deer',
      sound: 'deer',
    },
  ];
  const playSound = track => {
    try {
      SoundPlayer.playSoundFile(track, 'mp3');
    } catch (e) {
      console.log('Error playing sound:', e);
    }
  };
  const title = 'পশুর নাম';
  return (
    <LinearGradient colors={['#c8b6ff', '#ff758f']} style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          gap: 40,
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'black',
            width: '100%',
            color: 'black',
            textAlign: 'center',
            borderBottomWidth: 1,
          }}>
          পশুর নাম
        </Text>
        <CreatureCard title={title} array={s}></CreatureCard>
      </ScrollView>
    </LinearGradient>
  );
};

export default Animal;
