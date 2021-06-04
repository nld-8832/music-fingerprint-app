import PlayButton from '../play.png';

const SectionContent = ({ data }) => {
  const song = data["song_name"].split(' - ')[0]
  const singer = data["song_name"].split(' - ')[1]

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
        <img src={PlayButton} alt="logo" className="play-logo"/>
      </div>
  </div>
  )
}

export default SectionContent;
