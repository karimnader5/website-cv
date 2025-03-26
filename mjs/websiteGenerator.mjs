import cvData from './cvData.mjs';

document.getElementById('publications').innerHTML = `

    <h2>Selected Publications <p>(Click to see the abstract.)</p></h2> 
    <ol>
    ${cvData.publications
        .filter((item) => item.type == 'philosophy' || item.type == 'empirical')
        .sort((a, b) => b.date - a.date)
        .map(function (publication) {
            let link = `
                    <a id="publication-link" href=${publication.link} target="_blank">&#128279</a>`;
            let regex = /(Nader, K.)/g;
            let authors = publication.authors
                ? `
                    <span class="publication--authors">Authors: ${publication.authors.replace(
                        regex,
                        '<u>$1</u>'
                    )}</span>`
                : '';
            return `<li>
        <details class="collapsible-head">
        <summary class="collapsible">
            <div class="summary--info">
                <div class="summary--title"><span>${publication.title}</span>
                ${publication.link ? link : ''}</div>
                ${publication.authors ? authors : ''}
                <span class="info"><em>${
                    publication.info
                }</em>, ${publication.date}</span>
            </div>
        </summary>
        <div class="content">
        <p>${publication.abstract}</p>        
        </div></details>
        </li>`;
        })
        .join('')}</ol>`;

document.getElementById('talks').innerHTML = `

    <h2>Selected Presentations</h2>
    <h6>* Peer Reviewed <br> † Invited</h6>    
    <dl>
    ${cvData.presentations
        .map(function (talk) {
            return `
        <dt>${
            talk.peerReviewed ? '*' : ''
        } ${talk.invited ? '†' : ''} ${talk.title}  </dt>
        <dd>
        <span class="talk-info">${talk.info}</span>
        <span class="talk-timeplace">${talk.date}; ${talk.location}</span>
        </dd>    
        `;
        })
        .join('')}
    </dl> `;
