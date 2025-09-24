### **Kontaktformulär med Validering**

- **Beskrivning**: Skapa ett kontaktformulär med olika fält som valideras i realtid när användaren skriver. Visa felmeddelanden och förhindra skickande om valideringen misslyckas.
- **Steg-för-steg guide**:
    1. **HTML-struktur**:
        - Formulär med fält för namn, e-post, telefon, meddelande
        - Div-element för att visa felmeddelanden
        - Submit-knapp och reset-knapp
    2. **CSS-styling**:
        - Styla formulärfält med fokus-states
        - Olika färger för giltiga/ogiltiga fält (grön/röd border)
        - Styla felmeddelanden (röd text, liten font)
        - Responsiv layout för mobil
    3. **JavaScript-logik**:
        - Event listeners för `input` och `blur` på alla fält
        - Valideringsfunktioner för varje fälttyp
        - Visa/dölj felmeddelanden dynamiskt
        - Förhindra form-submit om validering misslyckas
        - Reset-funktionalitet
    4. **Valideringsregler**:
        - Namn: minst 2 tecken, bara bokstäver
        - E-post: giltigt e-postformat (regex)
        - Telefon: svenskt telefonnummer-format
        - Meddelande: minst 10 tecken