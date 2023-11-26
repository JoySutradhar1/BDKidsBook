import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppCard from '../AppCard';
import SoundPlayer from 'react-native-sound-player';
import DayMonthSeason from '../DayMonthSeason';

const EnglishSeason = () => {
  const season = [
    {id: 'season1', name: 'Summer', sound: 'summer'},
    {id: 'season2', name: 'Rainy Season', sound: 'rainy'},
    {id: 'season3', name: 'Autumn', sound: 'autumn'},
    {id: 'season4', name: 'Late Autumn', sound: 'late_autumn'},
    {id: 'season5', name: 'Winter', sound: 'winter'},
    {id: 'season6', name: 'Spring', sound: 'spring'},
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'wheat',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          gap: 40,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            width: '100%',
            color: 'black',
            textAlign: 'center',
            borderBottomWidth: 1,
          }}>
          ইংরেজিতে ৬ ঋতুর নাম
        </Text>
        <DayMonthSeason array={season} key={111111} />
      </ScrollView>
    </View>
  );
};

export default EnglishSeason;
