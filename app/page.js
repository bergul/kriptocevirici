import React from 'react'
import Header from './components/Header'
import Converter from './components/Converter'
import Footer from './components/Footer'
import Table from './components/Table'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow" style={{ marginTop: '20px', marginBottom: '10px' }}>
        <Converter />
        <Table />
      </main>
      <Footer />
    </div>
  )
}

export default Home