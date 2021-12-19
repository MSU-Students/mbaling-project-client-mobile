export interface PostInfo {
  date: string,
  fullname: string,
  housingName: string,
  prfphoto: string,
  title:string,
  fee: string,
  likes: string,
  bookmarks: string,
  photo: string,
}

export interface PostStateInterface {
  posts: PostInfo[];
}

function state(): PostStateInterface {
  return {
    posts: [
      {
       date: "Aug 32, 2013",
        fullname: "Azshara Highborne",
        housingName: "Zin-Azshari Boarding House",
        prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
        title: "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
        fee: "1200",
        likes: "44",
        bookmarks: "1",
        photo: "https://cdn.quasar.dev/img/parallax1.jpg",
      },
      {
        date: "Jul 32, 2010",
        fullname: "Monkey D. Luffy",
        housingName: "Pirate King Apartment",
        prfphoto: "https://cdn.quasar.dev/img/avatar4.jpg",
        title:
          "Family/Couple size Apartment room w/ Private kitchen and bathroom",
        fee: "6500",
        likes: "32",
        bookmarks: "4",
        photo: "https://cdn.quasar.dev/img/parallax2.jpg",
      },
    ],
  };
  }

export default state;
