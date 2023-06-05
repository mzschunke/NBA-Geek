import styled from "styled-components";

const StyledSelect = styled.select`
  margin: 0;
  padding: 0;
  background-color: #cee0ed;
  border-radius: 3px;
  border: 1px soild black;
  margin-bottom: 0.5rem;
  box-shadow: 1px 1px 1px;
`;

export default function BarChartSelect({ setBarSelection }) {
  const handleSelectChange = (event) => {
    setBarSelection(event.target.value);
  };

  return (
    <StyledSelect onChange={handleSelectChange}>
      <option value="" disabled>
        --Please choose a category--
      </option>
      <option key="1" value="pts">
        Points
      </option>
      <option key="2" value="ast">
        Assists
      </option>
      <option key="3" value="reb">
        Rebounds
      </option>
      <option key="4" value="stl">
        Steals
      </option>
      <option key="5" value="blk">
        Blocks
      </option>
      <option key="6" value="turnover">
        Turnover
      </option>
      <option key="7" value="fg_pct">
        FG %
      </option>
      <option key="8" value="fg3_pct">
        3PT %
      </option>
    </StyledSelect>
  );
}
