import React, { useState } from 'react';

export default function MapsPage() {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const branches = [
    {
      id: 1,
      name: "Toshkent Markaz",
      address: "Amir Temur ko'chasi 108, Toshkent",
      phone: "+998 71 123 45 67",
      hours: "09:00 - 18:00",
      lat: 41.311151,
      lng: 69.279737,
      color: "#3498db"
    },
    {
      id: 2,
      name: "Chilonzor filiali",
      address: "Chilonzor-10, Toshkent",
      phone: "+998 71 234 56 78",
      hours: "09:00 - 18:00",
      lat: 41.275,
      lng: 69.205,
      color: "#2ecc71"
    },
    {
      id: 3,
      name: "Yunusobod filiali",
      address: "Yunusobod 5-kvartal, Toshkent",
      phone: "+998 71 345 67 89",
      hours: "09:00 - 18:00",
      lat: 41.333,
      lng: 69.289,
      color: "#9b59b6"
    },
    {
      id: 4,
      name: "Samarqand filiali",
      address: "Registon ko'chasi 42, Samarqand",
      phone: "+998 66 234 56 78",
      hours: "09:00 - 18:00",
      lat: 39.654,
      lng: 66.975,
      color: "#e67e22"
    }
  ];

  const openMap = (lat, lng) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
        rel="stylesheet"
      />
      
      <style>{`
        body {
          min-height: 100vh;
        }
        
        .main-container {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          margin: 40px auto;
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .page-header h1 {
          color: #2c3e50;
          font-weight: bold;
          margin-bottom: 15px;
        }
        
        .page-header p {
          color: #7f8c8d;
          font-size: 18px;
        }
        
        .map-container {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          height: 450px;
        }
        
        .map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .branch-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border-left: 5px solid;
          cursor: pointer;
        }
        
        .branch-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }
        
        .branch-card h5 {
          color: #2c3e50;
          font-weight: bold;
          margin-bottom: 20px;
        }
        
        .branch-info {
          margin-bottom: 12px;
          color: #555;
          display: flex;
          align-items: center;
        }
        
        .branch-info i {
          width: 25px;
          margin-right: 10px;
        }
        
        .btn-map {
          background: linear-gradient(135deg, #ffb413ff 0%, #ffab10ff 100%);
          border: none;
          color: white;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 8px;
          transition: all 0.3s ease;
          width: 100%;
          margin-top: 15px;
        }
        
        .btn-map:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
          color: white;
        }
        
        .contact-section {
          background: linear-gradient(135deg, #dc7317ff 0%, #e8a217ff 100%);
          border-radius: 15px;
          padding: 40px;
          text-align: center;
          margin-top: 50px;
          color: white;
        }
        
        .contact-section h3 {
          font-weight: bold;

          margin-bottom: 20px;
        }
        
        .contact-section .btn {
          margin: 10px;
          padding: 12px 30px;
          font-weight: 600;
          border-radius: 8px;
        }
        
        .badge-color {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 10px;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }
        
        .modal-content-custom {
          background: white;
          border-radius: 15px;
          padding: 30px;
          max-width: 500px;
          width: 90%;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 24px;
          color: #999;
          cursor: pointer;
        }
        
        .modal-close:hover {
          color: #333;
        }
      `}</style>

      <div className="container">
        <div className="main-container">
          {/* Header */}
          <div className="page-header">
            <h1>
              <i className="fas fa-map-marked-alt"></i> Bizning Filiallarimiz
            </h1>
            <p>Sizga eng yaqin filialimizni toping va tashrif buyuring</p>
          </div>

          {/* Xarita va Filiallar */}
          <div className="row">
            {/* Xarita */}
            <div className="col-lg-6 mb-4">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.6157213847!2d69.13927!3d41.311151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Filiallar xaritasi"
                />
              </div>
              <p className="text-muted text-center mt-3">
                <small>Aniq joylashuvni ko'rish uchun quyida filial tanlang</small>
              </p>
            </div>

            {/* Filiallar ro'yxati */}
            <div className="col-lg-6">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="branch-card"
                  style={{ borderLeftColor: branch.color }}
                  onClick={() => setSelectedBranch(branch)}
                >
                  <h5>
                    <span 
                      className="badge-color" 
                      style={{ background: branch.color }}
                    ></span>
                    {branch.name}
                  </h5>
                  <div className="branch-info">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                    {branch.address}
                  </div>
                  <div className="branch-info">
                    <i className="fas fa-phone text-success"></i>
                    {branch.phone}
                  </div>
                  <div className="branch-info">
                    <i className="fas fa-clock text-warning"></i>
                    {branch.hours}
                  </div>
                  <button 
                    className="btn btn-map"
                    onClick={(e) => {
                      e.stopPropagation();
                      openMap(branch.lat, branch.lng);
                    }}
                  >
                    <i className="fas fa-directions"></i> Google Maps'da ochish
                  </button>
                </div>
              ))}
            </div>
          </div>


          {/* Contact Section */}
          <div className="contact-section">
            <h3>
              <i className="fas fa-question-circle"></i> Savollaringiz bormi?
            </h3>
            <p className="mb-4">Bizning jamoamiz sizga yordam berishga doim tayyor</p>
            <button className="btn btn-success btn-lg">
              <i className="fab fa-telegram"></i> Telegram orqali murojaat
            </button>
            <button className="btn btn-light btn-lg">
              <i className="fas fa-phone-alt"></i> Qo'ng'iroq qilish
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedBranch && (
        <div className="modal-overlay" onClick={() => setSelectedBranch(null)}>
          <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedBranch(null)}
            >
              ×
            </button>
            
            <h3 className="mb-4" style={{ color: '#2c3e50' }}>
              {selectedBranch.name}
            </h3>
            
            <div className="mb-3">
              <div className="branch-info">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <div>
                  <strong>Manzil:</strong><br/>
                  {selectedBranch.address}
                </div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="branch-info">
                <i className="fas fa-phone text-success"></i>
                <div>
                  <strong>Telefon:</strong><br/>
                  {selectedBranch.phone}
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="branch-info">
                <i className="fas fa-clock text-warning"></i>
                <div>
                  <strong>Ish vaqti:</strong><br/>
                  {selectedBranch.hours}
                </div>
              </div>
            </div>

            <button 
              className="btn btn-map"
              onClick={() => openMap(selectedBranch.lat, selectedBranch.lng)}
            >
              <i className="fas fa-directions"></i> Yo'nalishni olish
            </button>
          </div>
        </div>
      )}
    </>
  );
}
