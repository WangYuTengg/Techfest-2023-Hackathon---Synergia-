import React from 'react';
import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar';
import ParticlesBG from '../components/Particles';

const UserSwipePage = () => {
    return (
        <div>
            <ParticlesBG />
            <Navbar />
            <JobCard />
        </div>
    )
}

export default UserSwipePage;