import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import englishLetters from '../../rsc/EnglishLetter.json';
import AlphabetCard from '../AlphabetCard';

const CapitalLetters = () => {
  const capitalLetters = englishLetters.characters.slice(0, 26);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'wheat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          gap: 40,
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
          Capital Letters
        </Text>
        <AlphabetCard array={capitalLetters}></AlphabetCard>
      </ScrollView>
    </View>
  );
};

export default CapitalLetters;
