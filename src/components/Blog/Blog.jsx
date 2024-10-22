import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

export default function Blog({ blog, handleClickAddToBookmark ,handleClickSpentTime}) {
    // console.log(blog)
    const {id, title, hashtag, cover, author_img, author_name, posted_date, reading_time } = blog
    return (
        <div className=''>
            <img className='rounded-xl mb-8' src={cover} alt={`Cover Picture off the title ${title}`} />
            <div className='flex justify-between items.center' >
                <div className='flex gap-4'>
                    <img className='w-14 h-12 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time}min read</span>
                    <button
                        onClick={() => handleClickAddToBookmark(blog)}
                        className='ml-2'
                    ><FaRegBookmark></FaRegBookmark>
                    </button>
                </div>
            </div>
            <div className='text-3xl mb-2'>{title}</div>
            <p>
                {hashtag.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)}
            </p>
            <button onClick={()=>handleClickSpentTime(id,reading_time)} className='text-purple-600 underline font-bold mb-4'>Mark As Read</button>
        </div>
    )
}


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleClickAddToBookmark: PropTypes.func.isRequired,
    handleClickSpentTime :PropTypes.func.isRequired,
}
