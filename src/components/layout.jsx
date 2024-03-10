import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
    <header>
        <h2>React Nivelation</h2>
    </header>

    <main>
        { children}
    </main>

    <footer>
        &copy; Wilmer Triana - { new Date().getFullYear() }
    </footer>
    </>
  )
}

export default Layout