import React, { useEffect } from "react";
import "./style.css";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/index";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        let getMonth = new Date().getMonth() + 1;

        if (getMonth === 1 || getMonth === 2 || getMonth === 12) {
            dispatch({ type: "SET_DATA", payload: "qish" });
        } else if (getMonth >= 3 && getMonth <= 5) {
            dispatch({ type: "SET_DATA", payload: "bahor" });
        } else if (getMonth >= 6 && getMonth <= 8) {
            dispatch({ type: "SET_DATA", payload: "yoz" });
        } else if (getMonth >= 9 && getMonth <= 11) {
            dispatch({ type: "SET_DATA", payload: "kuz" });
        } else {
            dispatch({ type: "SET_DATA", payload: "yoz" });
        }
    }, [dispatch]);
    const content = useRoutes(routes);

    return <div className="overflow-y-auto style-owerflow-001">{content}</div>;
}

export default App;
