import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';


const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <Link to="/" className="flex items-center mx-3 py-3 transition hover:text-gray-700">
            <GoHome className="text-orange-400 text-2xl" />
            <span className="hidden md:inline-block ml-2 text-customBlue font-bold font-monserrart text-sm"> Home </span>
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
