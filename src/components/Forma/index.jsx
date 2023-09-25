import React from 'react';
import { useFormik } from 'formik';
    
const Form = () => {

        const formik = useFormik({
            initialValues: {
            title: '',
            body: '',
            rasm: '',
            },
            onSubmit: values => {
                fetch('http://api.kspi.uz/v1/yangilik/yangilik/', {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(values)
                })
                .then(result => console.log("to'g'ri:", result))
                .catch(error => console.log('error:', error));
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
                <label htmlFor="rasm">Rasim joylash</label>
                <input
                    id="rasm"
                    name="rasm"
                    type="file"
                    onChange={formik.handleChange}
                    value={formik.values.rasm}
                />
            
                <button type="submit">Submit</button>
            </form>
        );
}
export default Form;