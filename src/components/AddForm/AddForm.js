import React from "react";
import { Formik } from "formik";
import s from './AddForm.module.scss';
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const AddForm = () => {

    return (
        <>
        <Formik
        initialValues={{ imageUrl: '', name: '', count: '', width: '', height:'', weight: '', comment: '' }}
        validate={values => {
          const errors = {};

          if (!values.imageUrl) {
            errors.imageUrl = "This field is required";
          }
          if (!values.name) {
            errors.name = "This field is required";
          } else if (
            !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.name)
          ) {
            errors.email = "This field requires letter only";
          }
          if (!values.count) {
            errors.count = "This field is required";
          } else if (
            !/^[ 0-9]+$/i.test(values.count)
          ) {
            errors.count = "This field requires numbers only";
          }
          if (!values.width) {
            errors.width = "This field is required";
          } else if (
            !/^[ 0-9]+$/i.test(values.width)
          ) {
            errors.width = "This field requires numbers only";
          }
          if (!values.height) {
            errors.height = "This field is required";
          } else if (
            !/^[ 0-9]+$/i.test(values.height)
          ) {
            errors.height = "This field requires numbers only";
          }
          if (!values.weight) {
            errors.weight = "This field is required";
          } else if (
            !/^[ 0-9]+$/i.test(values.weight)
          ) {
            errors.weight = "This field requires numbers only";
          }
          if(!values.comment) {
            errors.comment = "This field is required";
          }
          return errors;
        }}
        

        onSubmit={({ imageUrl, name, count, width, height, weight, comment}, { resetForm }) => {

            const newProduct = {
                id: nanoid(),
                imageUrl,
                name,
                count,
                width,
                height,
                weight,
                comment
            }

            fetch('http://localhost:8000/products',{
                method:'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(newProduct)
            }).then(()=> {
              console.log(newProduct);
              toast.success("Your product was successfully added. Please, reload your page");
            })
            resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <h2>Please, add your new product</h2>
              <div className={s.inputBox}>
                <input
                  className={s.input}
                  type="imageUrl"
                  name="imageUrl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.imageUrl}
                  placeholder="Product URL"
                />
                {errors.imageUrl && touched.imageUrl && (
                  <div className={s.errorMessage} style={{ fontSize: 12}}>{errors.imageUrl}</div>
                )}
              </div>
              <div className={s.inputBox}>
                <input
                  className={s.input}
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Name"
                />
                {errors.name && touched.name && (
                  <div className={s.errorMessage} style={{ fontSize: 12}}>{errors.name}</div>
                )}
              </div>
              <div className={s.inputBox}>
                <input
                  className={s.input}
                  type="count"
                  name="count"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.count}
                  placeholder="Count"
                />
                {errors.count && touched.count && (
                  <div className={s.errorMessage} style={{ fontSize: 12}}>{errors.count}</div>
                )}
              </div>
              <div className={s.inputBox}>
                <input
                  className={s.input}
                  type="width"
                  name="width"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.width}
                  placeholder="Width"
                />
                {errors.width && touched.width && (
                  <div className={s.errorMessage} style={{ fontSize: 12}}>{errors.width}</div>
                )}
              </div>
              <div className={s.inputBox}>
                <input
                  className={s.input}
                  type="height"
                  name="height"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.height}
                  placeholder="Height"
                />
                {errors.height && touched.height && (
                  <div className={s.errorMessage} style={{ fontSize: 12}}>{errors.height}</div>
                )}
              </div>
              <div className={s.inputBox}>
                <input
                  className={s.input}
                  type="weight"
                  name="weight"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weight}
                  placeholder="Weight"
                />
                {errors.weight && touched.weight && (
                  <div className={s.errorMessage} style={{ fontSize: 12}}>{errors.weight}</div>
                )}
              </div>
              <div className={s.inputBox}>
                <input
                  className={s.input}
                  type="comment"
                  name="comment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                  placeholder="Comment"
                />
                {errors.comment && touched.comment && (
                  <div className={s.errorMessage} style={{ fontSize: 12}}>{errors.comment}</div>
                )}
              </div>
                <div>
                <button className={s.button} type="submit" name="button">
               Add Product
              </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
        </>
    )
}

export default AddForm;
