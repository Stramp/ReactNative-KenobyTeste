import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import Visor from '../../components/Visor';
import * as Location from 'expo-location';

const Home = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async () => {
        const { status } = await Location.requestPermissionsAsync();
        console.log("log STATUS >> >", status)
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            console.log('Permission to access location was denied');
        }

        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);

    }


    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle}
                region={{
                    latitude: location != null ? location.coords.latitude : 0,
                    longitude: location != null ? location.coords.longitude : 0,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                }}
                showsUserLocation
                showsMyLocationButton

            />
            <Visor location={location} upDate={getLocation} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default Home;