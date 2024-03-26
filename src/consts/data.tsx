import { Dataset } from '../types/data';

const data: Dataset = [
  {
    lang: 'francais',
    img: 'french',
    imgFocus: 'french-focus',
    categories: [
      {
        category: 'school',
        title: 'école',
        img: 'school',
        subcategories: [
          {
            card: 'artist-position',
            title: "place de l'artiste invité·e",
            img: 'artist-position',
            text: [
              "présentation de l'artiste et de son travail à l'équipe de l'école, au personnel enseignant, aux étudiant·es",
              "association de l'artiste aux projets de l'école sur la base de ses propositions (workshops, programmes de recherche, enseignement, événements publics...)",
              "définition des responsabilités et des obligations de l'artiste vis-à- vis de l'école, du personnel enseignant, des étudiant·es"
            ]
          },
          {
            card: 'referents',
            title: '2 référents',
            img: 'referents',
            text: [
              'mise en relation avec les référents et définition de leur accompagnement',
              "1 personne de l'administration de l'école habitant l'agglomération",
              "1 professeur·e lié·e à la pratique de l'artiste"
            ]
          },
          {
            card: 'school-familiarization',
            title: 'découverte de l’école',
            img: 'school-familiarization',
            text: [
              "visite de l'établissement et explication du fonctionnement des différents bâtiments, salles et ateliers",
              "horaires et modalités d'accès",
              "règlement intérieur de l'établissement"
            ]
          },
          {
            card: 'workspace',
            title: 'espace de travail',
            img: 'workspace',
            text: [
              "accès à un ou des espaces de travail dans ou en dehors de l'école en accord avec la discipline de l'artiste et de ses besoins",
              "horaires et modalités d'accès",
              'accès à internet'
            ]
          },
          {
            card: 'equipment',
            title: 'équipements et matériel',
            img: 'equipment',
            text: [
              "horaires et modalités d'accès aux équipements et au matériel de l'école",
              "définition de la prise en charge du matériel ou des frais de production par l'école",
              'définition de la prise en charge du matériel ou des frais de production par le programme de résidence'
            ]
          }
        ]
      },
      {
        category: 'city',
        title: 'ville',
        img: 'city',
        subcategories: [
          {
            card: 'lodging',
            title: 'logement',
            img: 'lodging',
            text: [
              "mise à disposition et prise en charge par l'établissement d'accueil d'un logement meublé (logement de l'école, location appartement, accord avec une résidence...)",
              'équipement de base',
              'accès à internet',
              'souscription à une assurance habitation'
            ]
          },
          {
            card: 'city familiarization',
            title: 'découverte de la ville',
            img: 'city-familiarization',
            text: [
              'tour de la ville et de ses environs',
              "liste des adresses utiles pour l'artiste (culture, culte, bien-être, magasins...)"
            ]
          },
          {
            card: 'transport',
            title: 'transport',
            img: 'transport',
            text: [
              'types et réseaux de transports pour se déplacer dans la ville et ses environs',
              'abonnements et cartes'
            ]
          },
          {
            card: 'social-life',
            title: 'vie sociale',
            img: 'social-life',
            text: [
              "accès à un ou des espaces de travail dans ou en dehors de l'école en accord avec la discipline de l'artiste et de ses besoins"
            ]
          },
          {
            card: 'professional-activity',
            title: 'professional activity',
            img: 'professional-activity',
            text: [
              "getting to know cultural partners, institutions, associations, local artists or any other structures related to the artist's project."
            ]
          }
        ]
      },
      {
        category: 'general',
        title: 'général',
        img: 'general',
        subcategories: [
          {
            card: 'administrative-support',
            title: 'suivi administratif',
            img: 'administrative-support',
            text: [
              'montant et répartition de la bourse (modalité de payement et déclaration)',
              'affiliation aux caisses sociales et professionnelles',
              'obtention ou renouvellement du titre de séjour'
            ]
          },
          {
            card: 'bank-phone',
            title: 'banque et téléphone',
            img: 'bank-phone',
            text: [
              "ouverture d'un compte en banque et obtention d'une carte de payement (selon le statut administratif et les documents demandés : banque locale ou en ligne)",
              'souscription à un abonnement téléphonique'
            ]
          },
          {
            card: 'education',
            title: 'formation',
            img: 'education',
            text: [
              "cours de français en fonction d'un test de placement (université, association locale, cours municipal...)",
              "formations internes ou externes en fonction des besoins de l'artiste"
            ]
          },
          {
            card: 'family',
            title: 'famille',
            img: 'family',
            text: [
              "prise en compte de la composition familiale de l'artiste",
              'inscription des enfants dans un établissement scolaire ou universitaire, dans un institut spécialisé, à des activités périscolaires',
              'assistance des conjoint·es'
            ]
          },
          {
            card: 'medical-care',
            title: 'soins',
            img: 'medical-care',
            text: [
              "explication du fonctionnement de la - médecine dans le pays d'accueil",
              'médecins généralistes et spécialisés',
              'institutions et numéros d’urgence'
            ]
          }
        ]
      }
    ]
  },
  {
    lang: 'english',
    img: 'english',
    imgFocus: 'french-focus',
    categories: [
      {
        category: 'school',
        title: 'school',
        img: 'school',
        subcategories: [
          {
            card: 'artist-position',
            title: 'guest artist position',
            img: 'artist-position',
            text: [
              'presentation of the artist and his/her work to the school team, teaching staff and students',
              'participation of the artist in the school projects based on his/her proposals (workshops, research programmes, teaching, public events, etc.)',
              "defining the artist's responsibility and commitment to the school, teaching staff and students"
            ]
          },
          {
            card: 'referents',
            title: '2 referents',
            img: 'referents',
            text: [
              'contact with referents and identify their support',
              '1 person from the school administration living in an urban area',
              "1 teacher linked to the artist's practice"
            ]
          },
          {
            card: 'school-familiarization',
            title: 'school familiarization',
            img: 'school-familiarization',
            text: [
              'a tour of the school and an explanation of how the different buildings, classrooms and workshops work',
              'opening hours and access procedures',
              'school rules and regulations'
            ]
          },
          {
            card: 'workspace',
            title: 'workspace',
            img: 'workspace',
            text: [
              'access to one or more jobs in or out of school according to the discipline and needs of the artist',
              'opening hours and access arrangements',
              'access to the Internet'
            ]
          },
          {
            card: 'equipment',
            title: 'equipment and materials',
            img: 'equipment',
            text: [
              "schedule and procedure for accessing the school's equipment and materials",
              'definition of what the school will pay from material or production costs',
              'definition of what the residency programme will pay from material or production costs'
            ]
          }
        ]
      },
      {
        category: 'city',
        title: 'city',
        img: 'city',
        subcategories: [
          {
            card: 'lodging',
            title: 'lodging',
            img: 'lodging',
            text: [
              'furnished accommodation provided and paid for by the host organization (school accommodation, flat rental, hostel contract, etc.)',
              'basic equipment',
              'internet access',
              'housing insurance'
            ]
          },
          {
            card: 'city familiarization',
            title: 'city familiarization',
            img: 'city-familiarization',
            text: [
              'a tour of the city and its neighborhood',
              'list of useful addresses for the artist (culture, cult, care, shops...)'
            ]
          },
          {
            card: 'transport',
            title: 'transport',
            img: 'transport',
            text: [
              'views and networks for traveling in the city and surroundings',
              'season tickets and travel passes'
            ]
          },
          {
            card: 'social-life',
            title: 'social life',
            img: 'social-life',
            text: [
              'making contact with local residents or associations that can offer evening or weekend outings'
            ]
          },
          {
            card: 'professional-activity',
            title: 'professional activity',
            img: 'professional-activity',
            text: [
              "getting to know cultural partners, institutions, associations, local artists or any other structures related to the artist's project"
            ]
          }
        ]
      },
      {
        category: 'general',
        title: 'general',
        img: 'general',
        subcategories: [
          {
            card: 'administrative-support',
            title: 'administrative support',
            img: 'administrative-support',
            text: [
              'amount and distribution of the grant (method of payment and declaration)',
              'joining social and professional funds',
              'obtaining or extending a residence permit'
            ]
          },
          {
            card: 'bank-phone',
            title: 'bank and phone',
            img: 'bank-phone',
            text: [
              'opening a bank account and obtaining a payment card (depending on the administrative status and requested documents: local or internet bank)',
              'registration of a telephone subscription'
            ]
          },
          {
            card: 'education',
            title: 'education',
            img: 'education',
            text: [
              'French language courses based on an entrance test (university, local association, e-learning, municipal courses, etc.)',
              "internal or external training depending on the artist's needs"
            ]
          },
          {
            card: 'family',
            title: 'family',
            img: 'family',
            text: [
              "consideration of the artist's family composition",
              'enrolment of children in school or university, in a specialized institute, in extracurricular activities',
              'assistance to spouses'
            ]
          },
          {
            card: 'medical-care',
            title: 'medical care',
            img: 'medical-care',
            text: [
              'explanation of how medicine works in the host country',
              'general practitioners and specialists',
              'institutions and emergency telephone numbers'
            ]
          }
        ]
      }
    ]
  }
];

export default data;