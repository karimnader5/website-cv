import cvData from "./cvData.mjs"

document.getElementById("publications").innerHTML = `

    <h2>Publications <p>(Click to see the abstract.)</p></h2> 
    <h3>Philosophical Publications</h3>

    ${cvData.publications.filter(item => item.type == "philosophy").map(function(publication) {
        return `
        <details class="collapsible-head">
        <summary class="collapsible">
            <div class="summary--info">
                ${publication.title}
                <span class="info"><em>${publication.info}</em>, ${publication.date}</span>
            </div>
            <div class="icon">
                <a href=${publication.link} target="_blank">
                <img class="external-link-icon" src="pictures/link2.png" alt="external-link"></a>
            </div>
        </summary>
        <div class="content">
        <p>${publication.abstract}</p>        
        </div></details> `
    }).join("")}

    <h3>Empirical Work</h3>

    ${cvData.publications.filter(item => item.type == "empirical").map(function(publication) {
        let regex=/(Nader, K.)/g
        return `
        <details class="collapsible-head">
        <summary class="collapsible">
            <div class="summary--info">
                ${publication.title}
                <span class="info">${publication.conference ? publication.info : publication.info.italics()}, ${publication.date}</span>
                <span class="publication-authors">Authors:  ${publication.authors.replace(regex, "<u>$1</u>")}</span>
            </div>
            <div class="icon">
                <a href=${publication.link} target="_blank">
                <img class="external-link-icon" src="pictures/link2.png" alt="external-link"></a>
            </div>
        </summary>
        <div class="content">
        <p class="publication-abstract">${publication.abstract}</p>
        </div></details> `
    }).join("")}

`

document.getElementById("research-funding").innerHTML = `

    <details><summary class="subsubtitle button">Research Funding</summary>

    <dl>
    ${cvData.awards.map(function(award) {
        return `<dt>${award.title}</dt>
        <dd><span class="time">${award.date}</span><span class="amount"> ${award.amount}</span></dd>
        `
    }).join("")}
    </dl>
    </details>

`

document.getElementById("talks").innerHTML = `

    <h2>Selected Presentations</h2>

    <dl>
    ${cvData.presentations.map(function(talk) {
        return `
        <dt>${talk.title}  ${talk.peerReviewed ? "<small>* Peer Reviewed</small>" : ""}</dt>
        <dd>
        <span class="talk-info">${talk.info}</span>
        <span class="talk-timeplace">${talk.date}; ${talk.location}</span>
        </dd>    
        `
    }).join("")}
    </dl> `


