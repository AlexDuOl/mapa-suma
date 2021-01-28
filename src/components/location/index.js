
import React, { Fragment } from 'react';

const Location = props => {

    const dataValues = props.dataParams.map((({ n, i, x, y, s, t}) => {
        return (
            <Fragment>
                <div className="ui card">
                    <div className="content" key={i}>
                        <h1 className="header">Unidad: {n}</h1>
                        <div className="meta">
                        <span className="date">Identificador: {i}</span>
                        </div>
                        <div className="description">
                        Longitud: {x}
                        </div>
                        <div className="description">
                        Latitud: {y}
                        </div>
                        <div className="description">
                        Velocidad: {s}
                        </div>
                        <div className="description">
                        Tiempo: {t}
                        </div>
                    </div>
                </div>           
            </Fragment>
        )
    }));
    return <div>{dataValues}</div>


};

export default Location;
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
