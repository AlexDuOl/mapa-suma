import React, { Component, Fragment } from 'react';
import { Map, Polyline, GoogleApiWrapper, Marker } from 'google-maps-react';
//import { connect } from 'react-redux';
import './style.css'

class Maps extends Component {
        constructor(props) {
            super(props);
        
            this.state = {
                positions: [
                    { lat: 20.633848, lng: -103.43243 },
                    { lat: 20.634493, lng: -103.425846 },
                    { lat: 20.6366266, lng: -103.4225952 },
                    { lat: 20.6379632, lng: -103.4200849 },
                ]
            }
        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                100000
            );
        }
    
        componentWillUnmount() {
            clearInterval(this.timerID);
        }
    
        tick() {
            this.setState({
              date: new Date(),
            })
        }
    
        /*draw_rute_map = () => {
            this.state.currentPosition
            return console.log(currentPos);
        }*/
    
        displayMarkers = () => {
            return this.state.positions.map(({lat,lng}) => {
                return <Marker position={{lat,lng}}/>
            })
        }
    
        displayPolyline = () => {
            return this.state.positions.map(({lat,lng}) => {
                const pathLine = this.state.positions;
    
                pathLine.forEach = (path) => {
                    return <Polyline path={path} strokeColor="#f5821f" strokeOpacity={0.8} strokeWeight={6} />
                }
                console.log(pathLine);
                return <Polyline path={this.state.positions} strokeColor="#f5821f" strokeOpacity={0.8} strokeWeight={6} />
            })
        }
        
        render(){
            
            return (
                <Fragment>
                    <div id="map" className="ui segment">
                        <Map
                            style={{ width: '400px', height: '400px' }}
                            google={this.props.google}
                            zoom={15}
                            initialCenter={{ lat: 20.633848, lng: -103.43243 }}
                            >
                            {this.displayMarkers()}
                            <Polyline
                                path={this.state.positions}
                                geodesic={true}
                                options={{
                                strokeColor: "#ff2527",
                                strokeOpacity: 0.0,
                                strokeWeight: 2,

                                }}
                            />
                        </Map>
                    </div>
                </Fragment>
            )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBfi7VNKtBAGPFAa43c_CEsLSlA0d32M9g'
})(Maps, Marker);
/*
const mapStateToProps = (state) => {
	return {
    results: state.results, 
    }
}

const mapDispatchToProps = {
	findCurrentItem,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);*/
