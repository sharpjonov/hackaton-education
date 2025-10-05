import "./UserCard.css";
import userImg from "../assets/user.png";
import barcode from "../assets/shtrix.png"; 
import qr from "../assets/qr-code.png"; 

const UserCard = () => {
  return (
    <div className="id-card">
      <div className="card-header" />
      <div className="user-photo">
        <img src={userImg} alt="User" />
      </div>
      <div className="user-info">
        <h2>Sharipjonov Muhammad</h2>

        <p><strong>ID</strong> : 62350019652</p>
        <p><strong>DOB</strong> : 15.06.1902</p>
        <p><strong>Email</strong> : Muhammad@gmail.com</p>
        <p><strong>Phone</strong> : +998 (99) 98765</p>
      </div>
      <div className="code-section">
        {/* <img className="barcode" src={barcode} alt="barcode" /> */}
        <img className="qr" src={qr} alt="qr" />
      </div>
    </div>
  );
};

export default UserCard;
