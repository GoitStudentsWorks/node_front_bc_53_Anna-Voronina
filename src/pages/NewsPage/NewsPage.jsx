import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListNews from "../../modules/news/components/ListNews/ListNews";
import { Searchbar } from "../../shared/components/Searchbar/Searchbar";
import { Container } from "../../shared/components/Container/Container";
import { fetchNewsThunk } from "../../redux/global/globalOperations";
import { Title } from "./NewsPage.styled";
import { selectorIsLoading } from "../../redux/global/globalSelectors";
import { Loader } from "../../shared/components/Loader/Loader";

const NewsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);

  useEffect(() => {
    dispatch(fetchNewsThunk({ page: 1, limit: 6 }));
  }, [dispatch]);

  return (
    <Container>
      <Title>News</Title>
      <Searchbar />
      {isLoading ? <Loader /> : <ListNews />}
    </Container>
  );
};

export default NewsPage;
