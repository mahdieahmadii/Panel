import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import ErrorBox from "../ErrorBox/ErrorBox";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [productDetail, setProductDetai] = useState({});

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:3000/api/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsShowDeleteModal(false);
        getAllProducts();
      });
  };
  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const updateProductInfo = (event) => {
    event.preventDefault();
    console.log("hi");
  };

  return products.length ? (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="products-table-tr">
              <td>
                <img
                  src={item.img}
                  alt={item.title}
                  className="products-table-img"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>
                <button
                  className="products-table-btn"
                  onClick={() => {
                    setIsShowDetailsModal(true);
                    setProductDetai(item);
                  }}
                >
                  جزییات
                </button>
                <button
                  className="products-table-btn"
                  onClick={() => {
                    setIsShowDeleteModal(true);
                    setProductId(item.id);
                  }}
                >
                  حذف
                </button>
                <button
                  className="products-table-btn"
                  onClick={() => {
                    setIsShowEditModal(true);
                    setProductNewTitle(item.title);
                    setProductNewPrice(item.price);
                    setProductNewCount(item.count);
                    setProductNewImg(item.img);
                    setProductNewPopularity(item.popularity);
                    setProductNewSale(item.sale);
                    setProductNewColors(item.colors);
                  }}
                >
                  ویرایش
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isShowDeleteModal && (
        <DeleteModal
          cancleAction={deleteModalCancelAction}
          submitAction={deleteModalSubmitAction}
        />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal} detail={productDetail} />
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfo}
        >
          <div className="edit-products-form-group">
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
              value={productNewTitle}
            />
          </div>

          <div className="edit-products-form-group">
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPrice}
            />
          </div>
          <div className="edit-products-form-group">
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
              value={productNewCount}
            />
          </div>
          <div className="edit-products-form-group">
            <input
              type="text"
              placeholder="آدرس کاور جدید را وارد کنید"
              className="edit-product-input"
              value={productNewImg}
            />
          </div>
          <div className="edit-products-form-group">
            <input
              type="text"
              placeholder="محبوبیت جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPopularity}
            />
          </div>
          <div className="edit-products-form-group">
            <input
              type="text"
              placeholder="میزان فروش جدید را وارد کنید"
              className="edit-product-input"
              value={productNewSale}
            />
          </div>
          <div className="edit-products-form-group">
            <input
              type="text"
              placeholder="تعداد رنگ بندی جدید را وارد کنید"
              className="edit-product-input"
              value={productNewColors}
            />
          </div>
        </EditModal>
      )}
    </>
  ) : (
    <ErrorBox msg="هیچ محصولی یافت نشد" />
  );
}
