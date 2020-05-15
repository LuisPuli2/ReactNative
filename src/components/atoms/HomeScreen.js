import React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Mostrar a la mujer más hermosa de la vida"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
}

export default HomeScreen