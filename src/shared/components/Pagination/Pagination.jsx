import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";
import { PaginationContainer } from "./Pagination.styled";

export const Pagination = ({ onPageChange, totalPets, currentPage }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px, max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1279px)" });

  const marginPages = isMobile ? 1 : 2;
  const perPage = (isMobile && 11) || (isTablet && 10) || (isDesktop && 12);

  const pageCount = Math.ceil(totalPets / perPage);

  const handlePageClick = (event) => {
    const selectedPage = event.selected * perPage;
    onPageChange(selectedPage);
  };

  if (totalPets <= perPage) {
    return null;
  }

  return (
    <PaginationContainer>
      <ReactPaginate
        breakLabel={"..."}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="←"
        nextLabel="→"
        pageRangeDisplayed={2}
        marginPagesDisplayed={marginPages}
        renderOnZeroPageCount={null}
        activeClassName="active"
        activeLinkClassName="active"
        previousClassName={currentPage === 0 ? "previous disabled" : "previous"}
        nextClassName={currentPage === pageCount ? "next disabled" : "next"}
      />
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  totalPets: PropTypes.number,
};
