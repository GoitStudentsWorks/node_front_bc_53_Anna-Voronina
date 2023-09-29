import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListNews from "../../modules/news/components/ListNews/ListNews";
import { Searchbar } from "../../shared/components/Searchbar/Searchbar";
import { Container } from "../../shared/components/Container/Container";
import {
  fetchNewsBySearchThunk,
  fetchNewsThunk,
} from "../../redux/global/globalOperations";
import { Title } from "./NewsPage.styled";
import {
  selectNewsSort,
  selectorIsLoading,
} from "../../redux/global/globalSelectors";
import { Loader } from "../../shared/components/Loader/Loader";
import { Pagination } from "../../shared/components/Pagination/Pagination";

const NewsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const newsSort = useSelector(selectNewsSort);
  const [page, setPage] = useState(1);
  console.log(newsSort);

  useEffect(() => {
    dispatch(fetchNewsThunk({ page, limit: 6 }));
  }, [dispatch, page]);

  const handleSubmit = (value) => {
    dispatch(fetchNewsBySearchThunk(value));
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Container>
      <Title>News</Title>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ListNews newsSort={newsSort} />
          <Pagination
            onPageChange={handlePageChange}
            currentPage={page}
            perPage={6}
            totalItems={100}
          />
        </>
      )}
    </Container>
  );
};

export default NewsPage;
