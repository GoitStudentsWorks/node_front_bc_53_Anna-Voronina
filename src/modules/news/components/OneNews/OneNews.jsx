import PropTypes from "prop-types";
import {
  Article,
  Img,
  BlockInfo,
  Title,
  Paragraph,
  DivStyled,
  Date,
  ReadMore,
} from "./OneNews.styled";
import formatDate from "../../helpers/formatDate";

const OneNews = ({ imgUrl, title, text, date, url }) => {
  return (
    <Article>
      <Img src={imgUrl} alt={title} />

      <BlockInfo>
        <div>
          <Title>{title}</Title>
          <Paragraph>{text}</Paragraph>
        </div>
        <DivStyled>
          <Date>{formatDate(date)}</Date>
          <ReadMore
            href={url}
            target="_blanck"
            rel="noopener noreferrer nofollow"
          >
            Read more
          </ReadMore>
        </DivStyled>
      </BlockInfo>
    </Article>
  );
};

OneNews.propTypes = {
  date: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default OneNews;
