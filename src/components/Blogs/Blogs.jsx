import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from 'prop-types';

export default function Blogs({ handleClickAddToBookmark ,handleClickSpentTime}) {

    const [Blogs, setblogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
           

            {
                Blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleClickAddToBookmark={handleClickAddToBookmark}
                    handleClickSpentTime={handleClickSpentTime}
                ></Blog>)
            }

        </div>
    )
}

Blogs.propTypes = {
    handleClickAddToBookmark: PropTypes.func.isRequired,
    handleClickSpentTime: PropTypes.func.isRequired
}
