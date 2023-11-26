import React from 'react';
import {Image, Text, View} from 'react-native';
// import logo from '../rsc/flogo.png';
import logo from '../rsc/LOGO2.jpg';
const PageLogo = () => {
  return (
    <View
      style={{
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
      }}>
      <Image
        style={{
          height: 200,
          width: 200,
          backgroundColor: 'red',
          borderColor: 'orange',
          borderWidth: 4,
          borderRadius: 40,
        }}
        source={logo}></Image>
      {/* <Text style={{fontSize: 40, fontWeight: 'bold', color: 'orange'}}>
        ছোটদের বই
      </Text> */}
    </View>
  );
};

export default PageLogo;
