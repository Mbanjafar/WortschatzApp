(() => {
  "use strict";

  const lessons = [
  {
    "id": 1,
    "code": "Set 01",
    "title": "Wortschatz Set 1",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "ausgeben",
        "group": "l1-g1",
        "term": "ausgeben",
        "fa": "to spend; to hand out; to issue",
        "type": "verb",
        "form": "separable verb: *gibt aus – gab aus – hat ausgegeben*",
        "source": "Wortschatz.md",
        "example": "Ich gebe viel Geld für Bücher aus.",
        "exampleFa": "I spend a lot of money on books.",
        "cloze": "Ich gebe viel Geld für Bücher aus. ____",
        "clozeFa": "I spend a lot of money on books.",
        "answer": "ausgeben",
        "distractors": [
          "sich anmelden",
          "eintreffen",
          "vereinbaren"
        ],
        "typeAnswers": [
          "ausgeben",
          "ausgeben",
          "ausgeben"
        ],
        "examples": [
          {
            "de": "Ich gebe viel Geld für Bücher aus.",
            "en": "I spend a lot of money on books."
          },
          {
            "de": "Die Lehrerin gibt die Arbeitsblätter aus.",
            "en": "The teacher hands out the worksheets."
          },
          {
            "de": "Es wird kein Schlüssel ausgegeben.",
            "en": "No key is issued."
          }
        ]
      },
      {
        "id": "sich-anmelden",
        "group": "l1-g1",
        "term": "sich anmelden",
        "fa": "to register; to sign up",
        "type": "verb",
        "form": "reflexive and separable: *meldet sich an – meldete sich an – hat sich angemeldet*",
        "source": "Wortschatz.md",
        "example": "Ich melde mich für den Kurs an.",
        "exampleFa": "I am registering for the course.",
        "cloze": "Ich melde mich für den Kurs an. ____",
        "clozeFa": "I am registering for the course.",
        "answer": "sich anmelden",
        "distractors": [
          "ausgeben",
          "eintreffen",
          "vereinbaren"
        ],
        "typeAnswers": [
          "sich anmelden",
          "sich anmelden",
          "sich anmelden"
        ],
        "examples": [
          {
            "de": "Ich melde mich für den Kurs an.",
            "en": "I am registering for the course."
          },
          {
            "de": "Die angemeldeten Gäste kommen um 18 Uhr.",
            "en": "The registered guests arrive at 6 p.m."
          }
        ]
      },
      {
        "id": "eintreffen",
        "group": "l1-g1",
        "term": "eintreffen",
        "fa": "to arrive",
        "type": "verb",
        "form": "separable verb; perfect with *sein*: *trifft ein – traf ein – ist eingetroffen*",
        "source": "Wortschatz.md",
        "example": "Die Gäste treffen um 18 Uhr ein.",
        "exampleFa": "The guests arrive at 6 p.m.",
        "cloze": "Die Gäste treffen um 18 Uhr ein. ____",
        "clozeFa": "The guests arrive at 6 p.m.",
        "answer": "eintreffen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "vereinbaren"
        ],
        "typeAnswers": [
          "eintreffen",
          "eintreffen",
          "eintreffen"
        ],
        "examples": [
          {
            "de": "Die Gäste treffen um 18 Uhr ein.",
            "en": "The guests arrive at 6 p.m."
          },
          {
            "de": "Der Zug ist pünktlich eingetroffen.",
            "en": "The train arrived on time."
          }
        ]
      },
      {
        "id": "vereinbaren",
        "group": "l1-g1",
        "term": "vereinbaren",
        "fa": "to arrange; to agree on",
        "type": "verb",
        "form": "inseparable verb: *vereinbart – vereinbarte – hat vereinbart*; often *etwas mit jemandem vereinbaren*",
        "source": "Wortschatz.md",
        "example": "Ich habe einen Termin mit dem Arzt vereinbart.",
        "exampleFa": "I arranged an appointment with the doctor.",
        "cloze": "Ich habe einen Termin mit dem Arzt vereinbart. ____",
        "clozeFa": "I arranged an appointment with the doctor.",
        "answer": "vereinbaren",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "vereinbaren",
          "vereinbaren",
          "vereinbaren"
        ],
        "examples": [
          {
            "de": "Ich habe einen Termin mit dem Arzt vereinbart.",
            "en": "I arranged an appointment with the doctor."
          },
          {
            "de": "Wir vereinbaren eine spätere Ankunftszeit.",
            "en": "We agree on a later arrival time."
          }
        ]
      },
      {
        "id": "die-ankunftszeit",
        "group": "l1-g1",
        "term": "die Ankunftszeit",
        "fa": "arrival time",
        "type": "noun",
        "form": "feminine noun; plural: *die Ankunftszeiten*",
        "source": "Wortschatz.md",
        "example": "Bitte nennen Sie uns Ihre Ankunftszeit.",
        "exampleFa": "Please tell us your arrival time.",
        "cloze": "Bitte nennen Sie uns Ihre ____.",
        "clozeFa": "Please tell us your arrival time.",
        "answer": "Ankunftszeit",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Ankunftszeit",
          "Ankunftszeit",
          "Ankunftszeit"
        ],
        "examples": [
          {
            "de": "Bitte nennen Sie uns Ihre Ankunftszeit.",
            "en": "Please tell us your arrival time."
          },
          {
            "de": "Wir haben eine spätere Ankunftszeit vereinbart.",
            "en": "We arranged a later arrival time."
          }
        ]
      },
      {
        "id": "der-leiter-die-leiterin",
        "group": "l1-g1",
        "term": "der Leiter / die Leiterin",
        "fa": "manager; head; person in charge",
        "type": "noun",
        "form": "*der Leiter – die Leiter*; feminine: *die Leiterin – die Leiterinnen*",
        "source": "Wortschatz.md",
        "example": "Sprechen Sie bitte mit dem Leiter.",
        "exampleFa": "Please speak to the manager.",
        "cloze": "Sprechen Sie bitte mit dem ____.",
        "clozeFa": "Please speak to the manager.",
        "answer": "Leiter",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Leiter / die Leiterin",
          "Leiter / die Leiterin",
          "Leiter"
        ],
        "examples": [
          {
            "de": "Sprechen Sie bitte mit dem Leiter.",
            "en": "Please speak to the manager."
          },
          {
            "de": "Sie ist die Leiterin des Projekts.",
            "en": "She is the head of the project."
          }
        ]
      },
      {
        "id": "aus-gruenden",
        "group": "l1-g1",
        "term": "aus … Gründen",
        "fa": "for … reasons",
        "type": "phrase",
        "form": "*aus* + dative; plural: *aus persönlichen/hygienischen Gründen*",
        "source": "Wortschatz.md",
        "example": "Aus hygienischen Gründen ist das nicht erlaubt.",
        "exampleFa": "For hygiene reasons, that is not allowed.",
        "cloze": "Aus hygienischen ____ ist das nicht erlaubt.",
        "clozeFa": "For hygiene reasons, that is not allowed.",
        "answer": "Gründen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "aus … Gründen",
          "aus … Gründen",
          "Gründen"
        ],
        "examples": [
          {
            "de": "Aus hygienischen Gründen ist das nicht erlaubt.",
            "en": "For hygiene reasons, that is not allowed."
          },
          {
            "de": "Aus persönlichen Gründen kann sie nicht kommen.",
            "en": "She cannot come for personal reasons."
          }
        ]
      },
      {
        "id": "die-bettwaesche",
        "group": "l1-g1",
        "term": "die Bettwäsche",
        "fa": "bed linen; bedding",
        "type": "noun",
        "form": "feminine noun; normally used only in the singular",
        "source": "Wortschatz.md",
        "example": "Die Bettwäsche ist sauber.",
        "exampleFa": "The bed linen is clean.",
        "cloze": "Die ____ ist sauber.",
        "clozeFa": "The bed linen is clean.",
        "answer": "Bettwäsche",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Bettwäsche",
          "Bettwäsche",
          "Bettwäsche"
        ],
        "examples": [
          {
            "de": "Die Bettwäsche ist sauber.",
            "en": "The bed linen is clean."
          },
          {
            "de": "Bitte bringen Sie Ihre eigene Bettwäsche mit.",
            "en": "Please bring your own bedding."
          }
        ]
      },
      {
        "id": "benutzen",
        "group": "l1-g1",
        "term": "benutzen",
        "fa": "to use",
        "type": "verb",
        "form": "inseparable verb with accusative: *benutzt – benutzte – hat benutzt*",
        "source": "Wortschatz.md",
        "example": "Darf ich dieses Bett benutzen?",
        "exampleFa": "May I use this bed?",
        "cloze": "Darf ich dieses Bett ____?",
        "clozeFa": "May I use this bed?",
        "answer": "benutzen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "benutzen",
          "benutzen",
          "benutzen"
        ],
        "examples": [
          {
            "de": "Darf ich dieses Bett benutzen?",
            "en": "May I use this bed?"
          },
          {
            "de": "Die Betten dürfen nur mit Bettwäsche benutzt werden.",
            "en": "The beds may only be used with bed linen."
          }
        ]
      },
      {
        "id": "weder-noch",
        "group": "l1-g1",
        "term": "weder … noch",
        "fa": "neither … nor",
        "type": "phrase",
        "form": "connects two negative alternatives; no extra *nicht* is needed",
        "source": "Wortschatz.md",
        "example": "Ich trinke weder Kaffee noch Tee.",
        "exampleFa": "I drink neither coffee nor tea.",
        "cloze": "Ich trinke ____ Kaffee noch Tee.",
        "clozeFa": "I drink neither coffee nor tea.",
        "answer": "weder",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "weder … noch",
          "weder … noch",
          "weder"
        ],
        "examples": [
          {
            "de": "Ich trinke weder Kaffee noch Tee.",
            "en": "I drink neither coffee nor tea."
          },
          {
            "de": "Hier darf weder gekocht noch gegessen werden.",
            "en": "Neither cooking nor eating is allowed here."
          }
        ]
      },
      {
        "id": "zubereiten",
        "group": "l1-g2",
        "term": "zubereiten",
        "fa": "to prepare food",
        "type": "verb",
        "form": "separable verb with accusative: *bereitet zu – bereitete zu – hat zubereitet*",
        "source": "Wortschatz.md",
        "example": "Sie bereitet das Abendessen zu.",
        "exampleFa": "She prepares dinner.",
        "cloze": "Sie bereitet das Abendessen zu. ____",
        "clozeFa": "She prepares dinner.",
        "answer": "zubereiten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zubereiten",
          "zubereiten",
          "zubereiten"
        ],
        "examples": [
          {
            "de": "Sie bereitet das Abendessen zu.",
            "en": "She prepares dinner."
          },
          {
            "de": "Speisen dürfen hier nicht zubereitet werden.",
            "en": "Food may not be prepared here."
          }
        ]
      },
      {
        "id": "die-speise",
        "group": "l1-g2",
        "term": "die Speise",
        "fa": "dish; food",
        "type": "noun",
        "form": "feminine noun; plural: *die Speisen*",
        "source": "Wortschatz.md",
        "example": "Warme Speisen gibt es ab 12 Uhr.",
        "exampleFa": "Hot food is available from noon.",
        "cloze": "Warme ____n gibt es ab 12 Uhr.",
        "clozeFa": "Hot food is available from noon.",
        "answer": "Speise",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Speise",
          "Speise",
          "Speise"
        ],
        "examples": [
          {
            "de": "Warme Speisen gibt es ab 12 Uhr.",
            "en": "Hot food is available from noon."
          },
          {
            "de": "Diese Speise enthält Nüsse.",
            "en": "This dish contains nuts."
          }
        ]
      },
      {
        "id": "der-schlafraum",
        "group": "l1-g2",
        "term": "der Schlafraum",
        "fa": "dormitory; sleeping room",
        "type": "noun",
        "form": "masculine noun; plural: *die Schlafräume*",
        "source": "Wortschatz.md",
        "example": "Im Schlafraum muss es ruhig sein.",
        "exampleFa": "It must be quiet in the dormitory.",
        "cloze": "Im ____ muss es ruhig sein.",
        "clozeFa": "It must be quiet in the dormitory.",
        "answer": "Schlafraum",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Schlafraum",
          "Schlafraum",
          "Schlafraum"
        ],
        "examples": [
          {
            "de": "Im Schlafraum muss es ruhig sein.",
            "en": "It must be quiet in the dormitory."
          },
          {
            "de": "Speisen sind in den Schlafräumen verboten.",
            "en": "Food is forbidden in the dormitories."
          }
        ]
      },
      {
        "id": "schliessen",
        "group": "l1-g2",
        "term": "schließen",
        "fa": "to close; to lock",
        "type": "verb",
        "form": "irregular verb: *schließt – schloss – hat geschlossen*",
        "source": "Wortschatz.md",
        "example": "Die Jugendherberge schließt um 22 Uhr.",
        "exampleFa": "The youth hostel closes at 10 p.m.",
        "cloze": "Die Jugendherberge schließt um 22 Uhr. ____",
        "clozeFa": "The youth hostel closes at 10 p.m.",
        "answer": "schließen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "schließen",
          "schließen",
          "schließen"
        ],
        "examples": [
          {
            "de": "Die Jugendherberge schließt um 22 Uhr.",
            "en": "The youth hostel closes at 10 p.m."
          },
          {
            "de": "Bitte schließen Sie die Tür.",
            "en": "Please close the door."
          }
        ]
      },
      {
        "id": "der-schluessel",
        "group": "l1-g2",
        "term": "der Schlüssel",
        "fa": "key",
        "type": "noun",
        "form": "masculine noun; plural: *die Schlüssel*",
        "source": "Wortschatz.md",
        "example": "Ich habe meinen Schlüssel verloren.",
        "exampleFa": "I have lost my key.",
        "cloze": "Ich habe meinen ____ verloren.",
        "clozeFa": "I have lost my key.",
        "answer": "Schlüssel",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Schlüssel",
          "Schlüssel",
          "Schlüssel"
        ],
        "examples": [
          {
            "de": "Ich habe meinen Schlüssel verloren.",
            "en": "I have lost my key."
          },
          {
            "de": "Es wird kein Schlüssel ausgegeben.",
            "en": "No key is issued."
          }
        ]
      },
      {
        "id": "die-jugendherberge-jh",
        "group": "l1-g2",
        "term": "die Jugendherberge (JH)",
        "fa": "youth hostel",
        "type": "noun",
        "form": "feminine noun; plural: *die Jugendherbergen*; abbreviation: *JH*",
        "source": "Wortschatz.md",
        "example": "Wir übernachten in einer Jugendherberge.",
        "exampleFa": "We are staying overnight in a youth hostel.",
        "cloze": "Wir übernachten in einer ____.",
        "clozeFa": "We are staying overnight in a youth hostel.",
        "answer": "Jugendherberge",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Jugendherberge (JH)",
          "Jugendherberge (JH)",
          "Jugendherberge"
        ],
        "examples": [
          {
            "de": "Wir übernachten in einer Jugendherberge.",
            "en": "We are staying overnight in a youth hostel."
          },
          {
            "de": "Die JH schließt um 22 Uhr.",
            "en": "The youth hostel closes at 10 p.m."
          }
        ]
      },
      {
        "id": "untersagen",
        "group": "l1-g2",
        "term": "untersagen",
        "fa": "to prohibit; to forbid",
        "type": "verb",
        "form": "inseparable verb: *untersagt – untersagte – hat untersagt*; *etwas ist untersagt* = something is prohibited",
        "source": "Wortschatz.md",
        "example": "Das Rauchen ist hier untersagt.",
        "exampleFa": "Smoking is prohibited here.",
        "cloze": "Das Rauchen ist hier untersagt. ____",
        "clozeFa": "Smoking is prohibited here.",
        "answer": "untersagen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "untersagen",
          "untersagen",
          "untersagen"
        ],
        "examples": [
          {
            "de": "Das Rauchen ist hier untersagt.",
            "en": "Smoking is prohibited here."
          },
          {
            "de": "Der Zutritt ist Kindern untersagt.",
            "en": "Entry is forbidden to children."
          }
        ]
      },
      {
        "id": "sich-befinden",
        "group": "l1-g2",
        "term": "sich befinden",
        "fa": "to be located; to be situated",
        "type": "verb",
        "form": "reflexive verb: *befindet sich – befand sich – hat sich befunden*",
        "source": "Wortschatz.md",
        "example": "Die Toiletten befinden sich im Erdgeschoss.",
        "exampleFa": "The toilets are located on the ground floor.",
        "cloze": "Die Toiletten ____ sich im Erdgeschoss.",
        "clozeFa": "The toilets are located on the ground floor.",
        "answer": "befinden",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich befinden",
          "sich befinden",
          "befinden"
        ],
        "examples": [
          {
            "de": "Die Toiletten befinden sich im Erdgeschoss.",
            "en": "The toilets are located on the ground floor."
          },
          {
            "de": "Wo befindet sich der Bahnhof?",
            "en": "Where is the train station located?"
          }
        ]
      },
      {
        "id": "das-aussengelaende",
        "group": "l1-g2",
        "term": "das Außengelände",
        "fa": "outdoor area; outside grounds",
        "type": "noun",
        "form": "neuter noun; plural: *die Außengelände*",
        "source": "Wortschatz.md",
        "example": "Auf dem Außengelände darf geraucht werden.",
        "exampleFa": "Smoking is allowed in the outdoor area.",
        "cloze": "Auf dem ____ darf geraucht werden.",
        "clozeFa": "Smoking is allowed in the outdoor area.",
        "answer": "Außengelände",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Außengelände",
          "Außengelände",
          "Außengelände"
        ],
        "examples": [
          {
            "de": "Auf dem Außengelände darf geraucht werden.",
            "en": "Smoking is allowed in the outdoor area."
          },
          {
            "de": "Das Außengelände wird um 22 Uhr geschlossen.",
            "en": "The outdoor area is closed at 10 p.m."
          }
        ]
      },
      {
        "id": "der-raucherplatz",
        "group": "l1-g2",
        "term": "der Raucherplatz",
        "fa": "designated smoking area",
        "type": "noun",
        "form": "masculine noun; plural: *die Raucherplätze*",
        "source": "Wortschatz.md",
        "example": "Auf dem Außengelände gibt es Raucherplätze.",
        "exampleFa": "There are designated smoking areas outside.",
        "cloze": "Auf dem Außengelände gibt es Raucherplätze. ____",
        "clozeFa": "There are designated smoking areas outside.",
        "answer": "Raucherplatz",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Raucherplatz",
          "Raucherplatz",
          "Raucherplatz"
        ],
        "examples": [
          {
            "de": "Auf dem Außengelände gibt es Raucherplätze.",
            "en": "There are designated smoking areas outside."
          },
          {
            "de": "Bitte benutzen Sie den Raucherplatz.",
            "en": "Please use the designated smoking area."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l1-g1",
        "icon": "1",
        "title": "Words 1-10",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l1-g2",
        "icon": "2",
        "title": "Words 11-20",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 2,
    "code": "Set 02",
    "title": "Wortschatz Set 2",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "grillen",
        "group": "l2-g1",
        "term": "grillen",
        "fa": "to barbecue; to grill",
        "type": "verb",
        "form": "regular verb: *grillt – grillte – hat gegrillt*; noun: *das Grillen*",
        "source": "Wortschatz.md",
        "example": "Wir grillen heute im Garten.",
        "exampleFa": "We are having a barbecue in the garden today.",
        "cloze": "Wir ____ heute im Garten.",
        "clozeFa": "We are having a barbecue in the garden today.",
        "answer": "grillen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "grillen",
          "grillen",
          "grillen"
        ],
        "examples": [
          {
            "de": "Wir grillen heute im Garten.",
            "en": "We are having a barbecue in the garden today."
          },
          {
            "de": "Grillen ist hier nicht erlaubt.",
            "en": "Barbecuing is not allowed here."
          }
        ]
      },
      {
        "id": "das-lagerfeuer",
        "group": "l2-g1",
        "term": "das Lagerfeuer",
        "fa": "campfire",
        "type": "noun",
        "form": "neuter noun; plural: *die Lagerfeuer*",
        "source": "Wortschatz.md",
        "example": "Wir machen ein Lagerfeuer.",
        "exampleFa": "We are making a campfire.",
        "cloze": "Wir machen ein ____.",
        "clozeFa": "We are making a campfire.",
        "answer": "Lagerfeuer",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Lagerfeuer",
          "Lagerfeuer",
          "Lagerfeuer"
        ],
        "examples": [
          {
            "de": "Wir machen ein Lagerfeuer.",
            "en": "We are making a campfire."
          },
          {
            "de": "Lagerfeuer sind nur auf bestimmten Plätzen erlaubt.",
            "en": "Campfires are allowed only in designated areas."
          }
        ]
      },
      {
        "id": "fuer-etwas-vorgesehen-sein",
        "group": "l2-g1",
        "term": "für etwas vorgesehen sein",
        "fa": "to be intended/designated for something",
        "type": "phrase",
        "form": "*für* + accusative; verb: *vorsehen – sah vor – hat vorgesehen*",
        "source": "Wortschatz.md",
        "example": "Dieser Platz ist für Lagerfeuer vorgesehen.",
        "exampleFa": "This area is designated for campfires.",
        "cloze": "Dieser Platz ist für Lagerfeuer ____.",
        "clozeFa": "This area is designated for campfires.",
        "answer": "vorgesehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "für etwas vorgesehen sein",
          "für etwas vorgesehen sein",
          "vorgesehen"
        ],
        "examples": [
          {
            "de": "Dieser Platz ist für Lagerfeuer vorgesehen.",
            "en": "This area is designated for campfires."
          },
          {
            "de": "Dafür ist ein anderer Raum vorgesehen.",
            "en": "A different room is intended for that."
          }
        ]
      },
      {
        "id": "erlaubt-sein",
        "group": "l2-g1",
        "term": "erlaubt sein",
        "fa": "to be allowed; to be permitted",
        "type": "phrase",
        "form": "*sein + erlaubt*; opposite: *verboten sein*",
        "source": "Wortschatz.md",
        "example": "Grillen ist hier erlaubt.",
        "exampleFa": "Barbecuing is allowed here.",
        "cloze": "Grillen ist hier ____.",
        "clozeFa": "Barbecuing is allowed here.",
        "answer": "erlaubt",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "erlaubt sein",
          "erlaubt sein",
          "erlaubt"
        ],
        "examples": [
          {
            "de": "Grillen ist hier erlaubt.",
            "en": "Barbecuing is allowed here."
          },
          {
            "de": "Das ist nicht erlaubt.",
            "en": "That is not permitted."
          }
        ]
      },
      {
        "id": "der-konsum",
        "group": "l2-g1",
        "term": "der Konsum",
        "fa": "consumption",
        "type": "noun",
        "form": "masculine noun; usually *der Konsum von + dative*",
        "source": "Wortschatz.md",
        "example": "Der Konsum von Alkohol ist hier verboten.",
        "exampleFa": "The consumption of alcohol is prohibited here.",
        "cloze": "Der ____ von Alkohol ist hier verboten.",
        "clozeFa": "The consumption of alcohol is prohibited here.",
        "answer": "Konsum",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Konsum",
          "Konsum",
          "Konsum"
        ],
        "examples": [
          {
            "de": "Der Konsum von Alkohol ist hier verboten.",
            "en": "The consumption of alcohol is prohibited here."
          },
          {
            "de": "Sein Konsum ist stark gestiegen.",
            "en": "His consumption has increased considerably."
          }
        ]
      },
      {
        "id": "mitbringen",
        "group": "l2-g1",
        "term": "mitbringen",
        "fa": "to bring along",
        "type": "verb",
        "form": "separable verb: *bringt mit – brachte mit – hat mitgebracht*",
        "source": "Wortschatz.md",
        "example": "Bitte bringen Sie Bettwäsche mit.",
        "exampleFa": "Please bring bed linen with you.",
        "cloze": "Bitte bringen Sie Bettwäsche mit. ____",
        "clozeFa": "Please bring bed linen with you.",
        "answer": "mitbringen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "mitbringen",
          "mitbringen",
          "mitbringen"
        ],
        "examples": [
          {
            "de": "Bitte bringen Sie Bettwäsche mit.",
            "en": "Please bring bed linen with you."
          },
          {
            "de": "Mitgebrachte Getränke sind nicht erlaubt.",
            "en": "Drinks brought from outside are not allowed."
          }
        ]
      },
      {
        "id": "das-gelaende",
        "group": "l2-g1",
        "term": "das Gelände",
        "fa": "grounds; site; premises",
        "type": "noun",
        "form": "neuter noun; plural: *die Gelände*",
        "source": "Wortschatz.md",
        "example": "Rauchen ist auf dem Gelände verboten.",
        "exampleFa": "Smoking is prohibited on the premises.",
        "cloze": "Rauchen ist auf dem ____ verboten.",
        "clozeFa": "Smoking is prohibited on the premises.",
        "answer": "Gelände",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Gelände",
          "Gelände",
          "Gelände"
        ],
        "examples": [
          {
            "de": "Rauchen ist auf dem Gelände verboten.",
            "en": "Smoking is prohibited on the premises."
          },
          {
            "de": "Das Gelände gehört zur Jugendherberge.",
            "en": "The grounds belong to the youth hostel."
          }
        ]
      },
      {
        "id": "alkoholisiert",
        "group": "l2-g1",
        "term": "alkoholisiert",
        "fa": "intoxicated; under the influence of alcohol",
        "type": "adjective",
        "form": "adjective/participle; often *stark alkoholisiert sein*",
        "source": "Wortschatz.md",
        "example": "Der Fahrer war stark alkoholisiert.",
        "exampleFa": "The driver was heavily intoxicated.",
        "cloze": "Der Fahrer war stark ____.",
        "clozeFa": "The driver was heavily intoxicated.",
        "answer": "alkoholisiert",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "alkoholisiert",
          "alkoholisiert",
          "alkoholisiert"
        ],
        "examples": [
          {
            "de": "Der Fahrer war stark alkoholisiert.",
            "en": "The driver was heavily intoxicated."
          },
          {
            "de": "Alkoholisierte Gäste müssen das Gebäude verlassen.",
            "en": "Intoxicated guests must leave the building."
          }
        ]
      },
      {
        "id": "jemanden-des-hauses-verweisen",
        "group": "l2-g1",
        "term": "jemanden des Hauses verweisen",
        "fa": "to expel someone from the premises",
        "type": "phrase",
        "form": "formal expression with accusative person + genitive *des Hauses*; *verweist – verwies – hat verwiesen*",
        "source": "Wortschatz.md",
        "example": "Der Leiter verwies den Gast des Hauses.",
        "exampleFa": "The manager expelled the guest from the premises.",
        "cloze": "Der Leiter verwies den Gast des Hauses. ____",
        "clozeFa": "The manager expelled the guest from the premises.",
        "answer": "jemanden des Hauses verweisen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden des Hauses verweisen",
          "jemanden des Hauses verweisen",
          "jemanden des Hauses verweisen"
        ],
        "examples": [
          {
            "de": "Der Leiter verwies den Gast des Hauses.",
            "en": "The manager expelled the guest from the premises."
          },
          {
            "de": "Störende Gäste können des Hauses verwiesen werden.",
            "en": "Disruptive guests may be expelled from the premises."
          }
        ]
      },
      {
        "id": "gestatten",
        "group": "l2-g1",
        "term": "gestatten",
        "fa": "to permit; to allow",
        "type": "verb",
        "form": "*jemandem etwas gestatten* (dative + accusative); *gestattet – gestattete – hat gestattet*",
        "source": "Wortschatz.md",
        "example": "Tiere sind hier nicht gestattet.",
        "exampleFa": "Animals are not permitted here.",
        "cloze": "Tiere sind hier nicht gestattet. ____",
        "clozeFa": "Animals are not permitted here.",
        "answer": "gestatten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "gestatten",
          "gestatten",
          "gestatten"
        ],
        "examples": [
          {
            "de": "Tiere sind hier nicht gestattet.",
            "en": "Animals are not permitted here."
          },
          {
            "de": "Man gestattete ihm den Zutritt.",
            "en": "He was permitted entry."
          }
        ]
      },
      {
        "id": "die-ausnahme",
        "group": "l2-g2",
        "term": "die Ausnahme",
        "fa": "exception",
        "type": "noun",
        "form": "feminine noun; plural: *die Ausnahmen*",
        "source": "Wortschatz.md",
        "example": "Das ist eine Ausnahme.",
        "exampleFa": "That is an exception.",
        "cloze": "Das ist eine ____.",
        "clozeFa": "That is an exception.",
        "answer": "Ausnahme",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Ausnahme",
          "Ausnahme",
          "Ausnahme"
        ],
        "examples": [
          {
            "de": "Das ist eine Ausnahme.",
            "en": "That is an exception."
          },
          {
            "de": "In diesem Fall machen wir eine Ausnahme.",
            "en": "In this case, we will make an exception."
          }
        ]
      },
      {
        "id": "genehmigen",
        "group": "l2-g2",
        "term": "genehmigen",
        "fa": "to approve; to authorize",
        "type": "verb",
        "form": "verb with accusative: *genehmigt – genehmigte – hat genehmigt*",
        "source": "Wortschatz.md",
        "example": "Der Leiter muss die Ausnahme genehmigen.",
        "exampleFa": "The manager must approve the exception.",
        "cloze": "Der Leiter muss die Ausnahme ____.",
        "clozeFa": "The manager must approve the exception.",
        "answer": "genehmigen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "genehmigen",
          "genehmigen",
          "genehmigen"
        ],
        "examples": [
          {
            "de": "Der Leiter muss die Ausnahme genehmigen.",
            "en": "The manager must approve the exception."
          },
          {
            "de": "Mein Urlaubsantrag wurde genehmigt.",
            "en": "My leave request was approved."
          }
        ]
      },
      {
        "id": "um-mithilfe-bitten",
        "group": "l2-g2",
        "term": "um Mithilfe bitten",
        "fa": "to ask for help/cooperation",
        "type": "phrase",
        "form": "*jemanden* (accusative) + *um etwas* (accusative) bitten; *bittet – bat – hat gebeten*",
        "source": "Wortschatz.md",
        "example": "Wir bitten Sie um Mithilfe.",
        "exampleFa": "We ask for your cooperation.",
        "cloze": "Wir ____ Sie um Mithilfe.",
        "clozeFa": "We ask for your cooperation.",
        "answer": "bitten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "um Mithilfe bitten",
          "um Mithilfe bitten",
          "bitten"
        ],
        "examples": [
          {
            "de": "Wir bitten Sie um Mithilfe.",
            "en": "We ask for your cooperation."
          },
          {
            "de": "Sie bat mich um Hilfe.",
            "en": "She asked me for help."
          }
        ]
      },
      {
        "id": "der-aufenthalt",
        "group": "l2-g2",
        "term": "der Aufenthalt",
        "fa": "stay",
        "type": "noun",
        "form": "masculine noun; plural: *die Aufenthalte*",
        "source": "Wortschatz.md",
        "example": "Während Ihres Aufenthaltes gelten diese Regeln.",
        "exampleFa": "These rules apply during your stay.",
        "cloze": "Während Ihres ____es gelten diese Regeln.",
        "clozeFa": "These rules apply during your stay.",
        "answer": "Aufenthalt",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Aufenthalt",
          "Aufenthalt",
          "Aufenthalt"
        ],
        "examples": [
          {
            "de": "Während Ihres Aufenthaltes gelten diese Regeln.",
            "en": "These rules apply during your stay."
          },
          {
            "de": "Wir wünschen Ihnen einen angenehmen Aufenthalt.",
            "en": "We wish you a pleasant stay."
          }
        ]
      },
      {
        "id": "dazugehoeren",
        "group": "l2-g2",
        "term": "dazugehören",
        "fa": "to belong to; to be included",
        "type": "verb",
        "form": "separable verb: *gehört dazu – gehörte dazu – hat dazugehört*; often *Dazu gehört, dass …*",
        "source": "Wortschatz.md",
        "example": "Frühstück gehört zum Preis dazu.",
        "exampleFa": "Breakfast is included in the price.",
        "cloze": "Frühstück gehört zum Preis dazu. ____",
        "clozeFa": "Breakfast is included in the price.",
        "answer": "dazugehören",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "dazugehören",
          "dazugehören",
          "dazugehören"
        ],
        "examples": [
          {
            "de": "Frühstück gehört zum Preis dazu.",
            "en": "Breakfast is included in the price."
          },
          {
            "de": "Dazu gehört, dass alle mithelfen.",
            "en": "This includes everyone helping."
          }
        ]
      },
      {
        "id": "etwas-in-ordnung-halten",
        "group": "l2-g2",
        "term": "etwas in Ordnung halten",
        "fa": "to keep something tidy/in order",
        "type": "phrase",
        "form": "accusative object; *hält – hielt – hat gehalten*",
        "source": "Wortschatz.md",
        "example": "Bitte halten Sie den Raum in Ordnung.",
        "exampleFa": "Please keep the room tidy.",
        "cloze": "Bitte ____ Sie den Raum in Ordnung.",
        "clozeFa": "Please keep the room tidy.",
        "answer": "halten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "etwas in Ordnung halten",
          "etwas in Ordnung halten",
          "halten"
        ],
        "examples": [
          {
            "de": "Bitte halten Sie den Raum in Ordnung.",
            "en": "Please keep the room tidy."
          },
          {
            "de": "Wir müssen die Geräte in Ordnung halten.",
            "en": "We must keep the equipment in order."
          }
        ]
      },
      {
        "id": "sich-einer-sache-verpflichten",
        "group": "l2-g2",
        "term": "sich einer Sache verpflichten",
        "fa": "to commit oneself to something",
        "type": "phrase",
        "form": "reflexive verb + dative; also *sich zu etwas verpflichten*",
        "source": "Wortschatz.md",
        "example": "Die Jugendherbergen haben sich dem Umweltschutz verpflichtet.",
        "exampleFa": "The youth hostels have committed themselves to environmental protection.",
        "cloze": "Die Jugendherbergen haben sich dem Umweltschutz verpflichtet. ____",
        "clozeFa": "The youth hostels have committed themselves to environmental protection.",
        "answer": "sich einer Sache verpflichten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich einer Sache verpflichten",
          "sich einer Sache verpflichten",
          "sich einer Sache verpflichten"
        ],
        "examples": [
          {
            "de": "Die Jugendherbergen haben sich dem Umweltschutz verpflichtet.",
            "en": "The youth hostels have committed themselves to environmental protection."
          },
          {
            "de": "Er hat sich zur Mitarbeit verpflichtet.",
            "en": "He committed himself to helping."
          }
        ]
      },
      {
        "id": "muell-trennen",
        "group": "l2-g2",
        "term": "Müll trennen",
        "fa": "to separate/sort waste",
        "type": "phrase",
        "form": "*der Müll* is normally singular; *Müll* is the accusative object",
        "source": "Wortschatz.md",
        "example": "Bitte trennen Sie den Müll.",
        "exampleFa": "Please sort the waste.",
        "cloze": "Bitte ____ Sie den Müll.",
        "clozeFa": "Please sort the waste.",
        "answer": "trennen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Müll trennen",
          "Müll trennen",
          "trennen"
        ],
        "examples": [
          {
            "de": "Bitte trennen Sie den Müll.",
            "en": "Please sort the waste."
          },
          {
            "de": "Wir trennen Papier, Glas und Plastik.",
            "en": "We separate paper, glass, and plastic."
          }
        ]
      },
      {
        "id": "mit-etwas-sparsam-umgehen",
        "group": "l2-g2",
        "term": "mit etwas sparsam umgehen",
        "fa": "to use something sparingly",
        "type": "phrase",
        "form": "*mit* + dative; separable verb: *geht um – ging um – ist umgegangen*",
        "source": "Wortschatz.md",
        "example": "Gehen Sie bitte sparsam mit Wasser um.",
        "exampleFa": "Please use water sparingly.",
        "cloze": "Gehen Sie bitte sparsam mit Wasser um. ____",
        "clozeFa": "Please use water sparingly.",
        "answer": "mit etwas sparsam umgehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "mit etwas sparsam umgehen",
          "mit etwas sparsam umgehen",
          "mit etwas sparsam umgehen"
        ],
        "examples": [
          {
            "de": "Gehen Sie bitte sparsam mit Wasser um.",
            "en": "Please use water sparingly."
          },
          {
            "de": "Wir müssen mit Energie sparsam umgehen.",
            "en": "We must use energy sparingly."
          }
        ]
      },
      {
        "id": "ruecksicht-auf-jemanden-nehmen",
        "group": "l2-g2",
        "term": "Rücksicht auf jemanden nehmen",
        "fa": "to show consideration for someone",
        "type": "phrase",
        "form": "*auf* + accusative; *nimmt – nahm – hat genommen*",
        "source": "Wortschatz.md",
        "example": "Bitte nehmen Sie Rücksicht auf andere Gäste.",
        "exampleFa": "Please show consideration for other guests.",
        "cloze": "Bitte nehmen Sie Rücksicht auf andere Gäste. ____",
        "clozeFa": "Please show consideration for other guests.",
        "answer": "Rücksicht auf jemanden nehmen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Rücksicht auf jemanden nehmen",
          "Rücksicht auf jemanden nehmen",
          "Rücksicht auf jemanden nehmen"
        ],
        "examples": [
          {
            "de": "Bitte nehmen Sie Rücksicht auf andere Gäste.",
            "en": "Please show consideration for other guests."
          },
          {
            "de": "Autofahrer müssen auf Fußgänger Rücksicht nehmen.",
            "en": "Drivers must consider pedestrians."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l2-g1",
        "icon": "1",
        "title": "Words 21-30",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l2-g2",
        "icon": "2",
        "title": "Words 31-40",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 3,
    "code": "Set 03",
    "title": "Wortschatz Set 3",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "die-abreise",
        "group": "l3-g1",
        "term": "die Abreise",
        "fa": "departure",
        "type": "noun",
        "form": "feminine noun; plural: *die Abreisen*",
        "source": "Wortschatz.md",
        "example": "Die Abreise ist bis 10 Uhr möglich.",
        "exampleFa": "Departure is possible until 10 a.m.",
        "cloze": "Die ____ ist bis 10 Uhr möglich.",
        "clozeFa": "Departure is possible until 10 a.m.",
        "answer": "Abreise",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Abreise",
          "Abreise",
          "Abreise"
        ],
        "examples": [
          {
            "de": "Die Abreise ist bis 10 Uhr möglich.",
            "en": "Departure is possible until 10 a.m."
          },
          {
            "de": "Wann ist Ihre Abreise?",
            "en": "When is your departure?"
          }
        ]
      },
      {
        "id": "raeumen",
        "group": "l3-g1",
        "term": "räumen",
        "fa": "to vacate; to clear",
        "type": "verb",
        "form": "regular verb with accusative: *räumt – räumte – hat geräumt*",
        "source": "Wortschatz.md",
        "example": "Die Gäste müssen das Zimmer räumen.",
        "exampleFa": "The guests must vacate the room.",
        "cloze": "Die Gäste müssen das Zimmer ____.",
        "clozeFa": "The guests must vacate the room.",
        "answer": "räumen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "räumen",
          "räumen",
          "räumen"
        ],
        "examples": [
          {
            "de": "Die Gäste müssen das Zimmer räumen.",
            "en": "The guests must vacate the room."
          },
          {
            "de": "Der Raum muss bis 10 Uhr geräumt sein.",
            "en": "The room must be vacated by 10 a.m."
          }
        ]
      },
      {
        "id": "abziehen",
        "group": "l3-g1",
        "term": "abziehen",
        "fa": "to remove; to strip off",
        "type": "verb",
        "form": "separable verb: *zieht ab – zog ab – hat abgezogen*",
        "source": "Wortschatz.md",
        "example": "Bitte ziehen Sie die Bettwäsche ab.",
        "exampleFa": "Please strip the bed linen.",
        "cloze": "Bitte ziehen Sie die Bettwäsche ab. ____",
        "clozeFa": "Please strip the bed linen.",
        "answer": "abziehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "abziehen",
          "abziehen",
          "abziehen"
        ],
        "examples": [
          {
            "de": "Bitte ziehen Sie die Bettwäsche ab.",
            "en": "Please strip the bed linen."
          },
          {
            "de": "Er zieht die Schutzfolie ab.",
            "en": "He removes the protective film."
          }
        ]
      },
      {
        "id": "ablegen",
        "group": "l3-g1",
        "term": "ablegen",
        "fa": "to put down; to leave in a specified place",
        "type": "verb",
        "form": "separable verb: *legt ab – legte ab – hat abgelegt*",
        "source": "Wortschatz.md",
        "example": "Legen Sie die Bettwäsche im Foyer ab.",
        "exampleFa": "Leave the bed linen in the foyer.",
        "cloze": "Legen Sie die Bettwäsche im Foyer ab. ____",
        "clozeFa": "Leave the bed linen in the foyer.",
        "answer": "ablegen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ablegen",
          "ablegen",
          "ablegen"
        ],
        "examples": [
          {
            "de": "Legen Sie die Bettwäsche im Foyer ab.",
            "en": "Leave the bed linen in the foyer."
          },
          {
            "de": "Sie legte ihre Tasche auf dem Tisch ab.",
            "en": "She put her bag down on the table."
          }
        ]
      },
      {
        "id": "abgeben",
        "group": "l3-g1",
        "term": "abgeben",
        "fa": "to hand in; to return",
        "type": "verb",
        "form": "separable verb: *gibt ab – gab ab – hat abgegeben*",
        "source": "Wortschatz.md",
        "example": "Geben Sie den Schlüssel an der Rezeption ab.",
        "exampleFa": "Return the key at reception.",
        "cloze": "Geben Sie den Schlüssel an der Rezeption ab. ____",
        "clozeFa": "Return the key at reception.",
        "answer": "abgeben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "abgeben",
          "abgeben",
          "abgeben"
        ],
        "examples": [
          {
            "de": "Geben Sie den Schlüssel an der Rezeption ab.",
            "en": "Return the key at reception."
          },
          {
            "de": "Ich muss den Antrag morgen abgeben.",
            "en": "I must submit the application tomorrow."
          }
        ]
      },
      {
        "id": "grundsaetzlich",
        "group": "l3-g1",
        "term": "grundsätzlich",
        "fa": "generally; as a rule; in principle",
        "type": "verb",
        "form": "adverb; its exact meaning depends on context",
        "source": "Wortschatz.md",
        "example": "Der Schlüssel ist grundsätzlich abzugeben.",
        "exampleFa": "As a rule, the key must be returned.",
        "cloze": "Der Schlüssel ist ____ abzugeben.",
        "clozeFa": "As a rule, the key must be returned.",
        "answer": "grundsätzlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "grundsätzlich",
          "grundsätzlich",
          "grundsätzlich"
        ],
        "examples": [
          {
            "de": "Der Schlüssel ist grundsätzlich abzugeben.",
            "en": "As a rule, the key must be returned."
          },
          {
            "de": "Grundsätzlich bin ich damit einverstanden.",
            "en": "In principle, I agree with that."
          }
        ]
      },
      {
        "id": "die-schuhe-ausziehen",
        "group": "l3-g1",
        "term": "die Schuhe ausziehen",
        "fa": "to take off one’s shoes",
        "type": "noun",
        "form": "separable verb with accusative: *zieht aus – zog aus – hat ausgezogen*",
        "source": "Wortschatz.md",
        "example": "Bitte ziehen Sie Ihre Schuhe aus.",
        "exampleFa": "Please take off your shoes.",
        "cloze": "Bitte ziehen Sie Ihre Schuhe aus. ____",
        "clozeFa": "Please take off your shoes.",
        "answer": "Schuhe ausziehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Schuhe ausziehen",
          "Schuhe ausziehen",
          "Schuhe ausziehen"
        ],
        "examples": [
          {
            "de": "Bitte ziehen Sie Ihre Schuhe aus.",
            "en": "Please take off your shoes."
          },
          {
            "de": "Ich habe meine Schuhe ausgezogen.",
            "en": "I took off my shoes."
          }
        ]
      },
      {
        "id": "zu-besuch-sein",
        "group": "l3-g1",
        "term": "zu Besuch sein",
        "fa": "to be visiting; to be a guest",
        "type": "phrase",
        "form": "often *bei jemandem* + dative",
        "source": "Wortschatz.md",
        "example": "Wir sind bei Freunden zu Besuch.",
        "exampleFa": "We are visiting friends.",
        "cloze": "Wir sind bei Freunden ____ Besuch.",
        "clozeFa": "We are visiting friends.",
        "answer": "zu",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zu Besuch sein",
          "zu Besuch sein",
          "zu"
        ],
        "examples": [
          {
            "de": "Wir sind bei Freunden zu Besuch.",
            "en": "We are visiting friends."
          },
          {
            "de": "Wenn ich zu Besuch bin, bringe ich etwas mit.",
            "en": "When I am a guest, I bring something."
          }
        ]
      },
      {
        "id": "irgendwo",
        "group": "l3-g1",
        "term": "irgendwo",
        "fa": "somewhere; anywhere",
        "type": "verb",
        "form": "indefinite adverb of place",
        "source": "Wortschatz.md",
        "example": "Ich habe den Schlüssel irgendwo hingelegt.",
        "exampleFa": "I put the key somewhere.",
        "cloze": "Ich habe den Schlüssel ____ hingelegt.",
        "clozeFa": "I put the key somewhere.",
        "answer": "irgendwo",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "irgendwo",
          "irgendwo",
          "irgendwo"
        ],
        "examples": [
          {
            "de": "Ich habe den Schlüssel irgendwo hingelegt.",
            "en": "I put the key somewhere."
          },
          {
            "de": "Gibt es hier irgendwo eine Apotheke?",
            "en": "Is there a pharmacy anywhere near here?"
          }
        ]
      },
      {
        "id": "jemanden-nach-etwas-fragen",
        "group": "l3-g1",
        "term": "jemanden nach etwas fragen",
        "fa": "to ask someone about something",
        "type": "phrase",
        "form": "person in accusative + *nach* + dative; *fragt – fragte – hat gefragt*",
        "source": "Wortschatz.md",
        "example": "Er fragte die Leute nach ihrem Gehalt.",
        "exampleFa": "He asked the people about their salary.",
        "cloze": "Er fragte die Leute nach ihrem Gehalt. ____",
        "clozeFa": "He asked the people about their salary.",
        "answer": "jemanden nach etwas fragen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden nach etwas fragen",
          "jemanden nach etwas fragen",
          "jemanden nach etwas fragen"
        ],
        "examples": [
          {
            "de": "Er fragte die Leute nach ihrem Gehalt.",
            "en": "He asked the people about their salary."
          },
          {
            "de": "Sie fragte mich nach meiner Meinung.",
            "en": "She asked me for my opinion."
          }
        ]
      },
      {
        "id": "das-gehalt",
        "group": "l3-g2",
        "term": "das Gehalt",
        "fa": "salary",
        "type": "noun",
        "form": "neuter noun; plural: *die Gehälter*",
        "source": "Wortschatz.md",
        "example": "Über sein Gehalt spricht er nicht.",
        "exampleFa": "He does not talk about his salary.",
        "cloze": "Über sein ____ spricht er nicht.",
        "clozeFa": "He does not talk about his salary.",
        "answer": "Gehalt",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Gehalt",
          "Gehalt",
          "Gehalt"
        ],
        "examples": [
          {
            "de": "Über sein Gehalt spricht er nicht.",
            "en": "He does not talk about his salary."
          },
          {
            "de": "Sie bekommt ein gutes Gehalt.",
            "en": "She receives a good salary."
          }
        ]
      },
      {
        "id": "die-miete",
        "group": "l3-g2",
        "term": "die Miete",
        "fa": "rent",
        "type": "noun",
        "form": "feminine noun; plural: *die Mieten*",
        "source": "Wortschatz.md",
        "example": "Wie viel Miete zahlst du?",
        "exampleFa": "How much rent do you pay?",
        "cloze": "Wie viel ____ zahlst du?",
        "clozeFa": "How much rent do you pay?",
        "answer": "Miete",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Miete",
          "Miete",
          "Miete"
        ],
        "examples": [
          {
            "de": "Wie viel Miete zahlst du?",
            "en": "How much rent do you pay?"
          },
          {
            "de": "Die Miete ist gestiegen.",
            "en": "The rent has increased."
          }
        ]
      },
      {
        "id": "ueber-etwas-sprechen",
        "group": "l3-g2",
        "term": "über etwas sprechen",
        "fa": "to talk about something",
        "type": "phrase",
        "form": "*über* + accusative; *spricht – sprach – hat gesprochen*",
        "source": "Wortschatz.md",
        "example": "Wir sprechen über Geld.",
        "exampleFa": "We are talking about money.",
        "cloze": "Wir ____ über Geld.",
        "clozeFa": "We are talking about money.",
        "answer": "sprechen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "über etwas sprechen",
          "über etwas sprechen",
          "sprechen"
        ],
        "examples": [
          {
            "de": "Wir sprechen über Geld.",
            "en": "We are talking about money."
          },
          {
            "de": "Darüber möchte ich nicht sprechen.",
            "en": "I do not want to talk about that."
          }
        ]
      },
      {
        "id": "der-gespraechspartner-die-gespraechspartnerin",
        "group": "l3-g2",
        "term": "der Gesprächspartner / die Gesprächspartnerin",
        "fa": "conversation partner; person you are speaking to",
        "type": "noun",
        "form": "masculine plural: *die Gesprächspartner*; feminine plural: *die Gesprächspartnerinnen*",
        "source": "Wortschatz.md",
        "example": "Ich kenne meinen Gesprächspartner gut.",
        "exampleFa": "I know the person I am speaking to well.",
        "cloze": "Ich kenne meinen ____ gut.",
        "clozeFa": "I know the person I am speaking to well.",
        "answer": "Gesprächspartner",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Gesprächspartner / die Gesprächspartnerin",
          "Gesprächspartner / die Gesprächspartnerin",
          "Gesprächspartner"
        ],
        "examples": [
          {
            "de": "Ich kenne meinen Gesprächspartner gut.",
            "en": "I know the person I am speaking to well."
          },
          {
            "de": "Hören Sie Ihrem Gesprächspartner aufmerksam zu.",
            "en": "Listen carefully to the person you are speaking to."
          }
        ]
      },
      {
        "id": "voellig",
        "group": "l3-g2",
        "term": "völlig",
        "fa": "completely; entirely",
        "type": "verb",
        "form": "adverb; strengthens an adjective or statement",
        "source": "Wortschatz.md",
        "example": "Das ist völlig normal.",
        "exampleFa": "That is completely normal.",
        "cloze": "Das ist ____ normal.",
        "clozeFa": "That is completely normal.",
        "answer": "völlig",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "völlig",
          "völlig",
          "völlig"
        ],
        "examples": [
          {
            "de": "Das ist völlig normal.",
            "en": "That is completely normal."
          },
          {
            "de": "Ich bin völlig anderer Meinung.",
            "en": "I completely disagree."
          }
        ]
      },
      {
        "id": "die-trennung",
        "group": "l3-g2",
        "term": "die Trennung",
        "fa": "separation; distinction",
        "type": "noun",
        "form": "feminine noun; plural: *die Trennungen*; often *die Trennung zwischen + dative*",
        "source": "Wortschatz.md",
        "example": "Die Trennung zwischen Arbeit und Freizeit ist wichtig.",
        "exampleFa": "The distinction between work and leisure is important.",
        "cloze": "Die ____ zwischen Arbeit und Freizeit ist wichtig.",
        "clozeFa": "The distinction between work and leisure is important.",
        "answer": "Trennung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Trennung",
          "Trennung",
          "Trennung"
        ],
        "examples": [
          {
            "de": "Die Trennung zwischen Arbeit und Freizeit ist wichtig.",
            "en": "The distinction between work and leisure is important."
          },
          {
            "de": "Nach der Trennung zog er um.",
            "en": "He moved after the separation."
          }
        ]
      },
      {
        "id": "beruflich",
        "group": "l3-g2",
        "term": "beruflich",
        "fa": "professional; work-related; professionally",
        "type": "verb",
        "form": "adjective/adverb; opposite: *privat*",
        "source": "Wortschatz.md",
        "example": "Wir haben nur beruflichen Kontakt.",
        "exampleFa": "We only have professional contact.",
        "cloze": "Wir haben nur ____en Kontakt.",
        "clozeFa": "We only have professional contact.",
        "answer": "beruflich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "beruflich",
          "beruflich",
          "beruflich"
        ],
        "examples": [
          {
            "de": "Wir haben nur beruflichen Kontakt.",
            "en": "We only have professional contact."
          },
          {
            "de": "Ich bin beruflich viel unterwegs.",
            "en": "I travel a lot for work."
          }
        ]
      },
      {
        "id": "streng",
        "group": "l3-g2",
        "term": "streng",
        "fa": "strict; severe",
        "type": "adjective",
        "form": "adjective; comparative: *strenger*; superlative: *am strengsten*",
        "source": "Wortschatz.md",
        "example": "Die Regeln sind sehr streng.",
        "exampleFa": "The rules are very strict.",
        "cloze": "Die Regeln sind sehr ____.",
        "clozeFa": "The rules are very strict.",
        "answer": "streng",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "streng",
          "streng",
          "streng"
        ],
        "examples": [
          {
            "de": "Die Regeln sind sehr streng.",
            "en": "The rules are very strict."
          },
          {
            "de": "Die Trennung ist nicht so streng wie früher.",
            "en": "The distinction is not as strict as before."
          }
        ]
      },
      {
        "id": "etwas-falsch-machen",
        "group": "l3-g2",
        "term": "etwas falsch machen",
        "fa": "to do something wrong",
        "type": "phrase",
        "form": "accusative object; *macht – machte – hat gemacht*",
        "source": "Wortschatz.md",
        "example": "Ich habe etwas falsch gemacht.",
        "exampleFa": "I did something wrong.",
        "cloze": "Ich habe etwas falsch gemacht. ____",
        "clozeFa": "I did something wrong.",
        "answer": "etwas falsch machen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "etwas falsch machen",
          "etwas falsch machen",
          "etwas falsch machen"
        ],
        "examples": [
          {
            "de": "Ich habe etwas falsch gemacht.",
            "en": "I did something wrong."
          },
          {
            "de": "Keine Sorge, du machst nichts falsch.",
            "en": "Don’t worry, you are not doing anything wrong."
          }
        ]
      },
      {
        "id": "das-abendessen",
        "group": "l3-g2",
        "term": "das Abendessen",
        "fa": "dinner; evening meal",
        "type": "noun",
        "form": "neuter noun; *beim Abendessen* = during/at dinner",
        "source": "Wortschatz.md",
        "example": "Beim Abendessen trinken wir Wasser.",
        "exampleFa": "We drink water with dinner.",
        "cloze": "Beim ____ trinken wir Wasser.",
        "clozeFa": "We drink water with dinner.",
        "answer": "Abendessen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Abendessen",
          "Abendessen",
          "Abendessen"
        ],
        "examples": [
          {
            "de": "Beim Abendessen trinken wir Wasser.",
            "en": "We drink water with dinner."
          },
          {
            "de": "Das Abendessen ist um 19 Uhr.",
            "en": "Dinner is at 7 p.m."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l3-g1",
        "icon": "1",
        "title": "Words 41-50",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l3-g2",
        "icon": "2",
        "title": "Words 51-60",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 4,
    "code": "Set 04",
    "title": "Wortschatz Set 4",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "die-vorspeise",
        "group": "l4-g1",
        "term": "die Vorspeise",
        "fa": "starter; appetizer",
        "type": "noun",
        "form": "feminine noun; plural: *die Vorspeisen*",
        "source": "Wortschatz.md",
        "example": "Als Vorspeise nehme ich eine Suppe.",
        "exampleFa": "I’ll have soup as a starter.",
        "cloze": "Als ____ nehme ich eine Suppe.",
        "clozeFa": "I’ll have soup as a starter.",
        "answer": "Vorspeise",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Vorspeise",
          "Vorspeise",
          "Vorspeise"
        ],
        "examples": [
          {
            "de": "Als Vorspeise nehme ich eine Suppe.",
            "en": "I’ll have soup as a starter."
          },
          {
            "de": "Sie hat zu viel von der Vorspeise gegessen.",
            "en": "She ate too much of the starter."
          }
        ]
      },
      {
        "id": "aus-etwas-bestehen",
        "group": "l4-g1",
        "term": "aus etwas bestehen",
        "fa": "to consist of something",
        "type": "phrase",
        "form": "*aus* + dative; *besteht – bestand – hat bestanden*",
        "source": "Wortschatz.md",
        "example": "Das Essen besteht aus drei Gängen.",
        "exampleFa": "The meal consists of three courses.",
        "cloze": "Das Essen besteht aus drei Gängen. ____",
        "clozeFa": "The meal consists of three courses.",
        "answer": "aus etwas bestehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "aus etwas bestehen",
          "aus etwas bestehen",
          "aus etwas bestehen"
        ],
        "examples": [
          {
            "de": "Das Essen besteht aus drei Gängen.",
            "en": "The meal consists of three courses."
          },
          {
            "de": "Das Team besteht aus fünf Personen.",
            "en": "The team consists of five people."
          }
        ]
      },
      {
        "id": "der-gang",
        "group": "l4-g1",
        "term": "der Gang",
        "fa": "course (of a meal)",
        "type": "noun",
        "form": "masculine noun; plural: *die Gänge*",
        "source": "Wortschatz.md",
        "example": "Das Menü hat drei Gänge.",
        "exampleFa": "The menu has three courses.",
        "cloze": "Das Menü hat drei Gänge. ____",
        "clozeFa": "The menu has three courses.",
        "answer": "Gang",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Gang",
          "Gang",
          "Gang"
        ],
        "examples": [
          {
            "de": "Das Menü hat drei Gänge.",
            "en": "The menu has three courses."
          },
          {
            "de": "Der Nachtisch ist der letzte Gang.",
            "en": "Dessert is the final course."
          }
        ]
      },
      {
        "id": "der-nachtisch",
        "group": "l4-g1",
        "term": "der Nachtisch",
        "fa": "dessert",
        "type": "noun",
        "form": "masculine noun; plural: *die Nachtische*",
        "source": "Wortschatz.md",
        "example": "Zum Nachtisch gibt es Eis.",
        "exampleFa": "There is ice cream for dessert.",
        "cloze": "Zum ____ gibt es Eis.",
        "clozeFa": "There is ice cream for dessert.",
        "answer": "Nachtisch",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Nachtisch",
          "Nachtisch",
          "Nachtisch"
        ],
        "examples": [
          {
            "de": "Zum Nachtisch gibt es Eis.",
            "en": "There is ice cream for dessert."
          },
          {
            "de": "Möchtest du einen Nachtisch?",
            "en": "Would you like a dessert?"
          }
        ]
      },
      {
        "id": "moeglich",
        "group": "l4-g1",
        "term": "möglich",
        "fa": "possible",
        "type": "adjective",
        "form": "adjective; often used with *sein*; opposite: *unmöglich*",
        "source": "Wortschatz.md",
        "example": "Eine frühe Abreise ist möglich.",
        "exampleFa": "An early departure is possible.",
        "cloze": "Eine frühe Abreise ist ____.",
        "clozeFa": "An early departure is possible.",
        "answer": "möglich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "möglich",
          "möglich",
          "möglich"
        ],
        "examples": [
          {
            "de": "Eine frühe Abreise ist möglich.",
            "en": "An early departure is possible."
          },
          {
            "de": "Ist es möglich, hier zu bezahlen?",
            "en": "Is it possible to pay here?"
          }
        ]
      },
      {
        "id": "beachten",
        "group": "l4-g1",
        "term": "beachten",
        "fa": "to observe; to follow; to pay attention to",
        "type": "verb",
        "form": "inseparable verb with accusative: *beachtet – beachtete – hat beachtet*",
        "source": "Wortschatz.md",
        "example": "Bitte beachten Sie die Regeln.",
        "exampleFa": "Please observe the rules.",
        "cloze": "Bitte ____ Sie die Regeln.",
        "clozeFa": "Please observe the rules.",
        "answer": "beachten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "beachten",
          "beachten",
          "beachten"
        ],
        "examples": [
          {
            "de": "Bitte beachten Sie die Regeln.",
            "en": "Please observe the rules."
          },
          {
            "de": "Beachten Sie bitte die Hinweise.",
            "en": "Please pay attention to the instructions."
          }
        ]
      },
      {
        "id": "die-regel",
        "group": "l4-g1",
        "term": "die Regel",
        "fa": "rule",
        "type": "noun",
        "form": "feminine noun; plural: *die Regeln*",
        "source": "Wortschatz.md",
        "example": "Bitte beachten Sie die Regeln.",
        "exampleFa": "Please observe the rules.",
        "cloze": "Bitte beachten Sie die ____n.",
        "clozeFa": "Please observe the rules.",
        "answer": "Regel",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Regel",
          "Regel",
          "Regel"
        ],
        "examples": [
          {
            "de": "Bitte beachten Sie die Regeln.",
            "en": "Please observe the rules."
          },
          {
            "de": "Diese Regel gilt für alle.",
            "en": "This rule applies to everyone."
          }
        ]
      },
      {
        "id": "das-pauschalangebot",
        "group": "l4-g1",
        "term": "das Pauschalangebot",
        "fa": "package deal; package offer",
        "type": "noun",
        "form": "neuter noun; plural: *die Pauschalangebote*; *pauschal + das Angebot*",
        "source": "Wortschatz.md",
        "example": "Das Hotel bietet ein günstiges Pauschalangebot an.",
        "exampleFa": "The hotel offers an affordable package deal.",
        "cloze": "Das Hotel bietet ein günstiges ____ an.",
        "clozeFa": "The hotel offers an affordable package deal.",
        "answer": "Pauschalangebot",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Pauschalangebot",
          "Pauschalangebot",
          "Pauschalangebot"
        ],
        "examples": [
          {
            "de": "Das Hotel bietet ein günstiges Pauschalangebot an.",
            "en": "The hotel offers an affordable package deal."
          },
          {
            "de": "Im Pauschalangebot sind Frühstück und Abendessen enthalten.",
            "en": "Breakfast and dinner are included in the package."
          }
        ]
      },
      {
        "id": "wegen",
        "group": "l4-g1",
        "term": "wegen",
        "fa": "because of; due to",
        "type": "verb",
        "form": "preposition with genitive",
        "source": "Wortschatz.md",
        "example": "Wegen des Nebels startet das Flugzeug später.",
        "exampleFa": "Because of the fog, the plane departs later.",
        "cloze": "____ des Nebels startet das Flugzeug später.",
        "clozeFa": "Because of the fog, the plane departs later.",
        "answer": "wegen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "wegen",
          "wegen",
          "wegen"
        ],
        "examples": [
          {
            "de": "Wegen des Nebels startet das Flugzeug später.",
            "en": "Because of the fog, the plane departs later."
          },
          {
            "de": "Wegen eines Problems fällt der Zug aus.",
            "en": "The train is cancelled because of a problem."
          }
        ]
      },
      {
        "id": "der-nebel",
        "group": "l4-g1",
        "term": "der Nebel",
        "fa": "fog",
        "type": "noun",
        "form": "masculine noun; usually singular",
        "source": "Wortschatz.md",
        "example": "Heute Morgen gibt es starken Nebel.",
        "exampleFa": "There is heavy fog this morning.",
        "cloze": "Heute Morgen gibt es starken ____.",
        "clozeFa": "There is heavy fog this morning.",
        "answer": "Nebel",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Nebel",
          "Nebel",
          "Nebel"
        ],
        "examples": [
          {
            "de": "Heute Morgen gibt es starken Nebel.",
            "en": "There is heavy fog this morning."
          },
          {
            "de": "Wegen des Nebels sieht man wenig.",
            "en": "Visibility is poor because of the fog."
          }
        ]
      },
      {
        "id": "sich-verschieben",
        "group": "l4-g2",
        "term": "sich verschieben",
        "fa": "to be postponed; to be delayed",
        "type": "verb",
        "form": "reflexive, inseparable verb: *verschiebt sich – verschob sich – hat sich verschoben*",
        "source": "Wortschatz.md",
        "example": "Der Termin verschiebt sich um eine Woche.",
        "exampleFa": "The appointment is postponed by one week.",
        "cloze": "Der Termin verschiebt sich um eine Woche. ____",
        "clozeFa": "The appointment is postponed by one week.",
        "answer": "sich verschieben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich verschieben",
          "sich verschieben",
          "sich verschieben"
        ],
        "examples": [
          {
            "de": "Der Termin verschiebt sich um eine Woche.",
            "en": "The appointment is postponed by one week."
          },
          {
            "de": "Der Abflug hat sich um drei Stunden verschoben.",
            "en": "The departure was delayed by three hours."
          }
        ]
      },
      {
        "id": "die-abflugzeit",
        "group": "l4-g2",
        "term": "die Abflugzeit",
        "fa": "departure time (of a flight)",
        "type": "noun",
        "form": "feminine noun; plural: *die Abflugzeiten*; *der Abflug + die Zeit*",
        "source": "Wortschatz.md",
        "example": "Die Abflugzeit hat sich geändert.",
        "exampleFa": "The departure time has changed.",
        "cloze": "Die ____ hat sich geändert.",
        "clozeFa": "The departure time has changed.",
        "answer": "Abflugzeit",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Abflugzeit",
          "Abflugzeit",
          "Abflugzeit"
        ],
        "examples": [
          {
            "de": "Die Abflugzeit hat sich geändert.",
            "en": "The departure time has changed."
          },
          {
            "de": "Bitte prüfen Sie Ihre Abflugzeit.",
            "en": "Please check your departure time."
          }
        ]
      },
      {
        "id": "die-verschiebung",
        "group": "l4-g2",
        "term": "die Verschiebung",
        "fa": "postponement; delay; rescheduling",
        "type": "noun",
        "form": "feminine noun; plural: *die Verschiebungen*; often *Verschiebung auf + accusative*",
        "source": "Wortschatz.md",
        "example": "Die Verschiebung des Flugs wurde bestätigt.",
        "exampleFa": "The postponement of the flight was confirmed.",
        "cloze": "Die ____ des Flugs wurde bestätigt.",
        "clozeFa": "The postponement of the flight was confirmed.",
        "answer": "Verschiebung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Verschiebung",
          "Verschiebung",
          "Verschiebung"
        ],
        "examples": [
          {
            "de": "Die Verschiebung des Flugs wurde bestätigt.",
            "en": "The postponement of the flight was confirmed."
          },
          {
            "de": "Eine Verschiebung auf morgen ist möglich.",
            "en": "Rescheduling it for tomorrow is possible."
          }
        ]
      },
      {
        "id": "der-flug",
        "group": "l4-g2",
        "term": "der Flug",
        "fa": "flight",
        "type": "noun",
        "form": "masculine noun; plural: *die Flüge*; genitive: *des Flugs/des Fluges*",
        "source": "Wortschatz.md",
        "example": "Der Flug nach Hamburg startet morgen.",
        "exampleFa": "The flight to Hamburg departs tomorrow.",
        "cloze": "Der ____ nach Hamburg startet morgen.",
        "clozeFa": "The flight to Hamburg departs tomorrow.",
        "answer": "Flug",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Flug",
          "Flug",
          "Flug"
        ],
        "examples": [
          {
            "de": "Der Flug nach Hamburg startet morgen.",
            "en": "The flight to Hamburg departs tomorrow."
          },
          {
            "de": "Die Zeit des Flugs hat sich geändert.",
            "en": "The flight time has changed."
          }
        ]
      },
      {
        "id": "waehrend",
        "group": "l4-g2",
        "term": "während",
        "fa": "during; while",
        "type": "verb",
        "form": "preposition with genitive; as a conjunction, the verb goes to the end",
        "source": "Wortschatz.md",
        "example": "Während der Reise lese ich viel.",
        "exampleFa": "I read a lot during the journey.",
        "cloze": "____ der Reise lese ich viel.",
        "clozeFa": "I read a lot during the journey.",
        "answer": "während",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "während",
          "während",
          "während"
        ],
        "examples": [
          {
            "de": "Während der Reise lese ich viel.",
            "en": "I read a lot during the journey."
          },
          {
            "de": "Während ich warte, trinke ich einen Kaffee.",
            "en": "While I wait, I drink a coffee."
          }
        ]
      },
      {
        "id": "die-wartezeit",
        "group": "l4-g2",
        "term": "die Wartezeit",
        "fa": "waiting time; wait",
        "type": "noun",
        "form": "feminine noun; plural: *die Wartezeiten*",
        "source": "Wortschatz.md",
        "example": "Die Wartezeit beträgt eine Stunde.",
        "exampleFa": "The waiting time is one hour.",
        "cloze": "Die ____ beträgt eine Stunde.",
        "clozeFa": "The waiting time is one hour.",
        "answer": "Wartezeit",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Wartezeit",
          "Wartezeit",
          "Wartezeit"
        ],
        "examples": [
          {
            "de": "Die Wartezeit beträgt eine Stunde.",
            "en": "The waiting time is one hour."
          },
          {
            "de": "Was können wir während der Wartezeit tun?",
            "en": "What can we do while waiting?"
          }
        ]
      },
      {
        "id": "verreisen",
        "group": "l4-g2",
        "term": "verreisen",
        "fa": "to travel; to go away on a trip",
        "type": "verb",
        "form": "inseparable verb; perfect with *sein*: *verreist – verreiste – ist verreist*",
        "source": "Wortschatz.md",
        "example": "Wir möchten im Sommer verreisen.",
        "exampleFa": "We would like to travel in summer.",
        "cloze": "Wir möchten im Sommer ____.",
        "clozeFa": "We would like to travel in summer.",
        "answer": "verreisen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "verreisen",
          "verreisen",
          "verreisen"
        ],
        "examples": [
          {
            "de": "Wir möchten im Sommer verreisen.",
            "en": "We would like to travel in summer."
          },
          {
            "de": "Sie ist für eine Woche verreist.",
            "en": "She has gone away for a week."
          }
        ]
      },
      {
        "id": "zunaechst",
        "group": "l4-g2",
        "term": "zunächst",
        "fa": "first; initially",
        "type": "verb",
        "form": "adverb",
        "source": "Wortschatz.md",
        "example": "Zunächst müssen Sie einchecken.",
        "exampleFa": "First, you must check in.",
        "cloze": "____ müssen Sie einchecken.",
        "clozeFa": "First, you must check in.",
        "answer": "zunächst",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zunächst",
          "zunächst",
          "zunächst"
        ],
        "examples": [
          {
            "de": "Zunächst müssen Sie einchecken.",
            "en": "First, you must check in."
          },
          {
            "de": "Der Plan klang zunächst gut.",
            "en": "The plan sounded good initially."
          }
        ]
      },
      {
        "id": "der-check-in-schalter",
        "group": "l4-g2",
        "term": "der Check-in-Schalter",
        "fa": "check-in counter",
        "type": "noun",
        "form": "masculine noun; plural: *die Check-in-Schalter*; *am* = *an dem*",
        "source": "Wortschatz.md",
        "example": "Wir warten am Check-in-Schalter.",
        "exampleFa": "We are waiting at the check-in counter.",
        "cloze": "Wir warten am ____.",
        "clozeFa": "We are waiting at the check-in counter.",
        "answer": "Check-in-Schalter",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Check-in-Schalter",
          "Check-in-Schalter",
          "Check-in-Schalter"
        ],
        "examples": [
          {
            "de": "Wir warten am Check-in-Schalter.",
            "en": "We are waiting at the check-in counter."
          },
          {
            "de": "Der Check-in-Schalter öffnet um 8 Uhr.",
            "en": "The check-in counter opens at 8 a.m."
          }
        ]
      },
      {
        "id": "einchecken",
        "group": "l4-g2",
        "term": "einchecken",
        "fa": "to check in",
        "type": "verb",
        "form": "separable verb: *checkt ein – checkte ein – hat eingecheckt*",
        "source": "Wortschatz.md",
        "example": "Wir checken am Schalter ein.",
        "exampleFa": "We check in at the counter.",
        "cloze": "Wir checken am Schalter ein. ____",
        "clozeFa": "We check in at the counter.",
        "answer": "einchecken",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "einchecken",
          "einchecken",
          "einchecken"
        ],
        "examples": [
          {
            "de": "Wir checken am Schalter ein.",
            "en": "We check in at the counter."
          },
          {
            "de": "Die Passagiere haben bereits eingecheckt.",
            "en": "The passengers have already checked in."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l4-g1",
        "icon": "1",
        "title": "Words 61-70",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l4-g2",
        "icon": "2",
        "title": "Words 71-80",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 5,
    "code": "Set 05",
    "title": "Wortschatz Set 5",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "reisen",
        "group": "l5-g1",
        "term": "reisen",
        "fa": "to travel",
        "type": "verb",
        "form": "regular verb; perfect with *sein*: *reist – reiste – ist gereist*",
        "source": "Wortschatz.md",
        "example": "Ich reise gern mit dem Zug.",
        "exampleFa": "I like travelling by train.",
        "cloze": "Ich reise gern mit dem Zug. ____",
        "clozeFa": "I like travelling by train.",
        "answer": "reisen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "reisen",
          "reisen",
          "reisen"
        ],
        "examples": [
          {
            "de": "Ich reise gern mit dem Zug.",
            "en": "I like travelling by train."
          },
          {
            "de": "Sie ist nach Hamburg gereist.",
            "en": "She travelled to Hamburg."
          }
        ]
      },
      {
        "id": "wer-der",
        "group": "l5-g1",
        "term": "Wer …, (der) …",
        "fa": "whoever …; anyone who …",
        "type": "phrase",
        "form": "the verb ends the *wer* clause; *der* in the main clause is optional",
        "source": "Wortschatz.md",
        "example": "Wer mit dem Flugzeug reist, muss einchecken.",
        "exampleFa": "Anyone travelling by plane must check in.",
        "cloze": "____ mit dem Flugzeug reist, muss einchecken.",
        "clozeFa": "Anyone travelling by plane must check in.",
        "answer": "Wer",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Wer …, (der) …",
          "Wer …, (der) …",
          "Wer"
        ],
        "examples": [
          {
            "de": "Wer mit dem Flugzeug reist, muss einchecken.",
            "en": "Anyone travelling by plane must check in."
          },
          {
            "de": "Wer viel übt, der lernt schneller.",
            "en": "Whoever practises a lot learns faster."
          }
        ]
      },
      {
        "id": "was-passiert-mit",
        "group": "l5-g1",
        "term": "Was passiert mit …?",
        "fa": "What happens to …?",
        "type": "phrase",
        "form": "*mit* + dative; *passiert – passierte – ist passiert*",
        "source": "Wortschatz.md",
        "example": "Was passiert mit unserem Gepäck?",
        "exampleFa": "What happens to our luggage?",
        "cloze": "____ passiert mit unserem Gepäck?",
        "clozeFa": "What happens to our luggage?",
        "answer": "Was",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Was passiert mit …?",
          "Was passiert mit …?",
          "Was"
        ],
        "examples": [
          {
            "de": "Was passiert mit unserem Gepäck?",
            "en": "What happens to our luggage?"
          },
          {
            "de": "Was ist mit dem Flug passiert?",
            "en": "What happened to the flight?"
          }
        ]
      },
      {
        "id": "der-koffer",
        "group": "l5-g1",
        "term": "der Koffer",
        "fa": "suitcase",
        "type": "noun",
        "form": "masculine noun; plural: *die Koffer*; dative plural: *den Koffern*",
        "source": "Wortschatz.md",
        "example": "Unsere Koffer sind sehr schwer.",
        "exampleFa": "Our suitcases are very heavy.",
        "cloze": "Unsere ____ sind sehr schwer.",
        "clozeFa": "Our suitcases are very heavy.",
        "answer": "Koffer",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Koffer",
          "Koffer",
          "Koffer"
        ],
        "examples": [
          {
            "de": "Unsere Koffer sind sehr schwer.",
            "en": "Our suitcases are very heavy."
          },
          {
            "de": "Was passiert mit unseren Koffern?",
            "en": "What happens to our suitcases?"
          }
        ]
      },
      {
        "id": "genau-schauen",
        "group": "l5-g1",
        "term": "genau schauen",
        "fa": "to look/check carefully",
        "type": "phrase",
        "form": "*schaut – schaute – hat geschaut*; *genau* is an adverb here",
        "source": "Wortschatz.md",
        "example": "Da wird genau geschaut.",
        "exampleFa": "They check carefully there.",
        "cloze": "Da wird genau geschaut. ____",
        "clozeFa": "They check carefully there.",
        "answer": "genau schauen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "genau schauen",
          "genau schauen",
          "genau schauen"
        ],
        "examples": [
          {
            "de": "Da wird genau geschaut.",
            "en": "They check carefully there."
          },
          {
            "de": "Schau bitte genau!",
            "en": "Please look carefully!"
          }
        ]
      },
      {
        "id": "sich-bereitmachen",
        "group": "l5-g1",
        "term": "sich bereitmachen",
        "fa": "to get ready; to prepare oneself",
        "type": "verb",
        "form": "reflexive, separable verb: *macht sich bereit – machte sich bereit – hat sich bereitgemacht*",
        "source": "Wortschatz.md",
        "example": "Er macht sich zum Einsteigen bereit.",
        "exampleFa": "He gets ready to board.",
        "cloze": "Er macht sich zum Einsteigen bereit. ____",
        "clozeFa": "He gets ready to board.",
        "answer": "sich bereitmachen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich bereitmachen",
          "sich bereitmachen",
          "sich bereitmachen"
        ],
        "examples": [
          {
            "de": "Er macht sich zum Einsteigen bereit.",
            "en": "He gets ready to board."
          },
          {
            "de": "Wir müssen uns für die Abreise bereitmachen.",
            "en": "We must get ready to leave."
          }
        ]
      },
      {
        "id": "einsteigen",
        "group": "l5-g1",
        "term": "einsteigen",
        "fa": "to get in; to board",
        "type": "verb",
        "form": "separable verb; perfect with *sein*: *steigt ein – stieg ein – ist eingestiegen*",
        "source": "Wortschatz.md",
        "example": "Bitte steigen Sie in den Zug ein.",
        "exampleFa": "Please board the train.",
        "cloze": "Bitte steigen Sie in den Zug ein. ____",
        "clozeFa": "Please board the train.",
        "answer": "einsteigen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "einsteigen",
          "einsteigen",
          "einsteigen"
        ],
        "examples": [
          {
            "de": "Bitte steigen Sie in den Zug ein.",
            "en": "Please board the train."
          },
          {
            "de": "Wir sind ins Flugzeug eingestiegen.",
            "en": "We boarded the plane."
          }
        ]
      },
      {
        "id": "verspaetet",
        "group": "l5-g1",
        "term": "verspätet",
        "fa": "delayed; late",
        "type": "adjective",
        "form": "adjective/participle; often *verspätet sein*; noun: *die Verspätung*",
        "source": "Wortschatz.md",
        "example": "Der Flug ist verspätet.",
        "exampleFa": "The flight is delayed.",
        "cloze": "Der Flug ist ____.",
        "clozeFa": "The flight is delayed.",
        "answer": "verspätet",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "verspätet",
          "verspätet",
          "verspätet"
        ],
        "examples": [
          {
            "de": "Der Flug ist verspätet.",
            "en": "The flight is delayed."
          },
          {
            "de": "Der Zug kommt verspätet an.",
            "en": "The train arrives late."
          }
        ]
      },
      {
        "id": "das-gewitter",
        "group": "l5-g1",
        "term": "das Gewitter",
        "fa": "thunderstorm",
        "type": "noun",
        "form": "neuter noun; plural: *die Gewitter*",
        "source": "Wortschatz.md",
        "example": "Heute Abend gibt es ein Gewitter.",
        "exampleFa": "There will be a thunderstorm this evening.",
        "cloze": "Heute Abend gibt es ein ____.",
        "clozeFa": "There will be a thunderstorm this evening.",
        "answer": "Gewitter",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Gewitter",
          "Gewitter",
          "Gewitter"
        ],
        "examples": [
          {
            "de": "Heute Abend gibt es ein Gewitter.",
            "en": "There will be a thunderstorm this evening."
          },
          {
            "de": "Wegen des Gewitters startet der Flug später.",
            "en": "The flight departs later because of the thunderstorm."
          }
        ]
      },
      {
        "id": "der-hinflug",
        "group": "l5-g1",
        "term": "der Hinflug",
        "fa": "outbound flight",
        "type": "noun",
        "form": "masculine noun; plural: *die Hinflüge*; opposite: *der Rückflug*",
        "source": "Wortschatz.md",
        "example": "Der Hinflug hatte Verspätung.",
        "exampleFa": "The outbound flight was delayed.",
        "cloze": "Der ____ hatte Verspätung.",
        "clozeFa": "The outbound flight was delayed.",
        "answer": "Hinflug",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Hinflug",
          "Hinflug",
          "Hinflug"
        ],
        "examples": [
          {
            "de": "Der Hinflug hatte Verspätung.",
            "en": "The outbound flight was delayed."
          },
          {
            "de": "Der Hinflug ist am Montag, der Rückflug am Freitag.",
            "en": "The outbound flight is on Monday and the return flight on Friday."
          }
        ]
      },
      {
        "id": "die-verspaetung",
        "group": "l5-g2",
        "term": "die Verspätung",
        "fa": "delay; lateness",
        "type": "noun",
        "form": "feminine noun; plural: *die Verspätungen*; *Verspätung haben*",
        "source": "Wortschatz.md",
        "example": "Der Flug hat zwei Stunden Verspätung.",
        "exampleFa": "The flight is delayed by two hours.",
        "cloze": "Der Flug hat zwei Stunden ____.",
        "clozeFa": "The flight is delayed by two hours.",
        "answer": "Verspätung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Verspätung",
          "Verspätung",
          "Verspätung"
        ],
        "examples": [
          {
            "de": "Der Flug hat zwei Stunden Verspätung.",
            "en": "The flight is delayed by two hours."
          },
          {
            "de": "Wegen der Verspätung warten wir länger.",
            "en": "We are waiting longer because of the delay."
          }
        ]
      },
      {
        "id": "die-technische-kontrolle",
        "group": "l5-g2",
        "term": "die technische Kontrolle",
        "fa": "technical inspection/check",
        "type": "noun",
        "form": "feminine noun phrase; genitive: *wegen einer technischen Kontrolle*",
        "source": "Wortschatz.md",
        "example": "Das Flugzeug braucht eine technische Kontrolle.",
        "exampleFa": "The aircraft needs a technical inspection.",
        "cloze": "Das Flugzeug braucht eine ____.",
        "clozeFa": "The aircraft needs a technical inspection.",
        "answer": "technische Kontrolle",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die technische Kontrolle",
          "technische Kontrolle",
          "technische Kontrolle"
        ],
        "examples": [
          {
            "de": "Das Flugzeug braucht eine technische Kontrolle.",
            "en": "The aircraft needs a technical inspection."
          },
          {
            "de": "Wegen einer technischen Kontrolle startet der Flug später.",
            "en": "The flight departs later because of a technical inspection."
          }
        ]
      },
      {
        "id": "dabei-sein",
        "group": "l5-g2",
        "term": "dabei sein",
        "fa": "to be there; to be present/included",
        "type": "phrase",
        "form": "*dabei* is a pronominal adverb used with *sein*: *ist dabei – war dabei – ist dabei gewesen*",
        "source": "Wortschatz.md",
        "example": "Die Kinder sind auch dabei.",
        "exampleFa": "The children are also there.",
        "cloze": "Die Kinder sind auch ____.",
        "clozeFa": "The children are also there.",
        "answer": "dabei",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "dabei sein",
          "dabei sein",
          "dabei"
        ],
        "examples": [
          {
            "de": "Die Kinder sind auch dabei.",
            "en": "The children are also there."
          },
          {
            "de": "Bist du morgen dabei?",
            "en": "Will you be there tomorrow?"
          }
        ]
      },
      {
        "id": "aergerlich",
        "group": "l5-g2",
        "term": "ärgerlich",
        "fa": "annoying; frustrating",
        "type": "adjective",
        "form": "adjective; comparative: *ärgerlicher*; superlative: *am ärgerlichsten*",
        "source": "Wortschatz.md",
        "example": "Die lange Wartezeit ist ärgerlich.",
        "exampleFa": "The long wait is annoying.",
        "cloze": "Die lange Wartezeit ist ____.",
        "clozeFa": "The long wait is annoying.",
        "answer": "ärgerlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ärgerlich",
          "ärgerlich",
          "ärgerlich"
        ],
        "examples": [
          {
            "de": "Die lange Wartezeit ist ärgerlich.",
            "en": "The long wait is annoying."
          },
          {
            "de": "Das ist besonders ärgerlich.",
            "en": "That is particularly frustrating."
          }
        ]
      },
      {
        "id": "der-maschinenraum",
        "group": "l5-g2",
        "term": "der Maschinenraum",
        "fa": "engine room",
        "type": "noun",
        "form": "masculine noun; plural: *die Maschinenräume*",
        "source": "Wortschatz.md",
        "example": "Im Maschinenraum findet eine Kontrolle statt.",
        "exampleFa": "An inspection is taking place in the engine room.",
        "cloze": "Im ____ findet eine Kontrolle statt.",
        "clozeFa": "An inspection is taking place in the engine room.",
        "answer": "Maschinenraum",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Maschinenraum",
          "Maschinenraum",
          "Maschinenraum"
        ],
        "examples": [
          {
            "de": "Im Maschinenraum findet eine Kontrolle statt.",
            "en": "An inspection is taking place in the engine room."
          },
          {
            "de": "Der Maschinenraum darf nicht betreten werden.",
            "en": "The engine room must not be entered."
          }
        ]
      },
      {
        "id": "der-streik",
        "group": "l5-g2",
        "term": "der Streik",
        "fa": "strike",
        "type": "noun",
        "form": "masculine noun; plural: *die Streiks*; genitive: *des Streiks*",
        "source": "Wortschatz.md",
        "example": "Wegen des Streiks fahren wenige Züge.",
        "exampleFa": "Few trains are running because of the strike.",
        "cloze": "Wegen des ____s fahren wenige Züge.",
        "clozeFa": "Few trains are running because of the strike.",
        "answer": "Streik",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Streik",
          "Streik",
          "Streik"
        ],
        "examples": [
          {
            "de": "Wegen des Streiks fahren wenige Züge.",
            "en": "Few trains are running because of the strike."
          },
          {
            "de": "Die Mitarbeiter streiken.",
            "en": "The employees are on strike."
          }
        ]
      },
      {
        "id": "der-unfall",
        "group": "l5-g2",
        "term": "der Unfall",
        "fa": "accident",
        "type": "noun",
        "form": "masculine noun; plural: *die Unfälle*; genitive: *eines Unfalls*",
        "source": "Wortschatz.md",
        "example": "Wegen eines Unfalls gibt es Stau.",
        "exampleFa": "There is a traffic jam because of an accident.",
        "cloze": "Wegen eines ____s gibt es Stau.",
        "clozeFa": "There is a traffic jam because of an accident.",
        "answer": "Unfall",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Unfall",
          "Unfall",
          "Unfall"
        ],
        "examples": [
          {
            "de": "Wegen eines Unfalls gibt es Stau.",
            "en": "There is a traffic jam because of an accident."
          },
          {
            "de": "Der Unfall ist gestern passiert.",
            "en": "The accident happened yesterday."
          }
        ]
      },
      {
        "id": "der-stau",
        "group": "l5-g2",
        "term": "der Stau",
        "fa": "traffic jam; congestion",
        "type": "noun",
        "form": "masculine noun; plural: *die Staus*",
        "source": "Wortschatz.md",
        "example": "Auf der A1 gibt es einen langen Stau.",
        "exampleFa": "There is a long traffic jam on the A1.",
        "cloze": "Auf der A1 gibt es einen langen ____.",
        "clozeFa": "There is a long traffic jam on the A1.",
        "answer": "Stau",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Stau",
          "Stau",
          "Stau"
        ],
        "examples": [
          {
            "de": "Auf der A1 gibt es einen langen Stau.",
            "en": "There is a long traffic jam on the A1."
          },
          {
            "de": "Wir stehen seit einer Stunde im Stau.",
            "en": "We have been stuck in traffic for an hour."
          }
        ]
      },
      {
        "id": "sich-aergern",
        "group": "l5-g2",
        "term": "sich ärgern",
        "fa": "to be/get annoyed",
        "type": "verb",
        "form": "reflexive verb; often *sich über + accusative ärgern*",
        "source": "Wortschatz.md",
        "example": "Wir haben uns über die Verspätung geärgert.",
        "exampleFa": "We were annoyed about the delay.",
        "cloze": "Wir haben uns über die Verspätung geärgert. ____",
        "clozeFa": "We were annoyed about the delay.",
        "answer": "sich ärgern",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich ärgern",
          "sich ärgern",
          "sich ärgern"
        ],
        "examples": [
          {
            "de": "Wir haben uns über die Verspätung geärgert.",
            "en": "We were annoyed about the delay."
          },
          {
            "de": "Wegen der Probleme habe ich mich sehr geärgert.",
            "en": "I was very annoyed because of the problems."
          }
        ]
      },
      {
        "id": "unregelmaessig",
        "group": "l5-g2",
        "term": "unregelmäßig",
        "fa": "irregular; irregularly",
        "type": "verb",
        "form": "adjective or adverb; opposite: *regelmäßig*",
        "source": "Wortschatz.md",
        "example": "Die Züge fahren nur unregelmäßig.",
        "exampleFa": "The trains run only irregularly.",
        "cloze": "Die Züge fahren nur ____.",
        "clozeFa": "The trains run only irregularly.",
        "answer": "unregelmäßig",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "unregelmäßig",
          "unregelmäßig",
          "unregelmäßig"
        ],
        "examples": [
          {
            "de": "Die Züge fahren nur unregelmäßig.",
            "en": "The trains run only irregularly."
          },
          {
            "de": "Seine Arbeitszeiten sind unregelmäßig.",
            "en": "His working hours are irregular."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l5-g1",
        "icon": "1",
        "title": "Words 81-90",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l5-g2",
        "icon": "2",
        "title": "Words 91-100",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 6,
    "code": "Set 06",
    "title": "Wortschatz Set 6",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "verteilen",
        "group": "l6-g1",
        "term": "verteilen",
        "fa": "to distribute; to hand out",
        "type": "verb",
        "form": "inseparable verb with accusative: *verteilt – verteilte – hat verteilt*",
        "source": "Wortschatz.md",
        "example": "Die Mitarbeiterin verteilt Gutscheine.",
        "exampleFa": "The employee hands out vouchers.",
        "cloze": "Die Mitarbeiterin verteilt Gutscheine. ____",
        "clozeFa": "The employee hands out vouchers.",
        "answer": "verteilen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "verteilen",
          "verteilen",
          "verteilen"
        ],
        "examples": [
          {
            "de": "Die Mitarbeiterin verteilt Gutscheine.",
            "en": "The employee hands out vouchers."
          },
          {
            "de": "Der Lehrer verteilt die Aufgaben.",
            "en": "The teacher distributes the tasks."
          }
        ]
      },
      {
        "id": "der-gutschein",
        "group": "l6-g1",
        "term": "der Gutschein",
        "fa": "voucher; gift certificate",
        "type": "noun",
        "form": "masculine noun; plural: *die Gutscheine*",
        "source": "Wortschatz.md",
        "example": "Wir haben einen Gutschein bekommen.",
        "exampleFa": "We received a voucher.",
        "cloze": "Wir haben einen ____ bekommen.",
        "clozeFa": "We received a voucher.",
        "answer": "Gutschein",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Gutschein",
          "Gutschein",
          "Gutschein"
        ],
        "examples": [
          {
            "de": "Wir haben einen Gutschein bekommen.",
            "en": "We received a voucher."
          },
          {
            "de": "Der Gutschein ist ein Jahr gültig.",
            "en": "The voucher is valid for one year."
          }
        ]
      },
      {
        "id": "sich-beruhigen",
        "group": "l6-g1",
        "term": "sich beruhigen",
        "fa": "to calm down",
        "type": "verb",
        "form": "reflexive verb: *beruhigt sich – beruhigte sich – hat sich beruhigt*",
        "source": "Wortschatz.md",
        "example": "Die Fluggäste beruhigen sich.",
        "exampleFa": "The passengers calm down.",
        "cloze": "Die Fluggäste ____ sich.",
        "clozeFa": "The passengers calm down.",
        "answer": "beruhigen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich beruhigen",
          "sich beruhigen",
          "beruhigen"
        ],
        "examples": [
          {
            "de": "Die Fluggäste beruhigen sich.",
            "en": "The passengers calm down."
          },
          {
            "de": "Bitte beruhigen Sie sich.",
            "en": "Please calm down."
          }
        ]
      },
      {
        "id": "damit",
        "group": "l6-g1",
        "term": "damit",
        "fa": "so that; in order that",
        "type": "verb",
        "form": "introduces a purpose clause; the conjugated verb goes to the end",
        "source": "Wortschatz.md",
        "example": "Sie spricht langsam, damit alle sie verstehen.",
        "exampleFa": "She speaks slowly so that everyone understands her.",
        "cloze": "Sie spricht langsam, ____ alle sie verstehen.",
        "clozeFa": "She speaks slowly so that everyone understands her.",
        "answer": "damit",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "damit",
          "damit",
          "damit"
        ],
        "examples": [
          {
            "de": "Sie spricht langsam, damit alle sie verstehen.",
            "en": "She speaks slowly so that everyone understands her."
          },
          {
            "de": "Wir verteilen Gutscheine, damit sich die Gäste beruhigen.",
            "en": "We hand out vouchers so that the guests calm down."
          }
        ]
      },
      {
        "id": "das-fluggastrecht",
        "group": "l6-g1",
        "term": "das Fluggastrecht",
        "fa": "air-passenger right",
        "type": "noun",
        "form": "neuter noun; normally plural: *die Fluggastrechte*",
        "source": "Wortschatz.md",
        "example": "Informieren Sie sich über Ihre Fluggastrechte.",
        "exampleFa": "Find out about your air-passenger rights.",
        "cloze": "Informieren Sie sich über Ihre ____e.",
        "clozeFa": "Find out about your air-passenger rights.",
        "answer": "Fluggastrecht",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Fluggastrecht",
          "Fluggastrecht",
          "Fluggastrecht"
        ],
        "examples": [
          {
            "de": "Informieren Sie sich über Ihre Fluggastrechte.",
            "en": "Find out about your air-passenger rights."
          },
          {
            "de": "Die Airline muss die Fluggastrechte beachten.",
            "en": "The airline must respect air-passenger rights."
          }
        ]
      },
      {
        "id": "ausfallen",
        "group": "l6-g1",
        "term": "ausfallen",
        "fa": "to be cancelled; to fail",
        "type": "verb",
        "form": "separable verb: *fällt aus – fiel aus – ist ausgefallen*",
        "source": "Wortschatz.md",
        "example": "Der Flug fällt aus.",
        "exampleFa": "The flight is cancelled.",
        "cloze": "Der Flug fällt aus. ____",
        "clozeFa": "The flight is cancelled.",
        "answer": "ausfallen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ausfallen",
          "ausfallen",
          "ausfallen"
        ],
        "examples": [
          {
            "de": "Der Flug fällt aus.",
            "en": "The flight is cancelled."
          },
          {
            "de": "Der Unterricht ist heute ausgefallen.",
            "en": "The class was cancelled today."
          }
        ]
      },
      {
        "id": "von-etwas-abhaengen",
        "group": "l6-g1",
        "term": "von etwas abhängen",
        "fa": "to depend on something",
        "type": "phrase",
        "form": "*von* + dative; *hängt ab – hing ab – hat abgehangen*",
        "source": "Wortschatz.md",
        "example": "Das hängt vom Grund ab.",
        "exampleFa": "That depends on the reason.",
        "cloze": "Das hängt vom Grund ab. ____",
        "clozeFa": "That depends on the reason.",
        "answer": "von etwas abhängen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "von etwas abhängen",
          "von etwas abhängen",
          "von etwas abhängen"
        ],
        "examples": [
          {
            "de": "Das hängt vom Grund ab.",
            "en": "That depends on the reason."
          },
          {
            "de": "Der Preis hängt von der Flugstrecke ab.",
            "en": "The price depends on the flight distance."
          }
        ]
      },
      {
        "id": "die-erstattung",
        "group": "l6-g1",
        "term": "die Erstattung",
        "fa": "reimbursement; refund",
        "type": "noun",
        "form": "feminine noun; plural: *die Erstattungen*; verb: *erstatten*",
        "source": "Wortschatz.md",
        "example": "Sie können eine Erstattung bekommen.",
        "exampleFa": "You can receive a refund.",
        "cloze": "Sie können eine ____ bekommen.",
        "clozeFa": "You can receive a refund.",
        "answer": "Erstattung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Erstattung",
          "Erstattung",
          "Erstattung"
        ],
        "examples": [
          {
            "de": "Sie können eine Erstattung bekommen.",
            "en": "You can receive a refund."
          },
          {
            "de": "Die Airline erstattet den Ticketpreis.",
            "en": "The airline refunds the ticket price."
          }
        ]
      },
      {
        "id": "aussergewoehnliche-umstaende",
        "group": "l6-g1",
        "term": "außergewöhnliche Umstände",
        "fa": "extraordinary circumstances",
        "type": "phrase",
        "form": "plural noun phrase; singular: *der außergewöhnliche Umstand*",
        "source": "Wortschatz.md",
        "example": "Ein Unwetter gilt als außergewöhnlicher Umstand.",
        "exampleFa": "A severe storm counts as an extraordinary circumstance.",
        "cloze": "Ein Unwetter gilt als ____r Umstand.",
        "clozeFa": "A severe storm counts as an extraordinary circumstance.",
        "answer": "außergewöhnliche",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "außergewöhnliche Umstände",
          "außergewöhnliche Umstände",
          "außergewöhnliche"
        ],
        "examples": [
          {
            "de": "Ein Unwetter gilt als außergewöhnlicher Umstand.",
            "en": "A severe storm counts as an extraordinary circumstance."
          },
          {
            "de": "Wegen außergewöhnlicher Umstände fällt der Flug aus.",
            "en": "The flight is cancelled due to extraordinary circumstances."
          }
        ]
      },
      {
        "id": "die-versorgungsleistung",
        "group": "l6-g1",
        "term": "die Versorgungsleistung",
        "fa": "assistance/care service",
        "type": "noun",
        "form": "feminine noun; plural: *die Versorgungsleistungen*",
        "source": "Wortschatz.md",
        "example": "Essen und Getränke gehören zu den Versorgungsleistungen.",
        "exampleFa": "Food and drinks are assistance services.",
        "cloze": "Essen und Getränke gehören zu den ____en.",
        "clozeFa": "Food and drinks are assistance services.",
        "answer": "Versorgungsleistung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Versorgungsleistung",
          "Versorgungsleistung",
          "Versorgungsleistung"
        ],
        "examples": [
          {
            "de": "Essen und Getränke gehören zu den Versorgungsleistungen.",
            "en": "Food and drinks are assistance services."
          },
          {
            "de": "Die Airline bietet Versorgungsleistungen an.",
            "en": "The airline provides assistance services."
          }
        ]
      },
      {
        "id": "unabhaengig-von",
        "group": "l6-g2",
        "term": "unabhängig von",
        "fa": "regardless of; independent of",
        "type": "phrase",
        "form": "*von* + dative",
        "source": "Wortschatz.md",
        "example": "Die Hilfe gilt unabhängig vom Grund.",
        "exampleFa": "The assistance applies regardless of the reason.",
        "cloze": "Die Hilfe gilt ____ vom Grund.",
        "clozeFa": "The assistance applies regardless of the reason.",
        "answer": "unabhängig",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "unabhängig von",
          "unabhängig von",
          "unabhängig"
        ],
        "examples": [
          {
            "de": "Die Hilfe gilt unabhängig vom Grund.",
            "en": "The assistance applies regardless of the reason."
          },
          {
            "de": "Der Preis ist unabhängig von der Entfernung.",
            "en": "The price is independent of the distance."
          }
        ]
      },
      {
        "id": "anspruch-auf-etwas-haben",
        "group": "l6-g2",
        "term": "Anspruch auf etwas haben",
        "fa": "to be entitled to something",
        "type": "phrase",
        "form": "*auf* + accusative",
        "source": "Wortschatz.md",
        "example": "Sie haben Anspruch auf eine Erstattung.",
        "exampleFa": "You are entitled to a refund.",
        "cloze": "Sie ____ Anspruch auf eine Erstattung.",
        "clozeFa": "You are entitled to a refund.",
        "answer": "haben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Anspruch auf etwas haben",
          "Anspruch auf etwas haben",
          "haben"
        ],
        "examples": [
          {
            "de": "Sie haben Anspruch auf eine Erstattung.",
            "en": "You are entitled to a refund."
          },
          {
            "de": "Fahrgäste haben Anspruch auf Hilfe.",
            "en": "Passengers are entitled to assistance."
          }
        ]
      },
      {
        "id": "die-entschaedigung",
        "group": "l6-g2",
        "term": "die Entschädigung",
        "fa": "compensation",
        "type": "noun",
        "form": "feminine noun; plural: *die Entschädigungen*",
        "source": "Wortschatz.md",
        "example": "Sie erhält eine finanzielle Entschädigung.",
        "exampleFa": "She receives financial compensation.",
        "cloze": "Sie erhält eine finanzielle ____.",
        "clozeFa": "She receives financial compensation.",
        "answer": "Entschädigung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Entschädigung",
          "Entschädigung",
          "Entschädigung"
        ],
        "examples": [
          {
            "de": "Sie erhält eine finanzielle Entschädigung.",
            "en": "She receives financial compensation."
          },
          {
            "de": "Die Höhe der Entschädigung hängt von der Flugdistanz ab.",
            "en": "The amount of compensation depends on the flight distance."
          }
        ]
      },
      {
        "id": "die-ersatzbefoerderung",
        "group": "l6-g2",
        "term": "die Ersatzbeförderung",
        "fa": "alternative transportation",
        "type": "noun",
        "form": "feminine noun; plural: *die Ersatzbeförderungen*",
        "source": "Wortschatz.md",
        "example": "Die Airline bietet eine Ersatzbeförderung an.",
        "exampleFa": "The airline offers alternative transportation.",
        "cloze": "Die Airline bietet eine ____ an.",
        "clozeFa": "The airline offers alternative transportation.",
        "answer": "Ersatzbeförderung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Ersatzbeförderung",
          "Ersatzbeförderung",
          "Ersatzbeförderung"
        ],
        "examples": [
          {
            "de": "Die Airline bietet eine Ersatzbeförderung an.",
            "en": "The airline offers alternative transportation."
          },
          {
            "de": "Ein Zug kann als Ersatzbeförderung dienen.",
            "en": "A train can serve as alternative transportation."
          }
        ]
      },
      {
        "id": "etwas-geltend-machen",
        "group": "l6-g2",
        "term": "etwas geltend machen",
        "fa": "to claim; to assert something",
        "type": "phrase",
        "form": "fixed expression with accusative; *macht geltend – machte geltend – hat geltend gemacht*",
        "source": "Wortschatz.md",
        "example": "Sie können eine Entschädigung geltend machen.",
        "exampleFa": "You can claim compensation.",
        "cloze": "Sie können eine Entschädigung geltend ____.",
        "clozeFa": "You can claim compensation.",
        "answer": "machen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "etwas geltend machen",
          "etwas geltend machen",
          "machen"
        ],
        "examples": [
          {
            "de": "Sie können eine Entschädigung geltend machen.",
            "en": "You can claim compensation."
          },
          {
            "de": "Er macht seinen Anspruch schriftlich geltend.",
            "en": "He asserts his claim in writing."
          }
        ]
      },
      {
        "id": "gepaeck-aufgeben",
        "group": "l6-g2",
        "term": "Gepäck aufgeben",
        "fa": "to check in baggage",
        "type": "phrase",
        "form": "separable verb: *gibt auf – gab auf – hat aufgegeben*; noun: *das Gepäckaufgeben*",
        "source": "Wortschatz.md",
        "example": "Wo kann ich mein Gepäck aufgeben?",
        "exampleFa": "Where can I check in my baggage?",
        "cloze": "Wo kann ich mein ____?",
        "clozeFa": "Where can I check in my baggage?",
        "answer": "Gepäck aufgeben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Gepäck aufgeben",
          "Gepäck aufgeben",
          "Gepäck aufgeben"
        ],
        "examples": [
          {
            "de": "Wo kann ich mein Gepäck aufgeben?",
            "en": "Where can I check in my baggage?"
          },
          {
            "de": "Das Gepäckaufgeben kostet extra.",
            "en": "Checking in baggage costs extra."
          }
        ]
      },
      {
        "id": "billig-billiger",
        "group": "l6-g2",
        "term": "billig / billiger",
        "fa": "cheap / cheaper",
        "type": "phrase",
        "form": "comparative: *billiger*; superlative: *am billigsten*",
        "source": "Wortschatz.md",
        "example": "Die Frau dachte, es wäre billiger.",
        "exampleFa": "The woman thought it would be cheaper.",
        "cloze": "Die Frau dachte, es wäre ____er.",
        "clozeFa": "The woman thought it would be cheaper.",
        "answer": "billig",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "billig / billiger",
          "billig / billiger",
          "billig"
        ],
        "examples": [
          {
            "de": "Die Frau dachte, es wäre billiger.",
            "en": "The woman thought it would be cheaper."
          },
          {
            "de": "Online ist das Ticket am billigsten.",
            "en": "The ticket is cheapest online."
          }
        ]
      },
      {
        "id": "die-flugbuchung",
        "group": "l6-g2",
        "term": "die Flugbuchung",
        "fa": "flight booking",
        "type": "noun",
        "form": "feminine noun; plural: *die Flugbuchungen*",
        "source": "Wortschatz.md",
        "example": "Ich habe das Gepäck bei der Flugbuchung bezahlt.",
        "exampleFa": "I paid for the baggage when booking the flight.",
        "cloze": "Ich habe das Gepäck bei der ____ bezahlt.",
        "clozeFa": "I paid for the baggage when booking the flight.",
        "answer": "Flugbuchung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Flugbuchung",
          "Flugbuchung",
          "Flugbuchung"
        ],
        "examples": [
          {
            "de": "Ich habe das Gepäck bei der Flugbuchung bezahlt.",
            "en": "I paid for the baggage when booking the flight."
          },
          {
            "de": "Die Flugbuchung wurde bestätigt.",
            "en": "The flight booking was confirmed."
          }
        ]
      },
      {
        "id": "fuer-etwas-bezahlen",
        "group": "l6-g2",
        "term": "für etwas bezahlen",
        "fa": "to pay for something",
        "type": "phrase",
        "form": "*für* + accusative; *bezahlt – bezahlte – hat bezahlt*",
        "source": "Wortschatz.md",
        "example": "Sie hat für das Gepäck bezahlt.",
        "exampleFa": "She paid for the baggage.",
        "cloze": "Sie hat für das Gepäck bezahlt. ____",
        "clozeFa": "She paid for the baggage.",
        "answer": "für etwas bezahlen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "für etwas bezahlen",
          "für etwas bezahlen",
          "für etwas bezahlen"
        ],
        "examples": [
          {
            "de": "Sie hat für das Gepäck bezahlt.",
            "en": "She paid for the baggage."
          },
          {
            "de": "Muss ich für das Essen extra bezahlen?",
            "en": "Do I have to pay extra for the food?"
          }
        ]
      },
      {
        "id": "die-reisetasche",
        "group": "l6-g2",
        "term": "die Reisetasche",
        "fa": "travel bag",
        "type": "noun",
        "form": "feminine noun; plural: *die Reisetaschen*",
        "source": "Wortschatz.md",
        "example": "Das ist die Reisetasche meiner Frau.",
        "exampleFa": "This is my wife’s travel bag.",
        "cloze": "Das ist die ____ meiner Frau.",
        "clozeFa": "This is my wife’s travel bag.",
        "answer": "Reisetasche",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Reisetasche",
          "Reisetasche",
          "Reisetasche"
        ],
        "examples": [
          {
            "de": "Das ist die Reisetasche meiner Frau.",
            "en": "This is my wife’s travel bag."
          },
          {
            "de": "Meine Reisetasche ist sehr schwer.",
            "en": "My travel bag is very heavy."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l6-g1",
        "icon": "1",
        "title": "Words 101-110",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l6-g2",
        "icon": "2",
        "title": "Words 111-120",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 7,
    "code": "Set 07",
    "title": "Wortschatz Set 7",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "die-durchsage",
        "group": "l7-g1",
        "term": "die Durchsage",
        "fa": "announcement",
        "type": "noun",
        "form": "feminine noun; plural: *die Durchsagen*",
        "source": "Wortschatz.md",
        "example": "Bitte beachten Sie die Durchsage.",
        "exampleFa": "Please pay attention to the announcement.",
        "cloze": "Bitte beachten Sie die ____.",
        "clozeFa": "Please pay attention to the announcement.",
        "answer": "Durchsage",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Durchsage",
          "Durchsage",
          "Durchsage"
        ],
        "examples": [
          {
            "de": "Bitte beachten Sie die Durchsage.",
            "en": "Please pay attention to the announcement."
          },
          {
            "de": "Es folgt eine Durchsage für die Passagiere.",
            "en": "An announcement for the passengers follows."
          }
        ]
      },
      {
        "id": "folgen",
        "group": "l7-g1",
        "term": "folgen",
        "fa": "to follow; to come next",
        "type": "verb",
        "form": "verb with dative; perfect with *sein*: *folgt – folgte – ist gefolgt*",
        "source": "Wortschatz.md",
        "example": "Es folgt eine wichtige Information.",
        "exampleFa": "An important piece of information follows.",
        "cloze": "Es folgt eine wichtige Information. ____",
        "clozeFa": "An important piece of information follows.",
        "answer": "folgen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "folgen",
          "folgen",
          "folgen"
        ],
        "examples": [
          {
            "de": "Es folgt eine wichtige Information.",
            "en": "An important piece of information follows."
          },
          {
            "de": "Bitte folgen Sie mir.",
            "en": "Please follow me."
          }
        ]
      },
      {
        "id": "der-roman",
        "group": "l7-g1",
        "term": "der Roman",
        "fa": "novel",
        "type": "noun",
        "form": "masculine noun; plural: *die Romane*",
        "source": "Wortschatz.md",
        "example": "Im Urlaub habe ich einen Roman gelesen.",
        "exampleFa": "I read a novel on holiday.",
        "cloze": "Im Urlaub habe ich einen ____ gelesen.",
        "clozeFa": "I read a novel on holiday.",
        "answer": "Roman",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Roman",
          "Roman",
          "Roman"
        ],
        "examples": [
          {
            "de": "Im Urlaub habe ich einen Roman gelesen.",
            "en": "I read a novel on holiday."
          },
          {
            "de": "Der Roman handelt von einer Reise.",
            "en": "The novel is about a journey."
          }
        ]
      },
      {
        "id": "der-titel",
        "group": "l7-g1",
        "term": "der Titel",
        "fa": "title",
        "type": "noun",
        "form": "masculine noun; plural: *die Titel*",
        "source": "Wortschatz.md",
        "example": "Der Roman hat einen langen Titel.",
        "exampleFa": "The novel has a long title.",
        "cloze": "Der Roman hat einen langen ____.",
        "clozeFa": "The novel has a long title.",
        "answer": "Titel",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Titel",
          "Titel",
          "Titel"
        ],
        "examples": [
          {
            "de": "Der Roman hat einen langen Titel.",
            "en": "The novel has a long title."
          },
          {
            "de": "Ich kenne den Titel des Buches nicht.",
            "en": "I don’t know the title of the book."
          }
        ]
      },
      {
        "id": "der-flugbegleiter-die-flugbegleiterin",
        "group": "l7-g1",
        "term": "der Flugbegleiter / die Flugbegleiterin",
        "fa": "flight attendant",
        "type": "noun",
        "form": "plural: *die Flugbegleiter / die Flugbegleiterinnen*",
        "source": "Wortschatz.md",
        "example": "Die Flugbegleiter begrüßen die Passagiere.",
        "exampleFa": "The flight attendants welcome the passengers.",
        "cloze": "Die ____ begrüßen die Passagiere.",
        "clozeFa": "The flight attendants welcome the passengers.",
        "answer": "Flugbegleiter",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Flugbegleiter / die Flugbegleiterin",
          "Flugbegleiter / die Flugbegleiterin",
          "Flugbegleiter"
        ],
        "examples": [
          {
            "de": "Die Flugbegleiter begrüßen die Passagiere.",
            "en": "The flight attendants welcome the passengers."
          },
          {
            "de": "Sie arbeitet als Flugbegleiterin.",
            "en": "She works as a flight attendant."
          }
        ]
      },
      {
        "id": "zu-etwas-fuehren",
        "group": "l7-g1",
        "term": "zu etwas führen",
        "fa": "to lead to; to result in",
        "type": "phrase",
        "form": "*zu* + dative; *führt – führte – hat geführt*",
        "source": "Wortschatz.md",
        "example": "Der Streik führt zu Flugausfällen.",
        "exampleFa": "The strike leads to flight cancellations.",
        "cloze": "Der Streik führt zu Flugausfällen. ____",
        "clozeFa": "The strike leads to flight cancellations.",
        "answer": "zu etwas führen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zu etwas führen",
          "zu etwas führen",
          "zu etwas führen"
        ],
        "examples": [
          {
            "de": "Der Streik führt zu Flugausfällen.",
            "en": "The strike leads to flight cancellations."
          },
          {
            "de": "Der Nebel führte zu einer Verspätung.",
            "en": "The fog resulted in a delay."
          }
        ]
      },
      {
        "id": "der-flugausfall",
        "group": "l7-g1",
        "term": "der Flugausfall",
        "fa": "flight cancellation",
        "type": "noun",
        "form": "masculine noun; plural: *die Flugausfälle*; dative plural: *den Flugausfällen*",
        "source": "Wortschatz.md",
        "example": "Die Airline informiert über den Flugausfall.",
        "exampleFa": "The airline provides information about the flight cancellation.",
        "cloze": "Die Airline informiert über den ____.",
        "clozeFa": "The airline provides information about the flight cancellation.",
        "answer": "Flugausfall",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Flugausfall",
          "Flugausfall",
          "Flugausfall"
        ],
        "examples": [
          {
            "de": "Die Airline informiert über den Flugausfall.",
            "en": "The airline provides information about the flight cancellation."
          },
          {
            "de": "Der Streik führt zu mehreren Flugausfällen.",
            "en": "The strike leads to several flight cancellations."
          }
        ]
      },
      {
        "id": "in-der-regel",
        "group": "l7-g1",
        "term": "in der Regel",
        "fa": "generally; as a rule",
        "type": "phrase",
        "form": "fixed expression with dative",
        "source": "Wortschatz.md",
        "example": "Die Airline erstattet in der Regel die Kosten.",
        "exampleFa": "The airline generally refunds the costs.",
        "cloze": "Die Airline erstattet ____ die Kosten.",
        "clozeFa": "The airline generally refunds the costs.",
        "answer": "in der Regel",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "in der Regel",
          "in der Regel",
          "in der Regel"
        ],
        "examples": [
          {
            "de": "Die Airline erstattet in der Regel die Kosten.",
            "en": "The airline generally refunds the costs."
          },
          {
            "de": "In der Regel komme ich pünktlich.",
            "en": "As a rule, I arrive on time."
          }
        ]
      },
      {
        "id": "weiterreisen",
        "group": "l7-g1",
        "term": "weiterreisen",
        "fa": "to continue travelling",
        "type": "verb",
        "form": "separable verb; perfect with *sein*: *reist weiter – reiste weiter – ist weitergereist*",
        "source": "Wortschatz.md",
        "example": "Wir reisen mit dem Bus weiter.",
        "exampleFa": "We continue our journey by bus.",
        "cloze": "Wir reisen mit dem Bus weiter. ____",
        "clozeFa": "We continue our journey by bus.",
        "answer": "weiterreisen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "weiterreisen",
          "weiterreisen",
          "weiterreisen"
        ],
        "examples": [
          {
            "de": "Wir reisen mit dem Bus weiter.",
            "en": "We continue our journey by bus."
          },
          {
            "de": "Nach der Pause sind wir weitergereist.",
            "en": "We continued travelling after the break."
          }
        ]
      },
      {
        "id": "zusaetzlich",
        "group": "l7-g1",
        "term": "zusätzlich",
        "fa": "additionally; additional",
        "type": "verb",
        "form": "adjective or adverb",
        "source": "Wortschatz.md",
        "example": "Zusätzlich bekommen Sie eine Entschädigung.",
        "exampleFa": "Additionally, you receive compensation.",
        "cloze": "____ bekommen Sie eine Entschädigung.",
        "clozeFa": "Additionally, you receive compensation.",
        "answer": "zusätzlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zusätzlich",
          "zusätzlich",
          "zusätzlich"
        ],
        "examples": [
          {
            "de": "Zusätzlich bekommen Sie eine Entschädigung.",
            "en": "Additionally, you receive compensation."
          },
          {
            "de": "Es entstehen zusätzliche Kosten.",
            "en": "There are additional costs."
          }
        ]
      },
      {
        "id": "beziehungsweise-bzw",
        "group": "l7-g2",
        "term": "beziehungsweise (bzw.)",
        "fa": "respectively; or rather",
        "type": "phrase",
        "form": "conjunction/adverb; *bzw.* is the common abbreviation",
        "source": "Wortschatz.md",
        "example": "Zwei bzw. drei Stunden Wartezeit sind nötig.",
        "exampleFa": "Two or three hours of waiting are required, respectively.",
        "cloze": "Zwei bzw. drei Stunden Wartezeit sind nötig. ____",
        "clozeFa": "Two or three hours of waiting are required, respectively.",
        "answer": "beziehungsweise (bzw.)",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "beziehungsweise (bzw.)",
          "beziehungsweise (bzw.)",
          "beziehungsweise (bzw.)"
        ],
        "examples": [
          {
            "de": "Zwei bzw. drei Stunden Wartezeit sind nötig.",
            "en": "Two or three hours of waiting are required, respectively."
          },
          {
            "de": "Wir fahren am Montag bzw. Dienstag.",
            "en": "We are travelling on Monday or Tuesday, respectively."
          }
        ]
      },
      {
        "id": "in-jedem-fall",
        "group": "l7-g2",
        "term": "in jedem Fall",
        "fa": "in any case; definitely",
        "type": "phrase",
        "form": "fixed expression with dative",
        "source": "Wortschatz.md",
        "example": "In jedem Fall bekommen Sie Getränke.",
        "exampleFa": "In any case, you receive drinks.",
        "cloze": "____ bekommen Sie Getränke.",
        "clozeFa": "In any case, you receive drinks.",
        "answer": "in jedem Fall",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "in jedem Fall",
          "in jedem Fall",
          "in jedem Fall"
        ],
        "examples": [
          {
            "de": "In jedem Fall bekommen Sie Getränke.",
            "en": "In any case, you receive drinks."
          },
          {
            "de": "Rufen Sie mich in jedem Fall an.",
            "en": "Call me in any case."
          }
        ]
      },
      {
        "id": "egal",
        "group": "l7-g2",
        "term": "egal",
        "fa": "no matter; regardless; unimportant",
        "type": "word",
        "form": "often followed by an indirect question: *egal, was/warum/wie …*",
        "source": "Wortschatz.md",
        "example": "Sie bekommen Hilfe, egal, was der Grund ist.",
        "exampleFa": "You receive help regardless of the reason.",
        "cloze": "Sie bekommen Hilfe, ____, was der Grund ist.",
        "clozeFa": "You receive help regardless of the reason.",
        "answer": "egal",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "egal",
          "egal",
          "egal"
        ],
        "examples": [
          {
            "de": "Sie bekommen Hilfe, egal, was der Grund ist.",
            "en": "You receive help regardless of the reason."
          },
          {
            "de": "Mir ist egal, welchen Flug wir nehmen.",
            "en": "I don’t care which flight we take."
          }
        ]
      },
      {
        "id": "starten",
        "group": "l7-g2",
        "term": "starten",
        "fa": "to take off; to start",
        "type": "verb",
        "form": "regular verb; perfect with *sein* for departures: *startet – startete – ist gestartet*",
        "source": "Wortschatz.md",
        "example": "Das Flugzeug startet um 10 Uhr.",
        "exampleFa": "The plane takes off at 10 a.m.",
        "cloze": "Das Flugzeug startet um 10 Uhr. ____",
        "clozeFa": "The plane takes off at 10 a.m.",
        "answer": "starten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "starten",
          "starten",
          "starten"
        ],
        "examples": [
          {
            "de": "Das Flugzeug startet um 10 Uhr.",
            "en": "The plane takes off at 10 a.m."
          },
          {
            "de": "Der Flug ist pünktlich gestartet.",
            "en": "The flight departed on time."
          }
        ]
      },
      {
        "id": "landen",
        "group": "l7-g2",
        "term": "landen",
        "fa": "to land",
        "type": "verb",
        "form": "regular verb; perfect with *sein*: *landet – landete – ist gelandet*",
        "source": "Wortschatz.md",
        "example": "Das Flugzeug landet in Hamburg.",
        "exampleFa": "The plane lands in Hamburg.",
        "cloze": "Das Flugzeug landet in Hamburg. ____",
        "clozeFa": "The plane lands in Hamburg.",
        "answer": "landen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "landen",
          "landen",
          "landen"
        ],
        "examples": [
          {
            "de": "Das Flugzeug landet in Hamburg.",
            "en": "The plane lands in Hamburg."
          },
          {
            "de": "Wir sind sicher gelandet.",
            "en": "We landed safely."
          }
        ]
      },
      {
        "id": "das-gate",
        "group": "l7-g2",
        "term": "das Gate",
        "fa": "gate",
        "type": "noun",
        "form": "neuter noun; plural: *die Gates*",
        "source": "Wortschatz.md",
        "example": "An welchem Gate startet der Flug?",
        "exampleFa": "Which gate does the flight depart from?",
        "cloze": "An welchem ____ startet der Flug?",
        "clozeFa": "Which gate does the flight depart from?",
        "answer": "Gate",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Gate",
          "Gate",
          "Gate"
        ],
        "examples": [
          {
            "de": "An welchem Gate startet der Flug?",
            "en": "Which gate does the flight depart from?"
          },
          {
            "de": "Das Gate schließt in zehn Minuten.",
            "en": "The gate closes in ten minutes."
          }
        ]
      },
      {
        "id": "die-gepaeckausgabe",
        "group": "l7-g2",
        "term": "die Gepäckausgabe",
        "fa": "baggage claim",
        "type": "noun",
        "form": "feminine noun; plural: *die Gepäckausgaben*",
        "source": "Wortschatz.md",
        "example": "Die Koffer kommen an der Gepäckausgabe an.",
        "exampleFa": "The suitcases arrive at baggage claim.",
        "cloze": "Die Koffer kommen an der ____ an.",
        "clozeFa": "The suitcases arrive at baggage claim.",
        "answer": "Gepäckausgabe",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Gepäckausgabe",
          "Gepäckausgabe",
          "Gepäckausgabe"
        ],
        "examples": [
          {
            "de": "Die Koffer kommen an der Gepäckausgabe an.",
            "en": "The suitcases arrive at baggage claim."
          },
          {
            "de": "Wo ist die Gepäckausgabe?",
            "en": "Where is baggage claim?"
          }
        ]
      },
      {
        "id": "der-passagier-die-passagierin",
        "group": "l7-g2",
        "term": "der Passagier / die Passagierin",
        "fa": "passenger",
        "type": "noun",
        "form": "plural: *die Passagiere / die Passagierinnen*",
        "source": "Wortschatz.md",
        "example": "Alle Passagiere müssen einchecken.",
        "exampleFa": "All passengers must check in.",
        "cloze": "Alle ____e müssen einchecken.",
        "clozeFa": "All passengers must check in.",
        "answer": "Passagier",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Passagier / die Passagierin",
          "Passagier / die Passagierin",
          "Passagier"
        ],
        "examples": [
          {
            "de": "Alle Passagiere müssen einchecken.",
            "en": "All passengers must check in."
          },
          {
            "de": "Die Passagierin wartet am Gate.",
            "en": "The passenger is waiting at the gate."
          }
        ]
      },
      {
        "id": "das-handgepaeck",
        "group": "l7-g2",
        "term": "das Handgepäck",
        "fa": "hand luggage; carry-on baggage",
        "type": "noun",
        "form": "neuter noun; normally no plural",
        "source": "Wortschatz.md",
        "example": "Das Handgepäck darf nicht zu schwer sein.",
        "exampleFa": "The hand luggage must not be too heavy.",
        "cloze": "Das ____ darf nicht zu schwer sein.",
        "clozeFa": "The hand luggage must not be too heavy.",
        "answer": "Handgepäck",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Handgepäck",
          "Handgepäck",
          "Handgepäck"
        ],
        "examples": [
          {
            "de": "Das Handgepäck darf nicht zu schwer sein.",
            "en": "The hand luggage must not be too heavy."
          },
          {
            "de": "Nehmen Sie das als Handgepäck mit.",
            "en": "Take that as carry-on baggage."
          }
        ]
      },
      {
        "id": "der-pilot-die-pilotin",
        "group": "l7-g2",
        "term": "der Pilot / die Pilotin",
        "fa": "pilot",
        "type": "noun",
        "form": "masculine plural: *die Piloten*; feminine plural: *die Pilotinnen*",
        "source": "Wortschatz.md",
        "example": "Die Pilotin begrüßt die Passagiere.",
        "exampleFa": "The pilot welcomes the passengers.",
        "cloze": "Die ____in begrüßt die Passagiere.",
        "clozeFa": "The pilot welcomes the passengers.",
        "answer": "Pilot",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Pilot / die Pilotin",
          "Pilot / die Pilotin",
          "Pilot"
        ],
        "examples": [
          {
            "de": "Die Pilotin begrüßt die Passagiere.",
            "en": "The pilot welcomes the passengers."
          },
          {
            "de": "Der Pilot fliegt nach Hamburg.",
            "en": "The pilot is flying to Hamburg."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l7-g1",
        "icon": "1",
        "title": "Words 121-130",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l7-g2",
        "icon": "2",
        "title": "Words 131-140",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 8,
    "code": "Set 08",
    "title": "Wortschatz Set 8",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "ploetzlich",
        "group": "l8-g1",
        "term": "plötzlich",
        "fa": "suddenly",
        "type": "verb",
        "form": "adverb or adjective",
        "source": "Wortschatz.md",
        "example": "Der Rucksack war plötzlich weg.",
        "exampleFa": "The backpack was suddenly gone.",
        "cloze": "Der Rucksack war ____ weg.",
        "clozeFa": "The backpack was suddenly gone.",
        "answer": "plötzlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "plötzlich",
          "plötzlich",
          "plötzlich"
        ],
        "examples": [
          {
            "de": "Der Rucksack war plötzlich weg.",
            "en": "The backpack was suddenly gone."
          },
          {
            "de": "Plötzlich fiel der Flug aus.",
            "en": "Suddenly, the flight was cancelled."
          }
        ]
      },
      {
        "id": "weg-sein",
        "group": "l8-g1",
        "term": "weg sein",
        "fa": "to be gone; to be missing",
        "type": "phrase",
        "form": "fixed expression with *sein*: *ist weg – war weg – ist weg gewesen*",
        "source": "Wortschatz.md",
        "example": "Mein Koffer ist weg.",
        "exampleFa": "My suitcase is missing.",
        "cloze": "Mein Koffer ist ____.",
        "clozeFa": "My suitcase is missing.",
        "answer": "weg",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "weg sein",
          "weg sein",
          "weg"
        ],
        "examples": [
          {
            "de": "Mein Koffer ist weg.",
            "en": "My suitcase is missing."
          },
          {
            "de": "Das Geld war plötzlich weg.",
            "en": "The money was suddenly gone."
          }
        ]
      },
      {
        "id": "das-technische-problem",
        "group": "l8-g1",
        "term": "das technische Problem",
        "fa": "technical problem",
        "type": "noun",
        "form": "neuter noun phrase; genitive: *eines technischen Problems*",
        "source": "Wortschatz.md",
        "example": "Der Flug ist wegen eines technischen Problems verspätet.",
        "exampleFa": "The flight is delayed because of a technical problem.",
        "cloze": "Der Flug ist wegen eines ____n Problems verspätet.",
        "clozeFa": "The flight is delayed because of a technical problem.",
        "answer": "technische",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das technische Problem",
          "technische Problem",
          "technische"
        ],
        "examples": [
          {
            "de": "Der Flug ist wegen eines technischen Problems verspätet.",
            "en": "The flight is delayed because of a technical problem."
          },
          {
            "de": "Wir haben ein technisches Problem.",
            "en": "We have a technical problem."
          }
        ]
      },
      {
        "id": "viel-zu",
        "group": "l8-g1",
        "term": "viel zu …",
        "fa": "much too …; far too …",
        "type": "phrase",
        "form": "*viel* strengthens *zu + adjective/adverb*",
        "source": "Wortschatz.md",
        "example": "Die Flugtickets sind viel zu teuer.",
        "exampleFa": "The flight tickets are much too expensive.",
        "cloze": "Die Flugtickets sind ____ zu teuer.",
        "clozeFa": "The flight tickets are much too expensive.",
        "answer": "viel",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "viel zu …",
          "viel zu …",
          "viel"
        ],
        "examples": [
          {
            "de": "Die Flugtickets sind viel zu teuer.",
            "en": "The flight tickets are much too expensive."
          },
          {
            "de": "Er fährt viel zu schnell.",
            "en": "He drives far too fast."
          }
        ]
      },
      {
        "id": "der-geschaeftstermin",
        "group": "l8-g1",
        "term": "der Geschäftstermin",
        "fa": "business appointment",
        "type": "noun",
        "form": "masculine noun; plural: *die Geschäftstermine*",
        "source": "Wortschatz.md",
        "example": "Ich habe morgen einen Geschäftstermin.",
        "exampleFa": "I have a business appointment tomorrow.",
        "cloze": "Ich habe morgen einen ____.",
        "clozeFa": "I have a business appointment tomorrow.",
        "answer": "Geschäftstermin",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Geschäftstermin",
          "Geschäftstermin",
          "Geschäftstermin"
        ],
        "examples": [
          {
            "de": "Ich habe morgen einen Geschäftstermin.",
            "en": "I have a business appointment tomorrow."
          },
          {
            "de": "Der Geschäftstermin wurde verschoben.",
            "en": "The business appointment was postponed."
          }
        ]
      },
      {
        "id": "verpassen",
        "group": "l8-g1",
        "term": "verpassen",
        "fa": "to miss",
        "type": "verb",
        "form": "inseparable verb with accusative: *verpasst – verpasste – hat verpasst*",
        "source": "Wortschatz.md",
        "example": "Ich habe meinen Termin verpasst.",
        "exampleFa": "I missed my appointment.",
        "cloze": "Ich habe meinen Termin verpasst. ____",
        "clozeFa": "I missed my appointment.",
        "answer": "verpassen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "verpassen",
          "verpassen",
          "verpassen"
        ],
        "examples": [
          {
            "de": "Ich habe meinen Termin verpasst.",
            "en": "I missed my appointment."
          },
          {
            "de": "Wir dürfen den Flug nicht verpassen.",
            "en": "We must not miss the flight."
          }
        ]
      },
      {
        "id": "der-winterausflug",
        "group": "l8-g1",
        "term": "der Winterausflug",
        "fa": "winter excursion; winter outing",
        "type": "noun",
        "form": "masculine noun; plural: *die Winterausflüge*",
        "source": "Wortschatz.md",
        "example": "Wir machen einen Winterausflug.",
        "exampleFa": "We are going on a winter outing.",
        "cloze": "Wir machen einen ____.",
        "clozeFa": "We are going on a winter outing.",
        "answer": "Winterausflug",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Winterausflug",
          "Winterausflug",
          "Winterausflug"
        ],
        "examples": [
          {
            "de": "Wir machen einen Winterausflug.",
            "en": "We are going on a winter outing."
          },
          {
            "de": "Der Winterausflug findet am Samstag statt.",
            "en": "The winter excursion takes place on Saturday."
          }
        ]
      },
      {
        "id": "der-skiurlaub",
        "group": "l8-g1",
        "term": "der Skiurlaub",
        "fa": "skiing holiday",
        "type": "noun",
        "form": "masculine noun; plural: *die Skiurlaube*",
        "source": "Wortschatz.md",
        "example": "Im Winter machen wir Skiurlaub.",
        "exampleFa": "We go on a skiing holiday in winter.",
        "cloze": "Im Winter machen wir ____.",
        "clozeFa": "We go on a skiing holiday in winter.",
        "answer": "Skiurlaub",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Skiurlaub",
          "Skiurlaub",
          "Skiurlaub"
        ],
        "examples": [
          {
            "de": "Im Winter machen wir Skiurlaub.",
            "en": "We go on a skiing holiday in winter."
          },
          {
            "de": "Der Skiurlaub dauert eine Woche.",
            "en": "The skiing holiday lasts one week."
          }
        ]
      },
      {
        "id": "die-schneehuette",
        "group": "l8-g1",
        "term": "die Schneehütte",
        "fa": "snow hut; mountain hut in the snow",
        "type": "noun",
        "form": "feminine noun; plural: *die Schneehütten*",
        "source": "Wortschatz.md",
        "example": "In der Schneehütte kann man etwas essen.",
        "exampleFa": "You can eat something in the snow hut.",
        "cloze": "In der ____ kann man etwas essen.",
        "clozeFa": "You can eat something in the snow hut.",
        "answer": "Schneehütte",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Schneehütte",
          "Schneehütte",
          "Schneehütte"
        ],
        "examples": [
          {
            "de": "In der Schneehütte kann man etwas essen.",
            "en": "You can eat something in the snow hut."
          },
          {
            "de": "Wir machen eine Pause in einer Schneehütte.",
            "en": "We take a break in a mountain hut."
          }
        ]
      },
      {
        "id": "der-schlitten",
        "group": "l8-g1",
        "term": "der Schlitten",
        "fa": "sled; sledge",
        "type": "noun",
        "form": "masculine noun; plural: *die Schlitten*",
        "source": "Wortschatz.md",
        "example": "Das Kind fährt mit einem Schlitten.",
        "exampleFa": "The child rides a sled.",
        "cloze": "Das Kind fährt mit einem ____.",
        "clozeFa": "The child rides a sled.",
        "answer": "Schlitten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Schlitten",
          "Schlitten",
          "Schlitten"
        ],
        "examples": [
          {
            "de": "Das Kind fährt mit einem Schlitten.",
            "en": "The child rides a sled."
          },
          {
            "de": "Wir ziehen den Schlitten den Berg hinauf.",
            "en": "We pull the sled up the mountain."
          }
        ]
      },
      {
        "id": "hinauffahren-hinunterfahren",
        "group": "l8-g2",
        "term": "hinauffahren / hinunterfahren",
        "fa": "to travel up / to travel down",
        "type": "phrase",
        "form": "separable verbs; *fährt hinauf/hinunter – fuhr hinauf/hinunter – ist hinauf-/hinuntergefahren*",
        "source": "Wortschatz.md",
        "example": "Der Lift fährt den Berg hinauf.",
        "exampleFa": "The lift goes up the mountain.",
        "cloze": "Der Lift fährt den Berg hinauf. ____",
        "clozeFa": "The lift goes up the mountain.",
        "answer": "hinauffahren / hinunterfahren",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "hinauffahren / hinunterfahren",
          "hinauffahren / hinunterfahren",
          "hinauffahren / hinunterfahren"
        ],
        "examples": [
          {
            "de": "Der Lift fährt den Berg hinauf.",
            "en": "The lift goes up the mountain."
          },
          {
            "de": "Wir fahren mit dem Schlitten hinunter.",
            "en": "We go down on the sled."
          }
        ]
      },
      {
        "id": "der-lift",
        "group": "l8-g2",
        "term": "der Lift",
        "fa": "lift; ski lift",
        "type": "noun",
        "form": "masculine noun; plural: *die Lifte*",
        "source": "Wortschatz.md",
        "example": "Mit dem Lift fährt man den Berg hinauf.",
        "exampleFa": "You go up the mountain by lift.",
        "cloze": "Mit dem ____ fährt man den Berg hinauf.",
        "clozeFa": "You go up the mountain by lift.",
        "answer": "Lift",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Lift",
          "Lift",
          "Lift"
        ],
        "examples": [
          {
            "de": "Mit dem Lift fährt man den Berg hinauf.",
            "en": "You go up the mountain by lift."
          },
          {
            "de": "Der Lift ist heute geschlossen.",
            "en": "The lift is closed today."
          }
        ]
      },
      {
        "id": "rodeln-schlitten-fahren",
        "group": "l8-g2",
        "term": "rodeln / Schlitten fahren",
        "fa": "to go sledding; to toboggan",
        "type": "phrase",
        "form": "*rodelt – rodelte – ist gerodelt*; verb: *Schlitten fahren*; noun: *das Schlittenfahren*",
        "source": "Wortschatz.md",
        "example": "Die Kinder rodeln im Schnee.",
        "exampleFa": "The children are sledding in the snow.",
        "cloze": "Die Kinder ____ im Schnee.",
        "clozeFa": "The children are sledding in the snow.",
        "answer": "rodeln",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "rodeln / Schlitten fahren",
          "rodeln / Schlitten fahren",
          "rodeln"
        ],
        "examples": [
          {
            "de": "Die Kinder rodeln im Schnee.",
            "en": "The children are sledding in the snow."
          },
          {
            "de": "Am Wochenende sind wir Schlitten gefahren.",
            "en": "We went sledding at the weekend."
          }
        ]
      },
      {
        "id": "die-rodelbahn",
        "group": "l8-g2",
        "term": "die Rodelbahn",
        "fa": "toboggan run; sledding track",
        "type": "noun",
        "form": "feminine noun; plural: *die Rodelbahnen*",
        "source": "Wortschatz.md",
        "example": "Auf der Rodelbahn kann man rodeln.",
        "exampleFa": "You can sled on the toboggan run.",
        "cloze": "Auf der ____ kann man rodeln.",
        "clozeFa": "You can sled on the toboggan run.",
        "answer": "Rodelbahn",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Rodelbahn",
          "Rodelbahn",
          "Rodelbahn"
        ],
        "examples": [
          {
            "de": "Auf der Rodelbahn kann man rodeln.",
            "en": "You can sled on the toboggan run."
          },
          {
            "de": "Die Rodelbahn ist zwei Kilometer lang.",
            "en": "The toboggan run is two kilometres long."
          }
        ]
      },
      {
        "id": "sowohl-als-auch",
        "group": "l8-g2",
        "term": "sowohl … als auch",
        "fa": "both … and",
        "type": "phrase",
        "form": "connects two parallel words or phrases",
        "source": "Wortschatz.md",
        "example": "Man kann sowohl essen als auch trinken.",
        "exampleFa": "You can both eat and drink.",
        "cloze": "Man kann ____ essen als auch trinken.",
        "clozeFa": "You can both eat and drink.",
        "answer": "sowohl",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sowohl … als auch",
          "sowohl … als auch",
          "sowohl"
        ],
        "examples": [
          {
            "de": "Man kann sowohl essen als auch trinken.",
            "en": "You can both eat and drink."
          },
          {
            "de": "Sie spricht sowohl Deutsch als auch Englisch.",
            "en": "She speaks both German and English."
          }
        ]
      },
      {
        "id": "zwar-aber",
        "group": "l8-g2",
        "term": "zwar …, aber",
        "fa": "admittedly … but; … but",
        "type": "phrase",
        "form": "paired connector expressing a contrast",
        "source": "Wortschatz.md",
        "example": "Die Rodelbahn ist zwar lang, aber nicht steil.",
        "exampleFa": "The toboggan run is long but not steep.",
        "cloze": "Die Rodelbahn ist ____ lang, aber nicht steil.",
        "clozeFa": "The toboggan run is long but not steep.",
        "answer": "zwar",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zwar …, aber",
          "zwar …, aber",
          "zwar"
        ],
        "examples": [
          {
            "de": "Die Rodelbahn ist zwar lang, aber nicht steil.",
            "en": "The toboggan run is long but not steep."
          },
          {
            "de": "Das Ticket ist zwar teuer, aber flexibel.",
            "en": "The ticket is expensive but flexible."
          }
        ]
      },
      {
        "id": "denn",
        "group": "l8-g2",
        "term": "denn",
        "fa": "because; for",
        "type": "verb",
        "form": "coordinating conjunction; normal verb-second order follows",
        "source": "Wortschatz.md",
        "example": "Wir warten, denn der Flug ist verspätet.",
        "exampleFa": "We are waiting because the flight is delayed.",
        "cloze": "Wir warten, ____ der Flug ist verspätet.",
        "clozeFa": "We are waiting because the flight is delayed.",
        "answer": "denn",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "denn",
          "denn",
          "denn"
        ],
        "examples": [
          {
            "de": "Wir warten, denn der Flug ist verspätet.",
            "en": "We are waiting because the flight is delayed."
          },
          {
            "de": "Ich fahre langsam, denn die Straße ist glatt.",
            "en": "I drive slowly because the road is slippery."
          }
        ]
      },
      {
        "id": "entweder-oder",
        "group": "l8-g2",
        "term": "entweder … oder",
        "fa": "either … or",
        "type": "phrase",
        "form": "connects two alternatives",
        "source": "Wortschatz.md",
        "example": "Wir fahren entweder mit dem Bus oder mit dem Zug.",
        "exampleFa": "We travel either by bus or by train.",
        "cloze": "Wir fahren ____ mit dem Bus oder mit dem Zug.",
        "clozeFa": "We travel either by bus or by train.",
        "answer": "entweder",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "entweder … oder",
          "entweder … oder",
          "entweder"
        ],
        "examples": [
          {
            "de": "Wir fahren entweder mit dem Bus oder mit dem Zug.",
            "en": "We travel either by bus or by train."
          },
          {
            "de": "Mina hatte entweder einen Schutzengel oder Glück.",
            "en": "Mina either had a guardian angel or was lucky."
          }
        ]
      },
      {
        "id": "ausleihen",
        "group": "l8-g2",
        "term": "ausleihen",
        "fa": "to borrow; to rent",
        "type": "verb",
        "form": "separable verb: *leiht aus – lieh aus – hat ausgeliehen*",
        "source": "Wortschatz.md",
        "example": "Hier kann man Schlitten ausleihen.",
        "exampleFa": "You can rent sleds here.",
        "cloze": "Hier kann man Schlitten ____.",
        "clozeFa": "You can rent sleds here.",
        "answer": "ausleihen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ausleihen",
          "ausleihen",
          "ausleihen"
        ],
        "examples": [
          {
            "de": "Hier kann man Schlitten ausleihen.",
            "en": "You can rent sleds here."
          },
          {
            "de": "Ich leihe mir ein Buch aus.",
            "en": "I borrow a book."
          }
        ]
      },
      {
        "id": "steil-kurvig",
        "group": "l8-g2",
        "term": "steil / kurvig",
        "fa": "steep / winding, curvy",
        "type": "adjective",
        "form": "adjectives; comparatives: *steiler / kurviger*",
        "source": "Wortschatz.md",
        "example": "Der Berg ist sehr steil.",
        "exampleFa": "The mountain is very steep.",
        "cloze": "Der Berg ist sehr ____.",
        "clozeFa": "The mountain is very steep.",
        "answer": "steil",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "steil / kurvig",
          "steil / kurvig",
          "steil"
        ],
        "examples": [
          {
            "de": "Der Berg ist sehr steil.",
            "en": "The mountain is very steep."
          },
          {
            "de": "Die Straße ist lang und kurvig.",
            "en": "The road is long and winding."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l8-g1",
        "icon": "1",
        "title": "Words 141-150",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l8-g2",
        "icon": "2",
        "title": "Words 151-160",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 9,
    "code": "Set 09",
    "title": "Wortschatz Set 9",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "keine-angst-haben",
        "group": "l9-g1",
        "term": "keine Angst haben",
        "fa": "not to be afraid",
        "type": "phrase",
        "form": "often *Angst vor + dative haben*",
        "source": "Wortschatz.md",
        "example": "Du musst keine Angst haben.",
        "exampleFa": "You don’t need to be afraid.",
        "cloze": "Du musst ____.",
        "clozeFa": "You don’t need to be afraid.",
        "answer": "keine Angst haben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "keine Angst haben",
          "keine Angst haben",
          "keine Angst haben"
        ],
        "examples": [
          {
            "de": "Du musst keine Angst haben.",
            "en": "You don’t need to be afraid."
          },
          {
            "de": "Sie hat Angst vor dem Fliegen.",
            "en": "She is afraid of flying."
          }
        ]
      },
      {
        "id": "der-tiefschnee",
        "group": "l9-g1",
        "term": "der Tiefschnee",
        "fa": "deep snow",
        "type": "noun",
        "form": "masculine noun; normally no plural",
        "source": "Wortschatz.md",
        "example": "Im Tiefschnee landet man weich.",
        "exampleFa": "You land softly in deep snow.",
        "cloze": "Im ____ landet man weich.",
        "clozeFa": "You land softly in deep snow.",
        "answer": "Tiefschnee",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Tiefschnee",
          "Tiefschnee",
          "Tiefschnee"
        ],
        "examples": [
          {
            "de": "Im Tiefschnee landet man weich.",
            "en": "You land softly in deep snow."
          },
          {
            "de": "Das Fahren im Tiefschnee ist schwierig.",
            "en": "Travelling through deep snow is difficult."
          }
        ]
      },
      {
        "id": "der-schutzengel",
        "group": "l9-g1",
        "term": "der Schutzengel",
        "fa": "guardian angel",
        "type": "noun",
        "form": "masculine noun; plural: *die Schutzengel*",
        "source": "Wortschatz.md",
        "example": "Mina hatte einen Schutzengel.",
        "exampleFa": "Mina had a guardian angel.",
        "cloze": "Mina hatte einen ____.",
        "clozeFa": "Mina had a guardian angel.",
        "answer": "Schutzengel",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Schutzengel",
          "Schutzengel",
          "Schutzengel"
        ],
        "examples": [
          {
            "de": "Mina hatte einen Schutzengel.",
            "en": "Mina had a guardian angel."
          },
          {
            "de": "Mein Schutzengel hat gut aufgepasst.",
            "en": "My guardian angel watched over me."
          }
        ]
      },
      {
        "id": "ausrutschen",
        "group": "l9-g1",
        "term": "ausrutschen",
        "fa": "to slip",
        "type": "verb",
        "form": "separable verb; perfect with *sein*: *rutscht aus – rutschte aus – ist ausgerutscht*",
        "source": "Wortschatz.md",
        "example": "Auf dem Eis kann man leicht ausrutschen.",
        "exampleFa": "You can easily slip on the ice.",
        "cloze": "Auf dem Eis kann man leicht ____.",
        "clozeFa": "You can easily slip on the ice.",
        "answer": "ausrutschen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ausrutschen",
          "ausrutschen",
          "ausrutschen"
        ],
        "examples": [
          {
            "de": "Auf dem Eis kann man leicht ausrutschen.",
            "en": "You can easily slip on the ice."
          },
          {
            "de": "Ich bin im Schnee ausgerutscht.",
            "en": "I slipped in the snow."
          }
        ]
      },
      {
        "id": "entdecken",
        "group": "l9-g1",
        "term": "entdecken",
        "fa": "to discover",
        "type": "verb",
        "form": "inseparable verb with accusative: *entdeckt – entdeckte – hat entdeckt*",
        "source": "Wortschatz.md",
        "example": "Wir haben eine tolle Hütte entdeckt.",
        "exampleFa": "We discovered a great hut.",
        "cloze": "Wir haben eine tolle Hütte entdeckt. ____",
        "clozeFa": "We discovered a great hut.",
        "answer": "entdecken",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "entdecken",
          "entdecken",
          "entdecken"
        ],
        "examples": [
          {
            "de": "Wir haben eine tolle Hütte entdeckt.",
            "en": "We discovered a great hut."
          },
          {
            "de": "Sie entdeckt gern neue Orte.",
            "en": "She likes discovering new places."
          }
        ]
      },
      {
        "id": "gemuetlich",
        "group": "l9-g1",
        "term": "gemütlich",
        "fa": "cosy; comfortable",
        "type": "verb",
        "form": "adjective/adverb; comparative: *gemütlicher*",
        "source": "Wortschatz.md",
        "example": "Die Schneehütte ist sehr gemütlich.",
        "exampleFa": "The snow hut is very cosy.",
        "cloze": "Die Schneehütte ist sehr ____.",
        "clozeFa": "The snow hut is very cosy.",
        "answer": "gemütlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "gemütlich",
          "gemütlich",
          "gemütlich"
        ],
        "examples": [
          {
            "de": "Die Schneehütte ist sehr gemütlich.",
            "en": "The snow hut is very cosy."
          },
          {
            "de": "Wir sitzen gemütlich am Feuer.",
            "en": "We are sitting comfortably by the fire."
          }
        ]
      },
      {
        "id": "begeistert",
        "group": "l9-g1",
        "term": "begeistert",
        "fa": "enthusiastic; delighted",
        "type": "adjective",
        "form": "adjective; often *von etwas begeistert sein* with dative",
        "source": "Wortschatz.md",
        "example": "Du klingst richtig begeistert.",
        "exampleFa": "You sound really enthusiastic.",
        "cloze": "Du klingst richtig ____.",
        "clozeFa": "You sound really enthusiastic.",
        "answer": "begeistert",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "begeistert",
          "begeistert",
          "begeistert"
        ],
        "examples": [
          {
            "de": "Du klingst richtig begeistert.",
            "en": "You sound really enthusiastic."
          },
          {
            "de": "Sie ist von der Reise begeistert.",
            "en": "She is delighted with the trip."
          }
        ]
      },
      {
        "id": "bewerten",
        "group": "l9-g1",
        "term": "bewerten",
        "fa": "to rate; to evaluate",
        "type": "verb",
        "form": "inseparable verb with accusative: *bewertet – bewertete – hat bewertet*",
        "source": "Wortschatz.md",
        "example": "Ich würde die Hütte mit zehn Sternen bewerten.",
        "exampleFa": "I would rate the hut ten stars.",
        "cloze": "Ich würde die Hütte mit zehn Sternen ____.",
        "clozeFa": "I would rate the hut ten stars.",
        "answer": "bewerten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bewerten",
          "bewerten",
          "bewerten"
        ],
        "examples": [
          {
            "de": "Ich würde die Hütte mit zehn Sternen bewerten.",
            "en": "I would rate the hut ten stars."
          },
          {
            "de": "Die Gäste bewerten das Hotel online.",
            "en": "The guests rate the hotel online."
          }
        ]
      },
      {
        "id": "lust-haben",
        "group": "l9-g1",
        "term": "Lust haben",
        "fa": "to feel like; to want to",
        "type": "phrase",
        "form": "*Lust auf + accusative* or *Lust, etwas zu tun*",
        "source": "Wortschatz.md",
        "example": "Hättest du Lust mitzukommen?",
        "exampleFa": "Would you like to come along?",
        "cloze": "Hättest du Lust mitzukommen? ____",
        "clozeFa": "Would you like to come along?",
        "answer": "Lust haben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Lust haben",
          "Lust haben",
          "Lust haben"
        ],
        "examples": [
          {
            "de": "Hättest du Lust mitzukommen?",
            "en": "Would you like to come along?"
          },
          {
            "de": "Ich habe Lust auf einen Ausflug.",
            "en": "I feel like going on an outing."
          }
        ]
      },
      {
        "id": "bescheid-sagen",
        "group": "l9-g1",
        "term": "Bescheid sagen",
        "fa": "to let someone know; to inform someone",
        "type": "phrase",
        "form": "person in dative: *jemandem Bescheid sagen*",
        "source": "Wortschatz.md",
        "example": "Sag mir bitte Bescheid.",
        "exampleFa": "Please let me know.",
        "cloze": "Sag mir bitte Bescheid. ____",
        "clozeFa": "Please let me know.",
        "answer": "Bescheid sagen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Bescheid sagen",
          "Bescheid sagen",
          "Bescheid sagen"
        ],
        "examples": [
          {
            "de": "Sag mir bitte Bescheid.",
            "en": "Please let me know."
          },
          {
            "de": "Ich sage dir morgen Bescheid.",
            "en": "I’ll let you know tomorrow."
          }
        ]
      },
      {
        "id": "eine-menge",
        "group": "l9-g2",
        "term": "eine Menge",
        "fa": "a lot of; a large amount",
        "type": "phrase",
        "form": "quantity expression, often followed directly by a noun",
        "source": "Wortschatz.md",
        "example": "Das klingt nach einer Menge Spaß.",
        "exampleFa": "That sounds like a lot of fun.",
        "cloze": "Das klingt nach einer ____ Spaß.",
        "clozeFa": "That sounds like a lot of fun.",
        "answer": "Menge",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "eine Menge",
          "Menge",
          "Menge"
        ],
        "examples": [
          {
            "de": "Das klingt nach einer Menge Spaß.",
            "en": "That sounds like a lot of fun."
          },
          {
            "de": "Wir haben eine Menge Zeit.",
            "en": "We have plenty of time."
          }
        ]
      },
      {
        "id": "jemandem-aus-einem-brief-vorlesen",
        "group": "l9-g2",
        "term": "jemandem aus einem Brief vorlesen",
        "fa": "to read aloud to someone from a letter",
        "type": "phrase",
        "form": "person in dative; *aus* + dative; separable verb: *liest vor – las vor – hat vorgelesen*",
        "source": "Wortschatz.md",
        "example": "Rafa liest Magda aus einem Brief vor.",
        "exampleFa": "Rafa reads aloud to Magda from a letter.",
        "cloze": "Rafa liest Magda aus einem Brief vor. ____",
        "clozeFa": "Rafa reads aloud to Magda from a letter.",
        "answer": "jemandem aus einem Brief vorlesen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemandem aus einem Brief vorlesen",
          "jemandem aus einem Brief vorlesen",
          "jemandem aus einem Brief vorlesen"
        ],
        "examples": [
          {
            "de": "Rafa liest Magda aus einem Brief vor.",
            "en": "Rafa reads aloud to Magda from a letter."
          },
          {
            "de": "Sie hat den Kindern eine Geschichte vorgelesen.",
            "en": "She read a story aloud to the children."
          }
        ]
      },
      {
        "id": "der-brief",
        "group": "l9-g2",
        "term": "der Brief",
        "fa": "letter",
        "type": "noun",
        "form": "masculine noun; plural: *die Briefe*",
        "source": "Wortschatz.md",
        "example": "Ich habe einen Brief bekommen.",
        "exampleFa": "I received a letter.",
        "cloze": "Ich habe einen ____ bekommen.",
        "clozeFa": "I received a letter.",
        "answer": "Brief",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Brief",
          "Brief",
          "Brief"
        ],
        "examples": [
          {
            "de": "Ich habe einen Brief bekommen.",
            "en": "I received a letter."
          },
          {
            "de": "Er liest aus dem Brief vor.",
            "en": "He reads aloud from the letter."
          }
        ]
      },
      {
        "id": "der-vermieter-die-vermieterin",
        "group": "l9-g2",
        "term": "der Vermieter / die Vermieterin",
        "fa": "landlord / landlady",
        "type": "noun",
        "form": "plurals: *die Vermieter / die Vermieterinnen*",
        "source": "Wortschatz.md",
        "example": "Die Vermieterin schreibt einen Brief.",
        "exampleFa": "The landlady writes a letter.",
        "cloze": "Die ____in schreibt einen Brief.",
        "clozeFa": "The landlady writes a letter.",
        "answer": "Vermieter",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Vermieter / die Vermieterin",
          "Vermieter / die Vermieterin",
          "Vermieter"
        ],
        "examples": [
          {
            "de": "Die Vermieterin schreibt einen Brief.",
            "en": "The landlady writes a letter."
          },
          {
            "de": "Wir sprechen mit unserem Vermieter.",
            "en": "We are speaking with our landlord."
          }
        ]
      },
      {
        "id": "ueber-etwas-informieren",
        "group": "l9-g2",
        "term": "über etwas informieren",
        "fa": "to provide information about something; to inform about something",
        "type": "phrase",
        "form": "*über* + accusative; *informiert – informierte – hat informiert*",
        "source": "Wortschatz.md",
        "example": "Der Brief informiert über den Winterdienst.",
        "exampleFa": "The letter provides information about winter maintenance.",
        "cloze": "Der Brief informiert über den Winterdienst. ____",
        "clozeFa": "The letter provides information about winter maintenance.",
        "answer": "über etwas informieren",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "über etwas informieren",
          "über etwas informieren",
          "über etwas informieren"
        ],
        "examples": [
          {
            "de": "Der Brief informiert über den Winterdienst.",
            "en": "The letter provides information about winter maintenance."
          },
          {
            "de": "Die Airline informiert über den Flugausfall.",
            "en": "The airline provides information about the flight cancellation."
          }
        ]
      },
      {
        "id": "der-winterdienst",
        "group": "l9-g2",
        "term": "der Winterdienst",
        "fa": "winter maintenance; snow and ice clearance service",
        "type": "noun",
        "form": "masculine noun; plural: *die Winterdienste*",
        "source": "Wortschatz.md",
        "example": "Der Winterdienst räumt die Straßen.",
        "exampleFa": "The winter service clears the roads.",
        "cloze": "Der ____ räumt die Straßen.",
        "clozeFa": "The winter service clears the roads.",
        "answer": "Winterdienst",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Winterdienst",
          "Winterdienst",
          "Winterdienst"
        ],
        "examples": [
          {
            "de": "Der Winterdienst räumt die Straßen.",
            "en": "The winter service clears the roads."
          },
          {
            "de": "Die Vermieterin informiert über den Winterdienst.",
            "en": "The landlady provides information about winter maintenance."
          }
        ]
      },
      {
        "id": "sich-ueber-etwas-freuen",
        "group": "l9-g2",
        "term": "sich über etwas freuen",
        "fa": "to be happy about something",
        "type": "phrase",
        "form": "reflexive verb; *über* + accusative; *freut sich – freute sich – hat sich gefreut*",
        "source": "Wortschatz.md",
        "example": "Rafa freut sich über den Brief.",
        "exampleFa": "Rafa is happy about the letter.",
        "cloze": "Rafa freut sich über den Brief. ____",
        "clozeFa": "Rafa is happy about the letter.",
        "answer": "sich über etwas freuen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich über etwas freuen",
          "sich über etwas freuen",
          "sich über etwas freuen"
        ],
        "examples": [
          {
            "de": "Rafa freut sich über den Brief.",
            "en": "Rafa is happy about the letter."
          },
          {
            "de": "Wir haben uns über die Nachricht gefreut.",
            "en": "We were happy about the news."
          }
        ]
      },
      {
        "id": "jemandem-einen-brief-schreiben",
        "group": "l9-g2",
        "term": "jemandem einen Brief schreiben",
        "fa": "to write someone a letter",
        "type": "phrase",
        "form": "person in dative + thing in accusative; *schreibt – schrieb – hat geschrieben*",
        "source": "Wortschatz.md",
        "example": "Magda schreibt der Vermieterin einen Brief.",
        "exampleFa": "Magda writes the landlady a letter.",
        "cloze": "Magda schreibt der Vermieterin ____ Brief.",
        "clozeFa": "Magda writes the landlady a letter.",
        "answer": "einen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemandem einen Brief schreiben",
          "jemandem einen Brief schreiben",
          "einen"
        ],
        "examples": [
          {
            "de": "Magda schreibt der Vermieterin einen Brief.",
            "en": "Magda writes the landlady a letter."
          },
          {
            "de": "Ich habe meinem Freund eine Nachricht geschrieben.",
            "en": "I wrote my friend a message."
          }
        ]
      },
      {
        "id": "das-bild",
        "group": "l9-g2",
        "term": "das Bild",
        "fa": "picture; image",
        "type": "noun",
        "form": "neuter noun; plural: *die Bilder*; *auf dem Bild* = in the picture",
        "source": "Wortschatz.md",
        "example": "Was sehen Sie auf dem Bild?",
        "exampleFa": "What do you see in the picture?",
        "cloze": "Was sehen Sie auf dem ____?",
        "clozeFa": "What do you see in the picture?",
        "answer": "Bild",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Bild",
          "Bild",
          "Bild"
        ],
        "examples": [
          {
            "de": "Was sehen Sie auf dem Bild?",
            "en": "What do you see in the picture?"
          },
          {
            "de": "Auf dem Bild sieht man eine Familie.",
            "en": "You can see a family in the picture."
          }
        ]
      },
      {
        "id": "die-rueckseite",
        "group": "l9-g2",
        "term": "die Rückseite",
        "fa": "back; reverse side",
        "type": "noun",
        "form": "feminine noun; plural: *die Rückseiten*; *auf der Rückseite* uses dative",
        "source": "Wortschatz.md",
        "example": "Lesen Sie den Text auf der Rückseite.",
        "exampleFa": "Read the text on the back.",
        "cloze": "Lesen Sie den Text auf der ____.",
        "clozeFa": "Read the text on the back.",
        "answer": "Rückseite",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Rückseite",
          "Rückseite",
          "Rückseite"
        ],
        "examples": [
          {
            "de": "Lesen Sie den Text auf der Rückseite.",
            "en": "Read the text on the back."
          },
          {
            "de": "Die Antwort steht auf der Rückseite.",
            "en": "The answer is on the reverse side."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l9-g1",
        "icon": "1",
        "title": "Words 161-170",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l9-g2",
        "icon": "2",
        "title": "Words 171-180",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 10,
    "code": "Set 10",
    "title": "Wortschatz Set 10",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "daran-denken",
        "group": "l10-g1",
        "term": "daran denken",
        "fa": "to remember; to think about it",
        "type": "phrase",
        "form": "*an etwas* + accusative; *daran* refers to a thing or a following *dass* clause",
        "source": "Wortschatz.md",
        "example": "Denken Sie daran, dass Sie Winterdienst haben.",
        "exampleFa": "Remember that you have winter-maintenance duty.",
        "cloze": "____ Sie daran, dass Sie Winterdienst haben.",
        "clozeFa": "Remember that you have winter-maintenance duty.",
        "answer": "denken",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "daran denken",
          "daran denken",
          "denken"
        ],
        "examples": [
          {
            "de": "Denken Sie daran, dass Sie Winterdienst haben.",
            "en": "Remember that you have winter-maintenance duty."
          },
          {
            "de": "Ich denke jeden Tag daran.",
            "en": "I think about it every day."
          }
        ]
      },
      {
        "id": "laut-mietvertrag",
        "group": "l10-g1",
        "term": "laut Mietvertrag",
        "fa": "according to the rental agreement",
        "type": "phrase",
        "form": "*laut* can take genitive or dative; *der Mietvertrag*, plural: *die Mietverträge*",
        "source": "Wortschatz.md",
        "example": "Laut Mietvertrag sind die Mieter verantwortlich.",
        "exampleFa": "According to the rental agreement, the tenants are responsible.",
        "cloze": "____ sind die Mieter verantwortlich.",
        "clozeFa": "According to the rental agreement, the tenants are responsible.",
        "answer": "laut Mietvertrag",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "laut Mietvertrag",
          "laut Mietvertrag",
          "laut Mietvertrag"
        ],
        "examples": [
          {
            "de": "Laut Mietvertrag sind die Mieter verantwortlich.",
            "en": "According to the rental agreement, the tenants are responsible."
          },
          {
            "de": "Das ist im Mietvertrag geregelt.",
            "en": "That is regulated in the rental agreement."
          }
        ]
      },
      {
        "id": "zu-etwas-verpflichtet-sein",
        "group": "l10-g1",
        "term": "zu etwas verpflichtet sein",
        "fa": "to be required/obliged to do something",
        "type": "phrase",
        "form": "*zu* + dative; often followed by *zu + infinitive*",
        "source": "Wortschatz.md",
        "example": "Die Mieter sind zum Winterdienst verpflichtet.",
        "exampleFa": "The tenants are responsible for winter maintenance.",
        "cloze": "Die Mieter sind ____m Winterdienst verpflichtet.",
        "clozeFa": "The tenants are responsible for winter maintenance.",
        "answer": "zu",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zu etwas verpflichtet sein",
          "zu etwas verpflichtet sein",
          "zu"
        ],
        "examples": [
          {
            "de": "Die Mieter sind zum Winterdienst verpflichtet.",
            "en": "The tenants are responsible for winter maintenance."
          },
          {
            "de": "Sie sind verpflichtet, den Schnee zu räumen.",
            "en": "You are required to clear the snow."
          }
        ]
      },
      {
        "id": "der-gehweg",
        "group": "l10-g1",
        "term": "der Gehweg",
        "fa": "pavement; sidewalk",
        "type": "noun",
        "form": "masculine noun; plural: *die Gehwege*",
        "source": "Wortschatz.md",
        "example": "Der Gehweg muss geräumt sein.",
        "exampleFa": "The pavement must be cleared.",
        "cloze": "Der ____ muss geräumt sein.",
        "clozeFa": "The pavement must be cleared.",
        "answer": "Gehweg",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Gehweg",
          "Gehweg",
          "Gehweg"
        ],
        "examples": [
          {
            "de": "Der Gehweg muss geräumt sein.",
            "en": "The pavement must be cleared."
          },
          {
            "de": "Bitte streuen Sie die Gehwege.",
            "en": "Please spread grit on the pavements."
          }
        ]
      },
      {
        "id": "der-schneefall",
        "group": "l10-g1",
        "term": "der Schneefall",
        "fa": "snowfall",
        "type": "noun",
        "form": "masculine noun; plural: *die Schneefälle*",
        "source": "Wortschatz.md",
        "example": "Bei starkem Schneefall reicht einmaliges Räumen nicht.",
        "exampleFa": "During heavy snowfall, clearing once is not enough.",
        "cloze": "Bei starkem ____ reicht einmaliges Räumen nicht.",
        "clozeFa": "During heavy snowfall, clearing once is not enough.",
        "answer": "Schneefall",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Schneefall",
          "Schneefall",
          "Schneefall"
        ],
        "examples": [
          {
            "de": "Bei starkem Schneefall reicht einmaliges Räumen nicht.",
            "en": "During heavy snowfall, clearing once is not enough."
          },
          {
            "de": "Der Schneefall dauert noch an.",
            "en": "The snowfall is continuing."
          }
        ]
      },
      {
        "id": "reichen",
        "group": "l10-g1",
        "term": "reichen",
        "fa": "to be enough; to suffice",
        "type": "verb",
        "form": "*reicht – reichte – hat gereicht*; often *Es reicht (nicht), etwas zu tun*",
        "source": "Wortschatz.md",
        "example": "Einmal am Tag reicht nicht.",
        "exampleFa": "Once a day is not enough.",
        "cloze": "Einmal am Tag reicht nicht. ____",
        "clozeFa": "Once a day is not enough.",
        "answer": "reichen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "reichen",
          "reichen",
          "reichen"
        ],
        "examples": [
          {
            "de": "Einmal am Tag reicht nicht.",
            "en": "Once a day is not enough."
          },
          {
            "de": "Das Geld reicht für die Reise.",
            "en": "The money is enough for the trip."
          }
        ]
      },
      {
        "id": "fegen-streuen",
        "group": "l10-g1",
        "term": "fegen / streuen",
        "fa": "to sweep / to spread, scatter",
        "type": "phrase",
        "form": "*hat gefegt / hat gestreut*; both normally take an accusative object",
        "source": "Wortschatz.md",
        "example": "Wir fegen den Schnee vom Gehweg.",
        "exampleFa": "We sweep the snow off the pavement.",
        "cloze": "Wir ____ den Schnee vom Gehweg.",
        "clozeFa": "We sweep the snow off the pavement.",
        "answer": "fegen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "fegen / streuen",
          "fegen / streuen",
          "fegen"
        ],
        "examples": [
          {
            "de": "Wir fegen den Schnee vom Gehweg.",
            "en": "We sweep the snow off the pavement."
          },
          {
            "de": "Bitte streuen Sie Sand auf den Gehweg.",
            "en": "Please spread sand on the pavement."
          }
        ]
      },
      {
        "id": "sich-verletzen",
        "group": "l10-g1",
        "term": "sich verletzen",
        "fa": "to injure oneself; to get hurt",
        "type": "verb",
        "form": "reflexive verb: *verletzt sich – verletzte sich – hat sich verletzt*",
        "source": "Wortschatz.md",
        "example": "Man kann ausrutschen und sich verletzen.",
        "exampleFa": "You can slip and get hurt.",
        "cloze": "Man kann ausrutschen und ____.",
        "clozeFa": "You can slip and get hurt.",
        "answer": "sich verletzen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich verletzen",
          "sich verletzen",
          "sich verletzen"
        ],
        "examples": [
          {
            "de": "Man kann ausrutschen und sich verletzen.",
            "en": "You can slip and get hurt."
          },
          {
            "de": "Sie hat sich am Bein verletzt.",
            "en": "She injured her leg."
          }
        ]
      },
      {
        "id": "mindestens",
        "group": "l10-g1",
        "term": "mindestens",
        "fa": "at least",
        "type": "verb",
        "form": "adverb; opposite: *höchstens*",
        "source": "Wortschatz.md",
        "example": "Räumen Sie mindestens dreimal täglich.",
        "exampleFa": "Clear the snow at least three times a day.",
        "cloze": "Räumen Sie ____ dreimal täglich.",
        "clozeFa": "Clear the snow at least three times a day.",
        "answer": "mindestens",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "mindestens",
          "mindestens",
          "mindestens"
        ],
        "examples": [
          {
            "de": "Räumen Sie mindestens dreimal täglich.",
            "en": "Clear the snow at least three times a day."
          },
          {
            "de": "Die Wartezeit beträgt mindestens zwei Stunden.",
            "en": "The waiting time is at least two hours."
          }
        ]
      },
      {
        "id": "der-besen-die-schneeschaufel",
        "group": "l10-g1",
        "term": "der Besen / die Schneeschaufel",
        "fa": "broom / snow shovel",
        "type": "noun",
        "form": "plurals: *die Besen / die Schneeschaufeln*",
        "source": "Wortschatz.md",
        "example": "Besen und Schneeschaufeln stehen im Keller.",
        "exampleFa": "Brooms and snow shovels are in the basement.",
        "cloze": "____ und Schneeschaufeln stehen im Keller.",
        "clozeFa": "Brooms and snow shovels are in the basement.",
        "answer": "Besen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Besen / die Schneeschaufel",
          "Besen / die Schneeschaufel",
          "Besen"
        ],
        "examples": [
          {
            "de": "Besen und Schneeschaufeln stehen im Keller.",
            "en": "Brooms and snow shovels are in the basement."
          },
          {
            "de": "Ich räume den Schnee mit einer Schneeschaufel.",
            "en": "I clear the snow with a snow shovel."
          }
        ]
      },
      {
        "id": "der-hausflur",
        "group": "l10-g2",
        "term": "der Hausflur",
        "fa": "hallway; communal entrance hall",
        "type": "noun",
        "form": "masculine noun; plural: *die Hausflure*",
        "source": "Wortschatz.md",
        "example": "Der Winterdienst-Plan hängt im Hausflur.",
        "exampleFa": "The winter-maintenance schedule hangs in the hallway.",
        "cloze": "Der Winterdienst-Plan hängt im ____.",
        "clozeFa": "The winter-maintenance schedule hangs in the hallway.",
        "answer": "Hausflur",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Hausflur",
          "Hausflur",
          "Hausflur"
        ],
        "examples": [
          {
            "de": "Der Winterdienst-Plan hängt im Hausflur.",
            "en": "The winter-maintenance schedule hangs in the hallway."
          },
          {
            "de": "Im Hausflur darf nichts stehen.",
            "en": "Nothing may be left in the hallway."
          }
        ]
      },
      {
        "id": "dran-sein",
        "group": "l10-g2",
        "term": "dran sein",
        "fa": "to be one’s turn",
        "type": "phrase",
        "form": "conversational form of *an der Reihe sein*",
        "source": "Wortschatz.md",
        "example": "Wer ist heute mit dem Schneeräumen dran?",
        "exampleFa": "Whose turn is it to clear the snow today?",
        "cloze": "Wer ist heute mit dem Schneeräumen ____?",
        "clozeFa": "Whose turn is it to clear the snow today?",
        "answer": "dran",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "dran sein",
          "dran sein",
          "dran"
        ],
        "examples": [
          {
            "de": "Wer ist heute mit dem Schneeräumen dran?",
            "en": "Whose turn is it to clear the snow today?"
          },
          {
            "de": "Morgen bin ich dran.",
            "en": "Tomorrow it is my turn."
          }
        ]
      },
      {
        "id": "mehrmals",
        "group": "l10-g2",
        "term": "mehrmals",
        "fa": "several times; repeatedly",
        "type": "verb",
        "form": "adverb; often *mehrmals am Tag/in der Woche*",
        "source": "Wortschatz.md",
        "example": "Der Schnee muss mehrmals am Tag geräumt werden.",
        "exampleFa": "The snow must be cleared several times a day.",
        "cloze": "Der Schnee muss ____ am Tag geräumt werden.",
        "clozeFa": "The snow must be cleared several times a day.",
        "answer": "mehrmals",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "mehrmals",
          "mehrmals",
          "mehrmals"
        ],
        "examples": [
          {
            "de": "Der Schnee muss mehrmals am Tag geräumt werden.",
            "en": "The snow must be cleared several times a day."
          },
          {
            "de": "Ich habe mehrmals angerufen.",
            "en": "I called several times."
          }
        ]
      },
      {
        "id": "keine-zeit-haben",
        "group": "l10-g2",
        "term": "keine Zeit haben",
        "fa": "to have no time",
        "type": "phrase",
        "form": "often followed by a comma and *zu + infinitive*",
        "source": "Wortschatz.md",
        "example": "Ich habe keine Zeit, Schnee zu fegen.",
        "exampleFa": "I have no time to sweep snow.",
        "cloze": "Ich habe keine Zeit, Schnee zu fegen. ____",
        "clozeFa": "I have no time to sweep snow.",
        "answer": "keine Zeit haben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "keine Zeit haben",
          "keine Zeit haben",
          "keine Zeit haben"
        ],
        "examples": [
          {
            "de": "Ich habe keine Zeit, Schnee zu fegen.",
            "en": "I have no time to sweep snow."
          },
          {
            "de": "Sie hat keine Zeit, heute zu kochen.",
            "en": "She has no time to cook today."
          }
        ]
      },
      {
        "id": "aufstehen",
        "group": "l10-g2",
        "term": "aufstehen",
        "fa": "to get up; to stand up",
        "type": "verb",
        "form": "separable verb: *steht auf – stand auf – ist aufgestanden*; with *zu*: *aufzustehen*",
        "source": "Wortschatz.md",
        "example": "Ich habe keine Lust, früh aufzustehen.",
        "exampleFa": "I don’t feel like getting up early.",
        "cloze": "Ich habe keine Lust, früh aufzustehen. ____",
        "clozeFa": "I don’t feel like getting up early.",
        "answer": "aufstehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "aufstehen",
          "aufstehen",
          "aufstehen"
        ],
        "examples": [
          {
            "de": "Ich habe keine Lust, früh aufzustehen.",
            "en": "I don’t feel like getting up early."
          },
          {
            "de": "Er ist um sechs Uhr aufgestanden.",
            "en": "He got up at six o’clock."
          }
        ]
      },
      {
        "id": "jemanden-bitten-etwas-zu-tun",
        "group": "l10-g2",
        "term": "jemanden bitten, etwas zu tun",
        "fa": "to ask someone to do something",
        "type": "phrase",
        "form": "person in accusative + *zu + infinitive*; *bittet – bat – hat gebeten*",
        "source": "Wortschatz.md",
        "example": "Katrin bittet die Vermieterin, einen Handwerker anzurufen.",
        "exampleFa": "Katrin asks the landlady to call a tradesperson.",
        "cloze": "Katrin bittet die Vermieterin, einen Handwerker anzurufen. ____",
        "clozeFa": "Katrin asks the landlady to call a tradesperson.",
        "answer": "jemanden bitten, etwas zu tun",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden bitten, etwas zu tun",
          "jemanden bitten, etwas zu tun",
          "jemanden bitten, etwas zu tun"
        ],
        "examples": [
          {
            "de": "Katrin bittet die Vermieterin, einen Handwerker anzurufen.",
            "en": "Katrin asks the landlady to call a tradesperson."
          },
          {
            "de": "Ich habe ihn gebeten, mir zu helfen.",
            "en": "I asked him to help me."
          }
        ]
      },
      {
        "id": "jemanden-anrufen",
        "group": "l10-g2",
        "term": "jemanden anrufen",
        "fa": "to call someone",
        "type": "phrase",
        "form": "separable verb with accusative: *ruft an – rief an – hat angerufen*; with *zu*: *anzurufen*",
        "source": "Wortschatz.md",
        "example": "Bitte rufen Sie den Handwerker an.",
        "exampleFa": "Please call the tradesperson.",
        "cloze": "Bitte rufen Sie den Handwerker an. ____",
        "clozeFa": "Please call the tradesperson.",
        "answer": "jemanden anrufen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden anrufen",
          "jemanden anrufen",
          "jemanden anrufen"
        ],
        "examples": [
          {
            "de": "Bitte rufen Sie den Handwerker an.",
            "en": "Please call the tradesperson."
          },
          {
            "de": "Sie hat ihre Vermieterin angerufen.",
            "en": "She called her landlady."
          }
        ]
      },
      {
        "id": "der-handwerker-die-handwerkerin",
        "group": "l10-g2",
        "term": "der Handwerker / die Handwerkerin",
        "fa": "tradesperson; repair worker",
        "type": "noun",
        "form": "plurals: *die Handwerker / die Handwerkerinnen*",
        "source": "Wortschatz.md",
        "example": "Der Handwerker repariert die Heizung.",
        "exampleFa": "The tradesperson repairs the heating system.",
        "cloze": "Der ____ repariert die Heizung.",
        "clozeFa": "The tradesperson repairs the heating system.",
        "answer": "Handwerker",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Handwerker / die Handwerkerin",
          "Handwerker / die Handwerkerin",
          "Handwerker"
        ],
        "examples": [
          {
            "de": "Der Handwerker repariert die Heizung.",
            "en": "The tradesperson repairs the heating system."
          },
          {
            "de": "Wir warten auf die Handwerkerin.",
            "en": "We are waiting for the tradeswoman."
          }
        ]
      },
      {
        "id": "jemandem-versprechen-etwas-zu-tun",
        "group": "l10-g2",
        "term": "jemandem versprechen, etwas zu tun",
        "fa": "to promise someone to do something",
        "type": "phrase",
        "form": "person in dative + *zu + infinitive*; *verspricht – versprach – hat versprochen*",
        "source": "Wortschatz.md",
        "example": "Die Vermieterin hat ihr versprochen, einen Handwerker anzurufen.",
        "exampleFa": "The landlady promised her that she would call a tradesperson.",
        "cloze": "Die Vermieterin hat ihr versprochen, einen Handwerker anzurufen. ____",
        "clozeFa": "The landlady promised her that she would call a tradesperson.",
        "answer": "jemandem versprechen, etwas zu tun",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemandem versprechen, etwas zu tun",
          "jemandem versprechen, etwas zu tun",
          "jemandem versprechen, etwas zu tun"
        ],
        "examples": [
          {
            "de": "Die Vermieterin hat ihr versprochen, einen Handwerker anzurufen.",
            "en": "The landlady promised her that she would call a tradesperson."
          },
          {
            "de": "Ich verspreche dir, pünktlich zu kommen.",
            "en": "I promise you that I will arrive on time."
          }
        ]
      },
      {
        "id": "guck-mal",
        "group": "l10-g2",
        "term": "Guck mal!",
        "fa": "Look!; Take a look!",
        "type": "phrase",
        "form": "informal *du* imperative of *gucken*; *mal* makes it sound friendlier",
        "source": "Wortschatz.md",
        "example": "Guck mal, es schneit!",
        "exampleFa": "Look, it’s snowing!",
        "cloze": "____ mal, es schneit!",
        "clozeFa": "Look, it’s snowing!",
        "answer": "Guck",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Guck mal!",
          "Guck mal!",
          "Guck"
        ],
        "examples": [
          {
            "de": "Guck mal, es schneit!",
            "en": "Look, it’s snowing!"
          },
          {
            "de": "Guck mal hier!",
            "en": "Take a look here!"
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l10-g1",
        "icon": "1",
        "title": "Words 181-190",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l10-g2",
        "icon": "2",
        "title": "Words 191-200",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 11,
    "code": "Set 11",
    "title": "Wortschatz Set 11",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "anfangen-etwas-zu-tun",
        "group": "l11-g1",
        "term": "anfangen, etwas zu tun",
        "fa": "to start doing something",
        "type": "phrase",
        "form": "separable verb: *fängt an – fing an – hat angefangen*; followed by *zu + infinitive*",
        "source": "Wortschatz.md",
        "example": "Es fängt an zu schneien.",
        "exampleFa": "It is starting to snow.",
        "cloze": "Es fängt an zu schneien. ____",
        "clozeFa": "It is starting to snow.",
        "answer": "anfangen, etwas zu tun",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "anfangen, etwas zu tun",
          "anfangen, etwas zu tun",
          "anfangen, etwas zu tun"
        ],
        "examples": [
          {
            "de": "Es fängt an zu schneien.",
            "en": "It is starting to snow."
          },
          {
            "de": "Sie fängt an zu arbeiten.",
            "en": "She is starting to work."
          }
        ]
      },
      {
        "id": "schneien",
        "group": "l11-g1",
        "term": "schneien",
        "fa": "to snow",
        "type": "verb",
        "form": "impersonal weather verb, normally used with *es*: *es schneit – es schneite – es hat geschneit*",
        "source": "Wortschatz.md",
        "example": "Heute schneit es stark.",
        "exampleFa": "It is snowing heavily today.",
        "cloze": "Heute schneit es stark. ____",
        "clozeFa": "It is snowing heavily today.",
        "answer": "schneien",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "schneien",
          "schneien",
          "schneien"
        ],
        "examples": [
          {
            "de": "Heute schneit es stark.",
            "en": "It is snowing heavily today."
          },
          {
            "de": "Gestern hat es geschneit.",
            "en": "It snowed yesterday."
          }
        ]
      },
      {
        "id": "das-fenster",
        "group": "l11-g1",
        "term": "das Fenster",
        "fa": "window",
        "type": "noun",
        "form": "neuter noun; plural: *die Fenster*",
        "source": "Wortschatz.md",
        "example": "Alle Fenster im Haus sind alt.",
        "exampleFa": "All the windows in the house are old.",
        "cloze": "Alle ____ im Haus sind alt.",
        "clozeFa": "All the windows in the house are old.",
        "answer": "Fenster",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Fenster",
          "Fenster",
          "Fenster"
        ],
        "examples": [
          {
            "de": "Alle Fenster im Haus sind alt.",
            "en": "All the windows in the house are old."
          },
          {
            "de": "Bitte öffnen Sie das Fenster.",
            "en": "Please open the window."
          }
        ]
      },
      {
        "id": "erneuern",
        "group": "l11-g1",
        "term": "erneuern",
        "fa": "to renew; to replace; to renovate",
        "type": "verb",
        "form": "inseparable verb with accusative: *erneuert – erneuerte – hat erneuert*",
        "source": "Wortschatz.md",
        "example": "Der Vermieter lässt die Fenster erneuern.",
        "exampleFa": "The landlord has the windows replaced.",
        "cloze": "Der Vermieter lässt die Fenster ____.",
        "clozeFa": "The landlord has the windows replaced.",
        "answer": "erneuern",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "erneuern",
          "erneuern",
          "erneuern"
        ],
        "examples": [
          {
            "de": "Der Vermieter lässt die Fenster erneuern.",
            "en": "The landlord has the windows replaced."
          },
          {
            "de": "Wir müssen die Heizung erneuern.",
            "en": "We must replace the heating system."
          }
        ]
      },
      {
        "id": "die-wand",
        "group": "l11-g1",
        "term": "die Wand",
        "fa": "wall",
        "type": "noun",
        "form": "feminine noun; plural: *die Wände*",
        "source": "Wortschatz.md",
        "example": "Die Wand im Flur ist weiß.",
        "exampleFa": "The wall in the hallway is white.",
        "cloze": "Die ____ im Flur ist weiß.",
        "clozeFa": "The wall in the hallway is white.",
        "answer": "Wand",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Wand",
          "Wand",
          "Wand"
        ],
        "examples": [
          {
            "de": "Die Wand im Flur ist weiß.",
            "en": "The wall in the hallway is white."
          },
          {
            "de": "Wir streichen die Wand neu.",
            "en": "We repaint the wall."
          }
        ]
      },
      {
        "id": "der-flur",
        "group": "l11-g1",
        "term": "der Flur",
        "fa": "hallway; corridor",
        "type": "noun",
        "form": "masculine noun; plural: *die Flure*",
        "source": "Wortschatz.md",
        "example": "Die Wand im Flur wird gestrichen.",
        "exampleFa": "The wall in the hallway is being painted.",
        "cloze": "Die Wand im ____ wird gestrichen.",
        "clozeFa": "The wall in the hallway is being painted.",
        "answer": "Flur",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Flur",
          "Flur",
          "Flur"
        ],
        "examples": [
          {
            "de": "Die Wand im Flur wird gestrichen.",
            "en": "The wall in the hallway is being painted."
          },
          {
            "de": "Die Schuhe stehen im Flur.",
            "en": "The shoes are in the hallway."
          }
        ]
      },
      {
        "id": "streichen-malen",
        "group": "l11-g1",
        "term": "streichen (malen)",
        "fa": "to paint",
        "type": "phrase",
        "form": "strong verb with accusative: *streicht – strich – hat gestrichen*",
        "source": "Wortschatz.md",
        "example": "Der Vermieter lässt die Wand weiß streichen.",
        "exampleFa": "The landlord has the wall painted white.",
        "cloze": "Der Vermieter lässt die Wand weiß ____.",
        "clozeFa": "The landlord has the wall painted white.",
        "answer": "streichen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "streichen (malen)",
          "streichen (malen)",
          "streichen"
        ],
        "examples": [
          {
            "de": "Der Vermieter lässt die Wand weiß streichen.",
            "en": "The landlord has the wall painted white."
          },
          {
            "de": "Wir haben das Zimmer gestrichen.",
            "en": "We painted the room."
          }
        ]
      },
      {
        "id": "reparieren",
        "group": "l11-g1",
        "term": "reparieren",
        "fa": "to repair; to fix",
        "type": "verb",
        "form": "verb ending in *-ieren*: *repariert – reparierte – hat repariert*; no *ge-* in the participle",
        "source": "Wortschatz.md",
        "example": "Man kann den Besen nicht reparieren.",
        "exampleFa": "The broom cannot be repaired.",
        "cloze": "Man kann den Besen nicht ____.",
        "clozeFa": "The broom cannot be repaired.",
        "answer": "reparieren",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "reparieren",
          "reparieren",
          "reparieren"
        ],
        "examples": [
          {
            "de": "Man kann den Besen nicht reparieren.",
            "en": "The broom cannot be repaired."
          },
          {
            "de": "Der Handwerker hat die Heizung repariert.",
            "en": "The tradesperson repaired the heating system."
          }
        ]
      },
      {
        "id": "etwas-durch-etwas-ersetzen",
        "group": "l11-g1",
        "term": "etwas durch etwas ersetzen",
        "fa": "to replace something with something",
        "type": "phrase",
        "form": "both objects use the accusative; *ersetzt – ersetzte – hat ersetzt*",
        "source": "Wortschatz.md",
        "example": "Wir ersetzen den alten Besen durch einen neuen.",
        "exampleFa": "We replace the old broom with a new one.",
        "cloze": "Wir ____ den alten Besen durch einen neuen.",
        "clozeFa": "We replace the old broom with a new one.",
        "answer": "ersetzen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "etwas durch etwas ersetzen",
          "etwas durch etwas ersetzen",
          "ersetzen"
        ],
        "examples": [
          {
            "de": "Wir ersetzen den alten Besen durch einen neuen.",
            "en": "We replace the old broom with a new one."
          },
          {
            "de": "Die Airline ersetzt den Flug durch eine Zugfahrt.",
            "en": "The airline replaces the flight with a train journey."
          }
        ]
      },
      {
        "id": "bei-mir",
        "group": "l11-g1",
        "term": "bei mir",
        "fa": "at my place; where I live",
        "type": "phrase",
        "form": "*bei* + dative pronoun",
        "source": "Wortschatz.md",
        "example": "Bei mir im Bad ist eine Wand feucht.",
        "exampleFa": "A wall in my bathroom is damp.",
        "cloze": "____ im Bad ist eine Wand feucht.",
        "clozeFa": "A wall in my bathroom is damp.",
        "answer": "bei mir",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bei mir",
          "bei mir",
          "bei mir"
        ],
        "examples": [
          {
            "de": "Bei mir im Bad ist eine Wand feucht.",
            "en": "A wall in my bathroom is damp."
          },
          {
            "de": "Wir treffen uns bei mir.",
            "en": "We’ll meet at my place."
          }
        ]
      },
      {
        "id": "feucht",
        "group": "l11-g2",
        "term": "feucht",
        "fa": "damp; moist",
        "type": "adjective",
        "form": "adjective; comparative: *feuchter*; opposite: *trocken*",
        "source": "Wortschatz.md",
        "example": "Die Wand ist feucht.",
        "exampleFa": "The wall is damp.",
        "cloze": "Die Wand ist ____.",
        "clozeFa": "The wall is damp.",
        "answer": "feucht",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "feucht",
          "feucht",
          "feucht"
        ],
        "examples": [
          {
            "de": "Die Wand ist feucht.",
            "en": "The wall is damp."
          },
          {
            "de": "Die Handtücher sind noch feucht.",
            "en": "The towels are still damp."
          }
        ]
      },
      {
        "id": "sich-etwas-ansehen",
        "group": "l11-g2",
        "term": "sich etwas ansehen",
        "fa": "to look at; to inspect something",
        "type": "phrase",
        "form": "reflexive, separable verb with accusative: *sieht sich an – sah sich an – hat sich angesehen*; with *zu*: *anzusehen*",
        "source": "Wortschatz.md",
        "example": "Der Handwerker sieht sich die Wand an.",
        "exampleFa": "The tradesperson inspects the wall.",
        "cloze": "Der Handwerker sieht sich die Wand an. ____",
        "clozeFa": "The tradesperson inspects the wall.",
        "answer": "sich etwas ansehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich etwas ansehen",
          "sich etwas ansehen",
          "sich etwas ansehen"
        ],
        "examples": [
          {
            "de": "Der Handwerker sieht sich die Wand an.",
            "en": "The tradesperson inspects the wall."
          },
          {
            "de": "Haben Sie Zeit, sich das anzusehen?",
            "en": "Do you have time to look at it?"
          }
        ]
      },
      {
        "id": "die-sachen",
        "group": "l11-g2",
        "term": "die Sachen",
        "fa": "things; belongings",
        "type": "noun",
        "form": "plural noun; singular *die Sache* often means a matter or thing",
        "source": "Wortschatz.md",
        "example": "Bitte räumen Sie Ihre Sachen weg.",
        "exampleFa": "Please put away your things.",
        "cloze": "Bitte räumen Sie Ihre ____ weg.",
        "clozeFa": "Please put away your things.",
        "answer": "Sachen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Sachen",
          "Sachen",
          "Sachen"
        ],
        "examples": [
          {
            "de": "Bitte räumen Sie Ihre Sachen weg.",
            "en": "Please put away your things."
          },
          {
            "de": "Ich habe meine Sachen im Badezimmer.",
            "en": "My belongings are in the bathroom."
          }
        ]
      },
      {
        "id": "das-badezimmer",
        "group": "l11-g2",
        "term": "das Badezimmer",
        "fa": "bathroom",
        "type": "noun",
        "form": "neuter noun; plural: *die Badezimmer*; short form: *das Bad*",
        "source": "Wortschatz.md",
        "example": "Bitte räumen Sie Ihre Sachen aus dem Badezimmer.",
        "exampleFa": "Please remove your belongings from the bathroom.",
        "cloze": "Bitte räumen Sie Ihre Sachen aus dem ____.",
        "clozeFa": "Please remove your belongings from the bathroom.",
        "answer": "Badezimmer",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Badezimmer",
          "Badezimmer",
          "Badezimmer"
        ],
        "examples": [
          {
            "de": "Bitte räumen Sie Ihre Sachen aus dem Badezimmer.",
            "en": "Please remove your belongings from the bathroom."
          },
          {
            "de": "Das Badezimmer wird renoviert.",
            "en": "The bathroom is being renovated."
          }
        ]
      },
      {
        "id": "jemandem-etwas-mitteilen",
        "group": "l11-g2",
        "term": "jemandem etwas mitteilen",
        "fa": "to inform someone of something; to tell someone something",
        "type": "phrase",
        "form": "person in dative + information in accusative; separable: *teilt mit – teilte mit – hat mitgeteilt*",
        "source": "Wortschatz.md",
        "example": "Wie ich Ihnen mitgeteilt habe, ist die Heizung defekt.",
        "exampleFa": "As I informed you, the heating is broken.",
        "cloze": "Wie ich Ihnen mitgeteilt habe, ist die Heizung defekt. ____",
        "clozeFa": "As I informed you, the heating is broken.",
        "answer": "jemandem etwas mitteilen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemandem etwas mitteilen",
          "jemandem etwas mitteilen",
          "jemandem etwas mitteilen"
        ],
        "examples": [
          {
            "de": "Wie ich Ihnen mitgeteilt habe, ist die Heizung defekt.",
            "en": "As I informed you, the heating is broken."
          },
          {
            "de": "Bitte teilen Sie mir den Termin mit.",
            "en": "Please tell me the appointment time."
          }
        ]
      },
      {
        "id": "telefonisch",
        "group": "l11-g2",
        "term": "telefonisch",
        "fa": "by telephone; over the phone",
        "type": "verb",
        "form": "adjective or adverb",
        "source": "Wortschatz.md",
        "example": "Ich habe Sie telefonisch informiert.",
        "exampleFa": "I informed you by telephone.",
        "cloze": "Ich habe Sie ____ informiert.",
        "clozeFa": "I informed you by telephone.",
        "answer": "telefonisch",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "telefonisch",
          "telefonisch",
          "telefonisch"
        ],
        "examples": [
          {
            "de": "Ich habe Sie telefonisch informiert.",
            "en": "I informed you by telephone."
          },
          {
            "de": "Wir sind telefonisch erreichbar.",
            "en": "We can be reached by telephone."
          }
        ]
      },
      {
        "id": "defekt",
        "group": "l11-g2",
        "term": "defekt",
        "fa": "broken; faulty; defective",
        "type": "adjective",
        "form": "adjective; before a noun: *eine defekte Heizung*",
        "source": "Wortschatz.md",
        "example": "Die Heizung ist defekt.",
        "exampleFa": "The heating is broken.",
        "cloze": "Die Heizung ist ____.",
        "clozeFa": "The heating is broken.",
        "answer": "defekt",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "defekt",
          "defekt",
          "defekt"
        ],
        "examples": [
          {
            "de": "Die Heizung ist defekt.",
            "en": "The heating is broken."
          },
          {
            "de": "Das defekte Gerät muss repariert werden.",
            "en": "The faulty device must be repaired."
          }
        ]
      },
      {
        "id": "nochmals",
        "group": "l11-g2",
        "term": "nochmals",
        "fa": "again; once again",
        "type": "verb",
        "form": "adverb; similar to *noch einmal*",
        "source": "Wortschatz.md",
        "example": "Ich bitte Sie nochmals um Hilfe.",
        "exampleFa": "I am asking you for help once again.",
        "cloze": "Ich bitte Sie ____ um Hilfe.",
        "clozeFa": "I am asking you for help once again.",
        "answer": "nochmals",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "nochmals",
          "nochmals",
          "nochmals"
        ],
        "examples": [
          {
            "de": "Ich bitte Sie nochmals um Hilfe.",
            "en": "I am asking you for help once again."
          },
          {
            "de": "Bitte prüfen Sie das nochmals.",
            "en": "Please check that again."
          }
        ]
      },
      {
        "id": "so-schnell-wie-moeglich",
        "group": "l11-g2",
        "term": "so schnell wie möglich",
        "fa": "as quickly as possible; as soon as possible",
        "type": "phrase",
        "form": "fixed comparison: *so + adjective/adverb + wie möglich*",
        "source": "Wortschatz.md",
        "example": "Bitte kommen Sie so schnell wie möglich.",
        "exampleFa": "Please come as soon as possible.",
        "cloze": "Bitte kommen Sie ____.",
        "clozeFa": "Please come as soon as possible.",
        "answer": "so schnell wie möglich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "so schnell wie möglich",
          "so schnell wie möglich",
          "so schnell wie möglich"
        ],
        "examples": [
          {
            "de": "Bitte kommen Sie so schnell wie möglich.",
            "en": "Please come as soon as possible."
          },
          {
            "de": "Die Heizung muss so schnell wie möglich repariert werden.",
            "en": "The heating must be repaired as quickly as possible."
          }
        ]
      },
      {
        "id": "etwas-reparieren-lassen",
        "group": "l11-g2",
        "term": "etwas reparieren lassen",
        "fa": "to have something repaired",
        "type": "phrase",
        "form": "accusative object + infinitive + *lassen*: *lässt reparieren – ließ reparieren – hat reparieren lassen*",
        "source": "Wortschatz.md",
        "example": "Ich lasse die Heizung reparieren.",
        "exampleFa": "I am having the heating repaired.",
        "cloze": "Ich lasse die Heizung ____.",
        "clozeFa": "I am having the heating repaired.",
        "answer": "reparieren",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "etwas reparieren lassen",
          "etwas reparieren lassen",
          "reparieren"
        ],
        "examples": [
          {
            "de": "Ich lasse die Heizung reparieren.",
            "en": "I am having the heating repaired."
          },
          {
            "de": "Sie bittet ihn, das Fenster reparieren zu lassen.",
            "en": "She asks him to have the window repaired."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l11-g1",
        "icon": "1",
        "title": "Words 201-210",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l11-g2",
        "icon": "2",
        "title": "Words 211-220",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 12,
    "code": "Set 12",
    "title": "Wortschatz Set 12",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "die-erkaeltung",
        "group": "l12-g1",
        "term": "die Erkältung",
        "fa": "cold; common cold",
        "type": "noun",
        "form": "feminine noun; plural: *die Erkältungen*; *eine Erkältung haben*",
        "source": "Wortschatz.md",
        "example": "Meine Tochter hat eine Erkältung.",
        "exampleFa": "My daughter has a cold.",
        "cloze": "Meine Tochter hat eine ____.",
        "clozeFa": "My daughter has a cold.",
        "answer": "Erkältung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Erkältung",
          "Erkältung",
          "Erkältung"
        ],
        "examples": [
          {
            "de": "Meine Tochter hat eine Erkältung.",
            "en": "My daughter has a cold."
          },
          {
            "de": "Wegen ihrer Erkältung bleibt sie zu Hause.",
            "en": "She stays home because of her cold."
          }
        ]
      },
      {
        "id": "jemanden-erreichen",
        "group": "l12-g1",
        "term": "jemanden erreichen",
        "fa": "to reach; to contact someone",
        "type": "phrase",
        "form": "inseparable verb with accusative: *erreicht – erreichte – hat erreicht*",
        "source": "Wortschatz.md",
        "example": "Sie können mich per Handy erreichen.",
        "exampleFa": "You can reach me by mobile phone.",
        "cloze": "Sie können mich per Handy erreichen. ____",
        "clozeFa": "You can reach me by mobile phone.",
        "answer": "jemanden erreichen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden erreichen",
          "jemanden erreichen",
          "jemanden erreichen"
        ],
        "examples": [
          {
            "de": "Sie können mich per Handy erreichen.",
            "en": "You can reach me by mobile phone."
          },
          {
            "de": "Ich konnte den Vermieter nicht erreichen.",
            "en": "I could not reach the landlord."
          }
        ]
      },
      {
        "id": "das-festnetz",
        "group": "l12-g1",
        "term": "das Festnetz",
        "fa": "landline; fixed-line telephone network",
        "type": "noun",
        "form": "neuter noun; usually singular; *per Festnetz*",
        "source": "Wortschatz.md",
        "example": "Sie können mich über das Festnetz erreichen.",
        "exampleFa": "You can reach me by landline.",
        "cloze": "Sie können mich über das ____ erreichen.",
        "clozeFa": "You can reach me by landline.",
        "answer": "Festnetz",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Festnetz",
          "Festnetz",
          "Festnetz"
        ],
        "examples": [
          {
            "de": "Sie können mich über das Festnetz erreichen.",
            "en": "You can reach me by landline."
          },
          {
            "de": "Wir haben keinen Festnetzanschluss.",
            "en": "We do not have a landline connection."
          }
        ]
      },
      {
        "id": "den-ganzen-tag",
        "group": "l12-g1",
        "term": "den ganzen Tag",
        "fa": "all day; the whole day",
        "type": "phrase",
        "form": "accusative expression of duration",
        "source": "Wortschatz.md",
        "example": "Ich bin den ganzen Tag zu Hause.",
        "exampleFa": "I am at home all day.",
        "cloze": "Ich bin ____ zu Hause.",
        "clozeFa": "I am at home all day.",
        "answer": "den ganzen Tag",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "den ganzen Tag",
          "den ganzen Tag",
          "den ganzen Tag"
        ],
        "examples": [
          {
            "de": "Ich bin den ganzen Tag zu Hause.",
            "en": "I am at home all day."
          },
          {
            "de": "Es hat den ganzen Tag geschneit.",
            "en": "It snowed all day."
          }
        ]
      },
      {
        "id": "der-mieter-die-mieterin",
        "group": "l12-g1",
        "term": "der Mieter / die Mieterin",
        "fa": "tenant",
        "type": "noun",
        "form": "plurals: *die Mieter / die Mieterinnen*; compare: *der Vermieter* = landlord",
        "source": "Wortschatz.md",
        "example": "Die Mieter machen den Winterdienst.",
        "exampleFa": "The tenants perform the winter maintenance.",
        "cloze": "Die ____ machen den Winterdienst.",
        "clozeFa": "The tenants perform the winter maintenance.",
        "answer": "Mieter",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Mieter / die Mieterin",
          "Mieter / die Mieterin",
          "Mieter"
        ],
        "examples": [
          {
            "de": "Die Mieter machen den Winterdienst.",
            "en": "The tenants perform the winter maintenance."
          },
          {
            "de": "Die Vermieterin schreibt den Mietern.",
            "en": "The landlady writes to the tenants."
          }
        ]
      },
      {
        "id": "die-aufgabe",
        "group": "l12-g1",
        "term": "die Aufgabe",
        "fa": "task; assignment",
        "type": "noun",
        "form": "feminine noun; plural: *die Aufgaben*",
        "source": "Wortschatz.md",
        "example": "Jeder Mieter hat eine Aufgabe.",
        "exampleFa": "Each tenant has a task.",
        "cloze": "Jeder Mieter hat eine ____.",
        "clozeFa": "Each tenant has a task.",
        "answer": "Aufgabe",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Aufgabe",
          "Aufgabe",
          "Aufgabe"
        ],
        "examples": [
          {
            "de": "Jeder Mieter hat eine Aufgabe.",
            "en": "Each tenant has a task."
          },
          {
            "de": "Diese Aufgabe ist schwierig.",
            "en": "This task is difficult."
          }
        ]
      },
      {
        "id": "zu-wenig-zu-wenige",
        "group": "l12-g1",
        "term": "zu wenig / zu wenige",
        "fa": "too little / too few",
        "type": "phrase",
        "form": "*zu wenig* with uncountable nouns; *zu wenige* with plural nouns",
        "source": "Wortschatz.md",
        "example": "Wir haben zu wenig Zeit.",
        "exampleFa": "We have too little time.",
        "cloze": "Wir haben ____ wenig Zeit.",
        "clozeFa": "We have too little time.",
        "answer": "zu",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zu wenig / zu wenige",
          "zu wenig / zu wenige",
          "zu"
        ],
        "examples": [
          {
            "de": "Wir haben zu wenig Zeit.",
            "en": "We have too little time."
          },
          {
            "de": "Die Mieter haben zu wenige Aufgaben.",
            "en": "The tenants have too few tasks."
          }
        ]
      },
      {
        "id": "vergessen",
        "group": "l12-g1",
        "term": "vergessen",
        "fa": "to forget",
        "type": "verb",
        "form": "inseparable, strong verb: *vergisst – vergaß – hat vergessen*",
        "source": "Wortschatz.md",
        "example": "Die Vermieterin vergisst oft Sachen.",
        "exampleFa": "The landlady often forgets things.",
        "cloze": "Die Vermieterin vergisst oft Sachen. ____",
        "clozeFa": "The landlady often forgets things.",
        "answer": "vergessen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "vergessen",
          "vergessen",
          "vergessen"
        ],
        "examples": [
          {
            "de": "Die Vermieterin vergisst oft Sachen.",
            "en": "The landlady often forgets things."
          },
          {
            "de": "Ich habe den Termin vergessen.",
            "en": "I forgot the appointment."
          }
        ]
      },
      {
        "id": "selbst",
        "group": "l12-g1",
        "term": "selbst",
        "fa": "oneself; themselves; personally",
        "type": "word",
        "form": "emphatic word referring back to a person or noun",
        "source": "Wortschatz.md",
        "example": "Die Mieter machen den Winterdienst selbst.",
        "exampleFa": "The tenants perform the winter maintenance themselves.",
        "cloze": "Die Mieter machen den Winterdienst ____.",
        "clozeFa": "The tenants perform the winter maintenance themselves.",
        "answer": "selbst",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "selbst",
          "selbst",
          "selbst"
        ],
        "examples": [
          {
            "de": "Die Mieter machen den Winterdienst selbst.",
            "en": "The tenants perform the winter maintenance themselves."
          },
          {
            "de": "Ich repariere das selbst.",
            "en": "I’ll repair that myself."
          }
        ]
      },
      {
        "id": "die-firma",
        "group": "l12-g1",
        "term": "die Firma",
        "fa": "company; firm",
        "type": "noun",
        "form": "feminine noun; plural: *die Firmen*",
        "source": "Wortschatz.md",
        "example": "Eine Firma übernimmt den Winterdienst.",
        "exampleFa": "A company handles the winter maintenance.",
        "cloze": "Eine ____ übernimmt den Winterdienst.",
        "clozeFa": "A company handles the winter maintenance.",
        "answer": "Firma",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Firma",
          "Firma",
          "Firma"
        ],
        "examples": [
          {
            "de": "Eine Firma übernimmt den Winterdienst.",
            "en": "A company handles the winter maintenance."
          },
          {
            "de": "Sie arbeitet für eine große Firma.",
            "en": "She works for a large company."
          }
        ]
      },
      {
        "id": "etwas-gut-finden",
        "group": "l12-g2",
        "term": "etwas gut finden",
        "fa": "to approve of something; to think something is good",
        "type": "phrase",
        "form": "accusative object; *findet gut – fand gut – hat gut gefunden*",
        "source": "Wortschatz.md",
        "example": "Ich finde die Idee gut.",
        "exampleFa": "I think the idea is good.",
        "cloze": "Ich finde die Idee gut. ____",
        "clozeFa": "I think the idea is good.",
        "answer": "etwas gut finden",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "etwas gut finden",
          "etwas gut finden",
          "etwas gut finden"
        ],
        "examples": [
          {
            "de": "Ich finde die Idee gut.",
            "en": "I think the idea is good."
          },
          {
            "de": "Ich finde es gut, dass die Mieter helfen.",
            "en": "I think it is good that the tenants help."
          }
        ]
      },
      {
        "id": "der-wohnungsschluessel",
        "group": "l12-g2",
        "term": "der Wohnungsschlüssel",
        "fa": "apartment key",
        "type": "noun",
        "form": "masculine noun; plural: *die Wohnungsschlüssel*",
        "source": "Wortschatz.md",
        "example": "Ich gebe meiner Nachbarin den Wohnungsschlüssel.",
        "exampleFa": "I give my neighbour the apartment key.",
        "cloze": "Ich gebe meiner Nachbarin den ____.",
        "clozeFa": "I give my neighbour the apartment key.",
        "answer": "Wohnungsschlüssel",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Wohnungsschlüssel",
          "Wohnungsschlüssel",
          "Wohnungsschlüssel"
        ],
        "examples": [
          {
            "de": "Ich gebe meiner Nachbarin den Wohnungsschlüssel.",
            "en": "I give my neighbour the apartment key."
          },
          {
            "de": "Wo ist mein Wohnungsschlüssel?",
            "en": "Where is my apartment key?"
          }
        ]
      },
      {
        "id": "der-nachbar-die-nachbarin",
        "group": "l12-g2",
        "term": "der Nachbar / die Nachbarin",
        "fa": "neighbour",
        "type": "noun",
        "form": "plurals: *die Nachbarn / die Nachbarinnen*",
        "source": "Wortschatz.md",
        "example": "Meine Nachbarin heißt Frau Thalbach.",
        "exampleFa": "My neighbour is called Ms Thalbach.",
        "cloze": "Meine ____in heißt Frau Thalbach.",
        "clozeFa": "My neighbour is called Ms Thalbach.",
        "answer": "Nachbar",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Nachbar / die Nachbarin",
          "Nachbar / die Nachbarin",
          "Nachbar"
        ],
        "examples": [
          {
            "de": "Meine Nachbarin heißt Frau Thalbach.",
            "en": "My neighbour is called Ms Thalbach."
          },
          {
            "de": "Ich gebe meinem Nachbarn den Schlüssel.",
            "en": "I give my neighbour the key."
          }
        ]
      },
      {
        "id": "bei-jemandem-klingeln",
        "group": "l12-g2",
        "term": "bei jemandem klingeln",
        "fa": "to ring someone’s doorbell",
        "type": "phrase",
        "form": "*bei* + dative; *klingelt – klingelte – hat geklingelt*",
        "source": "Wortschatz.md",
        "example": "Bitte klingeln Sie bei Frau Thalbach.",
        "exampleFa": "Please ring Ms Thalbach’s doorbell.",
        "cloze": "Bitte ____ Sie bei Frau Thalbach.",
        "clozeFa": "Please ring Ms Thalbach’s doorbell.",
        "answer": "klingeln",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bei jemandem klingeln",
          "bei jemandem klingeln",
          "klingeln"
        ],
        "examples": [
          {
            "de": "Bitte klingeln Sie bei Frau Thalbach.",
            "en": "Please ring Ms Thalbach’s doorbell."
          },
          {
            "de": "Der Handwerker hat bei meiner Nachbarin geklingelt.",
            "en": "The tradesperson rang my neighbour’s doorbell."
          }
        ]
      },
      {
        "id": "die-balkontuer",
        "group": "l12-g2",
        "term": "die Balkontür",
        "fa": "balcony door",
        "type": "noun",
        "form": "feminine noun; plural: *die Balkontüren*",
        "source": "Wortschatz.md",
        "example": "Die Balkontür schließt nicht richtig.",
        "exampleFa": "The balcony door does not close properly.",
        "cloze": "Die ____ schließt nicht richtig.",
        "clozeFa": "The balcony door does not close properly.",
        "answer": "Balkontür",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Balkontür",
          "Balkontür",
          "Balkontür"
        ],
        "examples": [
          {
            "de": "Die Balkontür schließt nicht richtig.",
            "en": "The balcony door does not close properly."
          },
          {
            "de": "Der Handwerker sieht sich die Balkontür an.",
            "en": "The tradesperson inspects the balcony door."
          }
        ]
      },
      {
        "id": "staendig",
        "group": "l12-g2",
        "term": "ständig",
        "fa": "constantly; continually",
        "type": "verb",
        "form": "adjective or adverb",
        "source": "Wortschatz.md",
        "example": "Durch die Tür kommt ständig kalte Luft herein.",
        "exampleFa": "Cold air constantly comes in through the door.",
        "cloze": "Durch die Tür kommt ____ kalte Luft herein.",
        "clozeFa": "Cold air constantly comes in through the door.",
        "answer": "ständig",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ständig",
          "ständig",
          "ständig"
        ],
        "examples": [
          {
            "de": "Durch die Tür kommt ständig kalte Luft herein.",
            "en": "Cold air constantly comes in through the door."
          },
          {
            "de": "Der Flugplan ändert sich ständig.",
            "en": "The flight schedule changes constantly."
          }
        ]
      },
      {
        "id": "hereinkommen",
        "group": "l12-g2",
        "term": "hereinkommen",
        "fa": "to come in; to enter",
        "type": "verb",
        "form": "separable verb; perfect with *sein*: *kommt herein – kam herein – ist hereingekommen*",
        "source": "Wortschatz.md",
        "example": "Durch das Fenster kommt kalte Luft herein.",
        "exampleFa": "Cold air comes in through the window.",
        "cloze": "Durch das Fenster kommt kalte Luft herein. ____",
        "clozeFa": "Cold air comes in through the window.",
        "answer": "hereinkommen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "hereinkommen",
          "hereinkommen",
          "hereinkommen"
        ],
        "examples": [
          {
            "de": "Durch das Fenster kommt kalte Luft herein.",
            "en": "Cold air comes in through the window."
          },
          {
            "de": "Bitte kommen Sie herein.",
            "en": "Please come in."
          }
        ]
      },
      {
        "id": "die-heizkosten",
        "group": "l12-g2",
        "term": "die Heizkosten",
        "fa": "heating costs",
        "type": "noun",
        "form": "plural noun; often *Heizkosten sparen*",
        "source": "Wortschatz.md",
        "example": "Ich möchte Heizkosten sparen.",
        "exampleFa": "I would like to save on heating costs.",
        "cloze": "Ich möchte ____ sparen.",
        "clozeFa": "I would like to save on heating costs.",
        "answer": "Heizkosten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Heizkosten",
          "Heizkosten",
          "Heizkosten"
        ],
        "examples": [
          {
            "de": "Ich möchte Heizkosten sparen.",
            "en": "I would like to save on heating costs."
          },
          {
            "de": "Die Heizkosten sind gestiegen.",
            "en": "Heating costs have increased."
          }
        ]
      },
      {
        "id": "jemandem-wichtig-sein",
        "group": "l12-g2",
        "term": "jemandem wichtig sein",
        "fa": "to be important to someone",
        "type": "phrase",
        "form": "person in dative; often *Es ist jemandem wichtig, dass …*",
        "source": "Wortschatz.md",
        "example": "Es ist mir wichtig, dass die Tür gut schließt.",
        "exampleFa": "It is important to me that the door closes properly.",
        "cloze": "Es ist mir wichtig, dass die Tür gut schließt. ____",
        "clozeFa": "It is important to me that the door closes properly.",
        "answer": "jemandem wichtig sein",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemandem wichtig sein",
          "jemandem wichtig sein",
          "jemandem wichtig sein"
        ],
        "examples": [
          {
            "de": "Es ist mir wichtig, dass die Tür gut schließt.",
            "en": "It is important to me that the door closes properly."
          },
          {
            "de": "Pünktlichkeit ist ihr wichtig.",
            "en": "Punctuality is important to her."
          }
        ]
      },
      {
        "id": "sich-bei-jemandem-beschweren",
        "group": "l12-g2",
        "term": "sich bei jemandem beschweren",
        "fa": "to complain to someone",
        "type": "phrase",
        "form": "reflexive verb; *bei* + dative; complaint topic with *über* + accusative",
        "source": "Wortschatz.md",
        "example": "Die Nachbarn haben sich beim Vermieter beschwert.",
        "exampleFa": "The neighbours complained to the landlord.",
        "cloze": "Die Nachbarn haben sich beim Vermieter beschwert. ____",
        "clozeFa": "The neighbours complained to the landlord.",
        "answer": "sich bei jemandem beschweren",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich bei jemandem beschweren",
          "sich bei jemandem beschweren",
          "sich bei jemandem beschweren"
        ],
        "examples": [
          {
            "de": "Die Nachbarn haben sich beim Vermieter beschwert.",
            "en": "The neighbours complained to the landlord."
          },
          {
            "de": "Ich beschwere mich bei der Airline über die Verspätung.",
            "en": "I complain to the airline about the delay."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l12-g1",
        "icon": "1",
        "title": "Words 221-230",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l12-g2",
        "icon": "2",
        "title": "Words 231-240",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 13,
    "code": "Set 13",
    "title": "Wortschatz Set 13",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "gradangaben-muede",
        "group": "l13-g1",
        "term": "Gradangaben: müde",
        "fa": "expressions showing different degrees of tiredness",
        "type": "adjective",
        "form": "the degree word comes before the adjective",
        "source": "Wortschatz.md",
        "example": "*total müde*",
        "exampleFa": "extremely/completely tired",
        "cloze": "*total müde* ____",
        "clozeFa": "extremely/completely tired",
        "answer": "Gradangaben: müde",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Gradangaben: müde",
          "Gradangaben: müde",
          "Gradangaben: müde"
        ],
        "examples": [
          {
            "de": "*total müde*",
            "en": "extremely/completely tired"
          },
          {
            "de": "*ziemlich müde*",
            "en": "quite tired"
          },
          {
            "de": "*etwas müde*",
            "en": "somewhat/a little tired"
          },
          {
            "de": "*nicht besonders müde*",
            "en": "not particularly tired"
          },
          {
            "de": "*überhaupt nicht müde*",
            "en": "not tired at all"
          }
        ]
      },
      {
        "id": "unordentlich",
        "group": "l13-g1",
        "term": "unordentlich",
        "fa": "untidy; messy; disorganized",
        "type": "adjective",
        "form": "adjective; opposite: *ordentlich*",
        "source": "Wortschatz.md",
        "example": "Die neuen Mieter sind unordentlich.",
        "exampleFa": "The new tenants are untidy.",
        "cloze": "Die neuen Mieter sind ____.",
        "clozeFa": "The new tenants are untidy.",
        "answer": "unordentlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "unordentlich",
          "unordentlich",
          "unordentlich"
        ],
        "examples": [
          {
            "de": "Die neuen Mieter sind unordentlich.",
            "en": "The new tenants are untidy."
          },
          {
            "de": "Sein Zimmer ist ziemlich unordentlich.",
            "en": "His room is quite messy."
          }
        ]
      },
      {
        "id": "jemanden-nerven",
        "group": "l13-g1",
        "term": "jemanden nerven",
        "fa": "to annoy someone",
        "type": "phrase",
        "form": "person in accusative; *nervt – nervte – hat genervt*",
        "source": "Wortschatz.md",
        "example": "Der Müll nervt mich.",
        "exampleFa": "The rubbish annoys me.",
        "cloze": "Der Müll nervt mich. ____",
        "clozeFa": "The rubbish annoys me.",
        "answer": "jemanden nerven",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden nerven",
          "jemanden nerven",
          "jemanden nerven"
        ],
        "examples": [
          {
            "de": "Der Müll nervt mich.",
            "en": "The rubbish annoys me."
          },
          {
            "de": "Der Lärm hat die Nachbarn genervt.",
            "en": "The noise annoyed the neighbours."
          }
        ]
      },
      {
        "id": "am-meisten",
        "group": "l13-g1",
        "term": "am meisten",
        "fa": "most; the most",
        "type": "phrase",
        "form": "superlative form of *viel*",
        "source": "Wortschatz.md",
        "example": "Am meisten nervt mich der Müll.",
        "exampleFa": "The rubbish annoys me the most.",
        "cloze": "____ nervt mich der Müll.",
        "clozeFa": "The rubbish annoys me the most.",
        "answer": "am meisten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "am meisten",
          "am meisten",
          "am meisten"
        ],
        "examples": [
          {
            "de": "Am meisten nervt mich der Müll.",
            "en": "The rubbish annoys me the most."
          },
          {
            "de": "Dieses Buch gefällt mir am meisten.",
            "en": "I like this book the most."
          }
        ]
      },
      {
        "id": "das-treppenhaus",
        "group": "l13-g1",
        "term": "das Treppenhaus",
        "fa": "stairwell; communal staircase",
        "type": "noun",
        "form": "neuter noun; plural: *die Treppenhäuser*",
        "source": "Wortschatz.md",
        "example": "Im Treppenhaus liegt Müll.",
        "exampleFa": "There is rubbish in the stairwell.",
        "cloze": "Im ____ liegt Müll.",
        "clozeFa": "There is rubbish in the stairwell.",
        "answer": "Treppenhaus",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Treppenhaus",
          "Treppenhaus",
          "Treppenhaus"
        ],
        "examples": [
          {
            "de": "Im Treppenhaus liegt Müll.",
            "en": "There is rubbish in the stairwell."
          },
          {
            "de": "Das Fahrrad darf nicht im Treppenhaus stehen.",
            "en": "The bicycle must not be left in the stairwell."
          }
        ]
      },
      {
        "id": "das-geht-gar-nicht",
        "group": "l13-g1",
        "term": "Das geht gar nicht!",
        "fa": "That is completely unacceptable!; That won’t do!",
        "type": "noun",
        "form": "fixed conversational expression; *gar* strengthens *nicht*",
        "source": "Wortschatz.md",
        "example": "Müll im Treppenhaus? Das geht gar nicht!",
        "exampleFa": "Rubbish in the stairwell? That is completely unacceptable!",
        "cloze": "Müll im Treppenhaus? Das ____",
        "clozeFa": "Rubbish in the stairwell? That is completely unacceptable!",
        "answer": "geht gar nicht!",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Das geht gar nicht!",
          "geht gar nicht!",
          "geht gar nicht!"
        ],
        "examples": [
          {
            "de": "Müll im Treppenhaus? Das geht gar nicht!",
            "en": "Rubbish in the stairwell? That is completely unacceptable!"
          },
          {
            "de": "So ein Verhalten geht gar nicht.",
            "en": "Behaviour like that is unacceptable."
          }
        ]
      },
      {
        "id": "eigentlich",
        "group": "l13-g1",
        "term": "eigentlich",
        "fa": "actually; really; generally speaking",
        "type": "verb",
        "form": "adverb; often softens or qualifies a statement",
        "source": "Wortschatz.md",
        "example": "Meine Nachbarn sind eigentlich nett.",
        "exampleFa": "My neighbours are actually quite nice.",
        "cloze": "Meine Nachbarn sind ____ nett.",
        "clozeFa": "My neighbours are actually quite nice.",
        "answer": "eigentlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "eigentlich",
          "eigentlich",
          "eigentlich"
        ],
        "examples": [
          {
            "de": "Meine Nachbarn sind eigentlich nett.",
            "en": "My neighbours are actually quite nice."
          },
          {
            "de": "Was möchtest du eigentlich machen?",
            "en": "What do you actually want to do?"
          }
        ]
      },
      {
        "id": "ganz-nett",
        "group": "l13-g1",
        "term": "ganz nett",
        "fa": "quite nice; fairly nice",
        "type": "adjective",
        "form": "*ganz* is a degree word before the adjective",
        "source": "Wortschatz.md",
        "example": "Die neuen Nachbarn sind ganz nett.",
        "exampleFa": "The new neighbours are quite nice.",
        "cloze": "Die neuen Nachbarn sind ____.",
        "clozeFa": "The new neighbours are quite nice.",
        "answer": "ganz nett",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ganz nett",
          "ganz nett",
          "ganz nett"
        ],
        "examples": [
          {
            "de": "Die neuen Nachbarn sind ganz nett.",
            "en": "The new neighbours are quite nice."
          },
          {
            "de": "Der Ausflug war ganz nett.",
            "en": "The outing was fairly nice."
          }
        ]
      },
      {
        "id": "putzen",
        "group": "l13-g1",
        "term": "putzen",
        "fa": "to clean",
        "type": "verb",
        "form": "regular verb with accusative: *putzt – putzte – hat geputzt*",
        "source": "Wortschatz.md",
        "example": "Wir müssen den Flur putzen.",
        "exampleFa": "We must clean the hallway.",
        "cloze": "Wir müssen den Flur ____.",
        "clozeFa": "We must clean the hallway.",
        "answer": "putzen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "putzen",
          "putzen",
          "putzen"
        ],
        "examples": [
          {
            "de": "Wir müssen den Flur putzen.",
            "en": "We must clean the hallway."
          },
          {
            "de": "Sie hat die Fenster geputzt.",
            "en": "She cleaned the windows."
          }
        ]
      },
      {
        "id": "jemanden-aergern",
        "group": "l13-g1",
        "term": "jemanden ärgern",
        "fa": "to annoy someone",
        "type": "phrase",
        "form": "person in accusative; compare reflexive *sich ärgern* = to be annoyed",
        "source": "Wortschatz.md",
        "example": "Das ärgert mich.",
        "exampleFa": "That annoys me.",
        "cloze": "Das ärgert mich. ____",
        "clozeFa": "That annoys me.",
        "answer": "jemanden ärgern",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden ärgern",
          "jemanden ärgern",
          "jemanden ärgern"
        ],
        "examples": [
          {
            "de": "Das ärgert mich.",
            "en": "That annoys me."
          },
          {
            "de": "Ich ärgere mich über den Müll.",
            "en": "I am annoyed about the rubbish."
          }
        ]
      },
      {
        "id": "bei-uns",
        "group": "l13-g2",
        "term": "bei uns",
        "fa": "at our place; where we live",
        "type": "phrase",
        "form": "*bei* + dative pronoun",
        "source": "Wortschatz.md",
        "example": "Bei uns ist es meistens ruhig.",
        "exampleFa": "It is usually quiet where we live.",
        "cloze": "____ ist es meistens ruhig.",
        "clozeFa": "It is usually quiet where we live.",
        "answer": "bei uns",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bei uns",
          "bei uns",
          "bei uns"
        ],
        "examples": [
          {
            "de": "Bei uns ist es meistens ruhig.",
            "en": "It is usually quiet where we live."
          },
          {
            "de": "Bei uns im Haus wohnen fünf Familien.",
            "en": "Five families live in our building."
          }
        ]
      },
      {
        "id": "einigermassen",
        "group": "l13-g2",
        "term": "einigermaßen",
        "fa": "reasonably; fairly; to some extent",
        "type": "verb",
        "form": "degree adverb placed before an adjective or adverb",
        "source": "Wortschatz.md",
        "example": "Das Treppenhaus ist einigermaßen sauber.",
        "exampleFa": "The stairwell is reasonably clean.",
        "cloze": "Das Treppenhaus ist ____ sauber.",
        "clozeFa": "The stairwell is reasonably clean.",
        "answer": "einigermaßen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "einigermaßen",
          "einigermaßen",
          "einigermaßen"
        ],
        "examples": [
          {
            "de": "Das Treppenhaus ist einigermaßen sauber.",
            "en": "The stairwell is reasonably clean."
          },
          {
            "de": "Der Preis ist einigermaßen günstig.",
            "en": "The price is fairly affordable."
          }
        ]
      },
      {
        "id": "sauber-schmutzig",
        "group": "l13-g2",
        "term": "sauber / schmutzig",
        "fa": "clean / dirty",
        "type": "adjective",
        "form": "adjectives; comparatives: *sauberer / schmutziger*",
        "source": "Wortschatz.md",
        "example": "Im Haus ist es sauber.",
        "exampleFa": "It is clean inside the building.",
        "cloze": "Im Haus ist es ____.",
        "clozeFa": "It is clean inside the building.",
        "answer": "sauber",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sauber / schmutzig",
          "sauber / schmutzig",
          "sauber"
        ],
        "examples": [
          {
            "de": "Im Haus ist es sauber.",
            "en": "It is clean inside the building."
          },
          {
            "de": "Hinter dem Haus ist es schmutzig.",
            "en": "It is dirty behind the building."
          }
        ]
      },
      {
        "id": "obwohl",
        "group": "l13-g2",
        "term": "obwohl",
        "fa": "although; even though",
        "type": "verb",
        "form": "subordinating conjunction; the conjugated verb goes to the end",
        "source": "Wortschatz.md",
        "example": "Ich konnte nicht schlafen, obwohl ich müde war.",
        "exampleFa": "I could not sleep even though I was tired.",
        "cloze": "Ich konnte nicht schlafen, ____ ich müde war.",
        "clozeFa": "I could not sleep even though I was tired.",
        "answer": "obwohl",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "obwohl",
          "obwohl",
          "obwohl"
        ],
        "examples": [
          {
            "de": "Ich konnte nicht schlafen, obwohl ich müde war.",
            "en": "I could not sleep even though I was tired."
          },
          {
            "de": "Obwohl es schneit, gehen wir spazieren.",
            "en": "Although it is snowing, we are going for a walk."
          }
        ]
      },
      {
        "id": "kaum",
        "group": "l13-g2",
        "term": "kaum",
        "fa": "hardly; barely",
        "type": "verb",
        "form": "adverb with an almost-negative meaning",
        "source": "Wortschatz.md",
        "example": "Ich konnte kaum schlafen.",
        "exampleFa": "I could hardly sleep.",
        "cloze": "Ich konnte ____ schlafen.",
        "clozeFa": "I could hardly sleep.",
        "answer": "kaum",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "kaum",
          "kaum",
          "kaum"
        ],
        "examples": [
          {
            "de": "Ich konnte kaum schlafen.",
            "en": "I could hardly sleep."
          },
          {
            "de": "Wir haben kaum Zeit.",
            "en": "We have hardly any time."
          }
        ]
      },
      {
        "id": "letzte-nacht",
        "group": "l13-g2",
        "term": "letzte Nacht",
        "fa": "last night",
        "type": "phrase",
        "form": "accusative expression of time without a preposition",
        "source": "Wortschatz.md",
        "example": "Letzte Nacht hat es geschneit.",
        "exampleFa": "It snowed last night.",
        "cloze": "____ hat es geschneit.",
        "clozeFa": "It snowed last night.",
        "answer": "letzte Nacht",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "letzte Nacht",
          "letzte Nacht",
          "letzte Nacht"
        ],
        "examples": [
          {
            "de": "Letzte Nacht hat es geschneit.",
            "en": "It snowed last night."
          },
          {
            "de": "Ich habe letzte Nacht schlecht geschlafen.",
            "en": "I slept badly last night."
          }
        ]
      },
      {
        "id": "zu-etwas-passen",
        "group": "l13-g2",
        "term": "zu etwas passen",
        "fa": "to match; to fit; to go with something",
        "type": "phrase",
        "form": "*zu* + dative; *passt – passte – hat gepasst*",
        "source": "Wortschatz.md",
        "example": "Welcher Brief passt zur Nachricht?",
        "exampleFa": "Which letter matches the message?",
        "cloze": "Welcher Brief passt zur Nachricht? ____",
        "clozeFa": "Which letter matches the message?",
        "answer": "zu etwas passen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zu etwas passen",
          "zu etwas passen",
          "zu etwas passen"
        ],
        "examples": [
          {
            "de": "Welcher Brief passt zur Nachricht?",
            "en": "Which letter matches the message?"
          },
          {
            "de": "Die Antwort passt nicht zur Frage.",
            "en": "The answer does not match the question."
          }
        ]
      },
      {
        "id": "der-anrufbeantworter",
        "group": "l13-g2",
        "term": "der Anrufbeantworter",
        "fa": "answering machine; voicemail",
        "type": "noun",
        "form": "masculine noun; plural: *die Anrufbeantworter*",
        "source": "Wortschatz.md",
        "example": "Auf dem Anrufbeantworter ist eine Nachricht.",
        "exampleFa": "There is a message on the answering machine.",
        "cloze": "Auf dem ____ ist eine Nachricht.",
        "clozeFa": "There is a message on the answering machine.",
        "answer": "Anrufbeantworter",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Anrufbeantworter",
          "Anrufbeantworter",
          "Anrufbeantworter"
        ],
        "examples": [
          {
            "de": "Auf dem Anrufbeantworter ist eine Nachricht.",
            "en": "There is a message on the answering machine."
          },
          {
            "de": "Bitte sprechen Sie auf den Anrufbeantworter.",
            "en": "Please leave a message on the answering machine."
          }
        ]
      },
      {
        "id": "es-tut-mir-leid",
        "group": "l13-g2",
        "term": "Es tut mir leid.",
        "fa": "I am sorry.",
        "type": "phrase",
        "form": "fixed expression; the person is dative: *mir/dir/ihm tut es leid*",
        "source": "Wortschatz.md",
        "example": "Es tut mir leid, dass ich Sie gestört habe.",
        "exampleFa": "I am sorry that I disturbed you.",
        "cloze": "____ tut mir leid, dass ich Sie gestört habe.",
        "clozeFa": "I am sorry that I disturbed you.",
        "answer": "Es",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Es tut mir leid.",
          "Es tut mir leid.",
          "Es"
        ],
        "examples": [
          {
            "de": "Es tut mir leid, dass ich Sie gestört habe.",
            "en": "I am sorry that I disturbed you."
          },
          {
            "de": "Das tut uns sehr leid.",
            "en": "We are very sorry about that."
          }
        ]
      },
      {
        "id": "in-ruhe",
        "group": "l13-g2",
        "term": "in Ruhe",
        "fa": "in peace; without being disturbed",
        "type": "phrase",
        "form": "fixed adverbial expression",
        "source": "Wortschatz.md",
        "example": "Ich möchte in Ruhe arbeiten.",
        "exampleFa": "I would like to work in peace.",
        "cloze": "Ich möchte ____ arbeiten.",
        "clozeFa": "I would like to work in peace.",
        "answer": "in Ruhe",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "in Ruhe",
          "in Ruhe",
          "in Ruhe"
        ],
        "examples": [
          {
            "de": "Ich möchte in Ruhe arbeiten.",
            "en": "I would like to work in peace."
          },
          {
            "de": "Lass mich bitte in Ruhe.",
            "en": "Please leave me alone."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l13-g1",
        "icon": "1",
        "title": "Words 241-250",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l13-g2",
        "icon": "2",
        "title": "Words 251-260",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 14,
    "code": "Set 14",
    "title": "Wortschatz Set 14",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "geburtstag-feiern",
        "group": "l14-g1",
        "term": "Geburtstag feiern",
        "fa": "to celebrate one’s birthday",
        "type": "phrase",
        "form": "*der Geburtstag*; *feiert – feierte – hat gefeiert*",
        "source": "Wortschatz.md",
        "example": "Ich habe meinen Geburtstag gefeiert.",
        "exampleFa": "I celebrated my birthday.",
        "cloze": "Ich habe meinen Geburtstag gefeiert. ____",
        "clozeFa": "I celebrated my birthday.",
        "answer": "Geburtstag feiern",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Geburtstag feiern",
          "Geburtstag feiern",
          "Geburtstag feiern"
        ],
        "examples": [
          {
            "de": "Ich habe meinen Geburtstag gefeiert.",
            "en": "I celebrated my birthday."
          },
          {
            "de": "Sie feiert am Samstag Geburtstag.",
            "en": "She is celebrating her birthday on Saturday."
          }
        ]
      },
      {
        "id": "jemanden-einladen",
        "group": "l14-g1",
        "term": "jemanden einladen",
        "fa": "to invite someone",
        "type": "phrase",
        "form": "separable verb with accusative: *lädt ein – lud ein – hat eingeladen*",
        "source": "Wortschatz.md",
        "example": "Ich habe ein paar Freunde eingeladen.",
        "exampleFa": "I invited a few friends.",
        "cloze": "Ich habe ein paar Freunde eingeladen. ____",
        "clozeFa": "I invited a few friends.",
        "answer": "jemanden einladen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden einladen",
          "jemanden einladen",
          "jemanden einladen"
        ],
        "examples": [
          {
            "de": "Ich habe ein paar Freunde eingeladen.",
            "en": "I invited a few friends."
          },
          {
            "de": "Wir laden unsere Nachbarn ein.",
            "en": "We invite our neighbours."
          }
        ]
      },
      {
        "id": "doch",
        "group": "l14-g1",
        "term": "doch",
        "fa": "after all; nevertheless; contrary to expectation",
        "type": "verb",
        "form": "adverb/particle; its meaning depends on context",
        "source": "Wortschatz.md",
        "example": "Es ist doch später geworden.",
        "exampleFa": "It ended up getting late after all.",
        "cloze": "Es ist ____ später geworden.",
        "clozeFa": "It ended up getting late after all.",
        "answer": "doch",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "doch",
          "doch",
          "doch"
        ],
        "examples": [
          {
            "de": "Es ist doch später geworden.",
            "en": "It ended up getting late after all."
          },
          {
            "de": "Komm doch mit!",
            "en": "Why don’t you come along!"
          }
        ]
      },
      {
        "id": "um-entschuldigung-bitten",
        "group": "l14-g1",
        "term": "um Entschuldigung bitten",
        "fa": "to apologize; to ask for forgiveness",
        "type": "phrase",
        "form": "*jemanden* + *um* + accusative bitten",
        "source": "Wortschatz.md",
        "example": "Ich bitte Sie um Entschuldigung.",
        "exampleFa": "I apologize to you.",
        "cloze": "Ich bitte Sie um Entschuldigung. ____",
        "clozeFa": "I apologize to you.",
        "answer": "um Entschuldigung bitten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "um Entschuldigung bitten",
          "um Entschuldigung bitten",
          "um Entschuldigung bitten"
        ],
        "examples": [
          {
            "de": "Ich bitte Sie um Entschuldigung.",
            "en": "I apologize to you."
          },
          {
            "de": "Er bat nochmals um Entschuldigung.",
            "en": "He apologized once again."
          }
        ]
      },
      {
        "id": "bellen",
        "group": "l14-g1",
        "term": "bellen",
        "fa": "to bark",
        "type": "verb",
        "form": "regular verb: *bellt – bellte – hat gebellt*",
        "source": "Wortschatz.md",
        "example": "Mein Hund bellt sehr laut.",
        "exampleFa": "My dog barks very loudly.",
        "cloze": "Mein Hund bellt sehr laut. ____",
        "clozeFa": "My dog barks very loudly.",
        "answer": "bellen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bellen",
          "bellen",
          "bellen"
        ],
        "examples": [
          {
            "de": "Mein Hund bellt sehr laut.",
            "en": "My dog barks very loudly."
          },
          {
            "de": "Der Hund hat die ganze Nacht gebellt.",
            "en": "The dog barked all night."
          }
        ]
      },
      {
        "id": "jemanden-stoeren",
        "group": "l14-g1",
        "term": "jemanden stören",
        "fa": "to disturb; to bother someone",
        "type": "phrase",
        "form": "person in accusative; *stört – störte – hat gestört*",
        "source": "Wortschatz.md",
        "example": "Es tut mir leid, dass ich Sie gestört habe.",
        "exampleFa": "I am sorry that I disturbed you.",
        "cloze": "Es tut mir leid, dass ich Sie gestört habe. ____",
        "clozeFa": "I am sorry that I disturbed you.",
        "answer": "jemanden stören",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden stören",
          "jemanden stören",
          "jemanden stören"
        ],
        "examples": [
          {
            "de": "Es tut mir leid, dass ich Sie gestört habe.",
            "en": "I am sorry that I disturbed you."
          },
          {
            "de": "Der Lärm stört die Nachbarn.",
            "en": "The noise bothers the neighbours."
          }
        ]
      },
      {
        "id": "nachmittags",
        "group": "l14-g1",
        "term": "nachmittags",
        "fa": "in the afternoons; every afternoon",
        "type": "verb",
        "form": "adverb for a repeated time; compare *heute Nachmittag*",
        "source": "Wortschatz.md",
        "example": "Ich bringe den Hund nachmittags zu meiner Schwester.",
        "exampleFa": "I take the dog to my sister’s in the afternoons.",
        "cloze": "Ich bringe den Hund ____ zu meiner Schwester.",
        "clozeFa": "I take the dog to my sister’s in the afternoons.",
        "answer": "nachmittags",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "nachmittags",
          "nachmittags",
          "nachmittags"
        ],
        "examples": [
          {
            "de": "Ich bringe den Hund nachmittags zu meiner Schwester.",
            "en": "I take the dog to my sister’s in the afternoons."
          },
          {
            "de": "Nachmittags arbeite ich zu Hause.",
            "en": "I work at home in the afternoons."
          }
        ]
      },
      {
        "id": "sich-vorstellen",
        "group": "l14-g1",
        "term": "sich vorstellen",
        "fa": "to introduce oneself",
        "type": "verb",
        "form": "reflexive, separable verb: *stellt sich vor – stellte sich vor – hat sich vorgestellt*",
        "source": "Wortschatz.md",
        "example": "Neue Mieter sollten sich vorstellen.",
        "exampleFa": "New tenants should introduce themselves.",
        "cloze": "Neue Mieter sollten ____.",
        "clozeFa": "New tenants should introduce themselves.",
        "answer": "sich vorstellen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich vorstellen",
          "sich vorstellen",
          "sich vorstellen"
        ],
        "examples": [
          {
            "de": "Neue Mieter sollten sich vorstellen.",
            "en": "New tenants should introduce themselves."
          },
          {
            "de": "Darf ich mich kurz vorstellen?",
            "en": "May I briefly introduce myself?"
          }
        ]
      },
      {
        "id": "finden-dass",
        "group": "l14-g1",
        "term": "finden, dass …",
        "fa": "to think that …; to be of the opinion that …",
        "type": "phrase",
        "form": "introduces an opinion; the conjugated verb goes to the end of the *dass* clause",
        "source": "Wortschatz.md",
        "example": "Ich finde, dass die Idee gut ist.",
        "exampleFa": "I think that the idea is good.",
        "cloze": "Ich finde, dass die Idee gut ist. ____",
        "clozeFa": "I think that the idea is good.",
        "answer": "finden, dass …",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "finden, dass …",
          "finden, dass …",
          "finden, dass …"
        ],
        "examples": [
          {
            "de": "Ich finde, dass die Idee gut ist.",
            "en": "I think that the idea is good."
          },
          {
            "de": "Wer findet, dass die Mieter sich vorstellen sollten?",
            "en": "Who thinks that the tenants should introduce themselves?"
          }
        ]
      },
      {
        "id": "gemeinsam",
        "group": "l14-g1",
        "term": "gemeinsam",
        "fa": "together; jointly",
        "type": "verb",
        "form": "adjective or adverb",
        "source": "Wortschatz.md",
        "example": "Wir suchen gemeinsam nach einer Lösung.",
        "exampleFa": "We look for a solution together.",
        "cloze": "Wir suchen ____ nach einer Lösung.",
        "clozeFa": "We look for a solution together.",
        "answer": "gemeinsam",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "gemeinsam",
          "gemeinsam",
          "gemeinsam"
        ],
        "examples": [
          {
            "de": "Wir suchen gemeinsam nach einer Lösung.",
            "en": "We look for a solution together."
          },
          {
            "de": "Das ist unsere gemeinsame Aufgabe.",
            "en": "That is our shared task."
          }
        ]
      },
      {
        "id": "nach-einer-loesung-suchen",
        "group": "l14-g2",
        "term": "nach einer Lösung suchen",
        "fa": "to look for a solution",
        "type": "phrase",
        "form": "*nach* + dative; *die Lösung*, plural: *die Lösungen*",
        "source": "Wortschatz.md",
        "example": "Wir sollten nach einer Lösung suchen.",
        "exampleFa": "We should look for a solution.",
        "cloze": "Wir sollten ____.",
        "clozeFa": "We should look for a solution.",
        "answer": "nach einer Lösung suchen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "nach einer Lösung suchen",
          "nach einer Lösung suchen",
          "nach einer Lösung suchen"
        ],
        "examples": [
          {
            "de": "Wir sollten nach einer Lösung suchen.",
            "en": "We should look for a solution."
          },
          {
            "de": "Sie suchen gemeinsam nach Lösungen für das Problem.",
            "en": "They are looking for solutions to the problem together."
          }
        ]
      },
      {
        "id": "jemanden-besser-kennenlernen",
        "group": "l14-g2",
        "term": "jemanden besser kennenlernen",
        "fa": "to get to know someone better",
        "type": "phrase",
        "form": "accusative person; separable verb: *lernt kennen – lernte kennen – hat kennengelernt*",
        "source": "Wortschatz.md",
        "example": "Man sollte seine Nachbarn besser kennenlernen.",
        "exampleFa": "People should get to know their neighbours better.",
        "cloze": "Man sollte seine Nachbarn besser kennenlernen. ____",
        "clozeFa": "People should get to know their neighbours better.",
        "answer": "jemanden besser kennenlernen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden besser kennenlernen",
          "jemanden besser kennenlernen",
          "jemanden besser kennenlernen"
        ],
        "examples": [
          {
            "de": "Man sollte seine Nachbarn besser kennenlernen.",
            "en": "People should get to know their neighbours better."
          },
          {
            "de": "Ich möchte meine Kollegen kennenlernen.",
            "en": "I would like to get to know my colleagues."
          }
        ]
      },
      {
        "id": "herausfinden",
        "group": "l14-g2",
        "term": "herausfinden",
        "fa": "to find out; to discover",
        "type": "verb",
        "form": "separable verb: *findet heraus – fand heraus – hat herausgefunden*",
        "source": "Wortschatz.md",
        "example": "Ich habe herausgefunden, dass sie nachts arbeitet.",
        "exampleFa": "I found out that she works at night.",
        "cloze": "Ich habe herausgefunden, dass sie nachts arbeitet. ____",
        "clozeFa": "I found out that she works at night.",
        "answer": "herausfinden",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "herausfinden",
          "herausfinden",
          "herausfinden"
        ],
        "examples": [
          {
            "de": "Ich habe herausgefunden, dass sie nachts arbeitet.",
            "en": "I found out that she works at night."
          },
          {
            "de": "Wir müssen herausfinden, was passiert ist.",
            "en": "We must find out what happened."
          }
        ]
      },
      {
        "id": "beide",
        "group": "l14-g2",
        "term": "beide",
        "fa": "both",
        "type": "word",
        "form": "pronoun/determiner: *wir beide*, *beide Nachbarn*",
        "source": "Wortschatz.md",
        "example": "Meine Freundin und ich sind beide Nichtraucher.",
        "exampleFa": "My girlfriend and I are both nonsmokers.",
        "cloze": "Meine Freundin und ich sind ____ Nichtraucher.",
        "clozeFa": "My girlfriend and I are both nonsmokers.",
        "answer": "beide",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "beide",
          "beide",
          "beide"
        ],
        "examples": [
          {
            "de": "Meine Freundin und ich sind beide Nichtraucher.",
            "en": "My girlfriend and I are both nonsmokers."
          },
          {
            "de": "Beide Lösungen sind möglich.",
            "en": "Both solutions are possible."
          }
        ]
      },
      {
        "id": "der-nichtraucher-die-nichtraucherin",
        "group": "l14-g2",
        "term": "der Nichtraucher / die Nichtraucherin",
        "fa": "nonsmoker",
        "type": "noun",
        "form": "plurals: *die Nichtraucher / die Nichtraucherinnen*",
        "source": "Wortschatz.md",
        "example": "Wir sind beide Nichtraucher.",
        "exampleFa": "We are both nonsmokers.",
        "cloze": "Wir sind beide ____.",
        "clozeFa": "We are both nonsmokers.",
        "answer": "Nichtraucher",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Nichtraucher / die Nichtraucherin",
          "Nichtraucher / die Nichtraucherin",
          "Nichtraucher"
        ],
        "examples": [
          {
            "de": "Wir sind beide Nichtraucher.",
            "en": "We are both nonsmokers."
          },
          {
            "de": "Das ist ein Bereich für Nichtraucher.",
            "en": "This is a nonsmoking area."
          }
        ]
      },
      {
        "id": "nach-etwas-stinken",
        "group": "l14-g2",
        "term": "nach etwas stinken",
        "fa": "to stink/smell of something",
        "type": "phrase",
        "form": "*nach* + dative; *stinkt – stank – hat gestunken*",
        "source": "Wortschatz.md",
        "example": "Das Haus stinkt nach Zigaretten.",
        "exampleFa": "The building smells of cigarettes.",
        "cloze": "Das Haus stinkt nach Zigaretten. ____",
        "clozeFa": "The building smells of cigarettes.",
        "answer": "nach etwas stinken",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "nach etwas stinken",
          "nach etwas stinken",
          "nach etwas stinken"
        ],
        "examples": [
          {
            "de": "Das Haus stinkt nach Zigaretten.",
            "en": "The building smells of cigarettes."
          },
          {
            "de": "Die Küche stinkt nach Rauch.",
            "en": "The kitchen smells of smoke."
          }
        ]
      },
      {
        "id": "unangenehm-ungesund",
        "group": "l14-g2",
        "term": "unangenehm / ungesund",
        "fa": "unpleasant / unhealthy",
        "type": "adjective",
        "form": "adjectives; opposites: *angenehm / gesund*",
        "source": "Wortschatz.md",
        "example": "Der Geruch ist unangenehm.",
        "exampleFa": "The smell is unpleasant.",
        "cloze": "Der Geruch ist ____.",
        "clozeFa": "The smell is unpleasant.",
        "answer": "unangenehm",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "unangenehm / ungesund",
          "unangenehm / ungesund",
          "unangenehm"
        ],
        "examples": [
          {
            "de": "Der Geruch ist unangenehm.",
            "en": "The smell is unpleasant."
          },
          {
            "de": "Rauchen ist ungesund.",
            "en": "Smoking is unhealthy."
          }
        ]
      },
      {
        "id": "jemandem-einen-tipp-geben",
        "group": "l14-g2",
        "term": "jemandem einen Tipp geben",
        "fa": "to give someone a tip/advice",
        "type": "phrase",
        "form": "person in dative + *einen Tipp* in accusative",
        "source": "Wortschatz.md",
        "example": "Könnt ihr mir einen Tipp geben?",
        "exampleFa": "Can you give me some advice?",
        "cloze": "Könnt ihr mir ____ Tipp geben?",
        "clozeFa": "Can you give me some advice?",
        "answer": "einen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemandem einen Tipp geben",
          "jemandem einen Tipp geben",
          "einen"
        ],
        "examples": [
          {
            "de": "Könnt ihr mir einen Tipp geben?",
            "en": "Can you give me some advice?"
          },
          {
            "de": "Die Nachbarin gab ihm einen guten Tipp.",
            "en": "The neighbour gave him a good tip."
          }
        ]
      },
      {
        "id": "das-schild-das-verbotsschild",
        "group": "l14-g2",
        "term": "das Schild / das Verbotsschild",
        "fa": "sign / prohibition sign",
        "type": "noun",
        "form": "plurals: *die Schilder / die Verbotsschilder*",
        "source": "Wortschatz.md",
        "example": "Im Flur hängt ein Verbotsschild.",
        "exampleFa": "A prohibition sign hangs in the hallway.",
        "cloze": "Im Flur hängt ein Verbots____.",
        "clozeFa": "A prohibition sign hangs in the hallway.",
        "answer": "Schild",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Schild / das Verbotsschild",
          "Schild / das Verbotsschild",
          "Schild"
        ],
        "examples": [
          {
            "de": "Im Flur hängt ein Verbotsschild.",
            "en": "A prohibition sign hangs in the hallway."
          },
          {
            "de": "Auf dem Schild steht „Rauchen verboten“.",
            "en": "The sign says “No smoking.”"
          }
        ]
      },
      {
        "id": "etwas-irgendwohin-haengen",
        "group": "l14-g2",
        "term": "etwas irgendwohin hängen",
        "fa": "to hang something somewhere",
        "type": "phrase",
        "form": "direction with accusative; transitive forms: *hängt – hängte – hat gehängt*",
        "source": "Wortschatz.md",
        "example": "Sie hängt das Schild in den Hausflur.",
        "exampleFa": "She hangs the sign in the hallway.",
        "cloze": "Sie hängt das Schild in den Hausflur. ____",
        "clozeFa": "She hangs the sign in the hallway.",
        "answer": "etwas irgendwohin hängen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "etwas irgendwohin hängen",
          "etwas irgendwohin hängen",
          "etwas irgendwohin hängen"
        ],
        "examples": [
          {
            "de": "Sie hängt das Schild in den Hausflur.",
            "en": "She hangs the sign in the hallway."
          },
          {
            "de": "Das Schild hat an der Tür gehangen.",
            "en": "The sign was hanging on the door."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l14-g1",
        "icon": "1",
        "title": "Words 261-270",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l14-g2",
        "icon": "2",
        "title": "Words 271-280",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 15,
    "code": "Set 15",
    "title": "Wortschatz Set 15",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "genervt",
        "group": "l15-g1",
        "term": "genervt",
        "fa": "annoyed; irritated",
        "type": "adjective",
        "form": "adjective/participle; often *von etwas genervt sein*",
        "source": "Wortschatz.md",
        "example": "Ich verstehe, dass du genervt bist.",
        "exampleFa": "I understand that you are annoyed.",
        "cloze": "Ich verstehe, dass du ____ bist.",
        "clozeFa": "I understand that you are annoyed.",
        "answer": "genervt",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "genervt",
          "genervt",
          "genervt"
        ],
        "examples": [
          {
            "de": "Ich verstehe, dass du genervt bist.",
            "en": "I understand that you are annoyed."
          },
          {
            "de": "Die Nachbarn sind vom Rauch genervt.",
            "en": "The neighbours are annoyed by the smoke."
          }
        ]
      },
      {
        "id": "streit-haben",
        "group": "l15-g1",
        "term": "Streit haben",
        "fa": "to have an argument; to be in conflict",
        "type": "phrase",
        "form": "*der Streit*; often *Streit mit jemandem haben*",
        "source": "Wortschatz.md",
        "example": "Die Nachbarn haben Streit.",
        "exampleFa": "The neighbours are having an argument.",
        "cloze": "Die Nachbarn ____ Streit.",
        "clozeFa": "The neighbours are having an argument.",
        "answer": "haben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Streit haben",
          "Streit haben",
          "haben"
        ],
        "examples": [
          {
            "de": "Die Nachbarn haben Streit.",
            "en": "The neighbours are having an argument."
          },
          {
            "de": "Ich möchte keinen Streit mit dir haben.",
            "en": "I don’t want to argue with you."
          }
        ]
      },
      {
        "id": "der-hausbewohner-die-hausbewohnerin",
        "group": "l15-g1",
        "term": "der Hausbewohner / die Hausbewohnerin",
        "fa": "resident of a building",
        "type": "noun",
        "form": "plurals: *die Hausbewohner / die Hausbewohnerinnen*",
        "source": "Wortschatz.md",
        "example": "Der Vermieter schreibt an alle Hausbewohner.",
        "exampleFa": "The landlord writes to all residents.",
        "cloze": "Der Vermieter schreibt an alle ____.",
        "clozeFa": "The landlord writes to all residents.",
        "answer": "Hausbewohner",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Hausbewohner / die Hausbewohnerin",
          "Hausbewohner / die Hausbewohnerin",
          "Hausbewohner"
        ],
        "examples": [
          {
            "de": "Der Vermieter schreibt an alle Hausbewohner.",
            "en": "The landlord writes to all residents."
          },
          {
            "de": "Die Hausbewohner beschweren sich über den Rauch.",
            "en": "The residents complain about the smoke."
          }
        ]
      },
      {
        "id": "jemanden-beleidigen",
        "group": "l15-g1",
        "term": "jemanden beleidigen",
        "fa": "to insult; to offend someone",
        "type": "phrase",
        "form": "person in accusative; *beleidigt – beleidigte – hat beleidigt*",
        "source": "Wortschatz.md",
        "example": "Herr Meier hat Frau Radke beleidigt.",
        "exampleFa": "Mr Meier insulted Ms Radke.",
        "cloze": "Herr Meier hat Frau Radke beleidigt. ____",
        "clozeFa": "Mr Meier insulted Ms Radke.",
        "answer": "jemanden beleidigen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden beleidigen",
          "jemanden beleidigen",
          "jemanden beleidigen"
        ],
        "examples": [
          {
            "de": "Herr Meier hat Frau Radke beleidigt.",
            "en": "Mr Meier insulted Ms Radke."
          },
          {
            "de": "Ich wollte dich nicht beleidigen.",
            "en": "I did not mean to offend you."
          }
        ]
      },
      {
        "id": "hoeflich",
        "group": "l15-g1",
        "term": "höflich",
        "fa": "polite; politely",
        "type": "verb",
        "form": "adjective/adverb; opposite: *unhöflich*",
        "source": "Wortschatz.md",
        "example": "Er kann wirklich nie höflich sein.",
        "exampleFa": "He really can never be polite.",
        "cloze": "Er kann wirklich nie ____ sein.",
        "clozeFa": "He really can never be polite.",
        "answer": "höflich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "höflich",
          "höflich",
          "höflich"
        ],
        "examples": [
          {
            "de": "Er kann wirklich nie höflich sein.",
            "en": "He really can never be polite."
          },
          {
            "de": "Bitte fragen Sie höflich.",
            "en": "Please ask politely."
          }
        ]
      },
      {
        "id": "recht-haben",
        "group": "l15-g1",
        "term": "recht haben",
        "fa": "to be right",
        "type": "phrase",
        "form": "fixed expression; *hat recht – hatte recht – hat recht gehabt*",
        "source": "Wortschatz.md",
        "example": "Da hast du recht.",
        "exampleFa": "You are right about that.",
        "cloze": "Da hast du recht. ____",
        "clozeFa": "You are right about that.",
        "answer": "recht haben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "recht haben",
          "recht haben",
          "recht haben"
        ],
        "examples": [
          {
            "de": "Da hast du recht.",
            "en": "You are right about that."
          },
          {
            "de": "Sie hatte allerdings recht.",
            "en": "She was right, however."
          }
        ]
      },
      {
        "id": "allerdings",
        "group": "l15-g1",
        "term": "allerdings",
        "fa": "however; indeed; admittedly",
        "type": "verb",
        "form": "adverb; meaning depends on context",
        "source": "Wortschatz.md",
        "example": "Da hast du allerdings recht.",
        "exampleFa": "You are certainly right about that.",
        "cloze": "Da hast du ____ recht.",
        "clozeFa": "You are certainly right about that.",
        "answer": "allerdings",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "allerdings",
          "allerdings",
          "allerdings"
        ],
        "examples": [
          {
            "de": "Da hast du allerdings recht.",
            "en": "You are certainly right about that."
          },
          {
            "de": "Das ist möglich, allerdings sehr teuer.",
            "en": "That is possible, but very expensive."
          }
        ]
      },
      {
        "id": "nebenan",
        "group": "l15-g1",
        "term": "nebenan",
        "fa": "next door; nearby",
        "type": "verb",
        "form": "adverb of place",
        "source": "Wortschatz.md",
        "example": "Die Nachbarn nebenan streiten sich.",
        "exampleFa": "The neighbours next door are arguing.",
        "cloze": "Die Nachbarn ____ streiten sich.",
        "clozeFa": "The neighbours next door are arguing.",
        "answer": "nebenan",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "nebenan",
          "nebenan",
          "nebenan"
        ],
        "examples": [
          {
            "de": "Die Nachbarn nebenan streiten sich.",
            "en": "The neighbours next door are arguing."
          },
          {
            "de": "Sie wohnt direkt nebenan.",
            "en": "She lives right next door."
          }
        ]
      },
      {
        "id": "sich-streiten",
        "group": "l15-g1",
        "term": "sich streiten",
        "fa": "to argue; to quarrel",
        "type": "verb",
        "form": "reflexive verb: *streitet sich – stritt sich – hat sich gestritten*; often *mit* + dative",
        "source": "Wortschatz.md",
        "example": "Die Nachbarn streiten sich schon wieder.",
        "exampleFa": "The neighbours are arguing again.",
        "cloze": "Die Nachbarn ____ sich schon wieder.",
        "clozeFa": "The neighbours are arguing again.",
        "answer": "streiten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich streiten",
          "sich streiten",
          "streiten"
        ],
        "examples": [
          {
            "de": "Die Nachbarn streiten sich schon wieder.",
            "en": "The neighbours are arguing again."
          },
          {
            "de": "Er streitet sich mit seinem Bruder.",
            "en": "He is arguing with his brother."
          }
        ]
      },
      {
        "id": "fast",
        "group": "l15-g1",
        "term": "fast",
        "fa": "almost; nearly",
        "type": "verb",
        "form": "adverb placed before the word or phrase it modifies",
        "source": "Wortschatz.md",
        "example": "Man versteht fast jedes Wort.",
        "exampleFa": "You can understand almost every word.",
        "cloze": "Man versteht ____ jedes Wort.",
        "clozeFa": "You can understand almost every word.",
        "answer": "fast",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "fast",
          "fast",
          "fast"
        ],
        "examples": [
          {
            "de": "Man versteht fast jedes Wort.",
            "en": "You can understand almost every word."
          },
          {
            "de": "Ich habe fast drei Stunden gewartet.",
            "en": "I waited for almost three hours."
          }
        ]
      },
      {
        "id": "der-spielplatz",
        "group": "l15-g2",
        "term": "der Spielplatz",
        "fa": "playground",
        "type": "noun",
        "form": "masculine noun; plural: *die Spielplätze*",
        "source": "Wortschatz.md",
        "example": "Hinter dem Haus ist ein Spielplatz.",
        "exampleFa": "There is a playground behind the building.",
        "cloze": "Hinter dem Haus ist ein ____.",
        "clozeFa": "There is a playground behind the building.",
        "answer": "Spielplatz",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Spielplatz",
          "Spielplatz",
          "Spielplatz"
        ],
        "examples": [
          {
            "de": "Hinter dem Haus ist ein Spielplatz.",
            "en": "There is a playground behind the building."
          },
          {
            "de": "Die Kinder spielen auf dem Spielplatz.",
            "en": "The children are playing in the playground."
          }
        ]
      },
      {
        "id": "draussen",
        "group": "l15-g2",
        "term": "draußen",
        "fa": "outside; outdoors",
        "type": "verb",
        "form": "adverb of place; opposite: *drinnen*",
        "source": "Wortschatz.md",
        "example": "Die Kinder sollten draußen spielen.",
        "exampleFa": "The children should play outside.",
        "cloze": "Die Kinder sollten ____ spielen.",
        "clozeFa": "The children should play outside.",
        "answer": "draußen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "draußen",
          "draußen",
          "draußen"
        ],
        "examples": [
          {
            "de": "Die Kinder sollten draußen spielen.",
            "en": "The children should play outside."
          },
          {
            "de": "Draußen ist es kalt.",
            "en": "It is cold outside."
          }
        ]
      },
      {
        "id": "das-sehe-ich-auch-so",
        "group": "l15-g2",
        "term": "Das sehe ich auch so.",
        "fa": "I agree; I see it the same way",
        "type": "noun",
        "form": "fixed expression; *das* refers to the previous opinion",
        "source": "Wortschatz.md",
        "example": "Das sehe ich auch so.",
        "exampleFa": "I agree.",
        "cloze": "Das ____",
        "clozeFa": "I agree.",
        "answer": "sehe ich auch so.",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Das sehe ich auch so.",
          "sehe ich auch so.",
          "sehe ich auch so."
        ],
        "examples": [
          {
            "de": "Das sehe ich auch so.",
            "en": "I agree."
          },
          {
            "de": "Ich finde den Vorschlag gut.",
            "en": "Das sehe ich auch so. — I like the suggestion. — I agree."
          }
        ]
      },
      {
        "id": "jemandem-zustimmen",
        "group": "l15-g2",
        "term": "jemandem zustimmen",
        "fa": "to agree with someone",
        "type": "phrase",
        "form": "person in dative; separable verb: *stimmt zu – stimmte zu – hat zugestimmt*",
        "source": "Wortschatz.md",
        "example": "Da stimme ich Ihnen zu.",
        "exampleFa": "I agree with you on that.",
        "cloze": "Da stimme ich Ihnen zu. ____",
        "clozeFa": "I agree with you on that.",
        "answer": "jemandem zustimmen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemandem zustimmen",
          "jemandem zustimmen",
          "jemandem zustimmen"
        ],
        "examples": [
          {
            "de": "Da stimme ich Ihnen zu.",
            "en": "I agree with you on that."
          },
          {
            "de": "Ich kann dir nicht zustimmen.",
            "en": "I cannot agree with you."
          }
        ]
      },
      {
        "id": "sicher-sein",
        "group": "l15-g2",
        "term": "sicher sein",
        "fa": "to be sure; to be certain",
        "type": "phrase",
        "form": "often followed by a *dass* clause or indirect question",
        "source": "Wortschatz.md",
        "example": "Ich bin nicht sicher.",
        "exampleFa": "I am not sure.",
        "cloze": "Ich bin nicht ____.",
        "clozeFa": "I am not sure.",
        "answer": "sicher",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sicher sein",
          "sicher sein",
          "sicher"
        ],
        "examples": [
          {
            "de": "Ich bin nicht sicher.",
            "en": "I am not sure."
          },
          {
            "de": "Bist du sicher, dass das stimmt?",
            "en": "Are you sure that is correct?"
          }
        ]
      },
      {
        "id": "ueberlegen",
        "group": "l15-g2",
        "term": "überlegen",
        "fa": "to think; to consider; to think something over",
        "type": "verb",
        "form": "*überlegt – überlegte – hat überlegt*; also reflexive: *sich etwas überlegen*",
        "source": "Wortschatz.md",
        "example": "Wir müssen noch einmal überlegen.",
        "exampleFa": "We must think about it again.",
        "cloze": "Wir müssen noch einmal ____.",
        "clozeFa": "We must think about it again.",
        "answer": "überlegen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "überlegen",
          "überlegen",
          "überlegen"
        ],
        "examples": [
          {
            "de": "Wir müssen noch einmal überlegen.",
            "en": "We must think about it again."
          },
          {
            "de": "Ich habe mir einen neuen Plan überlegt.",
            "en": "I came up with a new plan."
          }
        ]
      },
      {
        "id": "lass-uns",
        "group": "l15-g2",
        "term": "Lass uns …",
        "fa": "Let’s …",
        "type": "phrase",
        "form": "informal imperative of *lassen* + accusative *uns* + infinitive",
        "source": "Wortschatz.md",
        "example": "Lass uns noch einmal überlegen.",
        "exampleFa": "Let’s think about it again.",
        "cloze": "____ uns noch einmal überlegen.",
        "clozeFa": "Let’s think about it again.",
        "answer": "Lass",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Lass uns …",
          "Lass uns …",
          "Lass"
        ],
        "examples": [
          {
            "de": "Lass uns noch einmal überlegen.",
            "en": "Let’s think about it again."
          },
          {
            "de": "Lass uns mit der Vermieterin sprechen.",
            "en": "Let’s speak with the landlady."
          }
        ]
      },
      {
        "id": "was-meint-ihr",
        "group": "l15-g2",
        "term": "Was meint ihr?",
        "fa": "What do you all think?",
        "type": "phrase",
        "form": "informal plural *ihr* form of *meinen*",
        "source": "Wortschatz.md",
        "example": "Was meint ihr zu dieser Idee?",
        "exampleFa": "What do you all think about this idea?",
        "cloze": "____ meint ihr zu dieser Idee?",
        "clozeFa": "What do you all think about this idea?",
        "answer": "Was",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Was meint ihr?",
          "Was meint ihr?",
          "Was"
        ],
        "examples": [
          {
            "de": "Was meint ihr zu dieser Idee?",
            "en": "What do you all think about this idea?"
          },
          {
            "de": "Ich finde den Vorschlag gut. Was meint ihr?",
            "en": "I like the suggestion. What do you all think?"
          }
        ]
      },
      {
        "id": "immer-noch",
        "group": "l15-g2",
        "term": "immer noch",
        "fa": "still; even now",
        "type": "phrase",
        "form": "fixed adverbial expression for a continuing situation",
        "source": "Wortschatz.md",
        "example": "Die Nachbarn sind immer noch sauer.",
        "exampleFa": "The neighbours are still angry.",
        "cloze": "Die Nachbarn sind ____ sauer.",
        "clozeFa": "The neighbours are still angry.",
        "answer": "immer noch",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "immer noch",
          "immer noch",
          "immer noch"
        ],
        "examples": [
          {
            "de": "Die Nachbarn sind immer noch sauer.",
            "en": "The neighbours are still angry."
          },
          {
            "de": "Der Flug ist immer noch verspätet.",
            "en": "The flight is still delayed."
          }
        ]
      },
      {
        "id": "sauer-sein",
        "group": "l15-g2",
        "term": "sauer sein",
        "fa": "to be angry; to be annoyed",
        "type": "phrase",
        "form": "conversational expression; often *sauer auf jemanden sein* with accusative",
        "source": "Wortschatz.md",
        "example": "Die Nachbarn sind sauer auf mich.",
        "exampleFa": "The neighbours are angry with me.",
        "cloze": "Die Nachbarn sind ____ auf mich.",
        "clozeFa": "The neighbours are angry with me.",
        "answer": "sauer",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sauer sein",
          "sauer sein",
          "sauer"
        ],
        "examples": [
          {
            "de": "Die Nachbarn sind sauer auf mich.",
            "en": "The neighbours are angry with me."
          },
          {
            "de": "Bist du noch sauer?",
            "en": "Are you still angry?"
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l15-g1",
        "icon": "1",
        "title": "Words 281-290",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l15-g2",
        "icon": "2",
        "title": "Words 291-300",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 16,
    "code": "Set 16",
    "title": "Wortschatz Set 16",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "sich-bei-jemandem-entschuldigen",
        "group": "l16-g1",
        "term": "sich bei jemandem entschuldigen",
        "fa": "to apologize to someone",
        "type": "phrase",
        "form": "reflexive verb; *bei* + dative; *entschuldigt sich – entschuldigte sich – hat sich entschuldigt*",
        "source": "Wortschatz.md",
        "example": "Ich habe mich bei den Nachbarn entschuldigt.",
        "exampleFa": "I apologized to the neighbours.",
        "cloze": "Ich habe mich bei den Nachbarn entschuldigt. ____",
        "clozeFa": "I apologized to the neighbours.",
        "answer": "sich bei jemandem entschuldigen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich bei jemandem entschuldigen",
          "sich bei jemandem entschuldigen",
          "sich bei jemandem entschuldigen"
        ],
        "examples": [
          {
            "de": "Ich habe mich bei den Nachbarn entschuldigt.",
            "en": "I apologized to the neighbours."
          },
          {
            "de": "Obwohl ich mich bei ihnen entschuldigt habe, sind sie noch sauer.",
            "en": "Although I apologized to them, they are still angry."
          }
        ]
      },
      {
        "id": "zu-etwas-gelangen",
        "group": "l16-g1",
        "term": "zu etwas gelangen",
        "fa": "to reach; to get to something",
        "type": "phrase",
        "form": "*zu* + dative; perfect with *sein*: *gelangt – gelangte – ist gelangt*",
        "source": "Wortschatz.md",
        "example": "Wie gelange ich zum Schlosspark?",
        "exampleFa": "How do I get to the castle park?",
        "cloze": "Wie gelange ich zum Schlosspark? ____",
        "clozeFa": "How do I get to the castle park?",
        "answer": "zu etwas gelangen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zu etwas gelangen",
          "zu etwas gelangen",
          "zu etwas gelangen"
        ],
        "examples": [
          {
            "de": "Wie gelange ich zum Schlosspark?",
            "en": "How do I get to the castle park?"
          },
          {
            "de": "Sie gelangen mit dem Bus zum Bahnhof.",
            "en": "You can reach the station by bus."
          }
        ]
      },
      {
        "id": "der-schlosspark",
        "group": "l16-g1",
        "term": "der Schlosspark",
        "fa": "castle park; palace gardens",
        "type": "noun",
        "form": "masculine noun; plural: *die Schlossparks*",
        "source": "Wortschatz.md",
        "example": "Der Schlosspark liegt im Zentrum.",
        "exampleFa": "The castle park is in the city centre.",
        "cloze": "Der ____ liegt im Zentrum.",
        "clozeFa": "The castle park is in the city centre.",
        "answer": "Schlosspark",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Schlosspark",
          "Schlosspark",
          "Schlosspark"
        ],
        "examples": [
          {
            "de": "Der Schlosspark liegt im Zentrum.",
            "en": "The castle park is in the city centre."
          },
          {
            "de": "Wir gehen durch den Schlosspark.",
            "en": "We walk through the palace gardens."
          }
        ]
      },
      {
        "id": "schritte-befolgen",
        "group": "l16-g1",
        "term": "Schritte befolgen",
        "fa": "to follow steps/instructions",
        "type": "phrase",
        "form": "*der Schritt*, plural *die Schritte*; *befolgen* takes the accusative",
        "source": "Wortschatz.md",
        "example": "Welche Schritte sollten Sie befolgen?",
        "exampleFa": "Which steps should you follow?",
        "cloze": "Welche Schritte sollten Sie ____?",
        "clozeFa": "Which steps should you follow?",
        "answer": "befolgen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Schritte befolgen",
          "Schritte befolgen",
          "befolgen"
        ],
        "examples": [
          {
            "de": "Welche Schritte sollten Sie befolgen?",
            "en": "Which steps should you follow?"
          },
          {
            "de": "Bitte befolgen Sie diese Anweisungen.",
            "en": "Please follow these instructions."
          }
        ]
      },
      {
        "id": "ein-tor-schiessen",
        "group": "l16-g1",
        "term": "ein Tor schießen",
        "fa": "to score a goal",
        "type": "phrase",
        "form": "Strong verb: `schießt – schoss – hat geschossen`.",
        "source": "Wortschatz.md",
        "example": "Die Mannschaft hat drei Tore geschossen.",
        "exampleFa": "The team scored three goals.",
        "cloze": "Die Mannschaft hat drei Tore geschossen. ____",
        "clozeFa": "The team scored three goals.",
        "answer": "Tor schießen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ein Tor schießen",
          "Tor schießen",
          "Tor schießen"
        ],
        "examples": [
          {
            "de": "Die Mannschaft hat drei Tore geschossen.",
            "en": "The team scored three goals."
          },
          {
            "de": "Wer hat das Tor geschossen?",
            "en": "Who scored the goal?"
          }
        ]
      },
      {
        "id": "die-mannschaft",
        "group": "l16-g1",
        "term": "die Mannschaft",
        "fa": "team",
        "type": "noun",
        "form": "Feminine noun: `die Mannschaft`; plural: `die Mannschaften`.",
        "source": "Wortschatz.md",
        "example": "Unsere Mannschaft spielt heute.",
        "exampleFa": "Our team is playing today.",
        "cloze": "Unsere ____ spielt heute.",
        "clozeFa": "Our team is playing today.",
        "answer": "Mannschaft",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Mannschaft",
          "Mannschaft",
          "Mannschaft"
        ],
        "examples": [
          {
            "de": "Unsere Mannschaft spielt heute.",
            "en": "Our team is playing today."
          },
          {
            "de": "Beide Mannschaften waren stark.",
            "en": "Both teams were strong."
          }
        ]
      },
      {
        "id": "insgesamt",
        "group": "l16-g1",
        "term": "insgesamt",
        "fa": "in total; altogether",
        "type": "verb",
        "form": "Adverb; its form does not change.",
        "source": "Wortschatz.md",
        "example": "Insgesamt waren zwanzig Gäste da.",
        "exampleFa": "There were twenty guests in total.",
        "cloze": "____ waren zwanzig Gäste da.",
        "clozeFa": "There were twenty guests in total.",
        "answer": "insgesamt",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "insgesamt",
          "insgesamt",
          "insgesamt"
        ],
        "examples": [
          {
            "de": "Insgesamt waren zwanzig Gäste da.",
            "en": "There were twenty guests in total."
          },
          {
            "de": "Wir haben insgesamt fünf Tore geschossen.",
            "en": "We scored five goals altogether."
          }
        ]
      },
      {
        "id": "kuendigen",
        "group": "l16-g1",
        "term": "kündigen",
        "fa": "to terminate; to give notice",
        "type": "verb",
        "form": "Regular verb: `kündigt – kündigte – hat gekündigt`.",
        "source": "Wortschatz.md",
        "example": "Ich möchte meinen Mietvertrag kündigen.",
        "exampleFa": "I would like to terminate my rental agreement.",
        "cloze": "Ich möchte meinen Mietvertrag ____.",
        "clozeFa": "I would like to terminate my rental agreement.",
        "answer": "kündigen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "kündigen",
          "kündigen",
          "kündigen"
        ],
        "examples": [
          {
            "de": "Ich möchte meinen Mietvertrag kündigen.",
            "en": "I would like to terminate my rental agreement."
          },
          {
            "de": "Der Vermieter hat wegen Eigenbedarfs gekündigt.",
            "en": "The landlord gave notice due to personal use."
          }
        ]
      },
      {
        "id": "die-kuendigung",
        "group": "l16-g1",
        "term": "die Kündigung",
        "fa": "termination; notice",
        "type": "noun",
        "form": "Feminine noun; plural: `die Kündigungen`.",
        "source": "Wortschatz.md",
        "example": "Die Kündigung muss schriftlich erfolgen.",
        "exampleFa": "The notice must be given in writing.",
        "cloze": "Die ____ muss schriftlich erfolgen.",
        "clozeFa": "The notice must be given in writing.",
        "answer": "Kündigung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Kündigung",
          "Kündigung",
          "Kündigung"
        ],
        "examples": [
          {
            "de": "Die Kündigung muss schriftlich erfolgen.",
            "en": "The notice must be given in writing."
          },
          {
            "de": "Er hat eine Kündigung erhalten.",
            "en": "He received a termination notice."
          }
        ]
      },
      {
        "id": "die-frist",
        "group": "l16-g1",
        "term": "die Frist",
        "fa": "deadline; notice period",
        "type": "noun",
        "form": "Feminine noun; plural: `die Fristen`.",
        "source": "Wortschatz.md",
        "example": "Bitte beachten Sie die Frist.",
        "exampleFa": "Please observe the deadline.",
        "cloze": "Bitte beachten Sie die ____.",
        "clozeFa": "Please observe the deadline.",
        "answer": "Frist",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Frist",
          "Frist",
          "Frist"
        ],
        "examples": [
          {
            "de": "Bitte beachten Sie die Frist.",
            "en": "Please observe the deadline."
          },
          {
            "de": "Die Frist endet am 30. Juni.",
            "en": "The deadline ends on June 30."
          }
        ]
      },
      {
        "id": "die-kuendigungsfrist",
        "group": "l16-g2",
        "term": "die Kündigungsfrist",
        "fa": "notice period",
        "type": "noun",
        "form": "Feminine compound noun: `Kündigung + Frist`.",
        "source": "Wortschatz.md",
        "example": "Die Kündigungsfrist beträgt drei Monate.",
        "exampleFa": "The notice period is three months.",
        "cloze": "Die ____ beträgt drei Monate.",
        "clozeFa": "The notice period is three months.",
        "answer": "Kündigungsfrist",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Kündigungsfrist",
          "Kündigungsfrist",
          "Kündigungsfrist"
        ],
        "examples": [
          {
            "de": "Die Kündigungsfrist beträgt drei Monate.",
            "en": "The notice period is three months."
          },
          {
            "de": "Der Vermieter muss die Kündigungsfrist beachten.",
            "en": "The landlord must observe the notice period."
          }
        ]
      },
      {
        "id": "fristgerecht",
        "group": "l16-g2",
        "term": "fristgerecht",
        "fa": "within the prescribed period; on time",
        "type": "verb",
        "form": "Adjective or adverb.",
        "source": "Wortschatz.md",
        "example": "Ich kündige den Vertrag fristgerecht.",
        "exampleFa": "I am terminating the contract within the required period.",
        "cloze": "Ich kündige den Vertrag ____.",
        "clozeFa": "I am terminating the contract within the required period.",
        "answer": "fristgerecht",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "fristgerecht",
          "fristgerecht",
          "fristgerecht"
        ],
        "examples": [
          {
            "de": "Ich kündige den Vertrag fristgerecht.",
            "en": "I am terminating the contract within the required period."
          },
          {
            "de": "Der Brief ist fristgerecht angekommen.",
            "en": "The letter arrived on time."
          }
        ]
      },
      {
        "id": "der-eigenbedarf",
        "group": "l16-g2",
        "term": "der Eigenbedarf",
        "fa": "personal use by the landlord",
        "type": "noun",
        "form": "Usually used in the singular; `wegen Eigenbedarfs` takes the genitive.",
        "source": "Wortschatz.md",
        "example": "Der Vermieter kündigt wegen Eigenbedarfs.",
        "exampleFa": "The landlord is terminating the lease for personal use.",
        "cloze": "Der Vermieter kündigt wegen ____s.",
        "clozeFa": "The landlord is terminating the lease for personal use.",
        "answer": "Eigenbedarf",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Eigenbedarf",
          "Eigenbedarf",
          "Eigenbedarf"
        ],
        "examples": [
          {
            "de": "Der Vermieter kündigt wegen Eigenbedarfs.",
            "en": "The landlord is terminating the lease for personal use."
          },
          {
            "de": "Er braucht die Wohnung für den Eigenbedarf.",
            "en": "He needs the apartment for his own use."
          }
        ]
      },
      {
        "id": "widerspruch-einlegen",
        "group": "l16-g2",
        "term": "Widerspruch einlegen",
        "fa": "to lodge/file an objection",
        "type": "phrase",
        "form": "`Widerspruch gegen + Akkusativ einlegen`.",
        "source": "Wortschatz.md",
        "example": "Sie kann gegen die Kündigung Widerspruch einlegen.",
        "exampleFa": "She can lodge an objection to the termination.",
        "cloze": "Sie kann gegen die Kündigung ____.",
        "clozeFa": "She can lodge an objection to the termination.",
        "answer": "Widerspruch einlegen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Widerspruch einlegen",
          "Widerspruch einlegen",
          "Widerspruch einlegen"
        ],
        "examples": [
          {
            "de": "Sie kann gegen die Kündigung Widerspruch einlegen.",
            "en": "She can lodge an objection to the termination."
          },
          {
            "de": "Wir haben schriftlich Widerspruch eingelegt.",
            "en": "We filed an objection in writing."
          }
        ]
      },
      {
        "id": "der-rechtsanwalt-die-rechtsanwaeltin",
        "group": "l16-g2",
        "term": "der Rechtsanwalt / die Rechtsanwältin",
        "fa": "lawyer",
        "type": "noun",
        "form": "Plural: `die Rechtsanwälte / die Rechtsanwältinnen`.",
        "source": "Wortschatz.md",
        "example": "Mein Cousin ist Rechtsanwalt.",
        "exampleFa": "My cousin is a lawyer.",
        "cloze": "Mein Cousin ist ____.",
        "clozeFa": "My cousin is a lawyer.",
        "answer": "Rechtsanwalt",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Rechtsanwalt / die Rechtsanwältin",
          "Rechtsanwalt / die Rechtsanwältin",
          "Rechtsanwalt"
        ],
        "examples": [
          {
            "de": "Mein Cousin ist Rechtsanwalt.",
            "en": "My cousin is a lawyer."
          },
          {
            "de": "Die Rechtsanwältin gibt den Mietern Tipps.",
            "en": "The lawyer gives the tenants advice."
          }
        ]
      },
      {
        "id": "die-wohnungsuebergabe",
        "group": "l16-g2",
        "term": "die Wohnungsübergabe",
        "fa": "apartment handover",
        "type": "noun",
        "form": "Feminine compound noun: `Wohnung + Übergabe`.",
        "source": "Wortschatz.md",
        "example": "Die Wohnungsübergabe findet am 31. Oktober statt.",
        "exampleFa": "The apartment handover takes place on October 31.",
        "cloze": "Die ____ findet am 31. Oktober statt.",
        "clozeFa": "The apartment handover takes place on October 31.",
        "answer": "Wohnungsübergabe",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Wohnungsübergabe",
          "Wohnungsübergabe",
          "Wohnungsübergabe"
        ],
        "examples": [
          {
            "de": "Die Wohnungsübergabe findet am 31. Oktober statt.",
            "en": "The apartment handover takes place on October 31."
          },
          {
            "de": "Bringen Sie zur Wohnungsübergabe alle Schlüssel mit.",
            "en": "Bring all keys to the apartment handover."
          }
        ]
      },
      {
        "id": "wirksam",
        "group": "l16-g2",
        "term": "wirksam",
        "fa": "valid; effective",
        "type": "adjective",
        "form": "Adjective; often used with `sein`.",
        "source": "Wortschatz.md",
        "example": "Ohne Grund ist die Kündigung nicht wirksam.",
        "exampleFa": "Without a reason, the termination is not valid.",
        "cloze": "Ohne Grund ist die Kündigung nicht ____.",
        "clozeFa": "Without a reason, the termination is not valid.",
        "answer": "wirksam",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "wirksam",
          "wirksam",
          "wirksam"
        ],
        "examples": [
          {
            "de": "Ohne Grund ist die Kündigung nicht wirksam.",
            "en": "Without a reason, the termination is not valid."
          },
          {
            "de": "Der Vertrag ist sofort wirksam.",
            "en": "The contract is effective immediately."
          }
        ]
      },
      {
        "id": "betragen",
        "group": "l16-g2",
        "term": "betragen",
        "fa": "to amount to; to be",
        "type": "verb",
        "form": "Strong verb: `beträgt – betrug – hat betragen`.",
        "source": "Wortschatz.md",
        "example": "Die Kündigungsfrist beträgt drei Monate.",
        "exampleFa": "The notice period is three months.",
        "cloze": "Die Kündigungsfrist beträgt drei Monate. ____",
        "clozeFa": "The notice period is three months.",
        "answer": "betragen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "betragen",
          "betragen",
          "betragen"
        ],
        "examples": [
          {
            "de": "Die Kündigungsfrist beträgt drei Monate.",
            "en": "The notice period is three months."
          },
          {
            "de": "Die Kosten betragen 100 Euro.",
            "en": "The costs amount to 100 euros."
          }
        ]
      },
      {
        "id": "gehoeren",
        "group": "l16-g2",
        "term": "gehören",
        "fa": "to belong to",
        "type": "verb",
        "form": "`gehören + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Das Haus gehört der Vermieterin.",
        "exampleFa": "The house belongs to the landlady.",
        "cloze": "Das Haus gehört der Vermieterin. ____",
        "clozeFa": "The house belongs to the landlady.",
        "answer": "gehören",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "gehören",
          "gehören",
          "gehören"
        ],
        "examples": [
          {
            "de": "Das Haus gehört der Vermieterin.",
            "en": "The house belongs to the landlady."
          },
          {
            "de": "Wem gehört dieser Schlüssel?",
            "en": "Who does this key belong to?"
          }
        ]
      },
      {
        "id": "trotzdem",
        "group": "l16-g2",
        "term": "trotzdem",
        "fa": "nevertheless; even so",
        "type": "verb",
        "form": "Conjunctive adverb; when placed first, the verb follows immediately.",
        "source": "Wortschatz.md",
        "example": "Trotzdem kann sie die Mieter nicht rauswerfen.",
        "exampleFa": "Nevertheless, she cannot throw the tenants out.",
        "cloze": "____ kann sie die Mieter nicht rauswerfen.",
        "clozeFa": "Nevertheless, she cannot throw the tenants out.",
        "answer": "trotzdem",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "trotzdem",
          "trotzdem",
          "trotzdem"
        ],
        "examples": [
          {
            "de": "Trotzdem kann sie die Mieter nicht rauswerfen.",
            "en": "Nevertheless, she cannot throw the tenants out."
          },
          {
            "de": "Es regnet. Trotzdem gehen wir spazieren.",
            "en": "It is raining. Nevertheless, we are going for a walk."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l16-g1",
        "icon": "1",
        "title": "Words 301-310",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l16-g2",
        "icon": "2",
        "title": "Words 311-320",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 17,
    "code": "Set 17",
    "title": "Wortschatz Set 17",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "rauswerfen",
        "group": "l17-g1",
        "term": "rauswerfen",
        "fa": "to throw out; to kick out",
        "type": "verb",
        "form": "Colloquial separable verb: `wirft raus – warf raus – hat rausgeworfen`.",
        "source": "Wortschatz.md",
        "example": "Der Vermieter darf die Mieter nicht einfach rauswerfen.",
        "exampleFa": "The landlord cannot simply throw the tenants out.",
        "cloze": "Der Vermieter darf die Mieter nicht einfach ____.",
        "clozeFa": "The landlord cannot simply throw the tenants out.",
        "answer": "rauswerfen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "rauswerfen",
          "rauswerfen",
          "rauswerfen"
        ],
        "examples": [
          {
            "de": "Der Vermieter darf die Mieter nicht einfach rauswerfen.",
            "en": "The landlord cannot simply throw the tenants out."
          },
          {
            "de": "Er wurde aus dem Restaurant rausgeworfen.",
            "en": "He was thrown out of the restaurant."
          }
        ]
      },
      {
        "id": "ausziehen",
        "group": "l17-g1",
        "term": "ausziehen",
        "fa": "to move out",
        "type": "verb",
        "form": "Separable verb: `zieht aus – zog aus – ist ausgezogen`.",
        "source": "Wortschatz.md",
        "example": "Ich will nicht ausziehen.",
        "exampleFa": "I do not want to move out.",
        "cloze": "Ich will nicht ____.",
        "clozeFa": "I do not want to move out.",
        "answer": "ausziehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ausziehen",
          "ausziehen",
          "ausziehen"
        ],
        "examples": [
          {
            "de": "Ich will nicht ausziehen.",
            "en": "I do not want to move out."
          },
          {
            "de": "Wann seid ihr aus der Wohnung ausgezogen?",
            "en": "When did you move out of the apartment?"
          }
        ]
      },
      {
        "id": "viel-zu-2",
        "group": "l17-g1",
        "term": "viel zu",
        "fa": "much too; far too",
        "type": "phrase",
        "form": "`viel zu + adjective/adverb` expresses an excessive degree.",
        "source": "Wortschatz.md",
        "example": "Die Wohnung ist viel zu teuer.",
        "exampleFa": "The apartment is far too expensive.",
        "cloze": "Die Wohnung ist ____ teuer.",
        "clozeFa": "The apartment is far too expensive.",
        "answer": "viel zu",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "viel zu",
          "viel zu",
          "viel zu"
        ],
        "examples": [
          {
            "de": "Die Wohnung ist viel zu teuer.",
            "en": "The apartment is far too expensive."
          },
          {
            "de": "Er fährt viel zu schnell.",
            "en": "He drives much too fast."
          }
        ]
      },
      {
        "id": "hiermit",
        "group": "l17-g1",
        "term": "hiermit",
        "fa": "hereby; with this letter",
        "type": "verb",
        "form": "Formal adverb; the conjugated verb follows when it begins the sentence.",
        "source": "Wortschatz.md",
        "example": "Hiermit kündige ich meinen Mietvertrag.",
        "exampleFa": "I hereby terminate my rental agreement.",
        "cloze": "____ kündige ich meinen Mietvertrag.",
        "clozeFa": "I hereby terminate my rental agreement.",
        "answer": "hiermit",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "hiermit",
          "hiermit",
          "hiermit"
        ],
        "examples": [
          {
            "de": "Hiermit kündige ich meinen Mietvertrag.",
            "en": "I hereby terminate my rental agreement."
          },
          {
            "de": "Hiermit bestätige ich den Termin.",
            "en": "I hereby confirm the appointment."
          }
        ]
      },
      {
        "id": "umziehen",
        "group": "l17-g1",
        "term": "umziehen",
        "fa": "to move; to relocate",
        "type": "verb",
        "form": "Separable verb: `zieht um – zog um – ist umgezogen`.",
        "source": "Wortschatz.md",
        "example": "Ich ziehe nach Stuttgart um.",
        "exampleFa": "I am moving to Stuttgart.",
        "cloze": "Ich ziehe nach Stuttgart um. ____",
        "clozeFa": "I am moving to Stuttgart.",
        "answer": "umziehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "umziehen",
          "umziehen",
          "umziehen"
        ],
        "examples": [
          {
            "de": "Ich ziehe nach Stuttgart um.",
            "en": "I am moving to Stuttgart."
          },
          {
            "de": "Wir sind letztes Jahr umgezogen.",
            "en": "We moved last year."
          }
        ]
      },
      {
        "id": "aus-beruflichen-gruenden",
        "group": "l17-g1",
        "term": "aus beruflichen Gründen",
        "fa": "for professional reasons; because of work",
        "type": "phrase",
        "form": "`aus + Dativ`; plural: `aus Gründen`.",
        "source": "Wortschatz.md",
        "example": "Aus beruflichen Gründen ziehe ich um.",
        "exampleFa": "I am moving for professional reasons.",
        "cloze": "____ ziehe ich um.",
        "clozeFa": "I am moving for professional reasons.",
        "answer": "aus beruflichen Gründen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "aus beruflichen Gründen",
          "aus beruflichen Gründen",
          "aus beruflichen Gründen"
        ],
        "examples": [
          {
            "de": "Aus beruflichen Gründen ziehe ich um.",
            "en": "I am moving for professional reasons."
          },
          {
            "de": "Sie reist oft aus beruflichen Gründen.",
            "en": "She often travels for work."
          }
        ]
      },
      {
        "id": "die-anschrift",
        "group": "l17-g1",
        "term": "die Anschrift",
        "fa": "address",
        "type": "noun",
        "form": "Feminine noun; plural: `die Anschriften`.",
        "source": "Wortschatz.md",
        "example": "Meine neue Anschrift ist in Stuttgart.",
        "exampleFa": "My new address is in Stuttgart.",
        "cloze": "Meine neue ____ ist in Stuttgart.",
        "clozeFa": "My new address is in Stuttgart.",
        "answer": "Anschrift",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Anschrift",
          "Anschrift",
          "Anschrift"
        ],
        "examples": [
          {
            "de": "Meine neue Anschrift ist in Stuttgart.",
            "en": "My new address is in Stuttgart."
          },
          {
            "de": "Bitte geben Sie Ihre Anschrift an.",
            "en": "Please provide your address."
          }
        ]
      },
      {
        "id": "bestaetigen",
        "group": "l17-g1",
        "term": "bestätigen",
        "fa": "to confirm",
        "type": "verb",
        "form": "Regular verb: `bestätigt – bestätigte – hat bestätigt`.",
        "source": "Wortschatz.md",
        "example": "Bitte bestätigen Sie den Termin schriftlich.",
        "exampleFa": "Please confirm the appointment in writing.",
        "cloze": "Bitte ____ Sie den Termin schriftlich.",
        "clozeFa": "Please confirm the appointment in writing.",
        "answer": "bestätigen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bestätigen",
          "bestätigen",
          "bestätigen"
        ],
        "examples": [
          {
            "de": "Bitte bestätigen Sie den Termin schriftlich.",
            "en": "Please confirm the appointment in writing."
          },
          {
            "de": "Er hat den Erhalt der Kündigung bestätigt.",
            "en": "He confirmed receipt of the termination notice."
          }
        ]
      },
      {
        "id": "erhalten",
        "group": "l17-g1",
        "term": "erhalten",
        "fa": "to receive",
        "type": "verb",
        "form": "Strong verb: `erhält – erhielt – hat erhalten`.",
        "source": "Wortschatz.md",
        "example": "Ich habe Ihre Nachricht erhalten.",
        "exampleFa": "I received your message.",
        "cloze": "Ich habe Ihre Nachricht ____.",
        "clozeFa": "I received your message.",
        "answer": "erhalten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "erhalten",
          "erhalten",
          "erhalten"
        ],
        "examples": [
          {
            "de": "Ich habe Ihre Nachricht erhalten.",
            "en": "I received your message."
          },
          {
            "de": "Bitte bestätigen Sie, dass Sie die Kündigung erhalten haben.",
            "en": "Please confirm that you received the termination notice."
          }
        ]
      },
      {
        "id": "erzaehlen",
        "group": "l17-g1",
        "term": "erzählen",
        "fa": "to tell; to talk about",
        "type": "verb",
        "form": "`jemandem` (Dativ) `von jemandem/etwas` (Dativ) `erzählen`.",
        "source": "Wortschatz.md",
        "example": "Simon erzählt Andreas von seinem Freund.",
        "exampleFa": "Simon tells Andreas about his friend.",
        "cloze": "Simon erzählt Andreas von seinem Freund. ____",
        "clozeFa": "Simon tells Andreas about his friend.",
        "answer": "erzählen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "erzählen",
          "erzählen",
          "erzählen"
        ],
        "examples": [
          {
            "de": "Simon erzählt Andreas von seinem Freund.",
            "en": "Simon tells Andreas about his friend."
          },
          {
            "de": "Erzählst du mir von deiner Reise?",
            "en": "Will you tell me about your trip?"
          }
        ]
      },
      {
        "id": "ob",
        "group": "l17-g2",
        "term": "ob",
        "fa": "whether; if",
        "type": "verb",
        "form": "Introduces an indirect yes/no question; the conjugated verb goes to the end.",
        "source": "Wortschatz.md",
        "example": "Simon fragt, ob man Widerspruch einlegen kann.",
        "exampleFa": "Simon asks whether one can file an objection.",
        "cloze": "Simon fragt, ____ man Widerspruch einlegen kann.",
        "clozeFa": "Simon asks whether one can file an objection.",
        "answer": "ob",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ob",
          "ob",
          "ob"
        ],
        "examples": [
          {
            "de": "Simon fragt, ob man Widerspruch einlegen kann.",
            "en": "Simon asks whether one can file an objection."
          },
          {
            "de": "Ich weiß nicht, ob sie heute kommt.",
            "en": "I do not know whether she is coming today."
          }
        ]
      },
      {
        "id": "sollen",
        "group": "l17-g2",
        "term": "sollen",
        "fa": "should; to be supposed to",
        "type": "verb",
        "form": "Modal verb; `sollte` often expresses advice or a recommendation.",
        "source": "Wortschatz.md",
        "example": "Man sollte einen Rechtsanwalt fragen.",
        "exampleFa": "One should ask a lawyer.",
        "cloze": "Man sollte einen Rechtsanwalt fragen. ____",
        "clozeFa": "One should ask a lawyer.",
        "answer": "sollen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sollen",
          "sollen",
          "sollen"
        ],
        "examples": [
          {
            "de": "Man sollte einen Rechtsanwalt fragen.",
            "en": "One should ask a lawyer."
          },
          {
            "de": "Du sollst die Frist beachten.",
            "en": "You are supposed to observe the deadline."
          }
        ]
      },
      {
        "id": "prinzipiell",
        "group": "l17-g2",
        "term": "prinzipiell",
        "fa": "in principle; generally",
        "type": "verb",
        "form": "Adverb; its form does not change.",
        "source": "Wortschatz.md",
        "example": "Prinzipiell kann man Widerspruch einlegen.",
        "exampleFa": "In principle, one can file an objection.",
        "cloze": "____ kann man Widerspruch einlegen.",
        "clozeFa": "In principle, one can file an objection.",
        "answer": "prinzipiell",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "prinzipiell",
          "prinzipiell",
          "prinzipiell"
        ],
        "examples": [
          {
            "de": "Prinzipiell kann man Widerspruch einlegen.",
            "en": "In principle, one can file an objection."
          },
          {
            "de": "Das ist prinzipiell möglich.",
            "en": "That is generally possible."
          }
        ]
      },
      {
        "id": "das-amt",
        "group": "l17-g2",
        "term": "das Amt",
        "fa": "public authority; government office",
        "type": "noun",
        "form": "Neuter noun; plural: `die Ämter`.",
        "source": "Wortschatz.md",
        "example": "Ich muss morgen zum Amt gehen.",
        "exampleFa": "I have to go to the government office tomorrow.",
        "cloze": "Ich muss morgen zum ____ gehen.",
        "clozeFa": "I have to go to the government office tomorrow.",
        "answer": "Amt",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Amt",
          "Amt",
          "Amt"
        ],
        "examples": [
          {
            "de": "Ich muss morgen zum Amt gehen.",
            "en": "I have to go to the government office tomorrow."
          },
          {
            "de": "Beim Amt kann man einen Antrag stellen.",
            "en": "You can submit an application at the authority."
          }
        ]
      },
      {
        "id": "einen-antrag-stellen",
        "group": "l17-g2",
        "term": "einen Antrag stellen",
        "fa": "to submit/file an application",
        "type": "phrase",
        "form": "Fixed expression; `der Antrag`, plural: `die Anträge`.",
        "source": "Wortschatz.md",
        "example": "Sie hat beim Amt einen Antrag gestellt.",
        "exampleFa": "She submitted an application to the authority.",
        "cloze": "Sie hat beim Amt einen Antrag gestellt. ____",
        "clozeFa": "She submitted an application to the authority.",
        "answer": "Antrag stellen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "einen Antrag stellen",
          "Antrag stellen",
          "Antrag stellen"
        ],
        "examples": [
          {
            "de": "Sie hat beim Amt einen Antrag gestellt.",
            "en": "She submitted an application to the authority."
          },
          {
            "de": "Wo kann ich den Antrag stellen?",
            "en": "Where can I file the application?"
          }
        ]
      },
      {
        "id": "ablehnen",
        "group": "l17-g2",
        "term": "ablehnen",
        "fa": "to reject; to refuse",
        "type": "verb",
        "form": "Separable verb: `lehnt ab – lehnte ab – hat abgelehnt`.",
        "source": "Wortschatz.md",
        "example": "Das Amt hat den Antrag abgelehnt.",
        "exampleFa": "The authority rejected the application.",
        "cloze": "Das Amt hat den Antrag abgelehnt. ____",
        "clozeFa": "The authority rejected the application.",
        "answer": "ablehnen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ablehnen",
          "ablehnen",
          "ablehnen"
        ],
        "examples": [
          {
            "de": "Das Amt hat den Antrag abgelehnt.",
            "en": "The authority rejected the application."
          },
          {
            "de": "Der Antrag wurde abgelehnt.",
            "en": "The application was rejected."
          }
        ]
      },
      {
        "id": "die-entscheidung",
        "group": "l17-g2",
        "term": "die Entscheidung",
        "fa": "decision",
        "type": "noun",
        "form": "Feminine noun; plural: `die Entscheidungen`; verb: `entscheiden`.",
        "source": "Wortschatz.md",
        "example": "Ich verstehe die Entscheidung nicht.",
        "exampleFa": "I do not understand the decision.",
        "cloze": "Ich verstehe die ____ nicht.",
        "clozeFa": "I do not understand the decision.",
        "answer": "Entscheidung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Entscheidung",
          "Entscheidung",
          "Entscheidung"
        ],
        "examples": [
          {
            "de": "Ich verstehe die Entscheidung nicht.",
            "en": "I do not understand the decision."
          },
          {
            "de": "Das Amt hat anders entschieden.",
            "en": "The authority made a different decision."
          }
        ]
      },
      {
        "id": "mit-etwas-einverstanden-sein",
        "group": "l17-g2",
        "term": "mit etwas einverstanden sein",
        "fa": "to agree with something",
        "type": "phrase",
        "form": "`mit + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Ich bin mit der Entscheidung nicht einverstanden.",
        "exampleFa": "I do not agree with the decision.",
        "cloze": "Ich bin mit der Entscheidung nicht ____.",
        "clozeFa": "I do not agree with the decision.",
        "answer": "einverstanden",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "mit etwas einverstanden sein",
          "mit etwas einverstanden sein",
          "einverstanden"
        ],
        "examples": [
          {
            "de": "Ich bin mit der Entscheidung nicht einverstanden.",
            "en": "I do not agree with the decision."
          },
          {
            "de": "Bist du mit dem Vorschlag einverstanden?",
            "en": "Do you agree with the suggestion?"
          }
        ]
      },
      {
        "id": "naemlich",
        "group": "l17-g2",
        "term": "nämlich",
        "fa": "namely; in fact",
        "type": "verb",
        "form": "Explanatory adverb; it does not change the normal word order.",
        "source": "Wortschatz.md",
        "example": "Sie können etwas tun, nämlich Widerspruch einlegen.",
        "exampleFa": "You can do something, namely file an objection.",
        "cloze": "Sie können etwas tun, ____ Widerspruch einlegen.",
        "clozeFa": "You can do something, namely file an objection.",
        "answer": "nämlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "nämlich",
          "nämlich",
          "nämlich"
        ],
        "examples": [
          {
            "de": "Sie können etwas tun, nämlich Widerspruch einlegen.",
            "en": "You can do something, namely file an objection."
          },
          {
            "de": "Ich kann nicht kommen; ich bin nämlich krank.",
            "en": "I cannot come because I am ill."
          }
        ]
      },
      {
        "id": "immer-dann-wenn",
        "group": "l17-g2",
        "term": "immer dann, wenn",
        "fa": "whenever; every time that",
        "type": "phrase",
        "form": "`wenn` introduces a subordinate clause, so its conjugated verb goes to the end.",
        "source": "Wortschatz.md",
        "example": "Man kann Widerspruch einlegen, immer dann, wenn man nicht einverstanden ist.",
        "exampleFa": "One can file an objection whenever one disagrees.",
        "cloze": "Man kann Widerspruch einlegen, ____ man nicht einverstanden ist.",
        "clozeFa": "One can file an objection whenever one disagrees.",
        "answer": "immer dann, wenn",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "immer dann, wenn",
          "immer dann, wenn",
          "immer dann, wenn"
        ],
        "examples": [
          {
            "de": "Man kann Widerspruch einlegen, immer dann, wenn man nicht einverstanden ist.",
            "en": "One can file an objection whenever one disagrees."
          },
          {
            "de": "Ruf mich immer dann an, wenn du Hilfe brauchst.",
            "en": "Call me whenever you need help."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l17-g1",
        "icon": "1",
        "title": "Words 321-330",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l17-g2",
        "icon": "2",
        "title": "Words 331-340",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 18,
    "code": "Set 18",
    "title": "Wortschatz Set 18",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "die-krankenkasse",
        "group": "l18-g1",
        "term": "die Krankenkasse",
        "fa": "health insurance provider",
        "type": "noun",
        "form": "Feminine noun; plural: `die Krankenkassen`.",
        "source": "Wortschatz.md",
        "example": "Die Krankenkasse hat den Antrag abgelehnt.",
        "exampleFa": "The health insurance provider rejected the application.",
        "cloze": "Die ____ hat den Antrag abgelehnt.",
        "clozeFa": "The health insurance provider rejected the application.",
        "answer": "Krankenkasse",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Krankenkasse",
          "Krankenkasse",
          "Krankenkasse"
        ],
        "examples": [
          {
            "de": "Die Krankenkasse hat den Antrag abgelehnt.",
            "en": "The health insurance provider rejected the application."
          },
          {
            "de": "Ich schicke die Rechnung an meine Krankenkasse.",
            "en": "I am sending the bill to my health insurance provider."
          }
        ]
      },
      {
        "id": "die-rechnung",
        "group": "l18-g1",
        "term": "die Rechnung",
        "fa": "bill; invoice",
        "type": "noun",
        "form": "Feminine noun; plural: `die Rechnungen`.",
        "source": "Wortschatz.md",
        "example": "Ich bin mit der Rechnung nicht einverstanden.",
        "exampleFa": "I disagree with the bill.",
        "cloze": "Ich bin mit der ____ nicht einverstanden.",
        "clozeFa": "I disagree with the bill.",
        "answer": "Rechnung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Rechnung",
          "Rechnung",
          "Rechnung"
        ],
        "examples": [
          {
            "de": "Ich bin mit der Rechnung nicht einverstanden.",
            "en": "I disagree with the bill."
          },
          {
            "de": "Können Sie mir bitte die Rechnung schicken?",
            "en": "Could you please send me the invoice?"
          }
        ]
      },
      {
        "id": "der-arbeitgeber-die-arbeitgeberin",
        "group": "l18-g1",
        "term": "der Arbeitgeber / die Arbeitgeberin",
        "fa": "employer",
        "type": "noun",
        "form": "Plural: `die Arbeitgeber / die Arbeitgeberinnen`.",
        "source": "Wortschatz.md",
        "example": "Er hat eine Kündigung vom Arbeitgeber bekommen.",
        "exampleFa": "He received a termination notice from his employer.",
        "cloze": "Er hat eine Kündigung vom ____ bekommen.",
        "clozeFa": "He received a termination notice from his employer.",
        "answer": "Arbeitgeber",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Arbeitgeber / die Arbeitgeberin",
          "Arbeitgeber / die Arbeitgeberin",
          "Arbeitgeber"
        ],
        "examples": [
          {
            "de": "Er hat eine Kündigung vom Arbeitgeber bekommen.",
            "en": "He received a termination notice from his employer."
          },
          {
            "de": "Die Arbeitgeberin muss die Frist beachten.",
            "en": "The employer must observe the notice period."
          }
        ]
      },
      {
        "id": "pruefen-die-pruefung",
        "group": "l18-g1",
        "term": "prüfen / die Prüfung",
        "fa": "to check, review / check, review",
        "type": "phrase",
        "form": "`prüfen` is regular; `die Prüfung`, plural: `die Prüfungen`.",
        "source": "Wortschatz.md",
        "example": "Die Entscheidung muss noch einmal geprüft werden.",
        "exampleFa": "The decision must be reviewed again.",
        "cloze": "Die Entscheidung muss noch einmal geprüft werden. ____",
        "clozeFa": "The decision must be reviewed again.",
        "answer": "prüfen / die Prüfung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "prüfen / die Prüfung",
          "prüfen / die Prüfung",
          "prüfen / die Prüfung"
        ],
        "examples": [
          {
            "de": "Die Entscheidung muss noch einmal geprüft werden.",
            "en": "The decision must be reviewed again."
          },
          {
            "de": "Nach der Prüfung bekommen Sie eine Antwort.",
            "en": "You will receive an answer after the review."
          }
        ]
      },
      {
        "id": "eine-entscheidung-treffen",
        "group": "l18-g1",
        "term": "eine Entscheidung treffen",
        "fa": "to make a decision",
        "type": "phrase",
        "form": "Fixed expression: `trifft – traf – hat getroffen`.",
        "source": "Wortschatz.md",
        "example": "Das Amt trifft eine neue Entscheidung.",
        "exampleFa": "The authority makes a new decision.",
        "cloze": "Das Amt trifft eine neue Entscheidung. ____",
        "clozeFa": "The authority makes a new decision.",
        "answer": "Entscheidung treffen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "eine Entscheidung treffen",
          "Entscheidung treffen",
          "Entscheidung treffen"
        ],
        "examples": [
          {
            "de": "Das Amt trifft eine neue Entscheidung.",
            "en": "The authority makes a new decision."
          },
          {
            "de": "Eine andere Entscheidung wurde getroffen.",
            "en": "A different decision was made."
          }
        ]
      },
      {
        "id": "einen-fehler-machen",
        "group": "l18-g1",
        "term": "einen Fehler machen",
        "fa": "to make a mistake",
        "type": "phrase",
        "form": "`der Fehler`, plural: `die Fehler`.",
        "source": "Wortschatz.md",
        "example": "Auch Ämter können Fehler machen.",
        "exampleFa": "Government authorities can also make mistakes.",
        "cloze": "Auch Ämter können ____.",
        "clozeFa": "Government authorities can also make mistakes.",
        "answer": "Fehler machen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "einen Fehler machen",
          "Fehler machen",
          "Fehler machen"
        ],
        "examples": [
          {
            "de": "Auch Ämter können Fehler machen.",
            "en": "Government authorities can also make mistakes."
          },
          {
            "de": "Ich habe einen Fehler gemacht.",
            "en": "I made a mistake."
          }
        ]
      },
      {
        "id": "aendern",
        "group": "l18-g1",
        "term": "ändern",
        "fa": "to change; to alter",
        "type": "verb",
        "form": "Regular verb; reflexive `sich ändern` means “to change” by itself.",
        "source": "Wortschatz.md",
        "example": "Das Amt hat die Entscheidung geändert.",
        "exampleFa": "The authority changed the decision.",
        "cloze": "Das Amt hat die Entscheidung geändert. ____",
        "clozeFa": "The authority changed the decision.",
        "answer": "ändern",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "ändern",
          "ändern",
          "ändern"
        ],
        "examples": [
          {
            "de": "Das Amt hat die Entscheidung geändert.",
            "en": "The authority changed the decision."
          },
          {
            "de": "Die Entscheidung wird nicht geändert.",
            "en": "The decision will not be changed."
          }
        ]
      },
      {
        "id": "es-kann-sein-dass",
        "group": "l18-g1",
        "term": "es kann sein, dass",
        "fa": "it may be that; it is possible that",
        "type": "phrase",
        "form": "`dass` introduces a subordinate clause, so the conjugated verb goes to the end.",
        "source": "Wortschatz.md",
        "example": "Es kann sein, dass eine neue Entscheidung getroffen wird.",
        "exampleFa": "A new decision may be made.",
        "cloze": "____ eine neue Entscheidung getroffen wird.",
        "clozeFa": "A new decision may be made.",
        "answer": "es kann sein, dass",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "es kann sein, dass",
          "es kann sein, dass",
          "es kann sein, dass"
        ],
        "examples": [
          {
            "de": "Es kann sein, dass eine neue Entscheidung getroffen wird.",
            "en": "A new decision may be made."
          },
          {
            "de": "Es kann sein, dass die Rechnung richtig ist.",
            "en": "The bill may be correct."
          }
        ]
      },
      {
        "id": "schriftlich",
        "group": "l18-g1",
        "term": "schriftlich",
        "fa": "written; in writing",
        "type": "verb",
        "form": "Adjective or adverb; adjective ending depends on gender, case, and article.",
        "source": "Wortschatz.md",
        "example": "Ein schriftlicher Widerspruch ist notwendig.",
        "exampleFa": "A written objection is necessary.",
        "cloze": "Ein ____er Widerspruch ist notwendig.",
        "clozeFa": "A written objection is necessary.",
        "answer": "schriftlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "schriftlich",
          "schriftlich",
          "schriftlich"
        ],
        "examples": [
          {
            "de": "Ein schriftlicher Widerspruch ist notwendig.",
            "en": "A written objection is necessary."
          },
          {
            "de": "Bitte bestätigen Sie den Termin schriftlich.",
            "en": "Please confirm the appointment in writing."
          }
        ]
      },
      {
        "id": "enthalten",
        "group": "l18-g1",
        "term": "enthalten",
        "fa": "to contain; to include",
        "type": "verb",
        "form": "Strong verb: `enthält – enthielt – hat enthalten`.",
        "source": "Wortschatz.md",
        "example": "Der Brief enthält wichtige Informationen.",
        "exampleFa": "The letter contains important information.",
        "cloze": "Der Brief enthält wichtige Informationen. ____",
        "clozeFa": "The letter contains important information.",
        "answer": "enthalten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "enthalten",
          "enthalten",
          "enthalten"
        ],
        "examples": [
          {
            "de": "Der Brief enthält wichtige Informationen.",
            "en": "The letter contains important information."
          },
          {
            "de": "Welche Angaben sollte der Widerspruch enthalten?",
            "en": "What details should the objection include?"
          }
        ]
      },
      {
        "id": "mitteilen",
        "group": "l18-g2",
        "term": "mitteilen",
        "fa": "to inform; to notify",
        "type": "verb",
        "form": "Separable verb: `teilt mit – teilte mit – hat mitgeteilt`; `jemandem` (Dativ) `etwas` (Akkusativ) mitteilen.",
        "source": "Wortschatz.md",
        "example": "Sie haben mir die Entscheidung schriftlich mitgeteilt.",
        "exampleFa": "You informed me of the decision in writing.",
        "cloze": "Sie haben mir die Entscheidung schriftlich mitgeteilt. ____",
        "clozeFa": "You informed me of the decision in writing.",
        "answer": "mitteilen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "mitteilen",
          "mitteilen",
          "mitteilen"
        ],
        "examples": [
          {
            "de": "Sie haben mir die Entscheidung schriftlich mitgeteilt.",
            "en": "You informed me of the decision in writing."
          },
          {
            "de": "Bitte teilen Sie uns den Termin mit.",
            "en": "Please inform us of the appointment."
          }
        ]
      },
      {
        "id": "die-kosten-uebernehmen",
        "group": "l18-g2",
        "term": "die Kosten übernehmen",
        "fa": "to cover the costs",
        "type": "noun",
        "form": "`übernehmen` is strong: `übernimmt – übernahm – hat übernommen`.",
        "source": "Wortschatz.md",
        "example": "Die Krankenkasse übernimmt die Kosten.",
        "exampleFa": "The health insurance provider covers the costs.",
        "cloze": "Die Krankenkasse übernimmt die ____.",
        "clozeFa": "The health insurance provider covers the costs.",
        "answer": "Kosten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Kosten übernehmen",
          "Kosten übernehmen",
          "Kosten"
        ],
        "examples": [
          {
            "de": "Die Krankenkasse übernimmt die Kosten.",
            "en": "The health insurance provider covers the costs."
          },
          {
            "de": "Wer hat die Kosten übernommen?",
            "en": "Who covered the costs?"
          }
        ]
      },
      {
        "id": "die-zahnbehandlung",
        "group": "l18-g2",
        "term": "die Zahnbehandlung",
        "fa": "dental treatment",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Zahnbehandlungen`.",
        "source": "Wortschatz.md",
        "example": "Die Kosten für die Zahnbehandlung sind hoch.",
        "exampleFa": "The costs of the dental treatment are high.",
        "cloze": "Die Kosten für die ____ sind hoch.",
        "clozeFa": "The costs of the dental treatment are high.",
        "answer": "Zahnbehandlung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Zahnbehandlung",
          "Zahnbehandlung",
          "Zahnbehandlung"
        ],
        "examples": [
          {
            "de": "Die Kosten für die Zahnbehandlung sind hoch.",
            "en": "The costs of the dental treatment are high."
          },
          {
            "de": "Meine Zahnbehandlung ist notwendig.",
            "en": "My dental treatment is necessary."
          }
        ]
      },
      {
        "id": "das-aerztliche-gutachten",
        "group": "l18-g2",
        "term": "das ärztliche Gutachten",
        "fa": "medical report; medical assessment",
        "type": "noun",
        "form": "Neuter noun; plural: `die ärztlichen Gutachten`.",
        "source": "Wortschatz.md",
        "example": "Ein ärztliches Gutachten bestätigt die Notwendigkeit.",
        "exampleFa": "A medical report confirms the necessity.",
        "cloze": "Ein ärztliches ____ bestätigt die Notwendigkeit.",
        "clozeFa": "A medical report confirms the necessity.",
        "answer": "Gutachten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das ärztliche Gutachten",
          "ärztliche Gutachten",
          "Gutachten"
        ],
        "examples": [
          {
            "de": "Ein ärztliches Gutachten bestätigt die Notwendigkeit.",
            "en": "A medical report confirms the necessity."
          },
          {
            "de": "Die Krankenkasse verlangt ein ärztliches Gutachten.",
            "en": "The health insurance provider requires a medical report."
          }
        ]
      },
      {
        "id": "aus-gesundheitlichen-gruenden",
        "group": "l18-g2",
        "term": "aus gesundheitlichen Gründen",
        "fa": "for health reasons",
        "type": "phrase",
        "form": "`aus + Dativ`; plural: `aus Gründen`.",
        "source": "Wortschatz.md",
        "example": "Die Behandlung ist aus gesundheitlichen Gründen notwendig.",
        "exampleFa": "The treatment is necessary for health reasons.",
        "cloze": "Die Behandlung ist ____ notwendig.",
        "clozeFa": "The treatment is necessary for health reasons.",
        "answer": "aus gesundheitlichen Gründen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "aus gesundheitlichen Gründen",
          "aus gesundheitlichen Gründen",
          "aus gesundheitlichen Gründen"
        ],
        "examples": [
          {
            "de": "Die Behandlung ist aus gesundheitlichen Gründen notwendig.",
            "en": "The treatment is necessary for health reasons."
          },
          {
            "de": "Er kann aus gesundheitlichen Gründen nicht arbeiten.",
            "en": "He cannot work for health reasons."
          }
        ]
      },
      {
        "id": "notwendig",
        "group": "l18-g2",
        "term": "notwendig",
        "fa": "necessary",
        "type": "adjective",
        "form": "Adjective; common patterns: `notwendig sein` and `es ist notwendig, ... zu ...`.",
        "source": "Wortschatz.md",
        "example": "Die Behandlung ist notwendig.",
        "exampleFa": "The treatment is necessary.",
        "cloze": "Die Behandlung ist ____.",
        "clozeFa": "The treatment is necessary.",
        "answer": "notwendig",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "notwendig",
          "notwendig",
          "notwendig"
        ],
        "examples": [
          {
            "de": "Die Behandlung ist notwendig.",
            "en": "The treatment is necessary."
          },
          {
            "de": "Es ist notwendig, den Antrag zu prüfen.",
            "en": "It is necessary to review the application."
          }
        ]
      },
      {
        "id": "widersprechen",
        "group": "l18-g2",
        "term": "widersprechen",
        "fa": "to object; to contradict",
        "type": "verb",
        "form": "Strong verb: `widerspricht – widersprach – hat widersprochen`; takes the dative.",
        "source": "Wortschatz.md",
        "example": "Dieser Kündigung widerspreche ich hiermit.",
        "exampleFa": "I hereby object to this termination.",
        "cloze": "Dieser Kündigung widerspreche ich hiermit. ____",
        "clozeFa": "I hereby object to this termination.",
        "answer": "widersprechen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "widersprechen",
          "widersprechen",
          "widersprechen"
        ],
        "examples": [
          {
            "de": "Dieser Kündigung widerspreche ich hiermit.",
            "en": "I hereby object to this termination."
          },
          {
            "de": "Ich muss dir widersprechen.",
            "en": "I have to disagree with you."
          }
        ]
      },
      {
        "id": "verpflichtet-sein",
        "group": "l18-g2",
        "term": "verpflichtet sein",
        "fa": "to be required; to be obligated",
        "type": "phrase",
        "form": "`verpflichtet sein, etwas zu tun`.",
        "source": "Wortschatz.md",
        "example": "Die Vermieterin ist verpflichtet, die Frist einzuhalten.",
        "exampleFa": "The landlady is required to observe the notice period.",
        "cloze": "Die Vermieterin ist ____, die Frist einzuhalten.",
        "clozeFa": "The landlady is required to observe the notice period.",
        "answer": "verpflichtet",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "verpflichtet sein",
          "verpflichtet sein",
          "verpflichtet"
        ],
        "examples": [
          {
            "de": "Die Vermieterin ist verpflichtet, die Frist einzuhalten.",
            "en": "The landlady is required to observe the notice period."
          },
          {
            "de": "Mieter sind verpflichtet, die Regeln zu beachten.",
            "en": "Tenants are required to follow the rules."
          }
        ]
      },
      {
        "id": "sich-an-etwas-halten",
        "group": "l18-g2",
        "term": "sich an etwas halten",
        "fa": "to follow; to comply with",
        "type": "phrase",
        "form": "Reflexive expression with `an + Akkusativ`.",
        "source": "Wortschatz.md",
        "example": "Sie müssen sich an die gesetzlichen Fristen halten.",
        "exampleFa": "You must comply with the statutory deadlines.",
        "cloze": "Sie müssen sich an die gesetzlichen Fristen ____.",
        "clozeFa": "You must comply with the statutory deadlines.",
        "answer": "halten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich an etwas halten",
          "sich an etwas halten",
          "halten"
        ],
        "examples": [
          {
            "de": "Sie müssen sich an die gesetzlichen Fristen halten.",
            "en": "You must comply with the statutory deadlines."
          },
          {
            "de": "Bitte halten Sie sich an die Regeln.",
            "en": "Please follow the rules."
          }
        ]
      },
      {
        "id": "gesetzlich",
        "group": "l18-g2",
        "term": "gesetzlich",
        "fa": "legal; statutory; by law",
        "type": "verb",
        "form": "Adjective or adverb.",
        "source": "Wortschatz.md",
        "example": "Die gesetzliche Kündigungsfrist beträgt sechs Monate.",
        "exampleFa": "The statutory notice period is six months.",
        "cloze": "Die ____e Kündigungsfrist beträgt sechs Monate.",
        "clozeFa": "The statutory notice period is six months.",
        "answer": "gesetzlich",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "gesetzlich",
          "gesetzlich",
          "gesetzlich"
        ],
        "examples": [
          {
            "de": "Die gesetzliche Kündigungsfrist beträgt sechs Monate.",
            "en": "The statutory notice period is six months."
          },
          {
            "de": "Mieter sind gesetzlich geschützt.",
            "en": "Tenants are protected by law."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l18-g1",
        "icon": "1",
        "title": "Words 341-350",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l18-g2",
        "icon": "2",
        "title": "Words 351-360",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 19,
    "code": "Set 19",
    "title": "Wortschatz Set 19",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "fordern",
        "group": "l19-g1",
        "term": "fordern",
        "fa": "to demand; to request firmly",
        "type": "verb",
        "form": "Regular verb; common pattern: `fordern, dass ...`.",
        "source": "Wortschatz.md",
        "example": "Ich fordere, dass der Vertrag bestehen bleibt.",
        "exampleFa": "I demand that the contract remain in effect.",
        "cloze": "Ich fordere, dass der Vertrag bestehen bleibt. ____",
        "clozeFa": "I demand that the contract remain in effect.",
        "answer": "fordern",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "fordern",
          "fordern",
          "fordern"
        ],
        "examples": [
          {
            "de": "Ich fordere, dass der Vertrag bestehen bleibt.",
            "en": "I demand that the contract remain in effect."
          },
          {
            "de": "Die Mieter fordern eine Erklärung.",
            "en": "The tenants demand an explanation."
          }
        ]
      },
      {
        "id": "bestehen-bleiben",
        "group": "l19-g1",
        "term": "bestehen bleiben",
        "fa": "to remain in effect; to continue to exist",
        "type": "phrase",
        "form": "`bleiben` is strong: `bleibt – blieb – ist geblieben`.",
        "source": "Wortschatz.md",
        "example": "Der Mietvertrag bleibt noch sechs Monate bestehen.",
        "exampleFa": "The rental agreement remains in effect for another six months.",
        "cloze": "Der Mietvertrag bleibt noch sechs Monate ____.",
        "clozeFa": "The rental agreement remains in effect for another six months.",
        "answer": "bestehen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bestehen bleiben",
          "bestehen bleiben",
          "bestehen"
        ],
        "examples": [
          {
            "de": "Der Mietvertrag bleibt noch sechs Monate bestehen.",
            "en": "The rental agreement remains in effect for another six months."
          },
          {
            "de": "Die Entscheidung bleibt bestehen.",
            "en": "The decision remains in effect."
          }
        ]
      },
      {
        "id": "seit",
        "group": "l19-g1",
        "term": "seit",
        "fa": "since; for",
        "type": "word",
        "form": "Takes the dative; German uses the present tense when the situation still continues.",
        "source": "Wortschatz.md",
        "example": "Ich lebe seit sieben Jahren in dieser Wohnung.",
        "exampleFa": "I have lived in this apartment for seven years.",
        "cloze": "Ich lebe ____ sieben Jahren in dieser Wohnung.",
        "clozeFa": "I have lived in this apartment for seven years.",
        "answer": "seit",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "seit",
          "seit",
          "seit"
        ],
        "examples": [
          {
            "de": "Ich lebe seit sieben Jahren in dieser Wohnung.",
            "en": "I have lived in this apartment for seven years."
          },
          {
            "de": "Seit Montag bin ich krank.",
            "en": "I have been ill since Monday."
          }
        ]
      },
      {
        "id": "das-gesetz",
        "group": "l19-g1",
        "term": "das Gesetz",
        "fa": "law; statute",
        "type": "noun",
        "form": "Neuter noun; plural: `die Gesetze`; adjective: `gesetzlich`.",
        "source": "Wortschatz.md",
        "example": "Das Gesetz schützt die Mieter.",
        "exampleFa": "The law protects tenants.",
        "cloze": "Das ____ schützt die Mieter.",
        "clozeFa": "The law protects tenants.",
        "answer": "Gesetz",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Gesetz",
          "Gesetz",
          "Gesetz"
        ],
        "examples": [
          {
            "de": "Das Gesetz schützt die Mieter.",
            "en": "The law protects tenants."
          },
          {
            "de": "Diese Regel ist gesetzlich vorgeschrieben.",
            "en": "This rule is required by law."
          }
        ]
      },
      {
        "id": "das-gericht",
        "group": "l19-g1",
        "term": "das Gericht",
        "fa": "court; dish",
        "type": "noun",
        "form": "Neuter noun; plural: `die Gerichte`. Meaning depends on context.",
        "source": "Wortschatz.md",
        "example": "Das Gericht prüft den Fall.",
        "exampleFa": "The court examines the case.",
        "cloze": "Das ____ prüft den Fall.",
        "clozeFa": "The court examines the case.",
        "answer": "Gericht",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Gericht",
          "Gericht",
          "Gericht"
        ],
        "examples": [
          {
            "de": "Das Gericht prüft den Fall.",
            "en": "The court examines the case."
          },
          {
            "de": "Dieses Gericht schmeckt sehr gut.",
            "en": "This dish tastes very good."
          }
        ]
      },
      {
        "id": "gegen-jemanden-klagen",
        "group": "l19-g1",
        "term": "gegen jemanden klagen",
        "fa": "to sue someone; to take legal action against someone",
        "type": "phrase",
        "form": "`gegen + Akkusativ`; `klagt – klagte – hat geklagt`.",
        "source": "Wortschatz.md",
        "example": "Der Mieter klagt gegen den Vermieter.",
        "exampleFa": "The tenant is suing the landlord.",
        "cloze": "Der Mieter klagt ____ den Vermieter.",
        "clozeFa": "The tenant is suing the landlord.",
        "answer": "gegen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "gegen jemanden klagen",
          "gegen jemanden klagen",
          "gegen"
        ],
        "examples": [
          {
            "de": "Der Mieter klagt gegen den Vermieter.",
            "en": "The tenant is suing the landlord."
          },
          {
            "de": "Sie will vor Gericht gegen die Firma klagen.",
            "en": "She wants to take legal action against the company in court."
          }
        ]
      },
      {
        "id": "jemanden-verklagen",
        "group": "l19-g1",
        "term": "jemanden verklagen",
        "fa": "to sue someone",
        "type": "phrase",
        "form": "Takes a direct accusative object: `verklagt – verklagte – hat verklagt`.",
        "source": "Wortschatz.md",
        "example": "Der Mieter verklagt den Vermieter.",
        "exampleFa": "The tenant is suing the landlord.",
        "cloze": "Der Mieter verklagt den Vermieter. ____",
        "clozeFa": "The tenant is suing the landlord.",
        "answer": "jemanden verklagen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemanden verklagen",
          "jemanden verklagen",
          "jemanden verklagen"
        ],
        "examples": [
          {
            "de": "Der Mieter verklagt den Vermieter.",
            "en": "The tenant is suing the landlord."
          },
          {
            "de": "Er wurde vor Gericht verklagt.",
            "en": "He was sued in court."
          }
        ]
      },
      {
        "id": "der-richter-die-richterin",
        "group": "l19-g1",
        "term": "der Richter / die Richterin",
        "fa": "judge",
        "type": "noun",
        "form": "Plural: `die Richter / die Richterinnen`.",
        "source": "Wortschatz.md",
        "example": "Der Richter prüft den Fall.",
        "exampleFa": "The judge examines the case.",
        "cloze": "Der ____ prüft den Fall.",
        "clozeFa": "The judge examines the case.",
        "answer": "Richter",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Richter / die Richterin",
          "Richter / die Richterin",
          "Richter"
        ],
        "examples": [
          {
            "de": "Der Richter prüft den Fall.",
            "en": "The judge examines the case."
          },
          {
            "de": "Die Richterin verkündet das Urteil.",
            "en": "The judge announces the verdict."
          }
        ]
      },
      {
        "id": "das-urteil",
        "group": "l19-g1",
        "term": "das Urteil",
        "fa": "judgment; verdict",
        "type": "noun",
        "form": "Neuter noun; plural: `die Urteile`.",
        "source": "Wortschatz.md",
        "example": "Das Gericht hat ein Urteil gefällt.",
        "exampleFa": "The court delivered a judgment.",
        "cloze": "Das Gericht hat ein ____ gefällt.",
        "clozeFa": "The court delivered a judgment.",
        "answer": "Urteil",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Urteil",
          "Urteil",
          "Urteil"
        ],
        "examples": [
          {
            "de": "Das Gericht hat ein Urteil gefällt.",
            "en": "The court delivered a judgment."
          },
          {
            "de": "Der Anwalt ist mit dem Urteil nicht einverstanden.",
            "en": "The lawyer disagrees with the judgment."
          }
        ]
      },
      {
        "id": "angeben",
        "group": "l19-g1",
        "term": "angeben",
        "fa": "to state; to specify; to provide",
        "type": "verb",
        "form": "Separable strong verb: `gibt an – gab an – hat angegeben`.",
        "source": "Wortschatz.md",
        "example": "Bitte geben Sie an, wann Sie die Kündigung erhalten haben.",
        "exampleFa": "Please state when you received the termination notice.",
        "cloze": "Bitte geben Sie an, wann Sie die Kündigung erhalten haben. ____",
        "clozeFa": "Please state when you received the termination notice.",
        "answer": "angeben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "angeben",
          "angeben",
          "angeben"
        ],
        "examples": [
          {
            "de": "Bitte geben Sie an, wann Sie die Kündigung erhalten haben.",
            "en": "Please state when you received the termination notice."
          },
          {
            "de": "Im Formular muss man seine Adresse angeben.",
            "en": "You must provide your address on the form."
          }
        ]
      },
      {
        "id": "bedeuten",
        "group": "l19-g2",
        "term": "bedeuten",
        "fa": "to mean",
        "type": "verb",
        "form": "Regular verb: `bedeutet – bedeutete – hat bedeutet`.",
        "source": "Wortschatz.md",
        "example": "Was bedeutet das Wort „Widerspruch“?",
        "exampleFa": "What does the word “Widerspruch” mean?",
        "cloze": "Was bedeutet das Wort „Widerspruch“? ____",
        "clozeFa": "What does the word “Widerspruch” mean?",
        "answer": "bedeuten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bedeuten",
          "bedeuten",
          "bedeuten"
        ],
        "examples": [
          {
            "de": "Was bedeutet das Wort „Widerspruch“?",
            "en": "What does the word “Widerspruch” mean?"
          },
          {
            "de": "Dieses Zeichen bedeutet, dass man hier nicht parken darf.",
            "en": "This sign means that parking is not allowed here."
          }
        ]
      },
      {
        "id": "bereits",
        "group": "l19-g2",
        "term": "bereits",
        "fa": "already",
        "type": "verb",
        "form": "Adverb; slightly more formal than `schon`.",
        "source": "Wortschatz.md",
        "example": "Wie bereits besprochen, kündige ich den Vertrag.",
        "exampleFa": "As already discussed, I am terminating the contract.",
        "cloze": "Wie ____ besprochen, kündige ich den Vertrag.",
        "clozeFa": "As already discussed, I am terminating the contract.",
        "answer": "bereits",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bereits",
          "bereits",
          "bereits"
        ],
        "examples": [
          {
            "de": "Wie bereits besprochen, kündige ich den Vertrag.",
            "en": "As already discussed, I am terminating the contract."
          },
          {
            "de": "Ich habe den Brief bereits erhalten.",
            "en": "I have already received the letter."
          }
        ]
      },
      {
        "id": "besprechen",
        "group": "l19-g2",
        "term": "besprechen",
        "fa": "to discuss",
        "type": "verb",
        "form": "Strong inseparable verb: `bespricht – besprach – hat besprochen`; takes the accusative.",
        "source": "Wortschatz.md",
        "example": "Wir haben den Termin telefonisch besprochen.",
        "exampleFa": "We discussed the appointment by telephone.",
        "cloze": "Wir haben den Termin telefonisch besprochen. ____",
        "clozeFa": "We discussed the appointment by telephone.",
        "answer": "besprechen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "besprechen",
          "besprechen",
          "besprechen"
        ],
        "examples": [
          {
            "de": "Wir haben den Termin telefonisch besprochen.",
            "en": "We discussed the appointment by telephone."
          },
          {
            "de": "Ich möchte das Problem mit Ihnen besprechen.",
            "en": "I would like to discuss the problem with you."
          }
        ]
      },
      {
        "id": "einen-termin-anbieten",
        "group": "l19-g2",
        "term": "einen Termin anbieten",
        "fa": "to offer an appointment",
        "type": "phrase",
        "form": "`jemandem` (Dativ) `einen Termin` (Akkusativ) anbieten.",
        "source": "Wortschatz.md",
        "example": "Ich kann Ihnen zwei Termine anbieten.",
        "exampleFa": "I can offer you two appointments.",
        "cloze": "Ich kann Ihnen zwei Termine ____.",
        "clozeFa": "I can offer you two appointments.",
        "answer": "anbieten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "einen Termin anbieten",
          "Termin anbieten",
          "anbieten"
        ],
        "examples": [
          {
            "de": "Ich kann Ihnen zwei Termine anbieten.",
            "en": "I can offer you two appointments."
          },
          {
            "de": "Die Firma hat mir einen Termin angeboten.",
            "en": "The company offered me an appointment."
          }
        ]
      },
      {
        "id": "passen",
        "group": "l19-g2",
        "term": "passen",
        "fa": "to suit; to fit",
        "type": "verb",
        "form": "The person is in the dative: `Der Termin passt mir`.",
        "source": "Wortschatz.md",
        "example": "Welcher Termin passt Ihnen am besten?",
        "exampleFa": "Which appointment suits you best?",
        "cloze": "Welcher Termin passt Ihnen am besten? ____",
        "clozeFa": "Which appointment suits you best?",
        "answer": "passen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "passen",
          "passen",
          "passen"
        ],
        "examples": [
          {
            "de": "Welcher Termin passt Ihnen am besten?",
            "en": "Which appointment suits you best?"
          },
          {
            "de": "Dienstag passt mir leider nicht.",
            "en": "Unfortunately, Tuesday does not suit me."
          }
        ]
      },
      {
        "id": "die-haustuer",
        "group": "l19-g2",
        "term": "die Haustür",
        "fa": "front door; building entrance door",
        "type": "noun",
        "form": "Feminine noun; plural: `die Haustüren`.",
        "source": "Wortschatz.md",
        "example": "Bitte schließen Sie die Haustür.",
        "exampleFa": "Please close the front door.",
        "cloze": "Bitte schließen Sie die ____.",
        "clozeFa": "Please close the front door.",
        "answer": "Haustür",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Haustür",
          "Haustür",
          "Haustür"
        ],
        "examples": [
          {
            "de": "Bitte schließen Sie die Haustür.",
            "en": "Please close the front door."
          },
          {
            "de": "Ich habe den Schlüssel für die Haustür zurückgegeben.",
            "en": "I returned the key to the front door."
          }
        ]
      },
      {
        "id": "der-briefkasten",
        "group": "l19-g2",
        "term": "der Briefkasten",
        "fa": "mailbox; letterbox",
        "type": "noun",
        "form": "Masculine noun; plural: `die Briefkästen`.",
        "source": "Wortschatz.md",
        "example": "Der Brief liegt im Briefkasten.",
        "exampleFa": "The letter is in the mailbox.",
        "cloze": "Der Brief liegt im ____.",
        "clozeFa": "The letter is in the mailbox.",
        "answer": "Briefkasten",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Briefkasten",
          "Briefkasten",
          "Briefkasten"
        ],
        "examples": [
          {
            "de": "Der Brief liegt im Briefkasten.",
            "en": "The letter is in the mailbox."
          },
          {
            "de": "Ich brauche den Schlüssel für den Briefkasten.",
            "en": "I need the key to the mailbox."
          }
        ]
      },
      {
        "id": "zurueckgeben",
        "group": "l19-g2",
        "term": "zurückgeben",
        "fa": "to return; to give back",
        "type": "verb",
        "form": "Separable strong verb: `gibt zurück – gab zurück – hat zurückgegeben`; `jemandem` (Dativ) `etwas` (Akkusativ).",
        "source": "Wortschatz.md",
        "example": "Bitte geben Sie mir alle Schlüssel zurück.",
        "exampleFa": "Please return all the keys to me.",
        "cloze": "Bitte geben Sie mir alle Schlüssel zurück. ____",
        "clozeFa": "Please return all the keys to me.",
        "answer": "zurückgeben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "zurückgeben",
          "zurückgeben",
          "zurückgeben"
        ],
        "examples": [
          {
            "de": "Bitte geben Sie mir alle Schlüssel zurück.",
            "en": "Please return all the keys to me."
          },
          {
            "de": "Ich habe der Vermieterin den Schlüssel zurückgegeben.",
            "en": "I returned the key to the landlady."
          }
        ]
      },
      {
        "id": "jemandem-einen-tipp-geben-2",
        "group": "l19-g2",
        "term": "jemandem einen Tipp geben",
        "fa": "to give someone a tip/advice",
        "type": "phrase",
        "form": "The recipient is dative; `einen Tipp` is accusative.",
        "source": "Wortschatz.md",
        "example": "Er hat Simon einen guten Tipp gegeben.",
        "exampleFa": "He gave Simon a good tip.",
        "cloze": "Er hat Simon ____ guten Tipp gegeben.",
        "clozeFa": "He gave Simon a good tip.",
        "answer": "einen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "jemandem einen Tipp geben",
          "jemandem einen Tipp geben",
          "einen"
        ],
        "examples": [
          {
            "de": "Er hat Simon einen guten Tipp gegeben.",
            "en": "He gave Simon a good tip."
          },
          {
            "de": "Können Sie mir ein paar Tipps geben?",
            "en": "Can you give me some advice?"
          }
        ]
      },
      {
        "id": "an-die-tuer-klopfen",
        "group": "l19-g2",
        "term": "an die Tür klopfen",
        "fa": "to knock on the door",
        "type": "phrase",
        "form": "`an + Akkusativ`; `klopft – klopfte – hat geklopft`.",
        "source": "Wortschatz.md",
        "example": "Nasrin hat an die Tür der Nachbarin geklopft.",
        "exampleFa": "Nasrin knocked on her neighbor's door.",
        "cloze": "Nasrin hat an die Tür der Nachbarin geklopft. ____",
        "clozeFa": "Nasrin knocked on her neighbor's door.",
        "answer": "an die Tür klopfen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "an die Tür klopfen",
          "an die Tür klopfen",
          "an die Tür klopfen"
        ],
        "examples": [
          {
            "de": "Nasrin hat an die Tür der Nachbarin geklopft.",
            "en": "Nasrin knocked on her neighbor's door."
          },
          {
            "de": "Jemand klopft an die Tür.",
            "en": "Someone is knocking on the door."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l19-g1",
        "icon": "1",
        "title": "Words 361-370",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l19-g2",
        "icon": "2",
        "title": "Words 371-380",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 20,
    "code": "Set 20",
    "title": "Wortschatz Set 20",
    "subtitle": "17 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Source: Wortschatz.md. Entries are grouped in the same order as the Markdown file.",
    "vocab": [
      {
        "id": "sich-verkleiden",
        "group": "l20-g1",
        "term": "sich verkleiden",
        "fa": "to dress up; to wear a costume",
        "type": "verb",
        "form": "Reflexive verb: `verkleidet sich – verkleidete sich – hat sich verkleidet`.",
        "source": "Wortschatz.md",
        "example": "Auf der Karnevalsparty verkleiden wir uns.",
        "exampleFa": "We dress up at the carnival party.",
        "cloze": "Auf der Karnevalsparty ____ wir uns.",
        "clozeFa": "We dress up at the carnival party.",
        "answer": "verkleiden",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "sich verkleiden",
          "sich verkleiden",
          "verkleiden"
        ],
        "examples": [
          {
            "de": "Auf der Karnevalsparty verkleiden wir uns.",
            "en": "We dress up at the carnival party."
          },
          {
            "de": "Sie hat sich als Polizistin verkleidet.",
            "en": "She dressed up as a police officer."
          }
        ]
      },
      {
        "id": "das-kostuem",
        "group": "l20-g1",
        "term": "das Kostüm",
        "fa": "costume",
        "type": "noun",
        "form": "Neuter noun; plural: `die Kostüme`; common expression: `ein Kostüm anziehen`.",
        "source": "Wortschatz.md",
        "example": "Er zieht ein Kostüm an.",
        "exampleFa": "He puts on a costume.",
        "cloze": "Er zieht ein ____ an.",
        "clozeFa": "He puts on a costume.",
        "answer": "Kostüm",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Kostüm",
          "Kostüm",
          "Kostüm"
        ],
        "examples": [
          {
            "de": "Er zieht ein Kostüm an.",
            "en": "He puts on a costume."
          },
          {
            "de": "Dein Kostüm sieht toll aus.",
            "en": "Your costume looks great."
          }
        ]
      },
      {
        "id": "die-verkleidung",
        "group": "l20-g1",
        "term": "die Verkleidung",
        "fa": "costume; disguise",
        "type": "noun",
        "form": "Feminine noun; plural: `die Verkleidungen`.",
        "source": "Wortschatz.md",
        "example": "Nasrins Verkleidung war sehr gut.",
        "exampleFa": "Nasrin's disguise was very good.",
        "cloze": "Nasrins ____ war sehr gut.",
        "clozeFa": "Nasrin's disguise was very good.",
        "answer": "Verkleidung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Verkleidung",
          "Verkleidung",
          "Verkleidung"
        ],
        "examples": [
          {
            "de": "Nasrins Verkleidung war sehr gut.",
            "en": "Nasrin's disguise was very good."
          },
          {
            "de": "Niemand erkannte ihn in seiner Verkleidung.",
            "en": "Nobody recognized him in his disguise."
          }
        ]
      },
      {
        "id": "erkennen",
        "group": "l20-g1",
        "term": "erkennen",
        "fa": "to recognize; to realize",
        "type": "verb",
        "form": "Strong inseparable verb: `erkennt – erkannte – hat erkannt`.",
        "source": "Wortschatz.md",
        "example": "Die Nachbarin konnte Nasrin nicht erkennen.",
        "exampleFa": "The neighbor could not recognize Nasrin.",
        "cloze": "Die Nachbarin konnte Nasrin nicht ____.",
        "clozeFa": "The neighbor could not recognize Nasrin.",
        "answer": "erkennen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "erkennen",
          "erkennen",
          "erkennen"
        ],
        "examples": [
          {
            "de": "Die Nachbarin konnte Nasrin nicht erkennen.",
            "en": "The neighbor could not recognize Nasrin."
          },
          {
            "de": "Ich habe ihn sofort erkannt.",
            "en": "I recognized him immediately."
          }
        ]
      },
      {
        "id": "die-stimmung",
        "group": "l20-g1",
        "term": "die Stimmung",
        "fa": "atmosphere; mood",
        "type": "noun",
        "form": "Feminine noun; plural: `die Stimmungen`.",
        "source": "Wortschatz.md",
        "example": "Die Stimmung auf der Party war gut.",
        "exampleFa": "The atmosphere at the party was good.",
        "cloze": "Die ____ auf der Party war gut.",
        "clozeFa": "The atmosphere at the party was good.",
        "answer": "Stimmung",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Stimmung",
          "Stimmung",
          "Stimmung"
        ],
        "examples": [
          {
            "de": "Die Stimmung auf der Party war gut.",
            "en": "The atmosphere at the party was good."
          },
          {
            "de": "Die Musik sorgt für gute Stimmung.",
            "en": "The music creates a good atmosphere."
          }
        ]
      },
      {
        "id": "spass-haben",
        "group": "l20-g1",
        "term": "Spaß haben",
        "fa": "to have fun",
        "type": "phrase",
        "form": "`Spaß` is normally used without an article in this expression.",
        "source": "Wortschatz.md",
        "example": "Alle hatten viel Spaß.",
        "exampleFa": "Everyone had a lot of fun.",
        "cloze": "Alle hatten viel Spaß. ____",
        "clozeFa": "Everyone had a lot of fun.",
        "answer": "Spaß haben",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "Spaß haben",
          "Spaß haben",
          "Spaß haben"
        ],
        "examples": [
          {
            "de": "Alle hatten viel Spaß.",
            "en": "Everyone had a lot of fun."
          },
          {
            "de": "Wir haben beim Tanzen Spaß.",
            "en": "We have fun dancing."
          }
        ]
      },
      {
        "id": "bekannt-fuer",
        "group": "l20-g1",
        "term": "bekannt für",
        "fa": "known/famous for",
        "type": "phrase",
        "form": "`bekannt für + Akkusativ`.",
        "source": "Wortschatz.md",
        "example": "Köln ist für seinen Karneval bekannt.",
        "exampleFa": "Cologne is famous for its carnival.",
        "cloze": "Köln ist für seinen Karneval ____.",
        "clozeFa": "Cologne is famous for its carnival.",
        "answer": "bekannt",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "bekannt für",
          "bekannt für",
          "bekannt"
        ],
        "examples": [
          {
            "de": "Köln ist für seinen Karneval bekannt.",
            "en": "Cologne is famous for its carnival."
          },
          {
            "de": "Die Stadt ist für ihre Feste bekannt.",
            "en": "The city is known for its festivals."
          }
        ]
      },
      {
        "id": "die-karnevalsfeier",
        "group": "l20-g1",
        "term": "die Karnevalsfeier",
        "fa": "carnival celebration",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Karnevalsfeiern`.",
        "source": "Wortschatz.md",
        "example": "Die Karnevalsfeier beginnt am Abend.",
        "exampleFa": "The carnival celebration begins in the evening.",
        "cloze": "Die ____ beginnt am Abend.",
        "clozeFa": "The carnival celebration begins in the evening.",
        "answer": "Karnevalsfeier",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Karnevalsfeier",
          "Karnevalsfeier",
          "Karnevalsfeier"
        ],
        "examples": [
          {
            "de": "Die Karnevalsfeier beginnt am Abend.",
            "en": "The carnival celebration begins in the evening."
          },
          {
            "de": "Köln ist für seine Karnevalsfeiern bekannt.",
            "en": "Cologne is famous for its carnival celebrations."
          }
        ]
      },
      {
        "id": "je-nach",
        "group": "l20-g1",
        "term": "je nach",
        "fa": "depending on",
        "type": "phrase",
        "form": "Usually followed by the dative.",
        "source": "Wortschatz.md",
        "example": "Je nach Region heißt das Fest anders.",
        "exampleFa": "Depending on the region, the festival has a different name.",
        "cloze": "____ Region heißt das Fest anders.",
        "clozeFa": "Depending on the region, the festival has a different name.",
        "answer": "je nach",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "je nach",
          "je nach",
          "je nach"
        ],
        "examples": [
          {
            "de": "Je nach Region heißt das Fest anders.",
            "en": "Depending on the region, the festival has a different name."
          },
          {
            "de": "Je nach Wetter feiern wir draußen.",
            "en": "Depending on the weather, we celebrate outside."
          }
        ]
      },
      {
        "id": "eine-maske-aufsetzen",
        "group": "l20-g1",
        "term": "eine Maske aufsetzen",
        "fa": "to put on a mask",
        "type": "phrase",
        "form": "`aufsetzen` is separable: `setzt auf – setzte auf – hat aufgesetzt`.",
        "source": "Wortschatz.md",
        "example": "Manche Leute setzen Masken auf.",
        "exampleFa": "Some people put on masks.",
        "cloze": "Manche Leute setzen Masken auf. ____",
        "clozeFa": "Some people put on masks.",
        "answer": "Maske aufsetzen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "eine Maske aufsetzen",
          "Maske aufsetzen",
          "Maske aufsetzen"
        ],
        "examples": [
          {
            "de": "Manche Leute setzen Masken auf.",
            "en": "Some people put on masks."
          },
          {
            "de": "Sie hat eine bunte Maske aufgesetzt.",
            "en": "She put on a colorful mask."
          }
        ]
      },
      {
        "id": "nicht-nur-sondern-auch",
        "group": "l20-g2",
        "term": "nicht nur …, sondern auch …",
        "fa": "not only … but also …",
        "type": "phrase",
        "form": "Connects two equivalent words, phrases, or clauses.",
        "source": "Wortschatz.md",
        "example": "Zum Karneval gehören nicht nur Kostüme, sondern auch Musik und Partys.",
        "exampleFa": "Carnival includes not only costumes but also music and parties.",
        "cloze": "Zum Karneval gehören nicht nur Kostüme, ____ auch Musik und Partys.",
        "clozeFa": "Carnival includes not only costumes but also music and parties.",
        "answer": "sondern",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "nicht nur …, sondern auch …",
          "nicht nur …, sondern auch …",
          "sondern"
        ],
        "examples": [
          {
            "de": "Zum Karneval gehören nicht nur Kostüme, sondern auch Musik und Partys.",
            "en": "Carnival includes not only costumes but also music and parties."
          },
          {
            "de": "Er kann nicht nur singen, sondern auch tanzen.",
            "en": "He can not only sing but also dance."
          }
        ]
      },
      {
        "id": "der-erwachsene-die-erwachsene",
        "group": "l20-g2",
        "term": "der Erwachsene / die Erwachsene",
        "fa": "adult",
        "type": "noun",
        "form": "Adjectival noun; plural: `die Erwachsenen`.",
        "source": "Wortschatz.md",
        "example": "Kinder und Erwachsene feiern zusammen.",
        "exampleFa": "Children and adults celebrate together.",
        "cloze": "Kinder und ____ feiern zusammen.",
        "clozeFa": "Children and adults celebrate together.",
        "answer": "Erwachsene",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Erwachsene / die Erwachsene",
          "Erwachsene / die Erwachsene",
          "Erwachsene"
        ],
        "examples": [
          {
            "de": "Kinder und Erwachsene feiern zusammen.",
            "en": "Children and adults celebrate together."
          },
          {
            "de": "Der Eintritt kostet für Erwachsene zehn Euro.",
            "en": "Admission costs ten euros for adults."
          }
        ]
      },
      {
        "id": "die-kneipe",
        "group": "l20-g2",
        "term": "die Kneipe",
        "fa": "pub; bar",
        "type": "noun",
        "form": "Feminine noun; plural: `die Kneipen`.",
        "source": "Wortschatz.md",
        "example": "Viele Menschen feiern in den Kneipen.",
        "exampleFa": "Many people celebrate in the pubs.",
        "cloze": "Viele Menschen feiern in den ____n.",
        "clozeFa": "Many people celebrate in the pubs.",
        "answer": "Kneipe",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "die Kneipe",
          "Kneipe",
          "Kneipe"
        ],
        "examples": [
          {
            "de": "Viele Menschen feiern in den Kneipen.",
            "en": "Many people celebrate in the pubs."
          },
          {
            "de": "Wir treffen uns in einer Kneipe.",
            "en": "We are meeting in a pub."
          }
        ]
      },
      {
        "id": "der-rosenmontag",
        "group": "l20-g2",
        "term": "der Rosenmontag",
        "fa": "Carnival Monday; Rose Monday",
        "type": "noun",
        "form": "Masculine noun; an important day of German carnival.",
        "source": "Wortschatz.md",
        "example": "Rosenmontag ist der wichtigste Tag im Karneval.",
        "exampleFa": "Carnival Monday is the most important day of carnival.",
        "cloze": "____ ist der wichtigste Tag im Karneval.",
        "clozeFa": "Carnival Monday is the most important day of carnival.",
        "answer": "Rosenmontag",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "der Rosenmontag",
          "Rosenmontag",
          "Rosenmontag"
        ],
        "examples": [
          {
            "de": "Rosenmontag ist der wichtigste Tag im Karneval.",
            "en": "Carnival Monday is the most important day of carnival."
          },
          {
            "de": "Am Rosenmontag gibt es große Umzüge.",
            "en": "There are large parades on Carnival Monday."
          }
        ]
      },
      {
        "id": "schmuecken",
        "group": "l20-g2",
        "term": "schmücken",
        "fa": "to decorate",
        "type": "verb",
        "form": "Regular verb: `schmückt – schmückte – hat geschmückt`.",
        "source": "Wortschatz.md",
        "example": "Die Wagen sind bunt geschmückt.",
        "exampleFa": "The floats are colorfully decorated.",
        "cloze": "Die Wagen sind bunt geschmückt. ____",
        "clozeFa": "The floats are colorfully decorated.",
        "answer": "schmücken",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "schmücken",
          "schmücken",
          "schmücken"
        ],
        "examples": [
          {
            "de": "Die Wagen sind bunt geschmückt.",
            "en": "The floats are colorfully decorated."
          },
          {
            "de": "Wir schmücken den Saal für die Party.",
            "en": "We decorate the hall for the party."
          }
        ]
      },
      {
        "id": "das-publikum",
        "group": "l20-g2",
        "term": "das Publikum",
        "fa": "audience; spectators",
        "type": "noun",
        "form": "Neuter collective noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Bonbons werden ins Publikum geworfen.",
        "exampleFa": "Sweets are thrown into the crowd.",
        "cloze": "Bonbons werden ins ____ geworfen.",
        "clozeFa": "Sweets are thrown into the crowd.",
        "answer": "Publikum",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "das Publikum",
          "Publikum",
          "Publikum"
        ],
        "examples": [
          {
            "de": "Bonbons werden ins Publikum geworfen.",
            "en": "Sweets are thrown into the crowd."
          },
          {
            "de": "Das Publikum klatscht laut.",
            "en": "The audience applauds loudly."
          }
        ]
      },
      {
        "id": "werfen",
        "group": "l20-g2",
        "term": "werfen",
        "fa": "to throw",
        "type": "verb",
        "form": "Strong verb: `wirft – warf – hat geworfen`.",
        "source": "Wortschatz.md",
        "example": "Die Leute werfen Bonbons ins Publikum.",
        "exampleFa": "The people throw sweets into the crowd.",
        "cloze": "Die Leute ____ Bonbons ins Publikum.",
        "clozeFa": "The people throw sweets into the crowd.",
        "answer": "werfen",
        "distractors": [
          "ausgeben",
          "sich anmelden",
          "eintreffen"
        ],
        "typeAnswers": [
          "werfen",
          "werfen",
          "werfen"
        ],
        "examples": [
          {
            "de": "Die Leute werfen Bonbons ins Publikum.",
            "en": "The people throw sweets into the crowd."
          },
          {
            "de": "Bitte wirf den Ball zu mir.",
            "en": "Please throw the ball to me."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l20-g1",
        "icon": "1",
        "title": "Words 381-390",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l20-g2",
        "icon": "2",
        "title": "Words 391-397",
        "fa": "7 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  }
];

  window.WORTSCHATZ_DATA = { lessons };
})();
