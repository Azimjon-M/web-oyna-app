import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import AdminYangilik from "./Yangiliklar";

const AdminPanel = () => {
    //  Talim turi Get Data value
    const [isData, setIsData] = useState(null);

    // Talim turi Link
    const urlTalimTur = "http://api.kspi.uz/v1/yangilik/yangilik/";

    //  Talim Turi Post
    const formik = useFormik({
        initialValues: {
            title: "",
            body: ''
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
        let data = await axios.get('https://api.kspi.uz/v1/yangilik/yangilik/')
            console.log(data);
        // await fetch(urlTalimTur, {
        //     method: "GET", // *GET, POST, PUT, DELETE, etc.
        //     mode: "no-cors", // no-cors, *cors, same-origin
        //     // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     // credentials: "same-origin", // include, *same-origin, omit
        //     // headers: {
        //     //     "Content-Type": "application/json",
        //     //     // 'Content-Type': 'application/x-www-form-urlencoded',
        //     // },
        //     // redirect: "follow", // manual, *follow, error
        //     // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     // body: JSON.stringify(data), // body data type must match "Content-Type" header
        // })
        //     .then(res => JSON.stringify(res))
        //     .then(json => console.log(json))
        //     .catch((err) => console.log(err));
    };

    return (
        <div>
            <AdminYangilik />
            {/* <div className="w-[50%]">
                <div>Data: {isData}</div>
                <button className="border" type="button" onClick={handleUpdate}>
                    Yangilash
                </button>
            </div>
            <div className="w-[50%]">
                <h1>TA'LIM TURI</h1>
                <form action={urlTalimTur} method="POST" >
                    <label htmlFor="title">
                        <input
                            className="border"
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </label>
                    <label htmlFor="body">
                        <input
                            className="border"
                            id="body"
                            name="body"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.body}
                        />
                    </label>
                    <button type="submit">SUBMIT</button>
                </form>
            </div> */}
        </div>
    );
};

export default AdminPanel;
