import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Productos from '../components/Productos';
import { categoriasFetch, productosFetch } from '../helper/fetchProductos';



export default function Home(props) {

  const  [categoria, setCategoria] = useState(props.data);



/*   useEffect(() => {
  traerArticulos()  
  }, []) */
  
  return (
    <>
      <Head>
        <title>catalogo</title>
      </Head>
      <Layout>
        <div className='container-fluid  background-catalogo '>
          <h2 className='text-center titulo-productos'>Nuestros Productos:</h2>
        { categoria.map(element => {
          
        return (
          <span key={element._id}>
          <Productos titulo={element.nombre} card={props.cards}/>
          </span>
        )
          })}   
        </div>
      </Layout>
    </>
  )
}

export  const getStaticProps = async () =>{
  return{
  props:{
    title: 'hola',
    data: await  categoriasFetch(),
    cards: await  productosFetch(),
  },
  };
}
