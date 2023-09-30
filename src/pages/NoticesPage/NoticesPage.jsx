import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNoticesByCategoryThunk } from "@/redux/notices/noticesOperations";
import { selectNotices } from "@/redux/notices/noticesSelectors";
import { fetchNoticesBySearchThunk } from "@/redux/notices/noticesOperations";

import ProductCardList from "@/modules/Notices/CardList/ProductCardList";

import { Container } from "@/shared/components/Container/Container";
import { Searchbar } from "@/shared/components/Searchbar/Searchbar";
import { PageTitle } from "@/shared/components/PageTitle/PageTitle";
import { Pagination } from "@/shared/components/Pagination/Pagination";
import { fetchNoticesByCategoryAndSearchThunk } from "../../redux/notices/noticesOperations";
import { NoticesFilters } from "../../modules/filter/components/NoticesFilters/NoticesFilters";

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { category } = useParams();
  const notices = useSelector(selectNotices);

  useEffect(() => {
    dispatch(
      fetchNoticesByCategoryAndSearchThunk({
        page,
        limit: 12,
        category,
        searchQuery,
      })
    );
  }, [category, dispatch, page, searchQuery]);

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
