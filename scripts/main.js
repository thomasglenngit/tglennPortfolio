const projectsArray = [
  {
    title: '"Melodious":',
    src: '../img/melodious.png',
    url: "https://melodious.io",
    description: 'An application where you can play a virtual piano that plays singing notes, and teaches you melodies too.'
  },
  {
    title: '"Hair Salon":',
    src: '../img/eauclaire.png',
    url: "https://github.com/thomasglenngit/HairSalon.Solution",
    description: 'An application for salon owners to keep track of their employees and clients.'
  },
  {
    title: '"Quake Modeler":',
    src: '../img/CityEQ.jpg',
    url: "https://github.com/thomasglenngit/QuakeModeler.Solution",
    description: 'An application to model history of earthquakes and prediction for any given location query.'
  },
  {
    title: '"kombucha":',
    src: '../img/kombucha-bottle.jpg',
    url: "https://github.com/thomasglenngit/kombucha",
    description: 'An application for bartenders to manage their stock'
  }
]



document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault()
  let myProjects = document.getElementById('projects')

  projectsArray.forEach((project) => {
    myProjects.innerHTML +=
    "<div class='project-item'><img class='project-img' src='" + project.src + "' alt=''><div class='bento'><h4> " + project.title + "</a</h4><p class='project-para'>" + project.description + "</p></div><div class='visit'><button href='" + project.url + "'>Visit Project</button></div></div>";

  })
})


