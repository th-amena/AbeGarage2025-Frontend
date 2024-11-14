import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
//import from context
import getAuth from "../../Contexts/AuthContext"; 

const PrivateAuthRoute = ({ roles, children }) => { // corrected prop name for roles and children
    const [isChecked, setIsChecked] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const loggedInEmployee = await getAuth(); // async/await with getAuth()
            loggedInEmployee.then((response) => {
                if (response.employee_token) {
                    setIsLogged(true);
                    if (roles && roles.length > 0 && roles.includes(response.employee_token)) {
                        setIsAuthorized(true);
                    }
                }
                setIsChecked(true);
            });
        };
        checkAuth();
    }, [roles]); // closing brackets and parentheses

    if (!isChecked) {
        if (!isLogged) {
            return <Navigate to="/login" />;
        }
        if (!isAuthorized) {
            return <Navigate to="/unauthorized" />;
        }
    }

    return (
        <>
            {children}
        </>
    );
    }

export default PrivateAuthRoute; 
