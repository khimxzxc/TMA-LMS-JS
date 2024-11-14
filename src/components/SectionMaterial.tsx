// src/components/SectionMaterial.tsx
import React from 'react';
import './SectionMaterial.css';

function SectionMaterial({ materials }: { materials: string }) {
  return (
    <div className="section-material">
      <h3>Кратко про JavaScript:</h3>
      <p>{materials}</p>
    </div>
  );
}

export default SectionMaterial;
