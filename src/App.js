import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParticlesBg from "particles-bg";



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
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Baloo+Da+2&display=swap" rel="stylesheet"></link>
            <nav class="navbar navbar-light bg-light">
              <h1 class="navbar navbar-expand-lg navbar-light bg-light" href="#">COVID-19 SriLanka Tracker</h1>
            </nav>
            <br/><br/>
            <h1>COVID-19 Sri Lanka Situation Report</h1>
            <h5 class="text-muted">Last Update Time</h5>
            <b><h4>{this.state.covidData.update_date_time}</h4></b>
            <br/><br/><br/>
            <div class="container pt-3 " >
            <div class="card-deck">
              <div class="card text-white bg-danger mb-3">
              <div class="card-body">
              <h1><span class="fa fa-ambulance"></span></h1>
              <h1 class="card-title">Local New Cases</h1>
                <h1 class="card-text ">{this.state.covidData.local_total_cases}</h1>
                
              </div>
              </div>
              <div class="card text-white bg-secondary mb-3">
              <div class="card-body">
              <h1><span class="fa fa-hotel"></span></h1>
              <h1 class="card-title">Deaths</h1>
                <h1 class="card-text">{this.state.covidData.local_deaths}</h1>
               
              </div>
              </div>
              <div class="card text-white bg-success mb-3">
              <div class="card-body">
              <h1><span class="fa fa-male"></span></h1>
              <h1 class="card-title">Local recovered</h1>
                <h1 class="card-text">{this.state.covidData.local_recovered}</h1>
               
              </div>
              </div>

            </div>
            <h1>Current status of the SriLanka hospitals</h1>

            
            </div>
            
           {
         
           
           
           }
          <ParticlesBg type="cobweb" bg={true}/>
          </div>
        )}
     
          
      </div>
      
    );
  }
}

export default App;
