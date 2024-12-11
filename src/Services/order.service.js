const api_url = import.meta.env.VITE_API_URL;

if (!api_url) {
  throw new Error(
    "API URL is not defined. Please check your environment variables."
  );
}

/**
 * Fetch all orders
 * Used for OrdersPage
 */
const getOrders = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${api_url}/api/orders`, requestOptions);
  const data = await response.json();
  // console.log(data);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch orders.");
  }

  return data; // Assuming the API returns an object with an orders array
};

export default {
  getOrders,
};
