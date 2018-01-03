const orgsDescriptions = [
  {
    'orgsName': 'socials',
    'orgsHeaderName': 'Socials',
    'description1': 'The social team is responsible for the organisation/planning of events. These events include BBQs, trivia nights, pub crawls, board game nights, camp, etc. As a social head, your responsibilities include:',
    'responsibilities': [
      'Organising events for the society',
      'Further intersociety events, which will include communication and collaboration with CSESoc, Med/Law Revue and other societies',
      'Assisting other teams in organisation of events if required',
      'Raising awareness and membership numbers of society',
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
    'description1': 'The design team is responsible for the creation of all show related promotional materials, as well as the programme for the show. Your designs will help present the image of the show. As design head, you will be responsible for creating and organising teams for the designs. You will be responsible for working with directors to ensure designs match with their creative vision for the show. Key Responsibilities include organising a team to create',
    'responsibilities': [
      'One A2 size poster',
      'T-shirt designs',
      'Hoodie designs',
      'A6 size flyers',
      '24-page programme',
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
    'description1': 'The costumes team is responsible for crafting specialty costumes needed for show. Costumes work begins from the start of second semester, with a heavy workload in the weeks leading up to show. As costumes head, you will need to:',
    'responsibilities': [
      'Form a reliable team of people to help create costumes',
      'Work with directors to design costumes that enhance their creative vision',
      'Delegate tasks to team members to keep everyone actively contributing',
      'Manage inventory of costumes currently in storage',
      'Obtain necessary materials whilst adhering to budget',
      'Ensure revue’s communal makeup boxes contain adequate supplies for show week'
    ],
    'description2': '',
    'images': [
      require('./orgspics/costumes/costumes_1.jpg'),
      require('./orgspics/costumes/costumes_2.jpg'),
      require('./orgspics/costumes/costumes_3.jpg')
    ]
  },
  {
    'orgsName': 'wellbeing',
    'orgsHeaderName': 'Wellbeing',
    'description1': 'The wellbeing team will be interacting mostly with cast and tech members. The wellbeing heads’ main focus is to support the mental and physical health of participants in revue. This role will require the wellbeing heads to:',
    'responsibilities': [
      'Interact with members of society',
      'Assist in designing a healthy menu and obtaining the necessary ingredients',
      'Organise a team to prepare, cook and serve food',
      'Serve food at CSE Revue camp (3 days)',
      'Serve food at Tech viewings (3 Saturdays)',
      'Serve food during Production week i.e. the week prior to show (5 nights)',
      'Serve food at Dress run (1 night)',
      'Serve food at Tech run (1 night)',
      'Serve food on Show nights (3 nights)'
    ],
    'description2': '',
    'images': [
      require('./orgspics/wellbeing/wellbeing_1.jpg'),
      require('./orgspics/wellbeing/wellbeing_2.jpg'),
    ]
  },
  {
    'orgsName': 'publicity',
    'orgsHeaderName': 'Publicity',
    'description1': 'As publicity head, you will create and organise a team to help with publications. Your main responsibilities will be to:',
    'responsibilities': [
      'Create Faceboook banners for events',
      'Help run CSE Revue\'s social media accounts, providing frequent updates to maintain an online presence',
      'Advertise events',
      'Find/take photos of events',
      'Take cast photos',
      'Help with the society updates and newsletters (ENGG Newsletter/CSE Email Newsletter)'
    ], 
    'description2': '',
    'images': [
      require('./orgspics/pubs/pubs_1.jpg'),
      require('./orgspics/pubs/pubs_2.jpg'),
      require('./orgspics/pubs/pubs_3.PNG')
    ]
  },
  {
    'orgsName': 'foh',
    'orgsHeaderName': 'Front of House and Ticketing',
    'description1': 'The front of house and ticketing team handle the face-to-face interactions with audience members, primarily during production week and show week. The FOH heads’ main responsibilities are to:',
    'responsibilities': [
      'Organise rosters for ticket selling during show nights, show week and production week',
      'Organise training to ensure your team is familiar with process of using ticketing system and happy over the course of our promotions and sales',
      'Manage the front of house and prepare foyer of theatre for welcoming audience to show',
      'Organise for snacks and refreshments to be sold to audience members on show nights',
      'Keep accurate count of ticket sales',
      'Provide those involved with show with fairy bread and drinks during intermission on show nights'
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
      'Arranging music for band to play during show',
      'Working with directors to prepare music for dances and speciality items',
      'Being the main point of contact for band members to keep them informed of show and key dates'
    ], 
    'description2': 'Band heads must be available for: Band rehearsals(organised by heads), Tech run, Dress run, show nights.',
    'images': [
      require('./orgspics/band/band_1.jpg'),
      require('./orgspics/band/band_2.jpg'),
      require('./orgspics/band/band_3.jpg'),
    ]
  },
  {
    'orgsName': 'promotions',
    'orgsHeaderName': 'Promotions',
    'description1': 'Effective promoting is critical to getting an audience to come see show. Promos involves a substantial proportion of society members (including all of cast) and a large concentrated effort during production week and show week. As promotions head, you will need to:',
    'responsibilities': [
      'Recruit promos team members',
      'Run training sessions teaching people how to promote, including how to poster, chalk, lecture bash, hand out fliers and approach people',
      'Host poster runs',
      'Organise rosters for lecture bashing and promo shifts in the weeks leading up to show',
      'Be the point of contact for people on promo shifts',
      'Keep promos crates stocked with necessary supplies',
      'Organise high impact promotions'
    ], 
    'description2': '',
    'images': [
      require('./orgspics/promos/promos_1.jpg'),
      require('./orgspics/promos/promos_2.jpg'),
      require('./orgspics/promos/promos_3.jpg')
    ]
  },
  {
    'orgsName': 'videos',
    'orgsHeaderName': 'Videos',
    'description1': 'The videos team is responsible for filming, editing and producing videos to be shown on all show nights, as well as filming show itself. Videos heads will need to:',
    'responsibilities': [
      'Work with directors to create theme reveal video, promotional videos and short video sketches for show',
      'Organise necessary equipment and filming crew',
      'Organise and direct shooting sequences',
      'Edit and produce clips with videos team',
      'Organise filming during show nights for production of final show DVD',
      'Running a livestream of final show night'
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
    'description1': 'Scripts has always been an extremely important aspect of show, however the scripts team has historically had no designated leader. This year we will be opening positions for up to two scripts heads to give the scripts team the leadership it deserves, in an effort to improve the overall quality of scripts. As scripts head you will be working closely with directors to write sketch content for CSE Revue, by helping run scripts blocks and refining scripts in the leadup to show. Your exact duties will be to:',
    'responsibilities': [
      'Attend and help run scripts blocks',
      'Oversee and recruit scripts team members',
      'Write and edit scripts in conjunction with directors',
      'Assist directors in creating theme sketches',
      'Help directors modify and refine scripts after each tech viewing'
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
    'orgsHeaderName': 'Vocals',
    'description1': 'As a vocal director, you will be responsible for teaching one part (Soprano, Alto, Tenor, or Bass) of a choral piece involving the entire cast, as well as a second acapella piece involving a smaller number of individuals. You will be needed for at least one rehearsal a week, lasting approximately 4-5 hours. At least one vocal director will need to arrange the music, so if you are able to do so, please say so in your application. Vocal directors may also have the opportunity to work one-on-one with vocal soloists to improve their singing.',
    'responsibilities': [
    ], 
    'description2': '',
    'images': [
      require('./orgspics/vocals/vocals_1.jpg'),
      require('./orgspics/vocals/vocals_2.jpg'),
      require('./orgspics/vocals/vocals_3.jpg')
    ]
  },
  {
    'orgsName': 'choreos',
    'orgsHeaderName': 'Choreographers',
    'description1': 'The role of choreographer is very rewarding for both entry level and experienced choreographers alike. You will be responsible for creating and teaching the choreo of a single dance piece, which may either involve the whole of cast, or a select subset of more rhythmically talented casties. You will have approximately 2 hours of rehearsal time a week to teach your dance piece over a 7-week period. You may choreo in a pair with someone else, given a suitable number of applicants.',
    'responsibilities': [
    ], 
    'description2': '',
    'images': [
      require('./orgspics/choreos/choreos_1.jpg'),
      require('./orgspics/choreos/choreos_2.jpg'),
      require('./orgspics/choreos/choreos_3.jpg'),
    ]
  },
  {
    'orgsName': 'vos',
    'orgsHeaderName': 'Voice Overs',
    'description1': 'Voice overs fill the gaps between lights down and lights up whilst the stage is being set with humorous jokes and live audio content. As voice overs, you will be responsible for creating this content and reciting it from the commentary booth during show nights, when prompted to by the stage director. You may also be given sketch VOs by the directors to recite at specific times during a sketch. You will be required at select show run-throughs during the weeks leading up to show.',
    'responsibilities': [
    ], 
    'description2': '',
    'images': [
      require('./orgspics/vos/vos_1.jpg')
    ]
  }

]

export default orgsDescriptions
