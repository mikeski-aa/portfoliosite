import "../styles/bonuspage.css";

function BonusPage(props) {
  return (
    <div className={`bonusPage ${props.bonusShow}`}>
      <div className="bonusContent">Bonus content will go here bla bla bla</div>
    </div>
  );
}

export default BonusPage;
