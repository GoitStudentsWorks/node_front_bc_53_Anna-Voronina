// import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import OneNews from "../OneNews/OneNews";
import { ListNewsStyled, PlugStyled } from "./ListNews.styled";
// import { selectNewsSort } from "../../../../redux/global/globalSelectors";

const ListNews = ({ newsSort }) => {
  return (
    <>
      {newsSort.length === 0 ? (
        <PlugStyled>News are displayed here...</PlugStyled>
      ) : (
        <ListNewsStyled>
          {newsSort.map((item) => {
            return <OneNews key={item.id} {...item} />;
          })}
        </ListNewsStyled>
      )}
    </>
  );
};

ListNews.propTypes = {
  newsSort: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ListNews;
