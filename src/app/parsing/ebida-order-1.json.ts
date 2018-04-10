
// for testing only !

export const data = `{
  "Questionnaire": {
    "_attributes": {
      "xmlns": "http://hl7.org/fhir"
    },
    "id": {
      "_attributes": {
        "value": "ebida-order-1"
      }
    },
    "text": {
      "status": {
        "_attributes": {
          "value": "generated"
        }
      },
      "div": {
        "_attributes": {
          "xmlns": "http://www.w3.org/1999/xhtml"
        },
        "pre": {
          "_text": "todo, see screenshot provided by juerg"
        }
      }
    },
    "url": {
      "_attributes": {
        "value": "http://ahdis.ch/fhir/Questionnaire/ebida-order-1"
      }
    },
    "title": {
      "_attributes": {
        "value": "Ebida Order Example"
      }
    },
    "status": {
      "_attributes": {
        "value": "draft"
      }
    },
    "experimental": {
      "_attributes": {
        "value": "true"
      }
    },
    "date": {
      "_attributes": {
        "value": "2018-03-31"
      }
    },
    "publisher": {
      "_attributes": {
        "value": "ahdis"
      }
    },
    "subjectType": {
      "_attributes": {
        "value": "Patient"
      }
    },
    "item": [
      {
        "linkId": {
          "_attributes": {
            "value": "order"
          }
        },
        "text": {
          "_attributes": {
            "value": "Auftrag"
          }
        },
        "type": {
          "_attributes": {
            "value": "group"
          }
        },
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
                "value": "order.state"
              }
            },
            "text": {
              "_attributes": {
                "value": "Auftrags-Status"
              }
            },
            "type": {
              "_attributes": {
                "value": "string"
              }
            }
          }
        ]
      },
      {
        "linkId": {
          "_attributes": {
            "value": "orderer"
          }
        },
        "text": {
          "_attributes": {
            "value": "Auftraggeber"
          }
        },
        "type": {
          "_attributes": {
            "value": "group"
          }
        },
        "item": [
          {
            "linkId": {
              "_attributes": {
                "value": "orderer.dataenterer"
              }
            },
            "text": {
              "_attributes": {
                "value": "Erfasser"
              }
            },
            "type": {
              "_attributes": {
                "value": "group"
              }
            },
            "item": [
              {
                "linkId": {
                  "_attributes": {
                    "value": "orderer.dataenterer.visum"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Visum"
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
                    "value": "orderer.dataenterer.bereich"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Bereich"
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
                    "value": "orderer.dataenterer.abt"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Bereich"
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
                    "value": "orderer.dataenterer.lastname"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Name"
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
                    "value": "orderer.dataenterer.firstname"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Vorname"
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
                    "value": "orderer.dataenterer.tel"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Telefon"
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
                    "value": "orderer.dataenterer.e-mail"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "E-Mail"
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
                    "value": "orderer.dataenterer.street"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Strasse"
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
                    "value": "orderer.dataenterer.postfach"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Postfach"
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
                    "value": "orderer.dataenterer.zip"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "PLZ"
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
                    "value": "orderer.dataenterer.city"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "city"
                  }
                },
                "type": {
                  "_attributes": {
                    "value": "string"
                  }
                }
              }
            ]
          },
          {
            "linkId": {
              "_attributes": {
                "value": "orderer.responsible"
              }
            },
            "text": {
              "_attributes": {
                "value": "Verantwortlicher"
              }
            },
            "type": {
              "_attributes": {
                "value": "group"
              }
            },
            "item": [
              {
                "linkId": {
                  "_attributes": {
                    "value": "orderer.resp.visum"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Visum"
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
                    "value": "orderer.resp.bereich"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Bereich"
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
                    "value": "orderer.resp.abt"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Bereich"
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
                    "value": "orderer.resp.lastname"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Name"
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
                    "value": "orderer.resp.firstname"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Vorname"
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
                    "value": "orderer.resp.tel"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Telefon"
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
                    "value": "orderer.resp.e-mail"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "E-Mail"
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
                    "value": "orderer.resp.street"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Strasse"
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
                    "value": "orderer.resp.postfach"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Postfach"
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
                    "value": "orderer.resp.zip"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "PLZ"
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
                    "value": "orderer.resp.city"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "city"
                  }
                },
                "type": {
                  "_attributes": {
                    "value": "string"
                  }
                }
              }
            ]
          }
        ]
      },
      {
        "linkId": {
          "_attributes": {
            "value": "informationrecipient"
          }
        },
        "text": {
          "_attributes": {
            "value": "Zu informieren"
          }
        },
        "type": {
          "_attributes": {
            "value": "group"
          }
        },
        "item": [
          {
            "linkId": {
              "_attributes": {
                "value": "informationrecipient.visum"
              }
            },
            "text": {
              "_attributes": {
                "value": "Visum"
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
                "value": "informationrecipient.bereich"
              }
            },
            "text": {
              "_attributes": {
                "value": "Bereich"
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
                "value": "informationrecipient.abt"
              }
            },
            "text": {
              "_attributes": {
                "value": "Bereich"
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
                "value": "informationrecipient.lastname"
              }
            },
            "text": {
              "_attributes": {
                "value": "Name"
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
                "value": "informationrecipient.firstname"
              }
            },
            "text": {
              "_attributes": {
                "value": "Vorname"
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
                "value": "informationrecipient.tel"
              }
            },
            "text": {
              "_attributes": {
                "value": "Telefon"
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
                "value": "informationrecipient.e-mail"
              }
            },
            "text": {
              "_attributes": {
                "value": "E-Mail"
              }
            },
            "type": {
              "_attributes": {
                "value": "string"
              }
            }
          }
        ]
      },
      {
        "linkId": {
          "_attributes": {
            "value": "patient"
          }
        },
        "text": {
          "_attributes": {
            "value": "Patient"
          }
        },
        "type": {
          "_attributes": {
            "value": "group"
          }
        },
        "item": [
          {
            "linkId": {
              "_attributes": {
                "value": "patient.lastname"
              }
            },
            "text": {
              "_attributes": {
                "value": "Name"
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
                "value": "patient.firstname"
              }
            },
            "text": {
              "_attributes": {
                "value": "Vorname"
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
                "value": "patient.pid"
              }
            },
            "text": {
              "_attributes": {
                "value": "Personen ID (CRM-PID)"
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
                "value": "patient.casenumber"
              }
            },
            "text": {
              "_attributes": {
                "value": "Schadennummer"
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
                "value": "patient.amborstat"
              }
            },
            "text": {
              "_attributes": {
                "value": "Amb/Stat"
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
                    "value": "Amb"
                  }
                }
              },
              {
                "valueString": {
                  "_attributes": {
                    "value": "Stat"
                  }
                }
              }
            ]
          }
        ]
      },
      {
        "linkId": {
          "_attributes": {
            "value": "command"
          }
        },
        "text": {
          "_attributes": {
            "value": "EBIDA-Bestellung"
          }
        },
        "type": {
          "_attributes": {
            "value": "group"
          }
        },
        "item": [
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
                "value": "command.examiniation"
              }
            },
            "text": {
              "_attributes": {
                "value": "Gewünschte Untersuchung/Befund/Mitteilung"
              }
            },
            "type": {
              "_attributes": {
                "value": "group"
              }
            },
            "item": [
              {
                "linkId": {
                  "_attributes": {
                    "value": "command.examiniation.images"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Bilder"
                  }
                },
                "type": {
                  "_attributes": {
                    "value": "boolean"
                  }
                }
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
              },
              {
                "linkId": {
                  "_attributes": {
                    "value": "command.examiniation.duedate"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Frist zur Erledigung"
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
                    "value": "command.examiniation.text"
                  }
                },
                "text": {
                  "_attributes": {
                    "value": "Text"
                  }
                },
                "type": {
                  "_attributes": {
                    "value": "text"
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
}`;
