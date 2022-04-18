import {NavLink} from 'react-router-dom'
import logodark from '../assets/logodark.svg'

export const Footer = () => {
    return(
           <div className='footer'>
               <div>
                   <h3 style={{color:'transparent'}}>1</h3>
                   <img src={logodark} style={{color:'transparent', height:40, marginTop:-15}}/>
                   <p style={{marginTop:40}}>Enjoin our community and start your successful career with us today! Here you will find experienced  friendly atmosphere and develop yourself!</p>

               </div>
               <div>
                   <h3>Custom Support & Sale</h3>
                   <h3 style={{color:'#144AF1', fontWeight:'200'}}>8-707-714-69-24</h3>
                   <p  style={{marginTop:40}}>Almaty, Kaskelen, Abylay Khan 1/1
                       Monday to Friday 9:00 am – 6:00 pm; Saturday 9:00 am – 4:00 pm
                   </p>
               </div>
           </div>


    )
}
