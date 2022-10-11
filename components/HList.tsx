import React from "react";
import styled from "styled-components";

export const HListSeperator = styled.View`
  width: 20px;
`;

interface HListProps {
  title: string;
}

const ListContainer = styled.View`
  margin-bottom: 40px;
`;

const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;

const HList: React.FC<HListProps> = ({ title, children }) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    {children}
  </ListContainer>
);

export default HList;
