import Link from 'next/link';

type Props = {
  path: string;
  text: string;
};

export default function CustmizedLink({ path, text }: Props) {
  return (
    <Link href={path}>
      <a>{text}</a>
    </Link>
  );
}
