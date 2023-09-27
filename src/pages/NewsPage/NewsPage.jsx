import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListNews from "../../modules/news/components/ListNews/ListNews";
import { Searchbar } from "../../shared/components/Searchbar/Searchbar";
import { Container } from "../../shared/components/Container/Container";
import { fetchNewsThunk } from "../../redux/global/globalOperations";
import { Title } from "./NewsPage.styled";

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsThunk({ page: 1, limit: 6 }));
  }, [dispatch]);

  return (
    <Container>
      <Title>News</Title>
      <Searchbar />
      <ListNews />
    </Container>
  );
};

export default NewsPage;
