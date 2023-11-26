import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import CreatureCard from '../CreatureCard';
import LinearGradient from 'react-native-linear-gradient';

const Flowers = () => {
  const s = [
    {
      id: '1',
      name: 'শাপলা',
      title: 'Water lily',
      img: require('../../rsc/img/flowers/sapla.jpg'),
      sound: 'sapla',
    },
    {
      id: '2',
      name: 'পদ্ম',
      title: 'Lotus',
      img: require('../../rsc/img/flowers/padma.jpg'),
      sound: 'poddo',
    },
    {
      id: '3',
      name: 'কদম',
      title: 'Kadamba',
      img: require('../../rsc/img/flowers/kadam.jpg'),
      sound: 'kadam',
    },
    {
      id: '4',
      name: 'গোলাপ',
      title: 'Rose',
      img: require('../../rsc/img/flowers/rose.jpg'),
      sound: 'gulap',
    },
    {
      id: '5',
      name: 'সিউলী',
      title: 'Night Jasmine',
      img: require('../../rsc/img/flowers/siuli.jpg'),
      sound: 'siuli',
    },
    {
      id: '6',
      name: 'সূর্যমুখী',
      title: 'Sun Flower',
      img: require('../../rsc/img/flowers/sun.jpg'),
      sound: 'sunflower',
    },
    {
      id: '7',
      name: 'ডালিয়া',
      title: 'Dahlia',
      img: require('../../rsc/img/flowers/dahlia.jpg'),
      sound: 'dalia',
    },
    {
      id: '8',
      name: 'গন্ধরাজ',
      title: 'Gardenia',
      img: require('../../rsc/img/flowers/Gardenia.jpg'),
      sound: 'gondhoraj',
    },
    {
      id: '9',
      name: 'জবা',
      title: 'Hibiscus',
      img: require('../../rsc/img/flowers/joba.jpg'),
      sound: 'joba',
    },
    {
      id: '10',
      name: 'জুঁই',
      title: 'Jasmine',
      img: require('../../rsc/img/flowers/jui.jpg'),
      sound: 'jui',
    },
  ];
  const playSound = track => {
    try {
      SoundPlayer.playSoundFile(track, 'mp3');
    } catch (e) {
      console.log('Error playing sound:', e);
    }
  };
  const title = 'ফুলের নাম';
  return (
    <LinearGradient colors={['#c8b6ff', '#ff758f']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
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
            ফুলের নাম
          </Text>
          <CreatureCard title={title} array={s}></CreatureCard>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Flowers;
