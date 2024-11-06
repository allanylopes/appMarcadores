import React, {useState,useEffect,useRef} from 'react';
import {Text, View, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { css } from './assets/css/Css';
import carro from './assets/carro.jpg';

//import config from './config';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//import MapViewDirections from 'react-native-maps-directions';




export default function App(){

  const [origin,setOrigin]=useState(null);
  //2 parte busca e rotas
  const mapEl=useRef(null);
  const [distance,setDistance]=useState(null);
  const [destination,setDestination]=useState(null);


useEffect(()=>{
    (async function(){      
      let { status } = await Location.requestForegroundPermissionsAsync(); 
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
},[]);



return(
<View style={css.container}>

<MapView
          style={css.map}
          initialRegion={origin}
          showsUserLocation={true}
          zoomEnabled={true}
          loadingEnabled={true} 
          ref={mapEl}           
          >
          {/*MARCADOR*/}
          <Marker
          //para pegar as coodenadas de origin do ponto atual
          //coodinate={origin}
        //para pega coordenadas de pontos fixos no mapa
          coodenate={{latitude: -24.4945, longitude: -478456}}
          title={'Titulo do Marcador'}
          description={'Descrição do Marcador'}
          >
        <View style={css.marcador}>
          <Image
          souce={carro}
          style={css.marcadorImage}
          >
          </Image>
          <Text style={{color:'white', fontSize: 13}}>Meu Local Aqui</Text>
        </View>
          </Marker>
</MapView>
</View>
)};