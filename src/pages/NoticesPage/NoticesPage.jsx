import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { selectNotices } from "@/redux/notices/noticesSelectors";

import ProductCardList from "@/modules/Notices/CardList/ProductCardList";

import { Container } from "@/shared/components/Container/Container";
import { Searchbar } from "@/shared/components/Searchbar/Searchbar";
import { PageTitle } from "@/shared/components/PageTitle/PageTitle";
import { Pagination } from "@/shared/components/Pagination/Pagination";
import {
  fetchFavoriteNoticesThunk,
  fetchFilteredNoticesThunk,
  fetchOwnNoticesThunk,
} from "../../redux/notices/noticesOperations";
import { NoticesFilters } from "../../modules/filter/components/NoticesFilters/NoticesFilters";
import {
  selectAgeFilters,
  selectSexFilters,
  selectorIsLoading,
} from "../../redux/global/globalSelectors";
import { selectLoggedIn } from "../../redux/auth/authSelectors";
import { Loader } from "../../shared/components/Loader/Loader";

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { category } = useParams();
  const notices = useSelector(selectNotices);
  const ageFilters = useSelector(selectAgeFilters);
  const sexFilters = useSelector(selectSexFilters);
  const isLoggedIn = useSelector(selectLoggedIn);
  const isLoading = useSelector(selectorIsLoading);

  const age = searchParams.get("age");
  const sex = searchParams.get("sex");

  useEffect(() => {
    const newSearchParams = new URLSearchParams();

    ageFilters.forEach((ageFilter) => {
      newSearchParams.append("age", ageFilter);
    });

    sexFilters.forEach((sexFilter) => {
      newSearchParams.append("sex", sexFilter);
    });

    setSearchParams(newSearchParams);

    if (isLoggedIn && category === "favorite") {
      dispatch(
        fetchFavoriteNoticesThunk({
          page,
          limit: 12,
          age: ageFilters,
          sex: sexFilters,
          searchQuery,
        })
      );
    } else if (isLoggedIn && category === "own") {
      dispatch(
        fetchOwnNoticesThunk({
          page,
          limit: 12,
          age: ageFilters,
          sex: sexFilters,
          searchQuery,
        })
      );
    } else {
      dispatch(
        fetchFilteredNoticesThunk({
          page,
          limit: 12,
          age: ageFilters,
          sex: sexFilters.join(","),
          category,
          searchQuery,
        })
      );
    }
  }, [
    ageFilters,
    category,
    dispatch,
    isLoggedIn,
    page,
    searchQuery,
    setSearchParams,
    sexFilters,
  ]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Container>
      <PageTitle title="Find your favorite pet" />
      <Searchbar onSubmit={setSearchQuery} />
      <NoticesFilters />
      {isLoading ? <Loader /> : <ProductCardList notices={notices?.data} />}
      <Pagination
        onPageChange={handlePageChange}
        currentPage={page}
        perPage={12}
        totalItems={notices?.total}
        variant={isLoading ? "hidden" : "visible"}
      />
    </Container>
  );
};

export default NoticesPage;
