import { Dataset } from '../types/data';

const data: Dataset = [
  {
    lang: 'Français',
    img: 'french',
    imgFocus: 'french-focus',
    categories: [
      {
        category: 'school',
        title: 'École',
        img: 'school',
        subcategories: [
          {
            card: 'artist-position',
            title: "Place de l'artiste en résidence",
            img: 'artist-position',
            text: [
              "présentation de l'artiste et de son travail à l'équipe de l'école, aux professeur·es, aux étudiant·es, à prévoir en début de séjour",
              "association de l'artiste aux projets de l'école selon les orientations de l'artiste et de l'école : workshops, programmes de recherche, enseignement, événements publics...",
            ]
          },
          {
            card: 'referents',
            title: 'Personnes Référentes',
            img: 'referents',
            text: [
              "désignation de deux personnes référentes de la résidence une personne de l'équipe habitant l'agglomération un·e professeur·e lié·e à la pratique de l'artiste privilégier des personnes qui partagent une langue commune avec l'artiste",
              "mise en relation des personnes référentes avec l'artiste",
              "définition et paramètres de l'accompagnement des personnes référentes"
            ]
          },
          {
            card: 'school-familiarization',
            title: "Présentation de l'école",
            img: 'school-familiarization',
            text: [
              "fonctionnement d'une école d'art",
              "visite de l'établissement",
              'explication du fonctionnement des différents bâtiments, salles et ateliers',
              "horaires et modalités d'accès",
              "règlement intérieur de l'établissement"
            ]
          },
          {
            card: 'workspace',
            title: 'Espace de travail',
            img: 'workspace',
            text: [
              "aménagement d'un espace de travail dans ou en dehors de l'école ou facilité d'accès à un atelier selon le champ d'intervention artistique de l'artiste et la nature de son projet selon les ressources de l'école",
              "communication des horaires et des modalités d'accès",
              "facilité d'accès à internet"
            ]
          },
          {
            card: 'equipment',
            title: 'Équipements et matériel',
            img: 'equipment',
            text: [
              "modalités d'accès aux équipements et au matériel de l'école",
              "définition du matériel ou des frais de production pris en charge par l'école",
              'définition du matériel ou des frais de production pris en charge par le programme de résidence'
            ]
          }
        ]
      },
      {
        category: 'city',
        title: 'Ville',
        img: 'city',
        subcategories: [
          {
            card: 'lodging',
            title: 'Logement',
            img: 'lodging',
            text: [
              "facilité d'accès, aide à la recherche d'un logement selon les ressources locales : logement de l'école, location d'un appartement ou d'une chambre, accord avec une résidence… ; de préférence une solution meublée",
              "aménagement d'un équipement de base appel à don, récupération, seconde main",
              "facilité d'accès à internet",
              "souscription à une assurance habitation au nom de l'artiste"
            ]
          },
          {
            card: 'city-familiarization',
            title: 'Découverte de la ville',
            img: 'city-familiarization',
            text: [
              "organisation du tour de la ville et de ses environs avec l'aide de relais bénévoles",
              "identification d'adresses utiles pour l'artiste culture, culte, bien-être, magasins, administrations"
            ]
          },
          {
            card: 'transport',
            title: 'Transports',
            img: 'transport',
            text: [
              'explication des modes et réseaux de transports de la ville et de ses environs de préférence une solution écoresponsable',
              "informations sur les abonnements et cartes de réduction selon le statut administratif de l'artiste"
            ]
          },
          {
            card: 'social-life',
            title: 'Vie sociale',
            img: 'social-life',
            text: [
              'mise en lien avec des relais bénévoles associations locales, habitant·es',
              "organisation de sorties en soirée ou les week-ends avec l'aide des relais bénévoles"
            ]
          },
          {
            card: 'professional-activity',
            title: 'Vie professionnelle',
            img: 'professional-activity',
            text: [
              'invitation à des événements artistiques et culturels',
              "introduction auprès de partenaires, institutions, associations ou de toute autre entité en lien avec le projet de l'artiste",
              "mise en relation avec d'autres artistes"
            ]
          }
        ]
      },
      {
        category: 'general',
        title: 'Général',
        img: 'general',
        subcategories: [
          {
            card: 'administrative-support',
            title: 'Suivi administratif',
            img: 'administrative-support',
            text: [
              'montant et répartition de la bourse modalité de paiement et déclaration, recours à une association tiers',
              "affiliation aux caisses sociales et professionnelles avec l'aide d'une association spécialisée",
              "obtention ou renouvellement du titre de séjour avec l'aide d'une association spécialisée"
            ]
          },
          {
            card: 'bank-phone',
            title: 'Banque et Téléphone',
            img: 'bank-phone',
            text: [
              "ouverture d'un compte en banque, obtention d'une carte de paiement banque physique ou en ligne selon le statut administratif et l'origine de l'artiste",
              'souscription à un abonnement téléphonique'
            ]
          },
          {
            card: 'education',
            title: 'Formations',
            img: 'education',
            text: [
              "inscription à des cours de français après test de placement sauf niveau débutant université, associations, cours municipaux, cours dispensés par l'école, enseignement en ligne…",
              "formations internes ou externes en fonction des besoins de l'artiste guidance, langue anglais, formations techniques…"
            ]
          },
          {
            card: 'family',
            title: 'Famille',
            img: 'family',
            text: [
              "prise en compte de la composition familiale de l'artiste logement adéquat, aménagements horaires…",
              "scolarisation et loisirs des enfants inscription école, université, institut spécialisé, centre de loisir ou d'animation, conservatoire…",
              'assistance des conjoint·es dans la mesure du possible et selon les besoins'
            ]
          },
          {
            card: 'medical-care',
            title: 'Soins',
            img: 'medical-care',
            text: [
              "inscription à la Sécurité sociale, à la Complémentaire santé solidaire, voire à l'Aide médicale de l'État (AME) selon le statut administratif de l'artiste",
              "explication du fonctionnement du système de santé et de mutuelle selon le statut de l'artiste et sa couverture santé",
              'identification de médecins généralistes et spécialisés, de thérapeutes expliciter les tarifications',
            ]
          }
        ]
      }
    ]
  },
  {
    lang: 'English',
    img: 'english',
    imgFocus: 'french-focus',
    categories: [
      {
        category: 'school',
        title: 'School',
        img: 'school',
        subcategories: [
          {
            card: 'artist-position',
            title: "Artist in Residence's Role",
            img: 'artist-position',
            text: [
              'Introduction of the artist and their work to the school team, teachers, and students, planned at the beginning of the stay.',
              'Inclusion of the artist in school projects according to the orientations of the artist and the school: workshops, research programs, teaching, public events...',
            ]
          },
          {
            card: 'referents',
            title: 'Reference Persons',
            img: 'referents',
            text: [
              "Assignment of two reference persons for the residency: one person from the team living in the urban area and one teacher related to the artist's practice. Preference should be given to individuals who share a common language with the artist.",
              'Connection of the reference persons with the artist.',
              'Definition and parameters of the support provided by the reference persons.'
            ]
          },
          {
            card: 'school-familiarization',
            title: 'School Introduction',
            img: 'school-familiarization',
            text: [
              'Overview of how an art school operates.',
              'Tour of the facility.',
              'Explanation of the function of different buildings, rooms, and workshops.',
              'Hours and access procedures.',
              "The institution's internal regulations."
            ]
          },
          {
            card: 'workspace',
            title: 'Workspace',
            img: 'workspace',
            text: [
              "Arrangement of a workspace inside or outside the school, or facilitated access to a studio, depending on the artist's field of artistic intervention and the nature of their project, as well as the school's resources.",
              "Communication of the workspace's hours and access procedures.",
              'Provision of internet access.'
            ]
          },
          {
            card: 'equipment',
            title: 'Equipment and Materials',
            img: 'equipment',
            text: [
              "Procedures for accessing the school's equipment and materials.",
              'Definition of the materials or production costs covered by the school.',
              'Definition of the materials or production costs covered by the residency program.'
            ]
          }
        ]
      },
      {
        category: 'city',
        title: 'City',
        img: 'city',
        subcategories: [
          {
            card: 'lodging',
            title: 'Accommodation',
            img: 'lodging',
            text: [
              'Facilitation of access and assistance in finding accommodation based on local resources: school housing, renting an apartment or a room, agreement with a residence…; preferably a furnished solution.',
              'Arrangement of basic equipment through donations, recovery, second-hand.',
              'Provision of internet access.',
              "Subscription to a homeowner's insurance in the artist's name."
            ]
          },
          {
            card: 'city-familiarization',
            title: 'City Discovery',
            img: 'city-familiarization',
            text: [
              'Organization of city and surrounding area tours with the help of volunteer contacts.',
              'Identification of useful addresses for the artist including cultural sites, places of worship, wellness, shops, and administrative services.'
            ]
          },
          {
            card: 'transport',
            title: 'Transportation',
            img: 'transport',
            text: [
              "Explanation of the city and surrounding area's modes and networks of transportation, preferably an eco-friendly solution.",
              "Information on subscriptions and discount cards according to the artist's administrative status."
            ]
          },
          {
            card: 'social-life',
            title: 'Social Life',
            img: 'social-life',
            text: [
              'Connection with volunteer contacts from local associations, residents.',
              'Organization of evening or weekend outings with the help of volunteer contacts.'
            ]
          },
          {
            card: 'professional-activity',
            title: 'Professional Life',
            img: 'professional-activity',
            text: [
              'Invitation to artistic and cultural events.',
              "Introduction to partners, institutions, associations, or any other entity related to the artist's project.",
              'Networking with other artists.'
            ]
          }
        ]
      },
      {
        category: 'general',
        title: 'General',
        img: 'general',
        subcategories: [
          {
            card: 'administrative-support',
            title: 'Administrative Follow-up',
            img: 'administrative-support',
            text: [
              'Amount and distribution of the grant, terms of payment and declaration, use of a third-party association.',
              'Affiliation with social and professional insurance funds, with the help of a specialized association.',
              'Obtaining or renewing a residency permit, with the help of a specialized association.'
            ]
          },
          {
            card: 'bank-phone',
            title: 'Bank and Phone',
            img: 'bank-phone',
            text: [
              'Opening of a bank account, obtaining a payment card—physical or online bank—depending on the administrative status and origin of the artist.',
              'Subscription to a telephone plan.'
            ]
          },
          {
            card: 'education',
            title: 'Training',
            img: 'education',
            text: [
              'Registration for French courses after placement test, unless beginner level—university, associations, municipal courses, school-taught courses, online education…',
              'Internal or external training depending on the needs of the artist—guidance, English language, technical training…'
            ]
          },
          {
            card: 'family',
            title: 'Family',
            img: 'family',
            text: [
              "Consideration of the artist's family composition—appropriate housing, schedule arrangements…",
              'Schooling and recreation for children—registration for school, university, specialized institute, recreation or animation center, conservatory…',
              'Spousal assistance where possible and according to needs.'
            ]
          },
          {
            card: 'medical-care',
            title: 'Care',
            img: 'medical-care',
            text: [
              "Registration for Social Security, the Complementary Solidarity Health scheme, or even State Medical Aid (AME), depending on the artist's administrative status.",
              "Explanation of how the health care system and mutual insurance funds operate, depending on the artist's status and health coverage.",
              'Identification of general and specialist doctors, therapists—clarification of fees.',
            ]
          }
        ]
      }
    ]
  }
];

export default data;
