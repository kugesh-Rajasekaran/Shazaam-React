import {Map, InfoWindow, Marker, GoogleApiWrapper, Circle} from 'google-maps-react';
 import React from 'react'
 
 class MapUtil extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

  render() {
    const coords = { lat: 11.0290, lng: 79.8507 };
      const style = {
       
        position: 'absolute',  
        width: '30%',
        height: '30%'
      }
    return (
        <div>

      <Map style={style}
          initialCenter={{
            lat: 11.0290,
            lng: 79.8507
          }}
         
      google={this.props.google} zoom={10}>
 
        <Marker onClick={this.onMarkerClick}
                position={{lat: 11.0290, lng: 79.8507}} />

                
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>GS Constructions</h3>
            </div>
        </InfoWindow>
        
    <Circle
        radius={1200}
        center={coords}
        onMouseover={() => console.log('mouseover')}
        onClick={() => console.log('click')}
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBh-CWm-hFp_cTXrs7lcBvgAUXHB_pCvFk")
})(MapUtil)