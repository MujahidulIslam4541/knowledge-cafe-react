import profile from '../../assets/images/profile.png'

export default function Header() {
  return (
    <header className='flex justify-between border-b-2 w-11/12 mx-auto p-2 items-center'>
        <h1 className='text-2xl font-bold text-red-500'>Knowledge Cafe</h1>
        <img src={profile} alt="" />
    </header>
  )
}
