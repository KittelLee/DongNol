import "../styles/ProfileCircle.css";

interface ProfileCircleProps {
  src: string;
  alt: string;
  name: string;
}

function ProfileCircle({ src, alt, name }: ProfileCircleProps) {
  return (
    <div className="profile-circle">
      <img src={src} alt={alt} />
      <p>{name}</p>
    </div>
  );
}

export default ProfileCircle;
