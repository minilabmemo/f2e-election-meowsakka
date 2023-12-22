function NavLink({ href, text, animate }: { href: string; text: string; animate: boolean }) {
  return (
    <>
      {animate ? (
        <li className="group mx-5">
          <a href={href} >{text}</a>
          <div className=" w-0 group-hover:w-full transition-[width] duration-1000 ease-in-out bg-red-100 h-[5px] ">
          </div>
        </li>
      ) : (
        <li className="mx-5">
          <a href={href} >{text}</a>
        </li>

      )}
    </>
  );
}

export default NavLink;