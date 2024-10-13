function CodeComponent(props) {
  return (
    <div className="codeStyle">
      <div className="line">
        import <span className="fileStyle">{props.firstImport}</span> from{" "}
        <span className="linkStyle">{props.firstImportLocation}</span>
      </div>
      <div className="line">
        import <span className="linkStyle">{props.styleImportLink}</span>
      </div>
      <br></br>
      <div className="line">
        <span className="fcnStyle">function</span>{" "}
        <span className="nameStyle">{props.functionName}</span>
        <span className="brackStyle">
          {"("}
          <span className="fileStyle">props</span>
          {") {"}
        </span>
      </div>
      <div>...</div>

      <div className="line">&nbsp;&nbsp;&nbsp;{`return (`}</div>
    </div>
  );
}

export default CodeComponent;
