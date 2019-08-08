import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';


import {
    getCep
    } from './actions/CepAction';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {cep: ''};
    
        this.handleChange = this.handleChange.bind(this);        
    }    

    buscarCep = parameter => {        
        this.props.getCep(parameter);        
    };  

    handleChange(event) {
        this.setState({cep: event.target.value});
    }

    render() {
        
        return (
        
            <div>
                <TextField
                    label="Cep"                
                    value={this.state.value} 
                    onChange={this.handleChange}                    
                    margin="normal"
                />   
                <br/>  
                <Button onClick={this.buscarCep.bind(this,this.state.cep)}>
                    Buscar CEP
                </Button>
                {this.props.show && 
                    <div>
                        cep: {this.props.data.cep} <br/>
                        logradouro: {this.props.data.logradouro} <br/>
                        complemento: {this.props.data.complemento} <br/>
                        bairro: {this.props.data.bairro} <br/>
                        localidade: {this.props.data.localidade} <br/>
                        uf: {this.props.data.uf} <br/>
                        unidade: {this.props.data.unidade} <br/>
                        ibge: {this.props.data.ibge} <br/>
                        gia: {this.props.data.gia} <br/>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = function(state) { 
    return {
        load: state.CepReducer.load,
        show: state.CepReducer.show,
        data: state.CepReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({        
        getCep:getCep,        
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
