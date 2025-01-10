// Import from the env
const api_url = import.meta.env.VITE_API_URL;
//A function to add a new vehicle
const addVehicle = async (data, token) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(`${api_url}/api/vehicle`, requestOptions);
    return response;
}
//A function to send get request to get all  vehicles for customer
const getSingleVehicle = async (customer_hash,token) => {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        "x-access-token": token
    };
    const response = await fetch(
        `${api_url}/api/vehicle/single/${customer_hash}`,
        requestOptions
    );
    return response;
}


  // function to get single vehicle  for a single vehicle 
  const getVehicleById = async (vehicle_id) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${api_url}/api/vehicle/${vehicle_id}`, requestOptions);
    return response;
  };


  // A function to update a vehicle info
  const updateVehicle = async (vehicleId, formData, loggedInEmployeeToken) => {
    const response = await fetch(`${api_url}/api/vehicle/${vehicleId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": loggedInEmployeeToken, // Ensure token is included
      },
      body: JSON.stringify(formData), // Convert data to JSON
    });
    
    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    } else {
      const errorText = await response.text();
      throw new Error(`Unexpected response format: ${errorText}`);
    }
  };
  
const vehicleService = {getSingleVehicle,addVehicle,getVehicleById,updateVehicle};
export default vehicleService;