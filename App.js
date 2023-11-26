import React, {useState} from 'react';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import Bangla from './components/Bangla/Bangla';
import BanglaWeek from './components/Bangla/BanglaWeek';
import BanglaMonths from './components/Bangla/BanglaMonths';
import BanglaSeason from './components/Bangla/BanglaSeason';
import English from './components/English/English';
import CapitalLetters from './components/English/CapitalLetters';
import SmallLetters from './components/English/SmallLetters';
import BanglaVowels from './components/Bangla/BanglaVowels';
import BanglaConsonants from './components/Bangla/BanglaConsonants';
import EnglishWeek from './components/English/EnglishWeek';
import EnglishMonth from './components/English/EnglishMonth';
import EnglishSeason from './components/English/EnglishSeason';
import {createStackNavigator} from '@react-navigation/stack';
import BanglaSorochinho from './components/Bangla/BanglaSorochinho';
import BanglaFola from './components/Bangla/BanglaFola';
import Flowers from './components/flowers/Flowers';
import Animal from './components/Animal';
import Birds from './components/Birds';
import Fruits from './components/Fruits';
import HumanBody from './components/HumanBody';
import Math from './components/Math/Math';
import BanglaNumbers from './components/Math/BanglaNumbers';
import EnglishNumbers from './components/Math/EnglishNumbers';
import Namta from './components/Math/Namta';
import OneNamta from './components/Math/OneNamta';
import NamtaTwo from './components/Math/NamtaTwo';
import NamtaThree from './components/Math/Namtathree';
import NamtaFour from './components/Math/NamtaFour';
import NamtaFive from './components/Math/NamtaFive';
import NamtaSix from './components/Math/NamtaSix';
import NamtaSeven from './components/Math/NamtaSeven';
import NamtaEight from './components/Math/NamtaEight';
import NamtaNine from './components/Math/NamtaNine';
import NamtaTen from './components/Math/NamtaTen';
import Write from './components/Write/Write';

const stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Bangla" component={Bangla} />
        <stack.Screen name="English" component={English} />
        <stack.Screen name="Bangla Vowels" component={BanglaVowels} />
        <stack.Screen name="Bangla Consonant" component={BanglaConsonants} />
        <stack.Screen name="BanglaWeek" component={BanglaWeek} />
        <stack.Screen name="BanglaMonths" component={BanglaMonths} />
        <stack.Screen name="BanglaSeason" component={BanglaSeason} />
        <stack.Screen name="kar" component={BanglaSorochinho} />
        <stack.Screen name="fola" component={BanglaFola} />
        <stack.Screen name="Capital Letters" component={CapitalLetters} />
        <stack.Screen name="Small Letters" component={SmallLetters} />
        <stack.Screen name="Week" component={EnglishWeek} />
        <stack.Screen name="Month" component={EnglishMonth} />
        <stack.Screen name="Season" component={EnglishSeason} />
        <stack.Screen name="Flowers" component={Flowers} />
        <stack.Screen name="Animal" component={Animal} />
        <stack.Screen name="Birds" component={Birds} />
        <stack.Screen name="Fruits" component={Fruits} />
        <stack.Screen name="Human" component={HumanBody} />
        <stack.Screen name="Math" component={Math} />
        <stack.Screen name="Bangla Numbers" component={BanglaNumbers} />
        <stack.Screen name="English Numbers" component={EnglishNumbers} />
        <stack.Screen name="Namta" component={Namta} />
        <stack.Screen name="One" component={OneNamta} />
        <stack.Screen name="Two" component={NamtaTwo} />
        <stack.Screen name="Three" component={NamtaThree} />
        <stack.Screen name="Four" component={NamtaFour} />
        <stack.Screen name="Five" component={NamtaFive} />
        <stack.Screen name="Six" component={NamtaSix} />
        <stack.Screen name="Seven" component={NamtaSeven} />
        <stack.Screen name="Eight" component={NamtaEight} />
        <stack.Screen name="Nine" component={NamtaNine} />
        <stack.Screen name="Ten" component={NamtaTen} />
        <stack.Screen name="Write" component={Write} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
