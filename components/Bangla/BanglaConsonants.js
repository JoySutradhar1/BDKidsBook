import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import banglaLetters from '../../rsc/bangla2.json';
import AlphabetCard from '../AlphabetCard';

const BanglaConsonants = () => {
  const banglaConsonants = banglaLetters.slice(11, 50);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#EAFEBD',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          gap: 20,
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
          ব্যঞ্জনবর্ণ
        </Text>
        <AlphabetCard array={banglaConsonants}></AlphabetCard>
      </ScrollView>
    </View>
  );
};

export default BanglaConsonants;
