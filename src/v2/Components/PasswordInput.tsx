import { ClosedEyeIcon, OpenEyeIcon, space } from "@artsy/palette"
import React, { useState } from "react"
import styled from "styled-components"
import QuickInput, { QuickInputProps } from "./QuickInput"

export interface PasswordInputProps extends QuickInputProps {
  showPasswordMessage?: boolean
}

/**
 * Password input.
 * Renders the label inside of the textbox; shows/hides the password.
 *
 */
export const PasswordInput: React.FC<PasswordInputProps> = ({
  error,
  showPasswordMessage,
  ref,
  ...newProps
}) => {
  const [showPassword, toggleShowPassword] = useState(false)

  const eyeIcon = () => {
    const icon = showPassword ? (
      <ClosedEyeIcon onClick={() => toggleShowPassword(false)} />
    ) : (
      <OpenEyeIcon onClick={() => toggleShowPassword(true)} />
    )

    return <Eye>{icon}</Eye>
  }

  const type = showPassword ? "text" : "password"
  const note =
    !error && showPasswordMessage && "Password must be at least 8 characters."

  return (
    <QuickInput
      {...newProps}
      error={error}
      type={type}
      rightAddOn={eyeIcon()}
      note={note}
    />
  )
}

const Eye = styled.span`
  position: absolute;
  right: ${space(1)}px;
  z-index: 1;
`
