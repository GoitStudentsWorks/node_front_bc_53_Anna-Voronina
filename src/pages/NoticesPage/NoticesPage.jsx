import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardList from "../../modules/Notices/CardList/ProductCardList";
import { Container } from "../../shared/components/Container/Container";
import { fetchNoticesByCategoryThunk } from "../../redux/notices/noticesOperations";
import { selectNotices } from "../../redux/notices/noticesSelectors";

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);

  useEffect(() => {
    dispatch(fetchNoticesByCategoryThunk("sell"));
  }, [dispatch]);

  return (
    <Container>
      {/* <NoticesFilters /> */}
      <ProductCardList notices={notices?.data} />
    </Container>
  );
};

export default NoticesPage;
