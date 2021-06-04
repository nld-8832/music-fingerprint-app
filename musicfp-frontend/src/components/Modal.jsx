import './modal.css';
import CloseImg from '../close.png';
import ModalSection from './ModalSection';
import SectionContent from './SectionContent';
import EmptyResults from './EmptyResults';

const Modal = ({ handleClose, show, results, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const otherMatches = () => {
    return(
      <>
      {
        results.map((item, i) => {
          if(i != 0) {
            return <SectionContent data={results[i]}/>
          }
        })
      }
      </>
    )
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {
          results.length == 0 ? <EmptyResults/> :
          <>
            <ModalSection title={"Best match"}>
              <SectionContent data={results[0]}/>
            </ModalSection>
            <div className="divider">
              <div class="solid"/>
            </div>
            <ModalSection title={"Other posibilities"}>
              {otherMatches()}
            </ModalSection>
          </>
        }
        <div className="button-wrapper">
          <div className="close-button" onClick={handleClose}>
            <span className="button-text">Try again</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
