import { Dataset } from '../types/data';

const data: Dataset = [
  {
    lang: 'français',
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
            title: 'artiste en résidence',
            img: 'artist-position',
            text: [
              "Présentation de l'artiste et de son travail,<br><em>à l'équipe de l'école, aux professeur·es, aux étudiant·es.</em><br><em>À planifier en début de séjour</em>. ",
              "Association de l'artiste aux projets de l'école,<br><em>selon les orientations de l’artiste et de l’école : workshops, programmes de recherche, enseignement, événements publics...</em>",
              "Définition du rôle et des responsabilités de l'artiste,<br><em>vis-à-vis de l'école, des professeur·es, des étudiant·es.</em>",
              'Formulation des intérêts et des intentions respectifs de l’artiste et de l’école.'
            ]
          },
          {
            card: 'referents',
            title: 'personnes référentes',
            img: 'referents',
            text: [
              "Désignation de deux personnes référentes de la résidence :<br><em>une personne de l’équipe habitant l'agglomération,</em><br><em>un·e professeur·e lié·e à la pratique de l'artiste.</em><br><em>De préférence des personnes qui partagent une langue commune avec l’artiste.</em>",
              'Mise en relation des personnes référentes avec l’artiste.',
              'Définition et paramètres de l’accompagnement des personnes référentes.'
            ]
          },
          {
            card: 'school-familiarization',
            title: "présentation de l'école",
            img: 'school-familiarization',
            text: [
              "Visite de l'établissement.",
              "Fonctionnement d'une école d'art.",
              'Explication du fonctionnement des différents bâtiments, salles et ateliers.',
              "Horaires et modalités d'accès.",
              'Règlement interne.'
            ]
          },
          {
            card: 'workspace',
            title: 'espace de travail',
            img: 'workspace',
            text: [
              "Aménagement d’un espace de travail dans ou en dehors de l'école ou facilité d’accès à un atelier,<br><em>selon le champ d’intervention artistique de l'artiste et la nature de son projet,</em><br><em>selon les ressources de l’école.</<em>",
              "Communication des horaires et des modalités d'accès.",
              'Facilité d’accès à internet.'
            ]
          },
          {
            card: 'equipment',
            title: 'équipements & matériel',
            img: 'equipment',
            text: [
              "Modalités d'accès aux équipements et au matériel de l'école.",
              "Définition du matériel ou des frais de production pris en charge par l'école.",
              'Définition du matériel ou des frais de production pris en charge par le programme de résidence.'
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
              "Facilité d’accès, aide à la recherche d'un logement,<br><em>selon les ressources locales : logement de l'école, location d’un appartement ou d’une chambre, accord avec une résidence ou une municipalité…</em><br><em>De préférence une solution meublée.</em><br>",
              'Aménagement d’un équipement de base,<br><em>par appel à don, récupération, seconde main.</em>',
              'Facilité d’accès à internet.',
              'Souscription à une assurance habitation au nom de l’artiste.'
            ]
          },
          {
            card: 'city-familiarization',
            title: 'découverte de la ville',
            img: 'city-familiarization',
            text: [
              'Organisation du tour de la ville et de ses environs,<br><em>avec l’aide de relais bénévoles</em>.',
              "Identification d’adresses utiles pour l'artiste :<br><em>culture, culte, bien-être, magasins, administrations…</em>"
            ]
          },
          {
            card: 'transport',
            title: 'transports',
            img: 'transport',
            text: [
              'Explication des modes et réseaux de transports de la ville et de ses environs.<br><em>De préférence une solution écoresponsable.</em>',
              'Informations sur les abonnements et cartes de réduction,<br><em>selon le statut administratif de l’artiste</em>.'
            ]
          },
          {
            card: 'social-life',
            title: 'vie sociale',
            img: 'social-life',
            text: [
              'Mise en lien avec des relais bénévoles :<br><em>associations locales, habitant·es.</em>',
              'Organisation de sorties en soirée ou les week-ends,<br><em>avec l’aide des relais bénévoles.</em>'
            ]
          },
          {
            card: 'professional-activity',
            title: 'vie professionnelle',
            img: 'professional-activity',
            text: [
              'Invitation à des événements artistiques et culturels.',
              "Introduction auprès de partenaires, institutions, associations<br><em>ou de toute autre entité en lien avec le projet de l'artiste.</em>",
              'Mise en relation avec d’autres artistes.'
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
              'Montant et répartition de la bourse :<br><em>modalité de paiement et déclaration.<br>Portage possible par une association tierce.</em>',
              'Affiliation aux caisses sociales et professionnelles,<br><em>avec l’aide d’une association spécialisée.</em>',
              'Obtention ou renouvellement du titre de séjour,<br><em>avec l’aide d’une association spécialisée.</em>'
            ]
          },
          {
            card: 'bank-phone',
            title: 'banque et téléphone',
            img: 'bank-phone',
            text: [
              "Ouverture d'un compte en banque, obtention d'une carte de paiement :<br><em>banque physique ou en ligne,<br>Selon le statut administratif et l’origine de l’artiste.</em>",
              'Souscription à un abonnement téléphonique.<br><em>Après ouverture d’un compte bancaire</em>.'
            ]
          },
          {
            card: 'education',
            title: 'formations',
            img: 'education',
            text: [
              'Inscription à des cours de français,<br><em>après test de placement sauf niveau débutant.<br>Ressources : universités, associations, cours municipaux, cours dispensés par l’école, enseignement en ligne…</em>',
              "Formations internes ou externes en fonction des besoins de l'artiste :<br><em>guidance, langue anglaise, formations techniques…</em>"
            ]
          },
          {
            card: 'family',
            title: 'famille',
            img: 'family',
            text: [
              "Prise en compte de la composition familiale de l'artiste :<br><em>logement approprié, aménagements horaires…</em>",
              'Scolarisation et loisirs des enfants :<br><em>inscription école, université, institut spécialisé, centre de loisir ou d’animation, conservatoire…</em>',
              'Assistance des conjoint·es,<br><em>dans la mesure du possible et selon les besoins.</em>'
            ]
          },
          {
            card: 'medical-care',
            title: 'soins',
            img: 'medical-care',
            text: [
              'Inscription à l’Assurance Maladie, à la Complémentaire santé solidaire, voire à l’Aide médicale de l’État (AME),<br><em>selon le statut administratif de l’artiste.</em>',
              'Explication du fonctionnement du système de santé et de mutuelle,<br><em>selon le statut de l’artiste et sa couverture santé.</em>',
              'Identification de médecins généralistes et spécialisés, de thérapeutes.<br><em>Expliciter les tarifications.</em>',
              'Transmission de numéros d’urgence.'
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
            title: 'artist in residence',
            img: 'artist-position',
            text: [
              'Introduction of the artist and their work<br><em>to the school team, teachers, and students.<br>To be planned at the beginning of the stay.</em>',
              'Inclusion of the artist in school projects<br><em>according to the orientations of the artist and the school: workshops, research programs, teaching, public events…</em>',
              "Definition of the artist's role and responsibilities,<br><em>toward the school, teachers, and students.</em>",
              'Expression of the respective interests and intentions of the artist and the school.'
            ]
          },
          {
            card: 'referents',
            title: 'reference persons',
            img: 'referents',
            text: [
              "Assignment of two reference persons for the residency:<br><em>one person from the team living in the urban area,<br>one teacher related to the artist's practice.<br>Preferably persons who share a common language with the artist.</em>",
              'Connection of the reference persons with the artist.',
              'Definition and parameters of the support provided by the reference persons.'
            ]
          },
          {
            card: 'school-familiarization',
            title: 'school introduction',
            img: 'school-familiarization',
            text: [
              'Tour of the facilities.',
              'Overview of how an art school operates.',
              'Explanation of the function of different buildings, rooms, and workshops.',
              'Hours and access procedures.',
              'Internal regulations.'
            ]
          },
          {
            card: 'workspace',
            title: 'workspace',
            img: 'workspace',
            text: [
              "Arrangement of a workspace inside or outside the school, or facilitated access to a studio,<br><em>depending on the artist's field of artistic practice and the nature of their project.<br>As well as the school's resources.</em>",
              "Communication of the workspace's hours and access procedures.",
              'Provision of internet access.'
            ]
          },
          {
            card: 'equipment',
            title: 'equipment & materials',
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
        title: 'city',
        img: 'city',
        subcategories: [
          {
            card: 'lodging',
            title: 'accommodation',
            img: 'lodging',
            text: [
              'Facilitation of access and assistance in finding accommodation,<br><em>based on local resources: school housing, renting an apartment or a room, agreement with a residency or municipality…<br>Preferably a furnished solution.</em>',
              'Arrangement of basic equipment,<br><em>including donations, recovery, second-hand.</em>',
              'Provision of internet access.',
              "Subscription to a homeowner's insurance in the artist's name."
            ]
          },
          {
            card: 'city-familiarization',
            title: 'city discovery',
            img: 'city-familiarization',
            text: [
              'Organization of city and surrounding area tours,<br><em>with the help of volunteer contacts.</em>',
              'Identification of useful addresses for the artist,<br><em>including cultural sites, places of worship, wellness, shops, and administrative services.</em>'
            ]
          },
          {
            card: 'transport',
            title: 'transportation',
            img: 'transport',
            text: [
              "Explanation of the city and surrounding area's modes and networks of transportation.<br><em>Preferably an eco-friendly solution.</em>",
              "Information on subscriptions and discount cards,<br><em>according to the artist's administrative status.</em>"
            ]
          },
          {
            card: 'social-life',
            title: 'social life',
            img: 'social-life',
            text: [
              'Connection with volunteer contacts,<br><em>from local associations, residents.</em>',
              'Organization of evening or weekend outing,<br><em>with the help of volunteer contacts.</em>'
            ]
          },
          {
            card: 'professional-activity',
            title: 'professional life',
            img: 'professional-activity',
            text: [
              'Invitation to artistic and cultural events.',
              "Introduction to partners, institutions, associations,<br><em>or any other entity related to the artist's project.</em>",
              'Networking with other artists.'
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
              'Amount and distribution of the grant, terms of payment and declaration.<br><em>Possible use of a third-party association.</em>',
              'Affiliation with social and professional insurance funds,<br><em>with the help of a specialized association.</em>',
              'Obtaining or renewing a residency permit,<br><em>with the help of a specialized association.</em>'
            ]
          },
          {
            card: 'bank-phone',
            title: 'bank & phone',
            img: 'bank-phone',
            text: [
              "Opening of a bank account, obtaining a payment card:<br><em>physical or online bank.<br>Depending on the artist's administrative status and origin.</em>",
              'Subscription to a telephone plan.<br><em>After opening a bank account.</em>'
            ]
          },
          {
            card: 'education',
            title: 'training',
            img: 'education',
            text: [
              'Registration for French courses,<br><em>after placement test, unless beginner level.<br>Resources: university, associations, municipal courses, school-taught courses, online education…</em>',
              'Internal or external training depending on the needs of the artist:<br><em>guidance, English language, technical training…</em>'
            ]
          },
          {
            card: 'family',
            title: 'family',
            img: 'family',
            text: [
              "Consideration of the artist's family composition,<br><em>appropriate housing, schedule arrangements…</em>",
              'Schooling and recreation for children:<br><em>registration for school, university, specialized institute, recreation or animation center, conservatory…</em>',
              'Spousal assistance,<br><em>where possible and according to needs.</em>'
            ]
          },
          {
            card: 'medical-care',
            title: 'care',
            img: 'medical-care',
            text: [
              "Registration for Healthcare (Assurance maladie), the Complementary Solidarity Health scheme, or even State Medical Aid (AME),<br><em>depending on the artist's administrative status.<br>Explanation of how the healthcare system and mutual insurance funds operate,<br>depending on the artist's status and health coverage.</em>",
              'Identification of general and specialist doctors, therapists.<br><em>Clarification of fees.</em>',
              'Provision of emergency numbers.'
            ]
          }
        ]
      }
    ]
  }
];

export default data;
