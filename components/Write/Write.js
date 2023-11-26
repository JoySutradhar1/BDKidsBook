import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types'; // Import prop-types package

import RNSketchCanvas from '@kichiyaki/react-native-sketch-canvas';

const Write = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <RNSketchCanvas
          containerStyle={{backgroundColor: 'transparent', flex: 1}}
          canvasStyle={{backgroundColor: 'transparent', flex: 1}}
          defaultStrokeIndex={0}
          defaultStrokeWidth={5}
          undoComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>১ ধাপ পেছনে</Text>
            </View>
          }
          clearComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>পরিষ্কার</Text>
            </View>
          }
          strokeComponent={color => (
            <View
              style={[{backgroundColor: color}, styles.strokeColorButton]}
            />
          )}
          eraseComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>ইরেজার</Text>
            </View>
          }
          strokeSelectedComponent={(color, index, changed) => {
            return (
              <View
                style={[
                  {backgroundColor: color, borderWidth: 2},
                  styles.strokeColorButton,
                ]}
              />
            );
          }}
          strokeWidthComponent={w => {
            return (
              <View style={styles.strokeWidthButton}>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginHorizontal: 2.5,
                    width: Math.sqrt(w / 3) * 10,
                    height: Math.sqrt(w / 3) * 10,
                    borderRadius: (Math.sqrt(w / 3) * 10) / 2,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

// Rest of the code remains the same

AppRegistry.registerComponent('example', () => Write);
export default Write;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 100,
    backgroundColor: '#39579A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
