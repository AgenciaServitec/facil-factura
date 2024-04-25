import styled from "styled-components";
import { AntSelect } from "./index";

export const SelectOption = styled(AntSelect.Option)`
  color: ${({ theme }) => theme.colors.font1};
`;
