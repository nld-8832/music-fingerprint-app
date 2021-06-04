import PlayButton from '../play.png';

const GENIUS_DOMAIN = "https://genius.com"

const SectionContent = ({ data }) => {
  const song = data["song_name"].split(' - ')[0]
  const singer = data["song_name"].split(' - ')[1]
  const geniusParam = () => {
    const first = singer.replace(" ", "-")
    const second = song.replace(" ", "-")

    return first[0].toUpperCase() + first.substr(1, first.length).toLowerCase() + '-' + second.toLowerCase() + '-lyrics';
  }

  return (
    <div className="song-content">
      <div className="result-name">
        <div className="song-title">
          {song}
        </div>
        <div className="singer-name">
          <span style={{color: "gray", fontSize: "15px"}}>
            {singer}
          </span>
        </div>
      </div>
      <div className="logo-wrapper">
        <a href={`${GENIUS_DOMAIN}/${geniusParam()}`}>
          <img src={PlayButton} alt="logo" className="play-logo" />
        </a>
      </div>
  </div>
  )
}

export default SectionContent;
