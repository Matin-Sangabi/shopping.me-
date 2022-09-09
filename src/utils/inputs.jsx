import {
  HiUser,
  HiMail,
  HiLockClosed,
  HiPhone,
  HiEye,
  HiEyeOff,
} from "react-icons/hi";

export const defaultInputs = [
  {
    name: "name",
    placeHolder: "Your Name",
    Icon: () => <HiUser />,
  },
  {
    name: "email",
    placeHolder: "Your Email",
    Icon: () => <HiMail />,
  },
  {
    name: "phoneNumber",
    placeHolder: "Your Number",
    Icon: () => <HiPhone />,
    type : "tel"
  },
];

export const defaultLoginInputs = {
  name : 'email',
  placeHolder : "Your Name or Email",
  Icon : () => <HiUser/>
}

export const defaultLoginPassword = {
  name: "password",
  placeHolder: "Youre Password",
  Icon: () => <HiLockClosed />,
  Show: () => <HiEye />,
  Hide: () => <HiEyeOff />,
};

export const defaultPassword = [
  {
    name: "password",
    type: "password",
    placeHolder: "Your Password",
    Icon: () => <HiLockClosed />,
    Show: () => <HiEye />,
    Hide: () => <HiEyeOff />,
  },
];

export const defaultCheckbox = {
  name: "access",
};

