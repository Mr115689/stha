import { Button, Input, Option, Select } from '@material-tailwind/react';
import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'

const Home = () => {




  const [data, setData] = useState();
  const [category, setCategory] = useState('beauty');
  const [err, setErr] = useState();


  const getData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
      setData(response.data);

      console.log(response.data);
    } catch (err) {

      setErr(err.message);

    }

  }


  useEffect(() => {
    getData();

  }, [category]);




  if (err) {
    return <h1>{err}</h1>
  }


  return (
    <div className='p-10 max-w-[400px]'>

      <Formik

        initialValues={{
          category: ''
        }}
        onSubmit={(val, { resetForm }) => {
          setCategory(() => val.category);
          resetForm();
        }}

      >

        {({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
          <form onSubmit={handleSubmit} className='grid grid-cols-3 gap-4'>
            <div className='col-span-2'>

              <Select
                name='category'
                onChange={(e) => setCategory(e)}
                label='select category'>
                {categories.map((cata, i) => {
                  return <Option key={i} value={cata}>{cata}</Option>
                })}
              </Select>


              {/* <Input

                name='category'
                onChange={handleChange}
                value={values.category}
                label='category search' /> */}
            </div>

            <Button type='submit' variant='filled'>Submit</Button>

          </form>
        )}
      </Formik>

      {data && data.products.map((product) => {
        return <div key={product.id}>
          <img src={product.thumbnail} alt="" />
          <h1>{product.title}</h1>
          <p>{product.descriptioon}</p>

        </div>
      })}




    </div>
  )
}

export default Home



const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
];