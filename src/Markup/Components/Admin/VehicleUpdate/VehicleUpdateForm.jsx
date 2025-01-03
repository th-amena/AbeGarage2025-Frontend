import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";
import VEHICLE from "../../../../Services/vehicle.service"; // Assuming the correct path for the vehicle service

const VehicleUpdateForm = () => {
  const { id: vehicleId , customer_hash: customer_hash} = useParams(); // Fetch the vehicle ID from the route parameters
  const navigate = useNavigate();
  const { employee } = useAuth();
  let loggedInEmployeeToken = employee && employee.employee_token;

  // Define state for form fields
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleMileage, setVehicleMileage] = useState("");
  const [vehicle_tag, setVehicleTag] = useState("");
  const [vehicle_serial, setVehicleSerial] = useState("");
  const [vehicle_color, setVehicleColor] = useState("");

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await VEHICLE.getVehicleById(vehicleId, loggedInEmployeeToken)
        .then((res) => res.json())
        .then((response)=> {
          // console.log(response);
          setVehicleYear(response?.singleVehicle[0]?.vehicle_year || "");
          setVehicleMake(response?.singleVehicle[0].vehicle_make || "");
          setVehicleModel(response?.singleVehicle[0].vehicle_model || "");
          setVehicleType(response?.singleVehicle[0].vehicle_type || "");
          setVehicleMileage(response?.singleVehicle[0].vehicle_mileage || "");
          setVehicleTag(response?.singleVehicle[0].vehicle_tag || "");
          setVehicleSerial(response?.singleVehicle[0].vehicle_serial || "");
          setVehicleColor(response?.singleVehicle[0].vehicle_color || "");
        })

      
        
      } catch (error) {
        console.error("Error fetching vehicle:", error.message);
      }
    };
    fetchVehicle();
  }, []);

    // console.log(vehicleYear)
  const handleUpdateVehicle = async (e) => {
    e.preventDefault();

    const formData = {
      vehicle_year: vehicleYear,
      vehicle_make: vehicleMake,
      vehicle_model: vehicleModel,
      vehicle_type: vehicleType,
      vehicle_mileage: vehicleMileage,
      vehicle_tag:vehicle_tag,
      vehicle_serial:vehicle_serial,
      vehicle_color :vehicle_color

    };

    // console.log(formData);

    try {
      const response = await VEHICLE.updateVehicle(vehicleId, formData, loggedInEmployeeToken);
      // console.log("Vehicle updated successfully:", response);
      navigate(`/admin/customer-profile/${customer_hash}`);
    } catch (error) {
      console.error("Error updating vehicle:", error.message);
      alert(`Error updating vehicle: ${error.message}`);
    }
  };

  return (
    <section className="contact-section pb-5">
      <div className="bg-white px-5 pt-5 mt-4 contact-title mb-1">
        <h2>{`Update Vehicle (${vehicleMake} ${vehicleModel})`}</h2>
        <div className="contact-form">
          <form onSubmit={handleUpdateVehicle}>
            <div className="row clearfix">
              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="vehicle_year"
                  placeholder="Vehicle Year"
                  value={vehicleYear}
                  onChange={(e) => setVehicleYear(e.target.value)}
                  required
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="vehicle_make"
                  placeholder="Vehicle Make"
                  value={vehicleMake}
                  onChange={(e) => setVehicleMake(e.target.value)}
                  required
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="vehicle_model"
                  placeholder="Vehicle Model"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  required
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="vehicle_type"
                  placeholder="Vehicle Type"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  required
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="vehicle_mileage"
                  placeholder="Vehicle Mileage"
                  value={vehicleMileage}
                  onChange={(e) => setVehicleMileage(e.target.value)}
                  required
                />
              </div>


              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="vehicle_mileage"
                  placeholder="Vehicle Tag"
                  value={vehicle_tag}
                  onChange={(e) => setVehicleTag(e.target.value)}
                  required
                />
              </div>




              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="vehicle_mileage"
                  placeholder="Vehicle Serial"
                  value={vehicle_serial}
                  onChange={(e) => setVehicleSerial(e.target.value)}
                  required
                />
              </div>




              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="vehicle_mileage"
                  placeholder="Vehicle Color"
                  value={vehicle_color}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  required
                />
              </div>













              <div className="form-group col-md-12">
                <button className="theme-btn btn-style-one" type="submit">
                  <span>UPDATE VEHICLE</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VehicleUpdateForm;
