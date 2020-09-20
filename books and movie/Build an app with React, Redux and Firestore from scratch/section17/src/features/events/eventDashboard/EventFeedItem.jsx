import React from "react";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import { Feed } from "semantic-ui-react";

export default function EventFeedItem({ post }) {
  let summary;
  switch (post.code) {
    case "joined-event":
      summary = (
        <>
          <Link to={`/profile/${post.userUid}`}>{post.displayName}</Link> has
          singed up to <Link to={`/events/${post.eventId}`}>{post.title}</Link>
        </>
      );
      break;
    case "left-event":
      summary = (
        <>
          <Link to={`/profile/${post.userUid}`}>{post.displayName}</Link> has
          canceled their place on{" "}
          <Link to={`/events/${post.eventId}`}>{post.title}</Link>
        </>
      );
      break;
    default:
      summary = "Something happened";
      break;
  }

  return (
    <Feed.Event>
      <Feed.Label image={post.photoURL} />
      <Feed.Content>
        <Feed.Date>
          {formatDistance(new Date(post.date), new Date())} ago
        </Feed.Date>
        <Feed.Summary>{summary}</Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  );
}
