import styled from "styled-components";
import AntSelect from "antd/lib/select";

export const SelectOption = styled(AntSelect.Option)`
  color: ${({ theme }) => theme.colors.font1};
`;
