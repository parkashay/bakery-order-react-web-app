import React from 'react'
import './about.css'
function About() {
  const people = [  //this is just for the test, for implementation, fetch from mongodb
    { 'name': 'Manish Gurung', 'role': 'Owner', 'contact': 'manish@lol.com' },
    { 'name': 'Monchak Man', 'role': 'Sponser', 'contact': 'monchak@man.com' },
    { 'name': 'Raj fyakami pun', 'role': 'worker', 'contact': 'chuttar@laura.com' },
    { 'name': 'John Cena OP', 'role': 'Manager', 'contact': 'lol@lol.lol' }
  ];
  return (
    <div className='about-container'>
      {
        people.map((person, index) => {
          return (
            <div className={`ribbon-${index + 1}`} key={index}>
              <div className="info">
                <span className='person-name'>{person.name}</span>
                <span>{person.role}</span>
                <span>{person.contact}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default About