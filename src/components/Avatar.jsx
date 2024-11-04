import Image from "next/image";
import profile1 from "../assets/profile-1.jpeg";
import profile2 from "../assets/profile-2.jpeg";
import profile3 from "../assets/profile-3.jpeg";

const Avatar = ({ imgUrl, name }) => {
  const profiles = {
    "profile-1": profile1,
    "profile-2": profile2,
    "profile-3": profile3,
  };

  const classes = "h-10 w-10 rounded-full bg-gray-300";
  return imgUrl ? <Image src={profiles[imgUrl]} alt={name} className={classes} width={40} height={40} /> : <div className={classes} />;
};

export default Avatar;
