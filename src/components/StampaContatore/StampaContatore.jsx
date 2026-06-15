import React, { useRef } from 'react';

export default function StampaContatore() {
  const contatoreRef = useRef(0);

  const incrementaContatore = () => {
    contatoreRef.current += 1;
  };

  const mostraInConsole = () => {
    console.log("Valore attuale del contatore:", contatoreRef.current);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', margin: '20px' }}>
      <button onClick={incrementaContatore}>Clicca</button>
      <button onClick={mostraInConsole}>Mostra</button>
    </div>
  );
}