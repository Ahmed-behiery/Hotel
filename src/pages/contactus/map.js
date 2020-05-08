import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
 
 
const Map = ReactMapboxGl({
  accessToken:
  "pk.eyJ1IjoiYWhtZWQtYmVoaWVyeTExIiwiYSI6ImNrOHhlbWM2ODBsdWszb21pa2g3anZiYzMifQ.41pu7TFRHl_j8eJ243gOgA"
});
 
class MapGo extends Component {
    render(){
        return (
            <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: '100vh',
              width: '100vw',
              
            }}
          >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
          </Map>
        )
    }
}
 


export default MapGo;