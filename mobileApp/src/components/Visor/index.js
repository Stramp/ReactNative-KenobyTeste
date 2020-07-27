import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { Feather as Icon, AntDesign as Loading } from '@expo/vector-icons';



const apiKey = 'f0e863449fd1e055cc180690bc484a99';
const lang = '&lang=pt_br';
const unitType = '&units=metric';
const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + lang + unitType;





const Visor = ({ location, upDate }) => {
    const [weather, setWeather] = useState(null);
    const [load, setLoad] = useState(true);


    useEffect(() => {
        (async () => {
            if (location != null) {
                setLoad(true);
                const latitudeQuery = '&lat=' + location?.coords.latitude;
                const longitudeQuery = '&lon=' + location?.coords.longitude;
                const axiosRequest = await Axios.get(urlWeather + latitudeQuery + longitudeQuery);
                setWeather(axiosRequest.data);
                setLoad(false);
            }
        })();
    }, [location]);



    return (

        <View style={styles.data}>
            <View style={styles.boxData}>
                <Text style={styles.title}>Temperatura</Text>
                {load ? <Image style={styles.loading} source={{ uri: "https://media0.giphy.com/media/Ib6p4rAqAlzRBh243r/giphy.gif" }} /> :
                    <>


                        <View style={styles.minMax}>
                            <View style={styles.min}>
                                <Text style={{ fontWeight: 'bold', color: 'blue' }}>Min.</Text>
                                <Text style={{ fontSize: 25, }}>{weather?.main.temp_min + 'ºC'}</Text>
                            </View>

                            <View style={styles.max}>
                                <Text style={{ fontWeight: 'bold', color: 'red' }}>Max.</Text>
                                <Text style={{ fontSize: 25, }}>{weather?.main.temp_max + 'ºC'}</Text>
                            </View>
                        </View>

                        <View style={styles.graph}>
                            <Image style={styles.logo} source={{ uri: "http://openweathermap.org/img/wn/" + weather?.weather[0].icon + "@2x.png" }} />
                            <Text style={{ fontSize: 25, textTransform: 'capitalize' }}>{weather?.weather[0].description}</Text>
                        </View>
                        <Text style={styles.city}>{weather?.name}</Text>

                    </>
                }
            </View>
            <TouchableOpacity style={styles.button} onPress={upDate} >
                <Icon name='refresh-cw' color='#000' size={26} />
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,


    },
    loading: {
        width: 80,
        height: 80,
        margin: 38.5

    },
    button: {
        backgroundColor: '#c0c0c0e3',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        padding: 20,
        alignSelf: 'flex-end',
        marginTop: 5
    },
    data: {
        width: '95%',
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
    },
    boxData: {
        width: '95%',
        alignItems: 'center',


    },
    media: {
        alignItems: 'center',
        padding: 5,
        width: '100%',
    },
    minMax: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 5,

    },
    max: {
        width: '47.5%',
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#c0c0c0e3',
        borderRadius: 15,
        overflow: 'hidden',
    },
    min: {

        width: '47.5%',
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#c0c0c0e3',
        borderRadius: 15,
        overflow: 'hidden',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 3,
        width: '100%',
        backgroundColor: '#c0c0c0e3',
        borderRadius: 15,
        overflow: 'hidden',
    },
    graph: {
        backgroundColor: '#c0c0c0d6',
        borderRadius: 15,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 5,
    },
    city: {
        backgroundColor: '#c0c0c0e3',
        borderRadius: 15,
        overflow: 'hidden',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 3,
        width: '100%',
        marginTop: 5,
    }

});

export default Visor;