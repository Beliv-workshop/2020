
//* Using juery becuase this was already being used

/*
This is the contact information that is added into the sidebar div. Change these to update the contact in the sidebar.
*/


// Anastasia Bezerianos
// Kyle Hall <hallkw@ucalgary.ca>,
// Miriah Meyer <miriah@cs.utah.edu>,
// Samuel Huron <samuel.huron@telecom-paristech.fr>,
// Matthew Kay <mjskay@umich.edu>

let organizerData = [
    {
        name: 'Anastasia Bezerianos', 
        weblink: 'https://www.lri.fr/~anab/', 
        affil: 'Université Paris-Saclay',
        blurb:`is an assistant professor at Université Paris-Saclay, part of the LRI HCC (ex InSitu) and the ILDA research team. 
        Her interests lie in novel interaction and visualization design and evaluation, especially on large high resolution displays.`
    },
    {
        name: 'Kyle Hall', 
        weblink: 'https://kylewmhall.com', 
        affil: 'Temple University',
        blurb:`is a post-doctoral fellow at Temple University.  He holds an interdisciplinary PhD from the University of Calgary.  
        His research interests include transdisciplinary visualization design, design methodology, and techniques bridging information visualization 
        and scientific visualization.`
    },
    {
        name: 'Samuel Huron', 
        weblink: 'https://perso.telecom-paristech.fr/shuron/#!index.md', 
        affil: 'Telecom Paris Tech',
        blurb:`is an associate professor in Design and ICT at Telecom Paris Tech in France. He holds a PhD in computer science from the 
        University Paris Saclay in collaboration with INRIA. His research is mostly focus on the design process of visual representation of data, 
        design methods apply to research and computer human interaction.`
    },
    {
        name: 'Matthew Kay', 
        weblink: 'https://www.si.umich.edu/people/matthew-kay', 
        affil: 'University of Michigan',
        blurb:` is an Assistant Professor of Information at UMSI. His research includes work on communicating uncertainty, usable statistics, 
        and personal informatics. `
    },
    {
        name: 'Miriah Meyer', 
        weblink: 'https://www.cs.utah.edu/~miriah/', 
        affil: 'University of Utah',
        blurb:`is an associate professor in the School of Computing at the University of Utah and a faculty member in the 
        Scientific Computing and Imaging Institute. Her research focuses on the design of visualization systems for helping researchers 
        make sense of complex data, and on the development of methods for helping visualization designers make sense of the world.`
    },
    {
        name: 'Michael Sedlmair', 
        weblink: 'https://homepage.univie.ac.at/michael.sedlmair/', 
        affil: 'Univ. of Stuttgart',
        blurb:`is an assistant professor at the
        University of Stuttgart in Germany. He holds a PhD from the
        University of Munich (2010). Michael's main research
        interests are interdisciplinary visualization research,
        high-dimensional data analysis, as well as investigating new
        and refined methodological approaches for visualization
        design and evaluation.`,
    }
];

let publicityData = [
    {
        name: 'Jen Rogers', 
        weblink: 'https://vdl.sci.utah.edu/team/rogers/', 
        affil: 'University of Utah',
        blurb:`is a PhD student at the University of Utah. Her main research focus is the design and development of visualization systems for 
        biological disciplines to help researchers explore their data.`
    }
];

/*
Code that adds data to div
*/

let wrapper = $("#side-contact");

wrapper.append("<h1>Organizers</h1>");
makeContact(organizerData, wrapper);

wrapper.append("<h1>Publicity Chair</h1>");
makeContact(publicityData, wrapper);

// wrapper.append("<h1>Local Chair</h1>");
// makeContact(localData, wrapper);

if($("#organizer-bio").length > 0){
    console.log('this is a test')
    makeBio(organizerData, $("#organizer-bio"))
}

if($("#publicity-bio").length > 0){
    console.log('this is a test')
    makeBio(publicityData, $("#publicity-bio"))
}


function makeContact(data, div){
    for(let i in data){
        div.append(`<a href='${data[i].weblink}'>${data[i].name}</a>: ${data[i].affil}<br>`);
    }
}

function makeBio(data, div){
    for(let i in data){
        div.append(`<p><a href='${data[i].weblink}'>${data[i].name}</a> ${data[i].blurb}</p>`);
    }

}