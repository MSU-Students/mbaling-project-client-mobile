export interface PostInterface {
  id?: number;
  title: string;
  fee: string;
  description: string;
  prvKitchen: boolean;
  prvCR: boolean;
  photos: {
    id: number;
    url: string;
  }[];
  date: number;

  firstname: string;
  middlename: string;
  lastname: string;
  prfphoto: string;
  housingName: string;
}

export interface PostStateInterface {
  activePost: PostInterface;
  posts: PostInterface[];
}

function state(): PostStateInterface {
  return {
    activePost: {
      id: 135413523,
      title:
        "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
      fee: "1200",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      prvKitchen: false,
      prvCR: false,
      photos: [
        {
          id: 1,
          url: "https://cdn.quasar.dev/img/parallax1.jpg",
        },
        {
          id: 2,
          url: "https://cdn.quasar.dev/img/mountains.jpg",
        },
        {
          id: 3,
          url: "https://cdn.quasar.dev/img/quasar.jpg",
        },
      ],
      date: 1631096539262,

      firstname: "Azshara",
      middlename: "Queldorei",
      lastname: "Highborne",
      prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
      housingName: "Zin-Azshari Boarding House",
    },
    posts: [
      {
        id: 135413523,
        title:
          "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
        fee: "1200",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        prvKitchen: false,
        prvCR: false,
        photos: [
          {
            id: 1,
            url: "https://cdn.quasar.dev/img/parallax1.jpg",
          },
          {
            id: 2,
            url: "https://cdn.quasar.dev/img/mountains.jpg",
          },
          {
            id: 3,
            url: "https://cdn.quasar.dev/img/quasar.jpg",
          },
        ],
        date: 1631096539262,

        firstname: "Azshara",
        middlename: "Queldorei",
        lastname: "Highborne",
        prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
        housingName: "Zin-Azshari Boarding House",
      },
      {
        id: 134134,
        title:
          "Family/Couple size Apartment room w/ Private kitchen and bathroom",
        fee: "6500",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        prvKitchen: true,
        prvCR: true,
        photos: [
          {
            id: 1,
            url: "https://cdn.quasar.dev/img/parallax2.jpg",
          },
          {
            id: 2,
            url: "https://cdn.quasar.dev/img/mountains.jpg",
          },
        ],
        date: 1632388510672,

        firstname: "Monkey",
        middlename: "Dante",
        lastname: "Luffy",
        prfphoto: "https://cdn.quasar.dev/img/avatar4.jpg",
        housingName: "Pirate King Apartment",
      },
    ],
  };
}

export default state;
