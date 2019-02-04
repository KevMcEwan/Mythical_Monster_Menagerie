import React, { Component } from 'react';
import CreatureDetail from './CreatureDetail.js';

const CreatureList = ({ creatures = [] }) => {

   const listCreatures = creatures.map((creature, index) => {
      return (
         <li key={index} className="creature">
            <CreatureDetail
               name={creature.name}
               breed={creature.breed}
               description={creature.description}
            >
            </CreatureDetail>
         </li>
      );
   });

   return (
      <ul>
         {listCreatures}
      </ul>
   );

}




   export default CreatureList;
