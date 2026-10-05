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
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "ehemalig",
        "group": "l1-g1",
        "term": "ehemalig",
        "fa": "former; previous",
        "type": "adjective",
        "form": "Adjective; before a noun it takes the appropriate ending.",
        "source": "Wortschatz.md",
        "example": "Karolina ist meine ehemalige Kollegin.",
        "exampleFa": "Karolina is my former colleague.",
        "cloze": "Karolina ist meine ____e Kollegin.",
        "clozeFa": "Karolina is my former colleague.",
        "answer": "ehemalig",
        "distractors": [
          "nächstes Wochenende",
          "Geburtstag haben",
          "Grillparty"
        ],
        "typeAnswers": [
          "ehemalig",
          "ehemalig",
          "ehemalig"
        ],
        "examples": [
          {
            "de": "Karolina ist meine ehemalige Kollegin.",
            "en": "Karolina is my former colleague."
          },
          {
            "de": "Er arbeitet bei seinem ehemaligen Arbeitgeber.",
            "en": "He works for his former employer."
          }
        ]
      },
      {
        "id": "naechstes-wochenende",
        "group": "l1-g1",
        "term": "nächstes Wochenende",
        "fa": "next weekend",
        "type": "adjective",
        "form": "Accusative time expression without a preposition; *Wochenende* is neuter, so the adjective ending is *-es*.",
        "source": "Wortschatz.md",
        "example": "Karolina hat nächstes Wochenende Geburtstag.",
        "exampleFa": "Karolina's birthday is next weekend.",
        "cloze": "Karolina hat ____ Geburtstag.",
        "clozeFa": "Karolina's birthday is next weekend.",
        "answer": "nächstes Wochenende",
        "distractors": [
          "ehemalig",
          "Geburtstag haben",
          "Grillparty"
        ],
        "typeAnswers": [
          "nächstes Wochenende",
          "nächstes Wochenende",
          "nächstes Wochenende"
        ],
        "examples": [
          {
            "de": "Karolina hat nächstes Wochenende Geburtstag.",
            "en": "Karolina's birthday is next weekend."
          },
          {
            "de": "Was machst du nächstes Wochenende?",
            "en": "What are you doing next weekend?"
          }
        ]
      },
      {
        "id": "geburtstag-haben",
        "group": "l1-g1",
        "term": "Geburtstag haben",
        "fa": "to have one's birthday",
        "type": "phrase",
        "form": "Fixed expression with *haben*; *Geburtstag* normally appears without an article.",
        "source": "Wortschatz.md",
        "example": "Karolina hat am Samstag Geburtstag.",
        "exampleFa": "Karolina's birthday is on Saturday.",
        "cloze": "Karolina hat am Samstag Geburtstag. ____",
        "clozeFa": "Karolina's birthday is on Saturday.",
        "answer": "Geburtstag haben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Grillparty"
        ],
        "typeAnswers": [
          "Geburtstag haben",
          "Geburtstag haben",
          "Geburtstag haben"
        ],
        "examples": [
          {
            "de": "Karolina hat am Samstag Geburtstag.",
            "en": "Karolina's birthday is on Saturday."
          },
          {
            "de": "Wann hast du Geburtstag?",
            "en": "When is your birthday?"
          }
        ]
      },
      {
        "id": "die-grillparty",
        "group": "l1-g1",
        "term": "die Grillparty",
        "fa": "barbecue party; cookout",
        "type": "noun",
        "form": "Feminine compound noun; plural: *die Grillpartys*.",
        "source": "Wortschatz.md",
        "example": "Karolina möchte eine Grillparty feiern.",
        "exampleFa": "Karolina wants to have a barbecue party.",
        "cloze": "Karolina möchte eine ____ feiern.",
        "clozeFa": "Karolina wants to have a barbecue party.",
        "answer": "Grillparty",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Grillparty",
          "Grillparty",
          "Grillparty"
        ],
        "examples": [
          {
            "de": "Karolina möchte eine Grillparty feiern.",
            "en": "Karolina wants to have a barbecue party."
          },
          {
            "de": "Die Grillparty beginnt um 18 Uhr.",
            "en": "The barbecue party begins at 6 p.m."
          }
        ]
      },
      {
        "id": "auf-eine-einladung-antworten",
        "group": "l1-g1",
        "term": "auf eine Einladung antworten",
        "fa": "to reply to an invitation",
        "type": "phrase",
        "form": "Fixed pattern: *auf + Akkusativ antworten*.",
        "source": "Wortschatz.md",
        "example": "Ich antworte mit einem Brief auf die Einladung.",
        "exampleFa": "I am replying to the invitation with a letter.",
        "cloze": "Ich antworte mit einem Brief auf die Einladung. ____",
        "clozeFa": "I am replying to the invitation with a letter.",
        "answer": "auf eine Einladung antworten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "auf eine Einladung antworten",
          "auf eine Einladung antworten",
          "auf eine Einladung antworten"
        ],
        "examples": [
          {
            "de": "Ich antworte mit einem Brief auf die Einladung.",
            "en": "I am replying to the invitation with a letter."
          },
          {
            "de": "Bitte antworte bald auf meine Einladung.",
            "en": "Please reply to my invitation soon."
          }
        ]
      },
      {
        "id": "sich-fuer-eine-einladung-bedanken",
        "group": "l1-g1",
        "term": "sich für eine Einladung bedanken",
        "fa": "to thank someone for an invitation",
        "type": "phrase",
        "form": "Reflexive pattern: *sich bei jemandem für etwas bedanken*; *bei + Dativ*, *für + Akkusativ*.",
        "source": "Wortschatz.md",
        "example": "Vielen Dank für deine Einladung.",
        "exampleFa": "Thank you very much for your invitation.",
        "cloze": "Vielen Dank für deine Einladung. ____",
        "clozeFa": "Thank you very much for your invitation.",
        "answer": "sich für eine Einladung bedanken",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich für eine Einladung bedanken",
          "sich für eine Einladung bedanken",
          "sich für eine Einladung bedanken"
        ],
        "examples": [
          {
            "de": "Vielen Dank für deine Einladung.",
            "en": "Thank you very much for your invitation."
          },
          {
            "de": "Ich möchte mich bei dir für die Einladung bedanken.",
            "en": "I would like to thank you for the invitation."
          }
        ]
      },
      {
        "id": "im-moment",
        "group": "l1-g1",
        "term": "im Moment",
        "fa": "at the moment; currently",
        "type": "phrase",
        "form": "Adverbial phrase; it can occupy position 1, followed immediately by the finite verb.",
        "source": "Wortschatz.md",
        "example": "Im Moment arbeite ich in einer neuen Firma.",
        "exampleFa": "At the moment, I work at a new company.",
        "cloze": "____ arbeite ich in einer neuen Firma.",
        "clozeFa": "At the moment, I work at a new company.",
        "answer": "im Moment",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "im Moment",
          "im Moment",
          "im Moment"
        ],
        "examples": [
          {
            "de": "Im Moment arbeite ich in einer neuen Firma.",
            "en": "At the moment, I work at a new company."
          },
          {
            "de": "Ich habe im Moment viel zu tun.",
            "en": "I have a lot to do at the moment."
          }
        ]
      },
      {
        "id": "die-wegbeschreibung",
        "group": "l1-g1",
        "term": "die Wegbeschreibung",
        "fa": "directions; route description",
        "type": "noun",
        "form": "Feminine compound noun; plural: *die Wegbeschreibungen*.",
        "source": "Wortschatz.md",
        "example": "Kannst du mir bitte eine Wegbeschreibung schicken?",
        "exampleFa": "Could you please send me directions?",
        "cloze": "Kannst du mir bitte eine ____ schicken?",
        "clozeFa": "Could you please send me directions?",
        "answer": "Wegbeschreibung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Wegbeschreibung",
          "Wegbeschreibung",
          "Wegbeschreibung"
        ],
        "examples": [
          {
            "de": "Kannst du mir bitte eine Wegbeschreibung schicken?",
            "en": "Could you please send me directions?"
          },
          {
            "de": "Dank deiner Wegbeschreibung habe ich das Haus schnell gefunden.",
            "en": "Thanks to your directions, I found the house quickly."
          }
        ]
      },
      {
        "id": "jemanden-um-eine-wegbeschreibung-bitten",
        "group": "l1-g1",
        "term": "jemanden um eine Wegbeschreibung bitten",
        "fa": "to ask someone for directions",
        "type": "phrase",
        "form": "Pattern: *jemanden (Akk) um etwas (Akk) bitten*.",
        "source": "Wortschatz.md",
        "example": "Ich möchte dich um eine Wegbeschreibung bitten.",
        "exampleFa": "I would like to ask you for directions.",
        "cloze": "Ich möchte dich um eine Wegbeschreibung bitten. ____",
        "clozeFa": "I would like to ask you for directions.",
        "answer": "jemanden um eine Wegbeschreibung bitten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "jemanden um eine Wegbeschreibung bitten",
          "jemanden um eine Wegbeschreibung bitten",
          "jemanden um eine Wegbeschreibung bitten"
        ],
        "examples": [
          {
            "de": "Ich möchte dich um eine Wegbeschreibung bitten.",
            "en": "I would like to ask you for directions."
          },
          {
            "de": "Kannst du mir erklären, wie ich zu dir komme?",
            "en": "Can you explain how I can get to your place?"
          }
        ]
      },
      {
        "id": "sich-auf-etwas-freuen",
        "group": "l1-g1",
        "term": "sich auf etwas freuen",
        "fa": "to look forward to something",
        "type": "phrase",
        "form": "Reflexive verb with *auf + Akkusativ*: *freut sich – freute sich – hat sich gefreut*.",
        "source": "Wortschatz.md",
        "example": "Ich freue mich auf die Grillparty.",
        "exampleFa": "I am looking forward to the barbecue party.",
        "cloze": "Ich freue mich auf die Grillparty. ____",
        "clozeFa": "I am looking forward to the barbecue party.",
        "answer": "sich auf etwas freuen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich auf etwas freuen",
          "sich auf etwas freuen",
          "sich auf etwas freuen"
        ],
        "examples": [
          {
            "de": "Ich freue mich auf die Grillparty.",
            "en": "I am looking forward to the barbecue party."
          },
          {
            "de": "Ich freue mich darauf, dich wiederzusehen.",
            "en": "I am looking forward to seeing you again."
          }
        ]
      },
      {
        "id": "trotz-genitiv",
        "group": "l1-g2",
        "term": "trotz + Genitiv",
        "fa": "despite; in spite of",
        "type": "phrase",
        "form": "`trotz` normally takes the genitive in standard German; an article may be omitted with an abstract or general noun.",
        "source": "Wortschatz.md",
        "example": "Trotz Internet gibt es genug Arbeit für Fahrradkuriere.",
        "exampleFa": "Despite the internet, there is enough work for bicycle couriers.",
        "cloze": "____ Internet gibt es genug Arbeit für Fahrradkuriere.",
        "clozeFa": "Despite the internet, there is enough work for bicycle couriers.",
        "answer": "trotz",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "trotz + Genitiv",
          "trotz + Genitiv",
          "trotz"
        ],
        "examples": [
          {
            "de": "Trotz Internet gibt es genug Arbeit für Fahrradkuriere.",
            "en": "Despite the internet, there is enough work for bicycle couriers."
          },
          {
            "de": "Trotz des Regens fährt er mit dem Fahrrad.",
            "en": "Despite the rain, he rides his bicycle."
          }
        ]
      },
      {
        "id": "einige-zeit-brauchen",
        "group": "l1-g2",
        "term": "einige Zeit brauchen",
        "fa": "to take some time",
        "type": "phrase",
        "form": "Impersonal pattern: `es braucht einige Zeit, bis ...`; `einige Zeit` is accusative.",
        "source": "Wortschatz.md",
        "example": "Es braucht einige Zeit, bis das Verbot akzeptiert wird.",
        "exampleFa": "It takes some time until the ban is accepted.",
        "cloze": "Es braucht einige Zeit, bis das Verbot akzeptiert wird. ____",
        "clozeFa": "It takes some time until the ban is accepted.",
        "answer": "einige Zeit brauchen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "einige Zeit brauchen",
          "einige Zeit brauchen",
          "einige Zeit brauchen"
        ],
        "examples": [
          {
            "de": "Es braucht einige Zeit, bis das Verbot akzeptiert wird.",
            "en": "It takes some time until the ban is accepted."
          },
          {
            "de": "Die Reparatur braucht einige Zeit.",
            "en": "The repair takes some time."
          }
        ]
      },
      {
        "id": "der-fahrradkurier-die-fahrradkurierin",
        "group": "l1-g2",
        "term": "der Fahrradkurier / die Fahrradkurierin",
        "fa": "male bicycle courier / female bicycle courier",
        "type": "noun",
        "form": "Plural: `die Fahrradkuriere / die Fahrradkurierinnen`.",
        "source": "Wortschatz.md",
        "example": "Fahrradkuriere transportieren Sendungen mit dem Fahrrad.",
        "exampleFa": "Bicycle couriers transport deliveries by bicycle.",
        "cloze": "____e transportieren Sendungen mit dem Fahrrad.",
        "clozeFa": "Bicycle couriers transport deliveries by bicycle.",
        "answer": "Fahrradkurier",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Fahrradkurier / die Fahrradkurierin",
          "Fahrradkurier / die Fahrradkurierin",
          "Fahrradkurier"
        ],
        "examples": [
          {
            "de": "Fahrradkuriere transportieren Sendungen mit dem Fahrrad.",
            "en": "Bicycle couriers transport deliveries by bicycle."
          },
          {
            "de": "Sie arbeitet als Fahrradkurierin.",
            "en": "She works as a bicycle courier."
          }
        ]
      },
      {
        "id": "der-kurierdienst",
        "group": "l1-g2",
        "term": "der Kurierdienst",
        "fa": "courier service",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Kurierdienste`.",
        "source": "Wortschatz.md",
        "example": "Dieser Kurierdienst liefert Dokumente noch am selben Tag.",
        "exampleFa": "This courier service delivers documents on the same day.",
        "cloze": "Dieser ____ liefert Dokumente noch am selben Tag.",
        "clozeFa": "This courier service delivers documents on the same day.",
        "answer": "Kurierdienst",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Kurierdienst",
          "Kurierdienst",
          "Kurierdienst"
        ],
        "examples": [
          {
            "de": "Dieser Kurierdienst liefert Dokumente noch am selben Tag.",
            "en": "This courier service delivers documents on the same day."
          },
          {
            "de": "Fahrradkuriere sind schneller als manche andere Kurierdienste.",
            "en": "Bicycle couriers are faster than some other courier services."
          }
        ]
      },
      {
        "id": "die-lieferung",
        "group": "l1-g2",
        "term": "die Lieferung",
        "fa": "delivery",
        "type": "noun",
        "form": "Feminine noun; plural: `die Lieferungen`; related verb: `liefern`.",
        "source": "Wortschatz.md",
        "example": "Der Kurier bringt die Lieferung zum Kunden.",
        "exampleFa": "The courier takes the delivery to the customer.",
        "cloze": "Der Kurier bringt die ____ zum Kunden.",
        "clozeFa": "The courier takes the delivery to the customer.",
        "answer": "Lieferung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Lieferung",
          "Lieferung",
          "Lieferung"
        ],
        "examples": [
          {
            "de": "Der Kurier bringt die Lieferung zum Kunden.",
            "en": "The courier takes the delivery to the customer."
          },
          {
            "de": "Jede Lieferung muss unterschrieben werden.",
            "en": "Every delivery must be signed for."
          }
        ]
      },
      {
        "id": "akzeptieren",
        "group": "l1-g2",
        "term": "akzeptieren",
        "fa": "to accept",
        "type": "verb",
        "form": "Regular verb ending in `-ieren`: `akzeptiert – akzeptierte – hat akzeptiert`; the participle has no `ge-`.",
        "source": "Wortschatz.md",
        "example": "Das Rauchverbot wird langsam akzeptiert.",
        "exampleFa": "The smoking ban is gradually being accepted.",
        "cloze": "Das Rauchverbot wird langsam akzeptiert. ____",
        "clozeFa": "The smoking ban is gradually being accepted.",
        "answer": "akzeptieren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "akzeptieren",
          "akzeptieren",
          "akzeptieren"
        ],
        "examples": [
          {
            "de": "Das Rauchverbot wird langsam akzeptiert.",
            "en": "The smoking ban is gradually being accepted."
          },
          {
            "de": "Sie hat die Entscheidung akzeptiert.",
            "en": "She accepted the decision."
          }
        ]
      },
      {
        "id": "zwischen-dativ-akkusativ",
        "group": "l1-g2",
        "term": "zwischen + Dativ/Akkusativ",
        "fa": "between",
        "type": "phrase",
        "form": "Two-way preposition: dative for a static position or relationship, accusative for movement toward a position.",
        "source": "Wortschatz.md",
        "example": "Zwischen den alten und den jungen Kollegen gibt es wenig Kontakt.",
        "exampleFa": "There is little contact between the older and younger colleagues.",
        "cloze": "____ den alten und den jungen Kollegen gibt es wenig Kontakt.",
        "clozeFa": "There is little contact between the older and younger colleagues.",
        "answer": "zwischen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zwischen + Dativ/Akkusativ",
          "zwischen + Dativ/Akkusativ",
          "zwischen"
        ],
        "examples": [
          {
            "de": "Zwischen den alten und den jungen Kollegen gibt es wenig Kontakt.",
            "en": "There is little contact between the older and younger colleagues."
          },
          {
            "de": "Er stellt das Fahrrad zwischen die Autos.",
            "en": "He puts the bicycle between the cars."
          }
        ]
      },
      {
        "id": "rad-fahren",
        "group": "l1-g2",
        "term": "Rad fahren",
        "fa": "to cycle; to ride a bicycle",
        "type": "phrase",
        "form": "Verb phrase: `fährt Rad – fuhr Rad – ist Rad gefahren`; `Rad` is capitalized because it is a noun.",
        "source": "Wortschatz.md",
        "example": "Er fährt jeden Tag 70 bis 120 Kilometer Rad.",
        "exampleFa": "He cycles 70 to 120 kilometers every day.",
        "cloze": "Er fährt jeden Tag 70 bis 120 Kilometer Rad. ____",
        "clozeFa": "He cycles 70 to 120 kilometers every day.",
        "answer": "Rad fahren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Rad fahren",
          "Rad fahren",
          "Rad fahren"
        ],
        "examples": [
          {
            "de": "Er fährt jeden Tag 70 bis 120 Kilometer Rad.",
            "en": "He cycles 70 to 120 kilometers every day."
          },
          {
            "de": "Im Sommer fahre ich gern Rad.",
            "en": "I enjoy cycling in summer."
          }
        ]
      },
      {
        "id": "die-strasse",
        "group": "l1-g2",
        "term": "die Straße",
        "fa": "street; road",
        "type": "noun",
        "form": "Feminine noun; plural: `die Straßen`; location uses `auf + Dativ`: `auf der Straße`.",
        "source": "Wortschatz.md",
        "example": "Auf der Straße fahren viele Autos.",
        "exampleFa": "Many cars drive on the road.",
        "cloze": "Auf der ____ fahren viele Autos.",
        "clozeFa": "Many cars drive on the road.",
        "answer": "Straße",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Straße",
          "Straße",
          "Straße"
        ],
        "examples": [
          {
            "de": "Auf der Straße fahren viele Autos.",
            "en": "Many cars drive on the road."
          },
          {
            "de": "Bitte überqueren Sie die Straße vorsichtig.",
            "en": "Please cross the street carefully."
          }
        ]
      },
      {
        "id": "unterschreiben",
        "group": "l1-g2",
        "term": "unterschreiben",
        "fa": "to sign; to sign for",
        "type": "verb",
        "form": "Inseparable strong verb: `unterschreibt – unterschrieb – hat unterschrieben`.",
        "source": "Wortschatz.md",
        "example": "Die Fahrradkuriere müssen jede Lieferung unterschreiben.",
        "exampleFa": "The bicycle couriers must sign for every delivery.",
        "cloze": "Die Fahrradkuriere müssen jede Lieferung ____.",
        "clozeFa": "The bicycle couriers must sign for every delivery.",
        "answer": "unterschreiben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "unterschreiben",
          "unterschreiben",
          "unterschreiben"
        ],
        "examples": [
          {
            "de": "Die Fahrradkuriere müssen jede Lieferung unterschreiben.",
            "en": "The bicycle couriers must sign for every delivery."
          },
          {
            "de": "Bitte unterschreiben Sie hier.",
            "en": "Please sign here."
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
    "grammar": {
      "id": "l1-b1-grammar",
      "icon": "G",
      "title": "weil / dass / wenn / obwohl / ob",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "weil and dass",
          "body": "These conjunctions introduce a subordinate clause, so the conjugated verb moves to the end.",
          "example": "Ich glaube, dass Amir heute fehlt, weil er einen Arzttermin hat.",
          "emphasis": [
            "dass",
            "weil",
            "hat"
          ]
        },
        {
          "title": "wenn",
          "body": "Use wenn for a condition or for an event that happens repeatedly; the verb stands at the end of the clause.",
          "example": "Wenn das Wetter morgen besser ist, fahren wir mit dem Fahrrad zur Arbeit.",
          "emphasis": [
            "Wenn",
            "ist"
          ]
        },
        {
          "title": "obwohl and ob",
          "body": "Obwohl expresses contrast, while ob introduces an indirect yes-or-no question. Both send the verb to the end.",
          "example": "Obwohl ich noch nicht weiß, ob ich am Freitag frei habe, plane ich die Reise.",
          "emphasis": [
            "Obwohl",
            "weiß",
            "ob",
            "habe"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 2,
    "code": "Set 02",
    "title": "Wortschatz Set 2",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "sich-mit-jemandem-verstehen",
        "group": "l2-g1",
        "term": "sich mit jemandem verstehen",
        "fa": "to get along with someone",
        "type": "phrase",
        "form": "Reflexive strong verb: `versteht sich – verstand sich – hat sich verstanden`; use `mit + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Er versteht sich gut mit seinen Kollegen.",
        "exampleFa": "He gets along well with his colleagues.",
        "cloze": "Er versteht sich gut mit seinen Kollegen. ____",
        "clozeFa": "He gets along well with his colleagues.",
        "answer": "sich mit jemandem verstehen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich mit jemandem verstehen",
          "sich mit jemandem verstehen",
          "sich mit jemandem verstehen"
        ],
        "examples": [
          {
            "de": "Er versteht sich gut mit seinen Kollegen.",
            "en": "He gets along well with his colleagues."
          },
          {
            "de": "Verstehst du dich mit deiner Chefin?",
            "en": "Do you get along with your manager?"
          }
        ]
      },
      {
        "id": "schnell-schneller",
        "group": "l2-g1",
        "term": "schnell / schneller",
        "fa": "fast / faster",
        "type": "phrase",
        "form": "Comparative: `schneller`; superlative: `am schnellsten`.",
        "source": "Wortschatz.md",
        "example": "Fahrradkuriere sind oft schneller als Autos.",
        "exampleFa": "Bicycle couriers are often faster than cars.",
        "cloze": "Fahrradkuriere sind oft ____er als Autos.",
        "clozeFa": "Bicycle couriers are often faster than cars.",
        "answer": "schnell",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "schnell / schneller",
          "schnell / schneller",
          "schnell"
        ],
        "examples": [
          {
            "de": "Fahrradkuriere sind oft schneller als Autos.",
            "en": "Bicycle couriers are often faster than cars."
          },
          {
            "de": "Wer fährt am schnellsten?",
            "en": "Who travels fastest?"
          }
        ]
      },
      {
        "id": "weniger",
        "group": "l2-g1",
        "term": "weniger",
        "fa": "less; fewer",
        "type": "word",
        "form": "Comparative of `wenig`; it does not receive an ending before an uncountable noun such as `Geld`.",
        "source": "Wortschatz.md",
        "example": "Die Frau befürchtet, weniger Geld zu verdienen.",
        "exampleFa": "The woman fears earning less money.",
        "cloze": "Die Frau befürchtet, ____ Geld zu verdienen.",
        "clozeFa": "The woman fears earning less money.",
        "answer": "weniger",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "weniger",
          "weniger",
          "weniger"
        ],
        "examples": [
          {
            "de": "Die Frau befürchtet, weniger Geld zu verdienen.",
            "en": "The woman fears earning less money."
          },
          {
            "de": "Heute kommen weniger Gäste.",
            "en": "Fewer guests are coming today."
          }
        ]
      },
      {
        "id": "das-verhalten",
        "group": "l2-g1",
        "term": "das Verhalten",
        "fa": "behavior",
        "type": "noun",
        "form": "Neuter noun, normally used in the singular; common pattern: `das Verhalten von jemandem` or genitive `das Verhalten der Gäste`.",
        "source": "Wortschatz.md",
        "example": "Das Verhalten der Gäste hat sich geändert.",
        "exampleFa": "The guests' behavior has changed.",
        "cloze": "Das ____ der Gäste hat sich geändert.",
        "clozeFa": "The guests' behavior has changed.",
        "answer": "Verhalten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Verhalten",
          "Verhalten",
          "Verhalten"
        ],
        "examples": [
          {
            "de": "Das Verhalten der Gäste hat sich geändert.",
            "en": "The guests' behavior has changed."
          },
          {
            "de": "Sein Verhalten war höflich.",
            "en": "His behavior was polite."
          }
        ]
      },
      {
        "id": "je-mehr-desto-mehr",
        "group": "l2-g1",
        "term": "je mehr ..., desto mehr ...",
        "fa": "the more ..., the more ...",
        "type": "phrase",
        "form": "Proportional comparison; the `je` clause has verb-final order, while the `desto` clause has the finite verb immediately after the comparative phrase.",
        "source": "Wortschatz.md",
        "example": "Je mehr Stunden er arbeitet, desto mehr verdient er.",
        "exampleFa": "The more hours he works, the more he earns.",
        "cloze": "____ mehr Stunden er arbeitet, desto mehr verdient er.",
        "clozeFa": "The more hours he works, the more he earns.",
        "answer": "je",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "je mehr ..., desto mehr ...",
          "je mehr ..., desto mehr ...",
          "je"
        ],
        "examples": [
          {
            "de": "Je mehr Stunden er arbeitet, desto mehr verdient er.",
            "en": "The more hours he works, the more he earns."
          },
          {
            "de": "Je mehr ich übe, desto besser spreche ich Deutsch.",
            "en": "The more I practise, the better I speak German."
          }
        ]
      },
      {
        "id": "der-gast-die-gaestin",
        "group": "l2-g1",
        "term": "der Gast / die Gästin",
        "fa": "male guest / female guest",
        "type": "noun",
        "form": "Plural: `die Gäste / die Gästinnen`; genitive plural: `der Gäste`.",
        "source": "Wortschatz.md",
        "example": "Das Verhalten der Gäste hat sich nicht geändert.",
        "exampleFa": "The guests' behavior has not changed.",
        "cloze": "Das Verhalten der Gäste hat sich nicht geändert. ____",
        "clozeFa": "The guests' behavior has not changed.",
        "answer": "Gast / die Gästin",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Gast / die Gästin",
          "Gast / die Gästin",
          "Gast / die Gästin"
        ],
        "examples": [
          {
            "de": "Das Verhalten der Gäste hat sich nicht geändert.",
            "en": "The guests' behavior has not changed."
          },
          {
            "de": "Die Gäste warten vor dem Restaurant.",
            "en": "The guests are waiting outside the restaurant."
          }
        ]
      },
      {
        "id": "wenig-kontakt-haben",
        "group": "l2-g1",
        "term": "wenig Kontakt haben",
        "fa": "to have little contact",
        "type": "phrase",
        "form": "`Kontakt` is normally singular and uncountable here, so use `wenig`, not `wenige`.",
        "source": "Wortschatz.md",
        "example": "Die beiden Gruppen haben wenig Kontakt.",
        "exampleFa": "The two groups have little contact.",
        "cloze": "Die beiden Gruppen ____ wenig Kontakt.",
        "clozeFa": "The two groups have little contact.",
        "answer": "haben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "wenig Kontakt haben",
          "wenig Kontakt haben",
          "haben"
        ],
        "examples": [
          {
            "de": "Die beiden Gruppen haben wenig Kontakt.",
            "en": "The two groups have little contact."
          },
          {
            "de": "Zwischen den Kollegen gibt es wenig Kontakt.",
            "en": "There is little contact between the colleagues."
          }
        ]
      },
      {
        "id": "geld-verdienen",
        "group": "l2-g1",
        "term": "Geld verdienen",
        "fa": "to earn money",
        "type": "phrase",
        "form": "Regular verb: `verdient – verdiente – hat verdient`; `Geld` is an uncountable accusative object.",
        "source": "Wortschatz.md",
        "example": "Sie verdient weniger Geld.",
        "exampleFa": "She earns less money.",
        "cloze": "Sie verdient weniger Geld. ____",
        "clozeFa": "She earns less money.",
        "answer": "Geld verdienen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Geld verdienen",
          "Geld verdienen",
          "Geld verdienen"
        ],
        "examples": [
          {
            "de": "Sie verdient weniger Geld.",
            "en": "She earns less money."
          },
          {
            "de": "Wie viel Geld verdienst du im Monat?",
            "en": "How much money do you earn per month?"
          },
          {
            "de": "Je mehr Stunden er arbeitet, desto mehr verdient er.",
            "en": "The more hours he works, the more he earns."
          }
        ]
      },
      {
        "id": "angst-haben-etwas-zu-tun",
        "group": "l2-g1",
        "term": "Angst haben, etwas zu tun",
        "fa": "to be afraid of doing something",
        "type": "phrase",
        "form": "When the subject remains the same, use a comma followed by `zu + Infinitiv`.",
        "source": "Wortschatz.md",
        "example": "Die Frau hat Angst, weniger Geld zu verdienen.",
        "exampleFa": "The woman is afraid of earning less money.",
        "cloze": "Die Frau hat Angst, weniger Geld zu verdienen. ____",
        "clozeFa": "The woman is afraid of earning less money.",
        "answer": "Angst haben, etwas zu tun",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Angst haben, etwas zu tun",
          "Angst haben, etwas zu tun",
          "Angst haben, etwas zu tun"
        ],
        "examples": [
          {
            "de": "Die Frau hat Angst, weniger Geld zu verdienen.",
            "en": "The woman is afraid of earning less money."
          },
          {
            "de": "Er hat Angst, seinen Arbeitsplatz zu verlieren.",
            "en": "He is afraid of losing his job."
          }
        ]
      },
      {
        "id": "die-gefahr",
        "group": "l2-g1",
        "term": "die Gefahr",
        "fa": "danger; risk",
        "type": "noun",
        "form": "Feminine noun; plural: `die Gefahren`; common pattern: `eine Gefahr in etwas (Dat) sehen`.",
        "source": "Wortschatz.md",
        "example": "Die größte Gefahr sieht er in den vielen Autos.",
        "exampleFa": "He sees the greatest danger in the many cars.",
        "cloze": "Die größte ____ sieht er in den vielen Autos.",
        "clozeFa": "He sees the greatest danger in the many cars.",
        "answer": "Gefahr",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Gefahr",
          "Gefahr",
          "Gefahr"
        ],
        "examples": [
          {
            "de": "Die größte Gefahr sieht er in den vielen Autos.",
            "en": "He sees the greatest danger in the many cars."
          },
          {
            "de": "Auf dieser Straße besteht eine große Gefahr für Radfahrer.",
            "en": "There is a major danger for cyclists on this road."
          }
        ]
      },
      {
        "id": "der-raucherraum",
        "group": "l2-g2",
        "term": "der Raucherraum",
        "fa": "smoking room",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Raucherräume`.",
        "source": "Wortschatz.md",
        "example": "In dem Gebäude gibt es mehrere Raucherräume.",
        "exampleFa": "There are several smoking rooms in the building.",
        "cloze": "In dem Gebäude gibt es mehrere Raucherräume. ____",
        "clozeFa": "There are several smoking rooms in the building.",
        "answer": "Raucherraum",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Raucherraum",
          "Raucherraum",
          "Raucherraum"
        ],
        "examples": [
          {
            "de": "In dem Gebäude gibt es mehrere Raucherräume.",
            "en": "There are several smoking rooms in the building."
          },
          {
            "de": "Der Raucherraum befindet sich im Erdgeschoss.",
            "en": "The smoking room is on the ground floor."
          }
        ]
      },
      {
        "id": "der-student-die-studentin",
        "group": "l2-g2",
        "term": "der Student / die Studentin",
        "fa": "male student / female student",
        "type": "noun",
        "form": "Plural: `die Studenten / die Studentinnen`; masculine `Student` is a weak noun: `mit dem Studenten`.",
        "source": "Wortschatz.md",
        "example": "In seiner Firma arbeiten vor allem Studenten.",
        "exampleFa": "Mainly students work at his company.",
        "cloze": "In seiner Firma arbeiten vor allem ____en.",
        "clozeFa": "Mainly students work at his company.",
        "answer": "Student",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Student / die Studentin",
          "Student / die Studentin",
          "Student"
        ],
        "examples": [
          {
            "de": "In seiner Firma arbeiten vor allem Studenten.",
            "en": "Mainly students work at his company."
          },
          {
            "de": "Die Studentin arbeitet nebenbei als Fahrradkurierin.",
            "en": "The student has a part-time job as a bicycle courier."
          }
        ]
      },
      {
        "id": "sich-aendern",
        "group": "l2-g2",
        "term": "sich ändern",
        "fa": "to change",
        "type": "verb",
        "form": "Reflexive regular verb: `ändert sich – änderte sich – hat sich geändert`.",
        "source": "Wortschatz.md",
        "example": "Seit dem Rauchverbot hat sich das Verhalten nicht geändert.",
        "exampleFa": "Behavior has not changed since the smoking ban.",
        "cloze": "Seit dem Rauchverbot hat sich das Verhalten nicht geändert. ____",
        "clozeFa": "Behavior has not changed since the smoking ban.",
        "answer": "sich ändern",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich ändern",
          "sich ändern",
          "sich ändern"
        ],
        "examples": [
          {
            "de": "Seit dem Rauchverbot hat sich das Verhalten nicht geändert.",
            "en": "Behavior has not changed since the smoking ban."
          },
          {
            "de": "Die Situation kann sich schnell ändern.",
            "en": "The situation can change quickly."
          }
        ]
      },
      {
        "id": "durch-akkusativ",
        "group": "l2-g2",
        "term": "durch + Akkusativ",
        "fa": "through; because of; as a result of",
        "type": "phrase",
        "form": "`durch` always takes the accusative and can express a cause or means.",
        "source": "Wortschatz.md",
        "example": "Durch das Rauchverbot verdient sie vielleicht weniger Geld.",
        "exampleFa": "She may earn less money because of the smoking ban.",
        "cloze": "____ das Rauchverbot verdient sie vielleicht weniger Geld.",
        "clozeFa": "She may earn less money because of the smoking ban.",
        "answer": "durch",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "durch + Akkusativ",
          "durch + Akkusativ",
          "durch"
        ],
        "examples": [
          {
            "de": "Durch das Rauchverbot verdient sie vielleicht weniger Geld.",
            "en": "She may earn less money because of the smoking ban."
          },
          {
            "de": "Durch regelmäßiges Üben wird mein Deutsch besser.",
            "en": "My German improves through regular practice."
          }
        ]
      },
      {
        "id": "nicht-mehr-als",
        "group": "l2-g2",
        "term": "nicht mehr als",
        "fa": "no more than; not more than",
        "type": "phrase",
        "form": "Sets an upper limit; do not confuse it with temporal `nicht mehr` meaning “no longer.”",
        "source": "Wortschatz.md",
        "example": "Oliver arbeitet nicht mehr als 30 Stunden pro Woche.",
        "exampleFa": "Oliver works no more than 30 hours per week.",
        "cloze": "Oliver arbeitet ____ 30 Stunden pro Woche.",
        "clozeFa": "Oliver works no more than 30 hours per week.",
        "answer": "nicht mehr als",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "nicht mehr als",
          "nicht mehr als",
          "nicht mehr als"
        ],
        "examples": [
          {
            "de": "Oliver arbeitet nicht mehr als 30 Stunden pro Woche.",
            "en": "Oliver works no more than 30 hours per week."
          },
          {
            "de": "Das Paket wiegt nicht mehr als fünf Kilogramm.",
            "en": "The package weighs no more than five kilograms."
          }
        ]
      },
      {
        "id": "der-wert",
        "group": "l2-g2",
        "term": "der Wert",
        "fa": "value; worth",
        "type": "noun",
        "form": "Masculine noun; plural: `die Werte`; common expression: `den gleichen Wert haben`.",
        "source": "Wortschatz.md",
        "example": "Jede Arbeit hat den gleichen Wert.",
        "exampleFa": "Every kind of work has the same value.",
        "cloze": "Jede Arbeit hat den gleichen ____.",
        "clozeFa": "Every kind of work has the same value.",
        "answer": "Wert",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Wert",
          "Wert",
          "Wert"
        ],
        "examples": [
          {
            "de": "Jede Arbeit hat den gleichen Wert.",
            "en": "Every kind of work has the same value."
          },
          {
            "de": "Das Bild hat einen hohen Wert.",
            "en": "The picture has a high value."
          }
        ]
      },
      {
        "id": "zusammenarbeiten",
        "group": "l2-g2",
        "term": "zusammenarbeiten",
        "fa": "to cooperate; to work together",
        "type": "verb",
        "form": "Separable regular verb: `arbeitet zusammen – arbeitete zusammen – hat zusammengearbeitet`; often used with `mit + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Der Tauschring arbeitet mit anderen Gruppen zusammen.",
        "exampleFa": "The exchange circle cooperates with other groups.",
        "cloze": "Der Tauschring arbeitet mit anderen Gruppen zusammen. ____",
        "clozeFa": "The exchange circle cooperates with other groups.",
        "answer": "zusammenarbeiten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zusammenarbeiten",
          "zusammenarbeiten",
          "zusammenarbeiten"
        ],
        "examples": [
          {
            "de": "Der Tauschring arbeitet mit anderen Gruppen zusammen.",
            "en": "The exchange circle cooperates with other groups."
          },
          {
            "de": "Unsere Schulen arbeiten seit Jahren zusammen.",
            "en": "Our schools have been cooperating for years."
          }
        ]
      },
      {
        "id": "etwas-toll-finden",
        "group": "l2-g2",
        "term": "etwas toll finden",
        "fa": "to think something is great",
        "type": "phrase",
        "form": "`finden` takes an accusative object; the object can be the pronoun `es`, with a following clause explaining it.",
        "source": "Wortschatz.md",
        "example": "Tom findet es toll, wenn Jens Musik macht.",
        "exampleFa": "Tom thinks it is great when Jens plays music.",
        "cloze": "Tom findet es toll, wenn Jens Musik macht. ____",
        "clozeFa": "Tom thinks it is great when Jens plays music.",
        "answer": "etwas toll finden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "etwas toll finden",
          "etwas toll finden",
          "etwas toll finden"
        ],
        "examples": [
          {
            "de": "Tom findet es toll, wenn Jens Musik macht.",
            "en": "Tom thinks it is great when Jens plays music."
          },
          {
            "de": "Ich finde den Ausflug toll.",
            "en": "I think the excursion is great."
          }
        ]
      },
      {
        "id": "laenger-geoeffnet-haben",
        "group": "l2-g2",
        "term": "länger geöffnet haben",
        "fa": "to be open longer",
        "type": "phrase",
        "form": "`länger` is the comparative of `lange`; `geöffnet` describes the opening state.",
        "source": "Wortschatz.md",
        "example": "Am Freitag hat der Zoo länger geöffnet.",
        "exampleFa": "On Friday, the zoo is open longer.",
        "cloze": "Am Freitag hat der Zoo länger geöffnet. ____",
        "clozeFa": "On Friday, the zoo is open longer.",
        "answer": "länger geöffnet haben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "länger geöffnet haben",
          "länger geöffnet haben",
          "länger geöffnet haben"
        ],
        "examples": [
          {
            "de": "Am Freitag hat der Zoo länger geöffnet.",
            "en": "On Friday, the zoo is open longer."
          },
          {
            "de": "Das Geschäft hat heute bis 20 Uhr geöffnet.",
            "en": "The shop is open until 8 p.m. today."
          }
        ]
      },
      {
        "id": "gewinnen",
        "group": "l2-g2",
        "term": "gewinnen",
        "fa": "to win",
        "type": "verb",
        "form": "Strong verb: `gewinnt – gewann – hat gewonnen`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Sie hat eine Reise nach Rom gewonnen.",
        "exampleFa": "She won a trip to Rome.",
        "cloze": "Sie hat eine Reise nach Rom gewonnen. ____",
        "clozeFa": "She won a trip to Rome.",
        "answer": "gewinnen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "gewinnen",
          "gewinnen",
          "gewinnen"
        ],
        "examples": [
          {
            "de": "Sie hat eine Reise nach Rom gewonnen.",
            "en": "She won a trip to Rome."
          },
          {
            "de": "Welche Mannschaft hat das Spiel gewonnen?",
            "en": "Which team won the game?"
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
    "grammar": {
      "id": "l2-b1-grammar",
      "icon": "G",
      "title": "deshalb / trotzdem",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "deshalb: result",
          "body": "Deshalb introduces a consequence. It occupies position one, so the conjugated verb follows immediately.",
          "example": "Der Bus ist ausgefallen; deshalb bin ich zu Fuß zur Arbeit gegangen.",
          "emphasis": [
            "deshalb",
            "bin"
          ]
        },
        {
          "title": "trotzdem: contrast",
          "body": "Trotzdem shows that the second action happens despite the first fact. The verb remains in position two.",
          "example": "Es hat den ganzen Nachmittag geregnet; trotzdem fand das Konzert draußen statt.",
          "emphasis": [
            "trotzdem",
            "fand"
          ]
        },
        {
          "title": "Connecting an argument",
          "body": "Use deshalb for a logical result and trotzdem for an unexpected result when explaining an opinion or decision.",
          "example": "Mina hatte wenig Zeit. Trotzdem half sie uns, und deshalb waren wir früher fertig.",
          "emphasis": [
            "Trotzdem",
            "half",
            "deshalb",
            "waren"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 3,
    "code": "Set 03",
    "title": "Wortschatz Set 3",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "der-stadtteil",
        "group": "l3-g1",
        "term": "der Stadtteil",
        "fa": "district; neighborhood; part of a city",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Stadtteile`; genitive singular: `des Stadtteils`.",
        "source": "Wortschatz.md",
        "example": "Die Bewohner des Stadtteils treffen sich regelmäßig.",
        "exampleFa": "The residents of the district meet regularly.",
        "cloze": "Die Bewohner des ____s treffen sich regelmäßig.",
        "clozeFa": "The residents of the district meet regularly.",
        "answer": "Stadtteil",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Stadtteil",
          "Stadtteil",
          "Stadtteil"
        ],
        "examples": [
          {
            "de": "Die Bewohner des Stadtteils treffen sich regelmäßig.",
            "en": "The residents of the district meet regularly."
          },
          {
            "de": "In diesem Stadtteil gibt es viele kleine Geschäfte.",
            "en": "There are many small shops in this district."
          }
        ]
      },
      {
        "id": "der-pkw",
        "group": "l3-g1",
        "term": "der Pkw",
        "fa": "passenger car; car",
        "type": "noun",
        "form": "Abbreviation of `Personenkraftwagen`; masculine noun; plural: `die Pkw` or `die Pkws`.",
        "source": "Wortschatz.md",
        "example": "Ein grüner Pkw wird gerade abgeschleppt.",
        "exampleFa": "A green car is being towed away right now.",
        "cloze": "Ein grüner ____ wird gerade abgeschleppt.",
        "clozeFa": "A green car is being towed away right now.",
        "answer": "Pkw",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Pkw",
          "Pkw",
          "Pkw"
        ],
        "examples": [
          {
            "de": "Ein grüner Pkw wird gerade abgeschleppt.",
            "en": "A green car is being towed away right now."
          },
          {
            "de": "Der Pkw steht vor dem Haus.",
            "en": "The car is parked in front of the house."
          }
        ]
      },
      {
        "id": "die-mitarbeit",
        "group": "l3-g1",
        "term": "die Mitarbeit",
        "fa": "participation; collaboration; assistance",
        "type": "noun",
        "form": "Feminine noun, usually singular; related verb: `mitarbeiten`.",
        "source": "Wortschatz.md",
        "example": "Die Mitarbeit im Tauschring ist kostenlos.",
        "exampleFa": "Participation in the exchange circle is free of charge.",
        "cloze": "Die ____ im Tauschring ist kostenlos.",
        "clozeFa": "Participation in the exchange circle is free of charge.",
        "answer": "Mitarbeit",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Mitarbeit",
          "Mitarbeit",
          "Mitarbeit"
        ],
        "examples": [
          {
            "de": "Die Mitarbeit im Tauschring ist kostenlos.",
            "en": "Participation in the exchange circle is free of charge."
          },
          {
            "de": "Vielen Dank für Ihre Mitarbeit.",
            "en": "Thank you for your cooperation."
          }
        ]
      },
      {
        "id": "jedes-wochenende",
        "group": "l3-g1",
        "term": "jedes Wochenende",
        "fa": "every weekend",
        "type": "phrase",
        "form": "Accusative time expression without a preposition; `Wochenende` is neuter, so the ending is `-es`.",
        "source": "Wortschatz.md",
        "example": "Jedes Wochenende kann man eine Reise gewinnen.",
        "exampleFa": "Every weekend, one can win a trip.",
        "cloze": "____ kann man eine Reise gewinnen.",
        "clozeFa": "Every weekend, one can win a trip.",
        "answer": "jedes Wochenende",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "jedes Wochenende",
          "jedes Wochenende",
          "jedes Wochenende"
        ],
        "examples": [
          {
            "de": "Jedes Wochenende kann man eine Reise gewinnen.",
            "en": "Every weekend, one can win a trip."
          },
          {
            "de": "Wir besuchen unsere Freunde jedes Wochenende.",
            "en": "We visit our friends every weekend."
          }
        ]
      },
      {
        "id": "erscheinen",
        "group": "l3-g1",
        "term": "erscheinen",
        "fa": "to appear; to be published",
        "type": "verb",
        "form": "Inseparable strong verb: `erscheint – erschien – ist erschienen`.",
        "source": "Wortschatz.md",
        "example": "Alle vier Wochen erscheint eine Mitgliederzeitung.",
        "exampleFa": "A members' newsletter is published every four weeks.",
        "cloze": "Alle vier Wochen erscheint eine Mitgliederzeitung. ____",
        "clozeFa": "A members' newsletter is published every four weeks.",
        "answer": "erscheinen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "erscheinen",
          "erscheinen",
          "erscheinen"
        ],
        "examples": [
          {
            "de": "Alle vier Wochen erscheint eine Mitgliederzeitung.",
            "en": "A members' newsletter is published every four weeks."
          },
          {
            "de": "Das Buch ist im Mai erschienen.",
            "en": "The book was published in May."
          }
        ]
      },
      {
        "id": "abschleppen",
        "group": "l3-g1",
        "term": "abschleppen",
        "fa": "to tow away",
        "type": "verb",
        "form": "Separable regular verb: `schleppt ab – schleppte ab – hat abgeschleppt`; often used in the passive.",
        "source": "Wortschatz.md",
        "example": "Die Polizei lässt den Pkw abschleppen.",
        "exampleFa": "The police have the car towed away.",
        "cloze": "Die Polizei lässt den Pkw ____.",
        "clozeFa": "The police have the car towed away.",
        "answer": "abschleppen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "abschleppen",
          "abschleppen",
          "abschleppen"
        ],
        "examples": [
          {
            "de": "Die Polizei lässt den Pkw abschleppen.",
            "en": "The police have the car towed away."
          },
          {
            "de": "Der Pkw wird gerade abgeschleppt.",
            "en": "The car is being towed away right now."
          }
        ]
      },
      {
        "id": "kontakt-zueinander-haben",
        "group": "l3-g1",
        "term": "Kontakt zueinander haben",
        "fa": "to have contact with one another",
        "type": "phrase",
        "form": "`Kontakt` is normally singular and uncountable in this expression; `zueinander` expresses a reciprocal relationship.",
        "source": "Wortschatz.md",
        "example": "Die Bewohner haben wenig Kontakt zueinander.",
        "exampleFa": "The residents have little contact with one another.",
        "cloze": "Die Bewohner ____ wenig Kontakt zueinander.",
        "clozeFa": "The residents have little contact with one another.",
        "answer": "haben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Kontakt zueinander haben",
          "Kontakt zueinander haben",
          "haben"
        ],
        "examples": [
          {
            "de": "Die Bewohner haben wenig Kontakt zueinander.",
            "en": "The residents have little contact with one another."
          },
          {
            "de": "Die beiden Gruppen haben regelmäßig Kontakt zueinander.",
            "en": "The two groups are regularly in contact with one another."
          }
        ]
      },
      {
        "id": "die-reise",
        "group": "l3-g1",
        "term": "die Reise",
        "fa": "trip; journey",
        "type": "noun",
        "form": "Feminine noun; plural: `die Reisen`; destinations commonly use `nach` without an article.",
        "source": "Wortschatz.md",
        "example": "Man kann eine Reise nach Rom gewinnen.",
        "exampleFa": "One can win a trip to Rome.",
        "cloze": "Man kann eine ____ nach Rom gewinnen.",
        "clozeFa": "One can win a trip to Rome.",
        "answer": "Reise",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Reise",
          "Reise",
          "Reise"
        ],
        "examples": [
          {
            "de": "Man kann eine Reise nach Rom gewinnen.",
            "en": "One can win a trip to Rome."
          },
          {
            "de": "Die Reise nach Italien dauert eine Woche.",
            "en": "The trip to Italy lasts one week."
          }
        ]
      },
      {
        "id": "der-bewohner-die-bewohnerin",
        "group": "l3-g1",
        "term": "der Bewohner / die Bewohnerin",
        "fa": "male resident / female resident",
        "type": "noun",
        "form": "Plural: `die Bewohner / die Bewohnerinnen`.",
        "source": "Wortschatz.md",
        "example": "Die Bewohner des Stadtteils haben wenig Kontakt zueinander.",
        "exampleFa": "The residents of the district have little contact with one another.",
        "cloze": "Die ____ des Stadtteils haben wenig Kontakt zueinander.",
        "clozeFa": "The residents of the district have little contact with one another.",
        "answer": "Bewohner",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Bewohner / die Bewohnerin",
          "Bewohner / die Bewohnerin",
          "Bewohner"
        ],
        "examples": [
          {
            "de": "Die Bewohner des Stadtteils haben wenig Kontakt zueinander.",
            "en": "The residents of the district have little contact with one another."
          },
          {
            "de": "Die Bewohnerin kennt ihre Nachbarn gut.",
            "en": "The resident knows her neighbors well."
          }
        ]
      },
      {
        "id": "der-protest",
        "group": "l3-g1",
        "term": "der Protest",
        "fa": "protest",
        "type": "noun",
        "form": "Masculine noun; plural: `die Proteste`; commonly followed by `gegen + Akkusativ`.",
        "source": "Wortschatz.md",
        "example": "Der Protest gegen das Rauchverbot dauert an.",
        "exampleFa": "The protest against the smoking ban continues.",
        "cloze": "Der ____ gegen das Rauchverbot dauert an.",
        "clozeFa": "The protest against the smoking ban continues.",
        "answer": "Protest",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Protest",
          "Protest",
          "Protest"
        ],
        "examples": [
          {
            "de": "Der Protest gegen das Rauchverbot dauert an.",
            "en": "The protest against the smoking ban continues."
          },
          {
            "de": "Viele Menschen nehmen an dem Protest teil.",
            "en": "Many people participate in the protest."
          }
        ]
      },
      {
        "id": "das-rauchverbot",
        "group": "l3-g2",
        "term": "das Rauchverbot",
        "fa": "smoking ban",
        "type": "noun",
        "form": "Neuter compound noun: `Rauchen + Verbot`; plural: `die Rauchverbote`.",
        "source": "Wortschatz.md",
        "example": "Der Protest richtet sich gegen das Rauchverbot.",
        "exampleFa": "The protest is directed against the smoking ban.",
        "cloze": "Der Protest richtet sich gegen das ____.",
        "clozeFa": "The protest is directed against the smoking ban.",
        "answer": "Rauchverbot",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Rauchverbot",
          "Rauchverbot",
          "Rauchverbot"
        ],
        "examples": [
          {
            "de": "Der Protest richtet sich gegen das Rauchverbot.",
            "en": "The protest is directed against the smoking ban."
          },
          {
            "de": "Seit dem Rauchverbot darf man hier nicht mehr rauchen.",
            "en": "Since the smoking ban, smoking is no longer allowed here."
          }
        ]
      },
      {
        "id": "der-spielfilm",
        "group": "l3-g2",
        "term": "der Spielfilm",
        "fa": "feature film",
        "type": "noun",
        "form": "Masculine compound noun: `Spiel + Film`; plural: `die Spielfilme`.",
        "source": "Wortschatz.md",
        "example": "Der Spielfilm wird um 22:30 Uhr gezeigt.",
        "exampleFa": "The feature film is shown at 10:30 p.m.",
        "cloze": "Der ____ wird um 22:30 Uhr gezeigt.",
        "clozeFa": "The feature film is shown at 10:30 p.m.",
        "answer": "Spielfilm",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Spielfilm",
          "Spielfilm",
          "Spielfilm"
        ],
        "examples": [
          {
            "de": "Der Spielfilm wird um 22:30 Uhr gezeigt.",
            "en": "The feature film is shown at 10:30 p.m."
          },
          {
            "de": "Heute Abend sehen wir einen Spielfilm.",
            "en": "We are watching a feature film this evening."
          }
        ]
      },
      {
        "id": "gerade",
        "group": "l3-g2",
        "term": "gerade",
        "fa": "right now; just; straight",
        "type": "verb",
        "form": "As a time adverb, `gerade` emphasizes that an action is happening at this moment.",
        "source": "Wortschatz.md",
        "example": "Das Auto wird gerade abgeschleppt.",
        "exampleFa": "The car is being towed away right now.",
        "cloze": "Das Auto wird ____ abgeschleppt.",
        "clozeFa": "The car is being towed away right now.",
        "answer": "gerade",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "gerade",
          "gerade",
          "gerade"
        ],
        "examples": [
          {
            "de": "Das Auto wird gerade abgeschleppt.",
            "en": "The car is being towed away right now."
          },
          {
            "de": "Ich telefoniere gerade.",
            "en": "I am on the phone right now."
          }
        ]
      },
      {
        "id": "der-zoo",
        "group": "l3-g2",
        "term": "der Zoo",
        "fa": "zoo",
        "type": "noun",
        "form": "Masculine noun; plural: `die Zoos`.",
        "source": "Wortschatz.md",
        "example": "Am Freitag hat der Zoo länger geöffnet.",
        "exampleFa": "On Friday, the zoo is open longer.",
        "cloze": "Am Freitag hat der ____ länger geöffnet.",
        "clozeFa": "On Friday, the zoo is open longer.",
        "answer": "Zoo",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Zoo",
          "Zoo",
          "Zoo"
        ],
        "examples": [
          {
            "de": "Am Freitag hat der Zoo länger geöffnet.",
            "en": "On Friday, the zoo is open longer."
          },
          {
            "de": "Wir gehen mit den Kindern in den Zoo.",
            "en": "We are going to the zoo with the children."
          }
        ]
      },
      {
        "id": "alle-vier-wochen",
        "group": "l3-g2",
        "term": "alle vier Wochen",
        "fa": "every four weeks",
        "type": "phrase",
        "form": "Recurring-time expression in the accusative without a preposition.",
        "source": "Wortschatz.md",
        "example": "Alle vier Wochen erscheint eine Mitgliederzeitung.",
        "exampleFa": "A members' newsletter appears every four weeks.",
        "cloze": "____ erscheint eine Mitgliederzeitung.",
        "clozeFa": "A members' newsletter appears every four weeks.",
        "answer": "alle vier Wochen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "alle vier Wochen",
          "alle vier Wochen",
          "alle vier Wochen"
        ],
        "examples": [
          {
            "de": "Alle vier Wochen erscheint eine Mitgliederzeitung.",
            "en": "A members' newsletter appears every four weeks."
          },
          {
            "de": "Der Kurs findet alle zwei Wochen statt.",
            "en": "The course takes place every two weeks."
          }
        ]
      },
      {
        "id": "das-fest",
        "group": "l3-g2",
        "term": "das Fest",
        "fa": "celebration; festival; party",
        "type": "noun",
        "form": "Neuter noun; plural: `die Feste`; location uses `auf + Dativ`: `auf dem Fest`.",
        "source": "Wortschatz.md",
        "example": "Jens macht auf dem Fest Musik.",
        "exampleFa": "Jens plays music at the festival.",
        "cloze": "Jens macht auf dem ____ Musik.",
        "clozeFa": "Jens plays music at the festival.",
        "answer": "Fest",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Fest",
          "Fest",
          "Fest"
        ],
        "examples": [
          {
            "de": "Jens macht auf dem Fest Musik.",
            "en": "Jens plays music at the festival."
          },
          {
            "de": "Das Fest findet am Samstag statt.",
            "en": "The festival takes place on Saturday."
          }
        ]
      },
      {
        "id": "musik-machen",
        "group": "l3-g2",
        "term": "Musik machen",
        "fa": "to make/play music",
        "type": "phrase",
        "form": "Fixed expression without an article before `Musik`.",
        "source": "Wortschatz.md",
        "example": "Jens macht auf dem Fest Musik.",
        "exampleFa": "Jens plays music at the festival.",
        "cloze": "Jens macht auf dem Fest Musik. ____",
        "clozeFa": "Jens plays music at the festival.",
        "answer": "Musik machen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Musik machen",
          "Musik machen",
          "Musik machen"
        ],
        "examples": [
          {
            "de": "Jens macht auf dem Fest Musik.",
            "en": "Jens plays music at the festival."
          },
          {
            "de": "Die Kinder machen zusammen Musik.",
            "en": "The children make music together."
          }
        ]
      },
      {
        "id": "ueber-zahl",
        "group": "l3-g2",
        "term": "über + Zahl",
        "fa": "more than; over",
        "type": "phrase",
        "form": "Before a number, `über` means that the quantity is greater than the stated number.",
        "source": "Wortschatz.md",
        "example": "Der Tauschring hat über 200 Mitglieder.",
        "exampleFa": "The exchange circle has more than 200 members.",
        "cloze": "Der Tauschring hat ____ 200 Mitglieder.",
        "clozeFa": "The exchange circle has more than 200 members.",
        "answer": "über",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "über + Zahl",
          "über + Zahl",
          "über"
        ],
        "examples": [
          {
            "de": "Der Tauschring hat über 200 Mitglieder.",
            "en": "The exchange circle has more than 200 members."
          },
          {
            "de": "Die Stadt hat über eine Million Einwohner.",
            "en": "The city has more than one million inhabitants."
          }
        ]
      },
      {
        "id": "kostenlos",
        "group": "l3-g2",
        "term": "kostenlos",
        "fa": "free of charge",
        "type": "verb",
        "form": "Adjective or adverb; it means that no payment is required.",
        "source": "Wortschatz.md",
        "example": "Die Teilnahme ist kostenlos.",
        "exampleFa": "Participation is free of charge.",
        "cloze": "Die Teilnahme ist ____.",
        "clozeFa": "Participation is free of charge.",
        "answer": "kostenlos",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "kostenlos",
          "kostenlos",
          "kostenlos"
        ],
        "examples": [
          {
            "de": "Die Teilnahme ist kostenlos.",
            "en": "Participation is free of charge."
          },
          {
            "de": "Kinder fahren kostenlos mit.",
            "en": "Children travel free of charge."
          }
        ]
      },
      {
        "id": "die-mitgliederzeitung",
        "group": "l3-g2",
        "term": "die Mitgliederzeitung",
        "fa": "members' newsletter; members' magazine",
        "type": "noun",
        "form": "Feminine compound noun: `Mitglieder + Zeitung`; plural: `die Mitgliederzeitungen`.",
        "source": "Wortschatz.md",
        "example": "Die Mitgliederzeitung erscheint regelmäßig.",
        "exampleFa": "The members' newsletter is published regularly.",
        "cloze": "Die ____ erscheint regelmäßig.",
        "clozeFa": "The members' newsletter is published regularly.",
        "answer": "Mitgliederzeitung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Mitgliederzeitung",
          "Mitgliederzeitung",
          "Mitgliederzeitung"
        ],
        "examples": [
          {
            "de": "Die Mitgliederzeitung erscheint regelmäßig.",
            "en": "The members' newsletter is published regularly."
          },
          {
            "de": "In der Mitgliederzeitung stehen aktuelle Informationen.",
            "en": "The members' newsletter contains current information."
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
    "grammar": {
      "id": "l3-b1-grammar",
      "icon": "G",
      "title": "Konjunktiv II: würde, könnte, wäre, hätte",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "würde for advice and wishes",
          "body": "Use würde plus infinitive to make suggestions, describe wishes, or speak about an unreal situation.",
          "example": "An deiner Stelle würde ich mich früher für den Sprachkurs anmelden.",
          "emphasis": [
            "würde",
            "anmelden"
          ]
        },
        {
          "title": "könnte for polite possibilities",
          "body": "Könnte makes requests and suggestions sound polite and less direct.",
          "example": "Könnten Sie mir bitte erklären, welche Unterlagen noch fehlen?",
          "emphasis": [
            "Könnten",
            "erklären"
          ]
        },
        {
          "title": "wäre and hätte",
          "body": "Use wäre and hätte for unreal conditions involving sein and haben.",
          "example": "Wenn ich mehr Zeit hätte, wäre ich gern ehrenamtlich tätig.",
          "emphasis": [
            "hätte",
            "wäre"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 4,
    "code": "Set 04",
    "title": "Wortschatz Set 4",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "mit-jemandem-unzufrieden-sein",
        "group": "l4-g1",
        "term": "mit jemandem unzufrieden sein",
        "fa": "to be dissatisfied with someone",
        "type": "phrase",
        "form": "Fixed pattern: `unzufrieden mit + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Viele Lehrer sind mit den Eltern unzufrieden.",
        "exampleFa": "Many teachers are dissatisfied with the parents.",
        "cloze": "Viele Lehrer sind mit den Eltern ____.",
        "clozeFa": "Many teachers are dissatisfied with the parents.",
        "answer": "unzufrieden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mit jemandem unzufrieden sein",
          "mit jemandem unzufrieden sein",
          "unzufrieden"
        ],
        "examples": [
          {
            "de": "Viele Lehrer sind mit den Eltern unzufrieden.",
            "en": "Many teachers are dissatisfied with the parents."
          },
          {
            "de": "Sie ist mit dem Ergebnis unzufrieden.",
            "en": "She is dissatisfied with the result."
          }
        ]
      },
      {
        "id": "das-fitnessstudio",
        "group": "l4-g1",
        "term": "das Fitnessstudio",
        "fa": "gym; fitness center",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Fitnessstudios`; location uses `in + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Sie trainiert in dem neuen Fitnessstudio.",
        "exampleFa": "She works out at the new gym.",
        "cloze": "Sie trainiert in dem neuen ____.",
        "clozeFa": "She works out at the new gym.",
        "answer": "Fitnessstudio",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Fitnessstudio",
          "Fitnessstudio",
          "Fitnessstudio"
        ],
        "examples": [
          {
            "de": "Sie trainiert in dem neuen Fitnessstudio.",
            "en": "She works out at the new gym."
          },
          {
            "de": "Das Fitnessstudio öffnet um sieben Uhr.",
            "en": "The gym opens at seven o'clock."
          }
        ]
      },
      {
        "id": "der-stress",
        "group": "l4-g1",
        "term": "der Stress",
        "fa": "stress",
        "type": "noun",
        "form": "Masculine noun; usually uncountable and used in the singular.",
        "source": "Wortschatz.md",
        "example": "Auch in anderen Berufen hat der Stress zugenommen.",
        "exampleFa": "Stress has also increased in other professions.",
        "cloze": "Auch in anderen Berufen hat der ____ zugenommen.",
        "clozeFa": "Stress has also increased in other professions.",
        "answer": "Stress",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Stress",
          "Stress",
          "Stress"
        ],
        "examples": [
          {
            "de": "Auch in anderen Berufen hat der Stress zugenommen.",
            "en": "Stress has also increased in other professions."
          },
          {
            "de": "Zu viel Stress ist ungesund.",
            "en": "Too much stress is unhealthy."
          }
        ]
      },
      {
        "id": "keine-schlechte-idee",
        "group": "l4-g1",
        "term": "keine schlechte Idee",
        "fa": "not a bad idea",
        "type": "phrase",
        "form": "A common understated way to express a positive or open opinion.",
        "source": "Wortschatz.md",
        "example": "Frau Wulf findet Unterricht am Samstag keine schlechte Idee.",
        "exampleFa": "Ms Wulf does not think Saturday classes are a bad idea.",
        "cloze": "Frau Wulf findet Unterricht am Samstag ____.",
        "clozeFa": "Ms Wulf does not think Saturday classes are a bad idea.",
        "answer": "keine schlechte Idee",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "keine schlechte Idee",
          "keine schlechte Idee",
          "keine schlechte Idee"
        ],
        "examples": [
          {
            "de": "Frau Wulf findet Unterricht am Samstag keine schlechte Idee.",
            "en": "Ms Wulf does not think Saturday classes are a bad idea."
          },
          {
            "de": "Ein Spaziergang wäre keine schlechte Idee.",
            "en": "A walk would not be a bad idea."
          }
        ]
      },
      {
        "id": "sich-erholen",
        "group": "l4-g1",
        "term": "sich erholen",
        "fa": "to recover; to rest; to recuperate",
        "type": "verb",
        "form": "Reflexive regular verb: `erholt sich – erholte sich – hat sich erholt`.",
        "source": "Wortschatz.md",
        "example": "In den Ferien können sich die Lehrer erholen.",
        "exampleFa": "Teachers can rest during the holidays.",
        "cloze": "In den Ferien können sich die Lehrer ____.",
        "clozeFa": "Teachers can rest during the holidays.",
        "answer": "erholen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich erholen",
          "sich erholen",
          "erholen"
        ],
        "examples": [
          {
            "de": "In den Ferien können sich die Lehrer erholen.",
            "en": "Teachers can rest during the holidays."
          },
          {
            "de": "Nach der Arbeit muss ich mich erholen.",
            "en": "I need to rest after work."
          }
        ]
      },
      {
        "id": "die-ganztagsschule",
        "group": "l4-g1",
        "term": "die Ganztagsschule",
        "fa": "all-day school",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Ganztagsschulen`; dative plural after location `in`: `in Ganztagsschulen`.",
        "source": "Wortschatz.md",
        "example": "In Ganztagsschulen bleiben die Kinder bis zum Nachmittag.",
        "exampleFa": "At all-day schools, children stay until the afternoon.",
        "cloze": "In ____n bleiben die Kinder bis zum Nachmittag.",
        "clozeFa": "At all-day schools, children stay until the afternoon.",
        "answer": "Ganztagsschule",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Ganztagsschule",
          "Ganztagsschule",
          "Ganztagsschule"
        ],
        "examples": [
          {
            "de": "In Ganztagsschulen bleiben die Kinder bis zum Nachmittag.",
            "en": "At all-day schools, children stay until the afternoon."
          },
          {
            "de": "Ist der Unterricht in Ganztagsschulen leichter?",
            "en": "Is teaching easier in all-day schools?"
          }
        ]
      },
      {
        "id": "arbeit-mit-nach-hause-nehmen",
        "group": "l4-g1",
        "term": "Arbeit mit nach Hause nehmen",
        "fa": "to take work home",
        "type": "phrase",
        "form": "`Arbeit` is uncountable here, so use `zu viel Arbeit`, not `zu viele Arbeit`.",
        "source": "Wortschatz.md",
        "example": "Viele Lehrer nehmen zu viel Arbeit mit nach Hause.",
        "exampleFa": "Many teachers take too much work home with them.",
        "cloze": "Viele Lehrer ____ zu viel Arbeit mit nach Hause.",
        "clozeFa": "Many teachers take too much work home with them.",
        "answer": "nehmen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Arbeit mit nach Hause nehmen",
          "Arbeit mit nach Hause nehmen",
          "nehmen"
        ],
        "examples": [
          {
            "de": "Viele Lehrer nehmen zu viel Arbeit mit nach Hause.",
            "en": "Many teachers take too much work home with them."
          },
          {
            "de": "Ich möchte heute keine Arbeit mit nach Hause nehmen.",
            "en": "I do not want to take any work home today."
          }
        ]
      },
      {
        "id": "mitmachen",
        "group": "l4-g1",
        "term": "mitmachen",
        "fa": "to participate; to join in",
        "type": "verb",
        "form": "Separable regular verb: `macht mit – machte mit – hat mitgemacht`; often used with `bei + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Jeder, der beim Tauschring mitmacht, bekommt ein Formular.",
        "exampleFa": "Everyone who participates in the exchange circle receives a form.",
        "cloze": "Jeder, der beim Tauschring mitmacht, bekommt ein Formular. ____",
        "clozeFa": "Everyone who participates in the exchange circle receives a form.",
        "answer": "mitmachen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mitmachen",
          "mitmachen",
          "mitmachen"
        ],
        "examples": [
          {
            "de": "Jeder, der beim Tauschring mitmacht, bekommt ein Formular.",
            "en": "Everyone who participates in the exchange circle receives a form."
          },
          {
            "de": "Machst du bei dem Projekt mit?",
            "en": "Are you taking part in the project?"
          }
        ]
      },
      {
        "id": "sich-bewegen",
        "group": "l4-g1",
        "term": "sich bewegen",
        "fa": "to move; to exercise; to be physically active",
        "type": "verb",
        "form": "Reflexive regular verb: `bewegt sich – bewegte sich – hat sich bewegt`; the reflexive pronoun is accusative.",
        "source": "Wortschatz.md",
        "example": "Die Sprecherin bewegt sich nicht gern.",
        "exampleFa": "The speaker does not like exercising.",
        "cloze": "Die Sprecherin bewegt sich nicht gern. ____",
        "clozeFa": "The speaker does not like exercising.",
        "answer": "sich bewegen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich bewegen",
          "sich bewegen",
          "sich bewegen"
        ],
        "examples": [
          {
            "de": "Die Sprecherin bewegt sich nicht gern.",
            "en": "The speaker does not like exercising."
          },
          {
            "de": "Man sollte sich regelmäßig bewegen.",
            "en": "One should exercise regularly."
          }
        ]
      },
      {
        "id": "die-ausbildung",
        "group": "l4-g1",
        "term": "die Ausbildung",
        "fa": "training; vocational education",
        "type": "noun",
        "form": "Feminine noun; plural: `die Ausbildungen`. `Während + Genitiv` gives `während ihrer Ausbildung`.",
        "source": "Wortschatz.md",
        "example": "Während ihrer Ausbildung lernen Lehrer viel Theorie.",
        "exampleFa": "During their training, teachers learn a lot of theory.",
        "cloze": "Während ihrer ____ lernen Lehrer viel Theorie.",
        "clozeFa": "During their training, teachers learn a lot of theory.",
        "answer": "Ausbildung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Ausbildung",
          "Ausbildung",
          "Ausbildung"
        ],
        "examples": [
          {
            "de": "Während ihrer Ausbildung lernen Lehrer viel Theorie.",
            "en": "During their training, teachers learn a lot of theory."
          },
          {
            "de": "Sie macht eine Ausbildung zur Verkäuferin.",
            "en": "She is training to become a sales assistant."
          }
        ]
      },
      {
        "id": "die-eltern",
        "group": "l4-g2",
        "term": "die Eltern",
        "fa": "parents",
        "type": "noun",
        "form": "Plural-only noun; dative plural: `den Eltern`.",
        "source": "Wortschatz.md",
        "example": "Die Lehrer sprechen mit den Eltern.",
        "exampleFa": "The teachers speak with the parents.",
        "cloze": "Die Lehrer sprechen mit den ____.",
        "clozeFa": "The teachers speak with the parents.",
        "answer": "Eltern",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Eltern",
          "Eltern",
          "Eltern"
        ],
        "examples": [
          {
            "de": "Die Lehrer sprechen mit den Eltern.",
            "en": "The teachers speak with the parents."
          },
          {
            "de": "Viele Lehrer sind mit den Eltern unzufrieden.",
            "en": "Many teachers are dissatisfied with the parents."
          }
        ]
      },
      {
        "id": "zunehmen",
        "group": "l4-g2",
        "term": "zunehmen",
        "fa": "to increase; to gain weight",
        "type": "verb",
        "form": "Separable strong verb: `nimmt zu – nahm zu – hat zugenommen`.",
        "source": "Wortschatz.md",
        "example": "Der Stress hat zugenommen.",
        "exampleFa": "Stress has increased.",
        "cloze": "Der Stress hat zugenommen. ____",
        "clozeFa": "Stress has increased.",
        "answer": "zunehmen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zunehmen",
          "zunehmen",
          "zunehmen"
        ],
        "examples": [
          {
            "de": "Der Stress hat zugenommen.",
            "en": "Stress has increased."
          },
          {
            "de": "Im Winter hat der Verkehr deutlich zugenommen.",
            "en": "Traffic increased significantly in winter."
          }
        ]
      },
      {
        "id": "die-haelfte",
        "group": "l4-g2",
        "term": "die Hälfte",
        "fa": "half",
        "type": "noun",
        "form": "Feminine noun; plural: `die Hälften`. In `die Hälfte aller Lehrer`, `aller Lehrer` is a partitive genitive meaning “of all teachers.”",
        "source": "Wortschatz.md",
        "example": "Die Hälfte aller Lehrer fühlt sich nicht gut.",
        "exampleFa": "Half of all teachers do not feel well.",
        "cloze": "Die ____ aller Lehrer fühlt sich nicht gut.",
        "clozeFa": "Half of all teachers do not feel well.",
        "answer": "Hälfte",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Hälfte",
          "Hälfte",
          "Hälfte"
        ],
        "examples": [
          {
            "de": "Die Hälfte aller Lehrer fühlt sich nicht gut.",
            "en": "Half of all teachers do not feel well."
          },
          {
            "de": "Ich habe die Hälfte der Arbeit erledigt.",
            "en": "I have completed half of the work."
          }
        ]
      },
      {
        "id": "der-tauschring",
        "group": "l4-g2",
        "term": "der Tauschring",
        "fa": "exchange circle; barter network",
        "type": "noun",
        "form": "Masculine compound noun: `Tausch + Ring`; plural: `die Tauschringe`.",
        "source": "Wortschatz.md",
        "example": "In einem Tauschring tauschen Mitglieder Dienstleistungen aus.",
        "exampleFa": "In an exchange circle, members exchange services.",
        "cloze": "In einem ____ tauschen Mitglieder Dienstleistungen aus.",
        "clozeFa": "In an exchange circle, members exchange services.",
        "answer": "Tauschring",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Tauschring",
          "Tauschring",
          "Tauschring"
        ],
        "examples": [
          {
            "de": "In einem Tauschring tauschen Mitglieder Dienstleistungen aus.",
            "en": "In an exchange circle, members exchange services."
          },
          {
            "de": "Der Tauschring Harburg hat über 200 Mitglieder.",
            "en": "The Harburg exchange circle has more than 200 members."
          }
        ]
      },
      {
        "id": "die-ferien",
        "group": "l4-g2",
        "term": "die Ferien",
        "fa": "holidays; school vacation",
        "type": "noun",
        "form": "Plural-only noun: `die Ferien`; common expressions include `Ferien haben` and `in den Ferien`.",
        "source": "Wortschatz.md",
        "example": "Die Lehrer haben drei Monate Ferien.",
        "exampleFa": "The teachers have three months of vacation.",
        "cloze": "Die Lehrer haben drei Monate ____.",
        "clozeFa": "The teachers have three months of vacation.",
        "answer": "Ferien",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Ferien",
          "Ferien",
          "Ferien"
        ],
        "examples": [
          {
            "de": "Die Lehrer haben drei Monate Ferien.",
            "en": "The teachers have three months of vacation."
          },
          {
            "de": "In den Ferien fahren wir ans Meer.",
            "en": "We are going to the seaside during the holidays."
          }
        ]
      },
      {
        "id": "leicht",
        "group": "l4-g2",
        "term": "leicht",
        "fa": "easy; light",
        "type": "adjective",
        "form": "Adjective; comparative: `leichter`; superlative: `am leichtesten`.",
        "source": "Wortschatz.md",
        "example": "Der Unterricht ist leichter.",
        "exampleFa": "The teaching is easier.",
        "cloze": "Der Unterricht ist ____er.",
        "clozeFa": "The teaching is easier.",
        "answer": "leicht",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "leicht",
          "leicht",
          "leicht"
        ],
        "examples": [
          {
            "de": "Der Unterricht ist leichter.",
            "en": "The teaching is easier."
          },
          {
            "de": "Diese Tasche ist sehr leicht.",
            "en": "This bag is very light."
          }
        ]
      },
      {
        "id": "das-ziel",
        "group": "l4-g2",
        "term": "das Ziel",
        "fa": "goal; objective; destination",
        "type": "noun",
        "form": "Neuter noun; plural: `die Ziele`.",
        "source": "Wortschatz.md",
        "example": "Für den Sprecher ist es wichtig, ein Ziel zu haben.",
        "exampleFa": "It is important to the speaker to have a goal.",
        "cloze": "Für den Sprecher ist es wichtig, ein ____ zu haben.",
        "clozeFa": "It is important to the speaker to have a goal.",
        "answer": "Ziel",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Ziel",
          "Ziel",
          "Ziel"
        ],
        "examples": [
          {
            "de": "Für den Sprecher ist es wichtig, ein Ziel zu haben.",
            "en": "It is important to the speaker to have a goal."
          },
          {
            "de": "Sie hat ihr Ziel erreicht.",
            "en": "She achieved her goal."
          }
        ]
      },
      {
        "id": "jemanden-auf-etwas-vorbereiten",
        "group": "l4-g2",
        "term": "jemanden auf etwas vorbereiten",
        "fa": "to prepare someone for something",
        "type": "phrase",
        "form": "Regular verb: `bereitet vor – bereitete vor – hat vorbereitet`; pattern: `jemanden (Akk) auf etwas (Akk) vorbereiten`.",
        "source": "Wortschatz.md",
        "example": "Die Ausbildung bereitet die Lehrer auf die Probleme vor.",
        "exampleFa": "The training prepares the teachers for the problems.",
        "cloze": "Die Ausbildung bereitet die Lehrer auf die Probleme vor. ____",
        "clozeFa": "The training prepares the teachers for the problems.",
        "answer": "jemanden auf etwas vorbereiten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "jemanden auf etwas vorbereiten",
          "jemanden auf etwas vorbereiten",
          "jemanden auf etwas vorbereiten"
        ],
        "examples": [
          {
            "de": "Die Ausbildung bereitet die Lehrer auf die Probleme vor.",
            "en": "The training prepares the teachers for the problems."
          },
          {
            "de": "Die Lehrer werden auf die Probleme vorbereitet.",
            "en": "The teachers are prepared for the problems."
          }
        ]
      },
      {
        "id": "sich-zeit-fuer-etwas-nehmen",
        "group": "l4-g2",
        "term": "sich Zeit für etwas nehmen",
        "fa": "to take/make time for something",
        "type": "phrase",
        "form": "Pattern: `sich` (Dativ) `Zeit` (Akkusativ) `für etwas` (Akkusativ); strong verb `nimmt – nahm – hat genommen`.",
        "source": "Wortschatz.md",
        "example": "Die Sprecherin nimmt sich für Sport viel Zeit.",
        "exampleFa": "The speaker makes plenty of time for sport.",
        "cloze": "Die Sprecherin nimmt sich für Sport viel Zeit. ____",
        "clozeFa": "The speaker makes plenty of time for sport.",
        "answer": "sich Zeit für etwas nehmen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich Zeit für etwas nehmen",
          "sich Zeit für etwas nehmen",
          "sich Zeit für etwas nehmen"
        ],
        "examples": [
          {
            "de": "Die Sprecherin nimmt sich für Sport viel Zeit.",
            "en": "The speaker makes plenty of time for sport."
          },
          {
            "de": "Ich nehme mir Zeit für meine Familie.",
            "en": "I make time for my family."
          }
        ]
      },
      {
        "id": "das-formular",
        "group": "l4-g2",
        "term": "das Formular",
        "fa": "form",
        "type": "noun",
        "form": "Neuter noun; plural: `die Formulare`.",
        "source": "Wortschatz.md",
        "example": "Jeder Teilnehmer bekommt ein Formular.",
        "exampleFa": "Every participant receives a form.",
        "cloze": "Jeder Teilnehmer bekommt ein ____.",
        "clozeFa": "Every participant receives a form.",
        "answer": "Formular",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Formular",
          "Formular",
          "Formular"
        ],
        "examples": [
          {
            "de": "Jeder Teilnehmer bekommt ein Formular.",
            "en": "Every participant receives a form."
          },
          {
            "de": "Bitte füllen Sie das Formular aus.",
            "en": "Please complete the form."
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
    "grammar": {
      "id": "l4-b1-grammar",
      "icon": "G",
      "title": "um … zu / damit",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "um … zu with one subject",
          "body": "Use um … zu when the main clause and the purpose clause have the same subject.",
          "example": "Ich fahre jeden Morgen früher los, um nicht im Stau zu stehen.",
          "emphasis": [
            "um",
            "zu"
          ]
        },
        {
          "title": "damit with different subjects",
          "body": "Use damit when the purpose clause has its own subject; its conjugated verb moves to the end.",
          "example": "Die Lehrerin spricht langsam, damit alle Teilnehmenden die Aufgabe verstehen.",
          "emphasis": [
            "damit",
            "verstehen"
          ]
        },
        {
          "title": "Choosing the purpose form",
          "body": "Check whether the subject changes: same subject means um … zu, while a new subject requires damit.",
          "example": "Wir schließen das Fenster, damit die Nachbarn nicht durch den Lärm gestört werden.",
          "emphasis": [
            "damit",
            "werden"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 5,
    "code": "Set 05",
    "title": "Wortschatz Set 5",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "miteinander",
        "group": "l5-g1",
        "term": "miteinander",
        "fa": "with one another; together",
        "type": "verb",
        "form": "Reciprocal adverb referring to two or more people.",
        "source": "Wortschatz.md",
        "example": "Die Mitglieder müssen nicht direkt miteinander tauschen.",
        "exampleFa": "The members do not have to exchange directly with one another.",
        "cloze": "Die Mitglieder müssen nicht direkt ____ tauschen.",
        "clozeFa": "The members do not have to exchange directly with one another.",
        "answer": "miteinander",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "miteinander",
          "miteinander",
          "miteinander"
        ],
        "examples": [
          {
            "de": "Die Mitglieder müssen nicht direkt miteinander tauschen.",
            "en": "The members do not have to exchange directly with one another."
          },
          {
            "de": "Wir sprechen offen miteinander.",
            "en": "We speak openly with one another."
          }
        ]
      },
      {
        "id": "der-lehrerberuf",
        "group": "l5-g1",
        "term": "der Lehrerberuf",
        "fa": "teaching profession",
        "type": "noun",
        "form": "Masculine compound noun: `Lehrer + Beruf`; plural: `die Lehrerberufe`, though the singular is more common.",
        "source": "Wortschatz.md",
        "example": "Der Lehrerberuf kann sehr anstrengend sein.",
        "exampleFa": "The teaching profession can be very demanding.",
        "cloze": "Der ____ kann sehr anstrengend sein.",
        "clozeFa": "The teaching profession can be very demanding.",
        "answer": "Lehrerberuf",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Lehrerberuf",
          "Lehrerberuf",
          "Lehrerberuf"
        ],
        "examples": [
          {
            "de": "Der Lehrerberuf kann sehr anstrengend sein.",
            "en": "The teaching profession can be very demanding."
          },
          {
            "de": "Sie hat sich für den Lehrerberuf entschieden.",
            "en": "She chose the teaching profession."
          }
        ]
      },
      {
        "id": "etwas-in-zeit-berechnen",
        "group": "l5-g1",
        "term": "etwas in Zeit berechnen",
        "fa": "to calculate or value something in units of time",
        "type": "phrase",
        "form": "`berechnen` is a regular inseparable verb: `berechnet – berechnete – hat berechnet`; it is often used in the passive.",
        "source": "Wortschatz.md",
        "example": "Die Arbeiten werden in Zeit berechnet.",
        "exampleFa": "The work is calculated in units of time.",
        "cloze": "Die Arbeiten werden in Zeit berechnet. ____",
        "clozeFa": "The work is calculated in units of time.",
        "answer": "etwas in Zeit berechnen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "etwas in Zeit berechnen",
          "etwas in Zeit berechnen",
          "etwas in Zeit berechnen"
        ],
        "examples": [
          {
            "de": "Die Arbeiten werden in Zeit berechnet.",
            "en": "The work is calculated in units of time."
          },
          {
            "de": "Im Tauschring wird eine Leistung nach ihrer Dauer berechnet.",
            "en": "In the exchange circle, a service is valued according to its duration."
          }
        ]
      },
      {
        "id": "etwas-austauschen",
        "group": "l5-g1",
        "term": "etwas austauschen",
        "fa": "to exchange something",
        "type": "phrase",
        "form": "Separable regular verb: `tauscht aus – tauschte aus – hat ausgetauscht`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Die Mitglieder tauschen Leistungen aus.",
        "exampleFa": "The members exchange services.",
        "cloze": "Die Mitglieder tauschen Leistungen aus. ____",
        "clozeFa": "The members exchange services.",
        "answer": "etwas austauschen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "etwas austauschen",
          "etwas austauschen",
          "etwas austauschen"
        ],
        "examples": [
          {
            "de": "Die Mitglieder tauschen Leistungen aus.",
            "en": "The members exchange services."
          },
          {
            "de": "Wir haben unsere Telefonnummern ausgetauscht.",
            "en": "We exchanged telephone numbers."
          }
        ]
      },
      {
        "id": "das-bundesland",
        "group": "l5-g1",
        "term": "das Bundesland",
        "fa": "federal state",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Bundesländer`.",
        "source": "Wortschatz.md",
        "example": "Deutschland hat sechzehn Bundesländer.",
        "exampleFa": "Germany has sixteen federal states.",
        "cloze": "Deutschland hat sechzehn Bundesländer. ____",
        "clozeFa": "Germany has sixteen federal states.",
        "answer": "Bundesland",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Bundesland",
          "Bundesland",
          "Bundesland"
        ],
        "examples": [
          {
            "de": "Deutschland hat sechzehn Bundesländer.",
            "en": "Germany has sixteen federal states."
          },
          {
            "de": "Es gibt Bundesländer, in denen der Lehrerberuf weniger anstrengend ist.",
            "en": "There are federal states in which teaching is less demanding."
          }
        ]
      },
      {
        "id": "trainieren",
        "group": "l5-g1",
        "term": "trainieren",
        "fa": "to train; to work out; to practise",
        "type": "verb",
        "form": "Regular verb ending in `-ieren`: `trainiert – trainierte – hat trainiert`; the participle has no `ge-`.",
        "source": "Wortschatz.md",
        "example": "Die Sprecherin trainiert regelmäßig.",
        "exampleFa": "The speaker works out regularly.",
        "cloze": "Die Sprecherin trainiert regelmäßig. ____",
        "clozeFa": "The speaker works out regularly.",
        "answer": "trainieren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "trainieren",
          "trainieren",
          "trainieren"
        ],
        "examples": [
          {
            "de": "Die Sprecherin trainiert regelmäßig.",
            "en": "The speaker works out regularly."
          },
          {
            "de": "Er trainiert dreimal pro Woche.",
            "en": "He trains three times per week."
          }
        ]
      },
      {
        "id": "das-fahrzeug",
        "group": "l5-g1",
        "term": "das Fahrzeug",
        "fa": "vehicle",
        "type": "noun",
        "form": "Neuter noun; plural: `die Fahrzeuge`.",
        "source": "Wortschatz.md",
        "example": "Ein Fahrzeug kommt Ihnen entgegen.",
        "exampleFa": "A vehicle is coming toward you.",
        "cloze": "Ein ____ kommt Ihnen entgegen.",
        "clozeFa": "A vehicle is coming toward you.",
        "answer": "Fahrzeug",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Fahrzeug",
          "Fahrzeug",
          "Fahrzeug"
        ],
        "examples": [
          {
            "de": "Ein Fahrzeug kommt Ihnen entgegen.",
            "en": "A vehicle is coming toward you."
          },
          {
            "de": "Das Fahrzeug muss sofort anhalten.",
            "en": "The vehicle must stop immediately."
          }
        ]
      },
      {
        "id": "vorher",
        "group": "l5-g1",
        "term": "vorher",
        "fa": "before; beforehand; previously",
        "type": "verb",
        "form": "Adverb; often used as the reference point in a comparison.",
        "source": "Wortschatz.md",
        "example": "Nach dem Kurs konnte sie besser Englisch als vorher.",
        "exampleFa": "After the course, she knew English better than before.",
        "cloze": "Nach dem Kurs konnte sie besser Englisch als ____.",
        "clozeFa": "After the course, she knew English better than before.",
        "answer": "vorher",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "vorher",
          "vorher",
          "vorher"
        ],
        "examples": [
          {
            "de": "Nach dem Kurs konnte sie besser Englisch als vorher.",
            "en": "After the course, she knew English better than before."
          },
          {
            "de": "Ruf mich bitte vorher an.",
            "en": "Please call me beforehand."
          }
        ]
      },
      {
        "id": "jemandem-entgegenkommen",
        "group": "l5-g1",
        "term": "jemandem entgegenkommen",
        "fa": "to approach/come toward someone; to accommodate someone",
        "type": "phrase",
        "form": "Separable verb: `kommt entgegen – kam entgegen – ist entgegengekommen`; takes a dative object.",
        "source": "Wortschatz.md",
        "example": "In Nürnberg kommt Ihnen ein Fahrzeug entgegen.",
        "exampleFa": "In Nuremberg, a vehicle is coming toward you.",
        "cloze": "In Nürnberg kommt Ihnen ein Fahrzeug entgegen. ____",
        "clozeFa": "In Nuremberg, a vehicle is coming toward you.",
        "answer": "jemandem entgegenkommen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "jemandem entgegenkommen",
          "jemandem entgegenkommen",
          "jemandem entgegenkommen"
        ],
        "examples": [
          {
            "de": "In Nürnberg kommt Ihnen ein Fahrzeug entgegen.",
            "en": "In Nuremberg, a vehicle is coming toward you."
          },
          {
            "de": "Auf dem Weg kam mir ein Bus entgegen.",
            "en": "A bus came toward me on the way."
          }
        ]
      },
      {
        "id": "kosten",
        "group": "l5-g1",
        "term": "kosten",
        "fa": "to cost",
        "type": "verb",
        "form": "Regular verb: `kostet – kostete – hat gekostet`; the item is the subject and the price is an accusative expression.",
        "source": "Wortschatz.md",
        "example": "Die Orangen kosten 1,94 Euro.",
        "exampleFa": "The oranges cost 1.94 euros.",
        "cloze": "Die Orangen ____ 1,94 Euro.",
        "clozeFa": "The oranges cost 1.94 euros.",
        "answer": "kosten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "kosten",
          "kosten",
          "kosten"
        ],
        "examples": [
          {
            "de": "Die Orangen kosten 1,94 Euro.",
            "en": "The oranges cost 1.94 euros."
          },
          {
            "de": "Wie viel kostet der Computer?",
            "en": "How much does the computer cost?"
          }
        ]
      },
      {
        "id": "abholen",
        "group": "l5-g2",
        "term": "abholen",
        "fa": "to pick up; to collect",
        "type": "verb",
        "form": "Separable verb: `holt ab – holte ab – hat abgeholt`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Sie können den Computer am Freitag abholen.",
        "exampleFa": "You can pick up the computer on Friday.",
        "cloze": "Sie können den Computer am Freitag ____.",
        "clozeFa": "You can pick up the computer on Friday.",
        "answer": "abholen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "abholen",
          "abholen",
          "abholen"
        ],
        "examples": [
          {
            "de": "Sie können den Computer am Freitag abholen.",
            "en": "You can pick up the computer on Friday."
          },
          {
            "de": "Ich hole dich vom Bahnhof ab.",
            "en": "I will pick you up from the station."
          }
        ]
      },
      {
        "id": "suchen",
        "group": "l5-g2",
        "term": "suchen",
        "fa": "to look for; to search",
        "type": "verb",
        "form": "Regular verb: `sucht – suchte – hat gesucht`; takes a direct accusative object, without `für`.",
        "source": "Wortschatz.md",
        "example": "Die Polizei sucht den Besitzer.",
        "exampleFa": "The police are looking for the owner.",
        "cloze": "Die Polizei sucht den Besitzer. ____",
        "clozeFa": "The police are looking for the owner.",
        "answer": "suchen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "suchen",
          "suchen",
          "suchen"
        ],
        "examples": [
          {
            "de": "Die Polizei sucht den Besitzer.",
            "en": "The police are looking for the owner."
          },
          {
            "de": "Ich suche meinen Schlüssel.",
            "en": "I am looking for my key."
          }
        ]
      },
      {
        "id": "die-orange",
        "group": "l5-g2",
        "term": "die Orange",
        "fa": "orange",
        "type": "noun",
        "form": "Feminine noun; plural: `die Orangen`.",
        "source": "Wortschatz.md",
        "example": "Orangen kosten heute 1,94 Euro.",
        "exampleFa": "Oranges cost 1.94 euros today.",
        "cloze": "____n kosten heute 1,94 Euro.",
        "clozeFa": "Oranges cost 1.94 euros today.",
        "answer": "Orange",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Orange",
          "Orange",
          "Orange"
        ],
        "examples": [
          {
            "de": "Orangen kosten heute 1,94 Euro.",
            "en": "Oranges cost 1.94 euros today."
          },
          {
            "de": "Ich kaufe ein Kilo Orangen.",
            "en": "I am buying one kilogram of oranges."
          }
        ]
      },
      {
        "id": "regelmaessig",
        "group": "l5-g2",
        "term": "regelmäßig",
        "fa": "regularly; regular",
        "type": "verb",
        "form": "Adjective/adverb; used adverbially, it has no ending.",
        "source": "Wortschatz.md",
        "example": "Sie trainiert regelmäßig im Fitnessstudio.",
        "exampleFa": "She works out regularly at the gym.",
        "cloze": "Sie trainiert ____ im Fitnessstudio.",
        "clozeFa": "She works out regularly at the gym.",
        "answer": "regelmäßig",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "regelmäßig",
          "regelmäßig",
          "regelmäßig"
        ],
        "examples": [
          {
            "de": "Sie trainiert regelmäßig im Fitnessstudio.",
            "en": "She works out regularly at the gym."
          },
          {
            "de": "Regelmäßige Bewegung ist gesund.",
            "en": "Regular exercise is healthy."
          }
        ]
      },
      {
        "id": "fuer-jemanden-das-richtige-sein",
        "group": "l5-g2",
        "term": "für jemanden das Richtige sein",
        "fa": "to be right/suitable for someone",
        "type": "phrase",
        "form": "`für + Akkusativ`; `das Richtige` is a nominalized adjective, and `jeden` means “everyone/anyone” in the accusative.",
        "source": "Wortschatz.md",
        "example": "Internetkurse sind nicht für jeden das Richtige.",
        "exampleFa": "Online courses are not right for everyone.",
        "cloze": "Internetkurse sind nicht für jeden das Richtige. ____",
        "clozeFa": "Online courses are not right for everyone.",
        "answer": "für jemanden das Richtige sein",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "für jemanden das Richtige sein",
          "für jemanden das Richtige sein",
          "für jemanden das Richtige sein"
        ],
        "examples": [
          {
            "de": "Internetkurse sind nicht für jeden das Richtige.",
            "en": "Online courses are not right for everyone."
          },
          {
            "de": "Dieser Beruf ist genau das Richtige für sie.",
            "en": "This profession is exactly right for her."
          }
        ]
      },
      {
        "id": "etwas-englisch-koennen",
        "group": "l5-g2",
        "term": "etwas Englisch können",
        "fa": "to know/speak some English",
        "type": "phrase",
        "form": "`etwas` means “some/a little” here; `können` can be used directly with a language when the ability to speak or understand it is understood.",
        "source": "Wortschatz.md",
        "example": "Teresa konnte schon etwas Englisch.",
        "exampleFa": "Teresa already knew some English.",
        "cloze": "Teresa konnte schon etwas Englisch. ____",
        "clozeFa": "Teresa already knew some English.",
        "answer": "etwas Englisch können",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "etwas Englisch können",
          "etwas Englisch können",
          "etwas Englisch können"
        ],
        "examples": [
          {
            "de": "Teresa konnte schon etwas Englisch.",
            "en": "Teresa already knew some English."
          },
          {
            "de": "Kannst du Englisch?",
            "en": "Can you speak English?"
          }
        ]
      },
      {
        "id": "empfehlen",
        "group": "l5-g2",
        "term": "empfehlen",
        "fa": "to recommend",
        "type": "verb",
        "form": "Strong verb: `empfiehlt – empfahl – hat empfohlen`; pattern: `jemandem` (Dativ) `etwas` (Akkusativ) empfehlen or `jemandem empfehlen, etwas zu tun`.",
        "source": "Wortschatz.md",
        "example": "Sie empfiehlt niemandem, dort zu lernen.",
        "exampleFa": "She does not recommend that anyone study there.",
        "cloze": "Sie empfiehlt niemandem, dort zu lernen. ____",
        "clozeFa": "She does not recommend that anyone study there.",
        "answer": "empfehlen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "empfehlen",
          "empfehlen",
          "empfehlen"
        ],
        "examples": [
          {
            "de": "Sie empfiehlt niemandem, dort zu lernen.",
            "en": "She does not recommend that anyone study there."
          },
          {
            "de": "Kannst du mir einen Sprachkurs empfehlen?",
            "en": "Can you recommend a language course to me?"
          }
        ]
      },
      {
        "id": "besser-werden",
        "group": "l5-g2",
        "term": "besser werden",
        "fa": "to improve; to get better",
        "type": "phrase",
        "form": "Change-of-state construction: `wird besser – wurde besser – ist besser geworden`; the perfect uses `sein`.",
        "source": "Wortschatz.md",
        "example": "Sein Englisch ist viel besser geworden.",
        "exampleFa": "His English has become much better.",
        "cloze": "Sein Englisch ist viel besser geworden. ____",
        "clozeFa": "His English has become much better.",
        "answer": "besser werden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "besser werden",
          "besser werden",
          "besser werden"
        ],
        "examples": [
          {
            "de": "Sein Englisch ist viel besser geworden.",
            "en": "His English has become much better."
          },
          {
            "de": "Das Wetter wird langsam besser.",
            "en": "The weather is slowly getting better."
          }
        ]
      },
      {
        "id": "viel-besser-als",
        "group": "l5-g2",
        "term": "viel besser als",
        "fa": "much better than",
        "type": "phrase",
        "form": "`besser` is the irregular comparative of `gut`; `viel` intensifies it, and `als` introduces the unequal comparison.",
        "source": "Wortschatz.md",
        "example": "Sie konnte viel besser Englisch als vorher.",
        "exampleFa": "Her English was much better than before.",
        "cloze": "Sie konnte ____ besser Englisch als vorher.",
        "clozeFa": "Her English was much better than before.",
        "answer": "viel",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "viel besser als",
          "viel besser als",
          "viel"
        ],
        "examples": [
          {
            "de": "Sie konnte viel besser Englisch als vorher.",
            "en": "Her English was much better than before."
          },
          {
            "de": "Der zweite Kurs ist viel besser als der erste.",
            "en": "The second course is much better than the first."
          }
        ]
      },
      {
        "id": "das-medikament",
        "group": "l5-g2",
        "term": "das Medikament",
        "fa": "medication; medicine; drug",
        "type": "noun",
        "form": "Neuter noun; plural: `die Medikamente`; genitive singular: `eines Medikaments`.",
        "source": "Wortschatz.md",
        "example": "Die Polizei sucht den Besitzer eines Medikaments.",
        "exampleFa": "The police are looking for the owner of some medication.",
        "cloze": "Die Polizei sucht den Besitzer eines ____s.",
        "clozeFa": "The police are looking for the owner of some medication.",
        "answer": "Medikament",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Medikament",
          "Medikament",
          "Medikament"
        ],
        "examples": [
          {
            "de": "Die Polizei sucht den Besitzer eines Medikaments.",
            "en": "The police are looking for the owner of some medication."
          },
          {
            "de": "Nehmen Sie dieses Medikament zweimal täglich.",
            "en": "Take this medication twice daily."
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
    "grammar": {
      "id": "l5-b1-grammar",
      "icon": "G",
      "title": "Relativsätze",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "Relative pronoun as subject",
          "body": "The relative pronoun agrees with the noun in gender and number; its case depends on its role inside the relative clause.",
          "example": "Die Kollegin, die neben mir arbeitet, kommt aus der Schweiz.",
          "emphasis": [
            "die",
            "arbeitet"
          ]
        },
        {
          "title": "Accusative and dative forms",
          "body": "Use den for a masculine accusative object and dem or der when the relative pronoun is dative.",
          "example": "Der Kunde, dem ich gestern geholfen habe, hat sich heute bedankt.",
          "emphasis": [
            "dem",
            "habe"
          ]
        },
        {
          "title": "Relative clause with a preposition",
          "body": "A required preposition stands directly before the relative pronoun, and the verb remains at the end.",
          "example": "Das ist die Firma, bei der ich mich letzte Woche beworben habe.",
          "emphasis": [
            "bei",
            "der",
            "habe"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 6,
    "code": "Set 06",
    "title": "Wortschatz Set 6",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "nach-fuenf-monaten",
        "group": "l6-g1",
        "term": "nach fünf Monaten",
        "fa": "after five months",
        "type": "phrase",
        "form": "`nach + Dativ`; dative plural `Monaten` receives `-n`.",
        "source": "Wortschatz.md",
        "example": "Nach fünf Monaten hörte sie mit dem Kurs auf.",
        "exampleFa": "She stopped the course after five months.",
        "cloze": "____ hörte sie mit dem Kurs auf.",
        "clozeFa": "She stopped the course after five months.",
        "answer": "nach fünf Monaten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "nach fünf Monaten",
          "nach fünf Monaten",
          "nach fünf Monaten"
        ],
        "examples": [
          {
            "de": "Nach fünf Monaten hörte sie mit dem Kurs auf.",
            "en": "She stopped the course after five months."
          },
          {
            "de": "Nach fünf Monaten sprach sie besser Englisch.",
            "en": "After five months, she spoke better English."
          }
        ]
      },
      {
        "id": "niemand-niemandem",
        "group": "l6-g1",
        "term": "niemand / niemandem",
        "fa": "nobody; no one / to nobody",
        "type": "phrase",
        "form": "Indefinite pronoun; nominative `niemand`, accusative usually `niemanden`, dative `niemandem`.",
        "source": "Wortschatz.md",
        "example": "Niemand kennt die Antwort.",
        "exampleFa": "Nobody knows the answer.",
        "cloze": "____ kennt die Antwort.",
        "clozeFa": "Nobody knows the answer.",
        "answer": "niemand",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "niemand / niemandem",
          "niemand / niemandem",
          "niemand"
        ],
        "examples": [
          {
            "de": "Niemand kennt die Antwort.",
            "en": "Nobody knows the answer."
          },
          {
            "de": "Sie empfiehlt niemandem den Kurs.",
            "en": "She recommends the course to no one."
          }
        ]
      },
      {
        "id": "die-polizei",
        "group": "l6-g1",
        "term": "die Polizei",
        "fa": "police",
        "type": "noun",
        "form": "Feminine collective noun; normally takes a singular verb.",
        "source": "Wortschatz.md",
        "example": "Die Polizei sucht den Besitzer.",
        "exampleFa": "The police are looking for the owner.",
        "cloze": "Die ____ sucht den Besitzer.",
        "clozeFa": "The police are looking for the owner.",
        "answer": "Polizei",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Polizei",
          "Polizei",
          "Polizei"
        ],
        "examples": [
          {
            "de": "Die Polizei sucht den Besitzer.",
            "en": "The police are looking for the owner."
          },
          {
            "de": "Die Polizei kommt sofort.",
            "en": "The police are coming immediately."
          }
        ]
      },
      {
        "id": "die-online-sprachschule",
        "group": "l6-g1",
        "term": "die Online-Sprachschule",
        "fa": "online language school",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Online-Sprachschulen`; location uses `an + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Sie lernt an einer Online-Sprachschule.",
        "exampleFa": "She studies at an online language school.",
        "cloze": "Sie lernt an einer ____.",
        "clozeFa": "She studies at an online language school.",
        "answer": "Online-Sprachschule",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Online-Sprachschule",
          "Online-Sprachschule",
          "Online-Sprachschule"
        ],
        "examples": [
          {
            "de": "Sie lernt an einer Online-Sprachschule.",
            "en": "She studies at an online language school."
          },
          {
            "de": "Die Online-Sprachschule bietet mehrere Kurse an.",
            "en": "The online language school offers several courses."
          }
        ]
      },
      {
        "id": "langweilig",
        "group": "l6-g1",
        "term": "langweilig",
        "fa": "boring",
        "type": "adjective",
        "form": "Adjective; after `sein` or as an evaluation after `finden`, it has no ending.",
        "source": "Wortschatz.md",
        "example": "Der Kurs ist langweilig.",
        "exampleFa": "The course is boring.",
        "cloze": "Der Kurs ist ____.",
        "clozeFa": "The course is boring.",
        "answer": "langweilig",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "langweilig",
          "langweilig",
          "langweilig"
        ],
        "examples": [
          {
            "de": "Der Kurs ist langweilig.",
            "en": "The course is boring."
          },
          {
            "de": "Sie fand den Sprachkurs langweilig.",
            "en": "She found the language course boring."
          }
        ]
      },
      {
        "id": "dieselben-wie",
        "group": "l6-g1",
        "term": "dieselben ... wie ...",
        "fa": "the same ... as ...",
        "type": "phrase",
        "form": "`derselbe` takes endings like a definite article plus adjective; `wie` introduces an equal or identical comparison.",
        "source": "Wortschatz.md",
        "example": "Dennis hatte dieselben Probleme wie Teresa.",
        "exampleFa": "Dennis had the same problems as Teresa.",
        "cloze": "Dennis hatte ____ Probleme wie Teresa.",
        "clozeFa": "Dennis had the same problems as Teresa.",
        "answer": "dieselben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "dieselben ... wie ...",
          "dieselben ... wie ...",
          "dieselben"
        ],
        "examples": [
          {
            "de": "Dennis hatte dieselben Probleme wie Teresa.",
            "en": "Dennis had the same problems as Teresa."
          },
          {
            "de": "Wir besuchen dieselbe Sprachschule wie unsere Freunde.",
            "en": "We attend the same language school as our friends."
          }
        ]
      },
      {
        "id": "weiterlernen",
        "group": "l6-g1",
        "term": "weiterlernen",
        "fa": "to continue learning; to keep studying",
        "type": "verb",
        "form": "Separable verb: `lernt weiter – lernte weiter – hat weitergelernt`; after `möchte`, use the infinitive without `zu`.",
        "source": "Wortschatz.md",
        "example": "Dennis möchte weiter Englisch lernen.",
        "exampleFa": "Dennis would like to continue learning English.",
        "cloze": "Dennis möchte weiter Englisch lernen. ____",
        "clozeFa": "Dennis would like to continue learning English.",
        "answer": "weiterlernen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "weiterlernen",
          "weiterlernen",
          "weiterlernen"
        ],
        "examples": [
          {
            "de": "Dennis möchte weiter Englisch lernen.",
            "en": "Dennis would like to continue learning English."
          },
          {
            "de": "Nach dem Kurs lernt sie selbstständig weiter.",
            "en": "After the course, she continues studying independently."
          }
        ]
      },
      {
        "id": "passiv",
        "group": "l6-g1",
        "term": "passiv",
        "fa": "passive",
        "type": "adjective",
        "form": "Adjective; `zu passiv` means “too passive.”",
        "source": "Wortschatz.md",
        "example": "Sie findet Lernen am Computer zu passiv.",
        "exampleFa": "She finds learning on a computer too passive.",
        "cloze": "Sie findet Lernen am Computer zu ____.",
        "clozeFa": "She finds learning on a computer too passive.",
        "answer": "passiv",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "passiv",
          "passiv",
          "passiv"
        ],
        "examples": [
          {
            "de": "Sie findet Lernen am Computer zu passiv.",
            "en": "She finds learning on a computer too passive."
          },
          {
            "de": "Im Unterricht möchte er nicht nur passiv zuhören.",
            "en": "In class, he does not only want to listen passively."
          }
        ]
      },
      {
        "id": "der-nordosten",
        "group": "l6-g1",
        "term": "der Nordosten",
        "fa": "northeast",
        "type": "noun",
        "form": "Masculine direction/region noun; `im Nordosten` means “in the northeast” (`im = in dem`).",
        "source": "Wortschatz.md",
        "example": "Im Nordosten kann es schneien.",
        "exampleFa": "It may snow in the northeast.",
        "cloze": "Im ____ kann es schneien.",
        "clozeFa": "It may snow in the northeast.",
        "answer": "Nordosten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Nordosten",
          "Nordosten",
          "Nordosten"
        ],
        "examples": [
          {
            "de": "Im Nordosten kann es schneien.",
            "en": "It may snow in the northeast."
          },
          {
            "de": "Der Wind kommt aus Nordosten.",
            "en": "The wind is coming from the northeast."
          }
        ]
      },
      {
        "id": "der-besitzer-die-besitzerin",
        "group": "l6-g1",
        "term": "der Besitzer / die Besitzerin",
        "fa": "male owner / female owner",
        "type": "noun",
        "form": "Plural: `die Besitzer / die Besitzerinnen`; often followed by a genitive attribute.",
        "source": "Wortschatz.md",
        "example": "Die Polizei sucht den Besitzer eines Medikaments.",
        "exampleFa": "The police are looking for the owner of some medication.",
        "cloze": "Die Polizei sucht den ____ eines Medikaments.",
        "clozeFa": "The police are looking for the owner of some medication.",
        "answer": "Besitzer",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Besitzer / die Besitzerin",
          "Besitzer / die Besitzerin",
          "Besitzer"
        ],
        "examples": [
          {
            "de": "Die Polizei sucht den Besitzer eines Medikaments.",
            "en": "The police are looking for the owner of some medication."
          },
          {
            "de": "Wem gehört das? Wir suchen die Besitzerin.",
            "en": "Who does this belong to? We are looking for the owner."
          }
        ]
      },
      {
        "id": "was-etwas-betrifft",
        "group": "l6-g2",
        "term": "was etwas betrifft",
        "fa": "as far as something is concerned; regarding something",
        "type": "phrase",
        "form": "Fixed expression; `betreffen` takes the accusative, and the verb stands at the end of the `was` clause.",
        "source": "Wortschatz.md",
        "example": "Was den Umweltschutz betrifft, ist er pessimistisch.",
        "exampleFa": "As far as environmental protection is concerned, he is pessimistic.",
        "cloze": "____ den Umweltschutz betrifft, ist er pessimistisch.",
        "clozeFa": "As far as environmental protection is concerned, he is pessimistic.",
        "answer": "was",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "was etwas betrifft",
          "was etwas betrifft",
          "was"
        ],
        "examples": [
          {
            "de": "Was den Umweltschutz betrifft, ist er pessimistisch.",
            "en": "As far as environmental protection is concerned, he is pessimistic."
          },
          {
            "de": "Was die Kosten betrifft, habe ich eine Frage.",
            "en": "Regarding the costs, I have a question."
          }
        ]
      },
      {
        "id": "der-sprachkurs",
        "group": "l6-g2",
        "term": "der Sprachkurs",
        "fa": "language course",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Sprachkurse`.",
        "source": "Wortschatz.md",
        "example": "Teresa fand den Sprachkurs langweilig.",
        "exampleFa": "Teresa found the language course boring.",
        "cloze": "Teresa fand den ____ langweilig.",
        "clozeFa": "Teresa found the language course boring.",
        "answer": "Sprachkurs",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Sprachkurs",
          "Sprachkurs",
          "Sprachkurs"
        ],
        "examples": [
          {
            "de": "Teresa fand den Sprachkurs langweilig.",
            "en": "Teresa found the language course boring."
          },
          {
            "de": "Der Sprachkurs dauert fünf Monate.",
            "en": "The language course lasts five months."
          }
        ]
      },
      {
        "id": "die-feuerwehr",
        "group": "l6-g2",
        "term": "die Feuerwehr",
        "fa": "fire service; fire brigade; fire department",
        "type": "noun",
        "form": "Feminine collective noun; people working there are `Feuerwehrleute`.",
        "source": "Wortschatz.md",
        "example": "Die Feuerwehr löscht Brände.",
        "exampleFa": "The fire service extinguishes fires.",
        "cloze": "Die ____ löscht Brände.",
        "clozeFa": "The fire service extinguishes fires.",
        "answer": "Feuerwehr",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Feuerwehr",
          "Feuerwehr",
          "Feuerwehr"
        ],
        "examples": [
          {
            "de": "Die Feuerwehr löscht Brände.",
            "en": "The fire service extinguishes fires."
          },
          {
            "de": "Sie arbeitet am Institut der Feuerwehr.",
            "en": "She works at the fire service institute."
          }
        ]
      },
      {
        "id": "nachdenken",
        "group": "l6-g2",
        "term": "nachdenken",
        "fa": "to think; to reflect; to think carefully",
        "type": "verb",
        "form": "Separable strong verb: `denkt nach – dachte nach – hat nachgedacht`; often used with `über + Akkusativ`.",
        "source": "Wortschatz.md",
        "example": "Beim Einkaufen sollte man nachdenken.",
        "exampleFa": "One should think carefully while shopping.",
        "cloze": "Beim Einkaufen sollte man ____.",
        "clozeFa": "One should think carefully while shopping.",
        "answer": "nachdenken",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "nachdenken",
          "nachdenken",
          "nachdenken"
        ],
        "examples": [
          {
            "de": "Beim Einkaufen sollte man nachdenken.",
            "en": "One should think carefully while shopping."
          },
          {
            "de": "Ich denke über das Problem nach.",
            "en": "I am thinking about the problem."
          }
        ]
      },
      {
        "id": "versuchen-etwas-zu-tun",
        "group": "l6-g2",
        "term": "versuchen, etwas zu tun",
        "fa": "to try to do something",
        "type": "phrase",
        "form": "Regular verb: `versucht – versuchte – hat versucht`; followed by an infinitive clause with `zu`.",
        "source": "Wortschatz.md",
        "example": "Die Frau versucht, Wasser zu sparen.",
        "exampleFa": "The woman tries to conserve water.",
        "cloze": "Die Frau versucht, Wasser zu sparen. ____",
        "clozeFa": "The woman tries to conserve water.",
        "answer": "versuchen, etwas zu tun",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "versuchen, etwas zu tun",
          "versuchen, etwas zu tun",
          "versuchen, etwas zu tun"
        ],
        "examples": [
          {
            "de": "Die Frau versucht, Wasser zu sparen.",
            "en": "The woman tries to conserve water."
          },
          {
            "de": "Sie versucht nicht, Wasser zu sparen.",
            "en": "She does not try to conserve water."
          }
        ]
      },
      {
        "id": "die-wetterstation",
        "group": "l6-g2",
        "term": "die Wetterstation",
        "fa": "weather station",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Wetterstationen`; location uses `auf + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Die Arbeit auf der Wetterstation war interessant.",
        "exampleFa": "The work at the weather station was interesting.",
        "cloze": "Die Arbeit auf der ____ war interessant.",
        "clozeFa": "The work at the weather station was interesting.",
        "answer": "Wetterstation",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Wetterstation",
          "Wetterstation",
          "Wetterstation"
        ],
        "examples": [
          {
            "de": "Die Arbeit auf der Wetterstation war interessant.",
            "en": "The work at the weather station was interesting."
          },
          {
            "de": "Sie arbeitet auf einer Wetterstation.",
            "en": "She works at a weather station."
          }
        ]
      },
      {
        "id": "jemandem-gefallen",
        "group": "l6-g2",
        "term": "jemandem gefallen",
        "fa": "to please someone; to be liked by someone",
        "type": "phrase",
        "form": "Strong verb: `gefällt – gefiel – hat gefallen`. The person is dative; the thing liked is the subject.",
        "source": "Wortschatz.md",
        "example": "Die Arbeit gefällt ihr.",
        "exampleFa": "She likes the work.",
        "cloze": "Die Arbeit gefällt ihr. ____",
        "clozeFa": "She likes the work.",
        "answer": "jemandem gefallen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "jemandem gefallen",
          "jemandem gefallen",
          "jemandem gefallen"
        ],
        "examples": [
          {
            "de": "Die Arbeit gefällt ihr.",
            "en": "She likes the work."
          },
          {
            "de": "Ihr gefällt nicht, dass sie oft Berichte schreiben muss.",
            "en": "She does not like having to write reports often."
          }
        ]
      },
      {
        "id": "arbeitslos",
        "group": "l6-g2",
        "term": "arbeitslos",
        "fa": "unemployed; jobless",
        "type": "adjective",
        "form": "Adjective; common expression: `arbeitslos werden`.",
        "source": "Wortschatz.md",
        "example": "Sie hat keine Angst, arbeitslos zu werden.",
        "exampleFa": "She is not afraid of becoming unemployed.",
        "cloze": "Sie hat keine Angst, ____ zu werden.",
        "clozeFa": "She is not afraid of becoming unemployed.",
        "answer": "arbeitslos",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "arbeitslos",
          "arbeitslos",
          "arbeitslos"
        ],
        "examples": [
          {
            "de": "Sie hat keine Angst, arbeitslos zu werden.",
            "en": "She is not afraid of becoming unemployed."
          },
          {
            "de": "Er ist seit zwei Monaten arbeitslos.",
            "en": "He has been unemployed for two months."
          }
        ]
      },
      {
        "id": "spannend",
        "group": "l6-g2",
        "term": "spannend",
        "fa": "exciting; fascinating; suspenseful",
        "type": "adjective",
        "form": "Adjective; before a noun, it takes the appropriate ending.",
        "source": "Wortschatz.md",
        "example": "Sie hat viele spannende Ausflüge gemacht.",
        "exampleFa": "She went on many exciting excursions.",
        "cloze": "Sie hat viele ____e Ausflüge gemacht.",
        "clozeFa": "She went on many exciting excursions.",
        "answer": "spannend",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "spannend",
          "spannend",
          "spannend"
        ],
        "examples": [
          {
            "de": "Sie hat viele spannende Ausflüge gemacht.",
            "en": "She went on many exciting excursions."
          },
          {
            "de": "Der Beruf ist spannend.",
            "en": "The profession is exciting."
          }
        ]
      },
      {
        "id": "am-computer-arbeiten",
        "group": "l6-g2",
        "term": "am Computer arbeiten",
        "fa": "to work at/on a computer",
        "type": "phrase",
        "form": "`am = an dem`; `an + Dativ` expresses location here.",
        "source": "Wortschatz.md",
        "example": "Gisela arbeitet viel am Computer.",
        "exampleFa": "Gisela works on the computer a lot.",
        "cloze": "Gisela arbeitet viel am Computer. ____",
        "clozeFa": "Gisela works on the computer a lot.",
        "answer": "am Computer arbeiten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "am Computer arbeiten",
          "am Computer arbeiten",
          "am Computer arbeiten"
        ],
        "examples": [
          {
            "de": "Gisela arbeitet viel am Computer.",
            "en": "Gisela works on the computer a lot."
          },
          {
            "de": "Ich arbeite jeden Tag am Computer.",
            "en": "I work at the computer every day."
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
    "grammar": {
      "id": "l6-b1-grammar",
      "icon": "G",
      "title": "Verben mit Präpositionen",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "für plus accusative",
          "body": "Learn the verb together with its fixed preposition and case, for example sich interessieren für plus accusative.",
          "example": "Meine Schwester interessiert sich seit Kurzem für nachhaltige Architektur.",
          "emphasis": [
            "interessiert",
            "für"
          ]
        },
        {
          "title": "auf plus accusative",
          "body": "Warten auf and sich freuen auf take the accusative when they refer to a person or future event.",
          "example": "Wir warten noch auf die Bestätigung der Ausländerbehörde.",
          "emphasis": [
            "warten",
            "auf"
          ]
        },
        {
          "title": "an plus dative",
          "body": "Teilnehmen an takes the dative; ask woran for things and an wem for people.",
          "example": "Nächsten Monat nehme ich an einem beruflichen Seminar teil.",
          "emphasis": [
            "an",
            "einem",
            "teil"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 7,
    "code": "Set 07",
    "title": "Wortschatz Set 7",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "der-internetkurs",
        "group": "l7-g1",
        "term": "der Internetkurs",
        "fa": "online course; internet-based course",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Internetkurse`.",
        "source": "Wortschatz.md",
        "example": "Teresa begann mit einem Internetkurs.",
        "exampleFa": "Teresa began an online course.",
        "cloze": "Teresa begann mit einem ____.",
        "clozeFa": "Teresa began an online course.",
        "answer": "Internetkurs",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Internetkurs",
          "Internetkurs",
          "Internetkurs"
        ],
        "examples": [
          {
            "de": "Teresa begann mit einem Internetkurs.",
            "en": "Teresa began an online course."
          },
          {
            "de": "Internetkurse sind nicht für jeden das Richtige.",
            "en": "Online courses are not right for everyone."
          }
        ]
      },
      {
        "id": "sich-sorgen-machen",
        "group": "l7-g1",
        "term": "sich Sorgen machen",
        "fa": "to worry; to be concerned",
        "type": "phrase",
        "form": "Reflexive expression: `macht sich Sorgen – machte sich Sorgen – hat sich Sorgen gemacht`. `Sorgen` is the accusative object, so the reflexive pronoun is dative.",
        "source": "Wortschatz.md",
        "example": "Sie macht sich keine Sorgen.",
        "exampleFa": "She is not worried.",
        "cloze": "Sie macht sich keine ____.",
        "clozeFa": "She is not worried.",
        "answer": "Sorgen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich Sorgen machen",
          "sich Sorgen machen",
          "Sorgen"
        ],
        "examples": [
          {
            "de": "Sie macht sich keine Sorgen.",
            "en": "She is not worried."
          },
          {
            "de": "Sie macht sich keine Sorgen, arbeitslos zu werden.",
            "en": "She is not worried about becoming unemployed."
          },
          {
            "de": "Ich mache mir Sorgen um meine Familie.",
            "en": "I am worried about my family."
          }
        ]
      },
      {
        "id": "beim-einkaufen",
        "group": "l7-g1",
        "term": "beim Einkaufen",
        "fa": "while shopping; when shopping",
        "type": "phrase",
        "form": "`beim = bei dem`; `Einkaufen` is a capitalized nominalized infinitive in the dative.",
        "source": "Wortschatz.md",
        "example": "Beim Einkaufen sollte man nachdenken.",
        "exampleFa": "One should think carefully while shopping.",
        "cloze": "____ sollte man nachdenken.",
        "clozeFa": "One should think carefully while shopping.",
        "answer": "beim Einkaufen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "beim Einkaufen",
          "beim Einkaufen",
          "beim Einkaufen"
        ],
        "examples": [
          {
            "de": "Beim Einkaufen sollte man nachdenken.",
            "en": "One should think carefully while shopping."
          },
          {
            "de": "Ich achte beim Einkaufen auf die Preise.",
            "en": "I pay attention to prices when shopping."
          }
        ]
      },
      {
        "id": "das-konzert",
        "group": "l7-g1",
        "term": "das Konzert",
        "fa": "concert",
        "type": "noun",
        "form": "Neuter noun; plural: `die Konzerte`.",
        "source": "Wortschatz.md",
        "example": "Es gibt immer mehr Konzerte für die Umwelt.",
        "exampleFa": "There are more and more concerts for the environment.",
        "cloze": "Es gibt immer mehr ____e für die Umwelt.",
        "clozeFa": "There are more and more concerts for the environment.",
        "answer": "Konzert",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Konzert",
          "Konzert",
          "Konzert"
        ],
        "examples": [
          {
            "de": "Es gibt immer mehr Konzerte für die Umwelt.",
            "en": "There are more and more concerts for the environment."
          },
          {
            "de": "Das Konzert beginnt um acht Uhr.",
            "en": "The concert begins at eight o'clock."
          }
        ]
      },
      {
        "id": "pessimistisch",
        "group": "l7-g1",
        "term": "pessimistisch",
        "fa": "pessimistic",
        "type": "adjective",
        "form": "Adjective; after `sein`, it has no ending.",
        "source": "Wortschatz.md",
        "example": "Der Mann ist pessimistisch.",
        "exampleFa": "The man is pessimistic.",
        "cloze": "Der Mann ist ____.",
        "clozeFa": "The man is pessimistic.",
        "answer": "pessimistisch",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "pessimistisch",
          "pessimistisch",
          "pessimistisch"
        ],
        "examples": [
          {
            "de": "Der Mann ist pessimistisch.",
            "en": "The man is pessimistic."
          },
          {
            "de": "Sie sieht die Zukunft pessimistisch.",
            "en": "She views the future pessimistically."
          }
        ]
      },
      {
        "id": "loeschen",
        "group": "l7-g1",
        "term": "löschen",
        "fa": "to extinguish; to delete",
        "type": "verb",
        "form": "Regular verb: `löscht – löschte – hat gelöscht`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Die Feuerwehr löscht einen Brand.",
        "exampleFa": "The fire service extinguishes a fire.",
        "cloze": "Die Feuerwehr löscht einen Brand. ____",
        "clozeFa": "The fire service extinguishes a fire.",
        "answer": "löschen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "löschen",
          "löschen",
          "löschen"
        ],
        "examples": [
          {
            "de": "Die Feuerwehr löscht einen Brand.",
            "en": "The fire service extinguishes a fire."
          },
          {
            "de": "Ich habe die Datei gelöscht.",
            "en": "I deleted the file."
          }
        ]
      },
      {
        "id": "immer-mehr",
        "group": "l7-g1",
        "term": "immer mehr",
        "fa": "more and more; an increasing number of",
        "type": "phrase",
        "form": "Invariable quantity expression; before a plural noun: `immer mehr + plural noun`.",
        "source": "Wortschatz.md",
        "example": "Es gibt immer mehr Konzerte für die Umwelt.",
        "exampleFa": "There are more and more concerts for the environment.",
        "cloze": "Es gibt ____ Konzerte für die Umwelt.",
        "clozeFa": "There are more and more concerts for the environment.",
        "answer": "immer mehr",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "immer mehr",
          "immer mehr",
          "immer mehr"
        ],
        "examples": [
          {
            "de": "Es gibt immer mehr Konzerte für die Umwelt.",
            "en": "There are more and more concerts for the environment."
          },
          {
            "de": "Immer mehr Menschen sparen Energie.",
            "en": "More and more people are saving energy."
          }
        ]
      },
      {
        "id": "der-arbeitstag",
        "group": "l7-g1",
        "term": "der Arbeitstag",
        "fa": "working day; workday",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Arbeitstage`.",
        "source": "Wortschatz.md",
        "example": "Ihr Arbeitstag ist immer gleich.",
        "exampleFa": "Her working day is always the same.",
        "cloze": "Ihr ____ ist immer gleich.",
        "clozeFa": "Her working day is always the same.",
        "answer": "Arbeitstag",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Arbeitstag",
          "Arbeitstag",
          "Arbeitstag"
        ],
        "examples": [
          {
            "de": "Ihr Arbeitstag ist immer gleich.",
            "en": "Her working day is always the same."
          },
          {
            "de": "Mein Arbeitstag beginnt um acht Uhr.",
            "en": "My working day begins at eight o'clock."
          }
        ]
      },
      {
        "id": "immer-gleich",
        "group": "l7-g1",
        "term": "immer gleich",
        "fa": "always the same",
        "type": "phrase",
        "form": "Adverbial/predicative expression; `gleich` has no adjective ending after `sein`.",
        "source": "Wortschatz.md",
        "example": "Der Arbeitstag ist immer gleich.",
        "exampleFa": "The working day is always the same.",
        "cloze": "Der Arbeitstag ist ____.",
        "clozeFa": "The working day is always the same.",
        "answer": "immer gleich",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "immer gleich",
          "immer gleich",
          "immer gleich"
        ],
        "examples": [
          {
            "de": "Der Arbeitstag ist immer gleich.",
            "en": "The working day is always the same."
          },
          {
            "de": "Die Aufgaben sind nicht immer gleich.",
            "en": "The tasks are not always the same."
          }
        ]
      },
      {
        "id": "das-institut",
        "group": "l7-g1",
        "term": "das Institut",
        "fa": "institute",
        "type": "noun",
        "form": "Neuter noun; plural: `die Institute`; location: `am Institut` (`an dem Institut`).",
        "source": "Wortschatz.md",
        "example": "Ihre erste Arbeit war am Institut der Feuerwehr.",
        "exampleFa": "Her first job was at the fire service institute.",
        "cloze": "Ihre erste Arbeit war am ____ der Feuerwehr.",
        "clozeFa": "Her first job was at the fire service institute.",
        "answer": "Institut",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Institut",
          "Institut",
          "Institut"
        ],
        "examples": [
          {
            "de": "Ihre erste Arbeit war am Institut der Feuerwehr.",
            "en": "Her first job was at the fire service institute."
          },
          {
            "de": "Das Institut veröffentlicht einen Bericht.",
            "en": "The institute publishes a report."
          }
        ]
      },
      {
        "id": "der-meinung-sein-dass",
        "group": "l7-g2",
        "term": "der Meinung sein, dass ...",
        "fa": "to be of the opinion that ...; to believe that ...",
        "type": "noun",
        "form": "Fixed expression with predicate genitive `der Meinung`; the verb in the `dass` clause goes to the end.",
        "source": "Wortschatz.md",
        "example": "Die Frau ist der Meinung, dass man nachdenken sollte.",
        "exampleFa": "The woman believes that one should think carefully.",
        "cloze": "Die Frau ist der ____, dass man nachdenken sollte.",
        "clozeFa": "The woman believes that one should think carefully.",
        "answer": "Meinung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Meinung sein, dass ...",
          "Meinung sein, dass ...",
          "Meinung"
        ],
        "examples": [
          {
            "de": "Die Frau ist der Meinung, dass man nachdenken sollte.",
            "en": "The woman believes that one should think carefully."
          },
          {
            "de": "Ich bin der Meinung, dass Umweltschutz wichtig ist.",
            "en": "I believe that environmental protection is important."
          }
        ]
      },
      {
        "id": "der-bericht",
        "group": "l7-g2",
        "term": "der Bericht",
        "fa": "report",
        "type": "noun",
        "form": "Masculine noun; plural: `die Berichte`; common expression: `einen Bericht schreiben`.",
        "source": "Wortschatz.md",
        "example": "Sie muss oft Berichte schreiben.",
        "exampleFa": "She often has to write reports.",
        "cloze": "Sie muss oft ____e schreiben.",
        "clozeFa": "She often has to write reports.",
        "answer": "Bericht",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Bericht",
          "Bericht",
          "Bericht"
        ],
        "examples": [
          {
            "de": "Sie muss oft Berichte schreiben.",
            "en": "She often has to write reports."
          },
          {
            "de": "Der Bericht ist schon fertig.",
            "en": "The report is already finished."
          }
        ]
      },
      {
        "id": "das-energieproblem",
        "group": "l7-g2",
        "term": "das Energieproblem",
        "fa": "energy problem",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Energieprobleme`. The final noun `Problem` determines the gender.",
        "source": "Wortschatz.md",
        "example": "Man kann das Energieproblem lösen.",
        "exampleFa": "The energy problem can be solved.",
        "cloze": "Man kann das ____ lösen.",
        "clozeFa": "The energy problem can be solved.",
        "answer": "Energieproblem",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Energieproblem",
          "Energieproblem",
          "Energieproblem"
        ],
        "examples": [
          {
            "de": "Man kann das Energieproblem lösen.",
            "en": "The energy problem can be solved."
          },
          {
            "de": "Das Energieproblem ist kompliziert.",
            "en": "The energy problem is complicated."
          }
        ]
      },
      {
        "id": "loesen",
        "group": "l7-g2",
        "term": "lösen",
        "fa": "to solve; to loosen; to detach",
        "type": "verb",
        "form": "Regular verb: `löst – löste – hat gelöst`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Wir müssen das Problem lösen.",
        "exampleFa": "We must solve the problem.",
        "cloze": "Wir müssen das Problem ____.",
        "clozeFa": "We must solve the problem.",
        "answer": "lösen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "lösen",
          "lösen",
          "lösen"
        ],
        "examples": [
          {
            "de": "Wir müssen das Problem lösen.",
            "en": "We must solve the problem."
          },
          {
            "de": "Kann man das Energieproblem lösen?",
            "en": "Can the energy problem be solved?"
          }
        ]
      },
      {
        "id": "der-brand",
        "group": "l7-g2",
        "term": "der Brand",
        "fa": "fire; blaze",
        "type": "noun",
        "form": "Masculine noun; plural: `die Brände`.",
        "source": "Wortschatz.md",
        "example": "Die Feuerwehr löscht den Brand.",
        "exampleFa": "The fire service extinguishes the fire.",
        "cloze": "Die Feuerwehr löscht den ____.",
        "clozeFa": "The fire service extinguishes the fire.",
        "answer": "Brand",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Brand",
          "Brand",
          "Brand"
        ],
        "examples": [
          {
            "de": "Die Feuerwehr löscht den Brand.",
            "en": "The fire service extinguishes the fire."
          },
          {
            "de": "Sie hilft, Brände zu löschen.",
            "en": "She helps to extinguish fires."
          }
        ]
      },
      {
        "id": "mit-16-jahren",
        "group": "l7-g2",
        "term": "mit 16 Jahren",
        "fa": "at the age of 16; at 16",
        "type": "phrase",
        "form": "Age at the time of an event uses `mit + Dativ`; dative plural `Jahren` receives `-n`.",
        "source": "Wortschatz.md",
        "example": "Mit 16 Jahren darf man allein in die Disco gehen.",
        "exampleFa": "At 16, one may go to the nightclub alone.",
        "cloze": "____ darf man allein in die Disco gehen.",
        "clozeFa": "At 16, one may go to the nightclub alone.",
        "answer": "mit 16 Jahren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mit 16 Jahren",
          "mit 16 Jahren",
          "mit 16 Jahren"
        ],
        "examples": [
          {
            "de": "Mit 16 Jahren darf man allein in die Disco gehen.",
            "en": "At 16, one may go to the nightclub alone."
          },
          {
            "de": "Mit 18 Jahren wurde sie Mitglied im Verein.",
            "en": "At 18, she became a member of the club."
          }
        ]
      },
      {
        "id": "der-musikstil",
        "group": "l7-g2",
        "term": "der Musikstil",
        "fa": "musical style; genre",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Musikstile`.",
        "source": "Wortschatz.md",
        "example": "Die Firma berücksichtigt verschiedene Musikstile.",
        "exampleFa": "The company considers different musical styles.",
        "cloze": "Die Firma berücksichtigt verschiedene ____e.",
        "clozeFa": "The company considers different musical styles.",
        "answer": "Musikstil",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Musikstil",
          "Musikstil",
          "Musikstil"
        ],
        "examples": [
          {
            "de": "Die Firma berücksichtigt verschiedene Musikstile.",
            "en": "The company considers different musical styles."
          },
          {
            "de": "Welchen Musikstil hörst du gern?",
            "en": "What style of music do you like listening to?"
          }
        ]
      },
      {
        "id": "verstehen",
        "group": "l7-g2",
        "term": "verstehen",
        "fa": "to understand",
        "type": "verb",
        "form": "Strong verb: `versteht – verstand – hat verstanden`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Das Publikum hat den Rücktritt verstanden.",
        "exampleFa": "The audience understood the decision.",
        "cloze": "Das Publikum hat den Rücktritt verstanden. ____",
        "clozeFa": "The audience understood the decision.",
        "answer": "verstehen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verstehen",
          "verstehen",
          "verstehen"
        ],
        "examples": [
          {
            "de": "Das Publikum hat den Rücktritt verstanden.",
            "en": "The audience understood the decision."
          },
          {
            "de": "Ich verstehe diese Frage nicht.",
            "en": "I do not understand this question."
          }
        ]
      },
      {
        "id": "aufhoeren",
        "group": "l7-g2",
        "term": "aufhören",
        "fa": "to stop; to finish; to quit",
        "type": "verb",
        "form": "Separable verb: `hört auf – hörte auf – hat aufgehört`; can be followed by `mit + Dativ` or an infinitive with `zu`.",
        "source": "Wortschatz.md",
        "example": "Die Gruppe hat aufgehört.",
        "exampleFa": "The group stopped.",
        "cloze": "Die Gruppe hat aufgehört. ____",
        "clozeFa": "The group stopped.",
        "answer": "aufhören",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "aufhören",
          "aufhören",
          "aufhören"
        ],
        "examples": [
          {
            "de": "Die Gruppe hat aufgehört.",
            "en": "The group stopped."
          },
          {
            "de": "Er hört mit der Arbeit auf.",
            "en": "He stops working."
          },
          {
            "de": "Nach fünf Monaten hat sie mit dem Kurs aufgehört.",
            "en": "She stopped the course after five months."
          },
          {
            "de": "Die Frau möchte, dass der Protest aufhört.",
            "en": "The woman wants the protest to stop."
          }
        ]
      },
      {
        "id": "der-hauptbahnhof",
        "group": "l7-g2",
        "term": "der Hauptbahnhof",
        "fa": "central station; main railway station",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Hauptbahnhöfe`; `zum Hauptbahnhof` means “to the central station” (`zum = zu dem`).",
        "source": "Wortschatz.md",
        "example": "Wir fahren zum Hauptbahnhof.",
        "exampleFa": "We are going to the central station.",
        "cloze": "Wir fahren zum ____.",
        "clozeFa": "We are going to the central station.",
        "answer": "Hauptbahnhof",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Hauptbahnhof",
          "Hauptbahnhof",
          "Hauptbahnhof"
        ],
        "examples": [
          {
            "de": "Wir fahren zum Hauptbahnhof.",
            "en": "We are going to the central station."
          },
          {
            "de": "Der Zug kommt am Hauptbahnhof an.",
            "en": "The train arrives at the central station."
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
    "grammar": {
      "id": "l7-b1-grammar",
      "icon": "G",
      "title": "Akkusativ / Dativ",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "Direct and indirect objects",
          "body": "The receiver is usually dative and the thing being transferred is accusative.",
          "example": "Ich schicke meiner Kollegin die aktualisierte Datei noch heute.",
          "emphasis": [
            "meiner",
            "die"
          ]
        },
        {
          "title": "Dative verbs",
          "body": "Some common verbs, including helfen, danken, gefallen, gehören, and antworten, require a dative object.",
          "example": "Der Berater hat dem neuen Mitarbeiter bei der Anmeldung geholfen.",
          "emphasis": [
            "dem",
            "geholfen"
          ]
        },
        {
          "title": "Case after fixed prepositions",
          "body": "Prepositions such as mit always take dative, while ohne always takes accusative.",
          "example": "Ohne meinen Ausweis kann ich mit dem Sachbearbeiter keinen Vertrag abschließen.",
          "emphasis": [
            "meinen",
            "mit",
            "dem"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 8,
    "code": "Set 08",
    "title": "Wortschatz Set 8",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "kompliziert",
        "group": "l8-g1",
        "term": "kompliziert",
        "fa": "complicated; complex",
        "type": "adjective",
        "form": "Adjective; after `sein`, it has no ending.",
        "source": "Wortschatz.md",
        "example": "Die Texte sind kompliziert.",
        "exampleFa": "The lyrics are complicated.",
        "cloze": "Die Texte sind ____.",
        "clozeFa": "The lyrics are complicated.",
        "answer": "kompliziert",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "kompliziert",
          "kompliziert",
          "kompliziert"
        ],
        "examples": [
          {
            "de": "Die Texte sind kompliziert.",
            "en": "The lyrics are complicated."
          },
          {
            "de": "Die Aufgabe ist nicht kompliziert.",
            "en": "The task is not complicated."
          }
        ]
      },
      {
        "id": "einen-bus-nehmen",
        "group": "l8-g1",
        "term": "einen Bus nehmen",
        "fa": "to take a bus",
        "type": "phrase",
        "form": "`Bus` is the accusative object; strong verb: `nimmt – nahm – hat genommen`.",
        "source": "Wortschatz.md",
        "example": "Zum Hauptbahnhof muss man einen Bus nehmen.",
        "exampleFa": "One has to take a bus to the central station.",
        "cloze": "Zum Hauptbahnhof muss man einen ____.",
        "clozeFa": "One has to take a bus to the central station.",
        "answer": "Bus nehmen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "einen Bus nehmen",
          "Bus nehmen",
          "Bus nehmen"
        ],
        "examples": [
          {
            "de": "Zum Hauptbahnhof muss man einen Bus nehmen.",
            "en": "One has to take a bus to the central station."
          },
          {
            "de": "Ich nehme morgens den Bus.",
            "en": "I take the bus in the morning."
          }
        ]
      },
      {
        "id": "der-text",
        "group": "l8-g1",
        "term": "der Text",
        "fa": "text; lyrics",
        "type": "noun",
        "form": "Masculine noun; plural: `die Texte`. In music contexts, it can mean song lyrics.",
        "source": "Wortschatz.md",
        "example": "Die Texte von Marco sind kompliziert.",
        "exampleFa": "Marco's lyrics are complicated.",
        "cloze": "Die ____e von Marco sind kompliziert.",
        "clozeFa": "Marco's lyrics are complicated.",
        "answer": "Text",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Text",
          "Text",
          "Text"
        ],
        "examples": [
          {
            "de": "Die Texte von Marco sind kompliziert.",
            "en": "Marco's lyrics are complicated."
          },
          {
            "de": "Ich verstehe den Text des Liedes.",
            "en": "I understand the lyrics of the song."
          }
        ]
      },
      {
        "id": "die-jeans",
        "group": "l8-g1",
        "term": "die Jeans",
        "fa": "jeans",
        "type": "noun",
        "form": "Usually feminine; singular and plural have the same form: `die Jeans`.",
        "source": "Wortschatz.md",
        "example": "Im neunten Stock gibt es die neuesten Jeans.",
        "exampleFa": "The latest jeans are available on the ninth floor.",
        "cloze": "Im neunten Stock gibt es die neuesten ____.",
        "clozeFa": "The latest jeans are available on the ninth floor.",
        "answer": "Jeans",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Jeans",
          "Jeans",
          "Jeans"
        ],
        "examples": [
          {
            "de": "Im neunten Stock gibt es die neuesten Jeans.",
            "en": "The latest jeans are available on the ninth floor."
          },
          {
            "de": "Diese Jeans kostet 29,50 Euro.",
            "en": "These jeans cost 29.50 euros."
          }
        ]
      },
      {
        "id": "zusammen-mit-anderen",
        "group": "l8-g1",
        "term": "zusammen mit anderen",
        "fa": "together with others",
        "type": "phrase",
        "form": "`mit + Dativ`; `anderen` is a nominalized adjective referring to other people.",
        "source": "Wortschatz.md",
        "example": "Marco arbeitet zusammen mit anderen.",
        "exampleFa": "Marco works together with others.",
        "cloze": "Marco arbeitet ____.",
        "clozeFa": "Marco works together with others.",
        "answer": "zusammen mit anderen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zusammen mit anderen",
          "zusammen mit anderen",
          "zusammen mit anderen"
        ],
        "examples": [
          {
            "de": "Marco arbeitet zusammen mit anderen.",
            "en": "Marco works together with others."
          },
          {
            "de": "Zusammen mit anderen hat er eine Firma gegründet.",
            "en": "Together with others, he founded a company."
          }
        ]
      },
      {
        "id": "im-ausland-studieren",
        "group": "l8-g1",
        "term": "im Ausland studieren",
        "fa": "to study abroad",
        "type": "phrase",
        "form": "`im Ausland` is a location with `in + Dativ`; `studieren` forms its participle without `ge-`: `hat studiert`.",
        "source": "Wortschatz.md",
        "example": "Gisela hat im Ausland studiert.",
        "exampleFa": "Gisela studied abroad.",
        "cloze": "Gisela hat im Ausland studiert. ____",
        "clozeFa": "Gisela studied abroad.",
        "answer": "im Ausland studieren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "im Ausland studieren",
          "im Ausland studieren",
          "im Ausland studieren"
        ],
        "examples": [
          {
            "de": "Gisela hat im Ausland studiert.",
            "en": "Gisela studied abroad."
          },
          {
            "de": "Viele Studierende möchten im Ausland studieren.",
            "en": "Many students would like to study abroad."
          }
        ]
      },
      {
        "id": "heiraten",
        "group": "l8-g1",
        "term": "heiraten",
        "fa": "to marry; to get married",
        "type": "verb",
        "form": "Regular verb: `heiratet – heiratete – hat geheiratet`. The person married is a direct accusative object, without a preposition.",
        "source": "Wortschatz.md",
        "example": "Marco hat geheiratet.",
        "exampleFa": "Marco got married.",
        "cloze": "Marco hat geheiratet. ____",
        "clozeFa": "Marco got married.",
        "answer": "heiraten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "heiraten",
          "heiraten",
          "heiraten"
        ],
        "examples": [
          {
            "de": "Marco hat geheiratet.",
            "en": "Marco got married."
          },
          {
            "de": "Sie heiratet ihren Freund.",
            "en": "She is marrying her boyfriend."
          }
        ]
      },
      {
        "id": "gruenden",
        "group": "l8-g1",
        "term": "gründen",
        "fa": "to found; to establish; to start",
        "type": "verb",
        "form": "Regular verb: `gründet – gründete – hat gegründet`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Marco hat in Australien eine Band gegründet.",
        "exampleFa": "Marco founded a band in Australia.",
        "cloze": "Marco hat in Australien eine Band gegründet. ____",
        "clozeFa": "Marco founded a band in Australia.",
        "answer": "gründen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "gründen",
          "gründen",
          "gründen"
        ],
        "examples": [
          {
            "de": "Marco hat in Australien eine Band gegründet.",
            "en": "Marco founded a band in Australia."
          },
          {
            "de": "Sie möchten eine Firma gründen.",
            "en": "They would like to start a company."
          }
        ]
      },
      {
        "id": "beruecksichtigen",
        "group": "l8-g1",
        "term": "berücksichtigen",
        "fa": "to consider; to take into account",
        "type": "verb",
        "form": "Regular inseparable verb: `berücksichtigt – berücksichtigte – hat berücksichtigt`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Die Plattenfirma berücksichtigt verschiedene Musikstile.",
        "exampleFa": "The record company considers different musical styles.",
        "cloze": "Die Plattenfirma berücksichtigt verschiedene Musikstile. ____",
        "clozeFa": "The record company considers different musical styles.",
        "answer": "berücksichtigen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "berücksichtigen",
          "berücksichtigen",
          "berücksichtigen"
        ],
        "examples": [
          {
            "de": "Die Plattenfirma berücksichtigt verschiedene Musikstile.",
            "en": "The record company considers different musical styles."
          },
          {
            "de": "Wir müssen alle Wünsche berücksichtigen.",
            "en": "We must take all wishes into account."
          }
        ]
      },
      {
        "id": "der-hauptmarkt",
        "group": "l8-g1",
        "term": "der Hauptmarkt",
        "fa": "main market; central market square",
        "type": "noun",
        "form": "Masculine compound noun; `vom Hauptmarkt` means “from the main market” (`vom = von dem`).",
        "source": "Wortschatz.md",
        "example": "Der Bus fährt vom Hauptmarkt ab.",
        "exampleFa": "The bus departs from the main market.",
        "cloze": "Der Bus fährt vom ____ ab.",
        "clozeFa": "The bus departs from the main market.",
        "answer": "Hauptmarkt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Hauptmarkt",
          "Hauptmarkt",
          "Hauptmarkt"
        ],
        "examples": [
          {
            "de": "Der Bus fährt vom Hauptmarkt ab.",
            "en": "The bus departs from the main market."
          },
          {
            "de": "Wir treffen uns am Hauptmarkt.",
            "en": "We are meeting at the main market."
          }
        ]
      },
      {
        "id": "die-einladung",
        "group": "l8-g2",
        "term": "die Einladung",
        "fa": "invitation",
        "type": "noun",
        "form": "Feminine noun; plural: `die Einladungen`; related verb: `einladen`.",
        "source": "Wortschatz.md",
        "example": "Oliver hat nicht über die Einladung gesprochen.",
        "exampleFa": "Oliver did not talk about the invitation.",
        "cloze": "Oliver hat nicht über die ____ gesprochen.",
        "clozeFa": "Oliver did not talk about the invitation.",
        "answer": "Einladung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Einladung",
          "Einladung",
          "Einladung"
        ],
        "examples": [
          {
            "de": "Oliver hat nicht über die Einladung gesprochen.",
            "en": "Oliver did not talk about the invitation."
          },
          {
            "de": "Vielen Dank für die Einladung.",
            "en": "Thank you very much for the invitation."
          },
          {
            "de": "*die Einladung zu + Dativ*: die Einladung zu deiner Grillparty",
            "en": "the invitation to your barbecue party"
          }
        ]
      },
      {
        "id": "fuer-etwas-verantwortlich-sein",
        "group": "l8-g2",
        "term": "für etwas verantwortlich sein",
        "fa": "to be responsible for something",
        "type": "adjective",
        "form": "Fixed adjective-preposition pattern with `für + Akkusativ`.",
        "source": "Wortschatz.md",
        "example": "Marco ist für die Musikauswahl verantwortlich.",
        "exampleFa": "Marco is responsible for the music selection.",
        "cloze": "Marco ist ____ die Musikauswahl verantwortlich.",
        "clozeFa": "Marco is responsible for the music selection.",
        "answer": "für",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "für etwas verantwortlich sein",
          "für etwas verantwortlich sein",
          "für"
        ],
        "examples": [
          {
            "de": "Marco ist für die Musikauswahl verantwortlich.",
            "en": "Marco is responsible for the music selection."
          },
          {
            "de": "Wer ist für das Interview verantwortlich?",
            "en": "Who is responsible for the interview?"
          }
        ]
      },
      {
        "id": "die-plattenfirma",
        "group": "l8-g2",
        "term": "die Plattenfirma",
        "fa": "record company; record label",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Plattenfirmen`.",
        "source": "Wortschatz.md",
        "example": "Marco hat zusammen mit anderen eine Plattenfirma.",
        "exampleFa": "Marco now has a record company together with others.",
        "cloze": "Marco hat zusammen mit anderen eine ____.",
        "clozeFa": "Marco now has a record company together with others.",
        "answer": "Plattenfirma",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Plattenfirma",
          "Plattenfirma",
          "Plattenfirma"
        ],
        "examples": [
          {
            "de": "Marco hat zusammen mit anderen eine Plattenfirma.",
            "en": "Marco now has a record company together with others."
          },
          {
            "de": "Die Plattenfirma arbeitet mit vielen Bands.",
            "en": "The record company works with many bands."
          }
        ]
      },
      {
        "id": "die-band",
        "group": "l8-g2",
        "term": "die Band",
        "fa": "band; musical group",
        "type": "noun",
        "form": "Feminine noun; plural: `die Bands`.",
        "source": "Wortschatz.md",
        "example": "Marco hat eine Band gegründet.",
        "exampleFa": "Marco founded a band.",
        "cloze": "Marco hat eine ____ gegründet.",
        "clozeFa": "Marco founded a band.",
        "answer": "Band",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Band",
          "Band",
          "Band"
        ],
        "examples": [
          {
            "de": "Marco hat eine Band gegründet.",
            "en": "Marco founded a band."
          },
          {
            "de": "Die Band spielt heute Abend.",
            "en": "The band is playing this evening."
          }
        ]
      },
      {
        "id": "ab-10-uhr-abends",
        "group": "l8-g2",
        "term": "ab 10 Uhr abends",
        "fa": "from 10 p.m. onward",
        "type": "phrase",
        "form": "`ab` marks the starting time; `abends` clarifies that the time is in the evening.",
        "source": "Wortschatz.md",
        "example": "In der Disco kann man ab 10 Uhr abends tanzen.",
        "exampleFa": "One can dance at the nightclub from 10 p.m.",
        "cloze": "In der Disco kann man ____ tanzen.",
        "clozeFa": "One can dance at the nightclub from 10 p.m.",
        "answer": "ab 10 Uhr abends",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "ab 10 Uhr abends",
          "ab 10 Uhr abends",
          "ab 10 Uhr abends"
        ],
        "examples": [
          {
            "de": "In der Disco kann man ab 10 Uhr abends tanzen.",
            "en": "One can dance at the nightclub from 10 p.m."
          },
          {
            "de": "Der Eintritt ist ab 10 Uhr möglich.",
            "en": "Admission is possible from 10 o'clock onward."
          }
        ]
      },
      {
        "id": "fuer-29-50-euro",
        "group": "l8-g2",
        "term": "für 29,50 Euro",
        "fa": "for 29.50 euros",
        "type": "phrase",
        "form": "German uses a decimal comma; `Euro` normally has no plural ending after a number.",
        "source": "Wortschatz.md",
        "example": "Heute gibt es die Jeans für 29,50 Euro.",
        "exampleFa": "Today the jeans are available for 29.50 euros.",
        "cloze": "Heute gibt es die Jeans ____.",
        "clozeFa": "Today the jeans are available for 29.50 euros.",
        "answer": "für 29,50 Euro",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "für 29,50 Euro",
          "für 29,50 Euro",
          "für 29,50 Euro"
        ],
        "examples": [
          {
            "de": "Heute gibt es die Jeans für 29,50 Euro.",
            "en": "Today the jeans are available for 29.50 euros."
          },
          {
            "de": "Das T-Shirt kostet 20 Euro.",
            "en": "The T-shirt costs 20 euros."
          }
        ]
      },
      {
        "id": "der-stock",
        "group": "l8-g2",
        "term": "der Stock",
        "fa": "floor; storey",
        "type": "noun",
        "form": "Masculine noun; plural: `die Stockwerke` or regionally `die Stöcke`; `im 9. Stock` is read `im neunten Stock`.",
        "source": "Wortschatz.md",
        "example": "Die Jeans gibt es im neunten Stock.",
        "exampleFa": "The jeans are available on the ninth floor.",
        "cloze": "Die Jeans gibt es im neunten ____.",
        "clozeFa": "The jeans are available on the ninth floor.",
        "answer": "Stock",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Stock",
          "Stock",
          "Stock"
        ],
        "examples": [
          {
            "de": "Die Jeans gibt es im neunten Stock.",
            "en": "The jeans are available on the ninth floor."
          },
          {
            "de": "Unser Büro liegt im zweiten Stock.",
            "en": "Our office is on the second floor."
          }
        ]
      },
      {
        "id": "die-musikauswahl",
        "group": "l8-g2",
        "term": "die Musikauswahl",
        "fa": "music selection; choice of music",
        "type": "noun",
        "form": "Feminine compound noun; normally singular.",
        "source": "Wortschatz.md",
        "example": "Marco ist für die Musikauswahl verantwortlich.",
        "exampleFa": "Marco is responsible for selecting the music.",
        "cloze": "Marco ist für die ____ verantwortlich.",
        "clozeFa": "Marco is responsible for selecting the music.",
        "answer": "Musikauswahl",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Musikauswahl",
          "Musikauswahl",
          "Musikauswahl"
        ],
        "examples": [
          {
            "de": "Marco ist für die Musikauswahl verantwortlich.",
            "en": "Marco is responsible for selecting the music."
          },
          {
            "de": "Die Musikauswahl gefällt dem Publikum.",
            "en": "The audience likes the music selection."
          }
        ]
      },
      {
        "id": "der-ruecktritt",
        "group": "l8-g2",
        "term": "der Rücktritt",
        "fa": "resignation; withdrawal; retirement",
        "type": "noun",
        "form": "Masculine noun; plural: `die Rücktritte`; related verb: `zurücktreten`.",
        "source": "Wortschatz.md",
        "example": "Das Publikum hat den Rücktritt verstanden.",
        "exampleFa": "The audience understood the resignation.",
        "cloze": "Das Publikum hat den ____ verstanden.",
        "clozeFa": "The audience understood the resignation.",
        "answer": "Rücktritt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Rücktritt",
          "Rücktritt",
          "Rücktritt"
        ],
        "examples": [
          {
            "de": "Das Publikum hat den Rücktritt verstanden.",
            "en": "The audience understood the resignation."
          },
          {
            "de": "Der Sänger hat seinen Rücktritt angekündigt.",
            "en": "The singer announced his retirement."
          }
        ]
      },
      {
        "id": "neueste",
        "group": "l8-g2",
        "term": "neueste-",
        "fa": "latest; newest",
        "type": "adjective",
        "form": "Attributive superlative of `neu`; it receives an adjective ending: `die neuesten Jeans`.",
        "source": "Wortschatz.md",
        "example": "Das Geschäft verkauft die neuesten Jeans.",
        "exampleFa": "The shop sells the latest jeans.",
        "cloze": "Das Geschäft verkauft die neuesten Jeans. ____",
        "clozeFa": "The shop sells the latest jeans.",
        "answer": "neueste-",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "neueste-",
          "neueste-",
          "neueste-"
        ],
        "examples": [
          {
            "de": "Das Geschäft verkauft die neuesten Jeans.",
            "en": "The shop sells the latest jeans."
          },
          {
            "de": "Das ist die neueste Mode.",
            "en": "That is the latest fashion."
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
    "grammar": {
      "id": "l8-b1-grammar",
      "icon": "G",
      "title": "Perfekt + Präteritum von sein, haben, Modalverben",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "Perfekt for spoken past",
          "body": "In conversation, use haben or sein plus a past participle for most completed past events.",
          "example": "Wir sind am Samstag umgezogen und haben alle Möbel selbst getragen.",
          "emphasis": [
            "sind",
            "umgezogen",
            "haben",
            "getragen"
          ]
        },
        {
          "title": "war and hatte",
          "body": "Sein and haben are commonly used in the Präteritum, even in everyday speech.",
          "example": "Früher hatte ich einen längeren Arbeitsweg, aber mein altes Büro war ruhiger.",
          "emphasis": [
            "hatte",
            "war"
          ]
        },
        {
          "title": "Modal verbs in Präteritum",
          "body": "Modal verbs are usually simpler and more natural in the Präteritum: konnte, musste, wollte, durfte, sollte.",
          "example": "Wegen des Streiks musste ich zu Hause bleiben und konnte nicht zur Arbeit fahren.",
          "emphasis": [
            "musste",
            "konnte"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 9,
    "code": "Set 09",
    "title": "Wortschatz Set 9",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "das-interview",
        "group": "l9-g1",
        "term": "das Interview",
        "fa": "interview",
        "type": "noun",
        "form": "Neuter noun; plural: `die Interviews`; `mit` requires the dative: `mit einem Interview`.",
        "source": "Wortschatz.md",
        "example": "Die Sendung enthält ein Interview.",
        "exampleFa": "The program contains an interview.",
        "cloze": "Die Sendung enthält ein ____.",
        "clozeFa": "The program contains an interview.",
        "answer": "Interview",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Interview",
          "Interview",
          "Interview"
        ],
        "examples": [
          {
            "de": "Die Sendung enthält ein Interview.",
            "en": "The program contains an interview."
          },
          {
            "de": "Der Journalist führt ein Interview mit der Musikerin.",
            "en": "The journalist conducts an interview with the musician."
          }
        ]
      },
      {
        "id": "nicht-mehr",
        "group": "l9-g1",
        "term": "nicht mehr",
        "fa": "no longer; not anymore",
        "type": "phrase",
        "form": "Negates a continuing action or state. Before a noun, use `kein ... mehr`.",
        "source": "Wortschatz.md",
        "example": "Die Gruppe spielt nicht mehr zusammen.",
        "exampleFa": "The group no longer plays together.",
        "cloze": "Die Gruppe spielt ____ zusammen.",
        "clozeFa": "The group no longer plays together.",
        "answer": "nicht mehr",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "nicht mehr",
          "nicht mehr",
          "nicht mehr"
        ],
        "examples": [
          {
            "de": "Die Gruppe spielt nicht mehr zusammen.",
            "en": "The group no longer plays together."
          },
          {
            "de": "Sie hatte keinen Erfolg mehr.",
            "en": "She was no longer successful."
          }
        ]
      },
      {
        "id": "veroeffentlichen",
        "group": "l9-g1",
        "term": "veröffentlichen",
        "fa": "to publish; to release",
        "type": "verb",
        "form": "Regular inseparable verb: `veröffentlicht – veröffentlichte – hat veröffentlicht`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Der Verein veröffentlicht jedes Jahr eine Festzeitung.",
        "exampleFa": "The club publishes a festival newspaper every year.",
        "cloze": "Der Verein veröffentlicht jedes Jahr eine Festzeitung. ____",
        "clozeFa": "The club publishes a festival newspaper every year.",
        "answer": "veröffentlichen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "veröffentlichen",
          "veröffentlichen",
          "veröffentlichen"
        ],
        "examples": [
          {
            "de": "Der Verein veröffentlicht jedes Jahr eine Festzeitung.",
            "en": "The club publishes a festival newspaper every year."
          },
          {
            "de": "Die Zeitung hat den Artikel veröffentlicht.",
            "en": "The newspaper published the article."
          }
        ]
      },
      {
        "id": "mehr-als",
        "group": "l9-g1",
        "term": "mehr ... als ...",
        "fa": "more ... than ...",
        "type": "phrase",
        "form": "Used for an unequal comparison; use `als`, not `wie`.",
        "source": "Wortschatz.md",
        "example": "Im Verein gibt es mehr Frauen als Männer.",
        "exampleFa": "There are more women than men in the club.",
        "cloze": "Im Verein gibt es ____ Frauen als Männer.",
        "clozeFa": "There are more women than men in the club.",
        "answer": "mehr",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mehr ... als ...",
          "mehr ... als ...",
          "mehr"
        ],
        "examples": [
          {
            "de": "Im Verein gibt es mehr Frauen als Männer.",
            "en": "There are more women than men in the club."
          },
          {
            "de": "Heute kommen mehr Gäste als gestern.",
            "en": "More guests are coming today than yesterday."
          }
        ]
      },
      {
        "id": "sport-treiben",
        "group": "l9-g1",
        "term": "Sport treiben",
        "fa": "to do/play sports; to exercise",
        "type": "phrase",
        "form": "Fixed expression; strong verb: `treibt – trieb – hat getrieben`.",
        "source": "Wortschatz.md",
        "example": "Im Verein kann man Sport treiben.",
        "exampleFa": "One can do sports at the club.",
        "cloze": "Im Verein kann man ____.",
        "clozeFa": "One can do sports at the club.",
        "answer": "Sport treiben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Sport treiben",
          "Sport treiben",
          "Sport treiben"
        ],
        "examples": [
          {
            "de": "Im Verein kann man Sport treiben.",
            "en": "One can do sports at the club."
          },
          {
            "de": "Sie treibt regelmäßig Sport.",
            "en": "She exercises regularly."
          }
        ]
      },
      {
        "id": "voll-mit-etwas-sein",
        "group": "l9-g1",
        "term": "voll mit etwas sein",
        "fa": "to be full of something",
        "type": "phrase",
        "form": "Fixed expression with `mit + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Das Zimmer ist voll mit Sachen.",
        "exampleFa": "The room is full of things.",
        "cloze": "Das Zimmer ist ____ mit Sachen.",
        "clozeFa": "The room is full of things.",
        "answer": "voll",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "voll mit etwas sein",
          "voll mit etwas sein",
          "voll"
        ],
        "examples": [
          {
            "de": "Das Zimmer ist voll mit Sachen.",
            "en": "The room is full of things."
          },
          {
            "de": "Die Wand ist voll mit Postern.",
            "en": "The wall is covered with posters."
          }
        ]
      },
      {
        "id": "das-mitglied",
        "group": "l9-g1",
        "term": "das Mitglied",
        "fa": "member",
        "type": "noun",
        "form": "Neuter noun; plural: `die Mitglieder`; often used with `in + Dativ` or the genitive of an organization.",
        "source": "Wortschatz.md",
        "example": "Sie ist Mitglied in einem Sportverein.",
        "exampleFa": "She is a member of a sports club.",
        "cloze": "Sie ist ____ in einem Sportverein.",
        "clozeFa": "She is a member of a sports club.",
        "answer": "Mitglied",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Mitglied",
          "Mitglied",
          "Mitglied"
        ],
        "examples": [
          {
            "de": "Sie ist Mitglied in einem Sportverein.",
            "en": "She is a member of a sports club."
          },
          {
            "de": "Der Verein hatte Frauen als Mitglieder.",
            "en": "The club had women as members."
          },
          {
            "de": "Der Tauschring Harburg hat über 200 Mitglieder.",
            "en": "The Harburg exchange circle has more than 200 members."
          }
        ]
      },
      {
        "id": "der-krieg",
        "group": "l9-g1",
        "term": "der Krieg",
        "fa": "war",
        "type": "noun",
        "form": "Masculine noun; plural: `die Kriege`; `im Krieg` means “during/in the war.”",
        "source": "Wortschatz.md",
        "example": "Viele Papiere sind im Krieg verloren gegangen.",
        "exampleFa": "Many documents were lost during the war.",
        "cloze": "Viele Papiere sind im ____ verloren gegangen.",
        "clozeFa": "Many documents were lost during the war.",
        "answer": "Krieg",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Krieg",
          "Krieg",
          "Krieg"
        ],
        "examples": [
          {
            "de": "Viele Papiere sind im Krieg verloren gegangen.",
            "en": "Many documents were lost during the war."
          },
          {
            "de": "Der Krieg dauerte mehrere Jahre.",
            "en": "The war lasted several years."
          }
        ]
      },
      {
        "id": "ausbilden",
        "group": "l9-g1",
        "term": "ausbilden",
        "fa": "to train; to educate professionally",
        "type": "verb",
        "form": "Separable regular verb: `bildet aus – bildete aus – hat ausgebildet`; often used in the passive.",
        "source": "Wortschatz.md",
        "example": "Der Verein bildet junge Trainer aus.",
        "exampleFa": "The club trains young coaches.",
        "cloze": "Der Verein bildet junge Trainer aus. ____",
        "clozeFa": "The club trains young coaches.",
        "answer": "ausbilden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "ausbilden",
          "ausbilden",
          "ausbilden"
        ],
        "examples": [
          {
            "de": "Der Verein bildet junge Trainer aus.",
            "en": "The club trains young coaches."
          },
          {
            "de": "Einige Leute wurden im Verein ausgebildet.",
            "en": "Some people were trained at the club."
          }
        ]
      },
      {
        "id": "der-lehrer-die-lehrerin",
        "group": "l9-g1",
        "term": "der Lehrer / die Lehrerin",
        "fa": "male teacher / female teacher",
        "type": "noun",
        "form": "Plural: `die Lehrer / die Lehrerinnen`; after `als`, the role normally has no article.",
        "source": "Wortschatz.md",
        "example": "Einige Mitglieder arbeiten heute als Lehrer.",
        "exampleFa": "Some members work as teachers today.",
        "cloze": "Einige Mitglieder arbeiten heute als ____.",
        "clozeFa": "Some members work as teachers today.",
        "answer": "Lehrer",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Lehrer / die Lehrerin",
          "Lehrer / die Lehrerin",
          "Lehrer"
        ],
        "examples": [
          {
            "de": "Einige Mitglieder arbeiten heute als Lehrer.",
            "en": "Some members work as teachers today."
          },
          {
            "de": "Sie arbeitet als Lehrerin.",
            "en": "She works as a teacher."
          }
        ]
      },
      {
        "id": "die-musiksendung",
        "group": "l9-g2",
        "term": "die Musiksendung",
        "fa": "music program; music broadcast",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Musiksendungen`. The final noun `Sendung` determines the gender.",
        "source": "Wortschatz.md",
        "example": "„Sounds“ ist eine Musiksendung mit einem Interview.",
        "exampleFa": "“Sounds” is a music program featuring an interview.",
        "cloze": "„Sounds“ ist eine ____ mit einem Interview.",
        "clozeFa": "“Sounds” is a music program featuring an interview.",
        "answer": "Musiksendung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Musiksendung",
          "Musiksendung",
          "Musiksendung"
        ],
        "examples": [
          {
            "de": "„Sounds“ ist eine Musiksendung mit einem Interview.",
            "en": "“Sounds” is a music program featuring an interview."
          },
          {
            "de": "Die Musiksendung beginnt um acht Uhr.",
            "en": "The music program begins at eight o'clock."
          }
        ]
      },
      {
        "id": "verloren-gehen",
        "group": "l9-g2",
        "term": "verloren gehen",
        "fa": "to get lost; to be lost; to disappear",
        "type": "phrase",
        "form": "Separable change-of-state verb: `geht verloren – ging verloren – ist verloren gegangen`; the perfect uses `sein`.",
        "source": "Wortschatz.md",
        "example": "Viele Papiere sind verloren gegangen.",
        "exampleFa": "Many documents have been lost.",
        "cloze": "Viele Papiere sind ____ gegangen.",
        "clozeFa": "Many documents have been lost.",
        "answer": "verloren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verloren gehen",
          "verloren gehen",
          "verloren"
        ],
        "examples": [
          {
            "de": "Viele Papiere sind verloren gegangen.",
            "en": "Many documents have been lost."
          },
          {
            "de": "Mein Schlüssel ist gestern verloren gegangen.",
            "en": "My key was lost yesterday."
          }
        ]
      },
      {
        "id": "die-halle",
        "group": "l9-g2",
        "term": "die Halle",
        "fa": "hall; indoor sports hall",
        "type": "noun",
        "form": "Feminine noun; plural: `die Hallen`; location uses `in + Dativ`: `in der Halle`.",
        "source": "Wortschatz.md",
        "example": "Im Winter trainieren wir in der Halle.",
        "exampleFa": "In winter, we train indoors.",
        "cloze": "Im Winter trainieren wir in der ____.",
        "clozeFa": "In winter, we train indoors.",
        "answer": "Halle",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Halle",
          "Halle",
          "Halle"
        ],
        "examples": [
          {
            "de": "Im Winter trainieren wir in der Halle.",
            "en": "In winter, we train indoors."
          },
          {
            "de": "Die Halle ist sehr groß.",
            "en": "The hall is very large."
          }
        ]
      },
      {
        "id": "das-poster",
        "group": "l9-g2",
        "term": "das Poster",
        "fa": "poster",
        "type": "noun",
        "form": "Neuter noun; plural: `die Poster`.",
        "source": "Wortschatz.md",
        "example": "Im Zimmer hängen viele Poster.",
        "exampleFa": "Many posters are hanging in the room.",
        "cloze": "Im Zimmer hängen viele ____.",
        "clozeFa": "Many posters are hanging in the room.",
        "answer": "Poster",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Poster",
          "Poster",
          "Poster"
        ],
        "examples": [
          {
            "de": "Im Zimmer hängen viele Poster.",
            "en": "Many posters are hanging in the room."
          },
          {
            "de": "Sie hängt ein Poster an die Wand.",
            "en": "She hangs a poster on the wall."
          }
        ]
      },
      {
        "id": "verschieden",
        "group": "l9-g2",
        "term": "verschieden",
        "fa": "different; various",
        "type": "verb",
        "form": "Adjective; before a noun, it takes the required adjective ending.",
        "source": "Wortschatz.md",
        "example": "Sie sammelt verschiedene Sachen.",
        "exampleFa": "She collects various things.",
        "cloze": "Sie sammelt ____e Sachen.",
        "clozeFa": "She collects various things.",
        "answer": "verschieden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verschieden",
          "verschieden",
          "verschieden"
        ],
        "examples": [
          {
            "de": "Sie sammelt verschiedene Sachen.",
            "en": "She collects various things."
          },
          {
            "de": "Die Poster zeigen viele verschiedene Schauspieler.",
            "en": "The posters show many different actors."
          }
        ]
      },
      {
        "id": "im-freien",
        "group": "l9-g2",
        "term": "im Freien",
        "fa": "outdoors; in the open air",
        "type": "phrase",
        "form": "Nominalized adjective in the dative: `in dem Freien` → `im Freien`.",
        "source": "Wortschatz.md",
        "example": "Man kann im Freien Sport treiben.",
        "exampleFa": "One can exercise outdoors.",
        "cloze": "Man kann ____ Sport treiben.",
        "clozeFa": "One can exercise outdoors.",
        "answer": "im Freien",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "im Freien",
          "im Freien",
          "im Freien"
        ],
        "examples": [
          {
            "de": "Man kann im Freien Sport treiben.",
            "en": "One can exercise outdoors."
          },
          {
            "de": "Wir essen heute im Freien.",
            "en": "We are eating outdoors today."
          }
        ]
      },
      {
        "id": "die-musikgruppe",
        "group": "l9-g2",
        "term": "die Musikgruppe",
        "fa": "music group; band",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Musikgruppen`.",
        "source": "Wortschatz.md",
        "example": "Die Musikgruppe wird nicht mehr zusammen spielen.",
        "exampleFa": "The music group will no longer play together.",
        "cloze": "Die ____ wird nicht mehr zusammen spielen.",
        "clozeFa": "The music group will no longer play together.",
        "answer": "Musikgruppe",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Musikgruppe",
          "Musikgruppe",
          "Musikgruppe"
        ],
        "examples": [
          {
            "de": "Die Musikgruppe wird nicht mehr zusammen spielen.",
            "en": "The music group will no longer play together."
          },
          {
            "de": "Die Musikgruppe hatte großen Erfolg.",
            "en": "The music group was very successful."
          }
        ]
      },
      {
        "id": "die-kosten-tragen",
        "group": "l9-g2",
        "term": "die Kosten tragen",
        "fa": "to bear/cover the costs",
        "type": "noun",
        "form": "Fixed expression; strong verb: `trägt – trug – hat getragen`.",
        "source": "Wortschatz.md",
        "example": "Die Mitglieder müssen die Kosten alleine tragen.",
        "exampleFa": "The members must bear the costs themselves.",
        "cloze": "Die Mitglieder müssen die ____ alleine tragen.",
        "clozeFa": "The members must bear the costs themselves.",
        "answer": "Kosten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Kosten tragen",
          "Kosten tragen",
          "Kosten"
        ],
        "examples": [
          {
            "de": "Die Mitglieder müssen die Kosten alleine tragen.",
            "en": "The members must bear the costs themselves."
          },
          {
            "de": "Wer trägt die Kosten für die Feier?",
            "en": "Who covers the costs of the celebration?"
          }
        ]
      },
      {
        "id": "die-festzeitung",
        "group": "l9-g2",
        "term": "die Festzeitung",
        "fa": "festival newspaper; commemorative publication",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Festzeitungen`.",
        "source": "Wortschatz.md",
        "example": "Der Verein veröffentlicht eine Festzeitung.",
        "exampleFa": "The club publishes a festival newspaper.",
        "cloze": "Der Verein veröffentlicht eine ____.",
        "clozeFa": "The club publishes a festival newspaper.",
        "answer": "Festzeitung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Festzeitung",
          "Festzeitung",
          "Festzeitung"
        ],
        "examples": [
          {
            "de": "Der Verein veröffentlicht eine Festzeitung.",
            "en": "The club publishes a festival newspaper."
          },
          {
            "de": "In der Festzeitung steht die Geschichte des Vereins.",
            "en": "The history of the club appears in the commemorative publication."
          }
        ]
      },
      {
        "id": "jedes-jahr",
        "group": "l9-g2",
        "term": "jedes Jahr",
        "fa": "every year",
        "type": "phrase",
        "form": "Accusative expression of time without a preposition; `Jahr` is neuter, hence `jedes`.",
        "source": "Wortschatz.md",
        "example": "Der Verein veröffentlicht jedes Jahr eine Zeitung.",
        "exampleFa": "The club publishes a newspaper every year.",
        "cloze": "Der Verein veröffentlicht ____ eine Zeitung.",
        "clozeFa": "The club publishes a newspaper every year.",
        "answer": "jedes Jahr",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "jedes Jahr",
          "jedes Jahr",
          "jedes Jahr"
        ],
        "examples": [
          {
            "de": "Der Verein veröffentlicht jedes Jahr eine Zeitung.",
            "en": "The club publishes a newspaper every year."
          },
          {
            "de": "Wir feiern jedes Jahr zusammen.",
            "en": "We celebrate together every year."
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
    "grammar": {
      "id": "l9-b1-grammar",
      "icon": "G",
      "title": "Wechselpräpositionen",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "Wohin? takes accusative",
          "body": "Use accusative after an, auf, hinter, in, neben, über, unter, vor, and zwischen when the action changes location.",
          "example": "Ich stelle die Pflanzen im Winter vor das große Wohnzimmerfenster.",
          "emphasis": [
            "vor",
            "das"
          ]
        },
        {
          "title": "Wo? takes dative",
          "body": "Use dative with the same prepositions when describing a fixed position or location.",
          "example": "Die Pflanzen stehen jetzt vor dem großen Wohnzimmerfenster.",
          "emphasis": [
            "vor",
            "dem"
          ]
        },
        {
          "title": "Movement versus position",
          "body": "The choice depends on meaning, not only on the verb: ask whether something changes place or remains in one location.",
          "example": "Nach dem Meeting hänge ich den Plan an die Wand; später hängt er an der Wand.",
          "emphasis": [
            "an",
            "die",
            "an",
            "der"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 10,
    "code": "Set 10",
    "title": "Wortschatz Set 10",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "der-schauspieler-die-schauspielerin",
        "group": "l10-g1",
        "term": "der Schauspieler / die Schauspielerin",
        "fa": "male actor / female actor",
        "type": "noun",
        "form": "Plural: `die Schauspieler / die Schauspielerinnen`; dative plural masculine: `den Schauspielern`.",
        "source": "Wortschatz.md",
        "example": "Sie hat Poster von vielen verschiedenen Schauspielern.",
        "exampleFa": "She has posters of many different actors.",
        "cloze": "Sie hat Poster von vielen verschiedenen ____n.",
        "clozeFa": "She has posters of many different actors.",
        "answer": "Schauspieler",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Schauspieler / die Schauspielerin",
          "Schauspieler / die Schauspielerin",
          "Schauspieler"
        ],
        "examples": [
          {
            "de": "Sie hat Poster von vielen verschiedenen Schauspielern.",
            "en": "She has posters of many different actors."
          },
          {
            "de": "Die Schauspielerin spielt die Hauptrolle.",
            "en": "The actress plays the leading role."
          }
        ]
      },
      {
        "id": "die-ordnung",
        "group": "l10-g1",
        "term": "die Ordnung",
        "fa": "order; tidiness",
        "type": "noun",
        "form": "Feminine noun; usually singular in this meaning.",
        "source": "Wortschatz.md",
        "example": "Ordnung ist ihr sehr wichtig.",
        "exampleFa": "Tidiness is very important to her.",
        "cloze": "____ ist ihr sehr wichtig.",
        "clozeFa": "Tidiness is very important to her.",
        "answer": "Ordnung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Ordnung",
          "Ordnung",
          "Ordnung"
        ],
        "examples": [
          {
            "de": "Ordnung ist ihr sehr wichtig.",
            "en": "Tidiness is very important to her."
          },
          {
            "de": "In seinem Zimmer herrscht Ordnung.",
            "en": "His room is tidy and orderly."
          }
        ]
      },
      {
        "id": "zusammen-spielen",
        "group": "l10-g1",
        "term": "zusammen spielen",
        "fa": "to play together",
        "type": "phrase",
        "form": "`zusammen` is an adverb describing the action; in Futur I, the infinitive stands at the end.",
        "source": "Wortschatz.md",
        "example": "Die Musiker spielen gern zusammen.",
        "exampleFa": "The musicians enjoy playing together.",
        "cloze": "Die Musiker spielen gern ____.",
        "clozeFa": "The musicians enjoy playing together.",
        "answer": "zusammen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zusammen spielen",
          "zusammen spielen",
          "zusammen"
        ],
        "examples": [
          {
            "de": "Die Musiker spielen gern zusammen.",
            "en": "The musicians enjoy playing together."
          },
          {
            "de": "Die Gruppe wird nicht mehr zusammen spielen.",
            "en": "The group will no longer play together."
          }
        ]
      },
      {
        "id": "die-rockgruppe",
        "group": "l10-g1",
        "term": "die Rockgruppe",
        "fa": "rock band; rock group",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Rockgruppen`.",
        "source": "Wortschatz.md",
        "example": "Der Sprecher sammelt Bilder von der Rockgruppe Metallica.",
        "exampleFa": "The speaker collects pictures of the rock band Metallica.",
        "cloze": "Der Sprecher sammelt Bilder von der ____ Metallica.",
        "clozeFa": "The speaker collects pictures of the rock band Metallica.",
        "answer": "Rockgruppe",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Rockgruppe",
          "Rockgruppe",
          "Rockgruppe"
        ],
        "examples": [
          {
            "de": "Der Sprecher sammelt Bilder von der Rockgruppe Metallica.",
            "en": "The speaker collects pictures of the rock band Metallica."
          },
          {
            "de": "Die Rockgruppe gibt heute ein Konzert.",
            "en": "The rock band is giving a concert today."
          }
        ]
      },
      {
        "id": "der-fussballstar",
        "group": "l10-g1",
        "term": "der Fußballstar",
        "fa": "football star; soccer star",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Fußballstars`.",
        "source": "Wortschatz.md",
        "example": "Im Zimmer hängen Poster von Fußballstars.",
        "exampleFa": "Posters of football stars hang in the room.",
        "cloze": "Im Zimmer hängen Poster von ____s.",
        "clozeFa": "Posters of football stars hang in the room.",
        "answer": "Fußballstar",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Fußballstar",
          "Fußballstar",
          "Fußballstar"
        ],
        "examples": [
          {
            "de": "Im Zimmer hängen Poster von Fußballstars.",
            "en": "Posters of football stars hang in the room."
          },
          {
            "de": "Der Fußballstar spielt für einen bekannten Verein.",
            "en": "The football star plays for a well-known club."
          }
        ]
      },
      {
        "id": "auf-dem-programm-stehen",
        "group": "l10-g1",
        "term": "auf dem Programm stehen",
        "fa": "to be on the program; to be scheduled; to be included",
        "type": "phrase",
        "form": "Fixed expression with `auf + Dativ`; `stehen` is irregular: `steht – stand – hat gestanden`.",
        "source": "Wortschatz.md",
        "example": "Der Besuch der Insel steht auf dem Programm.",
        "exampleFa": "The visit to the island is on the program.",
        "cloze": "Der Besuch der Insel steht auf dem Programm. ____",
        "clozeFa": "The visit to the island is on the program.",
        "answer": "auf dem Programm stehen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "auf dem Programm stehen",
          "auf dem Programm stehen",
          "auf dem Programm stehen"
        ],
        "examples": [
          {
            "de": "Der Besuch der Insel steht auf dem Programm.",
            "en": "The visit to the island is on the program."
          },
          {
            "de": "Welche Aktivitäten stehen heute auf dem Programm?",
            "en": "Which activities are scheduled for today?"
          }
        ]
      },
      {
        "id": "die-naturlandschaft",
        "group": "l10-g1",
        "term": "die Naturlandschaft",
        "fa": "natural landscape",
        "type": "noun",
        "form": "Feminine noun; plural: `die Naturlandschaften`.",
        "source": "Wortschatz.md",
        "example": "Auf der Insel gibt es wunderschöne Naturlandschaften.",
        "exampleFa": "There are beautiful natural landscapes on the island.",
        "cloze": "Auf der Insel gibt es wunderschöne ____en.",
        "clozeFa": "There are beautiful natural landscapes on the island.",
        "answer": "Naturlandschaft",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Naturlandschaft",
          "Naturlandschaft",
          "Naturlandschaft"
        ],
        "examples": [
          {
            "de": "Auf der Insel gibt es wunderschöne Naturlandschaften.",
            "en": "There are beautiful natural landscapes on the island."
          },
          {
            "de": "Die Naturlandschaft soll geschützt werden.",
            "en": "The natural landscape should be protected."
          }
        ]
      },
      {
        "id": "die-waesche",
        "group": "l10-g1",
        "term": "die Wäsche",
        "fa": "laundry; washing",
        "type": "noun",
        "form": "Feminine collective noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Er wäscht die Wäsche.",
        "exampleFa": "He washes the laundry.",
        "cloze": "Er wäscht die ____.",
        "clozeFa": "He washes the laundry.",
        "answer": "Wäsche",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Wäsche",
          "Wäsche",
          "Wäsche"
        ],
        "examples": [
          {
            "de": "Er wäscht die Wäsche.",
            "en": "He washes the laundry."
          },
          {
            "de": "Die Wäsche ist schon trocken.",
            "en": "The laundry is already dry."
          }
        ]
      },
      {
        "id": "die-situation",
        "group": "l10-g1",
        "term": "die Situation",
        "fa": "situation",
        "type": "noun",
        "form": "Feminine noun; plural: `die Situationen`.",
        "source": "Wortschatz.md",
        "example": "Wir entscheiden je nach Situation.",
        "exampleFa": "We decide depending on the situation.",
        "cloze": "Wir entscheiden je nach ____.",
        "clozeFa": "We decide depending on the situation.",
        "answer": "Situation",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Situation",
          "Situation",
          "Situation"
        ],
        "examples": [
          {
            "de": "Wir entscheiden je nach Situation.",
            "en": "We decide depending on the situation."
          },
          {
            "de": "Die Situation hat sich verändert.",
            "en": "The situation has changed."
          }
        ]
      },
      {
        "id": "sich-mit-jemandem-unterhalten",
        "group": "l10-g1",
        "term": "sich mit jemandem unterhalten",
        "fa": "to talk with someone; to have a conversation with someone",
        "type": "phrase",
        "form": "Reflexive strong verb: `unterhält sich – unterhielt sich – hat sich unterhalten`; `mit + Dativ` introduces the conversation partner.",
        "source": "Wortschatz.md",
        "example": "Der Journalist unterhält sich mit einer Vertreterin.",
        "exampleFa": "The journalist talks with a representative.",
        "cloze": "Der Journalist unterhält sich mit einer Vertreterin. ____",
        "clozeFa": "The journalist talks with a representative.",
        "answer": "sich mit jemandem unterhalten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich mit jemandem unterhalten",
          "sich mit jemandem unterhalten",
          "sich mit jemandem unterhalten"
        ],
        "examples": [
          {
            "de": "Der Journalist unterhält sich mit einer Vertreterin.",
            "en": "The journalist talks with a representative."
          },
          {
            "de": "Ich habe mich lange mit ihr unterhalten.",
            "en": "I talked with her for a long time."
          }
        ]
      },
      {
        "id": "wunderschoen",
        "group": "l10-g2",
        "term": "wunderschön",
        "fa": "beautiful; gorgeous",
        "type": "adjective",
        "form": "Adjective; intensifies `schön`. Before a noun, it takes the appropriate adjective ending.",
        "source": "Wortschatz.md",
        "example": "Dort gibt es wunderschöne Naturlandschaften.",
        "exampleFa": "There are beautiful natural landscapes there.",
        "cloze": "Dort gibt es ____e Naturlandschaften.",
        "clozeFa": "There are beautiful natural landscapes there.",
        "answer": "wunderschön",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "wunderschön",
          "wunderschön",
          "wunderschön"
        ],
        "examples": [
          {
            "de": "Dort gibt es wunderschöne Naturlandschaften.",
            "en": "There are beautiful natural landscapes there."
          },
          {
            "de": "Die Insel ist wunderschön.",
            "en": "The island is beautiful."
          }
        ]
      },
      {
        "id": "froh-sein-dass",
        "group": "l10-g2",
        "term": "froh sein, dass ...",
        "fa": "to be glad that ...",
        "type": "phrase",
        "form": "The `dass` clause explains the reason or content of the feeling; its conjugated verb goes to the end.",
        "source": "Wortschatz.md",
        "example": "Sie ist froh, dass ihr Mann viele Hausarbeiten übernimmt.",
        "exampleFa": "She is glad that her husband takes on many household chores.",
        "cloze": "Sie ist ____, dass ihr Mann viele Hausarbeiten übernimmt.",
        "clozeFa": "She is glad that her husband takes on many household chores.",
        "answer": "froh",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "froh sein, dass ...",
          "froh sein, dass ...",
          "froh"
        ],
        "examples": [
          {
            "de": "Sie ist froh, dass ihr Mann viele Hausarbeiten übernimmt.",
            "en": "She is glad that her husband takes on many household chores."
          },
          {
            "de": "Ich bin froh, dass du da bist.",
            "en": "I am glad that you are here."
          }
        ]
      },
      {
        "id": "das-geschirr",
        "group": "l10-g2",
        "term": "das Geschirr",
        "fa": "dishes; crockery; tableware",
        "type": "noun",
        "form": "Neuter collective noun; normally used without a plural. The usual expression is `das Geschirr spülen`; `waschen` is also understandable.",
        "source": "Wortschatz.md",
        "example": "Der Sprecher wäscht das Geschirr.",
        "exampleFa": "The speaker washes the dishes.",
        "cloze": "Der Sprecher wäscht das ____.",
        "clozeFa": "The speaker washes the dishes.",
        "answer": "Geschirr",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Geschirr",
          "Geschirr",
          "Geschirr"
        ],
        "examples": [
          {
            "de": "Der Sprecher wäscht das Geschirr.",
            "en": "The speaker washes the dishes."
          },
          {
            "de": "Nach dem Essen spüle ich das Geschirr.",
            "en": "I wash the dishes after the meal."
          }
        ]
      },
      {
        "id": "der-besuch",
        "group": "l10-g2",
        "term": "der Besuch",
        "fa": "visit",
        "type": "noun",
        "form": "Masculine noun; plural: `die Besuche`; often followed by a genitive attribute or `bei + Dativ`.",
        "source": "Wortschatz.md",
        "example": "Steht auch der Besuch der Insel auf dem Programm?",
        "exampleFa": "Is a visit to the island also on the program?",
        "cloze": "Steht auch der ____ der Insel auf dem Programm?",
        "clozeFa": "Is a visit to the island also on the program?",
        "answer": "Besuch",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Besuch",
          "Besuch",
          "Besuch"
        ],
        "examples": [
          {
            "de": "Steht auch der Besuch der Insel auf dem Programm?",
            "en": "Is a visit to the island also on the program?"
          },
          {
            "de": "Der Besuch bei unseren Freunden war schön.",
            "en": "The visit to our friends was lovely."
          }
        ]
      },
      {
        "id": "der-sprecher-die-sprecherin",
        "group": "l10-g2",
        "term": "der Sprecher / die Sprecherin",
        "fa": "male speaker / female speaker",
        "type": "noun",
        "form": "Plural: `die Sprecher / die Sprecherinnen`. In listening exercises, this refers to the person speaking.",
        "source": "Wortschatz.md",
        "example": "Die Sprecherin ist berufstätig.",
        "exampleFa": "The female speaker is employed.",
        "cloze": "Die ____in ist berufstätig.",
        "clozeFa": "The female speaker is employed.",
        "answer": "Sprecher",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Sprecher / die Sprecherin",
          "Sprecher / die Sprecherin",
          "Sprecher"
        ],
        "examples": [
          {
            "de": "Die Sprecherin ist berufstätig.",
            "en": "The female speaker is employed."
          },
          {
            "de": "Der Sprecher teilt sich die Arbeit mit seiner Partnerin auf.",
            "en": "The male speaker shares the work with his partner."
          }
        ]
      },
      {
        "id": "die-hausarbeit",
        "group": "l10-g2",
        "term": "die Hausarbeit",
        "fa": "housework; household chore; academic paper",
        "type": "noun",
        "form": "Feminine noun. In the household meaning, the singular often means housework generally; `die Hausarbeiten` means individual chores.",
        "source": "Wortschatz.md",
        "example": "Sie hat keine Zeit für die Hausarbeit.",
        "exampleFa": "She has no time for the housework.",
        "cloze": "Sie hat keine Zeit für die ____.",
        "clozeFa": "She has no time for the housework.",
        "answer": "Hausarbeit",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Hausarbeit",
          "Hausarbeit",
          "Hausarbeit"
        ],
        "examples": [
          {
            "de": "Sie hat keine Zeit für die Hausarbeit.",
            "en": "She has no time for the housework."
          },
          {
            "de": "Ihr Mann übernimmt viele Hausarbeiten.",
            "en": "Her husband takes on many household chores."
          }
        ]
      },
      {
        "id": "der-sportverein",
        "group": "l10-g2",
        "term": "der Sportverein",
        "fa": "sports club",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Sportvereine`.",
        "source": "Wortschatz.md",
        "example": "Der Sportverein plant eine große Feier.",
        "exampleFa": "The sports club is planning a large celebration.",
        "cloze": "Der ____ plant eine große Feier.",
        "clozeFa": "The sports club is planning a large celebration.",
        "answer": "Sportverein",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Sportverein",
          "Sportverein",
          "Sportverein"
        ],
        "examples": [
          {
            "de": "Der Sportverein plant eine große Feier.",
            "en": "The sports club is planning a large celebration."
          },
          {
            "de": "Ich bin Mitglied in einem Sportverein.",
            "en": "I am a member of a sports club."
          }
        ]
      },
      {
        "id": "der-verein",
        "group": "l10-g2",
        "term": "der Verein",
        "fa": "club; association",
        "type": "noun",
        "form": "Masculine noun; plural: `die Vereine`; genitive singular: `des Vereins`.",
        "source": "Wortschatz.md",
        "example": "Der Verein veröffentlicht jedes Jahr eine Festzeitung.",
        "exampleFa": "The club publishes a festival newspaper every year.",
        "cloze": "Der ____ veröffentlicht jedes Jahr eine Festzeitung.",
        "clozeFa": "The club publishes a festival newspaper every year.",
        "answer": "Verein",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Verein",
          "Verein",
          "Verein"
        ],
        "examples": [
          {
            "de": "Der Verein veröffentlicht jedes Jahr eine Festzeitung.",
            "en": "The club publishes a festival newspaper every year."
          },
          {
            "de": "Viele Menschen sind Mitglied in diesem Verein.",
            "en": "Many people are members of this club."
          }
        ]
      },
      {
        "id": "die-feier",
        "group": "l10-g2",
        "term": "die Feier",
        "fa": "celebration; party; ceremony",
        "type": "noun",
        "form": "Feminine noun; plural: `die Feiern`.",
        "source": "Wortschatz.md",
        "example": "Der Verein plant eine große Feier.",
        "exampleFa": "The club is planning a large celebration.",
        "cloze": "Der Verein plant eine große ____.",
        "clozeFa": "The club is planning a large celebration.",
        "answer": "Feier",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Feier",
          "Feier",
          "Feier"
        ],
        "examples": [
          {
            "de": "Der Verein plant eine große Feier.",
            "en": "The club is planning a large celebration."
          },
          {
            "de": "Die Feier findet am Samstag statt.",
            "en": "The celebration takes place on Saturday."
          }
        ]
      },
      {
        "id": "der-vertreter-die-vertreterin",
        "group": "l10-g2",
        "term": "der Vertreter / die Vertreterin",
        "fa": "male representative / female representative",
        "type": "noun",
        "form": "Plural: `die Vertreter / die Vertreterinnen`.",
        "source": "Wortschatz.md",
        "example": "Sie ist eine Vertreterin des Sportvereins.",
        "exampleFa": "She is a representative of the sports club.",
        "cloze": "Sie ist eine ____in des Sportvereins.",
        "clozeFa": "She is a representative of the sports club.",
        "answer": "Vertreter",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Vertreter / die Vertreterin",
          "Vertreter / die Vertreterin",
          "Vertreter"
        ],
        "examples": [
          {
            "de": "Sie ist eine Vertreterin des Sportvereins.",
            "en": "She is a representative of the sports club."
          },
          {
            "de": "Der Vertreter beantwortet die Fragen.",
            "en": "The representative answers the questions."
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
    "grammar": {
      "id": "l10-b1-grammar",
      "icon": "G",
      "title": "Adjektivdeklination",
      "fa": "3 examples",
      "subtitle": "Learn the B1 pattern through three varied examples.",
      "placeholder": "Type the missing German form",
      "teach": [
        {
          "title": "After a definite article",
          "body": "After der, die, das and similar determiners, the adjective usually takes -e or -en because the article shows the case.",
          "example": "Der neue Kollege arbeitet seit Montag in unserer technischen Abteilung.",
          "emphasis": [
            "Der",
            "neue",
            "technischen"
          ]
        },
        {
          "title": "After an indefinite article",
          "body": "After ein, eine, kein, or a possessive determiner, the adjective supplies any ending not shown clearly by the article.",
          "example": "Wir suchen eine zuverlässige Person für ein internationales Projekt.",
          "emphasis": [
            "eine",
            "zuverlässige",
            "ein",
            "internationales"
          ]
        },
        {
          "title": "Without an article",
          "body": "Without an article, the adjective carries a strong ending that signals gender, number, and case.",
          "example": "Frisches Brot und heißer Kaffee gehören für viele Menschen zu einem guten Frühstück.",
          "emphasis": [
            "Frisches",
            "heißer",
            "guten"
          ]
        }
      ],
      "questions": []
    }
  },
  {
    "id": 11,
    "code": "Set 11",
    "title": "Wortschatz Set 11",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "sich-etwas-aufteilen",
        "group": "l11-g1",
        "term": "sich etwas aufteilen",
        "fa": "to divide something among yourselves; to share something",
        "type": "phrase",
        "form": "Separable verb: `teilt sich etwas auf – teilte sich etwas auf – hat sich etwas aufgeteilt`. The reflexive pronoun is dative when an accusative object is present.",
        "source": "Wortschatz.md",
        "example": "Der Sprecher teilt sich mit seiner Partnerin die Arbeit auf.",
        "exampleFa": "The speaker divides the work with his partner.",
        "cloze": "Der Sprecher teilt sich mit seiner Partnerin die Arbeit auf. ____",
        "clozeFa": "The speaker divides the work with his partner.",
        "answer": "sich etwas aufteilen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich etwas aufteilen",
          "sich etwas aufteilen",
          "sich etwas aufteilen"
        ],
        "examples": [
          {
            "de": "Der Sprecher teilt sich mit seiner Partnerin die Arbeit auf.",
            "en": "The speaker divides the work with his partner."
          },
          {
            "de": "Wir teilen uns die Aufgaben auf.",
            "en": "We divide the tasks among ourselves."
          }
        ]
      },
      {
        "id": "der-haushalt",
        "group": "l11-g1",
        "term": "der Haushalt",
        "fa": "household; housekeeping",
        "type": "noun",
        "form": "Masculine noun; plural: `die Haushalte`; `im Haushalt` means “in the household” (`im = in dem`).",
        "source": "Wortschatz.md",
        "example": "Sie muss im Haushalt fast alles alleine machen.",
        "exampleFa": "She has to do almost everything in the household by herself.",
        "cloze": "Sie muss im ____ fast alles alleine machen.",
        "clozeFa": "She has to do almost everything in the household by herself.",
        "answer": "Haushalt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Haushalt",
          "Haushalt",
          "Haushalt"
        ],
        "examples": [
          {
            "de": "Sie muss im Haushalt fast alles alleine machen.",
            "en": "She has to do almost everything in the household by herself."
          },
          {
            "de": "Beide helfen im Haushalt.",
            "en": "Both help with the household chores."
          }
        ]
      },
      {
        "id": "fast-alles",
        "group": "l11-g1",
        "term": "fast alles",
        "fa": "almost everything",
        "type": "phrase",
        "form": "`alles` is an indefinite pronoun; `fast` limits its meaning.",
        "source": "Wortschatz.md",
        "example": "Sie macht fast alles alleine.",
        "exampleFa": "She does almost everything by herself.",
        "cloze": "Sie macht ____ alleine.",
        "clozeFa": "She does almost everything by herself.",
        "answer": "fast alles",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "fast alles",
          "fast alles",
          "fast alles"
        ],
        "examples": [
          {
            "de": "Sie macht fast alles alleine.",
            "en": "She does almost everything by herself."
          },
          {
            "de": "Fast alles ist schon fertig.",
            "en": "Almost everything is already finished."
          }
        ]
      },
      {
        "id": "allein-alleine",
        "group": "l11-g1",
        "term": "allein / alleine",
        "fa": "alone; by oneself",
        "type": "phrase",
        "form": "Both forms are correct; `alleine` is especially common in speech. Used adverbially, it has no adjective ending.",
        "source": "Wortschatz.md",
        "example": "Sie macht die Hausarbeit alleine.",
        "exampleFa": "She does the housework by herself.",
        "cloze": "Sie macht die Hausarbeit ____e.",
        "clozeFa": "She does the housework by herself.",
        "answer": "allein",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "allein / alleine",
          "allein / alleine",
          "allein"
        ],
        "examples": [
          {
            "de": "Sie macht die Hausarbeit alleine.",
            "en": "She does the housework by herself."
          },
          {
            "de": "Ich wohne allein.",
            "en": "I live alone."
          }
        ]
      },
      {
        "id": "der-partner-die-partnerin",
        "group": "l11-g1",
        "term": "der Partner / die Partnerin",
        "fa": "male partner / female partner",
        "type": "noun",
        "form": "Plural: `die Partner / die Partnerinnen`; `mit` requires the dative: `mit seinem Partner`, `mit seiner Partnerin`.",
        "source": "Wortschatz.md",
        "example": "Er teilt sich die Arbeit mit seiner Partnerin auf.",
        "exampleFa": "He shares the work with his partner.",
        "cloze": "Er teilt sich die Arbeit mit seiner ____in auf.",
        "clozeFa": "He shares the work with his partner.",
        "answer": "Partner",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Partner / die Partnerin",
          "Partner / die Partnerin",
          "Partner"
        ],
        "examples": [
          {
            "de": "Er teilt sich die Arbeit mit seiner Partnerin auf.",
            "en": "He shares the work with his partner."
          },
          {
            "de": "Sie lebt mit ihrem Partner zusammen.",
            "en": "She lives with her partner."
          }
        ]
      },
      {
        "id": "planen",
        "group": "l11-g1",
        "term": "planen",
        "fa": "to plan",
        "type": "verb",
        "form": "Regular verb: `plant – plante – hat geplant`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Wir planen einen Ausflug.",
        "exampleFa": "We are planning an excursion.",
        "cloze": "Wir ____ einen Ausflug.",
        "clozeFa": "We are planning an excursion.",
        "answer": "planen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "planen",
          "planen",
          "planen"
        ],
        "examples": [
          {
            "de": "Wir planen einen Ausflug.",
            "en": "We are planning an excursion."
          },
          {
            "de": "Die Aktivitäten sind schon geplant.",
            "en": "The activities are already planned."
          }
        ]
      },
      {
        "id": "berufstaetig",
        "group": "l11-g1",
        "term": "berufstätig",
        "fa": "employed; working; professionally active",
        "type": "adjective",
        "form": "Adjective; after `sein`, it has no ending.",
        "source": "Wortschatz.md",
        "example": "Die Sprecherin ist berufstätig.",
        "exampleFa": "The speaker is employed.",
        "cloze": "Die Sprecherin ist ____.",
        "clozeFa": "The speaker is employed.",
        "answer": "berufstätig",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "berufstätig",
          "berufstätig",
          "berufstätig"
        ],
        "examples": [
          {
            "de": "Die Sprecherin ist berufstätig.",
            "en": "The speaker is employed."
          },
          {
            "de": "Beide Eltern sind berufstätig.",
            "en": "Both parents work."
          }
        ]
      },
      {
        "id": "der-anfang",
        "group": "l11-g1",
        "term": "der Anfang",
        "fa": "beginning; start",
        "type": "noun",
        "form": "Masculine noun; plural: `die Anfänge`; the fixed expression `von Anfang an` means “from the beginning.”",
        "source": "Wortschatz.md",
        "example": "Der Verein hatte von Anfang an auch Frauen als Mitglieder.",
        "exampleFa": "The club had women as members from the beginning.",
        "cloze": "Der Verein hatte von ____ an auch Frauen als Mitglieder.",
        "clozeFa": "The club had women as members from the beginning.",
        "answer": "Anfang",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Anfang",
          "Anfang",
          "Anfang"
        ],
        "examples": [
          {
            "de": "Der Verein hatte von Anfang an auch Frauen als Mitglieder.",
            "en": "The club had women as members from the beginning."
          },
          {
            "de": "Am Anfang hatte Dennis dieselben Probleme wie Teresa.",
            "en": "At the beginning, Dennis had the same problems as Teresa."
          },
          {
            "de": "Teresa fand den Kurs von Anfang an langweilig.",
            "en": "Teresa found the course boring from the very beginning."
          },
          {
            "de": "Über die Anfänge des Vereins ist wenig bekannt.",
            "en": "Little is known about the early days of the club."
          }
        ]
      },
      {
        "id": "die-insel",
        "group": "l11-g1",
        "term": "die Insel",
        "fa": "island",
        "type": "noun",
        "form": "Feminine noun; plural: `die Inseln`.",
        "source": "Wortschatz.md",
        "example": "Hiddensee ist eine Insel in der Ostsee.",
        "exampleFa": "Hiddensee is an island in the Baltic Sea.",
        "cloze": "Hiddensee ist eine ____ in der Ostsee.",
        "clozeFa": "Hiddensee is an island in the Baltic Sea.",
        "answer": "Insel",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Insel",
          "Insel",
          "Insel"
        ],
        "examples": [
          {
            "de": "Hiddensee ist eine Insel in der Ostsee.",
            "en": "Hiddensee is an island in the Baltic Sea."
          },
          {
            "de": "Wir möchten die Insel besuchen.",
            "en": "We would like to visit the island."
          }
        ]
      },
      {
        "id": "der-journalist-die-journalistin",
        "group": "l11-g1",
        "term": "der Journalist / die Journalistin",
        "fa": "male journalist / female journalist",
        "type": "noun",
        "form": "Plural: `die Journalisten / die Journalistinnen`; `Journalist` is a weak masculine noun: accusative `den Journalisten`.",
        "source": "Wortschatz.md",
        "example": "Der Journalist unterhält sich mit einer Vertreterin.",
        "exampleFa": "The journalist talks with a representative.",
        "cloze": "Der ____ unterhält sich mit einer Vertreterin.",
        "clozeFa": "The journalist talks with a representative.",
        "answer": "Journalist",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Journalist / die Journalistin",
          "Journalist / die Journalistin",
          "Journalist"
        ],
        "examples": [
          {
            "de": "Der Journalist unterhält sich mit einer Vertreterin.",
            "en": "The journalist talks with a representative."
          },
          {
            "de": "Die Journalistin schreibt einen Artikel über den Verein.",
            "en": "The journalist writes an article about the club."
          }
        ]
      },
      {
        "id": "die-moeglichkeit",
        "group": "l11-g2",
        "term": "die Möglichkeit",
        "fa": "possibility; option; opportunity",
        "type": "noun",
        "form": "Feminine noun; plural: `die Möglichkeiten`; often followed by an infinitive clause with `zu`.",
        "source": "Wortschatz.md",
        "example": "Gibt es die Möglichkeit, ein Zimmer zu mieten?",
        "exampleFa": "Is there an option to rent a room?",
        "cloze": "Gibt es die ____, ein Zimmer zu mieten?",
        "clozeFa": "Is there an option to rent a room?",
        "answer": "Möglichkeit",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Möglichkeit",
          "Möglichkeit",
          "Möglichkeit"
        ],
        "examples": [
          {
            "de": "Gibt es die Möglichkeit, ein Zimmer zu mieten?",
            "en": "Is there an option to rent a room?"
          },
          {
            "de": "Wir haben die Möglichkeit, bei einer Gastfamilie zu wohnen.",
            "en": "We have the option of staying with a host family."
          }
        ]
      },
      {
        "id": "informationen-zu-etwas",
        "group": "l11-g2",
        "term": "Informationen zu etwas",
        "fa": "information about/on something",
        "type": "phrase",
        "form": "`zu` takes the dative: `zu Ihrem Kurs`, `zu Ihren Kursen`.",
        "source": "Wortschatz.md",
        "example": "Ich hätte gern nähere Informationen zu Ihren Kursen.",
        "exampleFa": "I would like further information about your courses.",
        "cloze": "Ich hätte gern nähere ____ zu Ihren Kursen.",
        "clozeFa": "I would like further information about your courses.",
        "answer": "Informationen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Informationen zu etwas",
          "Informationen zu etwas",
          "Informationen"
        ],
        "examples": [
          {
            "de": "Ich hätte gern nähere Informationen zu Ihren Kursen.",
            "en": "I would like further information about your courses."
          },
          {
            "de": "Wo finde ich Informationen zu dieser Prüfung?",
            "en": "Where can I find information about this examination?"
          }
        ]
      },
      {
        "id": "zum-schluss",
        "group": "l11-g2",
        "term": "zum Schluss",
        "fa": "finally; at the end; to conclude",
        "type": "phrase",
        "form": "Adverbial expression. At the beginning of a main clause, it occupies position 1 and is followed by the conjugated verb.",
        "source": "Wortschatz.md",
        "example": "Zum Schluss habe ich noch eine Frage.",
        "exampleFa": "Finally, I have one more question.",
        "cloze": "____ habe ich noch eine Frage.",
        "clozeFa": "Finally, I have one more question.",
        "answer": "zum Schluss",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zum Schluss",
          "zum Schluss",
          "zum Schluss"
        ],
        "examples": [
          {
            "de": "Zum Schluss habe ich noch eine Frage.",
            "en": "Finally, I have one more question."
          },
          {
            "de": "Zum Schluss besprechen wir das Freizeitprogramm.",
            "en": "At the end, we discuss the leisure program."
          }
        ]
      },
      {
        "id": "preiswert",
        "group": "l11-g2",
        "term": "preiswert",
        "fa": "inexpensive; reasonably priced; good value",
        "type": "adjective",
        "form": "Adjective; comparative: `preiswerter`; superlative: `am preiswertesten`.",
        "source": "Wortschatz.md",
        "example": "Ich suche ein preiswertes Zimmer.",
        "exampleFa": "I am looking for an inexpensive room.",
        "cloze": "Ich suche ein ____es Zimmer.",
        "clozeFa": "I am looking for an inexpensive room.",
        "answer": "preiswert",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "preiswert",
          "preiswert",
          "preiswert"
        ],
        "examples": [
          {
            "de": "Ich suche ein preiswertes Zimmer.",
            "en": "I am looking for an inexpensive room."
          },
          {
            "de": "Gibt es preiswerte Zimmer in einer Pension?",
            "en": "Are there reasonably priced rooms in a guesthouse?"
          }
        ]
      },
      {
        "id": "die-zertifikatspruefung",
        "group": "l11-g2",
        "term": "die Zertifikatsprüfung",
        "fa": "certificate examination; certification exam",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Zertifikatsprüfungen`.",
        "source": "Wortschatz.md",
        "example": "Ich werde die Zertifikatsprüfung Deutsch ablegen.",
        "exampleFa": "I will take the German certificate examination.",
        "cloze": "Ich werde die ____ Deutsch ablegen.",
        "clozeFa": "I will take the German certificate examination.",
        "answer": "Zertifikatsprüfung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Zertifikatsprüfung",
          "Zertifikatsprüfung",
          "Zertifikatsprüfung"
        ],
        "examples": [
          {
            "de": "Ich werde die Zertifikatsprüfung Deutsch ablegen.",
            "en": "I will take the German certificate examination."
          },
          {
            "de": "Die Zertifikatsprüfung findet nächsten Monat statt.",
            "en": "The certificate examination takes place next month."
          }
        ]
      },
      {
        "id": "natuerlich",
        "group": "l11-g2",
        "term": "natürlich",
        "fa": "naturally; of course",
        "type": "verb",
        "form": "Adverb or uninflected predicate adjective.",
        "source": "Wortschatz.md",
        "example": "Natürlich kann ich auch nach Frankfurt kommen.",
        "exampleFa": "Of course I can also come to Frankfurt.",
        "cloze": "____ kann ich auch nach Frankfurt kommen.",
        "clozeFa": "Of course I can also come to Frankfurt.",
        "answer": "natürlich",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "natürlich",
          "natürlich",
          "natürlich"
        ],
        "examples": [
          {
            "de": "Natürlich kann ich auch nach Frankfurt kommen.",
            "en": "Of course I can also come to Frankfurt."
          },
          {
            "de": "Das ist ganz natürlich.",
            "en": "That is completely natural."
          }
        ]
      },
      {
        "id": "das-zimmer",
        "group": "l11-g2",
        "term": "das Zimmer",
        "fa": "room",
        "type": "noun",
        "form": "Neuter noun; plural: `die Zimmer`.",
        "source": "Wortschatz.md",
        "example": "Ich möchte ein Zimmer mieten.",
        "exampleFa": "I would like to rent a room.",
        "cloze": "Ich möchte ein ____ mieten.",
        "clozeFa": "I would like to rent a room.",
        "answer": "Zimmer",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Zimmer",
          "Zimmer",
          "Zimmer"
        ],
        "examples": [
          {
            "de": "Ich möchte ein Zimmer mieten.",
            "en": "I would like to rent a room."
          },
          {
            "de": "Das Zimmer ist preiswert und ruhig.",
            "en": "The room is inexpensive and quiet."
          }
        ]
      },
      {
        "id": "in-einem-monat",
        "group": "l11-g2",
        "term": "in einem Monat",
        "fa": "in one month; one month from now",
        "type": "phrase",
        "form": "`in + Dativ` expresses a future point after a period of time.",
        "source": "Wortschatz.md",
        "example": "In einem Monat lege ich die Prüfung ab.",
        "exampleFa": "I will take the examination in one month.",
        "cloze": "____ lege ich die Prüfung ab.",
        "clozeFa": "I will take the examination in one month.",
        "answer": "in einem Monat",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "in einem Monat",
          "in einem Monat",
          "in einem Monat"
        ],
        "examples": [
          {
            "de": "In einem Monat lege ich die Prüfung ab.",
            "en": "I will take the examination in one month."
          },
          {
            "de": "Der Kurs beginnt in einem Monat.",
            "en": "The course starts one month from now."
          }
        ]
      },
      {
        "id": "der-tagesplan",
        "group": "l11-g2",
        "term": "der Tagesplan",
        "fa": "daily schedule; daily plan",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Tagespläne`.",
        "source": "Wortschatz.md",
        "example": "Wie sieht mein Tagesplan aus?",
        "exampleFa": "What does my daily schedule look like?",
        "cloze": "Wie sieht mein ____ aus?",
        "clozeFa": "What does my daily schedule look like?",
        "answer": "Tagesplan",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Tagesplan",
          "Tagesplan",
          "Tagesplan"
        ],
        "examples": [
          {
            "de": "Wie sieht mein Tagesplan aus?",
            "en": "What does my daily schedule look like?"
          },
          {
            "de": "Der Tagesplan beginnt um sieben Uhr.",
            "en": "The daily schedule begins at seven o’clock."
          }
        ]
      },
      {
        "id": "das-foto",
        "group": "l11-g2",
        "term": "das Foto",
        "fa": "photograph; photo",
        "type": "noun",
        "form": "Neuter noun; plural: `die Fotos`.",
        "source": "Wortschatz.md",
        "example": "Ich schicke Ihnen ein Foto von mir.",
        "exampleFa": "I am sending you a photo of myself.",
        "cloze": "Ich schicke Ihnen ein ____ von mir.",
        "clozeFa": "I am sending you a photo of myself.",
        "answer": "Foto",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Foto",
          "Foto",
          "Foto"
        ],
        "examples": [
          {
            "de": "Ich schicke Ihnen ein Foto von mir.",
            "en": "I am sending you a photo of myself."
          },
          {
            "de": "Auf dem Foto sieht man meine Familie.",
            "en": "You can see my family in the photo."
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
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "das-taschengeld",
        "group": "l12-g1",
        "term": "das Taschengeld",
        "fa": "pocket money; allowance",
        "type": "noun",
        "form": "Neuter noun; usually singular.",
        "source": "Wortschatz.md",
        "example": "Wie viel Taschengeld bekomme ich?",
        "exampleFa": "How much pocket money do I receive?",
        "cloze": "Wie viel ____ bekomme ich?",
        "clozeFa": "How much pocket money do I receive?",
        "answer": "Taschengeld",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Taschengeld",
          "Taschengeld",
          "Taschengeld"
        ],
        "examples": [
          {
            "de": "Wie viel Taschengeld bekomme ich?",
            "en": "How much pocket money do I receive?"
          },
          {
            "de": "Die Kinder bekommen jede Woche Taschengeld.",
            "en": "The children receive pocket money every week."
          }
        ]
      },
      {
        "id": "was",
        "group": "l12-g1",
        "term": "was",
        "fa": "what; that which; something",
        "type": "verb",
        "form": "Question word or pronoun; in an indirect question, the conjugated verb goes to the end.",
        "source": "Wortschatz.md",
        "example": "Was muss ich machen?",
        "exampleFa": "What do I have to do?",
        "cloze": "____ muss ich machen?",
        "clozeFa": "What do I have to do?",
        "answer": "was",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "was",
          "was",
          "was"
        ],
        "examples": [
          {
            "de": "Was muss ich machen?",
            "en": "What do I have to do?"
          },
          {
            "de": "Ich möchte wissen, was ich machen muss.",
            "en": "I would like to know what I have to do."
          }
        ]
      },
      {
        "id": "aussehen",
        "group": "l12-g1",
        "term": "aussehen",
        "fa": "to look; to appear; to look like",
        "type": "verb",
        "form": "Separable strong verb: `sieht aus – sah aus – hat ausgesehen`.",
        "source": "Wortschatz.md",
        "example": "Wie sieht mein Tagesplan aus?",
        "exampleFa": "What does my daily schedule look like?",
        "cloze": "Wie sieht mein Tagesplan aus? ____",
        "clozeFa": "What does my daily schedule look like?",
        "answer": "aussehen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "aussehen",
          "aussehen",
          "aussehen"
        ],
        "examples": [
          {
            "de": "Wie sieht mein Tagesplan aus?",
            "en": "What does my daily schedule look like?"
          },
          {
            "de": "Die Unterkunft sieht gemütlich aus.",
            "en": "The accommodation looks comfortable."
          }
        ]
      },
      {
        "id": "die-gastfamilie",
        "group": "l12-g1",
        "term": "die Gastfamilie",
        "fa": "host family",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Gastfamilien`.",
        "source": "Wortschatz.md",
        "example": "Die Teilnehmer wohnen in Gastfamilien.",
        "exampleFa": "The participants stay with host families.",
        "cloze": "Die Teilnehmer wohnen in ____n.",
        "clozeFa": "The participants stay with host families.",
        "answer": "Gastfamilie",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Gastfamilie",
          "Gastfamilie",
          "Gastfamilie"
        ],
        "examples": [
          {
            "de": "Die Teilnehmer wohnen in Gastfamilien.",
            "en": "The participants stay with host families."
          },
          {
            "de": "Meine Gastfamilie lebt auf Rügen.",
            "en": "My host family lives on Rügen."
          }
        ]
      },
      {
        "id": "in-diesem-zusammenhang",
        "group": "l12-g1",
        "term": "in diesem Zusammenhang",
        "fa": "in this context; in this connection",
        "type": "phrase",
        "form": "Fixed formal expression; `in` takes the dative because it describes a context/state.",
        "source": "Wortschatz.md",
        "example": "In diesem Zusammenhang würde ich gern etwas fragen.",
        "exampleFa": "In this context, I would like to ask something.",
        "cloze": "____ würde ich gern etwas fragen.",
        "clozeFa": "In this context, I would like to ask something.",
        "answer": "in diesem Zusammenhang",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "in diesem Zusammenhang",
          "in diesem Zusammenhang",
          "in diesem Zusammenhang"
        ],
        "examples": [
          {
            "de": "In diesem Zusammenhang würde ich gern etwas fragen.",
            "en": "In this context, I would like to ask something."
          },
          {
            "de": "In diesem Zusammenhang brauche ich nähere Informationen.",
            "en": "I need further information in this connection."
          }
        ]
      },
      {
        "id": "die-kommunikation",
        "group": "l12-g1",
        "term": "die Kommunikation",
        "fa": "communication",
        "type": "noun",
        "form": "Feminine noun; plural `die Kommunikationen` exists but is uncommon in this general meaning.",
        "source": "Wortschatz.md",
        "example": "Mich interessiert Kommunikation im Beruf.",
        "exampleFa": "I am interested in communication at work.",
        "cloze": "Mich interessiert ____ im Beruf.",
        "clozeFa": "I am interested in communication at work.",
        "answer": "Kommunikation",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Kommunikation",
          "Kommunikation",
          "Kommunikation"
        ],
        "examples": [
          {
            "de": "Mich interessiert Kommunikation im Beruf.",
            "en": "I am interested in communication at work."
          },
          {
            "de": "Gute Kommunikation ist im Team wichtig.",
            "en": "Good communication is important in a team."
          }
        ]
      },
      {
        "id": "mieten",
        "group": "l12-g1",
        "term": "mieten",
        "fa": "to rent",
        "type": "verb",
        "form": "Regular verb: `mietet – mietete – hat gemietet`; takes an accusative object.",
        "source": "Wortschatz.md",
        "example": "Wir möchten ein Zimmer mieten.",
        "exampleFa": "We would like to rent a room.",
        "cloze": "Wir möchten ein Zimmer ____.",
        "clozeFa": "We would like to rent a room.",
        "answer": "mieten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mieten",
          "mieten",
          "mieten"
        ],
        "examples": [
          {
            "de": "Wir möchten ein Zimmer mieten.",
            "en": "We would like to rent a room."
          },
          {
            "de": "Sie hat eine Wohnung in Frankfurt gemietet.",
            "en": "She rented an apartment in Frankfurt."
          }
        ]
      },
      {
        "id": "die-aktivitaet",
        "group": "l12-g1",
        "term": "die Aktivität",
        "fa": "activity",
        "type": "noun",
        "form": "Feminine noun; plural: `die Aktivitäten`.",
        "source": "Wortschatz.md",
        "example": "Welche Aktivitäten genau sind geplant?",
        "exampleFa": "Which activities exactly are planned?",
        "cloze": "Welche ____en genau sind geplant?",
        "clozeFa": "Which activities exactly are planned?",
        "answer": "Aktivität",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Aktivität",
          "Aktivität",
          "Aktivität"
        ],
        "examples": [
          {
            "de": "Welche Aktivitäten genau sind geplant?",
            "en": "Which activities exactly are planned?"
          },
          {
            "de": "Das Hotel bietet viele Aktivitäten für Kinder an.",
            "en": "The hotel offers many activities for children."
          }
        ]
      },
      {
        "id": "ein-foto-von-jemandem",
        "group": "l12-g1",
        "term": "ein Foto von jemandem",
        "fa": "a photo of someone",
        "type": "phrase",
        "form": "`von` takes the dative: `von mir`, `von dir`, `von ihm/ihr`, `von uns`, `von euch`, `von ihnen`.",
        "source": "Wortschatz.md",
        "example": "Ich schicke Ihnen ein Foto von mir.",
        "exampleFa": "I am sending you a photo of myself.",
        "cloze": "Ich schicke Ihnen ein ____ von mir.",
        "clozeFa": "I am sending you a photo of myself.",
        "answer": "Foto",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "ein Foto von jemandem",
          "Foto von jemandem",
          "Foto"
        ],
        "examples": [
          {
            "de": "Ich schicke Ihnen ein Foto von mir.",
            "en": "I am sending you a photo of myself."
          },
          {
            "de": "Hast du ein Foto von deinen Geschwistern?",
            "en": "Do you have a photo of your siblings?"
          }
        ]
      },
      {
        "id": "das-hotel",
        "group": "l12-g1",
        "term": "das Hotel",
        "fa": "hotel",
        "type": "noun",
        "form": "Neuter noun; plural: `die Hotels`.",
        "source": "Wortschatz.md",
        "example": "Kann man ein Zimmer in einem Hotel mieten?",
        "exampleFa": "Can one rent a room in a hotel?",
        "cloze": "Kann man ein Zimmer in einem ____ mieten?",
        "clozeFa": "Can one rent a room in a hotel?",
        "answer": "Hotel",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Hotel",
          "Hotel",
          "Hotel"
        ],
        "examples": [
          {
            "de": "Kann man ein Zimmer in einem Hotel mieten?",
            "en": "Can one rent a room in a hotel?"
          },
          {
            "de": "Das Hotel bietet ein Freizeitprogramm an.",
            "en": "The hotel offers a leisure program."
          }
        ]
      },
      {
        "id": "vor-allem",
        "group": "l12-g2",
        "term": "vor allem",
        "fa": "above all; especially; primarily",
        "type": "phrase",
        "form": "Adverbial phrase; in position 1, the finite verb follows immediately.",
        "source": "Wortschatz.md",
        "example": "Vor allem interessiert mich Kommunikation im Beruf.",
        "exampleFa": "I am especially interested in communication at work.",
        "cloze": "____ interessiert mich Kommunikation im Beruf.",
        "clozeFa": "I am especially interested in communication at work.",
        "answer": "vor allem",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "vor allem",
          "vor allem",
          "vor allem"
        ],
        "examples": [
          {
            "de": "Vor allem interessiert mich Kommunikation im Beruf.",
            "en": "I am especially interested in communication at work."
          },
          {
            "de": "Der Kurs ist vor allem für Fortgeschrittene geeignet.",
            "en": "The course is primarily suitable for advanced learners."
          },
          {
            "de": "In seiner Firma arbeiten vor allem Studenten.",
            "en": "Mainly students work at his company."
          }
        ]
      },
      {
        "id": "der-teilnehmer-die-teilnehmerin",
        "group": "l12-g2",
        "term": "der Teilnehmer / die Teilnehmerin",
        "fa": "male participant / female participant",
        "type": "noun",
        "form": "Plural: `die Teilnehmer / die Teilnehmerinnen`.",
        "source": "Wortschatz.md",
        "example": "Die Teilnehmer können in Gastfamilien wohnen.",
        "exampleFa": "The participants can stay with host families.",
        "cloze": "Die ____ können in Gastfamilien wohnen.",
        "clozeFa": "The participants can stay with host families.",
        "answer": "Teilnehmer",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Teilnehmer / die Teilnehmerin",
          "Teilnehmer / die Teilnehmerin",
          "Teilnehmer"
        ],
        "examples": [
          {
            "de": "Die Teilnehmer können in Gastfamilien wohnen.",
            "en": "The participants can stay with host families."
          },
          {
            "de": "Jede Teilnehmerin erhält einen Kursplan.",
            "en": "Each participant receives a course schedule."
          }
        ]
      },
      {
        "id": "fuer-fortgeschrittene",
        "group": "l12-g2",
        "term": "für Fortgeschrittene",
        "fa": "for advanced learners",
        "type": "adjective",
        "form": "`Fortgeschrittene` is a nominalized adjective and is therefore capitalized; `für` takes the accusative.",
        "source": "Wortschatz.md",
        "example": "Ich suche einen Kurs für Fortgeschrittene.",
        "exampleFa": "I am looking for a course for advanced learners.",
        "cloze": "Ich suche einen Kurs ____.",
        "clozeFa": "I am looking for a course for advanced learners.",
        "answer": "für Fortgeschrittene",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "für Fortgeschrittene",
          "für Fortgeschrittene",
          "für Fortgeschrittene"
        ],
        "examples": [
          {
            "de": "Ich suche einen Kurs für Fortgeschrittene.",
            "en": "I am looking for a course for advanced learners."
          },
          {
            "de": "Dieser Englischkurs ist für Fortgeschrittene.",
            "en": "This English course is for advanced learners."
          }
        ]
      },
      {
        "id": "wohnen",
        "group": "l12-g2",
        "term": "wohnen",
        "fa": "to live; to reside; to stay",
        "type": "verb",
        "form": "Regular verb: `wohnt – wohnte – hat gewohnt`; use `in + Dativ` for the location.",
        "source": "Wortschatz.md",
        "example": "Die Teilnehmer können in Gastfamilien wohnen.",
        "exampleFa": "The participants can stay with host families.",
        "cloze": "Die Teilnehmer können in Gastfamilien ____.",
        "clozeFa": "The participants can stay with host families.",
        "answer": "wohnen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "wohnen",
          "wohnen",
          "wohnen"
        ],
        "examples": [
          {
            "de": "Die Teilnehmer können in Gastfamilien wohnen.",
            "en": "The participants can stay with host families."
          },
          {
            "de": "Wir wohnen in einem kleinen Hotel.",
            "en": "We are staying in a small hotel."
          }
        ]
      },
      {
        "id": "der-beruf",
        "group": "l12-g2",
        "term": "der Beruf",
        "fa": "profession; occupation; career",
        "type": "noun",
        "form": "Masculine noun; plural: `die Berufe`.",
        "source": "Wortschatz.md",
        "example": "Kommunikation im Beruf ist wichtig.",
        "exampleFa": "Communication at work is important.",
        "cloze": "Kommunikation im ____ ist wichtig.",
        "clozeFa": "Communication at work is important.",
        "answer": "Beruf",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Beruf",
          "Beruf",
          "Beruf"
        ],
        "examples": [
          {
            "de": "Kommunikation im Beruf ist wichtig.",
            "en": "Communication at work is important."
          },
          {
            "de": "Was sind Sie von Beruf?",
            "en": "What is your profession?"
          },
          {
            "de": "Sie arbeitet gern in ihrem Beruf.",
            "en": "She enjoys working in her profession."
          },
          {
            "de": "Auch in anderen Berufen hat der Stress zugenommen.",
            "en": "Stress has also increased in other professions."
          }
        ]
      },
      {
        "id": "helfen",
        "group": "l12-g2",
        "term": "helfen",
        "fa": "to help; to assist",
        "type": "verb",
        "form": "Strong verb: `hilft – half – hat geholfen`. A person is dative; an activity can follow `bei + Dativ` or an infinitive clause with `zu`.",
        "source": "Wortschatz.md",
        "example": "Ich muss meiner Mutter in der Küche helfen.",
        "exampleFa": "I have to help my mother in the kitchen.",
        "cloze": "Ich muss meiner Mutter in der Küche ____.",
        "clozeFa": "I have to help my mother in the kitchen.",
        "answer": "helfen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "helfen",
          "helfen",
          "helfen"
        ],
        "examples": [
          {
            "de": "Ich muss meiner Mutter in der Küche helfen.",
            "en": "I have to help my mother in the kitchen."
          },
          {
            "de": "Sie hilft den Kindern bei den Hausaufgaben.",
            "en": "She helps the children with their homework."
          },
          {
            "de": "Sie hilft, Brände zu löschen.",
            "en": "She helps to extinguish fires."
          }
        ]
      },
      {
        "id": "die-lehre",
        "group": "l12-g2",
        "term": "die Lehre",
        "fa": "apprenticeship; vocational training; teaching/doctrine",
        "type": "noun",
        "form": "Feminine noun; plural: `die Lehren`; in this context it means an apprenticeship.",
        "source": "Wortschatz.md",
        "example": "Ich beginne eine Lehre in einer Bank.",
        "exampleFa": "I am beginning an apprenticeship at a bank.",
        "cloze": "Ich beginne eine ____ in einer Bank.",
        "clozeFa": "I am beginning an apprenticeship at a bank.",
        "answer": "Lehre",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Lehre",
          "Lehre",
          "Lehre"
        ],
        "examples": [
          {
            "de": "Ich beginne eine Lehre in einer Bank.",
            "en": "I am beginning an apprenticeship at a bank."
          },
          {
            "de": "Die Lehre dauert drei Jahre.",
            "en": "The apprenticeship lasts three years."
          }
        ]
      },
      {
        "id": "die-umgebung",
        "group": "l12-g2",
        "term": "die Umgebung",
        "fa": "surroundings; surrounding area; vicinity",
        "type": "noun",
        "form": "Feminine noun; usually singular in this meaning.",
        "source": "Wortschatz.md",
        "example": "Die Umgebung ist ruhig.",
        "exampleFa": "The surrounding area is quiet.",
        "cloze": "Die ____ ist ruhig.",
        "clozeFa": "The surrounding area is quiet.",
        "answer": "Umgebung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Umgebung",
          "Umgebung",
          "Umgebung"
        ],
        "examples": [
          {
            "de": "Die Umgebung ist ruhig.",
            "en": "The surrounding area is quiet."
          },
          {
            "de": "Bitte senden Sie uns Bilder der Umgebung.",
            "en": "Please send us pictures of the surrounding area."
          }
        ]
      },
      {
        "id": "verbessern",
        "group": "l12-g2",
        "term": "verbessern",
        "fa": "to improve; to make better",
        "type": "verb",
        "form": "Regular inseparable verb: `verbessert – verbesserte – hat verbessert`.",
        "source": "Wortschatz.md",
        "example": "Ich würde gern mein Englisch verbessern.",
        "exampleFa": "I would like to improve my English.",
        "cloze": "Ich würde gern mein Englisch ____.",
        "clozeFa": "I would like to improve my English.",
        "answer": "verbessern",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verbessern",
          "verbessern",
          "verbessern"
        ],
        "examples": [
          {
            "de": "Ich würde gern mein Englisch verbessern.",
            "en": "I would like to improve my English."
          },
          {
            "de": "Wir müssen den Service verbessern.",
            "en": "We must improve the service."
          }
        ]
      },
      {
        "id": "die-pension",
        "group": "l12-g2",
        "term": "die Pension",
        "fa": "guesthouse; bed and breakfast; pension",
        "type": "noun",
        "form": "Feminine noun; plural: `die Pensionen`. It can also mean a retirement pension in another context.",
        "source": "Wortschatz.md",
        "example": "Ihre Pension liegt in Österreich.",
        "exampleFa": "Your guesthouse is located in Austria.",
        "cloze": "Ihre ____ liegt in Österreich.",
        "clozeFa": "Your guesthouse is located in Austria.",
        "answer": "Pension",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Pension",
          "Pension",
          "Pension"
        ],
        "examples": [
          {
            "de": "Ihre Pension liegt in Österreich.",
            "en": "Your guesthouse is located in Austria."
          },
          {
            "de": "Wir möchten Bilder der Pension sehen.",
            "en": "We would like to see pictures of the guesthouse."
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
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "der-prospekt",
        "group": "l13-g1",
        "term": "der Prospekt",
        "fa": "brochure; leaflet",
        "type": "noun",
        "form": "Masculine noun; plural: `die Prospekte`.",
        "source": "Wortschatz.md",
        "example": "Könnten Sie uns einige Prospekte zusenden?",
        "exampleFa": "Could you send us some brochures?",
        "cloze": "Könnten Sie uns einige ____e zusenden?",
        "clozeFa": "Could you send us some brochures?",
        "answer": "Prospekt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Prospekt",
          "Prospekt",
          "Prospekt"
        ],
        "examples": [
          {
            "de": "Könnten Sie uns einige Prospekte zusenden?",
            "en": "Could you send us some brochures?"
          },
          {
            "de": "Im Prospekt stehen nähere Informationen.",
            "en": "The brochure contains further information."
          }
        ]
      },
      {
        "id": "die-arbeit",
        "group": "l13-g1",
        "term": "die Arbeit",
        "fa": "work; job; task",
        "type": "noun",
        "form": "Feminine noun; plural `die Arbeiten` usually means tasks, pieces of work, or written works.",
        "source": "Wortschatz.md",
        "example": "Die Arbeit interessiert mich.",
        "exampleFa": "The work interests me.",
        "cloze": "Die ____ interessiert mich.",
        "clozeFa": "The work interests me.",
        "answer": "Arbeit",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Arbeit",
          "Arbeit",
          "Arbeit"
        ],
        "examples": [
          {
            "de": "Die Arbeit interessiert mich.",
            "en": "The work interests me."
          },
          {
            "de": "Ich suche eine neue Arbeit.",
            "en": "I am looking for a new job."
          },
          {
            "de": "Giselas erste Arbeit war am Institut der Feuerwehr.",
            "en": "Gisela's first job was at the fire service institute."
          },
          {
            "de": "Viele Lehrer nehmen zu viel Arbeit mit nach Hause.",
            "en": "Many teachers take too much work home with them."
          },
          {
            "de": "Im Tauschring werden die Arbeiten in Zeit berechnet.",
            "en": "In the exchange circle, work is calculated in units of time."
          },
          {
            "de": "Jede Arbeit hat den gleichen Wert.",
            "en": "Every kind of work has the same value."
          }
        ]
      },
      {
        "id": "das-schuljahr",
        "group": "l13-g1",
        "term": "das Schuljahr",
        "fa": "school year; academic year",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Schuljahre`.",
        "source": "Wortschatz.md",
        "example": "Das Schuljahr endet im Juni.",
        "exampleFa": "The school year ends in June.",
        "cloze": "Das ____ endet im Juni.",
        "clozeFa": "The school year ends in June.",
        "answer": "Schuljahr",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Schuljahr",
          "Schuljahr",
          "Schuljahr"
        ],
        "examples": [
          {
            "de": "Das Schuljahr endet im Juni.",
            "en": "The school year ends in June."
          },
          {
            "de": "Das neue Schuljahr beginnt im August.",
            "en": "The new school year begins in August."
          }
        ]
      },
      {
        "id": "an-einem-kurs-teilnehmen",
        "group": "l13-g1",
        "term": "an einem Kurs teilnehmen",
        "fa": "to participate in; to attend a course",
        "type": "phrase",
        "form": "Separable verb: `nimmt teil – nahm teil – hat teilgenommen`; `an` takes the dative.",
        "source": "Wortschatz.md",
        "example": "Ich möchte an einem Englischkurs teilnehmen.",
        "exampleFa": "I would like to attend an English course.",
        "cloze": "Ich möchte an einem Englischkurs ____.",
        "clozeFa": "I would like to attend an English course.",
        "answer": "teilnehmen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "an einem Kurs teilnehmen",
          "an einem Kurs teilnehmen",
          "teilnehmen"
        ],
        "examples": [
          {
            "de": "Ich möchte an einem Englischkurs teilnehmen.",
            "en": "I would like to attend an English course."
          },
          {
            "de": "Sie nimmt an der Projektwoche teil.",
            "en": "She participates in the project week."
          }
        ]
      },
      {
        "id": "darueber",
        "group": "l13-g1",
        "term": "darüber",
        "fa": "about it; about that; above it",
        "type": "verb",
        "form": "Pronominal adverb `dar- + über`; replaces `über + a thing or idea`.",
        "source": "Wortschatz.md",
        "example": "Ich würde gern mehr darüber wissen.",
        "exampleFa": "I would like to know more about it.",
        "cloze": "Ich würde gern mehr ____ wissen.",
        "clozeFa": "I would like to know more about it.",
        "answer": "darüber",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "darüber",
          "darüber",
          "darüber"
        ],
        "examples": [
          {
            "de": "Ich würde gern mehr darüber wissen.",
            "en": "I would like to know more about it."
          },
          {
            "de": "Wir haben über das Angebot gesprochen. Danach habe ich darüber nachgedacht.",
            "en": "We discussed the offer. Afterwards, I thought about it."
          }
        ]
      },
      {
        "id": "so-bald-wie-moeglich",
        "group": "l13-g1",
        "term": "so bald wie möglich",
        "fa": "as soon as possible",
        "type": "phrase",
        "form": "Fixed comparison with `so ... wie`; `möglich` remains uninflected.",
        "source": "Wortschatz.md",
        "example": "Bitte schreiben Sie uns so bald wie möglich.",
        "exampleFa": "Please write to us as soon as possible.",
        "cloze": "Bitte schreiben Sie uns ____.",
        "clozeFa": "Please write to us as soon as possible.",
        "answer": "so bald wie möglich",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "so bald wie möglich",
          "so bald wie möglich",
          "so bald wie möglich"
        ],
        "examples": [
          {
            "de": "Bitte schreiben Sie uns so bald wie möglich.",
            "en": "Please write to us as soon as possible."
          },
          {
            "de": "Die Heizung muss so bald wie möglich repariert werden.",
            "en": "The heating must be repaired as soon as possible."
          }
        ]
      },
      {
        "id": "sich-entscheiden",
        "group": "l13-g1",
        "term": "sich entscheiden",
        "fa": "to decide; to make a decision",
        "type": "verb",
        "form": "Reflexive verb: `entscheidet sich – entschied sich – hat sich entschieden`; often `sich für/gegen etwas entscheiden`.",
        "source": "Wortschatz.md",
        "example": "Wir müssen uns bald entscheiden.",
        "exampleFa": "We must decide soon.",
        "cloze": "Wir müssen uns bald ____.",
        "clozeFa": "We must decide soon.",
        "answer": "entscheiden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich entscheiden",
          "sich entscheiden",
          "entscheiden"
        ],
        "examples": [
          {
            "de": "Wir müssen uns bald entscheiden.",
            "en": "We must decide soon."
          },
          {
            "de": "Sie hat sich für das Angebot entschieden.",
            "en": "She decided in favor of the offer."
          }
        ]
      },
      {
        "id": "schliesslich",
        "group": "l13-g1",
        "term": "schließlich",
        "fa": "finally; lastly; after all",
        "type": "verb",
        "form": "Adverb; here it introduces the final point in a letter.",
        "source": "Wortschatz.md",
        "example": "Und schließlich noch eine letzte Frage.",
        "exampleFa": "And finally, one last question.",
        "cloze": "Und ____ noch eine letzte Frage.",
        "clozeFa": "And finally, one last question.",
        "answer": "schließlich",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "schließlich",
          "schließlich",
          "schließlich"
        ],
        "examples": [
          {
            "de": "Und schließlich noch eine letzte Frage.",
            "en": "And finally, one last question."
          },
          {
            "de": "Schließlich haben wir eine Lösung gefunden.",
            "en": "Finally, we found a solution."
          }
        ]
      },
      {
        "id": "deshalb",
        "group": "l13-g1",
        "term": "deshalb",
        "fa": "therefore; for that reason; that is why",
        "type": "verb",
        "form": "Linking adverb; in position 1, the finite verb follows immediately.",
        "source": "Wortschatz.md",
        "example": "Die Kinder können sich nicht vom Hund trennen. Deshalb nehmen wir ihn mit.",
        "exampleFa": "The children cannot part with the dog. That is why we are taking him with us.",
        "cloze": "Die Kinder können sich nicht vom Hund trennen. ____ nehmen wir ihn mit.",
        "clozeFa": "The children cannot part with the dog. That is why we are taking him with us.",
        "answer": "deshalb",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "deshalb",
          "deshalb",
          "deshalb"
        ],
        "examples": [
          {
            "de": "Die Kinder können sich nicht vom Hund trennen. Deshalb nehmen wir ihn mit.",
            "en": "The children cannot part with the dog. That is why we are taking him with us."
          },
          {
            "de": "Wir müssten den Hund deshalb auch mitnehmen.",
            "en": "We would therefore have to take the dog with us too."
          }
        ]
      },
      {
        "id": "enden",
        "group": "l13-g1",
        "term": "enden",
        "fa": "to end; to finish",
        "type": "verb",
        "form": "Regular verb: `endet – endete – hat geendet`.",
        "source": "Wortschatz.md",
        "example": "Das Schuljahr endet im Juni.",
        "exampleFa": "The school year ends in June.",
        "cloze": "Das Schuljahr endet im Juni. ____",
        "clozeFa": "The school year ends in June.",
        "answer": "enden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "enden",
          "enden",
          "enden"
        ],
        "examples": [
          {
            "de": "Das Schuljahr endet im Juni.",
            "en": "The school year ends in June."
          },
          {
            "de": "Der Kurs endet um 16 Uhr.",
            "en": "The course ends at 4 p.m."
          }
        ]
      },
      {
        "id": "mehr-ueber-etwas-wissen",
        "group": "l13-g2",
        "term": "mehr über etwas wissen",
        "fa": "to know more about something",
        "type": "phrase",
        "form": "`über` takes the accusative; when the topic is already known, replace it with `darüber`.",
        "source": "Wortschatz.md",
        "example": "Ich möchte mehr über die Arbeit wissen.",
        "exampleFa": "I would like to know more about the work.",
        "cloze": "Ich möchte mehr über die Arbeit ____.",
        "clozeFa": "I would like to know more about the work.",
        "answer": "wissen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mehr über etwas wissen",
          "mehr über etwas wissen",
          "wissen"
        ],
        "examples": [
          {
            "de": "Ich möchte mehr über die Arbeit wissen.",
            "en": "I would like to know more about the work."
          },
          {
            "de": "Ich würde gern mehr darüber wissen.",
            "en": "I would like to know more about it."
          }
        ]
      },
      {
        "id": "die-geschwister",
        "group": "l13-g2",
        "term": "die Geschwister",
        "fa": "siblings; brothers and sisters",
        "type": "noun",
        "form": "Plural noun; normally used only in the plural. Singular forms are `der Bruder` and `die Schwester`.",
        "source": "Wortschatz.md",
        "example": "Ich habe zwei jüngere Geschwister.",
        "exampleFa": "I have two younger siblings.",
        "cloze": "Ich habe zwei jüngere ____.",
        "clozeFa": "I have two younger siblings.",
        "answer": "Geschwister",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Geschwister",
          "Geschwister",
          "Geschwister"
        ],
        "examples": [
          {
            "de": "Ich habe zwei jüngere Geschwister.",
            "en": "I have two younger siblings."
          },
          {
            "de": "Meine Geschwister wohnen in der Schweiz.",
            "en": "My siblings live in Switzerland."
          }
        ]
      },
      {
        "id": "sowie",
        "group": "l13-g2",
        "term": "sowie",
        "fa": "as well as; and also",
        "type": "word",
        "form": "Coordinating conjunction joining equivalent words or phrases.",
        "source": "Wortschatz.md",
        "example": "Bitte senden Sie Bilder Ihrer Pension sowie der Umgebung.",
        "exampleFa": "Please send pictures of your guesthouse as well as the surrounding area.",
        "cloze": "Bitte senden Sie Bilder Ihrer Pension ____ der Umgebung.",
        "clozeFa": "Please send pictures of your guesthouse as well as the surrounding area.",
        "answer": "sowie",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sowie",
          "sowie",
          "sowie"
        ],
        "examples": [
          {
            "de": "Bitte senden Sie Bilder Ihrer Pension sowie der Umgebung.",
            "en": "Please send pictures of your guesthouse as well as the surrounding area."
          },
          {
            "de": "Das Angebot umfasst Frühstück sowie ein Freizeitprogramm.",
            "en": "The offer includes breakfast as well as a leisure program."
          }
        ]
      },
      {
        "id": "die-hausaufgaben",
        "group": "l13-g2",
        "term": "die Hausaufgaben",
        "fa": "homework",
        "type": "noun",
        "form": "Normally plural in German; dative plural: `bei den Hausaufgaben`.",
        "source": "Wortschatz.md",
        "example": "Ich helfe meinen Geschwistern bei den Hausaufgaben.",
        "exampleFa": "I help my siblings with their homework.",
        "cloze": "Ich helfe meinen Geschwistern bei den ____.",
        "clozeFa": "I help my siblings with their homework.",
        "answer": "Hausaufgaben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Hausaufgaben",
          "Hausaufgaben",
          "Hausaufgaben"
        ],
        "examples": [
          {
            "de": "Ich helfe meinen Geschwistern bei den Hausaufgaben.",
            "en": "I help my siblings with their homework."
          },
          {
            "de": "Die Kinder machen ihre Hausaufgaben.",
            "en": "The children are doing their homework."
          }
        ]
      },
      {
        "id": "mit-etwas-beginnen",
        "group": "l13-g2",
        "term": "mit etwas beginnen",
        "fa": "to begin/start something",
        "type": "phrase",
        "form": "Strong verb: `beginnt – begann – hat begonnen`; `mit` takes the dative.",
        "source": "Wortschatz.md",
        "example": "Ich beginne mit der Lehre.",
        "exampleFa": "I am starting the apprenticeship.",
        "cloze": "Ich beginne mit der Lehre. ____",
        "clozeFa": "I am starting the apprenticeship.",
        "answer": "mit etwas beginnen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mit etwas beginnen",
          "mit etwas beginnen",
          "mit etwas beginnen"
        ],
        "examples": [
          {
            "de": "Ich beginne mit der Lehre.",
            "en": "I am starting the apprenticeship."
          },
          {
            "de": "Wir beginnen mit dem Unterricht.",
            "en": "We are starting the lesson."
          },
          {
            "de": "Teresa begann mit dem Internetkurs.",
            "en": "Teresa began the online course."
          }
        ]
      },
      {
        "id": "die-sekundarschule",
        "group": "l13-g2",
        "term": "die Sekundarschule",
        "fa": "secondary school",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Sekundarschulen`.",
        "source": "Wortschatz.md",
        "example": "Sie ist in der letzten Klasse der Sekundarschule.",
        "exampleFa": "She is in the final class of secondary school.",
        "cloze": "Sie ist in der letzten Klasse der ____.",
        "clozeFa": "She is in the final class of secondary school.",
        "answer": "Sekundarschule",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Sekundarschule",
          "Sekundarschule",
          "Sekundarschule"
        ],
        "examples": [
          {
            "de": "Sie ist in der letzten Klasse der Sekundarschule.",
            "en": "She is in the final class of secondary school."
          },
          {
            "de": "Die Sekundarschule liegt in Brig.",
            "en": "The secondary school is in Brig."
          }
        ]
      },
      {
        "id": "zusenden",
        "group": "l13-g2",
        "term": "zusenden",
        "fa": "to send; to forward",
        "type": "verb",
        "form": "Separable verb: `sendet zu – sandte/sendete zu – hat zugesandt/zugesendet`; pattern: `jemandem (Dat) etwas (Akk) zusenden`.",
        "source": "Wortschatz.md",
        "example": "Würden Sie uns einige Prospekte zusenden?",
        "exampleFa": "Would you send us some brochures?",
        "cloze": "Würden Sie uns einige Prospekte ____?",
        "clozeFa": "Would you send us some brochures?",
        "answer": "zusenden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zusenden",
          "zusenden",
          "zusenden"
        ],
        "examples": [
          {
            "de": "Würden Sie uns einige Prospekte zusenden?",
            "en": "Would you send us some brochures?"
          },
          {
            "de": "Die Pension hat mir Bilder zugesandt.",
            "en": "The guesthouse sent me pictures."
          }
        ]
      },
      {
        "id": "viel-zu-tun-haben",
        "group": "l13-g2",
        "term": "viel zu tun haben",
        "fa": "to have a lot to do; to be busy",
        "type": "phrase",
        "form": "Fixed expression with `haben + zu tun`.",
        "source": "Wortschatz.md",
        "example": "Zu Hause habe ich viel zu tun.",
        "exampleFa": "I have a lot to do at home.",
        "cloze": "Zu Hause habe ich viel zu tun. ____",
        "clozeFa": "I have a lot to do at home.",
        "answer": "viel zu tun haben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "viel zu tun haben",
          "viel zu tun haben",
          "viel zu tun haben"
        ],
        "examples": [
          {
            "de": "Zu Hause habe ich viel zu tun.",
            "en": "I have a lot to do at home."
          },
          {
            "de": "Heute haben wir besonders viel zu tun.",
            "en": "We have an especially large amount to do today."
          }
        ]
      },
      {
        "id": "frei-bekommen-freibekommen",
        "group": "l13-g2",
        "term": "frei bekommen / freibekommen",
        "fa": "to get time off; to be allowed time away",
        "type": "phrase",
        "form": "Commonly written `freibekommen` as a separable verb: `bekommt frei – bekam frei – hat freibekommen`; the exercise uses `frei bekommen`.",
        "source": "Wortschatz.md",
        "example": "Kann ich für einen solchen Kurs frei bekommen?",
        "exampleFa": "Can I get time off for such a course?",
        "cloze": "Kann ich für einen solchen Kurs frei ____?",
        "clozeFa": "Can I get time off for such a course?",
        "answer": "bekommen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "frei bekommen / freibekommen",
          "frei bekommen / freibekommen",
          "bekommen"
        ],
        "examples": [
          {
            "de": "Kann ich für einen solchen Kurs frei bekommen?",
            "en": "Can I get time off for such a course?"
          },
          {
            "de": "Sie bekommt am Freitag frei.",
            "en": "She gets Friday off."
          }
        ]
      },
      {
        "id": "jemandem-dankbar-sein",
        "group": "l13-g2",
        "term": "jemandem dankbar sein",
        "fa": "to be grateful to someone",
        "type": "phrase",
        "form": "The person is dative: `mir/dir/Ihnen dankbar sein`.",
        "source": "Wortschatz.md",
        "example": "Wir wären Ihnen sehr dankbar.",
        "exampleFa": "We would be very grateful to you.",
        "cloze": "Wir wären Ihnen sehr dankbar. ____",
        "clozeFa": "We would be very grateful to you.",
        "answer": "jemandem dankbar sein",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "jemandem dankbar sein",
          "jemandem dankbar sein",
          "jemandem dankbar sein"
        ],
        "examples": [
          {
            "de": "Wir wären Ihnen sehr dankbar.",
            "en": "We would be very grateful to you."
          },
          {
            "de": "Ich bin dir für deine Hilfe dankbar.",
            "en": "I am grateful to you for your help."
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
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "der-schwimmkurs",
        "group": "l14-g1",
        "term": "der Schwimmkurs",
        "fa": "swimming course; swimming class",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Schwimmkurse`.",
        "source": "Wortschatz.md",
        "example": "Gibt es Schwimmkurse für Kinder?",
        "exampleFa": "Are there swimming classes for children?",
        "cloze": "Gibt es ____e für Kinder?",
        "clozeFa": "Are there swimming classes for children?",
        "answer": "Schwimmkurs",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Schwimmkurs",
          "Schwimmkurs",
          "Schwimmkurs"
        ],
        "examples": [
          {
            "de": "Gibt es Schwimmkurse für Kinder?",
            "en": "Are there swimming classes for children?"
          },
          {
            "de": "Meine Tochter besucht einen Schwimmkurs.",
            "en": "My daughter attends a swimming class."
          }
        ]
      },
      {
        "id": "die-unterkunft",
        "group": "l14-g1",
        "term": "die Unterkunft",
        "fa": "accommodation; lodging",
        "type": "noun",
        "form": "Feminine noun; plural: `die Unterkünfte`.",
        "source": "Wortschatz.md",
        "example": "Die Unterkunft bietet günstige Angebote für Kinder.",
        "exampleFa": "The accommodation offers inexpensive deals for children.",
        "cloze": "Die ____ bietet günstige Angebote für Kinder.",
        "clozeFa": "The accommodation offers inexpensive deals for children.",
        "answer": "Unterkunft",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Unterkunft",
          "Unterkunft",
          "Unterkunft"
        ],
        "examples": [
          {
            "de": "Die Unterkunft bietet günstige Angebote für Kinder.",
            "en": "The accommodation offers inexpensive deals for children."
          },
          {
            "de": "Wir suchen eine Unterkunft in Österreich.",
            "en": "We are looking for accommodation in Austria."
          }
        ]
      },
      {
        "id": "der-service",
        "group": "l14-g1",
        "term": "der Service",
        "fa": "service; customer service",
        "type": "noun",
        "form": "Masculine noun; usually singular in this meaning.",
        "source": "Wortschatz.md",
        "example": "Bis jetzt war ich mit dem Service zufrieden.",
        "exampleFa": "Until now, I was satisfied with the service.",
        "cloze": "Bis jetzt war ich mit dem ____ zufrieden.",
        "clozeFa": "Until now, I was satisfied with the service.",
        "answer": "Service",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Service",
          "Service",
          "Service"
        ],
        "examples": [
          {
            "de": "Bis jetzt war ich mit dem Service zufrieden.",
            "en": "Until now, I was satisfied with the service."
          },
          {
            "de": "Der Service, den Sie bieten, ist normalerweise gut.",
            "en": "The service you provide is normally good."
          }
        ]
      },
      {
        "id": "sich-fuer-etwas-interessieren",
        "group": "l14-g1",
        "term": "sich für etwas interessieren",
        "fa": "to be interested in something",
        "type": "phrase",
        "form": "Reflexive verb; `für` takes the accusative: `interessiert sich – interessierte sich – hat sich interessiert`.",
        "source": "Wortschatz.md",
        "example": "Ich interessiere mich sehr für Ihr Angebot.",
        "exampleFa": "I am very interested in your offer.",
        "cloze": "Ich interessiere mich sehr für Ihr Angebot. ____",
        "clozeFa": "I am very interested in your offer.",
        "answer": "sich für etwas interessieren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich für etwas interessieren",
          "sich für etwas interessieren",
          "sich für etwas interessieren"
        ],
        "examples": [
          {
            "de": "Ich interessiere mich sehr für Ihr Angebot.",
            "en": "I am very interested in your offer."
          },
          {
            "de": "Sie interessiert sich für die Wohnung.",
            "en": "She is interested in the apartment."
          }
        ]
      },
      {
        "id": "naehere-informationen",
        "group": "l14-g1",
        "term": "nähere Informationen",
        "fa": "further information; more detailed information",
        "type": "phrase",
        "form": "Plural expression; `nähere` is the declined comparative form of `nah`, but here it means “more detailed/further.”",
        "source": "Wortschatz.md",
        "example": "Ich hätte gern noch nähere Informationen.",
        "exampleFa": "I would like some further information.",
        "cloze": "Ich hätte gern noch ____.",
        "clozeFa": "I would like some further information.",
        "answer": "nähere Informationen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "nähere Informationen",
          "nähere Informationen",
          "nähere Informationen"
        ],
        "examples": [
          {
            "de": "Ich hätte gern noch nähere Informationen.",
            "en": "I would like some further information."
          },
          {
            "de": "Nähere Informationen finden Sie auf unserer Website.",
            "en": "You can find further information on our website."
          }
        ]
      },
      {
        "id": "innerhalb",
        "group": "l14-g1",
        "term": "innerhalb",
        "fa": "within; inside",
        "type": "word",
        "form": "In formal time expressions, it normally takes the genitive: `innerhalb der nächsten zwei Wochen`.",
        "source": "Wortschatz.md",
        "example": "Bitte liefern Sie die Sessel innerhalb der nächsten zwei Wochen.",
        "exampleFa": "Please deliver the armchairs within the next two weeks.",
        "cloze": "Bitte liefern Sie die Sessel ____ der nächsten zwei Wochen.",
        "clozeFa": "Please deliver the armchairs within the next two weeks.",
        "answer": "innerhalb",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "innerhalb",
          "innerhalb",
          "innerhalb"
        ],
        "examples": [
          {
            "de": "Bitte liefern Sie die Sessel innerhalb der nächsten zwei Wochen.",
            "en": "Please deliver the armchairs within the next two weeks."
          },
          {
            "de": "Wir antworten innerhalb eines Tages.",
            "en": "We reply within one day."
          }
        ]
      },
      {
        "id": "das-angebot",
        "group": "l14-g1",
        "term": "das Angebot",
        "fa": "offer; deal; quotation",
        "type": "noun",
        "form": "Neuter noun; plural: `die Angebote`.",
        "source": "Wortschatz.md",
        "example": "Ihr Angebot klingt interessant.",
        "exampleFa": "Your offer sounds interesting.",
        "cloze": "Ihr ____ klingt interessant.",
        "clozeFa": "Your offer sounds interesting.",
        "answer": "Angebot",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Angebot",
          "Angebot",
          "Angebot"
        ],
        "examples": [
          {
            "de": "Ihr Angebot klingt interessant.",
            "en": "Your offer sounds interesting."
          },
          {
            "de": "Das Möbelhaus hat ein günstiges Angebot.",
            "en": "The furniture store has a good-value offer."
          }
        ]
      },
      {
        "id": "erneut",
        "group": "l14-g1",
        "term": "erneut",
        "fa": "again; once again; renewed",
        "type": "verb",
        "form": "Usually an adverb; somewhat more formal than `wieder`.",
        "source": "Wortschatz.md",
        "example": "Ich habe letzte Woche erneut telefonisch reklamiert.",
        "exampleFa": "I complained again by telephone last week.",
        "cloze": "Ich habe letzte Woche ____ telefonisch reklamiert.",
        "clozeFa": "I complained again by telephone last week.",
        "answer": "erneut",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "erneut",
          "erneut",
          "erneut"
        ],
        "examples": [
          {
            "de": "Ich habe letzte Woche erneut telefonisch reklamiert.",
            "en": "I complained again by telephone last week."
          },
          {
            "de": "Bitte prüfen Sie den Antrag erneut.",
            "en": "Please review the application again."
          }
        ]
      },
      {
        "id": "die-anzeige",
        "group": "l14-g1",
        "term": "die Anzeige",
        "fa": "advertisement; notice; listing",
        "type": "noun",
        "form": "Feminine noun; plural: `die Anzeigen`.",
        "source": "Wortschatz.md",
        "example": "Ich habe Ihre Anzeige gelesen.",
        "exampleFa": "I read your advertisement.",
        "cloze": "Ich habe Ihre ____ gelesen.",
        "clozeFa": "I read your advertisement.",
        "answer": "Anzeige",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Anzeige",
          "Anzeige",
          "Anzeige"
        ],
        "examples": [
          {
            "de": "Ich habe Ihre Anzeige gelesen.",
            "en": "I read your advertisement."
          },
          {
            "de": "Die Wohnung wurde in einer Anzeige angeboten.",
            "en": "The apartment was offered in an advertisement."
          }
        ]
      },
      {
        "id": "sich-von-jemandem-etwas-trennen",
        "group": "l14-g1",
        "term": "sich von jemandem/etwas trennen",
        "fa": "to separate from someone/something; to part with someone/something",
        "type": "phrase",
        "form": "Reflexive verb; `von` takes the dative: `trennt sich – trennte sich – hat sich getrennt`.",
        "source": "Wortschatz.md",
        "example": "Die Kinder können sich von ihrem Hund nicht trennen.",
        "exampleFa": "The children cannot bear to part with their dog.",
        "cloze": "Die Kinder können sich von ihrem Hund nicht ____.",
        "clozeFa": "The children cannot bear to part with their dog.",
        "answer": "trennen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich von jemandem/etwas trennen",
          "sich von jemandem/etwas trennen",
          "trennen"
        ],
        "examples": [
          {
            "de": "Die Kinder können sich von ihrem Hund nicht trennen.",
            "en": "The children cannot bear to part with their dog."
          },
          {
            "de": "Er hat sich von seiner alten Couch getrennt.",
            "en": "He got rid of his old couch."
          }
        ]
      },
      {
        "id": "mit-etwas-zufrieden-sein",
        "group": "l14-g2",
        "term": "mit etwas zufrieden sein",
        "fa": "to be satisfied with something",
        "type": "phrase",
        "form": "`mit` takes the dative: `mit dem Service`, `mit der Ware`.",
        "source": "Wortschatz.md",
        "example": "Ich war mit dem Service immer sehr zufrieden.",
        "exampleFa": "I was always very satisfied with the service.",
        "cloze": "Ich war mit dem Service immer sehr ____.",
        "clozeFa": "I was always very satisfied with the service.",
        "answer": "zufrieden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mit etwas zufrieden sein",
          "mit etwas zufrieden sein",
          "zufrieden"
        ],
        "examples": [
          {
            "de": "Ich war mit dem Service immer sehr zufrieden.",
            "en": "I was always very satisfied with the service."
          },
          {
            "de": "Sind Sie mit der Lieferung zufrieden?",
            "en": "Are you satisfied with the delivery?"
          }
        ]
      },
      {
        "id": "reklamieren",
        "group": "l14-g2",
        "term": "reklamieren",
        "fa": "to complain about; to make a complaint; to return as faulty",
        "type": "verb",
        "form": "Verb ending in `-ieren`, so its participle has no `ge-`: `reklamiert – reklamierte – hat reklamiert`.",
        "source": "Wortschatz.md",
        "example": "Ich habe die verspätete Lieferung reklamiert.",
        "exampleFa": "I complained about the delayed delivery.",
        "cloze": "Ich habe die verspätete Lieferung reklamiert. ____",
        "clozeFa": "I complained about the delayed delivery.",
        "answer": "reklamieren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "reklamieren",
          "reklamieren",
          "reklamieren"
        ],
        "examples": [
          {
            "de": "Ich habe die verspätete Lieferung reklamiert.",
            "en": "I complained about the delayed delivery."
          },
          {
            "de": "Der Kunde reklamiert die beschädigte Ware.",
            "en": "The customer complains about the damaged goods."
          }
        ]
      },
      {
        "id": "pro-woche",
        "group": "l14-g2",
        "term": "pro Woche",
        "fa": "per week; each week",
        "type": "phrase",
        "form": "`pro` expresses a rate and is normally followed by a noun without an article in this expression.",
        "source": "Wortschatz.md",
        "example": "Wie viel müssten wir pro Woche bezahlen?",
        "exampleFa": "How much would we have to pay per week?",
        "cloze": "Wie viel müssten wir ____ bezahlen?",
        "clozeFa": "How much would we have to pay per week?",
        "answer": "pro Woche",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "pro Woche",
          "pro Woche",
          "pro Woche"
        ],
        "examples": [
          {
            "de": "Wie viel müssten wir pro Woche bezahlen?",
            "en": "How much would we have to pay per week?"
          },
          {
            "de": "Der Kurs kostet 20 Euro pro Woche.",
            "en": "The course costs 20 euros per week."
          },
          {
            "de": "Oliver arbeitet nicht mehr als 30 Stunden pro Woche.",
            "en": "Oliver works no more than 30 hours per week."
          }
        ]
      },
      {
        "id": "gern-gerne",
        "group": "l14-g2",
        "term": "gern / gerne",
        "fa": "gladly; willingly; like to",
        "type": "phrase",
        "form": "Adverb; both forms have the same meaning. With `hätte`, it expresses a polite wish.",
        "source": "Wortschatz.md",
        "example": "Ich hätte gern noch nähere Informationen.",
        "exampleFa": "I would like some further information.",
        "cloze": "Ich hätte ____ noch nähere Informationen.",
        "clozeFa": "I would like some further information.",
        "answer": "gern",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "gern / gerne",
          "gern / gerne",
          "gern"
        ],
        "examples": [
          {
            "de": "Ich hätte gern noch nähere Informationen.",
            "en": "I would like some further information."
          },
          {
            "de": "Ich reise gerne nach Österreich.",
            "en": "I like travelling to Austria."
          },
          {
            "de": "Die Sprecherin bewegt sich nicht gern.",
            "en": "The speaker does not like exercising."
          }
        ]
      },
      {
        "id": "wenn-ja",
        "group": "l14-g2",
        "term": "wenn ja",
        "fa": "if so; if yes",
        "type": "phrase",
        "form": "Elliptical expression referring back to a yes/no question; followed by a comma when it introduces the next clause.",
        "source": "Wortschatz.md",
        "example": "Gibt es Kurse für Kinder? Wenn ja, was kosten sie?",
        "exampleFa": "Are there courses for children? If so, how much do they cost?",
        "cloze": "Gibt es Kurse für Kinder? ____, was kosten sie?",
        "clozeFa": "Are there courses for children? If so, how much do they cost?",
        "answer": "wenn ja",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "wenn ja",
          "wenn ja",
          "wenn ja"
        ],
        "examples": [
          {
            "de": "Gibt es Kurse für Kinder? Wenn ja, was kosten sie?",
            "en": "Are there courses for children? If so, how much do they cost?"
          },
          {
            "de": "Haben Sie ein Familienzimmer? Wenn ja, ist es noch frei?",
            "en": "Do you have a family room? If so, is it still available?"
          }
        ]
      },
      {
        "id": "der-hersteller",
        "group": "l14-g2",
        "term": "der Hersteller",
        "fa": "manufacturer; producer",
        "type": "noun",
        "form": "Masculine noun; plural: `die Hersteller`.",
        "source": "Wortschatz.md",
        "example": "Beim Hersteller gibt es Probleme.",
        "exampleFa": "There are problems at the manufacturer.",
        "cloze": "Beim ____ gibt es Probleme.",
        "clozeFa": "There are problems at the manufacturer.",
        "answer": "Hersteller",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Hersteller",
          "Hersteller",
          "Hersteller"
        ],
        "examples": [
          {
            "de": "Beim Hersteller gibt es Probleme.",
            "en": "There are problems at the manufacturer."
          },
          {
            "de": "Bitte wenden Sie sich an den Hersteller.",
            "en": "Please contact the manufacturer."
          }
        ]
      },
      {
        "id": "besonders",
        "group": "l14-g2",
        "term": "besonders",
        "fa": "especially; particularly",
        "type": "verb",
        "form": "Adverb or uninflected predicate adjective; `ganz besonders` adds emphasis.",
        "source": "Wortschatz.md",
        "example": "Das Freizeitprogramm interessiert uns ganz besonders.",
        "exampleFa": "The leisure program interests us especially.",
        "cloze": "Das Freizeitprogramm interessiert uns ganz ____.",
        "clozeFa": "The leisure program interests us especially.",
        "answer": "besonders",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "besonders",
          "besonders",
          "besonders"
        ],
        "examples": [
          {
            "de": "Das Freizeitprogramm interessiert uns ganz besonders.",
            "en": "The leisure program interests us especially."
          },
          {
            "de": "Dieses Angebot ist besonders günstig.",
            "en": "This offer is particularly inexpensive."
          }
        ]
      },
      {
        "id": "der-tenniskurs",
        "group": "l14-g2",
        "term": "der Tenniskurs",
        "fa": "tennis course; tennis class",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Tenniskurse`.",
        "source": "Wortschatz.md",
        "example": "Was kostet der Tenniskurs?",
        "exampleFa": "How much does the tennis class cost?",
        "cloze": "Was kostet der ____?",
        "clozeFa": "How much does the tennis class cost?",
        "answer": "Tenniskurs",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Tenniskurs",
          "Tenniskurs",
          "Tenniskurs"
        ],
        "examples": [
          {
            "de": "Was kostet der Tenniskurs?",
            "en": "How much does the tennis class cost?"
          },
          {
            "de": "Im Sommer werden Tenniskurse angeboten.",
            "en": "Tennis classes are offered in summer."
          }
        ]
      },
      {
        "id": "urlaub-machen",
        "group": "l14-g2",
        "term": "Urlaub machen",
        "fa": "to go on holiday; to take a vacation",
        "type": "phrase",
        "form": "Fixed expression normally used without an article before `Urlaub`: `macht Urlaub – machte Urlaub – hat Urlaub gemacht`.",
        "source": "Wortschatz.md",
        "example": "Wir möchten im August in Österreich Urlaub machen.",
        "exampleFa": "We would like to go on holiday in Austria in August.",
        "cloze": "Wir möchten im August in Österreich ____.",
        "clozeFa": "We would like to go on holiday in Austria in August.",
        "answer": "Urlaub machen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Urlaub machen",
          "Urlaub machen",
          "Urlaub machen"
        ],
        "examples": [
          {
            "de": "Wir möchten im August in Österreich Urlaub machen.",
            "en": "We would like to go on holiday in Austria in August."
          },
          {
            "de": "Die Familie macht zwei Wochen Urlaub.",
            "en": "The family is taking a two-week vacation."
          }
        ]
      },
      {
        "id": "das-freizeitprogramm",
        "group": "l14-g2",
        "term": "das Freizeitprogramm",
        "fa": "leisure program; recreational activities program",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Freizeitprogramme`.",
        "source": "Wortschatz.md",
        "example": "Das Freizeitprogramm für Kinder interessiert uns.",
        "exampleFa": "We are interested in the leisure program for children.",
        "cloze": "Das ____ für Kinder interessiert uns.",
        "clozeFa": "We are interested in the leisure program for children.",
        "answer": "Freizeitprogramm",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Freizeitprogramm",
          "Freizeitprogramm",
          "Freizeitprogramm"
        ],
        "examples": [
          {
            "de": "Das Freizeitprogramm für Kinder interessiert uns.",
            "en": "We are interested in the leisure program for children."
          },
          {
            "de": "Das Hotel bietet ein abwechslungsreiches Freizeitprogramm.",
            "en": "The hotel offers a varied leisure program."
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
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "sonst",
        "group": "l15-g1",
        "term": "sonst",
        "fa": "otherwise; or else; apart from that",
        "type": "verb",
        "form": "As a linking adverb in position 1, it is followed by the finite verb.",
        "source": "Wortschatz.md",
        "example": "Bitte schicken Sie die Sessel, sonst muss ich vom Kaufvertrag zurücktreten.",
        "exampleFa": "Please send the armchairs; otherwise, I must cancel the purchase agreement.",
        "cloze": "Bitte schicken Sie die Sessel, ____ muss ich vom Kaufvertrag zurücktreten.",
        "clozeFa": "Please send the armchairs; otherwise, I must cancel the purchase agreement.",
        "answer": "sonst",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sonst",
          "sonst",
          "sonst"
        ],
        "examples": [
          {
            "de": "Bitte schicken Sie die Sessel, sonst muss ich vom Kaufvertrag zurücktreten.",
            "en": "Please send the armchairs; otherwise, I must cancel the purchase agreement."
          },
          {
            "de": "Beeil dich, sonst kommen wir zu spät.",
            "en": "Hurry up, or else we will be late."
          }
        ]
      },
      {
        "id": "das-moebel-die-moebel",
        "group": "l15-g1",
        "term": "das Möbel / die Möbel",
        "fa": "piece of furniture / furniture",
        "type": "noun",
        "form": "Singular `das Möbel` is possible, but the plural `die Möbel` is much more common when referring to furniture collectively.",
        "source": "Wortschatz.md",
        "example": "Der Hersteller der Möbel hat Probleme.",
        "exampleFa": "The furniture manufacturer is having problems.",
        "cloze": "Der Hersteller der ____ hat Probleme.",
        "clozeFa": "The furniture manufacturer is having problems.",
        "answer": "Möbel",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Möbel / die Möbel",
          "Möbel / die Möbel",
          "Möbel"
        ],
        "examples": [
          {
            "de": "Der Hersteller der Möbel hat Probleme.",
            "en": "The furniture manufacturer is having problems."
          },
          {
            "de": "Wir haben neue Möbel bestellt.",
            "en": "We ordered new furniture."
          }
        ]
      },
      {
        "id": "von-etwas-zuruecktreten",
        "group": "l15-g1",
        "term": "von etwas zurücktreten",
        "fa": "to withdraw from something; to cancel/rescind something",
        "type": "phrase",
        "form": "Separable verb: `tritt zurück – trat zurück – ist zurückgetreten`; `von` takes the dative.",
        "source": "Wortschatz.md",
        "example": "Ich muss vom Kaufvertrag zurücktreten.",
        "exampleFa": "I must withdraw from the purchase agreement.",
        "cloze": "Ich muss vom Kaufvertrag ____.",
        "clozeFa": "I must withdraw from the purchase agreement.",
        "answer": "zurücktreten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "von etwas zurücktreten",
          "von etwas zurücktreten",
          "zurücktreten"
        ],
        "examples": [
          {
            "de": "Ich muss vom Kaufvertrag zurücktreten.",
            "en": "I must withdraw from the purchase agreement."
          },
          {
            "de": "Sie ist von der Vereinbarung zurückgetreten.",
            "en": "She withdrew from the agreement."
          }
        ]
      },
      {
        "id": "der-kaufvertrag",
        "group": "l15-g1",
        "term": "der Kaufvertrag",
        "fa": "purchase agreement; sales contract",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Kaufverträge`.",
        "source": "Wortschatz.md",
        "example": "Ich habe den Kaufvertrag unterschrieben.",
        "exampleFa": "I signed the purchase agreement.",
        "cloze": "Ich habe den ____ unterschrieben.",
        "clozeFa": "I signed the purchase agreement.",
        "answer": "Kaufvertrag",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Kaufvertrag",
          "Kaufvertrag",
          "Kaufvertrag"
        ],
        "examples": [
          {
            "de": "Ich habe den Kaufvertrag unterschrieben.",
            "en": "I signed the purchase agreement."
          },
          {
            "de": "Der Kunde möchte vom Kaufvertrag zurücktreten.",
            "en": "The customer would like to withdraw from the purchase agreement."
          }
        ]
      },
      {
        "id": "spaetestens",
        "group": "l15-g1",
        "term": "spätestens",
        "fa": "at the latest; no later than",
        "type": "verb",
        "form": "Adverb; it establishes the latest possible time.",
        "source": "Wortschatz.md",
        "example": "Die Ware sollte spätestens Ende Juni bei mir sein.",
        "exampleFa": "The goods were supposed to be with me by the end of June at the latest.",
        "cloze": "Die Ware sollte ____ Ende Juni bei mir sein.",
        "clozeFa": "The goods were supposed to be with me by the end of June at the latest.",
        "answer": "spätestens",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "spätestens",
          "spätestens",
          "spätestens"
        ],
        "examples": [
          {
            "de": "Die Ware sollte spätestens Ende Juni bei mir sein.",
            "en": "The goods were supposed to be with me by the end of June at the latest."
          },
          {
            "de": "Bitte kommen Sie spätestens um zehn Uhr.",
            "en": "Please come no later than ten o’clock."
          }
        ]
      },
      {
        "id": "das-bett",
        "group": "l15-g1",
        "term": "das Bett",
        "fa": "bed",
        "type": "noun",
        "form": "Neuter noun; plural: `die Betten`.",
        "source": "Wortschatz.md",
        "example": "Die Kundin hat ein Bett gekauft.",
        "exampleFa": "The customer bought a bed.",
        "cloze": "Die Kundin hat ein ____ gekauft.",
        "clozeFa": "The customer bought a bed.",
        "answer": "Bett",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Bett",
          "Bett",
          "Bett"
        ],
        "examples": [
          {
            "de": "Die Kundin hat ein Bett gekauft.",
            "en": "The customer bought a bed."
          },
          {
            "de": "Das Bett steht im Schlafzimmer.",
            "en": "The bed is in the bedroom."
          }
        ]
      },
      {
        "id": "der-monat",
        "group": "l15-g1",
        "term": "der Monat",
        "fa": "month",
        "type": "noun",
        "form": "Masculine noun; plural: `die Monate`; genitive singular: `des Monats`.",
        "source": "Wortschatz.md",
        "example": "Im Laufe des Monats kommt die Ware an.",
        "exampleFa": "The goods will arrive during the month.",
        "cloze": "Im Laufe des ____s kommt die Ware an.",
        "clozeFa": "The goods will arrive during the month.",
        "answer": "Monat",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Monat",
          "Monat",
          "Monat"
        ],
        "examples": [
          {
            "de": "Im Laufe des Monats kommt die Ware an.",
            "en": "The goods will arrive during the month."
          },
          {
            "de": "Über zwei Monate sind vergangen.",
            "en": "More than two months have passed."
          }
        ]
      },
      {
        "id": "anstrengend",
        "group": "l15-g1",
        "term": "anstrengend",
        "fa": "tiring; exhausting; demanding",
        "type": "adjective",
        "form": "Adjective; it can describe activities, situations, or people.",
        "source": "Wortschatz.md",
        "example": "Die Kunden können manchmal etwas anstrengend sein.",
        "exampleFa": "The customers can sometimes be somewhat demanding.",
        "cloze": "Die Kunden können manchmal etwas ____ sein.",
        "clozeFa": "The customers can sometimes be somewhat demanding.",
        "answer": "anstrengend",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "anstrengend",
          "anstrengend",
          "anstrengend"
        ],
        "examples": [
          {
            "de": "Die Kunden können manchmal etwas anstrengend sein.",
            "en": "The customers can sometimes be somewhat demanding."
          },
          {
            "de": "Der Arbeitstag war sehr anstrengend.",
            "en": "The working day was very tiring."
          },
          {
            "de": "Der Lehrerberuf ist in manchen Bundesländern nicht so anstrengend.",
            "en": "The teaching profession is not as demanding in some federal states."
          },
          {
            "de": "Er findet es anstrengend, jeden Tag viele Kilometer Rad zu fahren.",
            "en": "He finds it tiring to cycle many kilometers every day."
          }
        ]
      },
      {
        "id": "der-chef-die-chefin",
        "group": "l15-g1",
        "term": "der Chef / die Chefin",
        "fa": "boss; manager",
        "type": "noun",
        "form": "Plural: `die Chefs / die Chefinnen`.",
        "source": "Wortschatz.md",
        "example": "Der Chef ist sehr nett.",
        "exampleFa": "The boss is very nice.",
        "cloze": "Der ____ ist sehr nett.",
        "clozeFa": "The boss is very nice.",
        "answer": "Chef",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Chef / die Chefin",
          "Chef / die Chefin",
          "Chef"
        ],
        "examples": [
          {
            "de": "Der Chef ist sehr nett.",
            "en": "The boss is very nice."
          },
          {
            "de": "Die Chefin spricht mit den Kollegen.",
            "en": "The manager is speaking with the colleagues."
          }
        ]
      },
      {
        "id": "zu-jemandem-kommen",
        "group": "l15-g1",
        "term": "zu jemandem kommen",
        "fa": "to come to someone; to come to someone’s place",
        "type": "phrase",
        "form": "`zu` always takes the dative: `zu mir`, `zu dir`, `zu ihm`, `zu ihr`, `zu uns`, `zu euch`, `zu ihnen`.",
        "source": "Wortschatz.md",
        "example": "Ich könnte am Wochenende zu dir kommen.",
        "exampleFa": "I could come to your place at the weekend.",
        "cloze": "Ich könnte am Wochenende zu dir ____.",
        "clozeFa": "I could come to your place at the weekend.",
        "answer": "kommen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zu jemandem kommen",
          "zu jemandem kommen",
          "kommen"
        ],
        "examples": [
          {
            "de": "Ich könnte am Wochenende zu dir kommen.",
            "en": "I could come to your place at the weekend."
          },
          {
            "de": "Kommst du morgen zu mir?",
            "en": "Are you coming to my place tomorrow?"
          }
        ]
      },
      {
        "id": "die-provision",
        "group": "l15-g2",
        "term": "die Provision",
        "fa": "commission; sales commission",
        "type": "noun",
        "form": "Feminine noun; plural: `die Provisionen`; common expression: `eine Provision bekommen`.",
        "source": "Wortschatz.md",
        "example": "Ich bekomme eine Provision, wenn ich etwas verkaufe.",
        "exampleFa": "I receive a commission whenever I sell something.",
        "cloze": "Ich bekomme eine ____, wenn ich etwas verkaufe.",
        "clozeFa": "I receive a commission whenever I sell something.",
        "answer": "Provision",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Provision",
          "Provision",
          "Provision"
        ],
        "examples": [
          {
            "de": "Ich bekomme eine Provision, wenn ich etwas verkaufe.",
            "en": "I receive a commission whenever I sell something."
          },
          {
            "de": "Für jeden Verkauf erhält sie eine Provision.",
            "en": "She receives a commission for every sale."
          }
        ]
      },
      {
        "id": "vergehen",
        "group": "l15-g2",
        "term": "vergehen",
        "fa": "to pass; to elapse",
        "type": "verb",
        "form": "Strong verb: `vergeht – verging – ist vergangen`; uses `sein` in the perfect.",
        "source": "Wortschatz.md",
        "example": "Zwei Monate sind vergangen.",
        "exampleFa": "Two months have passed.",
        "cloze": "Zwei Monate sind vergangen. ____",
        "clozeFa": "Two months have passed.",
        "answer": "vergehen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "vergehen",
          "vergehen",
          "vergehen"
        ],
        "examples": [
          {
            "de": "Zwei Monate sind vergangen.",
            "en": "Two months have passed."
          },
          {
            "de": "Die Zeit vergeht schnell.",
            "en": "Time passes quickly."
          }
        ]
      },
      {
        "id": "sogar",
        "group": "l15-g2",
        "term": "sogar",
        "fa": "even; actually even",
        "type": "word",
        "form": "Focus particle; it emphasizes that something is more or better than expected.",
        "source": "Wortschatz.md",
        "example": "Ich bekomme sogar eine Provision.",
        "exampleFa": "I even receive a commission.",
        "cloze": "Ich bekomme ____ eine Provision.",
        "clozeFa": "I even receive a commission.",
        "answer": "sogar",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sogar",
          "sogar",
          "sogar"
        ],
        "examples": [
          {
            "de": "Ich bekomme sogar eine Provision.",
            "en": "I even receive a commission."
          },
          {
            "de": "Sogar der Chef war auf der Party.",
            "en": "Even the boss was at the party."
          }
        ]
      },
      {
        "id": "die-ware",
        "group": "l15-g2",
        "term": "die Ware",
        "fa": "goods; merchandise; product",
        "type": "noun",
        "form": "Feminine noun; often used as a collective singular; plural `die Waren` for different kinds of goods.",
        "source": "Wortschatz.md",
        "example": "Sie wollten mir die Ware zuschicken.",
        "exampleFa": "You intended to send me the goods.",
        "cloze": "Sie wollten mir die ____ zuschicken.",
        "clozeFa": "You intended to send me the goods.",
        "answer": "Ware",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Ware",
          "Ware",
          "Ware"
        ],
        "examples": [
          {
            "de": "Sie wollten mir die Ware zuschicken.",
            "en": "You intended to send me the goods."
          },
          {
            "de": "Die Ware ist noch nicht angekommen.",
            "en": "The merchandise has not arrived yet."
          }
        ]
      },
      {
        "id": "bestellen",
        "group": "l15-g2",
        "term": "bestellen",
        "fa": "to order",
        "type": "verb",
        "form": "Regular inseparable verb: `bestellt – bestellte – hat bestellt`; often `etwas bei jemandem/einer Firma bestellen`.",
        "source": "Wortschatz.md",
        "example": "Ich habe telefonisch bei Ihnen zwei Sessel bestellt.",
        "exampleFa": "I ordered two armchairs from you by telephone.",
        "cloze": "Ich habe telefonisch bei Ihnen zwei Sessel bestellt. ____",
        "clozeFa": "I ordered two armchairs from you by telephone.",
        "answer": "bestellen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "bestellen",
          "bestellen",
          "bestellen"
        ],
        "examples": [
          {
            "de": "Ich habe telefonisch bei Ihnen zwei Sessel bestellt.",
            "en": "I ordered two armchairs from you by telephone."
          },
          {
            "de": "Wir bestellen das Essen online.",
            "en": "We order the food online."
          }
        ]
      },
      {
        "id": "inzwischen",
        "group": "l15-g2",
        "term": "inzwischen",
        "fa": "meanwhile; by now; in the meantime",
        "type": "verb",
        "form": "Adverb; when it occupies position 1, the finite verb follows immediately.",
        "source": "Wortschatz.md",
        "example": "Inzwischen sind über zwei Monate vergangen.",
        "exampleFa": "More than two months have passed by now.",
        "cloze": "____ sind über zwei Monate vergangen.",
        "clozeFa": "More than two months have passed by now.",
        "answer": "inzwischen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "inzwischen",
          "inzwischen",
          "inzwischen"
        ],
        "examples": [
          {
            "de": "Inzwischen sind über zwei Monate vergangen.",
            "en": "More than two months have passed by now."
          },
          {
            "de": "Die Heizung wurde inzwischen repariert.",
            "en": "The heating has been repaired in the meantime."
          }
        ]
      },
      {
        "id": "die-serviceabteilung",
        "group": "l15-g2",
        "term": "die Serviceabteilung",
        "fa": "service department; customer service department",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Serviceabteilungen`.",
        "source": "Wortschatz.md",
        "example": "Ich telefonierte mit der Serviceabteilung.",
        "exampleFa": "I spoke with the service department by telephone.",
        "cloze": "Ich telefonierte mit der ____.",
        "clozeFa": "I spoke with the service department by telephone.",
        "answer": "Serviceabteilung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Serviceabteilung",
          "Serviceabteilung",
          "Serviceabteilung"
        ],
        "examples": [
          {
            "de": "Ich telefonierte mit der Serviceabteilung.",
            "en": "I spoke with the service department by telephone."
          },
          {
            "de": "Die Serviceabteilung kümmert sich um das Problem.",
            "en": "The service department is taking care of the problem."
          }
        ]
      },
      {
        "id": "verkaufen",
        "group": "l15-g2",
        "term": "verkaufen",
        "fa": "to sell",
        "type": "verb",
        "form": "Strong verb: `verkauft – verkaufte – hat verkauft`; pattern: `jemandem (Dat) etwas (Akk) verkaufen`.",
        "source": "Wortschatz.md",
        "example": "Ich habe der Kundin ein Bett verkauft.",
        "exampleFa": "I sold the customer a bed.",
        "cloze": "Ich habe der Kundin ein Bett verkauft. ____",
        "clozeFa": "I sold the customer a bed.",
        "answer": "verkaufen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verkaufen",
          "verkaufen",
          "verkaufen"
        ],
        "examples": [
          {
            "de": "Ich habe der Kundin ein Bett verkauft.",
            "en": "I sold the customer a bed."
          },
          {
            "de": "Das Möbelhaus verkauft Tische und Stühle.",
            "en": "The furniture store sells tables and chairs."
          }
        ]
      },
      {
        "id": "der-erfolg",
        "group": "l15-g2",
        "term": "der Erfolg",
        "fa": "success",
        "type": "noun",
        "form": "Plural: `die Erfolge`; common expression: `Erfolg haben`.",
        "source": "Wortschatz.md",
        "example": "Ich habe auch schon Erfolge.",
        "exampleFa": "I have already had some successes too.",
        "cloze": "Ich habe auch schon ____e.",
        "clozeFa": "I have already had some successes too.",
        "answer": "Erfolg",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Erfolg",
          "Erfolg",
          "Erfolg"
        ],
        "examples": [
          {
            "de": "Ich habe auch schon Erfolge.",
            "en": "I have already had some successes too."
          },
          {
            "de": "Mit ihrer Bewerbung hatte sie Erfolg.",
            "en": "She was successful with her application."
          },
          {
            "de": "Die Gruppe hatte keinen Erfolg mehr.",
            "en": "The group was no longer successful."
          }
        ]
      },
      {
        "id": "der-verkaeufer-die-verkaeuferin",
        "group": "l15-g2",
        "term": "der Verkäufer / die Verkäuferin",
        "fa": "salesman / saleswoman; sales assistant",
        "type": "noun",
        "form": "Plural: `die Verkäufer / die Verkäuferinnen`.",
        "source": "Wortschatz.md",
        "example": "Sie arbeitet seit drei Wochen als Verkäuferin.",
        "exampleFa": "She has been working as a saleswoman for three weeks.",
        "cloze": "Sie arbeitet seit drei Wochen als ____in.",
        "clozeFa": "She has been working as a saleswoman for three weeks.",
        "answer": "Verkäufer",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Verkäufer / die Verkäuferin",
          "Verkäufer / die Verkäuferin",
          "Verkäufer"
        ],
        "examples": [
          {
            "de": "Sie arbeitet seit drei Wochen als Verkäuferin.",
            "en": "She has been working as a saleswoman for three weeks."
          },
          {
            "de": "Der Verkäufer berät einen Kunden.",
            "en": "The sales assistant advises a customer."
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
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "ankommen",
        "group": "l16-g1",
        "term": "ankommen",
        "fa": "to arrive",
        "type": "verb",
        "form": "Separable verb: `kommt an – kam an – ist angekommen`; uses `sein` in the perfect.",
        "source": "Wortschatz.md",
        "example": "Die Sessel sind noch nicht angekommen.",
        "exampleFa": "The armchairs have still not arrived.",
        "cloze": "Die Sessel sind noch nicht angekommen. ____",
        "clozeFa": "The armchairs have still not arrived.",
        "answer": "ankommen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "ankommen",
          "ankommen",
          "ankommen"
        ],
        "examples": [
          {
            "de": "Die Sessel sind noch nicht angekommen.",
            "en": "The armchairs have still not arrived."
          },
          {
            "de": "Der Zug kommt um acht Uhr an.",
            "en": "The train arrives at eight o’clock."
          }
        ]
      },
      {
        "id": "im-laufe",
        "group": "l16-g1",
        "term": "im Laufe",
        "fa": "during; in the course of",
        "type": "phrase",
        "form": "Fixed expression followed by the genitive: `im Laufe des Tages/Monats/Jahres`.",
        "source": "Wortschatz.md",
        "example": "Die Ware sollte im Laufe des Monats ankommen.",
        "exampleFa": "The goods were supposed to arrive during the month.",
        "cloze": "Die Ware sollte ____ des Monats ankommen.",
        "clozeFa": "The goods were supposed to arrive during the month.",
        "answer": "im Laufe",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "im Laufe",
          "im Laufe",
          "im Laufe"
        ],
        "examples": [
          {
            "de": "Die Ware sollte im Laufe des Monats ankommen.",
            "en": "The goods were supposed to arrive during the month."
          },
          {
            "de": "Ich rufe Sie im Laufe des Tages an.",
            "en": "I will call you during the day."
          }
        ]
      },
      {
        "id": "der-kollege-die-kollegin",
        "group": "l16-g1",
        "term": "der Kollege / die Kollegin",
        "fa": "male colleague / female colleague",
        "type": "noun",
        "form": "Plural: `die Kollegen / die Kolleginnen`; masculine `Kollege` is a weak noun: `mit dem Kollegen`.",
        "source": "Wortschatz.md",
        "example": "Meine Kollegen sind hilfsbereit.",
        "exampleFa": "My colleagues are helpful.",
        "cloze": "Meine ____n sind hilfsbereit.",
        "clozeFa": "My colleagues are helpful.",
        "answer": "Kollege",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Kollege / die Kollegin",
          "Kollege / die Kollegin",
          "Kollege"
        ],
        "examples": [
          {
            "de": "Meine Kollegen sind hilfsbereit.",
            "en": "My colleagues are helpful."
          },
          {
            "de": "Ich arbeite mit einer netten Kollegin.",
            "en": "I work with a nice colleague."
          },
          {
            "de": "Er versteht sich gut mit seinen Kollegen.",
            "en": "He gets along well with his colleagues."
          }
        ]
      },
      {
        "id": "der-sessel",
        "group": "l16-g1",
        "term": "der Sessel",
        "fa": "armchair",
        "type": "noun",
        "form": "Masculine noun; plural: `die Sessel`.",
        "source": "Wortschatz.md",
        "example": "Ich habe zwei Sessel bestellt.",
        "exampleFa": "I ordered two armchairs.",
        "cloze": "Ich habe zwei ____ bestellt.",
        "clozeFa": "I ordered two armchairs.",
        "answer": "Sessel",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Sessel",
          "Sessel",
          "Sessel"
        ],
        "examples": [
          {
            "de": "Ich habe zwei Sessel bestellt.",
            "en": "I ordered two armchairs."
          },
          {
            "de": "Der Sessel steht neben der Couch.",
            "en": "The armchair is next to the couch."
          }
        ]
      },
      {
        "id": "zuschicken",
        "group": "l16-g1",
        "term": "zuschicken",
        "fa": "to send; to mail to someone",
        "type": "verb",
        "form": "Separable verb: `schickt zu – schickte zu – hat zugeschickt`; pattern: `jemandem (Dat) etwas (Akk) zuschicken`.",
        "source": "Wortschatz.md",
        "example": "Bitte schicken Sie mir die Unterlagen zu.",
        "exampleFa": "Please send me the documents.",
        "cloze": "Bitte schicken Sie mir die Unterlagen zu. ____",
        "clozeFa": "Please send me the documents.",
        "answer": "zuschicken",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zuschicken",
          "zuschicken",
          "zuschicken"
        ],
        "examples": [
          {
            "de": "Bitte schicken Sie mir die Unterlagen zu.",
            "en": "Please send me the documents."
          },
          {
            "de": "Die Firma wollte mir die Ware zuschicken.",
            "en": "The company intended to send me the goods."
          }
        ]
      },
      {
        "id": "der-kunde-die-kundin",
        "group": "l16-g1",
        "term": "der Kunde / die Kundin",
        "fa": "male customer / female customer",
        "type": "noun",
        "form": "Plural: `die Kunden / die Kundinnen`; masculine `Kunde` is a weak noun: `mit dem Kunden`.",
        "source": "Wortschatz.md",
        "example": "Eine Kundin möchte eine Couch kaufen.",
        "exampleFa": "A customer would like to buy a couch.",
        "cloze": "Eine Kundin möchte eine Couch kaufen. ____",
        "clozeFa": "A customer would like to buy a couch.",
        "answer": "Kunde / die Kundin",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Kunde / die Kundin",
          "Kunde / die Kundin",
          "Kunde / die Kundin"
        ],
        "examples": [
          {
            "de": "Eine Kundin möchte eine Couch kaufen.",
            "en": "A customer would like to buy a couch."
          },
          {
            "de": "Der Verkäufer hilft dem Kunden.",
            "en": "The sales assistant helps the customer."
          }
        ]
      },
      {
        "id": "die-couch",
        "group": "l16-g1",
        "term": "die Couch",
        "fa": "couch; sofa",
        "type": "noun",
        "form": "Feminine noun; plural: `die Couches`.",
        "source": "Wortschatz.md",
        "example": "Sie möchte sich eine Couch kaufen.",
        "exampleFa": "She would like to buy herself a couch.",
        "cloze": "Sie möchte sich eine ____ kaufen.",
        "clozeFa": "She would like to buy herself a couch.",
        "answer": "Couch",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Couch",
          "Couch",
          "Couch"
        ],
        "examples": [
          {
            "de": "Sie möchte sich eine Couch kaufen.",
            "en": "She would like to buy herself a couch."
          },
          {
            "de": "Die Couch steht im Wohnzimmer.",
            "en": "The couch is in the living room."
          }
        ]
      },
      {
        "id": "mit-jemandem-telefonieren",
        "group": "l16-g1",
        "term": "mit jemandem telefonieren",
        "fa": "to speak with someone on the telephone",
        "type": "phrase",
        "form": "`mit` always takes the dative: `mit der Serviceabteilung`, `mit dem Hersteller`.",
        "source": "Wortschatz.md",
        "example": "Ich habe mit einer Mitarbeiterin telefoniert.",
        "exampleFa": "I spoke with an employee by telephone.",
        "cloze": "Ich habe mit einer Mitarbeiterin telefoniert. ____",
        "clozeFa": "I spoke with an employee by telephone.",
        "answer": "mit jemandem telefonieren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mit jemandem telefonieren",
          "mit jemandem telefonieren",
          "mit jemandem telefonieren"
        ],
        "examples": [
          {
            "de": "Ich habe mit einer Mitarbeiterin telefoniert.",
            "en": "I spoke with an employee by telephone."
          },
          {
            "de": "Er telefoniert gerade mit dem Kunden.",
            "en": "He is currently speaking with the customer on the phone."
          }
        ]
      },
      {
        "id": "nett",
        "group": "l16-g1",
        "term": "nett",
        "fa": "nice; kind; pleasant",
        "type": "adjective",
        "form": "Adjective; after `sein`, it has no ending.",
        "source": "Wortschatz.md",
        "example": "Der Chef und die Kollegen sind sehr nett.",
        "exampleFa": "The boss and colleagues are very nice.",
        "cloze": "Der Chef und die Kollegen sind sehr ____.",
        "clozeFa": "The boss and colleagues are very nice.",
        "answer": "nett",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "nett",
          "nett",
          "nett"
        ],
        "examples": [
          {
            "de": "Der Chef und die Kollegen sind sehr nett.",
            "en": "The boss and colleagues are very nice."
          },
          {
            "de": "Das ist nett von dir.",
            "en": "That is kind of you."
          }
        ]
      },
      {
        "id": "jemanden-nehmen",
        "group": "l16-g1",
        "term": "jemanden nehmen",
        "fa": "to choose/accept someone; to hire someone",
        "type": "phrase",
        "form": "Informal in employment contexts; more formal: `jemanden einstellen`.",
        "source": "Wortschatz.md",
        "example": "Die Firma hat mich genommen.",
        "exampleFa": "The company hired me.",
        "cloze": "Die Firma hat mich genommen. ____",
        "clozeFa": "The company hired me.",
        "answer": "jemanden nehmen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "jemanden nehmen",
          "jemanden nehmen",
          "jemanden nehmen"
        ],
        "examples": [
          {
            "de": "Die Firma hat mich genommen.",
            "en": "The company hired me."
          },
          {
            "de": "Sie haben eine andere Bewerberin genommen.",
            "en": "They selected another applicant."
          }
        ]
      },
      {
        "id": "das-moebelhaus",
        "group": "l16-g2",
        "term": "das Möbelhaus",
        "fa": "furniture store",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Möbelhäuser`.",
        "source": "Wortschatz.md",
        "example": "Das Bewerbungsgespräch war bei einem Möbelhaus.",
        "exampleFa": "The job interview was with a furniture store.",
        "cloze": "Das Bewerbungsgespräch war bei einem ____.",
        "clozeFa": "The job interview was with a furniture store.",
        "answer": "Möbelhaus",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Möbelhaus",
          "Möbelhaus",
          "Möbelhaus"
        ],
        "examples": [
          {
            "de": "Das Bewerbungsgespräch war bei einem Möbelhaus.",
            "en": "The job interview was with a furniture store."
          },
          {
            "de": "Wir kaufen den Tisch in einem Möbelhaus.",
            "en": "We are buying the table at a furniture store."
          }
        ]
      },
      {
        "id": "sich-langweilen",
        "group": "l16-g2",
        "term": "sich langweilen",
        "fa": "to be bored",
        "type": "verb",
        "form": "Reflexive verb: `langweilt sich – langweilte sich – hat sich gelangweilt`.",
        "source": "Wortschatz.md",
        "example": "Ich langweile mich schrecklich.",
        "exampleFa": "I am terribly bored.",
        "cloze": "Ich langweile mich schrecklich. ____",
        "clozeFa": "I am terribly bored.",
        "answer": "sich langweilen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich langweilen",
          "sich langweilen",
          "sich langweilen"
        ],
        "examples": [
          {
            "de": "Ich langweile mich schrecklich.",
            "en": "I am terribly bored."
          },
          {
            "de": "Die Kinder haben sich nicht gelangweilt.",
            "en": "The children were not bored."
          }
        ]
      },
      {
        "id": "die-bewerbung",
        "group": "l16-g2",
        "term": "die Bewerbung",
        "fa": "application; job application",
        "type": "noun",
        "form": "Feminine noun; plural: `die Bewerbungen`.",
        "source": "Wortschatz.md",
        "example": "Ich habe viele Bewerbungen verschickt.",
        "exampleFa": "I sent out many applications.",
        "cloze": "Ich habe viele ____en verschickt.",
        "clozeFa": "I sent out many applications.",
        "answer": "Bewerbung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Bewerbung",
          "Bewerbung",
          "Bewerbung"
        ],
        "examples": [
          {
            "de": "Ich habe viele Bewerbungen verschickt.",
            "en": "I sent out many applications."
          },
          {
            "de": "Die Firma hat meine Bewerbung erhalten.",
            "en": "The company received my application."
          }
        ]
      },
      {
        "id": "feststellen",
        "group": "l16-g2",
        "term": "feststellen",
        "fa": "to determine; to establish; to notice",
        "type": "verb",
        "form": "Separable regular verb: `stellt fest – stellte fest – hat festgestellt`.",
        "source": "Wortschatz.md",
        "example": "Im Krankenhaus haben sie festgestellt, dass das Bein gebrochen war.",
        "exampleFa": "At the hospital, they determined that the leg was broken.",
        "cloze": "Im Krankenhaus haben sie festgestellt, dass das Bein gebrochen war. ____",
        "clozeFa": "At the hospital, they determined that the leg was broken.",
        "answer": "feststellen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "feststellen",
          "feststellen",
          "feststellen"
        ],
        "examples": [
          {
            "de": "Im Krankenhaus haben sie festgestellt, dass das Bein gebrochen war.",
            "en": "At the hospital, they determined that the leg was broken."
          },
          {
            "de": "Der Arzt stellte eine Verletzung fest.",
            "en": "The doctor identified an injury."
          }
        ]
      },
      {
        "id": "die-tablette",
        "group": "l16-g2",
        "term": "die Tablette",
        "fa": "tablet; pill",
        "type": "noun",
        "form": "Feminine noun; plural: `die Tabletten`; common expression: `eine Tablette nehmen`.",
        "source": "Wortschatz.md",
        "example": "Ich muss Tabletten nehmen.",
        "exampleFa": "I have to take pills.",
        "cloze": "Ich muss ____n nehmen.",
        "clozeFa": "I have to take pills.",
        "answer": "Tablette",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Tablette",
          "Tablette",
          "Tablette"
        ],
        "examples": [
          {
            "de": "Ich muss Tabletten nehmen.",
            "en": "I have to take pills."
          },
          {
            "de": "Nehmen Sie diese Tablette nach dem Essen.",
            "en": "Take this tablet after eating."
          }
        ]
      },
      {
        "id": "endlich",
        "group": "l16-g2",
        "term": "endlich",
        "fa": "finally; at last",
        "type": "verb",
        "form": "Adverb; its form does not change.",
        "source": "Wortschatz.md",
        "example": "Ich habe endlich eine Arbeit gefunden.",
        "exampleFa": "I finally found a job.",
        "cloze": "Ich habe ____ eine Arbeit gefunden.",
        "clozeFa": "I finally found a job.",
        "answer": "endlich",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "endlich",
          "endlich",
          "endlich"
        ],
        "examples": [
          {
            "de": "Ich habe endlich eine Arbeit gefunden.",
            "en": "I finally found a job."
          },
          {
            "de": "Der Bus ist endlich gekommen.",
            "en": "The bus finally arrived."
          }
        ]
      },
      {
        "id": "gebrochen",
        "group": "l16-g2",
        "term": "gebrochen",
        "fa": "broken; fractured",
        "type": "verb",
        "form": "Past participle of `brechen`: `bricht – brach – hat gebrochen`; also used as an adjective.",
        "source": "Wortschatz.md",
        "example": "Das Bein war gebrochen.",
        "exampleFa": "The leg was broken.",
        "cloze": "Das Bein war ____.",
        "clozeFa": "The leg was broken.",
        "answer": "gebrochen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "gebrochen",
          "gebrochen",
          "gebrochen"
        ],
        "examples": [
          {
            "de": "Das Bein war gebrochen.",
            "en": "The leg was broken."
          },
          {
            "de": "Sie hat sich den Arm gebrochen.",
            "en": "She broke her arm."
          }
        ]
      },
      {
        "id": "schade",
        "group": "l16-g2",
        "term": "schade",
        "fa": "a pity; too bad; unfortunate",
        "type": "adjective",
        "form": "Predicate adjective, often followed by a `dass` clause.",
        "source": "Wortschatz.md",
        "example": "Schade, dass du nicht kommen konntest.",
        "exampleFa": "It is a pity that you could not come.",
        "cloze": "____, dass du nicht kommen konntest.",
        "clozeFa": "It is a pity that you could not come.",
        "answer": "schade",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "schade",
          "schade",
          "schade"
        ],
        "examples": [
          {
            "de": "Schade, dass du nicht kommen konntest.",
            "en": "It is a pity that you could not come."
          },
          {
            "de": "Das ist wirklich schade.",
            "en": "That is really unfortunate."
          }
        ]
      },
      {
        "id": "das-bewerbungsgespraech",
        "group": "l16-g2",
        "term": "das Bewerbungsgespräch",
        "fa": "job interview",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Bewerbungsgespräche`.",
        "source": "Wortschatz.md",
        "example": "Ich wurde zu einem Bewerbungsgespräch eingeladen.",
        "exampleFa": "I was invited to a job interview.",
        "cloze": "Ich wurde zu einem ____ eingeladen.",
        "clozeFa": "I was invited to a job interview.",
        "answer": "Bewerbungsgespräch",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Bewerbungsgespräch",
          "Bewerbungsgespräch",
          "Bewerbungsgespräch"
        ],
        "examples": [
          {
            "de": "Ich wurde zu einem Bewerbungsgespräch eingeladen.",
            "en": "I was invited to a job interview."
          },
          {
            "de": "Das Bewerbungsgespräch findet morgen statt.",
            "en": "The job interview takes place tomorrow."
          }
        ]
      },
      {
        "id": "verschicken",
        "group": "l16-g2",
        "term": "verschicken",
        "fa": "to send; to dispatch",
        "type": "verb",
        "form": "Regular inseparable verb: `verschickt – verschickte – hat verschickt`.",
        "source": "Wortschatz.md",
        "example": "Sie hat zehn Bewerbungen verschickt.",
        "exampleFa": "She sent out ten applications.",
        "cloze": "Sie hat zehn Bewerbungen verschickt. ____",
        "clozeFa": "She sent out ten applications.",
        "answer": "verschicken",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verschicken",
          "verschicken",
          "verschicken"
        ],
        "examples": [
          {
            "de": "Sie hat zehn Bewerbungen verschickt.",
            "en": "She sent out ten applications."
          },
          {
            "de": "Wir verschicken die Unterlagen per Post.",
            "en": "We send the documents by post."
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
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "von-frueher",
        "group": "l17-g1",
        "term": "von früher",
        "fa": "from the past; from earlier times; old",
        "type": "phrase",
        "form": "Fixed expression describing something or someone known in the past.",
        "source": "Wortschatz.md",
        "example": "Auf der Party waren viele Leute von früher.",
        "exampleFa": "Many people from the old days were at the party.",
        "cloze": "Auf der Party waren viele Leute ____.",
        "clozeFa": "Many people from the old days were at the party.",
        "answer": "von früher",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "von früher",
          "von früher",
          "von früher"
        ],
        "examples": [
          {
            "de": "Auf der Party waren viele Leute von früher.",
            "en": "Many people from the old days were at the party."
          },
          {
            "de": "Sie ist eine Freundin von früher.",
            "en": "She is an old friend."
          }
        ]
      },
      {
        "id": "operieren",
        "group": "l17-g1",
        "term": "operieren",
        "fa": "to operate; to perform surgery",
        "type": "verb",
        "form": "Regular verb ending in `-ieren`: `operiert – operierte – hat operiert`; often used in the passive.",
        "source": "Wortschatz.md",
        "example": "Das Bein wurde gestern operiert.",
        "exampleFa": "The leg was operated on yesterday.",
        "cloze": "Das Bein wurde gestern operiert. ____",
        "clozeFa": "The leg was operated on yesterday.",
        "answer": "operieren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "operieren",
          "operieren",
          "operieren"
        ],
        "examples": [
          {
            "de": "Das Bein wurde gestern operiert.",
            "en": "The leg was operated on yesterday."
          },
          {
            "de": "Der Arzt hat den Patienten operiert.",
            "en": "The doctor operated on the patient."
          }
        ]
      },
      {
        "id": "der-gips",
        "group": "l17-g1",
        "term": "der Gips",
        "fa": "plaster cast; plaster",
        "type": "noun",
        "form": "Masculine noun; plural `die Gipse` is uncommon in this medical meaning.",
        "source": "Wortschatz.md",
        "example": "Ich werde einen Gips bekommen.",
        "exampleFa": "I will get a plaster cast.",
        "cloze": "Ich werde einen ____ bekommen.",
        "clozeFa": "I will get a plaster cast.",
        "answer": "Gips",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Gips",
          "Gips",
          "Gips"
        ],
        "examples": [
          {
            "de": "Ich werde einen Gips bekommen.",
            "en": "I will get a plaster cast."
          },
          {
            "de": "Der Gips muss sechs Wochen am Bein bleiben.",
            "en": "The cast must remain on the leg for six weeks."
          }
        ]
      },
      {
        "id": "bestimmt",
        "group": "l17-g1",
        "term": "bestimmt",
        "fa": "certainly; surely; probably",
        "type": "verb",
        "form": "Adverb in this meaning; it can express strong expectation.",
        "source": "Wortschatz.md",
        "example": "Es hätte dir bestimmt Spaß gemacht.",
        "exampleFa": "You would certainly have enjoyed it.",
        "cloze": "Es hätte dir ____ Spaß gemacht.",
        "clozeFa": "You would certainly have enjoyed it.",
        "answer": "bestimmt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "bestimmt",
          "bestimmt",
          "bestimmt"
        ],
        "examples": [
          {
            "de": "Es hätte dir bestimmt Spaß gemacht.",
            "en": "You would certainly have enjoyed it."
          },
          {
            "de": "Er kommt bestimmt später.",
            "en": "He will probably come later."
          }
        ]
      },
      {
        "id": "jemandem-spass-machen",
        "group": "l17-g1",
        "term": "jemandem Spaß machen",
        "fa": "to be fun for someone; to give someone pleasure",
        "type": "phrase",
        "form": "The person is dative: `macht Spaß – machte Spaß – hat Spaß gemacht`.",
        "source": "Wortschatz.md",
        "example": "Die Party hat mir Spaß gemacht.",
        "exampleFa": "I enjoyed the party.",
        "cloze": "Die Party hat mir Spaß gemacht. ____",
        "clozeFa": "I enjoyed the party.",
        "answer": "jemandem Spaß machen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "jemandem Spaß machen",
          "jemandem Spaß machen",
          "jemandem Spaß machen"
        ],
        "examples": [
          {
            "de": "Die Party hat mir Spaß gemacht.",
            "en": "I enjoyed the party."
          },
          {
            "de": "Es hätte dir bestimmt Spaß gemacht.",
            "en": "You would certainly have enjoyed it."
          },
          {
            "de": "Der Sprecher findet, dass Sport Spaß machen muss.",
            "en": "The speaker thinks that sport must be fun."
          }
        ]
      },
      {
        "id": "der-job",
        "group": "l17-g1",
        "term": "der Job",
        "fa": "job",
        "type": "noun",
        "form": "Masculine noun; plural: `die Jobs`.",
        "source": "Wortschatz.md",
        "example": "Ich habe endlich einen Job!",
        "exampleFa": "I finally have a job!",
        "cloze": "Ich habe endlich einen ____!",
        "clozeFa": "I finally have a job!",
        "answer": "Job",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Job",
          "Job",
          "Job"
        ],
        "examples": [
          {
            "de": "Ich habe endlich einen Job!",
            "en": "I finally have a job!"
          },
          {
            "de": "Sie sucht einen neuen Job.",
            "en": "She is looking for a new job."
          }
        ]
      },
      {
        "id": "schrecklich",
        "group": "l17-g1",
        "term": "schrecklich",
        "fa": "terrible; terribly; dreadful",
        "type": "verb",
        "form": "Adjective or intensifying adverb.",
        "source": "Wortschatz.md",
        "example": "Ich langweile mich schrecklich.",
        "exampleFa": "I am terribly bored.",
        "cloze": "Ich langweile mich ____.",
        "clozeFa": "I am terribly bored.",
        "answer": "schrecklich",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "schrecklich",
          "schrecklich",
          "schrecklich"
        ],
        "examples": [
          {
            "de": "Ich langweile mich schrecklich.",
            "en": "I am terribly bored."
          },
          {
            "de": "Das Wetter ist schrecklich.",
            "en": "The weather is terrible."
          }
        ]
      },
      {
        "id": "dauern",
        "group": "l17-g1",
        "term": "dauern",
        "fa": "to last; to take time",
        "type": "verb",
        "form": "Regular verb: `dauert – dauerte – hat gedauert`; common impersonal pattern: `es dauert`.",
        "source": "Wortschatz.md",
        "example": "Es wird noch einige Zeit dauern.",
        "exampleFa": "It will take some more time.",
        "cloze": "Es wird noch einige Zeit ____.",
        "clozeFa": "It will take some more time.",
        "answer": "dauern",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "dauern",
          "dauern",
          "dauern"
        ],
        "examples": [
          {
            "de": "Es wird noch einige Zeit dauern.",
            "en": "It will take some more time."
          },
          {
            "de": "Wie lange dauert die Behandlung?",
            "en": "How long does the treatment take?"
          }
        ]
      },
      {
        "id": "wiedersehen",
        "group": "l17-g1",
        "term": "wiedersehen",
        "fa": "to see again",
        "type": "verb",
        "form": "Separable strong verb: `sieht wieder – sah wieder – hat wiedergesehen`; with `zu`: `wiederzusehen`.",
        "source": "Wortschatz.md",
        "example": "Ich freue mich, dich wiederzusehen.",
        "exampleFa": "I am happy to see you again.",
        "cloze": "Ich freue mich, dich wiederzusehen. ____",
        "clozeFa": "I am happy to see you again.",
        "answer": "wiedersehen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "wiedersehen",
          "wiedersehen",
          "wiedersehen"
        ],
        "examples": [
          {
            "de": "Ich freue mich, dich wiederzusehen.",
            "en": "I am happy to see you again."
          },
          {
            "de": "Sie hat viele Freunde von früher wiedergesehen.",
            "en": "She saw many old friends again."
          }
        ]
      },
      {
        "id": "der-geburtstagsgruss",
        "group": "l17-g1",
        "term": "der Geburtstagsgruß",
        "fa": "birthday greeting; birthday wish",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Geburtstagsgrüße`.",
        "source": "Wortschatz.md",
        "example": "Vielen Dank für deine lieben Geburtstagsgrüße.",
        "exampleFa": "Thank you very much for your lovely birthday wishes.",
        "cloze": "Vielen Dank für deine lieben Geburtstagsgrüße. ____",
        "clozeFa": "Thank you very much for your lovely birthday wishes.",
        "answer": "Geburtstagsgruß",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Geburtstagsgruß",
          "Geburtstagsgruß",
          "Geburtstagsgruß"
        ],
        "examples": [
          {
            "de": "Vielen Dank für deine lieben Geburtstagsgrüße.",
            "en": "Thank you very much for your lovely birthday wishes."
          },
          {
            "de": "Sie hat mir Geburtstagsgrüße geschickt.",
            "en": "She sent me birthday greetings."
          }
        ]
      },
      {
        "id": "das-wochenende",
        "group": "l17-g2",
        "term": "das Wochenende",
        "fa": "weekend",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Wochenenden`; common phrase: `am Wochenende`.",
        "source": "Wortschatz.md",
        "example": "Am Wochenende kann ich nach Hause.",
        "exampleFa": "I can go home at the weekend.",
        "cloze": "Am ____ kann ich nach Hause.",
        "clozeFa": "I can go home at the weekend.",
        "answer": "Wochenende",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Wochenende",
          "Wochenende",
          "Wochenende"
        ],
        "examples": [
          {
            "de": "Am Wochenende kann ich nach Hause.",
            "en": "I can go home at the weekend."
          },
          {
            "de": "Was machst du am Wochenende?",
            "en": "What are you doing at the weekend?"
          },
          {
            "de": "Im Nordosten kann es am Wochenende schneien.",
            "en": "It may snow in the northeast at the weekend."
          }
        ]
      },
      {
        "id": "besuchen",
        "group": "l17-g2",
        "term": "besuchen",
        "fa": "to visit; to attend",
        "type": "verb",
        "form": "Regular inseparable verb: `besucht – besuchte – hat besucht`; takes the accusative.",
        "source": "Wortschatz.md",
        "example": "Besuch mich doch mal!",
        "exampleFa": "Come and visit me sometime!",
        "cloze": "Besuch mich doch mal! ____",
        "clozeFa": "Come and visit me sometime!",
        "answer": "besuchen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "besuchen",
          "besuchen",
          "besuchen"
        ],
        "examples": [
          {
            "de": "Besuch mich doch mal!",
            "en": "Come and visit me sometime!"
          },
          {
            "de": "Wir besuchen unsere Freundin im Krankenhaus.",
            "en": "We visit our friend in the hospital."
          }
        ]
      },
      {
        "id": "liegen",
        "group": "l17-g2",
        "term": "liegen",
        "fa": "to lie; to be lying",
        "type": "verb",
        "form": "Strong verb: `liegt – lag – hat gelegen`.",
        "source": "Wortschatz.md",
        "example": "Jetzt liege ich im Krankenhaus.",
        "exampleFa": "Now I am lying in the hospital.",
        "cloze": "Jetzt liege ich im Krankenhaus. ____",
        "clozeFa": "Now I am lying in the hospital.",
        "answer": "liegen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "liegen",
          "liegen",
          "liegen"
        ],
        "examples": [
          {
            "de": "Jetzt liege ich im Krankenhaus.",
            "en": "Now I am lying in the hospital."
          },
          {
            "de": "Das Buch liegt auf dem Tisch.",
            "en": "The book is lying on the table."
          }
        ]
      },
      {
        "id": "laufen",
        "group": "l17-g2",
        "term": "laufen",
        "fa": "to walk; to run",
        "type": "verb",
        "form": "Strong verb: `läuft – lief – ist gelaufen`.",
        "source": "Wortschatz.md",
        "example": "Bald kann ich wieder normal laufen.",
        "exampleFa": "Soon I will be able to walk normally again.",
        "cloze": "Bald kann ich wieder normal ____.",
        "clozeFa": "Soon I will be able to walk normally again.",
        "answer": "laufen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "laufen",
          "laufen",
          "laufen"
        ],
        "examples": [
          {
            "de": "Bald kann ich wieder normal laufen.",
            "en": "Soon I will be able to walk normally again."
          },
          {
            "de": "Sie ist fünf Kilometer gelaufen.",
            "en": "She ran five kilometers."
          }
        ]
      },
      {
        "id": "stell-dir-vor",
        "group": "l17-g2",
        "term": "Stell dir vor!",
        "fa": "Imagine!; Guess what!",
        "type": "phrase",
        "form": "Informal imperative of reflexive `sich etwas vorstellen`; `dir` is dative and `vor` is separable.",
        "source": "Wortschatz.md",
        "example": "Stell dir vor, sie haben mich genommen!",
        "exampleFa": "Imagine, they hired me!",
        "cloze": "____ dir vor, sie haben mich genommen!",
        "clozeFa": "Imagine, they hired me!",
        "answer": "Stell",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Stell dir vor!",
          "Stell dir vor!",
          "Stell"
        ],
        "examples": [
          {
            "de": "Stell dir vor, sie haben mich genommen!",
            "en": "Imagine, they hired me!"
          },
          {
            "de": "Stell dir vor, ich habe einen neuen Job!",
            "en": "Guess what, I have a new job!"
          }
        ]
      },
      {
        "id": "hinfallen",
        "group": "l17-g2",
        "term": "hinfallen",
        "fa": "to fall down",
        "type": "verb",
        "form": "Separable strong verb; perfect with `sein`: `fällt hin – fiel hin – ist hingefallen`.",
        "source": "Wortschatz.md",
        "example": "Ich bin ausgerutscht und hingefallen.",
        "exampleFa": "I slipped and fell down.",
        "cloze": "Ich bin ausgerutscht und hingefallen. ____",
        "clozeFa": "I slipped and fell down.",
        "answer": "hinfallen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "hinfallen",
          "hinfallen",
          "hinfallen"
        ],
        "examples": [
          {
            "de": "Ich bin ausgerutscht und hingefallen.",
            "en": "I slipped and fell down."
          },
          {
            "de": "Das Kind ist auf den Boden hingefallen.",
            "en": "The child fell onto the floor."
          }
        ]
      },
      {
        "id": "die-disco",
        "group": "l17-g2",
        "term": "die Disco",
        "fa": "nightclub; disco",
        "type": "noun",
        "form": "Feminine noun; plural: `die Discos`.",
        "source": "Wortschatz.md",
        "example": "Ich war schon in der Disco.",
        "exampleFa": "I have already been to the nightclub.",
        "cloze": "Ich war schon in der ____.",
        "clozeFa": "I have already been to the nightclub.",
        "answer": "Disco",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Disco",
          "Disco",
          "Disco"
        ],
        "examples": [
          {
            "de": "Ich war schon in der Disco.",
            "en": "I have already been to the nightclub."
          },
          {
            "de": "Wir gehen am Samstag in die Disco.",
            "en": "We are going to the nightclub on Saturday."
          },
          {
            "de": "In der Disco kann man ab 10 Uhr abends tanzen.",
            "en": "One can dance at the nightclub from 10 p.m."
          },
          {
            "de": "Mit 16 Jahren darf man allein in die Disco gehen.",
            "en": "At 16, one may go to the nightclub alone."
          }
        ]
      },
      {
        "id": "irgendetwas",
        "group": "l17-g2",
        "term": "irgendetwas",
        "fa": "something; anything",
        "type": "word",
        "form": "Indefinite pronoun; does not take an ending.",
        "source": "Wortschatz.md",
        "example": "Kannst du dich an irgendetwas erinnern?",
        "exampleFa": "Can you remember anything?",
        "cloze": "Kannst du dich an ____ erinnern?",
        "clozeFa": "Can you remember anything?",
        "answer": "irgendetwas",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "irgendetwas",
          "irgendetwas",
          "irgendetwas"
        ],
        "examples": [
          {
            "de": "Kannst du dich an irgendetwas erinnern?",
            "en": "Can you remember anything?"
          },
          {
            "de": "Hast du irgendetwas gefunden?",
            "en": "Did you find anything?"
          }
        ]
      },
      {
        "id": "zum-glueck",
        "group": "l17-g2",
        "term": "zum Glück",
        "fa": "fortunately; luckily",
        "type": "phrase",
        "form": "Fixed adverbial expression: `zu dem Glück → zum Glück`.",
        "source": "Wortschatz.md",
        "example": "Zum Glück hatte ich nicht viel Geld dabei.",
        "exampleFa": "Fortunately, I did not have much money with me.",
        "cloze": "____ hatte ich nicht viel Geld dabei.",
        "clozeFa": "Fortunately, I did not have much money with me.",
        "answer": "zum Glück",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zum Glück",
          "zum Glück",
          "zum Glück"
        ],
        "examples": [
          {
            "de": "Zum Glück hatte ich nicht viel Geld dabei.",
            "en": "Fortunately, I did not have much money with me."
          },
          {
            "de": "Zum Glück wurde mein Portemonnaie gefunden.",
            "en": "Luckily, my wallet was found."
          }
        ]
      },
      {
        "id": "das-fundbuero",
        "group": "l17-g2",
        "term": "das Fundbüro",
        "fa": "lost-and-found office",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Fundbüros`.",
        "source": "Wortschatz.md",
        "example": "Ich werde zum Fundbüro gehen.",
        "exampleFa": "I will go to the lost-and-found office.",
        "cloze": "Ich werde zum ____ gehen.",
        "clozeFa": "I will go to the lost-and-found office.",
        "answer": "Fundbüro",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Fundbüro",
          "Fundbüro",
          "Fundbüro"
        ],
        "examples": [
          {
            "de": "Ich werde zum Fundbüro gehen.",
            "en": "I will go to the lost-and-found office."
          },
          {
            "de": "Jemand hat das Portemonnaie im Fundbüro abgegeben.",
            "en": "Someone handed the wallet in at the lost-and-found office."
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
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "die-papiere",
        "group": "l18-g1",
        "term": "die Papiere",
        "fa": "papers; documents; identification papers",
        "type": "noun",
        "form": "Plural noun; singular `das Papier` usually means paper/material.",
        "source": "Wortschatz.md",
        "example": "Im Portemonnaie waren alle meine Papiere.",
        "exampleFa": "All my documents were in the wallet.",
        "cloze": "Im Portemonnaie waren alle meine ____.",
        "clozeFa": "All my documents were in the wallet.",
        "answer": "Papiere",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Papiere",
          "Papiere",
          "Papiere"
        ],
        "examples": [
          {
            "de": "Im Portemonnaie waren alle meine Papiere.",
            "en": "All my documents were in the wallet."
          },
          {
            "de": "Ich muss neue Papiere beantragen.",
            "en": "I have to apply for new documents."
          },
          {
            "de": "Viele Papiere aus den Anfängen des Vereins sind verloren gegangen.",
            "en": "Many documents from the club's early years have been lost."
          }
        ]
      },
      {
        "id": "unglaublich",
        "group": "l18-g1",
        "term": "unglaublich",
        "fa": "unbelievable; incredibly",
        "type": "verb",
        "form": "Adjective or intensifying adverb.",
        "source": "Wortschatz.md",
        "example": "Das Bein hat unglaublich wehgetan.",
        "exampleFa": "The leg hurt incredibly badly.",
        "cloze": "Das Bein hat ____ wehgetan.",
        "clozeFa": "The leg hurt incredibly badly.",
        "answer": "unglaublich",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "unglaublich",
          "unglaublich",
          "unglaublich"
        ],
        "examples": [
          {
            "de": "Das Bein hat unglaublich wehgetan.",
            "en": "The leg hurt incredibly badly."
          },
          {
            "de": "Die Geschichte klingt unglaublich.",
            "en": "The story sounds unbelievable."
          }
        ]
      },
      {
        "id": "finden",
        "group": "l18-g1",
        "term": "finden",
        "fa": "to find",
        "type": "verb",
        "form": "Strong verb: `findet – fand – hat gefunden`.",
        "source": "Wortschatz.md",
        "example": "Sie haben mein Portemonnaie nicht gefunden.",
        "exampleFa": "They did not find my wallet.",
        "cloze": "Sie haben mein Portemonnaie nicht gefunden. ____",
        "clozeFa": "They did not find my wallet.",
        "answer": "finden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "finden",
          "finden",
          "finden"
        ],
        "examples": [
          {
            "de": "Sie haben mein Portemonnaie nicht gefunden.",
            "en": "They did not find my wallet."
          },
          {
            "de": "Ich kann meinen Schlüssel nicht finden.",
            "en": "I cannot find my key."
          }
        ]
      },
      {
        "id": "aufpassen",
        "group": "l18-g1",
        "term": "aufpassen",
        "fa": "to pay attention; to be careful",
        "type": "verb",
        "form": "Separable verb: `passt auf – passte auf – hat aufgepasst`; often `auf + Akkusativ`.",
        "source": "Wortschatz.md",
        "example": "Ich habe nicht aufgepasst und bin hingefallen.",
        "exampleFa": "I did not pay attention and fell down.",
        "cloze": "Ich habe nicht aufgepasst und bin hingefallen. ____",
        "clozeFa": "I did not pay attention and fell down.",
        "answer": "aufpassen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "aufpassen",
          "aufpassen",
          "aufpassen"
        ],
        "examples": [
          {
            "de": "Ich habe nicht aufgepasst und bin hingefallen.",
            "en": "I did not pay attention and fell down."
          },
          {
            "de": "Pass bitte auf den Verkehr auf!",
            "en": "Please pay attention to the traffic!"
          }
        ]
      },
      {
        "id": "komisch",
        "group": "l18-g1",
        "term": "komisch",
        "fa": "strange; odd; funny",
        "type": "verb",
        "form": "Adjective or adverb; meaning depends on context.",
        "source": "Wortschatz.md",
        "example": "Neben uns standen zwei komische Männer.",
        "exampleFa": "Two strange men were standing next to us.",
        "cloze": "Neben uns standen zwei ____e Männer.",
        "clozeFa": "Two strange men were standing next to us.",
        "answer": "komisch",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "komisch",
          "komisch",
          "komisch"
        ],
        "examples": [
          {
            "de": "Neben uns standen zwei komische Männer.",
            "en": "Two strange men were standing next to us."
          },
          {
            "de": "Das klingt komisch.",
            "en": "That sounds strange."
          }
        ]
      },
      {
        "id": "das-bein",
        "group": "l18-g1",
        "term": "das Bein",
        "fa": "leg",
        "type": "noun",
        "form": "Neuter noun; plural: `die Beine`.",
        "source": "Wortschatz.md",
        "example": "Das linke Bein hat mir wehgetan.",
        "exampleFa": "My left leg hurt.",
        "cloze": "Das linke ____ hat mir wehgetan.",
        "clozeFa": "My left leg hurt.",
        "answer": "Bein",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Bein",
          "Bein",
          "Bein"
        ],
        "examples": [
          {
            "de": "Das linke Bein hat mir wehgetan.",
            "en": "My left leg hurt."
          },
          {
            "de": "Er hat sich das Bein gebrochen.",
            "en": "He broke his leg."
          }
        ]
      },
      {
        "id": "das-krankenhaus",
        "group": "l18-g1",
        "term": "das Krankenhaus",
        "fa": "hospital",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Krankenhäuser`.",
        "source": "Wortschatz.md",
        "example": "Ich muss aus dem Krankenhaus schreiben.",
        "exampleFa": "I have to write from the hospital.",
        "cloze": "Ich muss aus dem ____ schreiben.",
        "clozeFa": "I have to write from the hospital.",
        "answer": "Krankenhaus",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Krankenhaus",
          "Krankenhaus",
          "Krankenhaus"
        ],
        "examples": [
          {
            "de": "Ich muss aus dem Krankenhaus schreiben.",
            "en": "I have to write from the hospital."
          },
          {
            "de": "Sie wurde ins Krankenhaus gebracht.",
            "en": "She was taken to the hospital."
          }
        ]
      },
      {
        "id": "die-bar",
        "group": "l18-g1",
        "term": "die Bar",
        "fa": "bar",
        "type": "noun",
        "form": "Feminine noun; plural: `die Bars`.",
        "source": "Wortschatz.md",
        "example": "Zwei Männer standen an der Bar.",
        "exampleFa": "Two men were standing at the bar.",
        "cloze": "Zwei Männer standen an der ____.",
        "clozeFa": "Two men were standing at the bar.",
        "answer": "Bar",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Bar",
          "Bar",
          "Bar"
        ],
        "examples": [
          {
            "de": "Zwei Männer standen an der Bar.",
            "en": "Two men were standing at the bar."
          },
          {
            "de": "Wir treffen uns in einer Bar.",
            "en": "We are meeting in a bar."
          }
        ]
      },
      {
        "id": "schreiben",
        "group": "l18-g1",
        "term": "schreiben",
        "fa": "to write",
        "type": "verb",
        "form": "Strong verb: `schreibt – schrieb – hat geschrieben`; recipient in the dative.",
        "source": "Wortschatz.md",
        "example": "Ich schreibe dir aus dem Krankenhaus.",
        "exampleFa": "I am writing to you from the hospital.",
        "cloze": "Ich schreibe dir aus dem Krankenhaus. ____",
        "clozeFa": "I am writing to you from the hospital.",
        "answer": "schreiben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "schreiben",
          "schreiben",
          "schreiben"
        ],
        "examples": [
          {
            "de": "Ich schreibe dir aus dem Krankenhaus.",
            "en": "I am writing to you from the hospital."
          },
          {
            "de": "Sie hat ihrem Freund eine Nachricht geschrieben.",
            "en": "She wrote her friend a message."
          }
        ]
      },
      {
        "id": "ausprobieren",
        "group": "l18-g1",
        "term": "ausprobieren",
        "fa": "to try out; to test",
        "type": "verb",
        "form": "Separable regular verb: `probiert aus – probierte aus – hat ausprobiert`.",
        "source": "Wortschatz.md",
        "example": "Ich musste das neue Rennrad sofort ausprobieren.",
        "exampleFa": "I had to try out the new racing bike immediately.",
        "cloze": "Ich musste das neue Rennrad sofort ____.",
        "clozeFa": "I had to try out the new racing bike immediately.",
        "answer": "ausprobieren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "ausprobieren",
          "ausprobieren",
          "ausprobieren"
        ],
        "examples": [
          {
            "de": "Ich musste das neue Rennrad sofort ausprobieren.",
            "en": "I had to try out the new racing bike immediately."
          },
          {
            "de": "Probier diese App einmal aus!",
            "en": "Try out this app!"
          }
        ]
      },
      {
        "id": "das-rennrad",
        "group": "l18-g2",
        "term": "das Rennrad",
        "fa": "racing bike; road bike",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Rennräder`.",
        "source": "Wortschatz.md",
        "example": "Ich habe ein neues Rennrad bekommen.",
        "exampleFa": "I received a new racing bike.",
        "cloze": "Ich habe ein neues ____ bekommen.",
        "clozeFa": "I received a new racing bike.",
        "answer": "Rennrad",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Rennrad",
          "Rennrad",
          "Rennrad"
        ],
        "examples": [
          {
            "de": "Ich habe ein neues Rennrad bekommen.",
            "en": "I received a new racing bike."
          },
          {
            "de": "Mit dem Rennrad kann man sehr schnell fahren.",
            "en": "One can ride very fast on a racing bike."
          }
        ]
      },
      {
        "id": "dabeihaben",
        "group": "l18-g2",
        "term": "dabeihaben",
        "fa": "to have with oneself; to carry",
        "type": "verb",
        "form": "Separable verb: `hat dabei – hatte dabei – hat dabeigehabt`.",
        "source": "Wortschatz.md",
        "example": "Ich hatte nicht viel Geld dabei.",
        "exampleFa": "I did not have much money with me.",
        "cloze": "Ich hatte nicht viel Geld dabei. ____",
        "clozeFa": "I did not have much money with me.",
        "answer": "dabeihaben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "dabeihaben",
          "dabeihaben",
          "dabeihaben"
        ],
        "examples": [
          {
            "de": "Ich hatte nicht viel Geld dabei.",
            "en": "I did not have much money with me."
          },
          {
            "de": "Hast du deinen Ausweis dabei?",
            "en": "Do you have your ID with you?"
          }
        ]
      },
      {
        "id": "nehmen",
        "group": "l18-g2",
        "term": "nehmen",
        "fa": "to take",
        "type": "verb",
        "form": "Strong verb: `nimmt – nahm – hat genommen`.",
        "source": "Wortschatz.md",
        "example": "Jemand könnte mein Portemonnaie genommen haben.",
        "exampleFa": "Someone might have taken my wallet.",
        "cloze": "Jemand könnte mein Portemonnaie genommen haben. ____",
        "clozeFa": "Someone might have taken my wallet.",
        "answer": "nehmen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "nehmen",
          "nehmen",
          "nehmen"
        ],
        "examples": [
          {
            "de": "Jemand könnte mein Portemonnaie genommen haben.",
            "en": "Someone might have taken my wallet."
          },
          {
            "de": "Ich nehme den Bus zur Arbeit.",
            "en": "I take the bus to work."
          }
        ]
      },
      {
        "id": "irgendwie",
        "group": "l18-g2",
        "term": "irgendwie",
        "fa": "somehow; for some reason",
        "type": "verb",
        "form": "Adverb; its form does not change.",
        "source": "Wortschatz.md",
        "example": "Irgendwie habe ich nicht aufgepasst.",
        "exampleFa": "Somehow, I was not paying attention.",
        "cloze": "____ habe ich nicht aufgepasst.",
        "clozeFa": "Somehow, I was not paying attention.",
        "answer": "irgendwie",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "irgendwie",
          "irgendwie",
          "irgendwie"
        ],
        "examples": [
          {
            "de": "Irgendwie habe ich nicht aufgepasst.",
            "en": "Somehow, I was not paying attention."
          },
          {
            "de": "Wir finden irgendwie eine Lösung.",
            "en": "We will find a solution somehow."
          }
        ]
      },
      {
        "id": "etwas-geschenkt-bekommen",
        "group": "l18-g2",
        "term": "etwas geschenkt bekommen",
        "fa": "to receive something as a gift",
        "type": "phrase",
        "form": "The received object is accusative: `bekommt – bekam – hat geschenkt bekommen`.",
        "source": "Wortschatz.md",
        "example": "Ich habe zu Weihnachten ein Rennrad geschenkt bekommen.",
        "exampleFa": "I received a racing bike for Christmas.",
        "cloze": "Ich habe zu Weihnachten ein Rennrad geschenkt ____.",
        "clozeFa": "I received a racing bike for Christmas.",
        "answer": "bekommen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "etwas geschenkt bekommen",
          "etwas geschenkt bekommen",
          "bekommen"
        ],
        "examples": [
          {
            "de": "Ich habe zu Weihnachten ein Rennrad geschenkt bekommen.",
            "en": "I received a racing bike for Christmas."
          },
          {
            "de": "Sie bekommt ein Buch geschenkt.",
            "en": "She is receiving a book as a gift."
          }
        ]
      },
      {
        "id": "liebe-gruesse",
        "group": "l18-g2",
        "term": "liebe Grüße",
        "fa": "best wishes; kind regards",
        "type": "adjective",
        "form": "Plural expression; adjective ending `-en` after a possessive determiner: `deine lieben Grüße`.",
        "source": "Wortschatz.md",
        "example": "Danke für deine lieben Grüße.",
        "exampleFa": "Thank you for your kind regards.",
        "cloze": "Danke für deine ____n Grüße.",
        "clozeFa": "Thank you for your kind regards.",
        "answer": "liebe",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "liebe Grüße",
          "liebe Grüße",
          "liebe"
        ],
        "examples": [
          {
            "de": "Danke für deine lieben Grüße.",
            "en": "Thank you for your kind regards."
          },
          {
            "de": "Liebe Grüße aus Berlin!",
            "en": "Best wishes from Berlin!"
          }
        ]
      },
      {
        "id": "weihnachten",
        "group": "l18-g2",
        "term": "Weihnachten",
        "fa": "Christmas",
        "type": "verb",
        "form": "Neuter proper-name-like noun, normally without an article; common expression: `zu Weihnachten`.",
        "source": "Wortschatz.md",
        "example": "Zu Weihnachten habe ich ein Rennrad bekommen.",
        "exampleFa": "I received a racing bike for Christmas.",
        "cloze": "Zu ____ habe ich ein Rennrad bekommen.",
        "clozeFa": "I received a racing bike for Christmas.",
        "answer": "Weihnachten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "Weihnachten",
          "Weihnachten",
          "Weihnachten"
        ],
        "examples": [
          {
            "de": "Zu Weihnachten habe ich ein Rennrad bekommen.",
            "en": "I received a racing bike for Christmas."
          },
          {
            "de": "Wir besuchen unsere Familie an Weihnachten.",
            "en": "We visit our family at Christmas."
          }
        ]
      },
      {
        "id": "wehtun",
        "group": "l18-g2",
        "term": "wehtun",
        "fa": "to hurt; to ache",
        "type": "verb",
        "form": "Separable irregular verb: `tut weh – tat weh – hat wehgetan`; affected person in the dative.",
        "source": "Wortschatz.md",
        "example": "Das Bein tut mir weh.",
        "exampleFa": "My leg hurts.",
        "cloze": "Das Bein tut mir weh. ____",
        "clozeFa": "My leg hurts.",
        "answer": "wehtun",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "wehtun",
          "wehtun",
          "wehtun"
        ],
        "examples": [
          {
            "de": "Das Bein tut mir weh.",
            "en": "My leg hurts."
          },
          {
            "de": "Hat dir der Arm wehgetan?",
            "en": "Did your arm hurt?"
          }
        ]
      },
      {
        "id": "der-wald",
        "group": "l18-g2",
        "term": "der Wald",
        "fa": "forest; woods",
        "type": "noun",
        "form": "Masculine noun; plural: `die Wälder`.",
        "source": "Wortschatz.md",
        "example": "Ich bin mit dem Rennrad in den Wald gefahren.",
        "exampleFa": "I rode the racing bike into the forest.",
        "cloze": "Ich bin mit dem Rennrad in den ____ gefahren.",
        "clozeFa": "I rode the racing bike into the forest.",
        "answer": "Wald",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Wald",
          "Wald",
          "Wald"
        ],
        "examples": [
          {
            "de": "Ich bin mit dem Rennrad in den Wald gefahren.",
            "en": "I rode the racing bike into the forest."
          },
          {
            "de": "Wir gehen im Wald spazieren.",
            "en": "We go for a walk in the forest."
          }
        ]
      },
      {
        "id": "denken",
        "group": "l18-g2",
        "term": "denken",
        "fa": "to think",
        "type": "verb",
        "form": "Irregular verb: `denkt – dachte – hat gedacht`; common patterns: `an + Akkusativ denken` and `denken, dass ...`.",
        "source": "Wortschatz.md",
        "example": "Ich hätte das nie gedacht.",
        "exampleFa": "I would never have thought that.",
        "cloze": "Ich hätte das nie gedacht. ____",
        "clozeFa": "I would never have thought that.",
        "answer": "denken",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "denken",
          "denken",
          "denken"
        ],
        "examples": [
          {
            "de": "Ich hätte das nie gedacht.",
            "en": "I would never have thought that."
          },
          {
            "de": "Denk bitte an deinen Termin.",
            "en": "Please remember your appointment."
          },
          {
            "de": "Die Frau denkt, das Verhalten der Gäste hat sich nicht geändert.",
            "en": "The woman thinks the guests' behavior has not changed."
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
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "die-luft",
        "group": "l19-g1",
        "term": "die Luft",
        "fa": "air",
        "type": "noun",
        "form": "Feminine noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Fliegen verschmutzt die Luft.",
        "exampleFa": "Flying pollutes the air.",
        "cloze": "Fliegen verschmutzt die ____.",
        "clozeFa": "Flying pollutes the air.",
        "answer": "Luft",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Luft",
          "Luft",
          "Luft"
        ],
        "examples": [
          {
            "de": "Fliegen verschmutzt die Luft.",
            "en": "Flying pollutes the air."
          },
          {
            "de": "Frische Luft ist gesund.",
            "en": "Fresh air is healthy."
          }
        ]
      },
      {
        "id": "sich-fuehlen",
        "group": "l19-g1",
        "term": "sich fühlen",
        "fa": "to feel",
        "type": "verb",
        "form": "Reflexive verb: `fühlt sich – fühlte sich – hat sich gefühlt`.",
        "source": "Wortschatz.md",
        "example": "Wir fühlen uns manchmal hilflos.",
        "exampleFa": "We sometimes feel helpless.",
        "cloze": "Wir ____ uns manchmal hilflos.",
        "clozeFa": "We sometimes feel helpless.",
        "answer": "fühlen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich fühlen",
          "sich fühlen",
          "fühlen"
        ],
        "examples": [
          {
            "de": "Wir fühlen uns manchmal hilflos.",
            "en": "We sometimes feel helpless."
          },
          {
            "de": "Wie fühlst du dich heute?",
            "en": "How do you feel today?"
          },
          {
            "de": "Die Hälfte aller Lehrer fühlt sich nicht gut.",
            "en": "Half of all teachers do not feel well."
          }
        ]
      },
      {
        "id": "die-energie",
        "group": "l19-g1",
        "term": "die Energie",
        "fa": "energy",
        "type": "noun",
        "form": "Feminine noun; plural `die Energien` is used mainly for different kinds of energy.",
        "source": "Wortschatz.md",
        "example": "Wir müssen Energie sparen.",
        "exampleFa": "We must conserve energy.",
        "cloze": "Wir müssen ____ sparen.",
        "clozeFa": "We must conserve energy.",
        "answer": "Energie",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Energie",
          "Energie",
          "Energie"
        ],
        "examples": [
          {
            "de": "Wir müssen Energie sparen.",
            "en": "We must conserve energy."
          },
          {
            "de": "Wind und Sonne liefern erneuerbare Energie.",
            "en": "Wind and sunlight provide renewable energy."
          }
        ]
      },
      {
        "id": "sich-erinnern",
        "group": "l19-g1",
        "term": "sich erinnern",
        "fa": "to remember",
        "type": "verb",
        "form": "Reflexive verb: `erinnert sich – erinnerte sich – hat sich erinnert`; often `sich an + Akkusativ erinnern`.",
        "source": "Wortschatz.md",
        "example": "Kannst du dich noch daran erinnern?",
        "exampleFa": "Can you still remember that?",
        "cloze": "Kannst du dich noch daran ____?",
        "clozeFa": "Can you still remember that?",
        "answer": "erinnern",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich erinnern",
          "sich erinnern",
          "erinnern"
        ],
        "examples": [
          {
            "de": "Kannst du dich noch daran erinnern?",
            "en": "Can you still remember that?"
          },
          {
            "de": "Ich erinnere mich an den Abend.",
            "en": "I remember the evening."
          }
        ]
      },
      {
        "id": "bezahlen",
        "group": "l19-g1",
        "term": "bezahlen",
        "fa": "to pay; to pay for",
        "type": "verb",
        "form": "Regular inseparable verb: `bezahlt – bezahlte – hat bezahlt`; takes the accusative.",
        "source": "Wortschatz.md",
        "example": "Nachdem ich bezahlt hatte, ging ich nach Hause.",
        "exampleFa": "After I had paid, I went home.",
        "cloze": "Nachdem ich bezahlt hatte, ging ich nach Hause. ____",
        "clozeFa": "After I had paid, I went home.",
        "answer": "bezahlen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "bezahlen",
          "bezahlen",
          "bezahlen"
        ],
        "examples": [
          {
            "de": "Nachdem ich bezahlt hatte, ging ich nach Hause.",
            "en": "After I had paid, I went home."
          },
          {
            "de": "Ich bezahle die Rechnung.",
            "en": "I pay the bill."
          }
        ]
      },
      {
        "id": "hilflos",
        "group": "l19-g1",
        "term": "hilflos",
        "fa": "helpless",
        "type": "verb",
        "form": "Adjective or adverb.",
        "source": "Wortschatz.md",
        "example": "Wir dürfen uns nicht hilflos fühlen.",
        "exampleFa": "We must not feel helpless.",
        "cloze": "Wir dürfen uns nicht ____ fühlen.",
        "clozeFa": "We must not feel helpless.",
        "answer": "hilflos",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "hilflos",
          "hilflos",
          "hilflos"
        ],
        "examples": [
          {
            "de": "Wir dürfen uns nicht hilflos fühlen.",
            "en": "We must not feel helpless."
          },
          {
            "de": "Ohne Unterstützung war er völlig hilflos.",
            "en": "Without support, he was completely helpless."
          }
        ]
      },
      {
        "id": "das-portemonnaie",
        "group": "l19-g1",
        "term": "das Portemonnaie",
        "fa": "wallet; purse",
        "type": "noun",
        "form": "Neuter noun; plural: `die Portemonnaies`; alternative spelling: `das Portmonee`.",
        "source": "Wortschatz.md",
        "example": "Mein Portemonnaie war plötzlich weg.",
        "exampleFa": "My wallet was suddenly gone.",
        "cloze": "Mein ____ war plötzlich weg.",
        "clozeFa": "My wallet was suddenly gone.",
        "answer": "Portemonnaie",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Portemonnaie",
          "Portemonnaie",
          "Portemonnaie"
        ],
        "examples": [
          {
            "de": "Mein Portemonnaie war plötzlich weg.",
            "en": "My wallet was suddenly gone."
          },
          {
            "de": "Ich habe mein Portemonnaie zu Hause vergessen.",
            "en": "I left my wallet at home."
          }
        ]
      },
      {
        "id": "etwas-in-die-tasche-stecken",
        "group": "l19-g1",
        "term": "etwas in die Tasche stecken",
        "fa": "to put something into a bag/pocket",
        "type": "phrase",
        "form": "`etwas` (Akkusativ) `in + Akkusativ` for movement; `steckt – steckte – hat gesteckt`.",
        "source": "Wortschatz.md",
        "example": "Ich habe das Portemonnaie in meine Tasche gesteckt.",
        "exampleFa": "I put the wallet into my bag.",
        "cloze": "Ich habe das Portemonnaie in meine Tasche gesteckt. ____",
        "clozeFa": "I put the wallet into my bag.",
        "answer": "etwas in die Tasche stecken",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "etwas in die Tasche stecken",
          "etwas in die Tasche stecken",
          "etwas in die Tasche stecken"
        ],
        "examples": [
          {
            "de": "Ich habe das Portemonnaie in meine Tasche gesteckt.",
            "en": "I put the wallet into my bag."
          },
          {
            "de": "Sie steckt den Schlüssel in die Jackentasche.",
            "en": "She puts the key into her jacket pocket."
          }
        ]
      },
      {
        "id": "ueberhaupt",
        "group": "l19-g1",
        "term": "überhaupt",
        "fa": "at all; generally; actually",
        "type": "verb",
        "form": "Adverb; meaning depends on context.",
        "source": "Wortschatz.md",
        "example": "Welche Produkte kann man überhaupt noch kaufen?",
        "exampleFa": "Which products can one still buy at all?",
        "cloze": "Welche Produkte kann man ____ noch kaufen?",
        "clozeFa": "Which products can one still buy at all?",
        "answer": "überhaupt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "überhaupt",
          "überhaupt",
          "überhaupt"
        ],
        "examples": [
          {
            "de": "Welche Produkte kann man überhaupt noch kaufen?",
            "en": "Which products can one still buy at all?"
          },
          {
            "de": "Hast du überhaupt Zeit?",
            "en": "Do you have any time at all?"
          }
        ]
      },
      {
        "id": "nutzen",
        "group": "l19-g1",
        "term": "nutzen",
        "fa": "to use; to make use of",
        "type": "verb",
        "form": "Regular verb: `nutzt – nutzte – hat genutzt`; takes the accusative.",
        "source": "Wortschatz.md",
        "example": "Wir sollten erneuerbare Energie nutzen.",
        "exampleFa": "We should use renewable energy.",
        "cloze": "Wir sollten erneuerbare Energie ____.",
        "clozeFa": "We should use renewable energy.",
        "answer": "nutzen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "nutzen",
          "nutzen",
          "nutzen"
        ],
        "examples": [
          {
            "de": "Wir sollten erneuerbare Energie nutzen.",
            "en": "We should use renewable energy."
          },
          {
            "de": "Die Schüler nutzen die Klassenkasse für den Ausflug.",
            "en": "The students use the class fund for the trip."
          }
        ]
      },
      {
        "id": "das-elektroauto",
        "group": "l19-g2",
        "term": "das Elektroauto",
        "fa": "electric car",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Elektroautos`.",
        "source": "Wortschatz.md",
        "example": "Elektroautos produzieren beim Fahren keine Abgase.",
        "exampleFa": "Electric cars produce no exhaust fumes while driving.",
        "cloze": "____s produzieren beim Fahren keine Abgase.",
        "clozeFa": "Electric cars produce no exhaust fumes while driving.",
        "answer": "Elektroauto",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Elektroauto",
          "Elektroauto",
          "Elektroauto"
        ],
        "examples": [
          {
            "de": "Elektroautos produzieren beim Fahren keine Abgase.",
            "en": "Electric cars produce no exhaust fumes while driving."
          },
          {
            "de": "Vielleicht reisen wir in Zukunft mit Elektroautos.",
            "en": "Perhaps we will travel with electric cars in the future."
          }
        ]
      },
      {
        "id": "nach-hause-kommen",
        "group": "l19-g2",
        "term": "nach Hause kommen",
        "fa": "to come home; to arrive home",
        "type": "phrase",
        "form": "Direction uses `nach Hause`; perfect with `sein`: `kommt – kam – ist gekommen`.",
        "source": "Wortschatz.md",
        "example": "Als ich nach Hause gekommen bin, war es schon spät.",
        "exampleFa": "When I got home, it was already late.",
        "cloze": "Als ich nach Hause ge____ bin, war es schon spät.",
        "clozeFa": "When I got home, it was already late.",
        "answer": "kommen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "nach Hause kommen",
          "nach Hause kommen",
          "kommen"
        ],
        "examples": [
          {
            "de": "Als ich nach Hause gekommen bin, war es schon spät.",
            "en": "When I got home, it was already late."
          },
          {
            "de": "Wann kommst du nach Hause?",
            "en": "When are you coming home?"
          }
        ]
      },
      {
        "id": "das-abgas",
        "group": "l19-g2",
        "term": "das Abgas",
        "fa": "exhaust gas; emission",
        "type": "noun",
        "form": "Neuter noun; usually used in the plural: `die Abgase`.",
        "source": "Wortschatz.md",
        "example": "Autos produzieren Abgase.",
        "exampleFa": "Cars produce exhaust fumes.",
        "cloze": "Autos produzieren ____e.",
        "clozeFa": "Cars produce exhaust fumes.",
        "answer": "Abgas",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Abgas",
          "Abgas",
          "Abgas"
        ],
        "examples": [
          {
            "de": "Autos produzieren Abgase.",
            "en": "Cars produce exhaust fumes."
          },
          {
            "de": "Abgase verschmutzen die Luft.",
            "en": "Emissions pollute the air."
          }
        ]
      },
      {
        "id": "sparen",
        "group": "l19-g2",
        "term": "sparen",
        "fa": "to save; to conserve",
        "type": "verb",
        "form": "Regular verb: `spart – sparte – hat gespart`; common patterns: `etwas sparen` and `für etwas sparen`.",
        "source": "Wortschatz.md",
        "example": "Wir wollen Energie sparen.",
        "exampleFa": "We want to save energy.",
        "cloze": "Wir wollen Energie ____.",
        "clozeFa": "We want to save energy.",
        "answer": "sparen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sparen",
          "sparen",
          "sparen"
        ],
        "examples": [
          {
            "de": "Wir wollen Energie sparen.",
            "en": "We want to save energy."
          },
          {
            "de": "Sie spart für eine Reise.",
            "en": "She is saving for a trip."
          },
          {
            "de": "Die Frau versucht nicht, Wasser zu sparen.",
            "en": "The woman does not try to conserve water."
          }
        ]
      },
      {
        "id": "ruhig-mal",
        "group": "l19-g2",
        "term": "ruhig mal",
        "fa": "feel free to; why don't you; go ahead and",
        "type": "phrase",
        "form": "Conversational particles that soften a suggestion or permission.",
        "source": "Wortschatz.md",
        "example": "Du könntest ruhig mal mit dem Fahrrad fahren.",
        "exampleFa": "You could take the bicycle for a change.",
        "cloze": "Du könntest ____ mit dem Fahrrad fahren.",
        "clozeFa": "You could take the bicycle for a change.",
        "answer": "ruhig mal",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "ruhig mal",
          "ruhig mal",
          "ruhig mal"
        ],
        "examples": [
          {
            "de": "Du könntest ruhig mal mit dem Fahrrad fahren.",
            "en": "You could take the bicycle for a change."
          },
          {
            "de": "Frag ruhig mal deine Lehrerin.",
            "en": "Feel free to ask your teacher."
          }
        ]
      },
      {
        "id": "verschwenden",
        "group": "l19-g2",
        "term": "verschwenden",
        "fa": "to waste",
        "type": "verb",
        "form": "Regular verb: `verschwendet – verschwendete – hat verschwendet`.",
        "source": "Wortschatz.md",
        "example": "Wir dürfen keine Energie verschwenden.",
        "exampleFa": "We must not waste energy.",
        "cloze": "Wir dürfen keine Energie ____.",
        "clozeFa": "We must not waste energy.",
        "answer": "verschwenden",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verschwenden",
          "verschwenden",
          "verschwenden"
        ],
        "examples": [
          {
            "de": "Wir dürfen keine Energie verschwenden.",
            "en": "We must not waste energy."
          },
          {
            "de": "Verschwende nicht so viel Wasser!",
            "en": "Do not waste so much water!"
          }
        ]
      },
      {
        "id": "das-fahrrad",
        "group": "l19-g2",
        "term": "das Fahrrad",
        "fa": "bicycle",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Fahrräder`; common phrase: `mit dem Fahrrad fahren`.",
        "source": "Wortschatz.md",
        "example": "Ich fahre mit dem Fahrrad zur Schule.",
        "exampleFa": "I ride my bicycle to school.",
        "cloze": "Ich fahre mit dem ____ zur Schule.",
        "clozeFa": "I ride my bicycle to school.",
        "answer": "Fahrrad",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Fahrrad",
          "Fahrrad",
          "Fahrrad"
        ],
        "examples": [
          {
            "de": "Ich fahre mit dem Fahrrad zur Schule.",
            "en": "I ride my bicycle to school."
          },
          {
            "de": "Das Fahrrad ist umweltfreundlich.",
            "en": "The bicycle is environmentally friendly."
          }
        ]
      },
      {
        "id": "der-alltag",
        "group": "l19-g2",
        "term": "der Alltag",
        "fa": "everyday life; daily routine",
        "type": "noun",
        "form": "Masculine noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Wir sollten unseren Alltag verändern.",
        "exampleFa": "We should change our everyday lives.",
        "cloze": "Wir sollten unseren ____ verändern.",
        "clozeFa": "We should change our everyday lives.",
        "answer": "Alltag",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Alltag",
          "Alltag",
          "Alltag"
        ],
        "examples": [
          {
            "de": "Wir sollten unseren Alltag verändern.",
            "en": "We should change our everyday lives."
          },
          {
            "de": "Bewegung gehört zu meinem Alltag.",
            "en": "Exercise is part of my daily routine."
          }
        ]
      },
      {
        "id": "verlangsamen",
        "group": "l19-g2",
        "term": "verlangsamen",
        "fa": "to slow down",
        "type": "verb",
        "form": "Regular verb: `verlangsamt – verlangsamte – hat verlangsamt`.",
        "source": "Wortschatz.md",
        "example": "Wir können den Klimawandel verlangsamen.",
        "exampleFa": "We can slow down climate change.",
        "cloze": "Wir können den Klimawandel ____.",
        "clozeFa": "We can slow down climate change.",
        "answer": "verlangsamen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verlangsamen",
          "verlangsamen",
          "verlangsamen"
        ],
        "examples": [
          {
            "de": "Wir können den Klimawandel verlangsamen.",
            "en": "We can slow down climate change."
          },
          {
            "de": "Der starke Verkehr verlangsamt den Bus.",
            "en": "Heavy traffic slows down the bus."
          }
        ]
      },
      {
        "id": "schuetzen",
        "group": "l19-g2",
        "term": "schützen",
        "fa": "to protect",
        "type": "verb",
        "form": "Regular verb: `schützt – schützte – hat geschützt`; common pattern: `jemanden/etwas vor + Dativ schützen`.",
        "source": "Wortschatz.md",
        "example": "Wir müssen die Umwelt schützen.",
        "exampleFa": "We must protect the environment.",
        "cloze": "Wir müssen die Umwelt ____.",
        "clozeFa": "We must protect the environment.",
        "answer": "schützen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "schützen",
          "schützen",
          "schützen"
        ],
        "examples": [
          {
            "de": "Wir müssen die Umwelt schützen.",
            "en": "We must protect the environment."
          },
          {
            "de": "Diese Regeln schützen Kinder vor Gefahren.",
            "en": "These rules protect children from dangers."
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
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "umweltschaedlich",
        "group": "l20-g1",
        "term": "umweltschädlich",
        "fa": "harmful to the environment; environmentally damaging",
        "type": "adjective",
        "form": "Compound adjective: `Umwelt + schädlich`; opposite: `umweltfreundlich`.",
        "source": "Wortschatz.md",
        "example": "Fliegen ist sehr umweltschädlich.",
        "exampleFa": "Flying is very harmful to the environment.",
        "cloze": "Fliegen ist sehr ____.",
        "clozeFa": "Flying is very harmful to the environment.",
        "answer": "umweltschädlich",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "umweltschädlich",
          "umweltschädlich",
          "umweltschädlich"
        ],
        "examples": [
          {
            "de": "Fliegen ist sehr umweltschädlich.",
            "en": "Flying is very harmful to the environment."
          },
          {
            "de": "Einwegplastik ist umweltschädlich.",
            "en": "Single-use plastic is environmentally damaging."
          }
        ]
      },
      {
        "id": "der-unterricht",
        "group": "l20-g1",
        "term": "der Unterricht",
        "fa": "lesson; instruction; classes",
        "type": "noun",
        "form": "Masculine noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Der Unterricht beginnt um 8 Uhr.",
        "exampleFa": "Classes begin at 8 a.m.",
        "cloze": "Der ____ beginnt um 8 Uhr.",
        "clozeFa": "Classes begin at 8 a.m.",
        "answer": "Unterricht",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Unterricht",
          "Unterricht",
          "Unterricht"
        ],
        "examples": [
          {
            "de": "Der Unterricht beginnt um 8 Uhr.",
            "en": "Classes begin at 8 a.m."
          },
          {
            "de": "Kinder können auch in Projekten lernen, ohne nur normalen Unterricht zu haben.",
            "en": "Children can also learn through projects without only having regular lessons."
          },
          {
            "de": "Frau Wulf findet Unterricht am Samstag keine schlechte Idee.",
            "en": "Ms Wulf does not think Saturday classes are a bad idea."
          }
        ]
      },
      {
        "id": "das-fliegen",
        "group": "l20-g1",
        "term": "das Fliegen",
        "fa": "flying; air travel",
        "type": "noun",
        "form": "Nominalized infinitive; always neuter and capitalized.",
        "source": "Wortschatz.md",
        "example": "Das Fliegen ist umweltschädlich.",
        "exampleFa": "Flying is harmful to the environment.",
        "cloze": "Das ____ ist umweltschädlich.",
        "clozeFa": "Flying is harmful to the environment.",
        "answer": "Fliegen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Fliegen",
          "Fliegen",
          "Fliegen"
        ],
        "examples": [
          {
            "de": "Das Fliegen ist umweltschädlich.",
            "en": "Flying is harmful to the environment."
          },
          {
            "de": "Durch weniger Fliegen kann man Energie sparen.",
            "en": "By flying less, one can save energy."
          }
        ]
      },
      {
        "id": "veranstalten",
        "group": "l20-g1",
        "term": "veranstalten",
        "fa": "to organize; to hold; to stage",
        "type": "verb",
        "form": "Regular inseparable verb: `veranstaltet – veranstaltete – hat veranstaltet`.",
        "source": "Wortschatz.md",
        "example": "Die Schule veranstaltet eine Projektwoche.",
        "exampleFa": "The school organizes a project week.",
        "cloze": "Die Schule veranstaltet eine Projektwoche. ____",
        "clozeFa": "The school organizes a project week.",
        "answer": "veranstalten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "veranstalten",
          "veranstalten",
          "veranstalten"
        ],
        "examples": [
          {
            "de": "Die Schule veranstaltet eine Projektwoche.",
            "en": "The school organizes a project week."
          },
          {
            "de": "Der Verein veranstaltet jedes Jahr ein Fest.",
            "en": "The association holds a festival every year."
          }
        ]
      },
      {
        "id": "stoppen",
        "group": "l20-g1",
        "term": "stoppen",
        "fa": "to stop",
        "type": "verb",
        "form": "Regular verb: `stoppt – stoppte – hat gestoppt`.",
        "source": "Wortschatz.md",
        "example": "Wir müssen den Klimawandel stoppen.",
        "exampleFa": "We must stop climate change.",
        "cloze": "Wir müssen den Klimawandel ____.",
        "clozeFa": "We must stop climate change.",
        "answer": "stoppen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "stoppen",
          "stoppen",
          "stoppen"
        ],
        "examples": [
          {
            "de": "Wir müssen den Klimawandel stoppen.",
            "en": "We must stop climate change."
          },
          {
            "de": "Der Fahrer hat das Auto gestoppt.",
            "en": "The driver stopped the car."
          }
        ]
      },
      {
        "id": "verbrauchen",
        "group": "l20-g1",
        "term": "verbrauchen",
        "fa": "to consume; to use up",
        "type": "verb",
        "form": "Regular verb: `verbraucht – verbrauchte – hat verbraucht`.",
        "source": "Wortschatz.md",
        "example": "Wir sollten weniger Wasser verbrauchen.",
        "exampleFa": "We should consume less water.",
        "cloze": "Wir sollten weniger Wasser ____.",
        "clozeFa": "We should consume less water.",
        "answer": "verbrauchen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verbrauchen",
          "verbrauchen",
          "verbrauchen"
        ],
        "examples": [
          {
            "de": "Wir sollten weniger Wasser verbrauchen.",
            "en": "We should consume less water."
          },
          {
            "de": "Dieses Gerät verbraucht viel Energie.",
            "en": "This device uses a lot of energy."
          }
        ]
      },
      {
        "id": "praktisch",
        "group": "l20-g1",
        "term": "praktisch",
        "fa": "practical; practically; in practice",
        "type": "verb",
        "form": "Adjective or adverb.",
        "source": "Wortschatz.md",
        "example": "Die Schüler arbeiten praktisch an dem Projekt.",
        "exampleFa": "The students do practical work on the project.",
        "cloze": "Die Schüler arbeiten ____ an dem Projekt.",
        "clozeFa": "The students do practical work on the project.",
        "answer": "praktisch",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "praktisch",
          "praktisch",
          "praktisch"
        ],
        "examples": [
          {
            "de": "Die Schüler arbeiten praktisch an dem Projekt.",
            "en": "The students do practical work on the project."
          },
          {
            "de": "Wir brauchen eine praktische Lösung.",
            "en": "We need a practical solution."
          }
        ]
      },
      {
        "id": "sammeln",
        "group": "l20-g1",
        "term": "sammeln",
        "fa": "to collect; to gather",
        "type": "verb",
        "form": "Regular verb: `sammelt – sammelte – hat gesammelt`.",
        "source": "Wortschatz.md",
        "example": "Die Schüler sammeln Müll.",
        "exampleFa": "The students collect rubbish.",
        "cloze": "Die Schüler ____ Müll.",
        "clozeFa": "The students collect rubbish.",
        "answer": "sammeln",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sammeln",
          "sammeln",
          "sammeln"
        ],
        "examples": [
          {
            "de": "Die Schüler sammeln Müll.",
            "en": "The students collect rubbish."
          },
          {
            "de": "Wir sammeln Informationen über Recycling.",
            "en": "We collect information about recycling."
          },
          {
            "de": "Sie hat viele verschiedene Sachen gesammelt.",
            "en": "She has collected many different things."
          }
        ]
      },
      {
        "id": "entsorgen",
        "group": "l20-g1",
        "term": "entsorgen",
        "fa": "to dispose of",
        "type": "verb",
        "form": "Regular inseparable verb: `entsorgt – entsorgte – hat entsorgt`.",
        "source": "Wortschatz.md",
        "example": "Wie kann man den Müll richtig entsorgen?",
        "exampleFa": "How can one dispose of waste correctly?",
        "cloze": "Wie kann man den Müll richtig ____?",
        "clozeFa": "How can one dispose of waste correctly?",
        "answer": "entsorgen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "entsorgen",
          "entsorgen",
          "entsorgen"
        ],
        "examples": [
          {
            "de": "Wie kann man den Müll richtig entsorgen?",
            "en": "How can one dispose of waste correctly?"
          },
          {
            "de": "Batterien müssen getrennt entsorgt werden.",
            "en": "Batteries must be disposed of separately."
          }
        ]
      },
      {
        "id": "erfahren",
        "group": "l20-g1",
        "term": "erfahren",
        "fa": "to learn; to find out; to experience",
        "type": "verb",
        "form": "Strong inseparable verb: `erfährt – erfuhr – hat erfahren`.",
        "source": "Wortschatz.md",
        "example": "Wir erfahren, wie sich das Klima verändert.",
        "exampleFa": "We learn how the climate is changing.",
        "cloze": "Wir ____, wie sich das Klima verändert.",
        "clozeFa": "We learn how the climate is changing.",
        "answer": "erfahren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "erfahren",
          "erfahren",
          "erfahren"
        ],
        "examples": [
          {
            "de": "Wir erfahren, wie sich das Klima verändert.",
            "en": "We learn how the climate is changing."
          },
          {
            "de": "Wann hast du davon erfahren?",
            "en": "When did you find out about it?"
          }
        ]
      },
      {
        "id": "die-muellvermeidung",
        "group": "l20-g2",
        "term": "die Müllvermeidung",
        "fa": "waste prevention; waste reduction",
        "type": "noun",
        "form": "Feminine compound noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Müllvermeidung schützt die Umwelt.",
        "exampleFa": "Waste prevention protects the environment.",
        "cloze": "____ schützt die Umwelt.",
        "clozeFa": "Waste prevention protects the environment.",
        "answer": "Müllvermeidung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Müllvermeidung",
          "Müllvermeidung",
          "Müllvermeidung"
        ],
        "examples": [
          {
            "de": "Müllvermeidung schützt die Umwelt.",
            "en": "Waste prevention protects the environment."
          },
          {
            "de": "Mehrwegflaschen helfen bei der Müllvermeidung.",
            "en": "Reusable bottles help with waste reduction."
          }
        ]
      },
      {
        "id": "das-energiesparen",
        "group": "l20-g2",
        "term": "das Energiesparen",
        "fa": "saving energy; energy conservation",
        "type": "noun",
        "form": "Nominalized infinitive and compound noun; always neuter.",
        "source": "Wortschatz.md",
        "example": "Energiesparen schützt die Umwelt.",
        "exampleFa": "Saving energy protects the environment.",
        "cloze": "____ schützt die Umwelt.",
        "clozeFa": "Saving energy protects the environment.",
        "answer": "Energiesparen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Energiesparen",
          "Energiesparen",
          "Energiesparen"
        ],
        "examples": [
          {
            "de": "Energiesparen schützt die Umwelt.",
            "en": "Saving energy protects the environment."
          },
          {
            "de": "Wir sehen Videos zum Thema Energiesparen.",
            "en": "We watch videos about saving energy."
          }
        ]
      },
      {
        "id": "erleben",
        "group": "l20-g2",
        "term": "erleben",
        "fa": "to experience",
        "type": "verb",
        "form": "Regular inseparable verb: `erlebt – erlebte – hat erlebt`.",
        "source": "Wortschatz.md",
        "example": "Im Klimahaus erleben wir verschiedene Klimazonen.",
        "exampleFa": "At the climate museum, we experience different climate zones.",
        "cloze": "Im Klimahaus ____ wir verschiedene Klimazonen.",
        "clozeFa": "At the climate museum, we experience different climate zones.",
        "answer": "erleben",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "erleben",
          "erleben",
          "erleben"
        ],
        "examples": [
          {
            "de": "Im Klimahaus erleben wir verschiedene Klimazonen.",
            "en": "At the climate museum, we experience different climate zones."
          },
          {
            "de": "Die Schüler haben einen interessanten Tag erlebt.",
            "en": "The students experienced an interesting day."
          }
        ]
      },
      {
        "id": "anstatt",
        "group": "l20-g2",
        "term": "anstatt",
        "fa": "instead of",
        "type": "word",
        "form": "Common patterns: `anstatt + Genitiv` or `anstatt … zu + Infinitiv`; short form: `statt`.",
        "source": "Wortschatz.md",
        "example": "Anstatt nur zu reden, sollten wir handeln.",
        "exampleFa": "Instead of only talking, we should act.",
        "cloze": "____ nur zu reden, sollten wir handeln.",
        "clozeFa": "Instead of only talking, we should act.",
        "answer": "anstatt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "anstatt",
          "anstatt",
          "anstatt"
        ],
        "examples": [
          {
            "de": "Anstatt nur zu reden, sollten wir handeln.",
            "en": "Instead of only talking, we should act."
          },
          {
            "de": "Anstatt des Autos nehme ich den Bus.",
            "en": "Instead of the car, I take the bus."
          }
        ]
      },
      {
        "id": "rund-um",
        "group": "l20-g2",
        "term": "rund um",
        "fa": "around; all around",
        "type": "phrase",
        "form": "Prepositional expression followed by the accusative.",
        "source": "Wortschatz.md",
        "example": "Wir sammeln Müll rund um die Schule.",
        "exampleFa": "We collect rubbish around the school.",
        "cloze": "Wir sammeln Müll ____ die Schule.",
        "clozeFa": "We collect rubbish around the school.",
        "answer": "rund um",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "rund um",
          "rund um",
          "rund um"
        ],
        "examples": [
          {
            "de": "Wir sammeln Müll rund um die Schule.",
            "en": "We collect rubbish around the school."
          },
          {
            "de": "Rund um den Bahnhof gibt es viele Geschäfte.",
            "en": "There are many shops around the station."
          }
        ]
      },
      {
        "id": "die-grossstadt",
        "group": "l20-g2",
        "term": "die Großstadt",
        "fa": "large city; major city",
        "type": "noun",
        "form": "Feminine noun; plural: `die Großstädte`.",
        "source": "Wortschatz.md",
        "example": "Wir möchten mehr Natur in die Großstadt bringen.",
        "exampleFa": "We want to bring more nature into the large city.",
        "cloze": "Wir möchten mehr Natur in die ____ bringen.",
        "clozeFa": "We want to bring more nature into the large city.",
        "answer": "Großstadt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Großstadt",
          "Großstadt",
          "Großstadt"
        ],
        "examples": [
          {
            "de": "Wir möchten mehr Natur in die Großstadt bringen.",
            "en": "We want to bring more nature into the large city."
          },
          {
            "de": "Das Leben in einer Großstadt ist oft teuer.",
            "en": "Life in a large city is often expensive."
          }
        ]
      },
      {
        "id": "sich-veraendern",
        "group": "l20-g2",
        "term": "sich verändern",
        "fa": "to change; to transform",
        "type": "verb",
        "form": "Reflexive: something changes by itself. Transitive `etwas verändern`: someone changes something.",
        "source": "Wortschatz.md",
        "example": "Die Klimazonen verändern sich.",
        "exampleFa": "The climate zones are changing.",
        "cloze": "Die Klimazonen ____ sich.",
        "clozeFa": "The climate zones are changing.",
        "answer": "verändern",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich verändern",
          "sich verändern",
          "verändern"
        ],
        "examples": [
          {
            "de": "Die Klimazonen verändern sich.",
            "en": "The climate zones are changing."
          },
          {
            "de": "Unser Alltag hat sich stark verändert.",
            "en": "Our everyday life has changed significantly."
          },
          {
            "de": "Wir sollten unseren Alltag verändern.",
            "en": "We should change our everyday lives."
          }
        ]
      },
      {
        "id": "allzu",
        "group": "l20-g2",
        "term": "allzu",
        "fa": "overly; excessively; all too",
        "type": "verb",
        "form": "Intensifying adverb, usually followed by an adjective or adverb.",
        "source": "Wortschatz.md",
        "example": "Wir sollten nicht allzu viel Energie verbrauchen.",
        "exampleFa": "We should not consume too much energy.",
        "cloze": "Wir sollten nicht ____ viel Energie verbrauchen.",
        "clozeFa": "We should not consume too much energy.",
        "answer": "allzu",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "allzu",
          "allzu",
          "allzu"
        ],
        "examples": [
          {
            "de": "Wir sollten nicht allzu viel Energie verbrauchen.",
            "en": "We should not consume too much energy."
          },
          {
            "de": "Die Aufgabe ist nicht allzu schwer.",
            "en": "The task is not overly difficult."
          }
        ]
      },
      {
        "id": "sich-mit-etwas-beschaeftigen",
        "group": "l20-g2",
        "term": "sich mit etwas beschäftigen",
        "fa": "to deal with; to study; to occupy oneself with",
        "type": "phrase",
        "form": "Reflexive verb with `mit + Dativ`: `beschäftigt sich – beschäftigte sich – hat sich beschäftigt`.",
        "source": "Wortschatz.md",
        "example": "Wir beschäftigen uns mit dem Thema Recycling.",
        "exampleFa": "We are studying the topic of recycling.",
        "cloze": "Wir ____ uns mit dem Thema Recycling.",
        "clozeFa": "We are studying the topic of recycling.",
        "answer": "beschäftigen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich mit etwas beschäftigen",
          "sich mit etwas beschäftigen",
          "beschäftigen"
        ],
        "examples": [
          {
            "de": "Wir beschäftigen uns mit dem Thema Recycling.",
            "en": "We are studying the topic of recycling."
          },
          {
            "de": "Sie beschäftigt sich intensiv mit dem Klimawandel.",
            "en": "She studies climate change intensively."
          }
        ]
      },
      {
        "id": "die-gruppenarbeit",
        "group": "l20-g2",
        "term": "die Gruppenarbeit",
        "fa": "group work",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Gruppenarbeiten`.",
        "source": "Wortschatz.md",
        "example": "Heute machen wir eine Gruppenarbeit.",
        "exampleFa": "Today we are doing group work.",
        "cloze": "Heute machen wir eine ____.",
        "clozeFa": "Today we are doing group work.",
        "answer": "Gruppenarbeit",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Gruppenarbeit",
          "Gruppenarbeit",
          "Gruppenarbeit"
        ],
        "examples": [
          {
            "de": "Heute machen wir eine Gruppenarbeit.",
            "en": "Today we are doing group work."
          },
          {
            "de": "Die Schüler lernen durch Videos und Gruppenarbeit.",
            "en": "The students learn through videos and group work."
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
        "title": "Words 391-400",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 21,
    "code": "Set 21",
    "title": "Wortschatz Set 21",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "verschmutzen",
        "group": "l21-g1",
        "term": "verschmutzen",
        "fa": "to pollute; to make dirty",
        "type": "verb",
        "form": "Regular verb: `verschmutzt – verschmutzte – hat verschmutzt`.",
        "source": "Wortschatz.md",
        "example": "Abwasser kann Flüsse verschmutzen.",
        "exampleFa": "Wastewater can pollute rivers.",
        "cloze": "Abwasser kann Flüsse ____.",
        "clozeFa": "Wastewater can pollute rivers.",
        "answer": "verschmutzen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "verschmutzen",
          "verschmutzen",
          "verschmutzen"
        ],
        "examples": [
          {
            "de": "Abwasser kann Flüsse verschmutzen.",
            "en": "Wastewater can pollute rivers."
          },
          {
            "de": "Kann man Wasser nutzen, ohne es zu verschmutzen?",
            "en": "Can one use water without polluting it?"
          }
        ]
      },
      {
        "id": "theoretisch",
        "group": "l21-g1",
        "term": "theoretisch",
        "fa": "theoretical; theoretically",
        "type": "verb",
        "form": "Adjective or adverb.",
        "source": "Wortschatz.md",
        "example": "Wir beschäftigen uns theoretisch mit dem Thema.",
        "exampleFa": "We study the topic theoretically.",
        "cloze": "Wir beschäftigen uns ____ mit dem Thema.",
        "clozeFa": "We study the topic theoretically.",
        "answer": "theoretisch",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "theoretisch",
          "theoretisch",
          "theoretisch"
        ],
        "examples": [
          {
            "de": "Wir beschäftigen uns theoretisch mit dem Thema.",
            "en": "We study the topic theoretically."
          },
          {
            "de": "Das ist eine theoretische Frage.",
            "en": "That is a theoretical question."
          }
        ]
      },
      {
        "id": "die-klimazone",
        "group": "l21-g1",
        "term": "die Klimazone",
        "fa": "climate zone",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Klimazonen`.",
        "source": "Wortschatz.md",
        "example": "Die Erde hat verschiedene Klimazonen.",
        "exampleFa": "Earth has different climate zones.",
        "cloze": "Die Erde hat verschiedene ____n.",
        "clozeFa": "Earth has different climate zones.",
        "answer": "Klimazone",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Klimazone",
          "Klimazone",
          "Klimazone"
        ],
        "examples": [
          {
            "de": "Die Erde hat verschiedene Klimazonen.",
            "en": "Earth has different climate zones."
          },
          {
            "de": "Wir erleben die Klimazonen der Erde.",
            "en": "We experience Earth's climate zones."
          }
        ]
      },
      {
        "id": "die-muelltrennung",
        "group": "l21-g1",
        "term": "die Mülltrennung",
        "fa": "waste separation; waste sorting",
        "type": "noun",
        "form": "Feminine compound noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Mülltrennung ist wichtig für das Recycling.",
        "exampleFa": "Waste separation is important for recycling.",
        "cloze": "____ ist wichtig für das Recycling.",
        "clozeFa": "Waste separation is important for recycling.",
        "answer": "Mülltrennung",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Mülltrennung",
          "Mülltrennung",
          "Mülltrennung"
        ],
        "examples": [
          {
            "de": "Mülltrennung ist wichtig für das Recycling.",
            "en": "Waste separation is important for recycling."
          },
          {
            "de": "Die Kinder lernen etwas über Mülltrennung.",
            "en": "The children learn about waste sorting."
          }
        ]
      },
      {
        "id": "das-recycling",
        "group": "l21-g1",
        "term": "das Recycling",
        "fa": "recycling",
        "type": "noun",
        "form": "Neuter noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Recycling spart Rohstoffe.",
        "exampleFa": "Recycling saves raw materials.",
        "cloze": "____ spart Rohstoffe.",
        "clozeFa": "Recycling saves raw materials.",
        "answer": "Recycling",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Recycling",
          "Recycling",
          "Recycling"
        ],
        "examples": [
          {
            "de": "Recycling spart Rohstoffe.",
            "en": "Recycling saves raw materials."
          },
          {
            "de": "Wir beschäftigen uns mit dem Thema Recycling.",
            "en": "We are studying the topic of recycling."
          }
        ]
      },
      {
        "id": "mitnehmen",
        "group": "l21-g1",
        "term": "mitnehmen",
        "fa": "to take along; to bring",
        "type": "verb",
        "form": "Separable strong verb: `nimmt mit – nahm mit – hat mitgenommen`.",
        "source": "Wortschatz.md",
        "example": "Bitte warme Kleidung mitnehmen.",
        "exampleFa": "Please bring warm clothing.",
        "cloze": "Bitte warme Kleidung ____.",
        "clozeFa": "Please bring warm clothing.",
        "answer": "mitnehmen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mitnehmen",
          "mitnehmen",
          "mitnehmen"
        ],
        "examples": [
          {
            "de": "Bitte warme Kleidung mitnehmen.",
            "en": "Please bring warm clothing."
          },
          {
            "de": "Ich nehme ein Picknick mit.",
            "en": "I am taking a packed meal with me."
          }
        ]
      },
      {
        "id": "das-klima",
        "group": "l21-g1",
        "term": "das Klima",
        "fa": "climate",
        "type": "noun",
        "form": "Neuter noun; plural `die Klimata` is uncommon in everyday language.",
        "source": "Wortschatz.md",
        "example": "Der Klimawandel verändert das Klima.",
        "exampleFa": "Climate change alters the climate.",
        "cloze": "Der ____wandel verändert das Klima.",
        "clozeFa": "Climate change alters the climate.",
        "answer": "Klima",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Klima",
          "Klima",
          "Klima"
        ],
        "examples": [
          {
            "de": "Der Klimawandel verändert das Klima.",
            "en": "Climate change alters the climate."
          },
          {
            "de": "Wir lernen viel über das Klima.",
            "en": "We learn a lot about the climate."
          }
        ]
      },
      {
        "id": "die-erde",
        "group": "l21-g1",
        "term": "die Erde",
        "fa": "Earth; soil; ground",
        "type": "noun",
        "form": "Feminine noun; meaning depends on context.",
        "source": "Wortschatz.md",
        "example": "Das Klima der Erde verändert sich.",
        "exampleFa": "Earth's climate is changing.",
        "cloze": "Das Klima der ____ verändert sich.",
        "clozeFa": "Earth's climate is changing.",
        "answer": "Erde",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Erde",
          "Erde",
          "Erde"
        ],
        "examples": [
          {
            "de": "Das Klima der Erde verändert sich.",
            "en": "Earth's climate is changing."
          },
          {
            "de": "Die Pflanzen wachsen in der Erde.",
            "en": "The plants grow in the soil."
          }
        ]
      },
      {
        "id": "die-energieform",
        "group": "l21-g1",
        "term": "die Energieform",
        "fa": "form/source of energy",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Energieformen`.",
        "source": "Wortschatz.md",
        "example": "Wir sprechen über alte und neue Energieformen.",
        "exampleFa": "We discuss old and new forms of energy.",
        "cloze": "Wir sprechen über alte und neue ____en.",
        "clozeFa": "We discuss old and new forms of energy.",
        "answer": "Energieform",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Energieform",
          "Energieform",
          "Energieform"
        ],
        "examples": [
          {
            "de": "Wir sprechen über alte und neue Energieformen.",
            "en": "We discuss old and new forms of energy."
          },
          {
            "de": "Solarenergie ist eine erneuerbare Energieform.",
            "en": "Solar energy is a renewable form of energy."
          }
        ]
      },
      {
        "id": "der-lebensstandard",
        "group": "l21-g1",
        "term": "der Lebensstandard",
        "fa": "standard of living",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Lebensstandards`.",
        "source": "Wortschatz.md",
        "example": "Wir möchten unseren Lebensstandard behalten.",
        "exampleFa": "We want to maintain our standard of living.",
        "cloze": "Wir möchten unseren ____ behalten.",
        "clozeFa": "We want to maintain our standard of living.",
        "answer": "Lebensstandard",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Lebensstandard",
          "Lebensstandard",
          "Lebensstandard"
        ],
        "examples": [
          {
            "de": "Wir möchten unseren Lebensstandard behalten.",
            "en": "We want to maintain our standard of living."
          },
          {
            "de": "Kann man auf diesem Lebensstandard nachhaltig leben?",
            "en": "Can one live sustainably at this standard of living?"
          }
        ]
      },
      {
        "id": "das-detail",
        "group": "l21-g2",
        "term": "das Detail",
        "fa": "detail",
        "type": "noun",
        "form": "Neuter noun; plural: `die Details`; common phrase: `ins Detail gehen`.",
        "source": "Wortschatz.md",
        "example": "Wir wollen nicht zu sehr ins Detail gehen.",
        "exampleFa": "We do not want to go into too much detail.",
        "cloze": "Wir wollen nicht zu sehr ins ____ gehen.",
        "clozeFa": "We do not want to go into too much detail.",
        "answer": "Detail",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Detail",
          "Detail",
          "Detail"
        ],
        "examples": [
          {
            "de": "Wir wollen nicht zu sehr ins Detail gehen.",
            "en": "We do not want to go into too much detail."
          },
          {
            "de": "Die wichtigsten Details stehen im Wochenplan.",
            "en": "The most important details are in the weekly schedule."
          }
        ]
      },
      {
        "id": "sich-treffen",
        "group": "l21-g2",
        "term": "sich treffen",
        "fa": "to meet",
        "type": "verb",
        "form": "Reflexive strong verb: `trifft sich – traf sich – hat sich getroffen`.",
        "source": "Wortschatz.md",
        "example": "Wir treffen uns um 7:30 Uhr an der Schule.",
        "exampleFa": "We meet at the school at 7:30 a.m.",
        "cloze": "Wir ____ uns um 7:30 Uhr an der Schule.",
        "clozeFa": "We meet at the school at 7:30 a.m.",
        "answer": "treffen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "sich treffen",
          "sich treffen",
          "treffen"
        ],
        "examples": [
          {
            "de": "Wir treffen uns um 7:30 Uhr an der Schule.",
            "en": "We meet at the school at 7:30 a.m."
          },
          {
            "de": "Ich treffe mich morgen mit meiner Lehrerin.",
            "en": "I am meeting my teacher tomorrow."
          }
        ]
      },
      {
        "id": "die-umwelt",
        "group": "l21-g2",
        "term": "die Umwelt",
        "fa": "environment",
        "type": "noun",
        "form": "Feminine noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Wir müssen unsere Umwelt schützen.",
        "exampleFa": "We must protect our environment.",
        "cloze": "Wir müssen unsere ____ schützen.",
        "clozeFa": "We must protect our environment.",
        "answer": "Umwelt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Umwelt",
          "Umwelt",
          "Umwelt"
        ],
        "examples": [
          {
            "de": "Wir müssen unsere Umwelt schützen.",
            "en": "We must protect our environment."
          },
          {
            "de": "Plastik kann der Umwelt schaden.",
            "en": "Plastic can harm the environment."
          }
        ]
      },
      {
        "id": "die-natur",
        "group": "l21-g2",
        "term": "die Natur",
        "fa": "nature",
        "type": "noun",
        "form": "Feminine noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Wir sehen Natur in der Stadt.",
        "exampleFa": "We see nature in the city.",
        "cloze": "Wir sehen ____ in der Stadt.",
        "clozeFa": "We see nature in the city.",
        "answer": "Natur",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Natur",
          "Natur",
          "Natur"
        ],
        "examples": [
          {
            "de": "Wir sehen Natur in der Stadt.",
            "en": "We see nature in the city."
          },
          {
            "de": "Kinder sollen die Natur kennenlernen.",
            "en": "Children should become familiar with nature."
          }
        ]
      },
      {
        "id": "der-muell",
        "group": "l21-g2",
        "term": "der Müll",
        "fa": "rubbish; garbage; waste",
        "type": "noun",
        "form": "Masculine collective noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Wir sammeln Müll rund um die Schule.",
        "exampleFa": "We collect rubbish around the school.",
        "cloze": "Wir sammeln ____ rund um die Schule.",
        "clozeFa": "We collect rubbish around the school.",
        "answer": "Müll",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Müll",
          "Müll",
          "Müll"
        ],
        "examples": [
          {
            "de": "Wir sammeln Müll rund um die Schule.",
            "en": "We collect rubbish around the school."
          },
          {
            "de": "Bitte werfen Sie den Müll in die richtige Tonne.",
            "en": "Please put the waste in the correct bin."
          }
        ]
      },
      {
        "id": "kennenlernen",
        "group": "l21-g2",
        "term": "kennenlernen",
        "fa": "to get to know; to become familiar with",
        "type": "verb",
        "form": "Separable verb: `lernt kennen – lernte kennen – hat kennengelernt`; with `zu`: `kennenzulernen`.",
        "source": "Wortschatz.md",
        "example": "Wir lernen den Weg des Trinkwassers kennen.",
        "exampleFa": "We become familiar with the journey of drinking water.",
        "cloze": "Wir lernen den Weg des Trinkwassers kennen. ____",
        "clozeFa": "We become familiar with the journey of drinking water.",
        "answer": "kennenlernen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "kennenlernen",
          "kennenlernen",
          "kennenlernen"
        ],
        "examples": [
          {
            "de": "Wir lernen den Weg des Trinkwassers kennen.",
            "en": "We become familiar with the journey of drinking water."
          },
          {
            "de": "Ich freue mich, Sie kennenzulernen.",
            "en": "I am pleased to meet you."
          }
        ]
      },
      {
        "id": "der-umweltschutz",
        "group": "l21-g2",
        "term": "der Umweltschutz",
        "fa": "environmental protection",
        "type": "noun",
        "form": "Masculine compound noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Unsere Projektwoche hat das Thema Umweltschutz.",
        "exampleFa": "Our project week has the topic of environmental protection.",
        "cloze": "Unsere Projektwoche hat das Thema ____.",
        "clozeFa": "Our project week has the topic of environmental protection.",
        "answer": "Umweltschutz",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Umweltschutz",
          "Umweltschutz",
          "Umweltschutz"
        ],
        "examples": [
          {
            "de": "Unsere Projektwoche hat das Thema Umweltschutz.",
            "en": "Our project week has the topic of environmental protection."
          },
          {
            "de": "Umweltschutz ist für unsere Zukunft wichtig.",
            "en": "Environmental protection is important for our future."
          },
          {
            "de": "Der Mann ist pessimistisch, was den Umweltschutz betrifft.",
            "en": "The man is pessimistic as far as environmental protection is concerned."
          }
        ]
      },
      {
        "id": "die-klassenkasse",
        "group": "l21-g2",
        "term": "die Klassenkasse",
        "fa": "class fund",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Klassenkassen`.",
        "source": "Wortschatz.md",
        "example": "Wir bezahlen den Ausflug aus der Klassenkasse.",
        "exampleFa": "We pay for the trip from the class fund.",
        "cloze": "Wir bezahlen den Ausflug aus der ____.",
        "clozeFa": "We pay for the trip from the class fund.",
        "answer": "Klassenkasse",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Klassenkasse",
          "Klassenkasse",
          "Klassenkasse"
        ],
        "examples": [
          {
            "de": "Wir bezahlen den Ausflug aus der Klassenkasse.",
            "en": "We pay for the trip from the class fund."
          },
          {
            "de": "In der Klassenkasse ist genug Geld.",
            "en": "There is enough money in the class fund."
          }
        ]
      },
      {
        "id": "zerstoeren",
        "group": "l21-g2",
        "term": "zerstören",
        "fa": "to destroy",
        "type": "verb",
        "form": "Regular inseparable verb: `zerstört – zerstörte – hat zerstört`.",
        "source": "Wortschatz.md",
        "example": "Müll kann natürliche Lebensräume zerstören.",
        "exampleFa": "Waste can destroy natural habitats.",
        "cloze": "Müll kann natürliche Lebensräume ____.",
        "clozeFa": "Waste can destroy natural habitats.",
        "answer": "zerstören",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zerstören",
          "zerstören",
          "zerstören"
        ],
        "examples": [
          {
            "de": "Müll kann natürliche Lebensräume zerstören.",
            "en": "Waste can destroy natural habitats."
          },
          {
            "de": "Das Gebäude wurde vollständig zerstört.",
            "en": "The building was completely destroyed."
          }
        ]
      },
      {
        "id": "das-trinkwasser",
        "group": "l21-g2",
        "term": "das Trinkwasser",
        "fa": "drinking water",
        "type": "noun",
        "form": "Neuter compound noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Wir lernen den Weg des Trinkwassers kennen.",
        "exampleFa": "We learn about the journey of drinking water.",
        "cloze": "Wir lernen den Weg des ____s kennen.",
        "clozeFa": "We learn about the journey of drinking water.",
        "answer": "Trinkwasser",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Trinkwasser",
          "Trinkwasser",
          "Trinkwasser"
        ],
        "examples": [
          {
            "de": "Wir lernen den Weg des Trinkwassers kennen.",
            "en": "We learn about the journey of drinking water."
          },
          {
            "de": "Das Trinkwasser wird regelmäßig geprüft.",
            "en": "The drinking water is checked regularly."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l21-g1",
        "icon": "1",
        "title": "Words 401-410",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l21-g2",
        "icon": "2",
        "title": "Words 411-420",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 22,
    "code": "Set 22",
    "title": "Wortschatz Set 22",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "einladen",
        "group": "l22-g1",
        "term": "einladen",
        "fa": "to invite",
        "type": "verb",
        "form": "Separable strong verb: `lädt ein – lud ein – hat eingeladen`; `jemanden zu etwas einladen`.",
        "source": "Wortschatz.md",
        "example": "Ich habe Sie zum Elternabend eingeladen.",
        "exampleFa": "I invited you to the parent-teacher meeting.",
        "cloze": "Ich habe Sie zum Elternabend eingeladen. ____",
        "clozeFa": "I invited you to the parent-teacher meeting.",
        "answer": "einladen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "einladen",
          "einladen",
          "einladen"
        ],
        "examples": [
          {
            "de": "Ich habe Sie zum Elternabend eingeladen.",
            "en": "I invited you to the parent-teacher meeting."
          },
          {
            "de": "Sie lädt ihre Freunde zur Party ein.",
            "en": "She invites her friends to the party."
          }
        ]
      },
      {
        "id": "produzieren",
        "group": "l22-g1",
        "term": "produzieren",
        "fa": "to produce; to generate",
        "type": "verb",
        "form": "Regular verb ending in `-ieren`: `produziert – produzierte – hat produziert`.",
        "source": "Wortschatz.md",
        "example": "Wir sollten weniger Müll produzieren.",
        "exampleFa": "We should produce less waste.",
        "cloze": "Wir sollten weniger Müll ____.",
        "clozeFa": "We should produce less waste.",
        "answer": "produzieren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "produzieren",
          "produzieren",
          "produzieren"
        ],
        "examples": [
          {
            "de": "Wir sollten weniger Müll produzieren.",
            "en": "We should produce less waste."
          },
          {
            "de": "Die Firma produziert umweltfreundliche Produkte.",
            "en": "The company produces environmentally friendly products."
          }
        ]
      },
      {
        "id": "schaedigen",
        "group": "l22-g1",
        "term": "schädigen",
        "fa": "to damage; to harm",
        "type": "verb",
        "form": "Regular verb: `schädigt – schädigte – hat geschädigt`; takes the accusative.",
        "source": "Wortschatz.md",
        "example": "Abgase schädigen die Umwelt.",
        "exampleFa": "Exhaust fumes harm the environment.",
        "cloze": "Abgase ____ die Umwelt.",
        "clozeFa": "Exhaust fumes harm the environment.",
        "answer": "schädigen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "schädigen",
          "schädigen",
          "schädigen"
        ],
        "examples": [
          {
            "de": "Abgase schädigen die Umwelt.",
            "en": "Exhaust fumes harm the environment."
          },
          {
            "de": "Wir wollen leben, ohne die Natur zu schädigen.",
            "en": "We want to live without harming nature."
          }
        ]
      },
      {
        "id": "besichtigen",
        "group": "l22-g1",
        "term": "besichtigen",
        "fa": "to visit; to tour; to inspect",
        "type": "verb",
        "form": "Inseparable regular verb: `besichtigt – besichtigte – hat besichtigt`.",
        "source": "Wortschatz.md",
        "example": "Wir besichtigen ein Gartenprojekt.",
        "exampleFa": "We are touring a garden project.",
        "cloze": "Wir ____ ein Gartenprojekt.",
        "clozeFa": "We are touring a garden project.",
        "answer": "besichtigen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "besichtigen",
          "besichtigen",
          "besichtigen"
        ],
        "examples": [
          {
            "de": "Wir besichtigen ein Gartenprojekt.",
            "en": "We are touring a garden project."
          },
          {
            "de": "Die Klasse hat die Wasserwerke besichtigt.",
            "en": "The class visited the waterworks."
          }
        ]
      },
      {
        "id": "der-wochenplan",
        "group": "l22-g1",
        "term": "der Wochenplan",
        "fa": "weekly schedule; weekly plan",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Wochenpläne`.",
        "source": "Wortschatz.md",
        "example": "Hier finden Sie den Wochenplan.",
        "exampleFa": "Here you can find the weekly schedule.",
        "cloze": "Hier finden Sie den ____.",
        "clozeFa": "Here you can find the weekly schedule.",
        "answer": "Wochenplan",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Wochenplan",
          "Wochenplan",
          "Wochenplan"
        ],
        "examples": [
          {
            "de": "Hier finden Sie den Wochenplan.",
            "en": "Here you can find the weekly schedule."
          },
          {
            "de": "Der Wochenplan enthält alle Ausflüge.",
            "en": "The weekly schedule contains all the excursions."
          }
        ]
      },
      {
        "id": "der-ueberblick",
        "group": "l22-g1",
        "term": "der Überblick",
        "fa": "overview",
        "type": "noun",
        "form": "Masculine noun; common expression: `einen Überblick geben/haben`.",
        "source": "Wortschatz.md",
        "example": "Der Wochenplan gibt einen guten Überblick.",
        "exampleFa": "The weekly schedule provides a good overview.",
        "cloze": "Der Wochenplan gibt einen guten ____.",
        "clozeFa": "The weekly schedule provides a good overview.",
        "answer": "Überblick",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Überblick",
          "Überblick",
          "Überblick"
        ],
        "examples": [
          {
            "de": "Der Wochenplan gibt einen guten Überblick.",
            "en": "The weekly schedule provides a good overview."
          },
          {
            "de": "Ich habe den Überblick verloren.",
            "en": "I have lost track of things."
          }
        ]
      },
      {
        "id": "der-ausflug",
        "group": "l22-g1",
        "term": "der Ausflug",
        "fa": "excursion; trip; outing",
        "type": "noun",
        "form": "Masculine noun; plural: `die Ausflüge`.",
        "source": "Wortschatz.md",
        "example": "Die Klasse macht einen Ausflug.",
        "exampleFa": "The class is going on an excursion.",
        "cloze": "Die Klasse macht einen ____.",
        "clozeFa": "The class is going on an excursion.",
        "answer": "Ausflug",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Ausflug",
          "Ausflug",
          "Ausflug"
        ],
        "examples": [
          {
            "de": "Die Klasse macht einen Ausflug.",
            "en": "The class is going on an excursion."
          },
          {
            "de": "Solche Ausflüge sind für Kinder interessant.",
            "en": "Such trips are interesting for children."
          },
          {
            "de": "Sie hat viele spannende Ausflüge gemacht.",
            "en": "She went on many exciting excursions."
          }
        ]
      },
      {
        "id": "das-thema",
        "group": "l22-g1",
        "term": "das Thema",
        "fa": "topic; theme; subject",
        "type": "noun",
        "form": "Neuter noun; plural: `die Themen`; common phrase: `zum Thema + noun`.",
        "source": "Wortschatz.md",
        "example": "Die Projektwoche ist zum Thema Umweltschutz.",
        "exampleFa": "The project week is about environmental protection.",
        "cloze": "Die Projektwoche ist zum ____ Umweltschutz.",
        "clozeFa": "The project week is about environmental protection.",
        "answer": "Thema",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Thema",
          "Thema",
          "Thema"
        ],
        "examples": [
          {
            "de": "Die Projektwoche ist zum Thema Umweltschutz.",
            "en": "The project week is about environmental protection."
          },
          {
            "de": "Heute sprechen wir über ein wichtiges Thema.",
            "en": "Today we are discussing an important topic."
          }
        ]
      },
      {
        "id": "losfahren",
        "group": "l22-g1",
        "term": "losfahren",
        "fa": "to set off; to depart",
        "type": "verb",
        "form": "Separable strong verb: `fährt los – fuhr los – ist losgefahren`.",
        "source": "Wortschatz.md",
        "example": "Wir fahren pünktlich los.",
        "exampleFa": "We set off on time.",
        "cloze": "Wir fahren pünktlich los. ____",
        "clozeFa": "We set off on time.",
        "answer": "losfahren",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "losfahren",
          "losfahren",
          "losfahren"
        ],
        "examples": [
          {
            "de": "Wir fahren pünktlich los.",
            "en": "We set off on time."
          },
          {
            "de": "Der Bus ist um 8 Uhr losgefahren.",
            "en": "The bus departed at 8 a.m."
          }
        ]
      },
      {
        "id": "die-projektwoche",
        "group": "l22-g1",
        "term": "die Projektwoche",
        "fa": "project week",
        "type": "noun",
        "form": "Feminine compound noun; plural: `die Projektwochen`.",
        "source": "Wortschatz.md",
        "example": "Die Schüler haben eine Projektwoche.",
        "exampleFa": "The students have a project week.",
        "cloze": "Die Schüler haben eine ____.",
        "clozeFa": "The students have a project week.",
        "answer": "Projektwoche",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "die Projektwoche",
          "Projektwoche",
          "Projektwoche"
        ],
        "examples": [
          {
            "de": "Die Schüler haben eine Projektwoche.",
            "en": "The students have a project week."
          },
          {
            "de": "Die Lehrerin erklärt den Eltern die Projektwoche.",
            "en": "The teacher explains the project week to the parents."
          }
        ]
      },
      {
        "id": "das-gartenprojekt",
        "group": "l22-g2",
        "term": "das Gartenprojekt",
        "fa": "garden project",
        "type": "noun",
        "form": "Neuter compound noun; plural: `die Gartenprojekte`.",
        "source": "Wortschatz.md",
        "example": "Das Gartenprojekt befindet sich auf einem Hochhaus.",
        "exampleFa": "The garden project is located on a high-rise building.",
        "cloze": "Das ____ befindet sich auf einem Hochhaus.",
        "clozeFa": "The garden project is located on a high-rise building.",
        "answer": "Gartenprojekt",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Gartenprojekt",
          "Gartenprojekt",
          "Gartenprojekt"
        ],
        "examples": [
          {
            "de": "Das Gartenprojekt befindet sich auf einem Hochhaus.",
            "en": "The garden project is located on a high-rise building."
          },
          {
            "de": "Die Schüler besuchen ein Gartenprojekt.",
            "en": "The students visit a garden project."
          }
        ]
      },
      {
        "id": "puenktlich",
        "group": "l22-g2",
        "term": "pünktlich",
        "fa": "punctual; on time",
        "type": "verb",
        "form": "Adjective or adverb.",
        "source": "Wortschatz.md",
        "example": "Wir möchten pünktlich losfahren.",
        "exampleFa": "We would like to depart on time.",
        "cloze": "Wir möchten ____ losfahren.",
        "clozeFa": "We would like to depart on time.",
        "answer": "pünktlich",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "pünktlich",
          "pünktlich",
          "pünktlich"
        ],
        "examples": [
          {
            "de": "Wir möchten pünktlich losfahren.",
            "en": "We would like to depart on time."
          },
          {
            "de": "Der Zug ist pünktlich angekommen.",
            "en": "The train arrived on time."
          }
        ]
      },
      {
        "id": "das-hochhaus",
        "group": "l22-g2",
        "term": "das Hochhaus",
        "fa": "high-rise building",
        "type": "noun",
        "form": "Neuter noun; plural: `die Hochhäuser`.",
        "source": "Wortschatz.md",
        "example": "Auf dem Hochhaus gibt es einen Garten.",
        "exampleFa": "There is a garden on the high-rise building.",
        "cloze": "Auf dem ____ gibt es einen Garten.",
        "clozeFa": "There is a garden on the high-rise building.",
        "answer": "Hochhaus",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Hochhaus",
          "Hochhaus",
          "Hochhaus"
        ],
        "examples": [
          {
            "de": "Auf dem Hochhaus gibt es einen Garten.",
            "en": "There is a garden on the high-rise building."
          },
          {
            "de": "In der Stadt stehen viele Hochhäuser.",
            "en": "There are many high-rise buildings in the city."
          }
        ]
      },
      {
        "id": "gar",
        "group": "l22-g2",
        "term": "gar",
        "fa": "even; at all; absolutely",
        "type": "verb",
        "form": "Intensifying adverb; its meaning depends on context.",
        "source": "Wortschatz.md",
        "example": "Wir dürfen die Umwelt nicht schädigen oder gar zerstören.",
        "exampleFa": "We must not harm or even destroy the environment.",
        "cloze": "Wir dürfen die Umwelt nicht schädigen oder ____ zerstören.",
        "clozeFa": "We must not harm or even destroy the environment.",
        "answer": "gar",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "gar",
          "gar",
          "gar"
        ],
        "examples": [
          {
            "de": "Wir dürfen die Umwelt nicht schädigen oder gar zerstören.",
            "en": "We must not harm or even destroy the environment."
          },
          {
            "de": "Das ist gar nicht schwer.",
            "en": "That is not difficult at all."
          }
        ]
      },
      {
        "id": "das-wasserwerk",
        "group": "l22-g2",
        "term": "das Wasserwerk",
        "fa": "waterworks; water treatment plant",
        "type": "noun",
        "form": "Neuter noun; plural: `die Wasserwerke`.",
        "source": "Wortschatz.md",
        "example": "Die Klasse besucht die Wasserwerke.",
        "exampleFa": "The class visits the waterworks.",
        "cloze": "Die Klasse besucht die ____e.",
        "clozeFa": "The class visits the waterworks.",
        "answer": "Wasserwerk",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Wasserwerk",
          "Wasserwerk",
          "Wasserwerk"
        ],
        "examples": [
          {
            "de": "Die Klasse besucht die Wasserwerke.",
            "en": "The class visits the waterworks."
          },
          {
            "de": "Das Wasserwerk liefert sauberes Trinkwasser.",
            "en": "The waterworks supplies clean drinking water."
          }
        ]
      },
      {
        "id": "das-lernziel",
        "group": "l22-g2",
        "term": "das Lernziel",
        "fa": "learning objective; learning goal",
        "type": "noun",
        "form": "Compound noun: `Lernen + Ziel`; plural: `die Lernziele`.",
        "source": "Wortschatz.md",
        "example": "Mein Lernziel ist das Sprachniveau B1.",
        "exampleFa": "My learning goal is language level B1.",
        "cloze": "Mein ____ ist das Sprachniveau B1.",
        "clozeFa": "My learning goal is language level B1.",
        "answer": "Lernziel",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "das Lernziel",
          "Lernziel",
          "Lernziel"
        ],
        "examples": [
          {
            "de": "Mein Lernziel ist das Sprachniveau B1.",
            "en": "My learning goal is language level B1."
          },
          {
            "de": "Ich habe mein Lernziel erreicht.",
            "en": "I achieved my learning objective."
          }
        ]
      },
      {
        "id": "bekannt-fuer",
        "group": "l22-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "schmuecken",
        "group": "l22-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-kostuem",
        "group": "l22-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-rosenmontag",
        "group": "l22-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l22-g1",
        "icon": "1",
        "title": "Words 421-430",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l22-g2",
        "icon": "2",
        "title": "Words 431-440",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 23,
    "code": "Set 23",
    "title": "Wortschatz Set 23",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "spass-haben",
        "group": "l23-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-publikum",
        "group": "l23-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Das Publikum hat den Rücktritt verstanden.",
            "en": "The audience understood the decision to step down."
          }
        ]
      },
      {
        "id": "genug",
        "group": "l23-g1",
        "term": "genug",
        "fa": "enough",
        "type": "verb",
        "form": "Used before a noun or after an adjective/adverb; its form does not change.",
        "source": "Wortschatz.md",
        "example": "Lernen die Kinder genug?",
        "exampleFa": "Are the children learning enough?",
        "cloze": "Lernen die Kinder ____?",
        "clozeFa": "Are the children learning enough?",
        "answer": "genug",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "genug",
          "genug",
          "genug"
        ],
        "examples": [
          {
            "de": "Lernen die Kinder genug?",
            "en": "Are the children learning enough?"
          },
          {
            "de": "Wir haben genug Geld für den Ausflug.",
            "en": "We have enough money for the trip."
          },
          {
            "de": "Trotz Internet gibt es noch genug Arbeit für Fahrradkuriere.",
            "en": "Despite the internet, there is still enough work for bicycle couriers."
          }
        ]
      },
      {
        "id": "die-verkleidung",
        "group": "l23-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-stimmung",
        "group": "l23-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "je-nach",
        "group": "l23-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Sie teilen die Arbeit je nach Situation auf.",
            "en": "They divide the work depending on the situation."
          }
        ]
      },
      {
        "id": "die-karnevalsfeier",
        "group": "l23-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "vermitteln",
        "group": "l23-g1",
        "term": "vermitteln",
        "fa": "to convey; to impart; to teach",
        "type": "verb",
        "form": "`jemandem` (Dativ) `etwas` (Akkusativ) vermitteln: `vermittelt – vermittelte – hat vermittelt`.",
        "source": "Wortschatz.md",
        "example": "Die Lehrerin vermittelt den Schülern wichtiges Wissen.",
        "exampleFa": "The teacher imparts important knowledge to the students.",
        "cloze": "Die Lehrerin vermittelt den Schülern wichtiges Wissen. ____",
        "clozeFa": "The teacher imparts important knowledge to the students.",
        "answer": "vermitteln",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "vermitteln",
          "vermitteln",
          "vermitteln"
        ],
        "examples": [
          {
            "de": "Die Lehrerin vermittelt den Schülern wichtiges Wissen.",
            "en": "The teacher imparts important knowledge to the students."
          },
          {
            "de": "Der Film vermittelt Informationen über den Klimawandel.",
            "en": "The film conveys information about climate change."
          }
        ]
      },
      {
        "id": "werfen",
        "group": "l23-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "der-elternabend",
        "group": "l23-g1",
        "term": "der Elternabend",
        "fa": "parents' evening; parent-teacher meeting",
        "type": "noun",
        "form": "Masculine compound noun; plural: `die Elternabende`.",
        "source": "Wortschatz.md",
        "example": "Die Eltern sind heute beim Elternabend.",
        "exampleFa": "The parents are at the parent-teacher meeting today.",
        "cloze": "Die Eltern sind heute beim ____.",
        "clozeFa": "The parents are at the parent-teacher meeting today.",
        "answer": "Elternabend",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Elternabend",
          "Elternabend",
          "Elternabend"
        ],
        "examples": [
          {
            "de": "Die Eltern sind heute beim Elternabend.",
            "en": "The parents are at the parent-teacher meeting today."
          },
          {
            "de": "Der Elternabend beginnt um 18 Uhr.",
            "en": "The parents' evening begins at 6 p.m."
          }
        ]
      },
      {
        "id": "zeigen",
        "group": "l23-g2",
        "term": "zeigen",
        "fa": "to show",
        "type": "verb",
        "form": "`jemandem` (Dativ) `etwas` (Akkusativ) zeigen: `zeigt – zeigte – hat gezeigt`.",
        "source": "Wortschatz.md",
        "example": "Die Lehrerin zeigt den Kindern ein Bild.",
        "exampleFa": "The teacher shows the children a picture.",
        "cloze": "Die Lehrerin zeigt den Kindern ein Bild. ____",
        "clozeFa": "The teacher shows the children a picture.",
        "answer": "zeigen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "zeigen",
          "zeigen",
          "zeigen"
        ],
        "examples": [
          {
            "de": "Die Lehrerin zeigt den Kindern ein Bild.",
            "en": "The teacher shows the children a picture."
          },
          {
            "de": "Kannst du mir den Weg zeigen?",
            "en": "Can you show me the way?"
          },
          {
            "de": "Der Spielfilm wird heute um 22:30 Uhr gezeigt.",
            "en": "The feature film will be shown today at 10:30 p.m."
          }
        ]
      },
      {
        "id": "erklaeren",
        "group": "l23-g2",
        "term": "erklären",
        "fa": "to explain",
        "type": "verb",
        "form": "`jemandem` (Dativ) `etwas` (Akkusativ) erklären: `erklärt – erklärte – hat erklärt`.",
        "source": "Wortschatz.md",
        "example": "Der Lehrer erklärt den Schülern den Klimawandel.",
        "exampleFa": "The teacher explains climate change to the students.",
        "cloze": "Der Lehrer erklärt den Schülern den Klimawandel. ____",
        "clozeFa": "The teacher explains climate change to the students.",
        "answer": "erklären",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "erklären",
          "erklären",
          "erklären"
        ],
        "examples": [
          {
            "de": "Der Lehrer erklärt den Schülern den Klimawandel.",
            "en": "The teacher explains climate change to the students."
          },
          {
            "de": "Können Sie mir diese Regel erklären?",
            "en": "Can you explain this rule to me?"
          }
        ]
      },
      {
        "id": "der-klimawandel",
        "group": "l23-g2",
        "term": "der Klimawandel",
        "fa": "climate change",
        "type": "noun",
        "form": "Masculine compound noun; normally used in the singular.",
        "source": "Wortschatz.md",
        "example": "Der Klimawandel betrifft die ganze Welt.",
        "exampleFa": "Climate change affects the whole world.",
        "cloze": "Der ____ betrifft die ganze Welt.",
        "clozeFa": "Climate change affects the whole world.",
        "answer": "Klimawandel",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "der Klimawandel",
          "Klimawandel",
          "Klimawandel"
        ],
        "examples": [
          {
            "de": "Der Klimawandel betrifft die ganze Welt.",
            "en": "Climate change affects the whole world."
          },
          {
            "de": "Im Unterricht sprechen wir über den Klimawandel.",
            "en": "We discuss climate change in class."
          }
        ]
      },
      {
        "id": "erkennen",
        "group": "l23-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-erwachsene-die-erwachsene",
        "group": "l23-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l23-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "eine-maske-aufsetzen",
        "group": "l23-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-verkleiden",
        "group": "l23-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "unterrichten",
        "group": "l23-g2",
        "term": "unterrichten",
        "fa": "to teach; to instruct",
        "type": "verb",
        "form": "`jemanden` (Akkusativ) or `ein Fach` (Akkusativ) unterrichten: `unterrichtet – unterrichtete – hat unterrichtet`.",
        "source": "Wortschatz.md",
        "example": "Sie unterrichtet die Kinder in Deutsch.",
        "exampleFa": "She teaches the children German.",
        "cloze": "Sie unterrichtet die Kinder in Deutsch. ____",
        "clozeFa": "She teaches the children German.",
        "answer": "unterrichten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "unterrichten",
          "unterrichten",
          "unterrichten"
        ],
        "examples": [
          {
            "de": "Sie unterrichtet die Kinder in Deutsch.",
            "en": "She teaches the children German."
          },
          {
            "de": "Herr Müller unterrichtet Mathematik.",
            "en": "Mr. Müller teaches mathematics."
          }
        ]
      },
      {
        "id": "nicht-nur-sondern-auch",
        "group": "l23-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l23-g1",
        "icon": "1",
        "title": "Words 441-450",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l23-g2",
        "icon": "2",
        "title": "Words 451-460",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 24,
    "code": "Set 24",
    "title": "Wortschatz Set 24",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "das-gericht",
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-urteil",
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-an-etwas-halten",
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-briefkasten",
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "bedeuten",
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-richter-die-richterin",
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-gesetz",
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Der Mann findet das Gesetz nicht so schlimm.",
            "en": "The man does not think the law is so bad."
          }
        ]
      },
      {
        "id": "aus-gesundheitlichen-gruenden",
        "group": "l24-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemanden-verklagen",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "widersprechen",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "fordern",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "seit",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Seit dem Rauchverbot hat sich das Verhalten nicht geändert.",
            "en": "Behavior has not changed since the smoking ban."
          }
        ]
      },
      {
        "id": "gesetzlich",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "passen",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "an-die-tuer-klopfen",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "die-haustuer",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "notwendig",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "angeben",
        "group": "l24-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l24-g1",
        "icon": "1",
        "title": "Words 461-470",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l24-g2",
        "icon": "2",
        "title": "Words 471-480",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 25,
    "code": "Set 25",
    "title": "Wortschatz Set 25",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "bereits",
        "group": "l25-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "verpflichtet-sein",
        "group": "l25-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "besprechen",
        "group": "l25-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "anbieten",
        "group": "l25-g1",
        "term": "anbieten",
        "fa": "to offer; to provide",
        "type": "verb",
        "form": "Separable strong verb: `bietet an – bot an – hat angeboten`; often follows the pattern `jemandem` (Dativ) `etwas` (Akkusativ) anbieten.",
        "source": "Wortschatz.md",
        "example": "Ich kann Ihnen zwei Termine anbieten.",
        "exampleFa": "I can offer you two appointments.",
        "cloze": "Ich kann Ihnen zwei Termine ____.",
        "clozeFa": "I can offer you two appointments.",
        "answer": "anbieten",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "anbieten",
          "anbieten",
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
          },
          {
            "de": "Der Sportverein bietet Schwimmkurse an.",
            "en": "The sports club offers swimming courses."
          }
        ]
      },
      {
        "id": "bestehen-bleiben",
        "group": "l25-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "aendern",
        "group": "l25-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-kosten-uebernehmen",
        "group": "l25-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Ihr Mann übernimmt viele Hausarbeiten.",
            "en": "Her husband takes on many household chores."
          }
        ]
      },
      {
        "id": "die-rechnung",
        "group": "l25-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sollen",
        "group": "l25-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-entscheidung",
        "group": "l25-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Meine Eltern sind damit einverstanden.",
            "en": "My parents agree with that."
          }
        ]
      },
      {
        "id": "einen-antrag-stellen",
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "pruefen-die-pruefung",
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "immer-dann-wenn",
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "prinzipiell",
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "enthalten",
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "es-kann-sein-dass",
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-arbeitgeber-die-arbeitgeberin",
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-zahnbehandlung",
        "group": "l25-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l25-g1",
        "icon": "1",
        "title": "Words 481-490",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l25-g2",
        "icon": "2",
        "title": "Words 491-500",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 26,
    "code": "Set 26",
    "title": "Wortschatz Set 26",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "das-aerztliche-gutachten",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "eine-entscheidung-treffen",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ob",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "naemlich",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "einen-fehler-machen",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "erzaehlen",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-krankenkasse",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-amt",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "mitteilen",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ablehnen",
        "group": "l26-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "hiermit",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "gehoeren",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "viel-zu",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-kuendigungsfrist",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-kuendigung",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "trotzdem",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "wirksam",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-frist",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-wohnungsuebergabe",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-anschrift",
        "group": "l26-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l26-g1",
        "icon": "1",
        "title": "Words 501-510",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l26-g2",
        "icon": "2",
        "title": "Words 511-520",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 27,
    "code": "Set 27",
    "title": "Wortschatz Set 27",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "ein-tor-schiessen",
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "rauswerfen",
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-eigenbedarf",
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "betragen",
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "umziehen",
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-rechtsanwalt-die-rechtsanwaeltin",
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-mannschaft",
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "fristgerecht",
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "kuendigen",
        "group": "l27-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "widerspruch-einlegen",
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "bestaetigen",
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "insgesamt",
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ausziehen",
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-schlosspark",
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "fast",
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "nebenan",
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ueberlegen",
        "group": "l27-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l27-g1",
        "icon": "1",
        "title": "Words 521-530",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l27-g2",
        "icon": "2",
        "title": "Words 531-540",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 28,
    "code": "Set 28",
    "title": "Wortschatz Set 28",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "lass-uns",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "schritte-befolgen",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "allerdings",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "immer-noch",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Das Bein tut immer noch weh.",
            "en": "The leg still hurts."
          }
        ]
      },
      {
        "id": "sauer-sein",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "streit-haben",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "was-meint-ihr",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "recht-haben",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "zu-etwas-gelangen",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemanden-beleidigen",
        "group": "l28-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-sehe-ich-auch-so",
        "group": "l28-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-hausbewohner-die-hausbewohnerin",
        "group": "l28-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sicher-sein",
        "group": "l28-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "hoeflich",
        "group": "l28-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-bei-jemandem-entschuldigen",
        "group": "l28-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-spielplatz",
        "group": "l28-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemandem-zustimmen",
        "group": "l28-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "haengen-position-and-placement",
        "group": "l28-g2",
        "term": "hängen: position and placement",
        "fa": "to hang; to put/hang something somewhere",
        "type": "phrase",
        "form": "For a position, use `hing – hat gehangen` with a location in the dative. For placement, use `hängte – hat gehängt` with a destination in the accusative.",
        "source": "Wortschatz.md",
        "example": "Viele Poster hängen im Zimmer.",
        "exampleFa": "Many posters are hanging in the room.",
        "cloze": "Viele Poster ____ im Zimmer.",
        "clozeFa": "Many posters are hanging in the room.",
        "answer": "hängen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "hängen: position and placement",
          "hängen: position and placement",
          "hängen"
        ],
        "examples": [
          {
            "de": "Viele Poster hängen im Zimmer.",
            "en": "Many posters are hanging in the room."
          },
          {
            "de": "Das Schild hat an der Tür gehangen.",
            "en": "The sign was hanging on the door."
          },
          {
            "de": "Sie hängt das Schild in den Hausflur.",
            "en": "She hangs the sign in the hallway."
          }
        ]
      },
      {
        "id": "draussen",
        "group": "l28-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "genervt",
        "group": "l28-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l28-g1",
        "icon": "1",
        "title": "Words 541-550",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l28-g2",
        "icon": "2",
        "title": "Words 551-560",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 29,
    "code": "Set 29",
    "title": "Wortschatz Set 29",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "finden-dass",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Der Mann findet, dass es einige Zeit braucht.",
            "en": "The man thinks that it takes some time."
          }
        ]
      },
      {
        "id": "gemeinsam",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemanden-einladen",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "nach-einer-loesung-suchen",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-nichtraucher-die-nichtraucherin",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "herausfinden",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "um-entschuldigung-bitten",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "kaum",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-anrufbeantworter",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "nach-etwas-stinken",
        "group": "l29-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "geburtstag-feiern",
        "group": "l29-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "in-ruhe",
        "group": "l29-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "bellen",
        "group": "l29-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemandem-einen-tipp-geben",
        "group": "l29-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
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
        "id": "jemanden-stoeren",
        "group": "l29-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "unangenehm-ungesund",
        "group": "l29-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "es-tut-mir-leid",
        "group": "l29-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-vorstellen",
        "group": "l29-g2",
        "term": "sich vorstellen",
        "fa": "to introduce oneself; to imagine something",
        "type": "verb",
        "form": "reflexive, separable verb: *stellt sich vor – stellte sich vor – hat sich vorgestellt*. In the meaning “imagine something,” use `sich` in the dative when another accusative object is present: `sich (Dat) etwas (Akk) vorstellen`.",
        "source": "Wortschatz.md",
        "example": "Neue Mieter sollten sich vorstellen.",
        "exampleFa": "New tenants should introduce themselves.",
        "cloze": "Neue Mieter sollten ____.",
        "clozeFa": "New tenants should introduce themselves.",
        "answer": "sich vorstellen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Ich kann nach Frankfurt kommen, um mich vorzustellen.",
            "en": "I can come to Frankfurt to introduce myself."
          },
          {
            "de": "Viele Lehrer haben sich ihren Beruf anders vorgestellt.",
            "en": "Many teachers had imagined their profession differently."
          }
        ]
      },
      {
        "id": "das-schild-das-verbotsschild",
        "group": "l29-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "beide",
        "group": "l29-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l29-g1",
        "icon": "1",
        "title": "Words 561-570",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l29-g2",
        "icon": "2",
        "title": "Words 571-580",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 30,
    "code": "Set 30",
    "title": "Wortschatz Set 30",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "jemanden-besser-kennenlernen",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "letzte-nacht",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "doch",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "nachmittags",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "zu-etwas-passen",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "einigermassen",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "bei-uns",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "etwas-gut-finden",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Die Frau findet es gut, dass es immer mehr Umweltkonzerte gibt.",
            "en": "The woman thinks it is good that there are more and more environmental concerts."
          }
        ]
      },
      {
        "id": "die-heizkosten",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "am-meisten",
        "group": "l30-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "unordentlich",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "putzen",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "obwohl",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-firma",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "In seiner Firma arbeiten vor allem Studenten.",
            "en": "His company mainly employs students."
          }
        ]
      },
      {
        "id": "die-balkontuer",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ganz-nett",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-geht-gar-nicht",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemanden-aergern",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "bei-jemandem-klingeln",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "gradangaben-muede",
        "group": "l30-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l30-g1",
        "icon": "1",
        "title": "Words 581-590",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l30-g2",
        "icon": "2",
        "title": "Words 591-600",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 31,
    "code": "Set 31",
    "title": "Wortschatz Set 31",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "eigentlich",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "hereinkommen",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemandem-wichtig-sein",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Für die Sprecherin ist Ordnung in ihrem Zimmer wichtig.",
            "en": "Keeping her room tidy is important to the speaker."
          }
        ]
      },
      {
        "id": "sauber-schmutzig",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-treppenhaus",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "staendig",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-wohnungsschluessel",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemanden-nerven",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-nachbar-die-nachbarin",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-bei-jemandem-beschweren",
        "group": "l31-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "streichen-malen",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemanden-erreichen",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "defekt",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-wand",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-aufgabe",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "In ihrem Beruf gibt es immer neue Aufgaben.",
            "en": "There are always new tasks in her profession."
          }
        ]
      },
      {
        "id": "das-badezimmer",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-mieter-die-mieterin",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "feucht",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "zu-wenig-zu-wenige",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Die Lehrer werden zu wenig auf die Probleme vorbereitet.",
            "en": "The teachers are not adequately prepared for the problems."
          }
        ]
      },
      {
        "id": "bei-mir",
        "group": "l31-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l31-g1",
        "icon": "1",
        "title": "Words 601-610",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l31-g2",
        "icon": "2",
        "title": "Words 611-620",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 32,
    "code": "Set 32",
    "title": "Wortschatz Set 32",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "das-festnetz",
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "vergessen",
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "so-schnell-wie-moeglich",
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-flur",
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "etwas-reparieren-lassen",
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "sich-etwas-ansehen",
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemandem-etwas-mitteilen",
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "reparieren",
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "nochmals",
        "group": "l32-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "selbst",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "telefonisch",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "etwas-durch-etwas-ersetzen",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-sachen",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Das Zimmer ist voll mit Sachen.",
            "en": "The room is full of things."
          }
        ]
      },
      {
        "id": "die-erkaeltung",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "keine-zeit-haben",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemandem-versprechen-etwas-zu-tun",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "laut-mietvertrag",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-gehweg",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "mehrmals",
        "group": "l32-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l32-g1",
        "icon": "1",
        "title": "Words 621-630",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l32-g2",
        "icon": "2",
        "title": "Words 631-640",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 33,
    "code": "Set 33",
    "title": "Wortschatz Set 33",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "sich-verletzen",
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "erneuern",
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "guck-mal",
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "mindestens",
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-handwerker-die-handwerkerin",
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "aufstehen",
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "fegen-streuen",
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemanden-bitten-etwas-zu-tun",
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "reichen",
        "group": "l33-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "anfangen-etwas-zu-tun",
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "daran-denken",
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-rueckseite",
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "der-schneefall",
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "schneien",
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Im Nordosten kann es am Wochenende schneien.",
            "en": "It may snow in the northeast at the weekend."
          }
        ]
      },
      {
        "id": "das-fenster",
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-besen-die-schneeschaufel",
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "zu-etwas-verpflichtet-sein",
        "group": "l33-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l33-g1",
        "icon": "1",
        "title": "Words 641-650",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l33-g2",
        "icon": "2",
        "title": "Words 651-660",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 34,
    "code": "Set 34",
    "title": "Wortschatz Set 34",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "begeistert",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "entdecken",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ueber-etwas-informieren",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "bewerten",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "keine-angst-haben",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ausrutschen",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Ich habe nicht aufgepasst und bin ausgerutscht.",
            "en": "I was not paying attention and slipped."
          }
        ]
      },
      {
        "id": "der-vermieter-die-vermieterin",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemandem-einen-brief-schreiben",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "gemuetlich",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-winterdienst",
        "group": "l34-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-tiefschnee",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "eine-menge",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "bescheid-sagen",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sowohl-als-auch",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-brief",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Ich habe dir in meinem letzten Brief geschrieben.",
            "en": "I wrote to you in my last letter."
          }
        ]
      },
      {
        "id": "der-schutzengel",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-bild",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Der Sprecher sammelt Bilder von einer Rockgruppe.",
            "en": "The speaker collects pictures of a rock band."
          }
        ]
      },
      {
        "id": "jemandem-aus-einem-brief-vorlesen",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "entweder-oder",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "lust-haben",
        "group": "l34-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Wenn du Lust hast, besuche mich doch mal.",
            "en": "If you feel like it, come and visit me sometime."
          }
        ]
      }
    ],
    "groups": [
      {
        "id": "l34-g1",
        "icon": "1",
        "title": "Words 661-670",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l34-g2",
        "icon": "2",
        "title": "Words 671-680",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 35,
    "code": "Set 35",
    "title": "Wortschatz Set 35",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "denn",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "steil-kurvig",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "sich-ueber-etwas-freuen",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "zwar-aber",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ausleihen",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "in-jedem-fall",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "weg-sein",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Als ich nach Hause kam, war mein Portemonnaie weg.",
            "en": "When I got home, my wallet was gone."
          }
        ]
      },
      {
        "id": "zusaetzlich",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "landen",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-winterausflug",
        "group": "l35-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-gate",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-schneehuette",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-pilot-die-pilotin",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "ploetzlich",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-rodelbahn",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-gepaeckausgabe",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-skiurlaub",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "rodeln-schlitten-fahren",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "viel-zu-2",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-handgepaeck",
        "group": "l35-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l35-g1",
        "icon": "1",
        "title": "Words 681-690",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l35-g2",
        "icon": "2",
        "title": "Words 691-700",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 36,
    "code": "Set 36",
    "title": "Wortschatz Set 36",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "egal",
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-passagier-die-passagierin",
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "hinauffahren-hinunterfahren",
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "beziehungsweise-bzw",
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-schlitten",
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-geschaeftstermin",
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "starten",
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-technische-problem",
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-lift",
        "group": "l36-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "folgen",
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "in-der-regel",
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "billig-billiger",
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Fahrradkuriere sind oft billiger als andere Kurierdienste.",
            "en": "Bicycle couriers are often cheaper than other courier services."
          }
        ]
      },
      {
        "id": "das-fluggastrecht",
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "anspruch-auf-etwas-haben",
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "gepaeck-aufgeben",
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-titel",
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "unabhaengig-von",
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-versorgungsleistung",
        "group": "l36-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l36-g1",
        "icon": "1",
        "title": "Words 701-710",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l36-g2",
        "icon": "2",
        "title": "Words 711-720",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 37,
    "code": "Set 37",
    "title": "Wortschatz Set 37",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "weiterreisen",
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "etwas-geltend-machen",
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-flugbuchung",
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-reisetasche",
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "die-durchsage",
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "zu-etwas-fuehren",
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-erstattung",
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-entschaedigung",
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ausfallen",
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l37-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-ersatzbefoerderung",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "fuer-etwas-bezahlen",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-flugausfall",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-roman",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "aussergewoehnliche-umstaende",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-unfall",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-streik",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-beruhigen",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-gewitter",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "aergerlich",
        "group": "l37-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l37-g1",
        "icon": "1",
        "title": "Words 721-730",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l37-g2",
        "icon": "2",
        "title": "Words 731-740",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 38,
    "code": "Set 38",
    "title": "Wortschatz Set 38",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "der-stau",
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-bereitmachen",
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "damit",
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Ich schicke Ihnen ein Foto, damit Sie wissen, wie ich aussehe.",
            "en": "I am sending you a photo so that you know what I look like."
          }
        ]
      },
      {
        "id": "wer-der",
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "unregelmaessig",
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "reisen",
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-hinflug",
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "was-passiert-mit",
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "verspaetet",
        "group": "l38-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "einchecken",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "sich-aergern",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "genau-schauen",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "verteilen",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-koffer",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "dabei-sein",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-maschinenraum",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-gutschein",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "einsteigen",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-technische-kontrolle",
        "group": "l38-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l38-g1",
        "icon": "1",
        "title": "Words 741-750",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l38-g2",
        "icon": "2",
        "title": "Words 751-760",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 39,
    "code": "Set 39",
    "title": "Wortschatz Set 39",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-3-strengths.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "streng",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-vorspeise",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-abflugzeit",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-check-in-schalter",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-trennung",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "voellig",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "aus-etwas-bestehen",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-flug",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-gang",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-nebel",
        "group": "l39-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-nachtisch",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-verschiebung",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "etwas-falsch-machen",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-verschieben",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "wegen",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "waehrend",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Während der Zeit in Frankfurt würde ich gern mein Englisch verbessern.",
            "en": "During my time in Frankfurt, I would like to improve my English."
          },
          {
            "de": "Während ihrer Arbeit auf der Wetterstation machte sie viele Ausflüge.",
            "en": "During her work at the weather station, she went on many excursions."
          }
        ]
      },
      {
        "id": "das-pauschalangebot",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-regel",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "beruflich",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "moeglich",
        "group": "l39-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l39-g1",
        "icon": "1",
        "title": "Words 761-770",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l39-g2",
        "icon": "2",
        "title": "Words 771-780",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 40,
    "code": "Set 40",
    "title": "Wortschatz Set 40",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-4-habits.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "die-wartezeit",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-abendessen",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "verreisen",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "beachten",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "zunaechst",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "zu-besuch-sein",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "genehmigen",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "abgeben",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Vielleicht hat jemand das Portemonnaie im Fundbüro abgegeben.",
            "en": "Perhaps someone handed the wallet in at the lost-and-found office."
          }
        ]
      },
      {
        "id": "die-miete",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "abziehen",
        "group": "l40-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "raeumen",
        "group": "l40-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "dazugehoeren",
        "group": "l40-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "mit-jemandem-ueber-etwas-sprechen",
        "group": "l40-g2",
        "term": "mit jemandem über etwas sprechen",
        "fa": "to talk with someone about something",
        "type": "phrase",
        "form": "`mit + Dativ` names the conversation partner; `über + Akkusativ` names the topic; `spricht – sprach – hat gesprochen`.",
        "source": "Wortschatz.md",
        "example": "Wir sprechen über Geld.",
        "exampleFa": "We are talking about money.",
        "cloze": "Wir ____ über Geld.",
        "clozeFa": "We are talking about money.",
        "answer": "sprechen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
        ],
        "typeAnswers": [
          "mit jemandem über etwas sprechen",
          "mit jemandem über etwas sprechen",
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
          },
          {
            "de": "Oliver hat mit seinen Eltern über die Einladung gesprochen.",
            "en": "Oliver talked with his parents about the invitation."
          }
        ]
      },
      {
        "id": "gestatten",
        "group": "l40-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "muell-trennen",
        "group": "l40-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "etwas-in-ordnung-halten",
        "group": "l40-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-aufenthalt",
        "group": "l40-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "mit-etwas-sparsam-umgehen",
        "group": "l40-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-abreise",
        "group": "l40-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ruecksicht-auf-jemanden-nehmen",
        "group": "l40-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "l40-g1",
        "icon": "1",
        "title": "Words 781-790",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l40-g2",
        "icon": "2",
        "title": "Words 791-800",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 41,
    "code": "Set 41",
    "title": "Wortschatz Set 41",
    "subtitle": "20 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-1-memories.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "das-gehalt",
        "group": "l41-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-gespraechspartner-die-gespraechspartnerin",
        "group": "l41-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "irgendwo",
        "group": "l41-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ablegen",
        "group": "l41-g1",
        "term": "ablegen",
        "fa": "to put down; to leave in a specified place; to take/sit an examination",
        "type": "verb",
        "form": "separable verb: *legt ab – legte ab – hat abgelegt*",
        "source": "Wortschatz.md",
        "example": "Legen Sie die Bettwäsche im Foyer ab.",
        "exampleFa": "Leave the bed linen in the foyer.",
        "cloze": "Legen Sie die Bettwäsche im Foyer ab. ____",
        "clozeFa": "Leave the bed linen in the foyer.",
        "answer": "ablegen",
        "distractors": [
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
          },
          {
            "de": "Ich werde die Zertifikatsprüfung Deutsch ablegen.",
            "en": "I will take the German certificate examination."
          }
        ]
      },
      {
        "id": "die-ausnahme",
        "group": "l41-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "um-mithilfe-bitten",
        "group": "l41-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemanden-nach-etwas-fragen",
        "group": "l41-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "grundsaetzlich",
        "group": "l41-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-einer-sache-verpflichten",
        "group": "l41-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-schuhe-ausziehen",
        "group": "l41-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "mitbringen",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "fuer-etwas-vorgesehen-sein",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "benutzen",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "zubereiten",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "erlaubt-sein",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-befinden",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "jemanden-des-hauses-verweisen",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-bettwaesche",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-raucherplatz",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      },
      {
        "id": "alkoholisiert",
        "group": "l41-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l41-g1",
        "icon": "1",
        "title": "Words 801-810",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l41-g2",
        "icon": "2",
        "title": "Words 811-820",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  },
  {
    "id": 42,
    "code": "Set 42",
    "title": "Wortschatz Set 42",
    "subtitle": "19 entries from Wortschatz.md",
    "pathTitle": "Learn, review, listen, and type the words from your glossary.",
    "image": "assets/lektion-2-friendship.png",
    "imageAlt": "Abstract learning illustration",
    "criteriaNote": "Vocabulary comes from Wortschatz.md. Grammar follows the curated B1 syllabus.",
    "vocab": [
      {
        "id": "weder-noch",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "untersagen",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-ankunftszeit",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-aussengelaende",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "grillen",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-gelaende",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-schlafraum",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "aus-gruenden",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-schluessel",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-speise",
        "group": "l42-g1",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "das-lagerfeuer",
        "group": "l42-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-leiter-die-leiterin",
        "group": "l42-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "der-konsum",
        "group": "l42-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "die-jugendherberge-jh",
        "group": "l42-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "schliessen",
        "group": "l42-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "vereinbaren",
        "group": "l42-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "ausgeben",
        "group": "l42-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "eintreffen",
        "group": "l42-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
        "id": "sich-anmelden",
        "group": "l42-g2",
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
          "ehemalig",
          "nächstes Wochenende",
          "Geburtstag haben"
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
      }
    ],
    "groups": [
      {
        "id": "l42-g1",
        "icon": "1",
        "title": "Words 821-830",
        "fa": "10 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      },
      {
        "id": "l42-g2",
        "icon": "2",
        "title": "Words 831-839",
        "fa": "9 words",
        "subtitle": "Practice German vocabulary from your daily glossary."
      }
    ],
    "workbook": [],
    "grammar": null
  }
];

  window.WORTSCHATZ_DATA = { lessons };
})();
