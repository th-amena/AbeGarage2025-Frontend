// Import from the env
const api_url = import.meta.env.VITE_API_URL;
// A function to send post request to create a new employee
const createEmployee = async (formData, loggedInEmployeeToken) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
    body: JSON.stringify(formData),
  };
  console.log(requestOptions);
  const response = await fetch(`${api_url}/api/admin/employee`, requestOptions);
  return response;
};

const getSingleEmployee = async(uuid, loggedInEmployeeToken) => {

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
}
console.log(loggedInEmployeeToken)
const response = await fetch(`${api_url}/api/employee/${uuid}`, requestOptions);
return response;
}

// updat must be done here 


// Export all the functions
const employeeService = {
  createEmployee,
  getSingleEmployee
};
export default employeeService;
