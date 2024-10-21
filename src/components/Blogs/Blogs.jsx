import { useEffect } from "react"
import { useState } from "react"

export default function Blogs() {

    const [Blogs, setblogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])
    return (
        <div>Blogs</div>
    )
}
