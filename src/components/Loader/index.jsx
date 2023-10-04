import { MetroSpinner } from "react-spinners-kit";
import './style.css'

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
