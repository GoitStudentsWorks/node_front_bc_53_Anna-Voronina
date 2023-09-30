import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchNoticesByCategoryThunk } from "@/redux/notices/noticesOperations";
import { selectNotices } from "@/redux/notices/noticesSelectors";
import { fetchNoticesBySearchThunk } from "@/redux/notices/noticesOperations";

import ProductCardList from "@/modules/Notices/CardList/ProductCardList";

import { Container } from "@/shared/components/Container/Container";
import { Searchbar } from "@/shared/components/Searchbar/Searchbar";
import { PageTitle } from "@/shared/components/PageTitle/PageTitle";
import { Pagination } from "@/shared/components/Pagination/Pagination";
import {
  fetchFilteredNoticesThunk,
  fetchNoticesByCategoryAndSearchThunk,
} from "../../redux/notices/noticesOperations";
import { NoticesFilters } from "../../modules/filter/components/NoticesFilters/NoticesFilters";
import {
  selectAgeArray,
  selectSexArray,
} from "../../redux/notices/noticesSelectors";
import {
  selectAgeFilters,
  selectSexFilters,
} from "../../redux/global/globalSelectors";

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { category } = useParams();
  const notices = useSelector(selectNotices);
  const ageFilters = useSelector(selectAgeFilters);
  const sexFilters = useSelector(selectSexFilters);

  const age = searchParams.get("age");
  const sex = searchParams.get("sex");

  console.log(ageFilters);
  console.log(sexFilters);

  useEffect(() => {
    const newSearchParams = new URLSearchParams();

    ageFilters.forEach((ageFilter) => {
      newSearchParams.append("age", ageFilter);
    });

    sexFilters.forEach((sexFilter) => {
      newSearchParams.append("sex", sexFilter);
    });

    setSearchParams(newSearchParams);

    dispatch(
      fetchFilteredNoticesThunk({
        page,
        limit: 12,
        age: ageFilters.join(","),
        sex: sexFilters.join(","),
        category,
      })
    );
  }, [ageFilters, category, dispatch, page, setSearchParams, sexFilters]);

  // useEffect(() => {
  //   dispatch(
  //     fetchNoticesByCategoryAndSearchThunk({
  //       page,
  //       limit: 12,
  //       category,
  //       searchQuery,
  //     })
  //   );

  //   const params = filters.length ? { age: filters.join(",") } : {};

  //   setSearchParams(params);

  //   dispatch(
  //     fetchFilteredNoticesThunk({
  //       page,
  //       limit: 12,
  //       age: ageFilters.join(","),
  //       sex: sexFilters.join(","),
  //     })
  //   );
  // }, [age, ageFilters, category, dispatch, page, searchQuery, sex, sexFilters]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Container>
      <PageTitle title="Find your favorite pet" />
      <Searchbar onSubmit={setSearchQuery} />
      <NoticesFilters />
      <ProductCardList notices={notices?.data} />
      <Pagination
        onPageChange={handlePageChange}
        currentPage={page}
        perPage={12}
        totalItems={notices?.total}
      />
    </Container>
  );
};

export default NoticesPage;
