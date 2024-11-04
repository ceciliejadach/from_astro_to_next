import Avatar from "../components/Avatar";
import Button from "../components/Button";

const MemberCard = ({ member, name, role, imgUrl }) => {
  //   const { name, role, imgUrl } = member;

  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <Avatar imgUrl={imgUrl} name={name} />
        <div>
          <p className="text-sm font-medium text-gray-800">{member.name}</p>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
      </div>
      <Button variant="secondary" text="Invite"></Button>
    </li>
  );
};

export default MemberCard;
