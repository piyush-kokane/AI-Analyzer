import { useState } from "react";
import toast from "react-hot-toast";
import "./Home.css";

const AnalyzerPage = () => {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(37);
  const [rating, setRating] = useState(3.4);
  const [distance, setDistance] = useState("");
  const [orderType, setOrderType] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const handleSubmit = () => {
    if (!email) {
      toast.error("Please enter email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!distance) {
      toast.error("Please enter distance");
      return;
    }

    if (!orderType) {
      toast.error("Please select order type");
      return;
    }

    if (!vehicleType) {
      toast.error("Please select vehicle type");
      return;
    }

    toast.success(`Analysis sent to ${email}`);
  };

  return (
    <div className="page-container">
      <div className="header">
        <div>
          <span className="material-symbols-outlined">neurology</span>
          <h1>AI</h1>
          <h2>DeliTime</h2>
          <span className="material-symbols-outlined">star_shine</span>
        </div>
        <p>Predicts delivery time fast and smart.</p>
      </div>

      <div className="card">
        <div className="section">
          <label>DELIVERY PERSON AGE: <span className="value">{age}</span></label>
          <input
            type="range"
            min="18"
            max="65"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="slider"
          />
        </div>

        <div className="section">
          <label>DELIVERY PERSON RATINGS: <span className="value">{rating}</span></label>
          <input
            type="range"
            min="1"
            max="5"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="slider"
          />
        </div>

        <div className="section">
          <label>DISTANCE (KM)</label>
          <input
            type="number"
            placeholder="0"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="text-input"
          />
        </div>

        <div className="section">
          <label>TYPE OF ORDER</label>
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="select-input"
          >
            <option value="">Select order type</option>
            <option value="food">Food</option>
            <option value="grocery">Grocery</option>
            <option value="package">Package</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>

        <div className="section">
          <label>TYPE OF VEHICLE</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="select-input"
          >
            <option value="">Select vehicle type</option>
            <option value="bike">Bike</option>
            <option value="scooter">Scooter</option>
            <option value="car">Car</option>
            <option value="bicycle">Bicycle</option>
          </select>
        </div>

        <div className="section">
          <label>EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="analyst@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
        </div>

        <button className="run-btn" onClick={handleSubmit}>
          <span className="material-symbols-outlined">info</span>
          RUN ANALYSIS
        </button>

        <div className="footer">● Analysis will be sent to your email</div>
      </div>
    </div>
  );
};

export default AnalyzerPage;