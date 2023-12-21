import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const EditContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1000;
  display: ${(props) => (props.isVisible ? "none" : "block")};
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1001;
  
`;

function Edit() {
  const [editMode, setEditMode] = useState(false);

  const toggleEditState = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={toggleEditState}>
          {editMode ? "Done" : "Edit"}
        </Button>
      </ButtonContainer>
      <EditContainer isVisible={editMode}>
      </EditContainer>
    </>
  );
}

export default Edit;