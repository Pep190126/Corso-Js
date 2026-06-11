import sole from '../assets/media/sole.jpeg';

export default function MeteoInfo() {
  let temperatura = '23';
  let tempPercepita = '24';
  let descr = 'Soleggiato';
  let localita = 'Dublin';
  let icona = 'https://openweathermap.org/img/wn/01d@2x.png';

  return (
    <div className="container">
      <h2>Meteo Info {localita}</h2>
      <p>
        Temperatura adesso:{temperatura}° (percepita:{tempPercepita}°)
      </p>
      <p id="descrizioneMeteo">
        {descr} <img src={sole} style={{width: '60px'}} alt="" />
      </p>
    </div>
  );
}
