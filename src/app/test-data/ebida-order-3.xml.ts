
// for testing only !

export const data3 = `<item>
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
    <linkId value="command.partner.info"/>
    <text value="Angaben zum Partner" />
    <type value="text"/>
    <initialString value="Bilder und Befunde können per Ebida bestellt werden ..." />
</item>
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
    <linkId value="command.examiniation.reports"/>
    <text value="Befundberichte"/>
    <type value="boolean"/>
</item>
`;