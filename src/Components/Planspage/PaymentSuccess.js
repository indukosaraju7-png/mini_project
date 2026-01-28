import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    const plan = query.get("plan");

    useEffect(() => {
        fetch("http://localhost:5000/api/members/activate-plan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ plan }),
        }).then(() => {
            navigate("/memberdashboard");
        });
    }, []);

    return <h1>Payment Successful 🎉 Activating your plan...</h1>;
};

export default PaymentSuccess;
