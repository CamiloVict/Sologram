// *Component
import { FooterNav } from '../FooterNav/FooterNav';
import { NavHeader } from '../NavHeader/NavHeader'

function Layout(props: any) {
  const children = props.children;

  return (
    <>
      <NavHeader />
      {children}
      <FooterNav />
    </>
  );
}

export default Layout;
