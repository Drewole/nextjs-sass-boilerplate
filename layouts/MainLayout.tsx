import Header from '@modules/Header';
import Footer from '@modules/Footer';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div id="main-wrapper">{children}</div>
      <Footer />
    </>
  );
}
