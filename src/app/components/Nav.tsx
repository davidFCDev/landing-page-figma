import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 sm:px-20 py-3 sm:py-5 font-semibold font-rubik text-lg">
      <img src="/logo.png" alt="logo" className="w-20 sm:w-28" />
      <ul className="hidden sm:flex gap-3 sm:gap-6">
        <Link href="#" className="hover:text-orange">Home</Link>
        <Link href="#" className="hover:text-orange">Services</Link>
        <Link href="#" className="hover:text-orange">About</Link>
        <Link href="#" className="hover:text-orange">Resources</Link>
        <Link href="#" className="hover:text-orange">Blog</Link>
      </ul>
      <button className="inline-flex justify-center items-center bg-orange text-white px-4 py-2 sm:py-4 rounded-2xl hover:bg-orange2">
        Sign Up
      </button>
    </div>
  );
};

export default Nav;
