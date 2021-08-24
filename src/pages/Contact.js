import React from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  // FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

export default function Contact(){
  return (
<FormControl id="email">
  <FormLabel>Email address</FormLabel>
  <Input type="email" />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
  )
}