import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {Defs, LinearGradient, Stop, Svg, TSpan} from 'react-native-svg';

const CreatureCard = props => {
  const playSound = track => {
    try {
      SoundPlayer.playSoundFile(track, 'mp3');
    } catch (e) {
      console.log('Error playing sound:', e);
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      {/* {props.title ? (
        <View
          style={{
            width: '100%',
            height: 50,
            borderBottomWidth: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
          }}>
          <Svg
            width="300"
            height="50"
            viewBox="0 0 200 50"
            style={{backgroundColor: 'green'}}>
            <Defs>
              <LinearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="red" />
                <Stop offset="100%" stopColor="blue" />
              </LinearGradient>
            </Defs>
            <Text x="50%" y="50%" fontSize="44" textAnchor="middle">
              <TSpan>{props.title}</TSpan>
            </Text>
          </Svg>
        </View>
      ) : null} */}
      {props.array.map(items => (
        <TouchableOpacity key={items.id} onPress={() => playSound(items.sound)}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f7f7ff',
              padding: 10,
              borderRadius: 20,
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Image
              style={{
                height: 220,
                width: 300,
                backgroundColor: 'white',
                borderRadius: 20,
              }}
              source={items.img}></Image>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>
                {items.name}
              </Text>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
                ({items.title})
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CreatureCard;
