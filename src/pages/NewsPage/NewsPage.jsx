import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import ListNews from "@/modules/news/components/ListNews/ListNews";
import { Searchbar } from "@/shared/components/Searchbar/Searchbar";
import { Container } from "@/shared/components/Container/Container";
import { Loader } from "@/shared/components/Loader/Loader";
import { Pagination } from "@/shared/components/Pagination/Pagination";
import { PageTitle } from "@/shared/components/PageTitle/PageTitle";

import { fetchNewsBySearchThunk } from "@/redux/global/globalOperations";
import {
  selectNewsSort,
  selectorIsLoading,
} from "@/redux/global/globalSelectors";

const NewsPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const newsSort = useSelector(selectNewsSort);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(
      fetchNewsBySearchThunk({
        page,
        limit: 6,
        searchQuery: query,
      })
    )
      .unwrap()
      .catch((error) => toast.error(error));
  }, [dispatch, page, query]);

  const handleSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Container>
      <PageTitle title="News" />
      <Searchbar onSubmit={handleSubmit} />
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
