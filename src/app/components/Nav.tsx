import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full flex items-center justify-between px-20 py-5 font-semibold font-rubik text-lg">
      <img src="/logo.png" alt="logo" />
      <ul className="flex gap-6">
        <Link href="#" className="hover:text-orange">Home</Link>
        <Link href="#" className="hover:text-orange">Services</Link>
        <Link href="#" className="hover:text-orange">About</Link>
        <Link href="#" className="hover:text-orange">Resources</Link>
        <Link href="#" className="hover:text-orange">Blog</Link>
      </ul>
      <button className="inline-flex justify-center items-center bg-orange text-white px-4 py-4 rounded-2xl">
        Sign Up
      </button>
    </div>
  );
};

export default Nav;
