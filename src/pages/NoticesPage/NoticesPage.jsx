import { useEffect } from "react";
import ProductCardList from "../../modules/Notices/CardList/ProductCardList";
import { Container } from "../../shared/components/Container/Container";
import { useDispatch } from "react-redux";
import { fetchNoticesByCategoryThunk } from "../../redux/notices/noticesOperations";

const NoticesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNoticesByCategoryThunk("sell"));
  }, [dispatch]);

  return (
    <Container>
      <ProductCardList />
    </Container>
  );
};

export default NoticesPage;
