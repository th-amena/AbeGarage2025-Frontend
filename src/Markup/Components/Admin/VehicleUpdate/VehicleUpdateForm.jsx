import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";
import VEHICLE from "../../../../Services/vehicle.service"; // Assuming the correct path for the vehicle service

const VehicleUpdateForm = () => {
  const { id: vehicleId } = useParams(); // Fetch the vehicle ID from the route parameters
  const navigate = useNavigate();
  const { employee } = useAuth();
  let loggedInEmployeeToken = employee && employee.employee_token;

  // Define state for form fields
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleMileage, setVehicleMileage] = useState("");

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await VEHICLE.getSingleVehicle(vehicleId, loggedInEmployeeToken);
        setVehicleYear(response.vehicle.vehicle_year || "");
        setVehicleMake(response.vehicle.vehicle_make || "");
        setVehicleModel(response.vehicle.vehicle_model || "");
        setVehicleType(response.vehicle.vehicle_type || "");
        setVehicleMileage(response.vehicle.vehicle_mileage || "");
        console.log(response.vehicle);
      } catch (error) {
        console.error("Error fetching vehicle:", error.message);
      }
    };
    fetchVehicle();
  }, [vehicleId, loggedInEmployeeToken]);

  const handleUpdateVehicle = async (e) => {
    e.preventDefault();

    const formData = {
      vehicle_year: vehicleYear,
      vehicle_make: vehicleMake,
      vehicle_model: vehicleModel,
      vehicle_type: vehicleType,
      vehicle_mileage: vehicleMileage,
    };

    console.log(formData);

    try {
      const response = await VEHICLE.updateVehicle(vehicleId, formData, loggedInEmployeeToken);
      console.log("Vehicle updated successfully:", response);
      navigate("/admin/vehicles");
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
                  type="number"
                  name="vehicle_mileage"
                  placeholder="Vehicle Mileage"
                  value={vehicleMileage}
                  onChange={(e) => setVehicleMileage(e.target.value)}
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
