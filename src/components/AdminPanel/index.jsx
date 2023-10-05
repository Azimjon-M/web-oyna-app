import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
    //  Talim turi Get Data value
    const [isData, setIsData] = useState(null);

    // Talim turi Link
    const urlTalimTur = "http://api.kspi.uz/v1/jadval/talim_turi/";

    //  Talim Turi Post
    const formik = useFormik({
        initialValues: {
            talim_turi: "",
        },
        onSubmit: (values) => {
            // axios({
            //     method: "POST",
            //     mode: 'no-cors',
            //     headers: {
            //         "Content-Type": "application/json",
            //         // 'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     url: urlTalimTur,
            //     data: values,
            // });
            fetch(urlTalimTur, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(values)
            })
        },
    });

    const handleUpdate = async () => {
        // axios({
        //     method: "get",
        //     url: urlTalimTur,
        //     responseType: "stream",
        // })
        //     .then(res => {
        //         setIsData(res)
        //     })
        //     .catch(res => console.log(res));
        await fetch(urlTalimTur, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, *cors, same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            // headers: {
            //     "Content-Type": "application/json",
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            // redirect: "follow", // manual, *follow, error
            // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
            .then((res) => console.log(res.body))
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex">
            <div className="w-[50%]">
                <div>Data: {isData}</div>
                <button className="border" type="button" onClick={handleUpdate}>
                    Yangilash
                </button>
            </div>
            <div className="w-[50%]">
                <h1>TA'LIM TURI</h1>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="talim_turi">
                        <input
                            className="border"
                            id="talim_turi"
                            name="talim_turi"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.talim_turi}
                        />
                    </label>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default AdminPanel;
