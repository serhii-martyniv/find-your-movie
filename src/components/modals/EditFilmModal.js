import React from "react"
import { useFormik } from "formik"

export default (props) => {
    const validate = values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        } else if (values.title.length > 15) {
          errors.title = 'Must be 15 characters or less';
        }
      
        if (!values.url) {
          errors.url = 'Required';
        } else if (!values.url.startsWith('/')) {
          errors.url = 'The url mast start with /';
        }
      
        return errors;
      };
    const formik = useFormik({
        initialValues: {
            title:  '',
            year:  '',
            genre:  '',
            overview:  '',
            runtime:  '',
        },
        validate,
        onSubmit: values => {
            props.onUpdateMovie(values);
        }
    
    });
    return (
        <>
            <h1>Edit movie</h1>
            <form onSubmit={formik.handleSubmit}>
                    {formik.errors.title ? <div>{formik.errors.title}</div> : null}
                    <label htmlFor="edit-title">
                        Title
                        <input id="edit-title" name="title" value={formik.values.title} onChange={formik.handleChange}/>
                    </label>

                    <label htmlFor="year">
                        release date
                        <input id="edit-year" type="date" name="year" value={formik.values.year} onChange={formik.handleChange}/>
                    </label>
                    {formik.errors.url ? <div>{formik.errors.url}</div> : null}
                    <label htmlFor="edit-url">
                        movie url
                        <input id="edit-url" name="url" value={formik.values.url} onChange={formik.handleChange}/>
                    </label>

                    <label htmlFor="edit-genre">
                        genre
                        <select id="edit-genre" value={formik.values.genre} name="genre" onChange={formik.handleChange}>
                            <option>Select genre</option>
                            <option>comedy</option>
                        </select>
                    </label>

                    <label htmlFor="edit-overview">
                        Overview
                        <input id="edit-overview" name="overview" value={formik.values.overview} placeholder="Overview here" onChange={formik.handleChange}/>
                    </label>
                    <label htmlFor="edit-runtime">
                        Runtime
                        <input id="edit-runtime" name="runtime" value={formik.values.runtime} placeholder="Runtime here" onChange={formik.handleChange}/>
                    </label>

                    <div className="actions">
                        <a className="reset">Reset</a>
                        <button className="save" type="submit">Submit</button>
                    </div>

                </form>

        </>
    )
}