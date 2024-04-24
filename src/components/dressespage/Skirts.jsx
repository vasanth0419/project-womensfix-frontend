import React, { useState, useEffect } from "react";
import "./style.css/Dresses.css";
import dressservice from "../../../services/dressservice";

const Skirts = () => {
  const [data, setData] = useState([]);
  const [selectedDress, setSelectedDress] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dressservice.getalldresses();

        const skirtsDresses = response.data.filter(
          (dress) => dress.style === "Skirts"
        );
        setData(skirtsDresses);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const handleImageClick = (dress) => {
    setSelectedDress(dress);

    const offcanvas = new bootstrap.Offcanvas(
      document.getElementById("offcanvasWithBothOptions")
    );
    offcanvas.show();
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {data.map((dress) => (
            <div className="col-3" key={dress.id}>
              <div className="card card-tab">
                <img
                  className="card-img-top"
                  src={dress.image}
                  alt="Card image cap"
                  onClick={() => handleImageClick(dress)}
                />
                <div className="card-body">
                  <p className="card-title lead">{dress.name}</p>
                  <p>
                    price : ₹{dress.price}.00{" "}
                    
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {selectedDress && (
            <div>
              <h4>{selectedDress.name}</h4>
              <p>Price: ₹{selectedDress.price}.00</p>
              <img src={selectedDress.image} alt={selectedDress.name} />
              <br />
              <p className="h4">Description :</p>
              <p className="lead">{selectedDress.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skirts;
