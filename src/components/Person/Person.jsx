import React from 'react';

function getSpouse(sex) {
  return sex === 'f' ? ('husband') : ('wife');
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age && (
    <p className="Person__age">
      {`I am ${person.age}`}
    </p>
    )}

    <p className="Person__partner">
      {
        person.isMarried ? (`${person.partnerName} is my ${getSpouse(person.sex)}`)
          : ('I am not married')
      }
    </p>
  </section>
);