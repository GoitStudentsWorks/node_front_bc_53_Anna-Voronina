import ListNews from "../../modules/news/components/ListNews/ListNews";
import { Title } from "./NewsPage.styled";
import { Searchbar } from "../../shared/components/Searchbar/Searchbar";
import { Container } from "../../shared/components/Container/Container";

const NewsPage = () => {
  return (
    <Container>
      <Title>News</Title>
      <Searchbar />
      <ListNews />
    </Container>
  );
};

export default NewsPage;
