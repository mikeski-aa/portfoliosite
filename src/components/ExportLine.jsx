function ExportLine(props) {
  return (
    <div className="exportLine">
      <div className="line">&nbsp;&nbsp;&nbsp;{`);`}</div>
      <div className="line">
        export default <span className="nameStyle">{props.text}</span>
      </div>
    </div>
  );
}

export default ExportLine;
