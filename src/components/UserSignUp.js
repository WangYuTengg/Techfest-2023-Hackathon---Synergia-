import React, {Component, state} from 'react';
import './UserSignUp.css';
import axios from 'axios';

class UserSignUp extends Component{
    state = {
        selectedFile : null
    };

    onFileChange = event => {
        this.setState({ selectedFile : event.target.files[0]});
    };

    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );


        console.log(this.state.selectedFile);

        axios.post("api/uploadfile", formData);
    };

    state = {
        firstname: '',
        lastname: '',
        education: '',
        role: '',
        companyname: '',
        startdate: '',
        enddate: '',
        workexp: '',
        switches: ["O' Levels", "A' Levels", "Bachelor's", "Master's", "Doctorate", "Online Certification"],
        selectedOption: []
        
    }
    
    handleChange = ({ target }) => {
        this.setState({ [target.name] : target.value});
    }

    handleChange(option){
        this.setState({selectedOption : option.value})
    }

    render(){
        return(
            <div className='page-white'>
                <div className = "Header spaced">
                    <h1>User Sign Up</h1>
                </div>
                
                <div className='name'>
                    <form className='FirstName'>
                        <label className='sign-up-label'>
                            <h2 className='left'>First name: </h2>
                            <input type="text"
                            name="firstname" 
                            value = {this.state.firstname}
                            onChange = {this.handleChange} />
                        </label>
                    </form>

                    <form className='LastName'>
                        <label className='sign-up-label'>
                            <h2 className='left'>Last name: </h2>
                        <input type="text" 
                            name= "lastname"
                            value = {this.state.lastname}
                            onChange = {this.handleChange} />     
                        </label>
                    </form>
                </div>

                <div className = 'Header underline'>
                    <h2>Qualifications</h2>
                </div>
                <div className='qualifications'>
                    <div className = 'pad'>
                        <label className='sign-up-label'>
                            <h2 className='left'>Education level:</h2>
                        <select className='dropbtn'>
                        <option value = "O' Levels">O' Levels</option>
                        <option value = "A' Levels">A' Levels</option>
                        <option value = "Bachelor's">Bachelor's</option>
                        <option value = "Master's">Master's</option>
                        <option value = "Doctorate">Doctorate</option>
                        <option value = "Online Certification">Online Certification</option>
                        <button onClick={this.state.selectedOption} onChange = {this.state.handleChange}>
                        </button>
                        </select>
                        </label>
                    </div>
                    <form className='pad'>
                        <label className='sign-up-label'>
                            <h2 className='left'>Certification:</h2>
                            <input type="file" onChange = {this.onFileChange}/>
                            <button onClick = {this.onFileUpload} className='btn'>
                            Upload
                        </button>
                        </label>
                    </form>
                    <div className='pad'>
                        <label className='sign-up-label'>
                            <h2 className='left'>Education level:</h2>
                        <select className='dropbtn'>
                        <option value = "O' Levels">O' Levels</option>
                        <option value = "A' Levels">A' Levels</option>
                        <option value = "Bachelor's">Bachelor's</option>
                        <option value = "Master's">Master's</option>
                        <option value = "Doctorate">Doctorate</option>
                        <option value = "Online Certification">Online Certification</option>
                        </select>
                        </label>
                    </div>
                    <form className='pad'>
                        <label className='sign-up-label'>
                            <h2 className='left'>Certification:</h2>
                            <input type="file" onChange = {this.onFileChange}/>
                            <button onClick = {this.onFileUpload} className='btn'>
                            Upload
                        </button>
                        </label>
                    </form>

                    <div className = 'pad'>
                        <label className='sign-up-label'>
                           <h2 className='left'>Education level:</h2>
                        <select className='dropbtn'>
                        <option value = "O' Levels">O' Levels</option>
                        <option value = "A' Levels">A' Levels</option>
                        <option value = "Bachelor's">Bachelor's</option>
                        <option value = "Master's">Master's</option>
                        <option value = "Doctorate">Doctorate</option>
                        <option value = "Online Certification">Online Certification</option>
                        </select>
                        </label>
                    </div>
                    <form className='pad'>
                        <label className='sign-up-label'>
                            <h2 className='left'>Certification:</h2>
                            <input type="file" onChange = {this.onFileChange}/>
                            <button onClick = {this.onFileUpload} className='btn'>
                            Upload
                        </button>
                        </label>
                    </form>
                </div>

                
                <div className='Header underline'>
                    <h2>Work Experience</h2>
                </div>

                <div className='Work-Experience'>
                    <div className='pad'>
                        <label className='sign-up-label'>
                            <h2 className='left'>Role: </h2>
                            <select className='dropbtn'>
                            <option value = "Intern">Intern</option>
                            <option value = "Data Analyst">Data Analyst</option>
                            <option value = "Software Engineer">Software Engineer</option>
                            <option value = "Data Scientist">Data Scientist</option>
                            <option value = "Back-End Developer">Back-End Developer</option>
                            <option value = "Front-End Developer">Front-End Developer</option>
                            <option value = "UI/UX Developer">UI/UX Developer</option>
                            <option value = "Computer Vision Engineer">Computer Vision Engineer</option>
                            <option value = "Cloud Infrastructure Architect">Cloud Infrastructure Architect</option>
                            <option value = "Enterprise Architect">Enterprise Architect</option>
                            <option value = "IT Systems Architect">IT Systems Architect</option>
                            <option value = "Solutions Architect">Solutions Architect</option>
                            <option value = "Technical Architect">Technical Architect</option>
                            </select>
                        </label>
                    </div>
                    
                    <div className = 'pad'>
                        <form>
                            <label className='sign-up-label'> <h2 className='left'>Company name: </h2>
                            <input type="text" company = "company" />
                            </label>
                        </form>
                    </div>

                    <div className='StartDate'>
                        <label className='sign-up-label'><h2 className='left underline'>Start Date </h2></label>
                    </div>

                    <div className='pad'>
                        <label className='sign-up-label'>
                          <h2 className='left'>Day: </h2>
                            <select className='dropbtn'>
                                <option value = '01'>01</option>
                                <option value = '02'>02</option>
                                <option value = '03'>03</option>
                                <option value = '04'>04</option>
                                <option value = '05'>05</option>
                                <option value = '06'>06</option>
                                <option value = '07'>07</option>
                                <option value = '08'>08</option>
                                <option value = '09'>09</option>
                                <option value = '10'>10</option>
                                <option value = '11'>11</option>
                                <option value = '12'>12</option>
                                <option value = '13'>13</option>
                                <option value = '14'>14</option>
                                <option value = '15'>15</option>
                                <option value = '16'>16</option>
                                <option value = '17'>17</option>
                                <option value = '18'>18</option>
                                <option value = '19'>19</option>
                                <option value = '20'>20</option>
                                <option value = '21'>21</option>
                                <option value = '22'>22</option>
                                <option value = '23'>23</option>
                                <option value = '24'>24</option>
                                <option value = '25'>25</option>
                                <option value = '26'>26</option>
                                <option value = '27'>27</option>
                                <option value = '28'>28</option>
                                <option value = '29'>29</option>
                                <option value = '30'>30</option>
                            </select>
                        </label>
                        <label className='sign-up-label'>
                            <h2 className='left'> Month: </h2>
                            <select className='dropbtn'>
                                <option value = 'Jan'>January</option>
                                <option value = 'Feb'>February</option>
                                <option value = 'Mar'>March</option>
                                <option value = 'Apr'>April</option>
                                <option value = 'May'>May</option>
                                <option value = 'June'>June</option>
                                <option value = 'July'>July</option>
                                <option value = 'Aug'>August</option>
                                <option value = 'Sep'>September</option>
                                <option value = 'Oct'>October</option>
                                <option value = 'Nov'>November</option>
                                <option value = 'Dec'>December</option>
                            </select>
                        </label>
                        <label className='sign-up-label'>
                            <h2 className='left'>Year: </h2>
                            <select className='dropbtn'>
                                <option value = '2023'>2023</option>
                                <option value = '2023'>2022</option>
                                <option value = '2023'>2021</option>
                                <option value = '2023'>2020</option>
                                <option value = '2023'>2019</option>
                                <option value = '2023'>2018</option>
                                <option value = '2023'>2017</option>
                                <option value = '2023'>2016</option>
                                <option value = '2023'>2015</option>
                                <option value = '2023'>2014</option>
                                <option value = '2023'>2013</option>
                                <option value = '2023'>2012</option>
                                <option value = '2023'>2011</option>
                                <option value = '2023'>2010</option>
                                <option value = '2023'>2009</option>
                                <option value = '2023'>2008</option>
                                <option value = '2023'>2007</option>
                                <option value = '2023'>2006</option>
                                <option value = '2023'>2005</option>
                                <option value = '2023'>2004</option>
                                <option value = '2023'>2003</option>
                                <option value = '2023'>2002</option>
                                <option value = '2023'>2001</option>
                                <option value = '2023'>2000</option>
                                <option value = '2023'>1999</option>
                                <option value = '2023'>1998</option>
                                <option value = '2023'>1997</option>
                                <option value = '2023'>1996</option>
                                <option value = '2023'>1995</option>
                                <option value = '2023'>1994</option>
                                <option value = '2023'>1993</option>
                                <option value = '2023'>1992</option>
                                <option value = '2023'>1991</option>
                                <option value = '2023'>1990</option>
                                <option value = '2023'>1989</option>
                                <option value = '2023'>1988</option>
                                <option value = '2023'>1987</option>
                                <option value = '2023'>1986</option>
                                <option value = '2023'>1985</option>
                                <option value = '2023'>1984</option>
                                <option value = '2023'>1983</option>
                                <option value = '2023'>1982</option>
                                <option value = '2023'>1981</option>
                                <option value = '2023'>1980</option>
                            </select>
                        </label>
                    </div>
                    <div className='pad'>
                        <label className='sign-up-label'>
                           <h2 className='left underline'>End Date</h2>
                        </label>
                    </div>
                    <div className='pad'>
                        <label className='sign-up-label'>
                          <h2 className='left'>Day: </h2>
                            <select className='dropbtn'>
                                <option value = '01'>01</option>
                                <option value = '02'>02</option>
                                <option value = '03'>03</option>
                                <option value = '04'>04</option>
                                <option value = '05'>05</option>
                                <option value = '06'>06</option>
                                <option value = '07'>07</option>
                                <option value = '08'>08</option>
                                <option value = '09'>09</option>
                                <option value = '10'>10</option>
                                <option value = '11'>11</option>
                                <option value = '12'>12</option>
                                <option value = '13'>13</option>
                                <option value = '14'>14</option>
                                <option value = '15'>15</option>
                                <option value = '16'>16</option>
                                <option value = '17'>17</option>
                                <option value = '18'>18</option>
                                <option value = '19'>19</option>
                                <option value = '20'>20</option>
                                <option value = '21'>21</option>
                                <option value = '22'>22</option>
                                <option value = '23'>23</option>
                                <option value = '24'>24</option>
                                <option value = '25'>25</option>
                                <option value = '26'>26</option>
                                <option value = '27'>27</option>
                                <option value = '28'>28</option>
                                <option value = '29'>29</option>
                                <option value = '30'>30</option>
                            </select>
                        </label>
                        <label className='sign-up-label'>
                            <h2 className='left'> Month: </h2>
                            <select className='dropbtn'>
                                <option value = 'Jan'>January</option>
                                <option value = 'Feb'>February</option>
                                <option value = 'Mar'>March</option>
                                <option value = 'Apr'>April</option>
                                <option value = 'May'>May</option>
                                <option value = 'June'>June</option>
                                <option value = 'July'>July</option>
                                <option value = 'Aug'>August</option>
                                <option value = 'Sep'>September</option>
                                <option value = 'Oct'>October</option>
                                <option value = 'Nov'>November</option>
                                <option value = 'Dec'>December</option>
                            </select>
                        </label>
                        <label className='sign-up-label'>
                            <h2 className='left'>Year: </h2>
                            <select className='dropbtn'>
                                <option value = '2023'>2023</option>
                                <option value = '2023'>2022</option>
                                <option value = '2023'>2021</option>
                                <option value = '2023'>2020</option>
                                <option value = '2023'>2019</option>
                                <option value = '2023'>2018</option>
                                <option value = '2023'>2017</option>
                                <option value = '2023'>2016</option>
                                <option value = '2023'>2015</option>
                                <option value = '2023'>2014</option>
                                <option value = '2023'>2013</option>
                                <option value = '2023'>2012</option>
                                <option value = '2023'>2011</option>
                                <option value = '2023'>2010</option>
                                <option value = '2023'>2009</option>
                                <option value = '2023'>2008</option>
                                <option value = '2023'>2007</option>
                                <option value = '2023'>2006</option>
                                <option value = '2023'>2005</option>
                                <option value = '2023'>2004</option>
                                <option value = '2023'>2003</option>
                                <option value = '2023'>2002</option>
                                <option value = '2023'>2001</option>
                                <option value = '2023'>2000</option>
                                <option value = '2023'>1999</option>
                                <option value = '2023'>1998</option>
                                <option value = '2023'>1997</option>
                                <option value = '2023'>1996</option>
                                <option value = '2023'>1995</option>
                                <option value = '2023'>1994</option>
                                <option value = '2023'>1993</option>
                                <option value = '2023'>1992</option>
                                <option value = '2023'>1991</option>
                                <option value = '2023'>1990</option>
                                <option value = '2023'>1989</option>
                                <option value = '2023'>1988</option>
                                <option value = '2023'>1987</option>
                                <option value = '2023'>1986</option>
                                <option value = '2023'>1985</option>
                                <option value = '2023'>1984</option>
                                <option value = '2023'>1983</option>
                                <option value = '2023'>1982</option>
                                <option value = '2023'>1981</option>
                                <option value = '2023'>1980</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        )
        }
    }
export default UserSignUp;
