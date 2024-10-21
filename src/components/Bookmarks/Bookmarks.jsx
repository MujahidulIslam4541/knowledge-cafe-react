import PropTypes from "prop-types"
import Bookmark from "../bookmark/Bookmark"



export default function Bookmarks({ bookmarks, spentTime }) {
  return (
    <div className="md:w-1/3 bg-gray-200 ml-8 rounded-lg p-4">
      <div>
        <h2 className="text-3xl mb-4 text-center bg-purple-200 border-2 border-purple-800 p-4 rounded-xl">Reading Time:{spentTime}</h2>
      </div>
      <h2 className="text-2xl text-center">Bookmarked Blogs:{bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  )
}
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  spentTime: PropTypes.number
}
