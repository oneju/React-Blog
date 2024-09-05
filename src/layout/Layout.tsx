import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <article className="container mx-auto px-5">
        <div className="mx-auto max-w-[1100px]">
          {/* 헤더 영역 */}
          <header className="flex items-center justify-between py-[54px]">
            <nav>
              <ul className="flex gap-5 text-lg text-[#605C59]">
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
                <li>
                  <Link to="/signup">signup</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="min-h-[calc(100vh)]">
            <Outlet />
          </main>
        </div>
      </article>
      <footer className="bg-[#F5F5F5] py-[36px]">
        <div className="container mx-auto flex flex-col items-center justify-end">
          <nav className="mb-[26px] flex gap-[25px] text-sm text-[#544B44]">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/login">login</a>
            </li>
            <li>
              <a href="/signup">signup</a>
            </li>
          </nav>
        </div>
      </footer>
    </>
  );
};
export default Layout;
