
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const [spentTime, setSpentTime] = useState(0);

  const handleClickSpentTime = time => {
    const newReadingTIme = spentTime + time;
    setSpentTime(newReadingTIme)
  }

  const handleClickAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex w-11/12 mx-auto mt-8'>
        <Blogs handleClickAddToBookmark={handleClickAddToBookmark} handleClickSpentTime={handleClickSpentTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} spentTime={spentTime}></Bookmarks>
      </div>


    </>
  )
}

export default App
