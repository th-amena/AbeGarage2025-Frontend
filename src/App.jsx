import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Markup/Pages/Home/Home";
import Login from "./Markup/Pages/Login/Login";
import AddEmployee from "./Markup/Pages/Admin/Employee/AddEmployee/AddEmployee";

import EmployeesList from "./Markup/Pages/Admin/Employee/EmployeeList/EmployeeList";

import EmployeesList from "./Markup/Pages/Admin/Employee/EmployeeList/EmployeeList"
import AddCustomer from "./Markup/Pages/Admin/Customer/addCustomer/addCustomer";

import Admin from "./Markup/Pages/Admin/AdminDashboard/Admin";
import EmployeeUpdate from "./Markup/Pages/Admin/Employee/EmployeeUpdate/EmployeeUpdate";
import Contact from "./Markup/Pages/Contact Us/Contact";
import About from "./Markup/Pages/About/About";
import NewOrders from "./Markup/Pages/Admin/NewOrders/NewOrders";
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";
//Import the custom css
import "./assets/styles/custom.css";
import PrivateAuthRoute from "./Markup/Components/Auth/PrivateAuthRoute";
import Unauthorized from "./Markup/Pages/Unauthorized";

import Services from "./Markup/Pages/Admin/Services/Services";
import { Edit } from "@mui/icons-material";
import EditServices from "./Markup/Pages/Admin/EditServices/EditServices";

import EditCustomer from "./Markup/Pages/Admin/Customer/EditCustomer/EditCustomer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/employees"
          element={
            <PrivateAuthRoute roles={[3]}>
              <EmployeesList />
            </PrivateAuthRoute>
          }
        />


        {/* Dashboard page route */}

           {/* Dashboard page route */}
           {/* <Route path="/admin" element={<Admin />} /> */}
           <Route
              path="/admin"
              element={
                 <PrivateAuthRoute roles={[3]}>
                    <Admin />
                 </PrivateAuthRoute>
              }
           />
           <Route
              path="/admin/employee-update/:uuid"
              element={
                 <PrivateAuthRoute roles={[3]}>
                    <EmployeeUpdate />
                 </PrivateAuthRoute>
              }
           />

            {/* for editing customer list , can be removed later */}
            <Route
              path="/admin/customer-update/:customer_hash"
              element={
                 <PrivateAuthRoute roles={[3]}>
                    <EditCustomer />
                 </PrivateAuthRoute>
              }
           />

           <Route
              path="/admin/order"
              element={
                 <PrivateAuthRoute roles={[1, 2, 3]}>
                    <NewOrders />
                 </PrivateAuthRoute>
              }
           />
           <Route path="/Contact" element={<Contact />} />
        </Routes>
     </>
        {/* Dashboard page route */}
        <Route
          path="/admin/add-customer"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddCustomer/>
            </PrivateAuthRoute>
          }
        />

        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route
          path="/admin"
          element={
            <PrivateAuthRoute roles={[3]}>
              <Admin />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/employee-update/:uuid"
          element={
            <PrivateAuthRoute roles={[3]}>
              <EmployeeUpdate />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/order"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <NewOrders />
            </PrivateAuthRoute>
          }
        />
        <Route path="/Contact" element={<Contact />} />

        {/* Services page routes start Here */}
        <Route path="/admin/services" element={<Services />} />
        <Route
          path={`/admin/services/service-update/:id`}
          element={<EditServices />}
        />
        {/* Services page routes end Here */}

      </Routes>
    </>
  );
}

export default App;
