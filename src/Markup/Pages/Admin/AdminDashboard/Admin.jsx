import React from "react";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <div className={styles.section}>
        <h2>Orders</h2>
        <p>Total Orders: 150</p>
        <p>Pending: 20 | Completed: 130</p>
        <a href="/admin/orders">View Details</a>
        <a href="/admin/orders/add">Add Order</a>
      </div>
      <div className={styles.section}>
        <h2>Employees</h2>
        <p>Total Employees: 35</p>
        <a href="/admin/employees">Manage Employees</a>
        <a href="/admin/employees/add">Add Employee</a>
      </div>
      <div className={styles.section}>
        <h2>Services</h2>
        <p>Key Services: Service A, Service B, Service C</p>
        <a href="/admin/services">View All Services</a>
      </div>
    </div>
  );
};

export default AdminDashboard;