import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-10 bg-(--c1)'>
      <h1 className='font-medium text-2xl'>
        <Link to='/'>Media Search</Link>
      </h1>
      <div className='flex gap-5 items-center'>
        <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c3) rounded px-4 py-2' to="/">Search</Link>
        <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c3) rounded px-4 py-2' to="/collection">Collection</Link>
      </div>
    </div>
  );
};
export default Navbar;
