import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const PageLayout = ({ children, className = '' }) => {
  return (
    <div className="relative w-screen h-screen bg-[#F9FAFB] overflow-hidden font-sans">

      <Header />
      <Sidebar />

      {/* Main Content */}
      <main className={`absolute top-[60px] left-[240px] right-0 h-[calc(100%-120px)] overflow-y-auto p-8 ${className}`}>
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default PageLayout;
