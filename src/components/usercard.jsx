import { useState } from "react";

function UserCard({ user }) {
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);

  return (
    <div className="card">
      <h3>{user.name}</h3>

      <p>@{user.username}</p>

      <p>{user.email}</p>

      <div className="buttons">
        <button
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <button
          onClick={() => setFollowed(!followed)}
        >
          {followed ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default UserCard;