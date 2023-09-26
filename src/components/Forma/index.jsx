import React from 'react';
import { useFormik } from 'formik';
    
const Form = () => {

    const API_link = 'http://api.kspi.uz/v1/yangilik/yangilik/'
    const API_token = '_HCnxPew6Lken00smp3bJOPBuQc3-HbA'
    let a = []

    const handleDownload = async () => {
        fetch(API_link, {
            method: 'GET',
            mode: 'no-cors',
        }).then(res => a.push(res, console.log(a))).catch(err => console.log('Xatolik:', err)) 
        

        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", "Bearer " + API_token, 'X-CSRFToken', '1s9fLegvrMFlprSKpwJ438ReCXFa0gQ4zAsx1wuLtIWxyMgERU3iQWkiN5rwzk9g');

        // var requestOptions = {
        //     method: "GET",
        //     mode: "no-cors",
        //     headers: myHeaders,
        //     redirect: "follow"
        // };

        // const res = await fetch(API_link, requestOptions).catch(console.log("error"));
        // const data = await res.json();

    };

    const formik = useFormik({
        initialValues: {
        title: '',
        body: '',
        // rasm: '',
        },
        onSubmit: values => {

        },
        
    });

        return (
            <form className='flex flex-col justify-center' onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                <label htmlFor="body">body</label>
                <input
                    id="body"
                    name="body"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.body}
                />
                {/* <label htmlFor="rasm">Rasim joylash</label>
                <input
                    id="rasm"
                    name="rasm"
                    type="file"
                    onChange={formik.handleChange}
                    value={formik.values.rasm}
                /> */}
            
                <button type="submit">Submit</button>
                <button onClick={()=> handleDownload()}>Download</button>
            </form>
        );
}
export default Form;