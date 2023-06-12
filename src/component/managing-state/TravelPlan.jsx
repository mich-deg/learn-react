/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { initialTravelPlan } from "../../../data";

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  function handleComplete(parentId, childId) {
    const parent = plan[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesByID={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
};

const PlaceTree = ({ id, parentId, placesByID, onComplete }) => {
  const place = placesByID[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesByID={placesByID}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default TravelPlan;
