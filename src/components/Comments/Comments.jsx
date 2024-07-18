import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import "./Comments.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowDeclineModal, setIsShowDeclineModal] = useState(false);

  const getAllComments = () => {
    fetch("http://localhost:3000/api/comments")
      .then((res) => res.json())
      .then((data) => setAllComments(data));
  };

  const removeCommentHandler = (id) => {
    fetch(`http://localhost:3000/api/comments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => getAllComments());
  };

  const submitComment = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/api/comments/${selectedComment}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ body: commentBody }),
    });
  };

  const handleAcceptComment = () => {
    setIsShowAcceptModal(false);
    fetch(`http://localhost:3000/api/comments/accept/${selectedComment}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ isAccept: 1 }),
    })
      .then((res) => res)
      .then((data) => {
        getAllComments();
        setIsShowAcceptModal(false);
      });
  };

  const handleDeclineComment = () => {
    setIsShowAcceptModal(false);
    fetch(`http://localhost:3000/api/comments/reject/${selectedComment}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ isAccept: 0 }),
    })
      .then((res) => res)
      .then((data) => {
        getAllComments();
        setIsShowDeclineModal(false);
      });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <>
      <div className="cms-main">
        {allComments.length ? (
          <table className="cms-table">
            <thead>
              <tr>
                <th>اسم کاربر</th>
                <th>محصول</th>
                <th>کامنت</th>
                <th>تاریخ</th>
                <th>ساعت</th>
              </tr>
            </thead>

            <tbody>
              {allComments.map((comment) => (
                <tr key={comment.id}>
                  <td>{comment.userID}</td>
                  <td>{comment.productID}</td>
                  <td>
                    <button
                      onClick={() => {
                        setIsShowModal(true);
                        setCommentBody(comment.body);
                      }}
                    >
                      دیدن متن
                    </button>
                  </td>
                  <td>{comment.date}</td>
                  <td>{comment.hour}</td>
                  <td>
                    <button onClick={() => removeCommentHandler(comment.id)}>
                      حذف
                    </button>
                    <button
                      onClick={() => {
                        setIsShowEditModal(true);
                        setCommentBody(comment.body);
                        setSelectedComment(comment.id);
                      }}
                    >
                      ویرایش
                    </button>
                    <button>پاسخ</button>
                    {!comment.isAccept ? (
                      <button
                        onClick={() => {
                          setIsShowAcceptModal(true);
                          setSelectedComment(comment.id);
                        }}
                      >
                        تایید
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setIsShowDeclineModal(true);
                          setSelectedComment(comment.id);
                        }}
                      >
                        رد
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ErrorBox msg="هیچ کامنتی یافت نشد" />
        )}
      </div>
      {isShowModal && (
        <DetailsModal onHide={() => setIsShowModal(false)}>
          <p className="text-modal">{commentBody}</p>
          <button
            className="text-modal-close-btn"
            onClick={() => setIsShowModal(false)}
          >
            بستن
          </button>
        </DetailsModal>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={submitComment}
        >
          <textarea
            type="text"
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            style={{ width: "100%" }}
          >
            {commentBody}
          </textarea>
        </EditModal>
      )}
      {isShowAcceptModal && (
        <DeleteModal
          title={"آیا از تایید کامنت اطمینان دارید؟"}
          cancleAction={() => setIsShowAcceptModal(false)}
          submitAction={() => handleAcceptComment()}
        />
      )}
      {isShowDeclineModal && (
        <DeleteModal
          title={"آیا از رد کامنت اطمینان دارید؟"}
          cancleAction={() => setIsShowDeclineModal(false)}
          submitAction={() => handleDeclineComment()}
        />
      )}
    </>
  );
}
