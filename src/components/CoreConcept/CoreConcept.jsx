import React from 'react'
import CoreConcepts from './CoreConcepts/CoreConcepts';
import { CORE_CONCEPTS } from '../../data';

const CoreConcept = () => {
  return (
            <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => (
              <CoreConcepts {...item} key={index} />
            ))}
          </ul>
        </section>
  )
}

export default CoreConcept