import styled from 'styled-components';

const StyledHumbarger = styled.div<{ open: boolean }>`
  display: none;
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    display: flex;
    position: fixed;
    right: 30px;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 2;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => (open ? '#ccc' : '#333')};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }
      &:nth-child(2) {
        transition: all 0.5s linear;
        transform-origin: center;
        transform: ${({ open }) =>
          open ? 'translate(-50px,-30px) rotate(360deg)' : 'translateX(0%)'};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function Humbarger({ open, setOpen }: Props) {
  return (
    <StyledHumbarger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledHumbarger>
  );
}
