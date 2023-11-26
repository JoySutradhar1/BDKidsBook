import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import banglaLetters from '../../rsc/bangla2.json';
import AlphabetCard from '../AlphabetCard';

const BanglaVowels = () => {
  const banglaVowel = banglaLetters.slice(0, 11);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#D5B7FF',
          flexGrow: 1,
          padding: 10,
          gap: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'black',
            width: '100%',
            textAlign: 'center',
            borderBottomWidth: 1,
          }}>
          স্বরবর্ণ
        </Text>
        <AlphabetCard array={banglaVowel}></AlphabetCard>
      </ScrollView>
    </View>
  );
};

export default BanglaVowels;
