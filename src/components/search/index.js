import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; 
import './style.css'

class Search extends Component {
        constructor(props) {
            super(props);
            this.state = { param: '' };
        
            // Este enlace es necesario para hacer que `this` funcione en el callback
            this.onFormSubmit = this.onFormSubmit.bind(this);
        }
        
        onFormSubmit = event => {
            event.preventDefault();  
            this.props.onSubmit(this.state.param);
        }

        render(){
            const { results } = this.props;
            console.log(results);
            return (
                <Fragment results={results}>
                    <div className="ui container">
                        <div className="ui container search-container">
                            <div className="ui segment">
                                <form className="ui form" onSubmit={this.onFormSubmit}>
                                    <div className="field">
                                        <label>Ingresa el número de unidad</label>
                                        <input 
                                            type="text"
                                            value={this.state.param}
                                            onChange={e => this.setState({ param: e.target.value })} 
                                            />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
    }
}

const mapStateToProps = (state) => {
	return {
        results: state.results, 
    }
}
/*
const mapDispatchToProps = {
	findCurrentItem,
}*/
export default connect(mapStateToProps/*, mapDispatchToProps*/)(Search);