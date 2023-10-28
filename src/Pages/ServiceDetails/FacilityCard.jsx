import React from 'react';

const FacilityCard = ({facilityData}) => {
    const {name, details }= facilityData;
    return (
        <div className=' h-[204px] rounded-lg bg-[#F3F3F3] p-4'>
        <h1 className='text-2xl font-medium'>{name}</h1>
        <p className='text-[#737373]'>{details}</p>
    </div>
    );
};

export default FacilityCard;