export default function MeteoRaffa() {
  let temperatura = 23;
  let umidita = 6;
  let meteo = 3;

  let immagine;
  let descrizione;

  switch (meteo) {
    case 1:
      immagine = '/sole.svg';
      descrizione = 'Sereno';
      break;
    case 2:
      immagine = '/nuvoloso.svg';
      descrizione = 'Nuvoloso';
      break;
    case 3:
      immagine = '/pioggia.svg';
      descrizione = 'Pioggia';
      break;
    default:
      immagine = '/sconosciuto.svg';
      descrizione = 'Dato non disponibile';
  }

  return (
    <>
      <img
        src={immagine}
        alt={descrizione}
        style={{
          display: 'block',
          width: '150px',
          margin: '0 auto'
        }}
      />
      <p>Condizione: {descrizione}</p>
      <p>Temperatura: {temperatura} °C</p>
      <p>Umidità: {umidita}%</p>
    </>
  );
}
