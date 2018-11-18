const orgsDescriptions = [
  {
    'orgsName': 'socials',
    'orgsHeaderName': 'Socials',
    'description1': 'The social team is responsible for the organisation/planning of events. As a social head, your responsibilities include:',
    'responsibilities': [
      'Organising social events for the society',
      'Organising intersociety social events, which will include communication and collaboration with CSESoc, Med/Law Revue and other societies',
      'Assisting other teams in organisation of events if required',
      'Raising awareness and generating interest numbers of society',
      'Assist executive in organisation of CSE Revue camp'
    ],
    'description2': 'This will be an ongoing commitment, with an expectation of organising an event roughly every fortnight.',
    'images': [
      require('./orgspics/socials/socials_1.jpg'),
      require('./orgspics/socials/socials_2.jpg'),
      require('./orgspics/socials/socials_3.jpg')
    ]
  },
  {
    'orgsName': 'webmin',
    'orgsHeaderName': 'Webmin',
    'description1': 'The webmin head is responsible for the upkeep and creation of technology tools used for Revue. The role involves heavy web development as well as management of email systems and databases. There is no requirement of prior heavy web development skills for this role, just a desire to learn. The responsibilities for webmin include:',
    'responsibilities': [
      'Upkeep of booking system (RBS)',
      'Upkeep of management system (RMS)',
      'Managing email system',
      'Potentially involved in a redesign and reconstruction of the revue website with a more modern dev stack',
    ],
    'description2': '',
    'images': [
      require('./orgspics/webmin/webmin_1.jpg'),
    ]

  },
  {
    'orgsName': 'design',
    'orgsHeaderName': 'Design',
    'description1': 'The design team is responsible for the creation of all show related promotional materials, as well as the programme for the show. Your designs will help present the image of the show. As design head, you will be responsible for creating and organising teams for the designs. You will be responsible for working with directors to ensure designs match with their creative vision for the show. Key Responsibilities include organising a team to create:',
    'responsibilities': [
      'One A2 size poster',
      'T-shirt designs',
      'Hoodie designs',
      'A6 size flyers',
      '~24-page programme',
      'Potentially other designs that will help promote the society and the show'
    ],
    'description2': '',
    'images': [
      require('./orgspics/design/design_1.jpg'),
      require('./orgspics/design/design_2.PNG'),
      require('./orgspics/design/design_3.jpg')
    ]
  },
  {
    'orgsName': 'costumes',
    'orgsHeaderName': 'Costumes',
    'description1': 'The costumes team is responsible for crafting specialty costumes needed for show. Costumes work begins from the start of second trimester, with a heavy workload in the weeks leading up to show. As costumes head, you will need to:',
    'responsibilities': [
      'Form a reliable team of people to help create costumes',
      'Work with directors to design costumes that compliments their creative vision',
      'Delegate tasks to team members to keep everyone actively contributing',
      'Manage inventory of costumes currently in storage',
      'Obtain necessary materials whilst adhering to budget'
    ],
    'description2': '',
    'images': [
      require('./orgspics/costumes/costumes_1.jpg'),
      require('./orgspics/costumes/costumes_2.jpg'),
      require('./orgspics/costumes/costumes_3.jpg')
    ]
  },
  {
    'orgsName': 'hospitality',
    'orgsHeaderName': 'Hospitality',
    'description1': 'The hospitality team is responsible for making sure the members of our society is fed on specific dates. You will need to plan and prepare meals for 30-50 people. The responsibilities for hospitality include:',
    'responsibilities': [
      'Assist in designing a healthy menu and obtaining the necessary ingredients',
      'Organise a team to prepare, cook and serve food at:'
    ],
    'responsibilitiesSubMenu': [
      'CSE Revue camp (3 days)',
      'Tech viewings (3 Saturdays)',
      'Production week i.e. the week prior to show (5 nights)',
      'Dress run (1 night)',
      'Tech run (1 night)',
      'Show nights (3-4 nights)'
    ],
    'description2': '',
    'images': [
      require('./orgspics/wellbeing/wellbeing_1.jpg'),
      require('./orgspics/wellbeing/wellbeing_2.jpg'),
      require('./orgspics/wellbeing/wellbeing_3.jpg')
    ]
  },
  // {
  //   'orgsName': 'publicity',
  //   'orgsHeaderName': 'Publicity',
  //   'description1': 'As publicity head, you will create and organise a team to help with publications. Your main responsibilities will be to:',
  //   'responsibilities': [
  //     'Create Faceboook banners for events',
  //     'Help run CSE Revue\'s social media accounts, providing frequent updates to maintain an online presence',
  //     'Advertise events',
  //     'Find/take photos of events',
  //     'Take cast photos',
  //     'Help with the society updates and newsletters (ENGG Newsletter/CSE Email Newsletter)'
  //   ], 
  //   'description2': '',
  //   'images': [
  //     require('./orgspics/pubs/pubs_1.jpg'),
  //     require('./orgspics/pubs/pubs_2.jpg'),
  //     require('./orgspics/pubs/pubs_3.PNG')
  //   ]
  // },
  {
    'orgsName': 'foh',
    'orgsHeaderName': 'Front of House and Ticketing',
    'description1': 'The front of house and ticketing team handles the face-to-face interactions with audience members, primarily during production and show week. The FOH heads’ main responsibilities are to:',
    'responsibilities': [
      'Organise rosters for ticket selling during show nights, show week and production week',
      'Organise training to ensure your team is familiar with process of using ticketing system and happy over the course of our promotions and sales',
      'Manage the front of house and prepare foyer of theatre for welcoming audience to show',
      'Organise for snacks and refreshments to be sold to audience members on show nights',
      'Keep accurate count of ticket sales',
      'Provide those involved with show with fairy bread and drinks during intermission on show nights',
    ], 
    'description2': '',
    'images': [
    ]
  },
  {
    'orgsName': 'band',
    'orgsHeaderName': 'Band',
    'description1': 'The band is a crucial part of show, performing both band numbers (items exclusively featuring the band) and backing tracks for dances and musical items performed by cast members. As a band head, you will be responsible for:',
    'responsibilities': [
      'Holding auditions and selecting band members',
      'Organising band rehearsals',
      'Informing the arrangement heads about the requirements for band items',
      'Working with directors to prepare music for dances and speciality items',
      'Being the main point of contact for band members to keep them informed of show and any other key dates',
    ], 
    'description2': 'Band heads must be available for the following dates:',
    'responsibilities2': [
      'Band rehearsals (organised by heads)',
      'Tech run',
      'Dress run',
      'Show nights',
    ],
    'images': [
      require('./orgspics/band/band_1.jpg'),
      require('./orgspics/band/band_2.jpg'),
      require('./orgspics/band/band_3.jpg'),
    ]
  },
  {
    'orgsName': 'promotions',
    'orgsHeaderName': 'Promotions',
    'description1': 'Effective promoting is critical to getting an audience to come see show. In person promos involves a substantial proportion of society members (including all of cast) and a large concentrated effort during production week and show week. As promotions head, you will need to:',
    'responsibilities': [
      'Recruit promos team members',
      'Run training sessions teaching people how to promote.',
      'Host poster runs',
      'Organise rosters for lecture bashing and promo shifts in the weeks leading up to show',
      'Be the point of contact for people on promo shifts',
      'Be responsible for promotional equipment and supplies',
      'Organise high impact promotions',
      'Coordinate your promoting strategy with the marketing team',
    ], 
    'description2': '',
    'images': [
      require('./orgspics/promos/promos_1.jpg'),
      require('./orgspics/promos/promos_2.jpg'),
      require('./orgspics/promos/promos_3.jpg')
    ]
  },
  {
    'orgsName': 'marketing',
    'orgsHeaderName': 'Marketing',
    'description1': 'The marketing team is responsible for devising strategies to increase awareness and interest in show. You’ll manage our online presence including advertising of events and our show. The responsibilities for marketing include:',
    'responsibilities': [
      'Manage social media accounts such as facebook, instagram, and twitter.',
      'Creating interest in the society and the show throughout the year',
      'Keeping track of metrics such as online engagement, reach and growth.',
      'Coordinate your marketing strategies with the Promotions team',
    ], 
    'description2': '',
    'images': [
      // require('./orgspics/promos/promos_1.jpg'),
      // require('./orgspics/promos/promos_2.jpg'),
      // require('./orgspics/promos/promos_3.jpg')
    ]
  },
  {
    'orgsName': 'videos',
    'orgsHeaderName': 'Videos',
    'description1': 'The videos team is responsible for filming, editing and producing videos to be shown on all show nights, as well as filming show itself. Videos heads will need to:',
    'responsibilities': [
      'Work with directors to create promotional videos, as well as short video sketches for show',
      'Organise necessary equipment and filming crew',
      'Organise and direct shooting sequences',
      'Edit and produce clips with videos team',
      'Running a livestream of final show night',
    ], 
    'description2': '',
    'images': [
      require('./orgspics/videos/videos_1.jpg'),
      require('./orgspics/videos/videos_2.png'),
      require('./orgspics/videos/videos_3.jpg')
    ]
  },
  {
    'orgsName': 'scripts',
    'orgsHeaderName': 'Scripts',
    'description1': 'As scripts heads you will be working closely with directors to write sketch content for CSE Revue, by helping run scripts blocks and refining scripts in the lead up to show. Your exact duties will be to:',
    'responsibilities': [
      'Attend and help run scripts blocks',
      'Oversee and recruit scripts team members',
      'Write and edit scripts in conjunction with directors',
      'Assist directors in creating theme sketches',
      'Help directors modify and refine scripts after each tech viewing',
    ], 
    'description2': 'This role will involve consistent work across both semesters.',
    'images': [
      require('./orgspics/scripts/scripts_1.jpg'),
      require('./orgspics/scripts/scripts_2.jpg'),
      require('./orgspics/scripts/scripts_3.jpg'),
    ]
  },
  {
    'orgsName': 'vocals',
    'orgsHeaderName': 'Vocal Directors',
    'description1': 'As a vocal director, you will be responsible for teaching cast vocal items for show. Vocal directors may also have the opportunity to work one-on-one with vocal soloists to improve their singing. The responsibilities for vocal directors include:',
    'responsibilities': [
      'Working with the other vocal directors to teach cast vocal items',
      'Communicating with arrangement heads to inform them of the requirements for show items',
      'Assisting directors in casting for vocal items, including running vocal auditions',
      'Debrief with directors after each rehearsal ',
    ], 
    'description2': 'You will be required to attend at least one rehearsal per week during trimester 2, until show',
    'images': [
      require('./orgspics/vocals/vocals_1.jpg'),
      require('./orgspics/vocals/vocals_2.jpg'),
      require('./orgspics/vocals/vocals_3.jpg')
    ]
  },
  {
    'orgsName': 'choreos',
    'orgsHeaderName': 'Choreographers',
    'description1': 'As a choreographer you will be tasked with creating dance for the show. There is a possibility that you may be paired with another choreographer. The responsibilities for choreographers include:',
    'responsibilities': [
      'Creating, teaching, and refining choreography for dance items in show',
      'Working alongside directors to ensure that the choreography aligns with the vision for the show',
      'Assisting directors in casting for speciality dance items, including running dance auditions, if required',
      'Debrief with directors after each rehearsal',
    ], 
    'description2': 'You will have approximately 2 hours of rehearsal time a week to teach your dance piece over a 7-week period during trimester 2.',
    'images': [
      require('./orgspics/choreos/choreos_1.jpg'),
      require('./orgspics/choreos/choreos_2.jpg'),
      require('./orgspics/choreos/choreos_3.jpg'),
    ]
  },
  {
    'orgsName': 'vos',
    'orgsHeaderName': 'Voice Overs',
    'description1': 'Voiceovers fill the gaps between lights down and lights up whilst the stage is being set with humorous jokes and live audio content. The responsibilities for voiceovers include:',
    'responsibilities': [
      'Creating audio content and reciting it from the commentary booth during show nights',
      'Reciting sketch VOs when required',
    ], 
    'description2': 'You will be required at select show run-throughs during the weeks leading up to show.',
    'images': [
      require('./orgspics/vos/vos_1.jpg')
    ]
  },
  {
    'orgsName': 'arrangements',
    'orgsHeaderName': 'Arrangements',
    'description1': 'The arranging team is tasked with creating musical arrangements for show, to be performed by band or cast. The responsibilities for arrangers include:',
    'responsibilities': [
      'Working alongside directors to arrange music for the show',
      'Oversee and recruit arranging team members',
      'Help directors modify and refine arrangements after each tech viewing',
      'Collaborating with:',
    ], 
    'description2': '',
    'responsibilities2': [
      'Band heads and choreographers to create arrangements for dance items;',
      'Band heads to arrange musical items for band items;',
      'Vocal directors to arrange vocal items for show.',
    ],
    'images': [
    ]
  },
  {
    'orgsName': 'fx',
    'orgsHeaderName': 'Stage Effects (FX)',
    'description1': 'As the FX head you are responsible for the team that designs and builds special effects for the show. This may involve electronics projects that you will be working on in the lead up to the show. Experience with building electronics is required. Examples of past projects include the lego light boxes from the lego revue and the lightsabers from ST*R WARS. The responsibilities for FX heads include:',
    'responsibilities': [
      'Working with tech directors and directors to deliver the required effects for show',
      'Managing the FX team for projects to create effects for show',
      'Ensuring all safety requirements are met throughout the creation process',
      'Recruiting an FX team to help create effects',
    ], 
    'description2': '',
    'images': [
    ]
  }
]

export default orgsDescriptions
