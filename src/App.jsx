import React from 'react'
import Card from './assets/Card.jsx'
import './App.css';
const App = () => {
  const jobs = [
    {
      id: 1,
      logo: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=128',
      company: 'Amazon',
      datePosted: '5 days ago',
      role: 'Senior UI/UX Designer',
      tag1: 'Part-time',
      tag2: 'Senior-level',
      pay: '$120/hr',
      location: 'Mumbai, India',
    },
    {
      id: 2,
      logo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128',
      company: 'Google',
      datePosted: '2 weeks ago',
      role: 'Frontend Engineer',
      tag1: 'Full-time',
      tag2: 'Hybrid',
      pay: '$95/hr',
      location: 'Bengaluru, India',
    },
    {
      id: 3,
      logo: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128',
      company: 'Apple',
      datePosted: '3 days ago',
      role: 'iOS Developer',
      tag1: 'Full-time',
      tag2: 'Mid-level',
      pay: '$105/hr',
      location: 'Hyderabad, India',
    },
    {
      id: 4,
      logo: 'https://www.google.com/s2/favicons?domain=meta.com&sz=128',
      company: 'Meta',
      datePosted: '1 week ago',
      role: 'Product Designer',
      tag1: 'Contract',
      tag2: 'Remote',
      pay: '$110/hr',
      location: 'Remote, India',
    },
    {
      id: 5,
      logo: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=128',
      company: 'Netflix',
      datePosted: '1 day ago',
      role: 'Backend Engineer',
      tag1: 'Full-time',
      tag2: 'Senior-level',
      pay: '$135/hr',
      location: 'Mumbai, India',
    },
    {
      id: 6,
      logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
      company: 'Microsoft',
      datePosted: '4 days ago',
      role: 'Cloud Support Engineer',
      tag1: 'Full-time',
      tag2: 'Junior-level',
      pay: '$55/hr',
      location: 'Hyderabad, India',
    },
    {
      id: 7,
      logo: 'https://www.google.com/s2/favicons?domain=nvidia.com&sz=128',
      company: 'NVIDIA',
      datePosted: '6 days ago',
      role: 'Machine Learning Engineer',
      tag1: 'Full-time',
      tag2: 'Senior-level',
      pay: '$125/hr',
      location: 'Pune, India',
    },
    {
      id: 8,
      logo: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=128',
      company: 'Adobe',
      datePosted: '3 weeks ago',
      role: 'Design Systems Engineer',
      tag1: 'Contract',
      tag2: 'Hybrid',
      pay: '$85/hr',
      location: 'Noida, India',
    },
    {
      id: 9,
      logo: 'https://www.google.com/s2/favicons?domain=salesforce.com&sz=128',
      company: 'Salesforce',
      datePosted: '2 days ago',
      role: 'Full Stack Developer',
      tag1: 'Full-time',
      tag2: 'Mid-level',
      pay: '$90/hr',
      location: 'Hyderabad, India',
    },
    {
      id: 10,
      logo: 'https://www.google.com/s2/favicons?domain=ibm.com&sz=128',
      company: 'IBM',
      datePosted: '10 days ago',
      role: 'Data Analyst',
      tag1: 'Part-time',
      tag2: 'Junior-level',
      pay: '$45/hr',
      location: 'Bengaluru, India',
    },
  ]
  return (
    <div className='parent'>
      {jobs.map(function(job){
        return <Card key= {job.id} job ={job} />
      })}
    </div>
  )
}

export default App