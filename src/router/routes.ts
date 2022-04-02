import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("pages/LoginForm.vue"),
  },
  {
    path: "/student/",
    component: () => import("layouts/MainLayoutStudent.vue"),
    children: [
      {
        path: "home",
        component: () => import("pages/student/StudentHome.vue"),
      },
      {
        path: "account",
        component: () => import("pages/student/StudentAccount.vue"),
      },
      {
        path: "search",
        component: () => import("pages/student/StudentSearch.vue"),
      },
      {
        path: "inbox",
        component: () => import("pages/general-inbox/Inbox.vue"),
      },
    ],
  },
  {
    path: "/student/settings/",
    component: () => import("layouts/SettingsLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/student/setting/Settings.vue"),
      },
      {
        path: "account",
        component: () => import("pages/student/setting/ManageAccount.vue"),
      },
      {
        path: "privacy",
        component: () => import("pages/student/setting/ManagePrivacy.vue"),
      },
    ],
  },
  {
    path: "/landlord/",
    component: () => import("layouts/MainLayoutLandlord.vue"),
    children: [
      {
        path: "home",
        component: () => import("pages/landlord/LandlordHome.vue"),
      },
      {
        path: "account",
        component: () => import("pages/landlord/LandlordAccount.vue"),
      },
      {
        path: "posts",
        component: () => import("pages/landlord/LandlordPosts.vue"),
      },
      {
        path: "inbox",
        component: () => import("pages/general-inbox/Inbox.vue"),
      },
    ],
  },
  {
    path: "/landlord/settings/",
    component: () => import("layouts/SettingsLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/landlord/setting/Settings.vue"),
      },
      {
        path: "account",
        component: () => import("pages/landlord/setting/ManageAccount.vue"),
      },
      {
        path: "privacy",
        component: () => import("pages/landlord/setting/ManagePrivacy.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {
        path: "profile",
        component: () => import("pages/Profile.vue")
      },
      {
        path: "chat",
        component: () => import("pages/general-inbox/Chatroom.vue"),
      },
    ],
  },
  {
    path: "/post/",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/general-post/Post.vue")
      },
      {
        path: "form",
        component: () => import("pages/general-post/PostForm.vue"),
      },
      {
        path: "edit",
        component: () => import("pages/general-post/PostEdit.vue")
      },
    ],
  },
  {
    path: "/settings/",
    component: () => import("layouts/SettingsLayout.vue"),
    children: [
      {
        path: "help",
        component: () => import("pages/general-setting/HelpCenter.vue"),
      },
      {
        path: "feedback",
        component: () => import("pages/general-setting/Feedback.vue"),
      },
      {
        path: "terms-of-service",
        component: () => import("pages/general-setting/ServicePolicy.vue"),
      },
      {
        path: "privacy-policy",
        component: () => import("pages/general-setting/PrivacyPolicy.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
