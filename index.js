function formatTitle(title) {
    if (!title || !title.textContent) return null

    return title.textContent.replace("\n", "").split(" ").filter(e => e != "").join(" ")
}

function formatCompetences(element) {
    if (!element || !element.textContent) return null
    return element.textContent.split(" ").filter(e => e != "").join(" ").replace("Competências:\n ", "").replace("Competências: ", "").trim()
}

const CERTIFICATIONS_UL = "ul.pvs-list"
const CERTIFICATIONS_CARD = "li div>div:first-of-type>div+div"
const TITLE = "div > span.visually-hidden"
const LINK = "a.optional-action-target-wrapper"
const COMPETENCE = "li.pvs-list__item--with-top-padding>div>div>div>span"

let unordenedList = document.querySelector(CERTIFICATIONS_UL)
let certificationsList = unordenedList.querySelectorAll(CERTIFICATIONS_CARD)

let jsonList = []

for (let i = 0; i < certificationsList.length; i++) {
    let textElement = certificationsList[i].querySelector(TITLE)
    let competencesElement = certificationsList[i].querySelector(COMPETENCE)

    let text = formatTitle(textElement)
    let link = certificationsList[i].querySelector(LINK)
    let competences = formatCompetences(competencesElement)

    jsonList.push({
        text,
        link: link.href,
        competences
    })
}

let fileContent = JSON.stringify(jsonList)
var blob = new Blob([fileContent], { type: 'application/json' });

var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'meuArquivo.json';

document.body.appendChild(link);
link.click();

document.body.removeChild(link);
