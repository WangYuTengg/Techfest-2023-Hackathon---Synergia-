import React from 'react';
import './JobCard.css';
import TinderCard from 'react-tinder-card';


const JobCard = () => {
    const [JobCards] = React.useState([
        {
            companyName: "Apple",
            role: "Front-end Developer",
            position: "Intern",
            salary: "$1000",
            jobIndex: "AAP-12345",  
            type: "Full-time",
            onsite: "Flexible",
            url: 'https://singaporejob24h.com/front-end-developer-apple-online-store-job100344?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            key: 0
        },
        {
            companyName: "Tencent",
            role: "Back-end Developer",
            position: "Senior",
            salary: "$8000",
            jobIndex: "TC-12456",
            type: "Full-time",
            onsite: "Remote",
            url: 'https://nodeflair.com/jobs/tencent-senior-backend-engineer-90154?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            key: 1
        },
        {
            companyName: "Samsung",
            role: "Android Developer",
            position: "Senior",
            salary: "$7000",
            jobIndex: "SS-22212",
            type: "Full-time",
            onsite: "Onsite",
            url: 'https://developer.samsung.com/',
            key: 2
        },
        {
            companyName: "GovTech",
            role: "Cyber Security",
            position: "Senior",
            salary: "$6500",
            jobIndex: "GT-202441",         
            type: "Full-time",
            onsite: "Onsite",
            url: 'https://www.tech.gov.sg/capability-centre-csg',
            key: 3
        },
        {
            companyName: "Apple",
            role: "Back-end Developer",
            position: "Senior",
            salary: "$8000",
            jobIndex: "AAP-12224",
            type: "Full-time",
            onsite: "Onsite",
            url: 'https://jobs.apple.com/en-sg/details/200450239/senior-backend-engineer?team=SFTWR',
            key: 4
        },
        {
            companyName: "Binance",
            role: "Data Analyst",
            position: "Intern",
            salary: "$1200",
            jobIndex: "BI-23332",
            type: "Full-time",
            onsite: "Flexible",
            url: 'https://jobs.lever.co/binance/00fa1aa2-6baa-44fc-b480-dfab6bd29f39',
            key: 5
        }

    ])

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
       <div>
            <div className='hero'></div>
            <div className="card-container">
                {
                    JobCards.map( card => (
                        <TinderCard className='jobcard' key={card.key} preventSwipe={['up', 'down']}>
                            <div className='card'>
                                <div className='card-header'>
                                    <h2>{card.companyName}</h2>
                                    <h4>Index: {card.jobIndex}</h4>
                                </div>

                                <div className='card-details'>
                                    <h3>Role: <span className='bold'>{card.role}</span></h3>
                                    <h3>Position: <span className='bold'>{card.position}</span></h3>
                                    <h3>Monthly Salary: <span className='bold'>{card.salary}</span></h3>
                                    <h3>Type: <span className='bold'>{card.type}</span>, Onsite: <span className='bold'>{card.onsite}</span></h3>
                                    <h3><span className='bold underline'>Job Description: </span></h3>
                                    <p className='job-desc'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        <div></div>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    </p>
                                </div>
                                
                                <div className='card-footer'>
                                    <button className='btn-dark' onClick={() => openInNewTab(`${card.url}`)}>View Job Listing</button>
                                </div>
                            </div>
                        </TinderCard>
                    ))
                }
        </div>
       </div>
    );
}
 
export default JobCard;