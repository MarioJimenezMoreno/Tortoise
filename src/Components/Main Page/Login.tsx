import { useState } from "react";
import { Link } from "react-router-dom";
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
import { LockIcon } from "../Icons/LockIcon";
import { MailIcon } from "../Icons/MailIcon";
import { ModalProps } from "../../types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ isOpen, onOpenChange }: ModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => navigate("/app");

  const loginUser = async () => {
    const data = { email, password };
    axios
      .post(`http://localhost:8080/api/users/login`, data)
      .then((response) => {
        localStorage.setItem("response", response.data);
        localStorage.setItem("email", data.email);
        handleLogin();
      })
      .catch(() => {
        alert("Email or password are incorrect.");
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <div className={`text-foreground bg-background`}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Welcome Back!
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    endContent={<MailIcon />}
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    endContent={<LockIcon />}
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                    onChange={(e) => setPassword(e.target.value)}
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
                  <Button color="primary" onPress={loginUser}>
                    Log In
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

export default Login;
