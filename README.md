# Caro's Nails and Beauty Website

Een moderne en responsieve website voor een nagel- en schoonheidssalon in Brasschaat, België.

## Overzicht

Deze website is gemaakt voor Caro's Nails and Beauty om haar diensten online te presenteren en klanten de mogelijkheid te geven om online te boeken. De site is volledig responsive en gebouwd met HTML5, CSS3 en vanilla JavaScript.

## Kenmerken

- Responsief ontwerp voor mobiel en desktop
- Interactief navigatiemenu met dropdown submenu's
- Contact formulier
- Google Maps integratie
- Online boekingssysteem-link
- Testimonial slider
- Mobiel-vriendelijke navigatie

## Structuur

- `index.html` - Homepage
- `pages/` - Bevat alle subpagina's
  - `over-caro.html` - Over Caro pagina
  - `contact.html` - Contact pagina
  - Overige pagina's voor behandelingen en diensten
- `css/styles.css` - Stylesheet
- `js/scripts.js` - JavaScript functionaliteiten
- `images/` - Map voor afbeeldingen

## Installatie en gebruik

1. Clone of download deze repository
2. Plaats de afbeeldingen in de `images/` map (zorg ervoor dat er een afbeelding van Caro is genaamd `caro.jpg`)
3. Voor de Google Maps functionaliteit, vervang `YOUR_API_KEY` in `pages/contact.html` door een geldige Google Maps API-sleutel
4. Open `index.html` in een browser of upload alle bestanden naar een webserver

## Lokale ontwikkeling

Om de website lokaal te starten:

```bash
# Installeer een eenvoudige HTTP-server als je die nog niet hebt
npm install -g http-server

# Start de server in de hoofdmap van het project
http-server -p 3000
```

Ga vervolgens naar `http://localhost:3000` in je browser.

## Vereisten voor productie

- Vervang de placeholders en dummy content door echte content
- Voeg echte afbeeldingen toe in de `images/` map
- Vervang de sociale media links in de footer door echte links
- Voeg een geldig Google Maps API-sleutel toe

## Technologieën

- HTML5 voor structuur
- CSS3 voor styling (met CSS variables en flexbox/grid)
- Vanilla JavaScript voor interactiviteit
- Google Fonts (Open Sans en Montserrat)
- Font Awesome voor iconen

## Licentie

Dit project is eigendom van Caro's Nails and Beauty.

## Contact

Voor vragen over deze website, neem contact op met de webontwikkelaar of direct met Caro via info@carosbeauty.be. 