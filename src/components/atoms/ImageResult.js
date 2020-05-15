import React from 'react';
import { Button, View , Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    photo: {
      width: 400,
      height: 400,
    }
})

function ImageResult({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
            style={styles.photo}
            source={require('@assets/giss.jpg')}
        />
        <View style={{marginTop: 50}}>
            <Button
                title="Go to Home Screen"
                onPress={() => navigation.push('Home')}
            />
        </View>
      </View>
    );
}

export default ImageResult