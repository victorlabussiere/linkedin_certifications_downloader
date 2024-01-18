# Linkedin Certifications Downloader Bot
Paste this javascript into console at your linkedin certifications page after scroll all your certifications to download a Json file with informations about all your certifications.

## What inside the json file?
- Objects with text, certification link and competences list.
  - text: Certification name
  - link: Certification url
  - competence: All competences listed into certification card.

## How it works?
The code will read the html page and find UL HTML Element that include all your certifications
Then it will generate a json file and start a download process into your browser