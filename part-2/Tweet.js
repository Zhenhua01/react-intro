"use strict";

function Tweet({ username, name, date, message }) {
  return (
    <div>
      <b>{ name }</b>
      <p>{ username }</p>
      <div className="Tweets">{ message }</div>
      <p>{ date }</p>
    </div>
  )
}