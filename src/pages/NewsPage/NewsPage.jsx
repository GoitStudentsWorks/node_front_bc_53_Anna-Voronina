import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ListNews from "../../modules/news/components/ListNews/ListNews";
import { Searchbar } from "../../shared/components/Searchbar/Searchbar";
import { Container } from "../../shared/components/Container/Container";
import {
  fetchNewsBySearchThunk,
  fetchNewsThunk,
} from "../../redux/global/globalOperations";
import {
  selectNewsSort,
  selectorIsLoading,
} from "../../redux/global/globalSelectors";
import { Loader } from "../../shared/components/Loader/Loader";
import { Pagination } from "../../shared/components/Pagination/Pagination";
import { PageTitle } from "../../shared/components/PageTitle/PageTitle";

const NewsPage = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const newsSort = useSelector(selectNewsSort);

  useEffect(() => {
    const searchQuery = searchParams.get("search");

    if (searchQuery) {
      dispatch(fetchNewsBySearchThunk({ page, limit: 6, searchQuery }));
    } else {
      dispatch(fetchNewsThunk({ page, limit: 6 }));
    }
  }, [dispatch, page, searchParams]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Container>
      <PageTitle title="News" />
      <Searchbar page="news" />
      {isLoading ? <Loader /> : <ListNews newsSort={newsSort?.data} />}
      <Pagination
        onPageChange={handlePageChange}
        currentPage={page}
        perPage={6}
        totalItems={newsSort?.total}
        variant={isLoading ? "hidden" : "visible"}
      />
    </Container>
  );
};

export default NewsPage;
