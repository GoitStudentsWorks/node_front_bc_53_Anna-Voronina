import ProductCardList from '../../modules/Notices/CardList/ProductCardList';
import { NoticesFilters } from '../../modules/filter/components/NoticesFilters/NoticesFilters';

import { Container } from '../../shared/components/Container/Container';

const NoticesPage = () => {
  return (
    <Container>
      <NoticesFilters />
      <ProductCardList />
    </Container>
  );
};

export default NoticesPage;
