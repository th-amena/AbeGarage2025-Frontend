const api_url = import.meta.env.VITE_API_URL;

if (!api_url) {
   throw new Error(
      "API URL is not defined. Please check your environment variables."
   );
}

// Function to fetch order details by ID
const getOrderById = async (order_hash) => {
   const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${api_url}/api/order/${order_hash}`,
    requestOptions
  );
  console.log(response);
  
  return response;

   if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch order details.");
   }


};

export default {
   getOrderById,
};
