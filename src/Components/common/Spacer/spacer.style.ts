import styled, {RuleSet} from "styled-components";

export const Container = styled.div<{
  $customStyle?: RuleSet
}>`
    ${props => props.$customStyle};
    display: flex;
    flex: 1;
`;