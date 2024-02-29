

const data =[
  {
      year: 2023,
      title: 'Software Engineer',
      company: 'Quizeet game',
      duration: 'Current',
      details: 'Assisted in building beautiful user interface for clients without compromising functionality, Learned front-end object-oriented programming to develop client server systems, Worked in agile environment with weekly stand-ups, kept track of user stories/bugs in Github projects, Pair programmed with senior engineers and reviewed teams code to provide additional perspective and catch previously missed errors, Design, develop and implement solutions to users’ needs and requirements, Review and improvise code, Run tests and fix bugs, Implemented front-end technical solutions to meet project requirements for creation of web pages. Assisted the development team in maintaining webpages.'
  },
  {
      year: 2021,
      title: 'Client Relationship Officer',
      company: 'Access Bank Plc',
      duration: '2 years',
      details: 'Conducted evaluation of client’s accounts, Initiated apt activities to ensure on time and scheduled response to customers, Provided securities details, quotes and valuations to customers, Developed and maintained professional understanding of customer base to assist customer deepening current relationships, Support to open and link new accounts on One Source, Reviewed independently all documents and link entire customer accounts to suitable relationship.'
  },
  {
      year: 2019,
      title: 'Administrative Secretary',
      company: 'Multigrace Schools',
      duration: '1 year',
      details: 'Arranged, scheduled and organized board meetings, staff meetings and other departmental meetings when required. Managed all official work such as data entry and copying, Reviewed requests to fill administrative, professional and technical positions, Monitored vacancy positions and ensure timely recruitment of candidates, Handled information requests from clients and visitors, Prepared administrative reports for the senior management teams. Maintained, managed, modifiy and updated databases effectively.'
  }
]

const Workitem = () => {
    
  return (
    <>
        {data.map((item,id) => (
              // eslint-disable-next-line react/jsx-key
           <ol className="flex flex-col md:flex-row relative border-l border-stone-300">
            <li key={id} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="inline-block px-2 py-1 font-semibold text-white bg-blue-950 rounded-md">{item.year}</span>
                <span className="text-lg font-semibold text-blue-900">{item.title}</span>
                <span className="text-lg font-semibold text-ston-400">{item.company}</span>
                <span className="my-1 text-sm font-normal leading-none text-stone-400 ">{item.duration}</span>

            </p>
            <p className="my-2 text-base font-normal text-stone-700">{item.details}</p>
        </li>
        </ol>

            ))}

    </>
  )
}

export default Workitem