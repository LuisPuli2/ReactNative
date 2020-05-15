import React from 'react';
import { Button, View, Text } from 'react-native';

function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginBottom: 30}}>La mujer más hermosa de todas </Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
          buttonStyle = {{marginTop: 30}}
        />
        <View style={{marginTop:30}}>
          <Button
            title="Go to Image result"
            onPress={() => navigation.push('ImageResult')}
          />
        </View>
      </View>
    );
}

export default DetailsScreen 
