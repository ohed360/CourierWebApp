import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CourierApp() {
  const [parcels, setParcels] = useState([]);
  const [form, setForm] = useState({ sender: "", receiver: "", location: "" });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddParcel = () => {
    if (form.sender && form.receiver && form.location) {
      setParcels([...parcels, { id: uuidv4(), ...form, status: "Pending" }]);
      setForm({ sender: "", receiver: "", location: "" });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Courier Booking</h1>
      <input name="sender" placeholder="Sender" value={form.sender} onChange={handleInputChange} />
      <input name="receiver" placeholder="Receiver" value={form.receiver} onChange={handleInputChange} />
      <input name="location" placeholder="Location" value={form.location} onChange={handleInputChange} />
      <button onClick={handleAddParcel}>Add Parcel</button>

      <h2>Parcels</h2>
      <ul>
        {parcels.map(parcel => (
          <li key={parcel.id}>
            {parcel.sender} to {parcel.receiver} at {parcel.location} - {parcel.status}
          </li>
        ))}
      </ul>
    </div>
  );
}