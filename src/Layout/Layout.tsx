// *Component
import { FooterNav } from '../components/FooterNav/FooterNav';
import { NavHeader } from '../components/NavHeader/NavHeader'
import { Container } from './style'

function Layout(props: any) {
  const children = props.children;

  return (
    <>
      <NavHeader />
      <Container>
        {children}
      </Container>
      <FooterNav />
    </>
  );
}

export default Layout;
