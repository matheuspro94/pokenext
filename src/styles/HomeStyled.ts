import styled from "styled-components"

const HomeStyled = styled.div`
  .title_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
  }

  .title {
    color: #e33d33;
    text-align: center;
    font-size: 3em;
    margin-right: .4em;
  }

  .title span {
    color: #333;
  }

  .card_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
  }
`
export default HomeStyled;