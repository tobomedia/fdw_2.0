import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';


const Marker = (props) => {
    return (<div className="marker">
        <img height="50px" width="50px" alt="hello" src='/mobile/assets/img/logo-mobile.svg' />
    </div>);
}

class Map extends Component {

  render() {
    return (
          <div style={{width: '100%', height: 400}}>
               <GoogleMapReact
                bootstrapURLKeys={{key:"AIzaSyBmdQTqtMJ5rRrzFBSomlT70gDVCfz2Tdo",region: 'uk'}}
                center={[51.513601969974005,-0.13030290000006062]}
                zoom={18}
                >
                <Marker lat='51.513601969974005' lng='-0.13030290000006062'/>
              </GoogleMapReact>
          </div>);
  }
}

export default Map;
