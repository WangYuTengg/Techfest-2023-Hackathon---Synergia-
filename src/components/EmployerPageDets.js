import React , {  useState } from 'react';
import faceImg from '../assets/images.jpg';
import faceImg2 from '../assets/lady1.jpg';
import faceImg3 from '../assets/face.jpg';
import faceImg4 from '../assets/lady2.jpg';
import './EmployerPage.css';

function hideDiv3(){
  var element = document.getElementById("div3");
  element.style.display = "none";
}
function hideDiv4(){
  var element = document.getElementById("div4");
  element.style.display = "none";
}

function EmployerPageDets() {
  let name1= 'Name : Bob Marley \n';
  let age1 = 'Age : 45 years old\n';
  let years1 = 'Years of Experience : 10 years \n' 
  let pay1 = 'Asking Pay : $6000 - $6500\n'
  let name2= 'Name : Jennifer Tan\n';
  let age2 = 'Age : 30 years old\n';
  let years2 = 'Years of Experience : 5 years \n' 
  let pay2 = 'Asking Pay : $4000 - $4500\n';
  let name3= 'Name : Johnny Lim \n';
  let age3 = 'Age : 35 years old\n';
  let years3 = 'Years of Experience : 7 years \n' 
  let pay3 = 'Asking Pay : $5000 - $5500\n'
  let name4= 'Name : Elizabeth Lim \n';
  let age4 = 'Age : 25 years old\n';
  let years4 = 'Years of Experience : 2 years\n' 
  let pay4 = 'Asking Pay : $3500 - $4000'

  const [buttonText, setButtonText] = useState('Accept');
  const [buttonText2, setButtonText2] = useState('Accept');
  const [buttonText3, setButtonText3] = useState('Accept');
  const [buttonText4, setButtonText4] = useState('Accept');
  const handleClick = () => {
    setButtonText('Open Chat');
  };
  const handleClick2 = () => {
    setButtonText2('Open Chat');
  };
  const handleClick3 = () => {
    setButtonText3('Open Chat');
  };
  const handleClick4 = () => {
    setButtonText4('Open Chat');
  };

  return  (
    <div>
      <h1 className='HeaderCentre'>g</h1>
      <h1 className = 'HeaderCentre'>g</h1>
      <div id = 'div1' className='Container'>
        <button className='btn'> Remove </button>
        <img src ={faceImg} width={210} height={240} alt="Profile Pic" />
        <div className='dets'>{name1}{age1}{years1}{pay1}</div>
        <div className='buttons'>
            <button className='btn'> About </button>
            <button className= 'btn' onClick={handleClick}>{buttonText}</button>
        </div>
 
      </div>
      <div id = 'div2' className='Container'>
      <button className='btn'> Remove </button>
      <img src ={faceImg2} width={210} height={280} alt="Profile Pic 2" />
        <div className='dets'>{name2}{age2}{years2}{pay2}</div>

        <div className='buttons'>
            <button className='btn'> About </button>
            <button className ='btn' onClick={handleClick2}>{buttonText2}</button>
        </div>
      </div>

      <div id = 'div3' className='Container'>
        <button className='btn' onClick={hideDiv3}> Remove </button>
        <img src ={faceImg3} width={210} height={240} alt="Profile Pic 3" />
        <div className='dets'>{name3}{age3}{years3}{pay3}</div>
        <div className='buttons'>
            <button className='btn'> About </button>
            <button className='btn' onClick={handleClick3}>{buttonText3}</button>
        </div>
      </div>

      <div id = 'div4' className='Container'>
      <button className='btn' onClick={hideDiv4}> Remove </button>
      <img src ={faceImg4} width={210} height={240} alt="Profile Pic 4" />
        <div className='dets'>{name4}{age4}{years4}{pay4}</div>
        <div className='buttons'>
            <button className='btn'> About </button>
            <button className='btn' onClick={handleClick4}>{buttonText4}</button>
        </div>
    </div>
    </div>  

  )
}

export default EmployerPageDets;