import Footer from "./components/Footer";
import Header from "./components/Header";

export interface LayoutProps {
  children: React.ReactChild | React.ReactChild[];
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
