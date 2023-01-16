import Link from "next/link"

const Nav = ({ navData, header }) => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-[96px] m-4'>
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item
          return (
            <li key={idx}>
              <Link href={href}>
                <div
                  className={`${
                    header
                      ? " bg-blue-300 bg-opacity-40 rounded-full  p-2"
                      : " bg-gray-800 bg-opacity-40 rounded-full p-2 "
                  } cursor-pointer hover:text-accent-hover transition`}
                >
                  <a
                    className={`${
                      header ? " text-blue-400" : "text-white"
                    } cursor-pointer hover:text-accent-hover transition`}
                  >
                    {name}
                  </a>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
