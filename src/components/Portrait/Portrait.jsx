import { profile } from "../../data/site";
import "./Portrait.css";

// Shows your photo once `profile.photo` is set in src/data/site.js.
function Portrait({ className = "" }) {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className={`portrait ${className}`}>
      {profile.photo ? (
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
      ) : (
        <div className="portrait-fallback" role="img" aria-label={`${profile.name}`}>
          <span>{initials}</span>
        </div>
      )}
    </div>
  );
}

export default Portrait;
