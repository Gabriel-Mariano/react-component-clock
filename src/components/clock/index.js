import React, { Component } from 'react';
import './style.css';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hora: new Date().toLocaleTimeString(),
             ano: new Date().getFullYear(),   // Captura o ano
             mes: new Date().getMonth(),     // Captura o mês
      dia_do_mes: new Date().getDate(),     // Captura o dia do mês
   dia_da_semana: new Date().getDay() 
        }
    }

    componentWillMount(){

    }
    componentDidMount(){
        const meses = ["Janeiro","Feveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        const dias  = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

       let { mes,dia_da_semana } = this.state;
                
        this.intervalo = setInterval(()=>this.updateClock(),1000)
        this.setState({
                mes: meses[mes],
      dia_da_semana: dias[dia_da_semana]      
        })
        
    }
    componentWillUnmount(){

    }

    updateClock(){
        this.setState({ 
            hora:new Date().toLocaleTimeString()
        });
    }
    render(){
        return(
            <div className="container-clock">
                <h1>
                    {this.state.hora}
                </h1>
                <p>{this.state.dia_da_semana}, {this.state.dia_do_mes} de {this.state.mes} de {this.state.ano} </p>  
                <strong>{this.props.name}</strong>  
            </div>
        )
    }
}


export default Clock;