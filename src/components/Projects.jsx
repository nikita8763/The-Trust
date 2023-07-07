import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='bg-gray-100 py-12'>
        <h1 className='font-inter mt-12 text-center text-6xl font-medium text-blue-600'>Projects</h1>
        <div className='pt-12 mt-8 ml-12 pl-10'>
            <h2 className='text-3xl font-bold'>Health</h2>
            <div>
                <img src='https://images.unsplash.com/photo-1676313127709-ffa38b94c545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='' className='w-86 h-72 pt-9'/>
                <div className="sm:w-2/3 sm:pl-40 ml-40 sm:text-left">
                    <p className='text-lg leading-relaxed translate-x-32 -translate-y-64 text-gray-700'>The Humsafar Trust runs three Targeted Interventions (TIs) supported by NACO-MDACS with an aim to reduce HIV/STI prevalence among Men who have Sex with Men (MSM) and TG/ Hijra communities. This projects aim at promoting safer sex practices among MSM and TG groups, improve access to government health care facilities and create enabling environment for MSM/TGs on selected sites of Mumbai district. The focus is on reducing the transmission rates and promoting access to health care and reducing stigma against MSM and TG communities. A total of 7500 MSM and TG clients have been reached out through these TIs. All three TI projects have initiated virtual outreach to tap into the social and sexual networks of clients using mobile based apps and other online platforms.</p>
                </div>
            </div>
        </div>
        <div className='ml-12 pl-10'>
        {/* <img className='translate-x-full pl-72 translate-y-' src='https://t4.ftcdn.net/jpg/05/00/84/05/360_F_500840507_Qz9P85PVqv1DAO9hiryxWDtYuLi9U9C1.jpg' alt='' /> */}
            <h2 className='text-3xl font-bold -translate-y-52'>Advocacy</h2>
            <div>
                {/* <img className='translate-x-full pl-72 -translate-y-80' src='https://t4.ftcdn.net/jpg/05/00/84/05/360_F_500840507_Qz9P85PVqv1DAO9hiryxWDtYuLi9U9C1.jpg' alt='' /> */}
                <p className='-translate-y-44 font-medium text-2xl'>Advocacy at The Humsafar Trust</p>
                <p className='text-lg leading-relaxed sm:w-2/3 -translate-y-40 text-gray-700'>Since its modest beginning in 2008, the Advocacy wing at The Humsafar Trusts has been engaging with the community at various levels. At present, the wing functions at five levels which include sensitization, community mobilisation, media relations, crisis management and policy change.</p>
                <p className='-translate-y-36 font-medium text-2xl'>Sensitization</p>
                <p className='text-lg leading-relaxed sm:w-2/3 -translate-y-32 text-gray-700'>Creating social spaces LGBTQ sensitive and inclusive is the key objective of HST’s Sensitization. As part of this initiative, the advocacy team engages with several stakeholders such as the police, the bureaucrats, policy makers, the press and the corporate sector. To enhance its outreach, the team has implemented innovative methods like organising workshops, film screenings, street plays and demonstrations.</p>           
            </div>
        </div>
    </section>
  )
}

export default Projects