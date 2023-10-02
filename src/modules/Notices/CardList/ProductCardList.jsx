import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  NoticesItemImg,
  ItemTitle,
  WrapperBtn,
  WrapperInformation,
  InformationMap,
  IconInformation,
  IconWrapper,
  ContentWrapper,
  WrapperLocation,
  DeleteBtn,
  IconPrimal,
} from "./ProductCardList.styled";

import sprite from "@/shared/icons/sprite.svg";
import { selectLoggedIn } from "@/redux/auth/authSelectors.js";
import { AttentionModal } from "../../modals/components/AttentionModal/AttentionModal.jsx";
import { addOrDeleteFavoriteNoticeThunk } from "../../../redux/notices/noticesOperations.js";
import { selectUser } from "../../../redux/auth/authSelectors.js";
import { DeleteModal } from "../../modals/components/DeleteModal/DeleteModal.jsx";

const ProductCardList = ({ notices, categoryType }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [titleToDelete, setTitleToDelete] = useState("");

  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);

  const handleModalOpen = (id) => {
    setIsModalOpen(true);
    dispatch(fetchNoticeByIdThunk(id));
  };

  const handleAttentionModal = () => {
    setIsAttentionModalOpen((prev) => !prev);
  };

  const handleToggleFavorite = (id) => {
    if (isLoggedIn) {
      dispatch(addOrDeleteFavoriteNoticeThunk(id));
    } else {
      setIsAttentionModalOpen(true);
    }
  };

  const handleDeleteModalOpen = ({ id, title }) => {
    setIsDeleteModalOpen((prev) => !prev);
    setIdToDelete(id);
    setTitleToDelete(title);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen((prev) => !prev);
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

                  <FavoriteBtn onClick={() => handleToggleFavorite(_id)}>
                    <IconPrimal
                      $variant={
                        isLoggedIn &&
                        user?.favorites.some((ad) => ad._id === _id)
                          ? "favorite"
                          : "default"
                      }
                    >
                      <use href={sprite + "#heart"}></use>
                    </IconPrimal>
                  </FavoriteBtn>

                  {categoryType === "own" && (
                    <DeleteBtn
                      onClick={() => handleDeleteModalOpen({ id: _id, title })}
                    >
                      <IconPrimal $variant="default">
                        <use href={sprite + "#trash-2"}></use>
                      </IconPrimal>
                    </DeleteBtn>
                  )}

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

      {isModalOpen && (
        <ModalProductCart
          setIsModalOpen={setIsModalOpen}
          handleToggleFavorite={handleToggleFavorite}
        />
      )}
      {isAttentionModalOpen && (
        <AttentionModal onClose={handleAttentionModal} />
      )}

      {isDeleteModalOpen && (
        <DeleteModal
          onClose={handleDelete}
          title={titleToDelete}
          id={idToDelete}
        />
      )}
    </>
  );
};

export default ProductCardList;
