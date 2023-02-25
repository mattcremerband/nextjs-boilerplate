import Link from 'next/link';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/" legacyBehavior>
          <a className="hover:underline">Home</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
