import cvData from './cvData.mjs';

document.getElementById('header').innerHTML = `

    <section class="print row justify-content-center">
    <a
    type="button"
    class="print btn btn-primary"
    href="javascript:window.print()">
    Save a PDF of my CV</a>
    </section>

    <section class="header row">
    <h1 class="header--name col">Karim Nader</h1>
    <span class="header--email col text-right">
    <a href = "mailto: knader@mit.edu">
        knader@mit.edu
    </a>
    <br />
    <a href = "https://karimnaderphilosophy.com">
        karimnaderphilosophy.com
    </a>
    </span>
    </section>

`;

document.getElementById('areas').innerHTML = `

    <h3 class="title row">Areas of Interest</h3>
    <span>
        <strong>Specialization:</strong> ${cvData.areas.aos}
    </span> <br />
    <span>
        <strong>Competence:</strong> ${cvData.areas.aoc}
    </span>

`;

document.getElementById('employment').innerHTML = `

    <h3 class="title row">Employment</h3>
    ${cvData.employment
        .map(function (employment) {
            return `
        <div class="eduation row">
        <h6 class="education--institution col-12"><strong>${
            employment.institution
        }</strong></h6>
        <span class="education--info col-7">${employment.info}</span>
        <span class="education--date col-5">${employment.date}</span>
        <span class="education--info col-12">${employment.info2}</span>
        ${
            education.details
                ? `<span class="education--details col-12">${education.details}</span>`
                : ''
        }
        </div>`;
        })
        .join('')}

`;

document.getElementById('education').innerHTML = `

    <h3 class="title row">Education</h3>
    ${cvData.education
        .map(function (education) {
            return `
        <div class="eduation row">
        <h6 class="education--institution col-12"><strong>${
            education.institution
        }</strong></h6>
        <span class="education--info col-7">${education.info}</span>
        <span class="education--date col-5">${education.date}</span>
        ${
            education.details
                ? `<span class="education--details col-12">${education.details}</span>`
                : ''
        }
        </div>`;
        })
        .join('')}

`;

document.getElementById('publications').innerHTML = `

    <h3 class="title row">Selected Publications</h3>
    <ol>
        ${cvData.publications
            .filter(
                (item) => item.type == 'philosophy' || item.type == 'empirical'
            )
            .sort((a, b) => b.date - a.date)
            .map(function (publication) {
                let regex = /(Nader, K.)/g;
                let authors = publication.authors
                    ? `
                    <span class="publication--authors">Authors: ${publication.authors.replace(
                        regex,
                        '<u>$1</u>'
                    )}</span>`
                    : '';
                return `
                <li>
                <div class="row">
                ${
                    publication.link
                        ? `<a href=${publication.link} target="_blank">`
                        : ''
                }
                <h6 class="publication--title col-12">${
                    publication.title
                }</h6> </a>
                ${publication.authors ? authors : ''}
                <span class="publication--info col-12">(${
                    publication.date
                }). <em>${publication.info}</em>${publication.issue ? ', ' + publication.issue : ''}.</span>
                <div>
                </li> 
                    `;
            })
            .join('')}

            <h4 class="subtitle row">Blog Posts, etc.</h4>


            ${cvData.publications
                .filter((item) => item.type == 'blog')
                .map(function (publication) {
                    return `
                <li>
                <div class="row">
                ${
                    publication.link
                        ? `<a href=${publication.link} target="_blank">`
                        : ''
                }
                <h6 class="publication--title col-12">${
                    publication.title
                }</h6></a>
                <span class="publication--info col-12">(${
                    publication.date
                }). ${publication.conference ? publication.info : publication.info.italics()}${publication.issue ? ' ' + publication.issue : ''}.</span>
                <div>
                </li>
            `;
                })
                .join('')}

    </ol>

`;

document.getElementById('awards').innerHTML = `

    <h3 class="title row">Awards and Funding</h3>
    ${cvData.awards
        .map(function (award) {
            return `
        <div class="award row">
            <span class="award--title col-7">${award.title}</span>
            <span class="award--amount col-3">${award.amount}</span>
            <span class="award--date col-2">${award.date}</span>
        </div>
        `;
        })
        .join('')}

`;

/* document.getElementById('raships').innerHTML = `

    <h3 class="title row">Research Assistantships</h3>
    ${cvData.raship
        .map(function (raship) {
            return `
        <div class="raship row">
        <h6 class="raship--title col-12">${raship.title}</h6>
        <span class="raship--info col-12">${raship.info}</span>
        </div>
        `;
        })
        .join('')}

`; */

document.getElementById('presentations').innerHTML = `

    <h3 class="title row">Presentations</h3>
    <span>* Peer Reviewed</span>
    <span>&#8224 Invited</span>
    <ol class="presentation-list">
    ${cvData.presentations
        .map(function (presentation) {
            return `
                <li>
                <div class="row">
                    <h6 class="col-12 presentation--title">${
                        presentation.peerReviewed ? '<span>∗</span>' : ''
                    } ${presentation.invited ? '<span>&#8224</span>' : ''}
                    ${presentation.title} </h6>
                    <span class="col-7 presentation--info">${
                        presentation.info
                    }</span>
                    <span class="col-3 presentation--date">${
                        presentation.date
                    }</span>
                    <span class="col-2 presentation--location">${
                        presentation.location
                    }</span>
                </div>
                </li>
        `;
        })
        .join('')}


    <h4 class="subtitle row">Comments Delivered</h4> 
    ${cvData.comments
        .map(function (comment) {
            return `
        <li>
        <div class="row">
        <h6 class="col-12 presentation--title"><span class="notbold">Comments on </span>"${comment.title}"
        </h6>
        <span class="col-7 presentation--info">${comment.info}</span>
        <span class="col-3 presentation--date">${comment.date}</span>
        <span class="col-2 presentation--location">${comment.location}</span>
        </div>
        </li> `;
        })
        .join('')}

    </ol>


`;

document.getElementById('teaching').innerHTML = `

    <h3 class="title row">Teaching </h3>
    <h4 class="subtitle row">Instructor of Record</h4>
    <ol>
    <h5>At MIT</h5>
    ${cvData.teaching.ai
        .filter((item) => item.inst == 'mit')
        .map(function (teaching) {
            return `
            <div class="teaching row">
            <span class="col-7">${teaching.title}</span>
            <span class="col-5">${teaching.semester}</span>
            </div> 
        `;
        })
        .join('')}
    <h5>At UT Austin</h5>
        ${cvData.teaching.ai
            .filter((item) => item.inst == 'ut')
            .map(function (teaching) {
                return `
                <div class="teaching row">
                <span class="col-7">${teaching.title}</span>
                <span class="col-5">${teaching.semester}</span>
                </div> 
            `;
            })
            .join('')}

        </ol>
    <h4 class="subtitle row">Teaching Assistant</h4>
    <h5>At UT Austin</h5> 
    ${cvData.teaching.ta
        .map(function (teaching) {
            return `
            <div class="teaching row">
            <span class="col-7">${teaching.title}</span>
            <span class="col-3">${teaching.semester}</span>
            <span class="col-2">${teaching.instructor}</span>
            </div> 
        `;
        })
        .join('')}

        <h4 class="subtitle row">Other Teaching Experience</h4>
    ${cvData.teaching.other
        .map(function (teaching) {
            return `
            <div class="teaching row">
            <h6 class="col-7 other--teaching">${teaching.title}</h6>
            <span class="col-5 other--teaching">${teaching.semester}</span>
            <span class="col-12 other--teaching--info">${teaching.info}</span>
            </div> 
        `;
        })
        .join('')}

`;

document.getElementById('service').innerHTML = `

    <h3 class="title row">Service</h3>

        <h4 class="subtitle row">At MIT</h4>

    ${cvData.service.mit
        .map(function (service) {
            return `
        <div class="service row">
        <h6 class="service--title col-7">${service.title}</h6>
        <span class="service--date col-5">${service.date}</span>
        <span class="service--info col-12">${service.description}</span>
        </div>
        `;
        })
        .join('')}
    <h4 class="subtitle row">At UT Austin</h4>

    ${cvData.service.utaustin
        .map(function (service) {
            return `
        <div class="service row">
        <h6 class="service--title font-bold col-7">${service.title}</h6>
        <span class="service--date col-5">${service.date}</span>
        <span class="service--info col-12">${service.description}</span>
        </div>
        `;
        })
        .join('')}

    <h4 class="subtitle row">To the profession</h4>

    <div class="service row">
    <span>Reviewer for ${cvData.service.profession.reviews
        .map(function (service) {
            return `
        <em>${service.title}</em> (${service.number})`;
        })
        .join(', ')}.</span>
    </div>
    `;

/* document.getElementById('coursework').innerHTML = `
    
    <h3 class="title row">Coursework in Information Studies</h3>
    ${cvData.coursework
        .map(function (course) {
            return `
        <div class="coursework row">
        <span class="coursework--info col-7">${course.title}</span>
        <span class="coursework--prof col-5">${course.instructor}</span>
        </div>
    `;
        })
        .join('')}
    `; */

document.getElementById('skills').innerHTML = `

    <h3 class="title row">Languages and Skills</h3>
    ${cvData.skills
        .map(function (skill) {
            return `
        <span class="skill row">${skill}</span>
        `;
        })
        .join('')}

`;

document.getElementById('references').innerHTML = `

    <h3 class="title row">References</h3>
    <div class="row references">
    ${cvData.references
        .map(function (reference) {
            return `
        <div class="reference row col-6">
        <h6>${reference.name}</h6>
        <span class="col-12">${reference.department}</span>
        <span class="col-12">${reference.uni}</span>
        <span class="col-12">${reference.email}</span>
        </div>
        `;
        })
        .join('')}
    </div>

`;
