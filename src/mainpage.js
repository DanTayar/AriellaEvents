import React from 'react';
import './mainpage.css';





class Mainpage extends React.Component {
    render(){
        return (
        <div className='Mainpage'>
         <img src='https://static.wixstatic.com/media/34dcd2_12c9805d50174f2c908b33a35ed273cb~mv2.jpg/v1/crop/x_54,y_0,w_1492,h_1066/fill/w_1120,h_800,al_c,q_85,usm_0.66_1.00_0.01/083ef67c-11ce-486b-9b7e-7904746613ae_JPG.webp' alt='' id="home" />
            <div className='aboutUs'>
                <div>
                <h1>About Us </h1>

                    <p>Ariella Waitzman Tayar is the founder and CEO of Ariella Events, an Israeli company of event planning.
With over 25 years of experience, Ariella Events’ Staff collaborates with people all over the world in order to organize the best parties in Israël. 
We don’t stop innovating, we are full of inspiration and we make sure that every event is strictly personalized and the only one of its kind. 
Ariella Events is producing weddings, bar-mitsvahs, beach parties, private parties, birthdays...
Trust us and enjoy your event by letting us operate with magic and passion!</p>
                </div>
                <img src='https://static.wixstatic.com/media/34dcd2_875af8f286d94dd4ba661f98691ff1c7~mv2.jpg/v1/fill/w_1120,h_800,al_c,q_85,usm_0.66_1.00_0.01/34dcd2_875af8f286d94dd4ba661f98691ff1c7~mv2.webp' alt=''/>
                </div>
            <div className='gallery'>
                <h1> Gallery </h1>
                    <p>Our Gallery refers to events that we already produced across the country.
                        Let's go take a sneak peek.</p>
                <a href='#gallery'>View Gallery</a>
                <img src="https://static.wixstatic.com/media/34dcd2_1ac56b6731124a9e8e8d5cecb4afb184~mv2.jpg/v1/crop/x_8,y_0,w_1584,h_1066/fill/w_1138,h_766,al_c,q_85,usm_0.66_1.00_0.01/7364f3fa-3bd4-4edf-a1f0-250157c19a3c_JPG.webp" alt='' />


            </div>
        

        </div>

    );
    }
}
export default Mainpage;