import ProductCardList from '../../modules/Notices/CardList/ProductCardList';
import { FIlter } from '../../modules/filter/components/Filter/Filter';
import { Container } from '../../shared/components/Container/Container';

const NoticesPage = () => {
  return (
    <Container>
      <FIlter />
      <ProductCardList />
    </Container>
  );
};

export default NoticesPage;
