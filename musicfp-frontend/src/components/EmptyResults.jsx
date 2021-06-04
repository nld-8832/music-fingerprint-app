import './modal.css';
import CryingImg from '../crying.png';

const EmptyResults = () => {
  return (
    <div className="empty-modal">
      <span style={{marginBottom: "20px", fontSize: "25px", width: "80%"}}>Sorry, there are no matches....</span>
      <img src={CryingImg} alt="crying" style={{width: "40px", height: "40px"}}/>
    </div>
  )
}
export default EmptyResults;
