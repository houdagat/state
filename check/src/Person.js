import React from "react"
import aa from './1.jpg'




class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            timer : 0 ,
            intervall:null,
            show:true

        };
    }
     //timer
     componentDidMount() {
                this.setState({
            intervall: setInterval(
                ()=> this.setState({
                    timer: this.state.timer +1}),
                     1000
                     
                    ),

        });
    }
    componentWillUnmount() {
       
      }

      convertirTemps = (tempsEnSecondes) => {
        const heures = Math.floor(tempsEnSecondes / 3600);
        const minutes = Math.floor((tempsEnSecondes % 3600) / 60);
        const secondes = tempsEnSecondes % 60;
        return `${heures}h ${minutes}m ${secondes}s`;
      };
     
    render(){
        return (
            <div style={{backgroundColor:'#FFF5C2'}}>
                <card >
                    <br></br>
                    
                <img   style={{borderRadius:'4px',border:'2px solid #6B240C '}}width='200px' height='300px' src= {aa} alt='id photo'/>
                <br></br><br></br>
                <h1 style={{textDecoration:'underline',color:'#C69774',fontFamily:'times new roman'}}>Amin BEN REJEB</h1>
                <br></br>
                <h3 style={{fontFamily:'sans-serif',color:'#994D1C'}}>\ * Trading Auditor * \</h3>
                <br></br>
                <p style={{fontStyle:'italic',fontSeize:'300px',fontWeight:'bold'}}> " 1-Master's degree in computer science <br></br>
                applied to management"<br></br><br></br>
                 " 2-React Fullstack Student"</p>
                 <br></br> <br></br>
                <span style={{fontWeight:'bold',fontSize:'25px',color:'#750E21'}}> {this.convertirTemps(this.state.timer)} </span>
                </card>
               
              
            </div>
        )
    }
}
export default Person;