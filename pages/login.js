import React from 'react'
import Layout from './layout'
import Head from 'next/head'

const login = () => {
  return (
    <>
    <Head>
        <title>login</title>
    </Head>
    <Layout>
    <div className="text-center">Login</div>
    </Layout>
    </>
  )
}

export default login