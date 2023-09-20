import React, {useEffect} from 'react'

const Admin = () => {

    useEffect(()=>{
      axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY")
      .then((res)=> {
        console.log(res);
      })
    }, [])
  return (
    <>
        <h1>Hello</h1>
    </>
  )
}

export default Admin