import styled from 'styled-components'

export const UserContainer = styled.div`
  position: relative;
`

export const ActionButtons = styled.div`
  position: absolute;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 1rem;
  right: 1rem;

  button {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-white);
    background: transparent;
    border: none;
    font-weight: lighter;

    svg {
      margin-left: 1rem;
      font-size: 2rem;
    }
  }

  button:first-child {
    margin-right: 2.5rem;

    svg {
      color: var(--color-yellow);
    }
  }

  button:last-child {
    svg {
      color: var(--color-red);
    }
  }
`
