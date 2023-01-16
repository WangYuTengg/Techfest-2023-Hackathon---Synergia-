import React, { useState } from 'react';
import Select from 'react-select';
import '../index.css';

const payOptions = [
  { value: '0-999', label: '0-999' },
  { value: '1,000-1,999', label: '1,000-1,999' },
  { value: '2,000-2,999', label: '2,000-2,999' },
  { value: '3,000-3,999', label: '3,000-3,999' },
  { value: '4,000-4,999', label: '4,000-4,999' },
  { value: '5,000-5,999', label: '5,000-5,999' },
  { value: '6,000-6,999', label: '6,000-6,999' },
  { value: '7,000-7,999', label: '7,000-7,999' },
  { value: '8,000-8,999', label: '8,000-8,999' },
  { value: '9,000+', label: '9,000+' }
];

const onsiteOptions = [
  { value: 'Onsite only', label: 'Onsite only' },
  { value: 'Remote only', label: 'Remote only' },
  { value: 'Flexible', label: 'Flexible' }
  
];

const expOptions = [
  { value: '0', label: '0' },
  { value: '1-5', label: '1-5' },
  { value: '6-10', label: '6-10' },
  { value: '11-15', label: '11-15' },
  { value: '16-20', label: '16-20' },
  { value: '21-25', label: '21-25' },
  { value: '26+', label: '26+' }
];

const benOptions = [
  { value: 'Full', label: 'Full' },
  { value: 'Partial', label: 'Partial' },
  { value: 'None', label: 'None' }
];

const sizeOptions = [
  { value: '0-99', label: '0-99' },
  { value: '100-499', label: '100-499' },
  { value: '500-999', label: '500-999' },
  { value: '1000+', label: '1000+' }
];

const hourOptions = [
  { value: '0-9', label: '0-9' },
  { value: '10-19', label: '10-19' },
  { value: '20-29', label: '20-29' },
  { value: '30-39', label: '30-39' },
  { value: '40-49', label: '40-49' },
  { value: '50+', label: '50+' }
];

const leaveOptions = [
  { value: '0-4', label: '0-4' },
  { value: '5-9', label: '5-9' },
  { value: '10-14', label: '10-14' },
  { value: '15-19', label: '15-19' },
  { value: '20-24', label: '20-24' },
  { value: '25+', label: '25+' }
];


export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      PayScale
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={payOptions}
        />
      </div>
      Onsite
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={onsiteOptions}
        />
      </div>
      Years of Experience
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={expOptions}
        />
      </div>
      Benefits
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={benOptions}
        />
      </div>
      Size
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={sizeOptions}
        />
      </div>
      Weekly Hours
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={hourOptions}
        />
      </div>
      Annual Leave
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={leaveOptions}
        />
      </div>
    </div>
    
  );
}
