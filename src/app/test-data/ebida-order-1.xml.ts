
// for testing only !

export const data1 = `<Questionnaire 
    xmlns="http://hl7.org/fhir">
    <id value="ebida-order-1"/>
    <text>
        <status value="generated"/>
        <div 
            xmlns="http://www.w3.org/1999/xhtml">
            <pre>todo, see screenshot provided by juerg</pre>
        </div>
    </text>
    <url value="http://ahdis.ch/fhir/Questionnaire/ebida-order-1" />
    <title value="Ebida Order Example"/>
    <status value="draft"/>
    <experimental value="true" />
    <date value="2018-03-31"/>
    <publisher value="ahdis" />
    <subjectType value="Patient"/>
    <item>
        <linkId value="order"/>
        <text value="Auftrag"/>
        <type value="group"/>
        <item>
            <linkId value="order.number"/>
            <text value="Auftrags-Nummer"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="order.date"/>
            <text value="Auftrags-Datum" />
            <type value="date"/>
        </item>
        <item>
            <linkId value="order.state"/>
            <text value="Auftrags-Status"/>
            <type value="string"/>
        </item>
    </item>
    <item>
        <linkId value="orderer"/>
        <text value="Auftraggeber"/>
        <type value="group"/>
        <item>
            <linkId value="orderer.dataenterer"/>
            <text value="Erfasser"/>
            <type value="group"/>
            <item>
                <linkId value="orderer.dataenterer.visum"/>
                <text value="Visum"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.bereich"/>
                <text value="Bereich"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.abt"/>
                <text value="Bereich"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.lastname"/>
                <text value="Name"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.firstname"/>
                <text value="Vorname"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.tel"/>
                <text value="Telefon"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.e-mail"/>
                <text value="E-Mail"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.street"/>
                <text value="Strasse"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.postfach"/>
                <text value="Postfach"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.zip"/>
                <text value="PLZ"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.dataenterer.city"/>
                <text value="city"/>
                <type value="string"/>
            </item>
        </item>
        <item>
            <linkId value="orderer.responsible"/>
            <text value="Verantwortlicher"/>
            <type value="group"/>
            <item>
                <linkId value="orderer.resp.visum"/>
                <text value="Visum"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.bereich"/>
                <text value="Bereich"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.abt"/>
                <text value="Bereich"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.lastname"/>
                <text value="Name"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.firstname"/>
                <text value="Vorname"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.tel"/>
                <text value="Telefon"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.e-mail"/>
                <text value="E-Mail"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.street"/>
                <text value="Strasse"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.postfach"/>
                <text value="Postfach"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.zip"/>
                <text value="PLZ"/>
                <type value="string"/>
            </item>
            <item>
                <linkId value="orderer.resp.city"/>
                <text value="city"/>
                <type value="string"/>
            </item>
        </item>
    </item>
    <item>
        <linkId value="informationrecipient"/>
        <text value="Zu informieren"/>
        <type value="group"/>
        <item>
            <linkId value="informationrecipient.visum"/>
            <text value="Visum"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="informationrecipient.bereich"/>
            <text value="Bereich"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="informationrecipient.abt"/>
            <text value="Bereich"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="informationrecipient.lastname"/>
            <text value="Name"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="informationrecipient.firstname"/>
            <text value="Vorname"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="informationrecipient.tel"/>
            <text value="Telefon"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="informationrecipient.e-mail"/>
            <text value="E-Mail"/>
            <type value="string"/>
        </item>
    </item>
    <item>
        <linkId value="patient"/>
        <text value="Patient"/>
        <type value="group"/>
        <item>
            <linkId value="patient.lastname"/>
            <text value="Name"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="patient.firstname"/>
            <text value="Vorname"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="patient.pid"/>
            <text value="Personen ID (CRM-PID)"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="patient.birthdate"/>
            <text value="Geburtsdatum"/>
            <type value="date"/>
        </item>
        <item>
            <linkId value="patient.sex"/>
            <text value="Geschlecht"/>
            <type value="choice"/>
            <option>
                <valueString value="M" />
            </option>
            <option>
                <valueString value="F" />
            </option>
        </item>
        <item>
            <linkId value="patient.casenumber"/>
            <text value="Schadennummer"/>
            <type value="string"/>
        </item>
        <item>
            <linkId value="patient.amborstat"/>
            <text value="Amb/Stat"/>
            <type value="choice"/>
            <option>
                <valueString value="Amb" />
            </option>
            <option>
                <valueString value="Stat" />
            </option>
        </item>
    </item>
    <item>
        <linkId value="command"/>
        <text value="EBIDA-Bestellung"/>
        <type value="group"/>
        <item>
            <linkId value="command.partner"/>
            <text value="EBIDA-Partner"/>
            <type value="choice"/>
            <option>
                <valueString value="Inselspital Bern" />
            </option>
            <option>
                <valueString value="Spital Limmatplatz" />
            </option>
        </item>
        <item>
            <linkId value="command.partner.info"/>
            <text value="Angaben zum Partner" />
            <type value="text"/>
            <initialString value="Bilder und Befunde können per Ebida bestellt werden ..." />
        </item>
        <item>
            <linkId value="command.examiniation"/>
            <text value="Gewünschte Untersuchung/Befund/Mitteilung"/>
            <type value="group"/>
            <item>
                <linkId value="command.examiniation.images"/>
                <text value="Bilder"/>
                <type value="boolean"/>
            </item>
            <item>
                <linkId value="command.examiniation.reports"/>
                <text value="Befundberichte"/>
                <type value="boolean"/>
            </item>
            <item>
                <linkId value="command.examiniation.duedate"/>
                <text value="Frist zur Erledigung"/>
                <type value="date"/>
            </item>
            <item>
                <linkId value="command.examiniation.text"/>
                <text value="Text"/>
                <type value="text"/>
            </item>
        </item>
    </item>
</Questionnaire>`;