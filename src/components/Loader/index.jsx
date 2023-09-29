import './style.css'
import { MetroSpinner } from "react-spinners-kit";

const Loader = () => {
    return (
        <>
            <div className="spinnerContainer">
                <div className="spinner">
                    <MetroSpinner size={80} color="white"/>
                </div>
            </div>
        </>
    );
}

export default Loader;