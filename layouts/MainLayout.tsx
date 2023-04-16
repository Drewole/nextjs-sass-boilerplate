import Header from '@modules/Header';
import Footer from '@modules/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div id="main-wrapper">{children}</div>
      <Footer />
    </>
  );
}
