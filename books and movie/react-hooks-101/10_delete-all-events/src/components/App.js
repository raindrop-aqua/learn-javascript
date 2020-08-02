import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Event from "./Event";
import reducer from "../reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  /** イベントを作成する */
  const addEvent = (e) => {
    dispatch({
      type: "CREATE_EVENT",
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
      dispatch({ type: "DELETE_ALL_EVENTS" });
    }
  };

  /** 「イベントを作成する」ボタン活性化状態 */
  const unCreatable = title === "" || body === "";

  /** 「全てのイベントを削除する」ボタン活性化状態 */
  const unAllDeletable = state.length === 0;

  return (
    <div className="container-fluid">
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
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
