import { MetroSpinner } from "react-spinners-kit";
import './style.css'

const Loader = () => {
    return (
        <>
            <div className="spinnerContainer w-[100%] h-[100%] absolute t-0 bg-#aaa flex items-center justify-center rounded-xl">
                <div className="spinner">
                    <MetroSpinner size={80} color="white"/>
                </div>
            </div>
        </>
    );
}

export default Loader;
