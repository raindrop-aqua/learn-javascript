import React, { useContext, useState } from "react";
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions";
import AppContext from "../contexts/AppContext";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  /** イベントを作成する */
  const addEvent = (e) => {
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  /** 全てのイベントを削除する */
  const deleteAllEvents = (e) => {
    const result = window.confirm(
      "全てのイベントを本当に削除しても良いですか？"
    );
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
    }
  };

  /** 「イベントを作成する」ボタン活性化状態 */
  const unCreatable = title === "" || body === "";

  /** 「全てのイベントを削除する」ボタン活性化状態 */
  const unAllDeletable = state.events.length === 0;

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル </label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ </label>
          <input
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={unAllDeletable}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
