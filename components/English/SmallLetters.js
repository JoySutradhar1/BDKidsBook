import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import englishLetters from '../../rsc/EnglishLetter.json';
import AlphabetCard from '../AlphabetCard';

const SmallLetters = () => {
  const smallLetters = englishLetters.characters.slice(26, 52);
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
            fontSize: 40,
            fontWeight: 'bold',
            width: '100%',
            color: 'black',
            textAlign: 'center',
            borderBottomWidth: 1,
          }}>
          Small Letters
        </Text>
        <AlphabetCard array={smallLetters}></AlphabetCard>
      </ScrollView>
    </View>
  );
};

export default SmallLetters;
