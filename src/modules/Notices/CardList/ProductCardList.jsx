import { useState } from "react";
import { useDispatch } from "react-redux";
import { transformAge } from "../helpers/transformAge.js";

import Button from "@/shared/components/Button/Button";
import { ModalProductCart } from "../popups/ModalProductCart";
import { fetchNoticeByIdThunk } from "@/redux/notices/noticesOperations.js";
import { transformTitle } from "../helpers/transformTitle.js";

import { PlugStyled } from "../../news/components/ListNews/ListNews.styled.js";
import {
  ProductList,
  ProductItem,
  PetCategory,
  FavoriteBtn,
  HeartIconPrimal,
  NoticesItemImg,
  ItemTitle,
  WrapperBtn,
  WrapperInformation,
  InformationMap,
  IconInformation,
  IconWrapper,
  ContentWrapper,
  WrapperLocation,
} from "./ProductCardList.styled";

import sprite from "@/shared/icons/sprite.svg";

const ProductCardList = ({ notices }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (id) => {
    setIsModalOpen(true);
    dispatch(fetchNoticeByIdThunk(id));
  };

  return (
    <>
      {notices?.length ? (
        <ProductList>
          {notices?.map(
            ({ category, age, _id, title, location, file, sex }) => (
              <ProductItem key={_id}>
                <IconWrapper>
                  <PetCategory>{category}</PetCategory>

                  <FavoriteBtn onClick={() => {}}>
                    <HeartIconPrimal>
                      <use href={sprite + "#heart"}></use>
                    </HeartIconPrimal>
                  </FavoriteBtn>

                  <NoticesItemImg loading="lazy" src={file} alt="icon" />

                  <WrapperInformation>
                    <InformationMap>
                      <IconInformation>
                        <use href={sprite + "#location-1"}></use>
                      </IconInformation>
                      <WrapperLocation>{location}</WrapperLocation>
                    </InformationMap>

                    <InformationMap>
                      <IconInformation>
                        <use href={sprite + "#clock"}></use>
                      </IconInformation>
                      {transformAge(age)}
                    </InformationMap>

                    <InformationMap>
                      <IconInformation>
                        <use href={sprite + "#female"}></use>
                      </IconInformation>
                      {sex}
                    </InformationMap>
                  </WrapperInformation>
                </IconWrapper>

                <ContentWrapper>
                  <ItemTitle>{transformTitle(title)}</ItemTitle>

                  <WrapperBtn>
                    <Button
                      type="button"
                      text="Learn more"
                      variant="bigButtonFirst"
                      onClick={() => handleModalOpen(_id)}
                    />
                  </WrapperBtn>
                </ContentWrapper>
              </ProductItem>
            )
          )}
        </ProductList>
      ) : (
        <PlugStyled>
          There are no notices matching your search query.
        </PlugStyled>
      )}

      {isModalOpen && <ModalProductCart setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default ProductCardList;
