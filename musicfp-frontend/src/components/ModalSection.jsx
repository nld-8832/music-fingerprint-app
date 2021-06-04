const ModalSection = (props) => {
  const { title, children } = props
  return (
    <div className="section">
      <div className="section-title">
        {title}
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  )
}

export default ModalSection;
