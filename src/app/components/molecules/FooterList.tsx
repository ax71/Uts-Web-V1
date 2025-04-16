import FooterTitle from "../atoms/FooterTitle";
import FooterLink from "../atoms/FooterLink";

interface FooterListProps {
  title: string;
  items: string[];
}

const FooterList = ({ title, items }: FooterListProps) => (
  <div>
    <FooterTitle>{title}</FooterTitle>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <FooterLink key={index}>{item}</FooterLink>
      ))}
    </ul>
  </div>
);

export default FooterList;
