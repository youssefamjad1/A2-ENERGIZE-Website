import React from "react";

const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80" data-aos="fade-up">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="Google Maps"
              className="gmap_iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.643391881285!2d-9.233065184320064!3d32.29274242289536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac20d60758e5ad%3A0xd4a2a811199d4020!2sTajine!5e0!3m2!1sen!2sma!4v1624373837120!5m2!1sen!2sma"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
