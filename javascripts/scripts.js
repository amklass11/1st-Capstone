const menBtn = document.querySelector('#bars');
const navstuff = document.querySelector('.mobile-menu');
const Closer = document.querySelector('.close-button');
const rep = document.getElementById('hide');

rep.addEventListener('click', () => {
  menBtn.classList.toggle('navblur');
  navstuff.classList.toggle('activate');
  navstuff.classList.toggle('mobile-menu');
  Closer.classList.toggle('visible');
  rep.classList.toggle('invisible');
});
// Closer.addEventListener('click', () => {
//   menBtn.classList.toggle('navblur');
//   navstuff.classList.toggle('activate');
//   navstuff.classList.toggle('mobile-menu');
//   Closer.classList.toggle('visible');
//   rep.classList.toggle('invisible');
// });
const dataProjects = [
     {
         name: 'Margaret Hamilton',
        contribution: 'She at the time served in the capacity of Director Software Engineering Division at Charles Stark Draper Lab and led a team of individuals who built the onboard flight control software for the famous NASA missions namely; Apollo and Skylab.',
        Description: 'Her claim to fame is due to the Apollo mission, in particular. She later aided in the development of ‘Universal Systems Language’ and ‘Development before the Fact’ model. It is to her credit the term “software engineering”',
        img: '../img/margaret.png',
      },
      {
        name: 'Donald Knuth',
        contribution: 'His book on the theory of programming earned him all the accolades and much-deserved fame.',
        Description: 'He created the ‘TeX digital typesetting system’. Amidst winning a number of awards, he was named as the ‘Fellow at the Computer History Museum’ in 1998.',
        img: '../img/Donald.png',
      },
      {
        name: 'Ken Thompson',
        contribution: 'He won A.M. Turing Award along with Dennis Ritchie in 1983 among other awards. He’s also an inductee at the fellow of Computer History Museum (1997).',
        Description: 'Along with Dennis Ritchie, Ken was the co-creator of UNIX. He is also accredited with creating ‘B-programming language’, the ‘ed(text editor)’, and also was the co-developer of ‘Go’ programming language.',
        img: '../img/Ken.jpg',
      },
      {
        name: 'Richard Stallman',
        contribution: 'As his contribution to the open-source software which we use daily for code compilation, he is among the most influential computer programmers in the history.',
        Description: 'Remember the ‘GNU Project’? Well, he is the founder of it along with its tools such as ‘Emacs’, ‘GCC’ etc. He is also the founder of the ‘Free Software Foundation’ and the winner of ACM’s Grace Murray Hopper Award (1990) and EFF’s Pioneer Award (1998).',
        img: '../img/richard.png',
      },
      {
        name: 'Niklaus Wirth',
        contribution: 'A Swedish computer programmer and is hailed as one of the pioneers of computer programming. He introduced the renowned programming languages including Pascal, Euler, Algol-W, Modula/Modula-2, and Oberon/Oberon-2/-7.',
        Description: 'Another relatively simpler programming language known as PL/o was also designed by Wirth. PL/o now serves as the foundation for compiler design classes in universities. His contribution in the field of computer programming won him the prestigious Turing Award in ’84.',
        img: '../img/Niklaus.png',
      },
      {
        name: 'Dennis Ritchie',
        contribution: 'Dennis Ritchie was a computer scientist and is responsible for setting up the digital era of ours presently. He devised C programming language which is employed by many software applications, operating systems, and has served as the benchmark for the programming languages that followed.',
        Description: 'As mentioned above he co-created UNIX with Ken Thompson. ’83 won him the Turing Award from ACM and several other accolades. Upon his passing the Fedora 16 Linux distribution was released as part of honoring his memory.',
        img: '../img/donnald.png',
      },
    ];
function createCard(el) {
  return ` <div class="desktop-v">
  <div class="flex-row  shift">
  <img src="${el.img}" id="box" alt="Image of the speaker">
  <div class="flex-column text-section"><h3 class="Name">${el.name}</h3>
      <h4>${el.contribution}</h4>
  <div class="Contribution">
  ${el.Description}
  </div>
  </div>
</div> 
</div>
`;
}

const myProjects = dataProjects.map((el) => {
  const div = document.createElement('div');
  div.className= 'invert'
  div.innerHTML = createCard(el);
  return div;
});

const speakerSection = document.querySelector('.desktop-v');

for (let i = 0; i < myProjects.length; i += 1) {
  speakerSection.appendChild(myProjects[i]);
}