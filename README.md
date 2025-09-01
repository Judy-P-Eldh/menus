# Menus - ett sätt att skapa menystruktur

Detta projekt är en enkel Next.js-app där du kan skapa hierarkiska menyer. Jag har valt att använda Next.js med app-router och Tailwind.
## Funktioner

   - Visa hierarkisk meny där underpunkter listas under sina föräldrar

   - Lägg till nya menyobjekt dynamiskt via formulär

  -  Data sparas i JSON-fil på servern

  -  Uppdaterad meny visas automatiskt efter tillägg


## Kom igång
### Klona projoektet
git clone [repo](https://github.com/Judy-P-Eldh/menus.git)

### Installera beroenden
npm install
eller
yarn install

### Starta utvecklingsservern
npm run dev
eller
yarn dev

### Öppna i webbläsaren

Navigera till [http://localhost:3000](http://localhost:3000) för att se appen.


## Viktiga delar av projektstrukturen

   -  app/page.tsx — serverkomponent som hämtar och skickar menydatan samt agerar ui med hjälp av komponenter

   -  components/AddForm.tsx — klientkomponent för formuläret där man skapar sin menystruktur

   -  components/ShowMenu.tsx — serverkomponent som renderar den hierarkiska menystrukturen

   -  lib/formaction.ts — serveractions för läs och skriv till JSON-fil (för närvarande finns ingen CRUD-funktionalitet)



