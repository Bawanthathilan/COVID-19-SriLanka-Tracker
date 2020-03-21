import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      covidData: null
        
    }
  }

  componentDidMount(){
    fetch('https://hpb.health.gov.lk/api/get-current-statistical')
    .then(Response => Response.json())
    .then(users =>{
      console.log(users);
      this.setState({
        covidData:users.data
      })

    }) 
    
  }

  render(){
    return (
      <div className="App">
        {(this.state.covidData != null ) && (
          <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand" href="#">COVID-19 SRILANKA TRACKER</a>
            </nav>
            <h1>COVID-19 SRILANKA TRACKER </h1>
            
           <h1>Local New Cases <span class="badge badge-secondary">{this.state.covidData.local_new_cases}</span> </h1>
           <h1>Local Total Cases <span class="badge badge-secondary"> {this.state.covidData.local_total_cases}</span></h1>
           <h1>Local recovered <span class="badge badge-secondary"> {this.state.covidData.local_recovered}</span></h1>
           {
          //  this.state.covidData.hospital_data.map((hospital) => (
          
          //   <h2>{hospital.hospital.name_si}</h2>
           
          //  ))
           
           
           }

          </div>
        )}
     
        
      </div>
    );
  }
}

export default App;
