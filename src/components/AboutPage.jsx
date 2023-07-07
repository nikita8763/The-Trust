import React from 'react';

const AboutPage = () => {
  const founders = [
    {
      name: 'John Doe',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lVWkqgqIXPeVEJynJDqpjlhVSZ0_xv1nKQ&usqp=CAU',
      bio: 'Co-founder & Executive Director',
    },
    {
      name: 'Jane Smith',
      image: 'https://www.hubspot.com/hubfs/%5BInvestor%20Relations%5D/IR%20Headshots/Dharmesh%20new%20headshot_2021.jpg',
      bio: 'Co-founder & Program Manager',
    },
  ];

  return (
    <section id='aboutus'>
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className='font-inter mt-8 text-center text-6xl font-medium text-blue-600'>About Us</h1>
        <div className="flex flex-wrap justify-center">
          {founders.map((founder, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-6 mt-10">
                <img
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src={founder.image}
                  alt={founder.name}
                />
                <h2 className="text-lg font-semibold mb-2">{founder.name}</h2>
                <p className="text-gray-600">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="mt-8 ml-24 mr-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            The Humsafar Trust (HST) was founded in April 1994 by journalist Ashok Row Kavi, media professional Suhail Abbasi and filmmaker Sridhar Rangayan, to reach out to LGBTQ communities in Mumbai Metro and surrounding areas. After much networking and advocacy with the Mumbai Municipal Corporation it became the first openly Gay Community Based Organisation to be allotted space in a Municipal building in Mumbai.
            <br/>
            <br/>
            The Trust began its activities by inviting gay men and lesbian women to attend its workshops on Fridays at its drop in centre. The drop in centre saw various workshops on issues of HIV/AIDS and human rights of LGBTQ and it soon became evident that the trust will have to work aggressively on the health and human rights of the community. The HIV interventions of HST are supported by National AIDS Control Organization (NACO) and Mumbai District AIDS Control Society (MDACS) to provide health services to 8500 Men who have sex with men and Transgender communities every year through Public Health Care delivery systems and its In-house clinics. In the last two decades the outreach programme has reached out to more than 110,000 Gay, Men having Sex with Men and Transgender and distributed over 700,000 condoms every year at more than 129 physical sites in Mumbai and nearly 40000 HIV tests and 70000 STIs screened and treatments provided. HST reaches out to over 10,000 gay men and men who have sex with men and transgender communities every year through its social media and online outreach programs
          </p>
        </div>
    </div>
    </section>
  );
};

export default AboutPage;
