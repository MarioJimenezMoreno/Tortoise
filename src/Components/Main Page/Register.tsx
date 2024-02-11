import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { MailIcon } from "../Icons/MailIcon";
import { EyeFilledIcon } from "../Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../Icons/EyeSlashFilledIcon";
import { UserIcon } from "../Icons/UserIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { ModalProps, Data } from "../../types";
import axios from "axios";

function Register({ isOpen, onOpenChange }: ModalProps) {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const [isRepeatPasswordVisible, setRepeatPasswordVisible] =
    React.useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);
  const toggleRepeatPasswordVisibility = () =>
    setRepeatPasswordVisible(!isRepeatPasswordVisible);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [value, setValue] = React.useState("");

  const navigate = useNavigate();
  const handleRegister = () => navigate("/app");

  const registerUser = async (data: Data) => {

    axios
      .post(`http://localhost:8080/api/users/register`, data)
      .then((response) => {
        localStorage.setItem("response", response.data);
        localStorage.setItem("email", data.email);
        handleRegister();
      })
      .catch(() => {
        alert("An error occurred while registering the account");
      });
  }

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validationState = React.useMemo(() => {
    if (value === "") return undefined;

    return validateEmail(value) ? "valid" : "invalid";
  }, [value]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords must be identical");
    } else if (password.length < 6) {
      alert("Password requires a minimum length of 6");
    } else {
      const data = {
        username,
        email,
        phone,
        password,
      };
      registerUser(data);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <div className={`text-foreground bg-background`}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Register Account
                </ModalHeader>
                <ModalBody>
                  <Input
                    isRequired
                    autoFocus
                    endContent={<UserIcon />}
                    label="Username"
                    placeholder="Enter your username"
                    variant="bordered"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    isRequired
                    autoFocus
                    endContent={<MailIcon />}
                    color={validationState === "invalid" ? "danger" : "success"}
                    errorMessage={
                      validationState === "invalid" &&
                      "Please enter a valid email"
                    }
                    validationState={validationState}
                    onValueChange={setValue}
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    endContent={<PhoneIcon />}
                    label="Phone"
                    placeholder=""
                    type="phonenumber"
                    variant="bordered"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Input
                    isRequired
                    label="Password"
                    variant="bordered"
                    onChange={(e) => setPassword(e.target.value)}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={togglePasswordVisibility}
                      >
                        {isPasswordVisible ? (
                          <EyeSlashFilledIcon />
                        ) : (
                          <EyeFilledIcon />
                        )}
                      </button>
                    }
                    type={isPasswordVisible ? "text" : "password"}
                  />
                  <Input
                    isRequired
                    label="Repeat Password"
                    variant="bordered"
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleRepeatPasswordVisibility}
                      >
                        {isRepeatPasswordVisible ? (
                          <EyeSlashFilledIcon />
                        ) : (
                          <EyeFilledIcon />
                        )}
                      </button>
                    }
                    type={isRepeatPasswordVisible ? "text" : "password"}
                  />
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link color="primary" to="/">
                      Forgot password?
                    </Link>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onClick={handleSubmit}>
                    Register
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </div>
      </Modal>
    </>
  );
}

export default Register;
