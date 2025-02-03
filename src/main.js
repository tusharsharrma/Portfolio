import './style.css';
import figlet from 'figlet';
import standardFont from 'figlet/importable-fonts/Standard.js';
import dohFont from 'figlet/importable-fonts/Doh.js'; // Import the correct font

// Register fonts in figlet
figlet.parseFont('Standard', standardFont);
figlet.parseFont('Doh', dohFont); // Register 'Doh' font

figlet.text('Frontend Developer', { font: 'Standard' }, function (err, data) {
  if (err) {
    console.error('Error generating ASCII text:', err);
    return;
  }
  document.getElementById('skills__sect__heading').innerHTML = `<pre>${data}</pre>`;
});

figlet.text(
  'Work', 
  { 
    font: 'Standard',
  },
  function (err, data) {
    if (err) {
    console.error('Error generating ASCII text:', err);
    return;
    }
    document.getElementById('proj__sect__heading').innerHTML = `<pre>${data}</pre>`;
  }
);

const skills = ['Html', 'Css', 'Javascript', 'React', 'Git', 'Github']

const skillsContainer = document.getElementById('skills__container')
// console.log(skillsContainer)
skills.map((skill) => {
  const skillCard = document.createElement('div');
  skillCard.className = 'skills';
  // console.log(skill)

  skillsContainer.appendChild(skillCard);
  

  skillCard.innerHTML= `${skill}`
  console.log(skillCard)
})

const projects = [
  { title: 'Weather App', tech: 'React, API', img: 'weather.jpg' },
  { title: 'E-commerce Site', tech: 'Node.js, MongoDB', img: 'ecom.jpg' },
  { title: 'E-commerce Site', tech: 'Node.js, MongoDB', img: 'ecom.jpg' },
];

const projectsContainer = document.getElementById('projects__container');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';

  projectCard.innerHTML = `
    <img src="images/${project.img}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.tech}</p>
  `;

  projectsContainer.appendChild(projectCard);
});



const funcInfo = function() {

  figlet.text('Tushar Sharma', { font: 'Standard' }, function (err, data) {
    if (err) {
      console.error('Error generating ASCII text:', err);
      return;
    }
    document.getElementById('name').innerHTML = `<pre class = "my__name">${data}</pre>`;
  });


}

funcInfo();

