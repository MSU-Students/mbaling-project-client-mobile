export interface UserInterface {
  id?: number;
  username: string;
  password: string;
  isStudent: boolean;

  firstname: string;
  middlename: string;
  lastname: string;
  prfphoto: string;

  degree: string;
  department: string;
  college: string;
  yearAdmitted: number;

  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  housingName: string;

  birthdate?: string;
  gender?: "Male" | "Female";
  contact?: string;
  email?: string;
}

export interface UserStateInterface {
  activeUser: UserInterface;
  users: UserInterface[];
}

function state(): UserStateInterface {
  return {
    activeUser: {
      id: 201812730,
      username: "palawanexpress98",
      password: "password",
      isStudent: true,

      firstname: "Nahed",
      middlename: "Solaiman",
      lastname: "Bashier",
      prfphoto: "https://cdn.quasar.dev/img/boy-avatar.png",

      degree: "BS Information Technology (Database System)",
      department: "Department of Information Sciences",
      college: "College of Information and Computing Sciences",
      yearAdmitted: 2018,

      addressLine1: "0059 Disarip Street",
      addressLine2: "Bubonga Marawi",
      addressLine3: "Marawi City",
      addressLine4: "Lanao del Sur",
      housingName: "",

      birthdate: "October 19, 1998",
      gender: "Male",
      contact: "09531409858",
      email: "bashier.ns30@s.msumain.edu.ph",
    },
    users: [
      {
        id: 201812730,
        username: "palawanexpress98",
        password: "password",
        isStudent: true,

        firstname: "Nahed",
        middlename: "Solaiman",
        lastname: "Bashier",
        prfphoto: "https://cdn.quasar.dev/img/boy-avatar.png",

        degree: "BS Information Technology (Database System)",
        department: "Department of Information Sciences",
        college: "College of Information and Computing Sciences",
        yearAdmitted: 2018,

        addressLine1: "0059 Disarip Street",
        addressLine2: "Bubonga Marawi",
        addressLine3: "Marawi City",
        addressLine4: "Lanao del Sur",
        housingName: "",

        birthdate: "October 19, 1998",
        gender: "Male",
        contact: "09531409858",
        email: "bashier.ns30@s.msumain.edu.ph",
      },
      {
        id: 20220001,
        username: "zinboarding",
        password: "password",
        isStudent: false,

        firstname: "Azshara",
        middlename: "Queldorei",
        lastname: "Highborne",
        prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",

        degree: "",
        department: "",
        college: "",
        yearAdmitted: 0,

        addressLine1: "1205 5th Street",
        addressLine2: "Dimaluna I",
        addressLine3: "Marawi City",
        addressLine4: "Lanao del Sur",
        housingName: "Zin-Azshari Boarding House",

        birthdate: "August 31, 1989",
        gender: "Female",
        contact: "09090206852",
        email: "azshara.highborne@gmail.com",
      },
    ],
  };
}

export default state;
