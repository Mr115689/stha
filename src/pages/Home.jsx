import React from 'react'
import { useGetCocktailByCategoryQuery } from '../redux/cocktailApi'

const Home = () => {

  const { isError, isLoading, isFetching, data, error } = useGetCocktailByCategoryQuery('Cocktail');




  if (isLoading) {
    return <h1>Loading....</h1>
  }

  console.log(data);



  return (
    <div>
      <h1>hello jee</h1>

    </div>
  )
}

export default Home