import PropTypes from 'prop-types'


export default function Bookmark({bookmark}) {
    const {title}=bookmark
  return (
    <div className='bg-white rounded-md m-4 p-4'>
        <h3>{title}</h3>
    </div>
  )
}

Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired
}
