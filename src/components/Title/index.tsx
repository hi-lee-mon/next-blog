import styled from 'styled-components';

const StyledTitle = styled.div`
  h2 {
    font-size: 56px;
    margin: 36px 0 0 0;
  }
  span {
    display: inline-block;
    margin-bottom: 36px;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 42px;
      margin: 36px 0 0 0;
    }
  }
`;

type Props = {
  title: string;
  date: string;
};

export default function Title({ title, date }: Props) {
  return (
    <StyledTitle>
      <h2>{title}</h2>
      <span>{date}</span>
    </StyledTitle>
  );
}
