import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { selectNotices } from "@/redux/notices/noticesSelectors";

import { transformAge } from "../helpers/transformAge.js";

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
import Button from "@/shared/components/Button/Button";
import { ModalProductCart } from "../popups/ModalProductCart";

// Photo
import sprite from "../../../shared/icons/sprite.svg";
import { fetchNoticeByIdThunk } from "../../../redux/notices/noticesOperations.js";
// import card from "../img/Rectangle 24.png";

const ProductCardList = ({ notices }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (id) => {
    setIsModalOpen(true);
    dispatch(fetchNoticeByIdThunk(id));
  };

  return (
    <>
      <ProductList>
        {notices?.map(({ category, age, _id, title, location, file, sex }) => (
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
              <ItemTitle>{title}</ItemTitle>

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
        ))}
      </ProductList>

      {isModalOpen && <ModalProductCart setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default ProductCardList;
