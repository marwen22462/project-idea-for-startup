import React from 'react'
import { useToast } from "@chakra-ui/core";

function Alert() {
  const toast = useToast();
  return (
    <div
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Success Toast
    </div>
  );
}



export default Alert
