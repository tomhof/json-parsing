
// for testing only !

export const data3 = `{
  "item": [
    {
      "linkId": {
        "_attributes": {
          "value": "order.number"
        }
      },
      "text": {
        "_attributes": {
          "value": "Auftrags-Nummer"
        }
      },
      "type": {
        "_attributes": {
          "value": "string"
        }
      }
    },
    {
      "linkId": {
        "_attributes": {
          "value": "order.date"
        }
      },
      "text": {
        "_attributes": {
          "value": "Auftrags-Datum"
        }
      },
      "type": {
        "_attributes": {
          "value": "date"
        }
      }
    },
    {
      "linkId": {
        "_attributes": {
          "value": "patient.birthdate"
        }
      },
      "text": {
        "_attributes": {
          "value": "Geburtsdatum"
        }
      },
      "type": {
        "_attributes": {
          "value": "date"
        }
      }
    },
    {
      "linkId": {
        "_attributes": {
          "value": "patient.sex"
        }
      },
      "text": {
        "_attributes": {
          "value": "Geschlecht"
        }
      },
      "type": {
        "_attributes": {
          "value": "choice"
        }
      },
      "option": [
        {
          "valueString": {
            "_attributes": {
              "value": "M"
            }
          }
        },
        {
          "valueString": {
            "_attributes": {
              "value": "F"
            }
          }
        }
      ]
    },
    {
      "linkId": {
        "_attributes": {
          "value": "command.partner.info"
        }
      },
      "text": {
        "_attributes": {
          "value": "Angaben zum Partner"
        }
      },
      "type": {
        "_attributes": {
          "value": "text"
        }
      },
      "initialString": {
        "_attributes": {
          "value": "Bilder und Befunde können per Ebida bestellt werden ..."
        }
      }
    },
    {
      "linkId": {
        "_attributes": {
          "value": "command.partner"
        }
      },
      "text": {
        "_attributes": {
          "value": "EBIDA-Partner"
        }
      },
      "type": {
        "_attributes": {
          "value": "choice"
        }
      },
      "option": [
        {
          "valueString": {
            "_attributes": {
              "value": "Inselspital Bern"
            }
          }
        },
        {
          "valueString": {
            "_attributes": {
              "value": "Spital Limmatplatz"
            }
          }
        }
      ]
    },
    {
      "linkId": {
        "_attributes": {
          "value": "command.examiniation.reports"
        }
      },
      "text": {
        "_attributes": {
          "value": "Befundberichte"
        }
      },
      "type": {
        "_attributes": {
          "value": "boolean"
        }
      }
    }
  ]
}`;