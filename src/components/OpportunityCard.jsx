import React from 'react'

const OpportunityCard = ({ title, description, location, date }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4 mt-16 ml-16 mr-8">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 text-lg">{description}</p>
      <div className="flex justify-between">
        <p className="text-gray-700">{location}</p>
        <p className="text-blue-700">{date}</p>
      </div>
    </div>
  )
}

export default OpportunityCard;