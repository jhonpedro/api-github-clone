import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UserProfileHeader = styled.div`
  width: 100%;
  height: 10rem;
  background: var(--color-darker);
  position: relative;

  .username {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`

export const UserProfileData = styled.div`
  width: 100%;
  margin-top: -5rem;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border: 4px solid var(--color-white);
    width: 13rem;
    height: 13rem;
    border-radius: 100%;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }

  strong,
  .email,
  .localization {
    align-self: flex-start;
    margin-left: 2rem;
  }

  strong {
    font-size: 2.5rem;
  }

  .email,
  .localization {
    font-size: 1.4rem;
  }
`

export const UserProfileCounts = styled.div`
  width: 100%;
  background: var(--color-dark-light);
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 5rem 0;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
      font-size: 3.5rem;
    }

    span {
      font-size: 1.4rem;
    }
  }
`

export const UserProfileBiography = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  strong {
    font-size: 2.5rem;
  }
`
