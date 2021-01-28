import React, { Component } from 'react';
import suma from '../api/suma';
//import { connect } from 'react-redux'; 
import Search from '../search/index';
import Location from '../location/index';
import Maps from '../map/index';
import './style.css'


class Home extends Component {
        state = { dataParams: [] };
        
        onlocation = async (param) => {
            const response = await suma.get('/' + param +'/posicion', {
                params: { query: param }
            });

            const dataParams = [response.data[0].units[0]];
            this.setState({dataParams})
        }
        
        render(){
            
            return (
                <div className="ui container">
                    <Search onSubmit={this.onlocation} />
                    <div className="response-container">
                        <Location dataParams={this.state.dataParams} />
                        <Maps />
                    </div>
                </div>
            )
    }
}
export default Home;
/*
const mapStateToProps = (state) => {
	return {
    results: state.results, 
    }
}

const mapDispatchToProps = {
	findCurrentItem,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
*/