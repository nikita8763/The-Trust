import React from 'react'
import OpportunityCard from './OpportunityCard';

const HumsafarTrustPage = () => {
    const opportunities = [
        {
          title: 'Internship Requests',
          description: 'The Humsafar Trust accepts interns on a rolling basis throughout the year.Interns can approach HST for a minimum period of 1 month.Interns who approach HST for an academic requirement need to share a letter from their college about the same.Interns need to work for a minimum of 40 hours per week.Interns affiliated with an academic institution need to pay a one-time institutional fee of Rs. 5000.Interns will be given a letter of an experience only on completion of their internship period and deliverables.To submit your internship request write an email to info@humsafar.org. ',
          location: 'New Delhi',
          date: 'August 10, 2023',
        },
        {
          title: 'Volunteering Request',
          description: 'The Humsafar Trust believes in the spirit of volunteerism and encourages volunteers to be part of our volunteer program. We offer experience letters to volunteers who have helped us out over a period of at least 3 months.',
          location: 'Mumbai',
          date: 'September 5, 2023',
        },
        {
            title: 'Research Queries   ',
            description: 'The Humsafar Trust we have a robust research department that works on various aspects of community research. Our projects are vetted by our own IRB and are taken up after rigorous ethical and research protocols.',
            location: 'Mumbai',
            date: 'September 5, 2023',
          },
        
      ];
    
      return (
        <section id='opportunity' className='bg-gray-100 py-12'>
          <h1 className='font-inter mt-12 text-center text-6xl font-medium text-blue-600'>Opportunities</h1>
          {opportunities.map((opportunity, index) => (
            <OpportunityCard key={index} {...opportunity} />
          ))}
        </section>
      );
}

export default HumsafarTrustPage