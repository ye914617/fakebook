import { wrapper } from "../store/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header";
import Login from "../components/login/Login";
import { getSession } from "next-auth/client";
import Menu from "../components/menu/Menu";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import PostForm from "../components/postform/PostForm";
import { friends } from "../components/friends/friend";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { async } from "@firebase/util";

export default function Home({ session }) {
  ////

  const firebaseConfig = {
    apiKey: "AIzaSyBWFbfe00Ol5UZA10AbDFgQgotpuiOeDGI",
    authDomain: "fakebook-d18f3.firebaseapp.com",
    projectId: "fakebook-d18f3",
    storageBucket: "fakebook-d18f3.appspot.com",
    messagingSenderId: "805582766958",
    appId: "1:805582766958:web:b364a0a691f33bceb8f77f",
  };
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore();

  ////Update document, can be use on edit comment
  const specialday = doc(firestore, "sohaispec/2021-11-24");

  function writeDoc() {
    const docData = {
      name: "sdfg",
      price: 34,
      player: "njkkmore",
    };
    setDoc(specialday, docData);
  }
  ////Adding data to a new collection,
  ////document name will auto generated, a unique id
  ////if the collection name already exist,then just simply add new data to the collection.
  ////Becareful that even the data content is same, it will store as another new data
  const newCollection = collection(firestore, "newtwo");

  async function addNewDocument() {
    const newDoc = await addDoc(newCollection, {
      player: "ddddd",
      hobby: "sleep",
    });
  }
  /////
  if (!session) return <Login />;
  const { user } = session;

  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.showMenu);

  const getUserData = (userData) => {
    dispatch({ type: "GET_USER_DATA", payload: userData });
  };
  const isLoggedIn = () => {
    dispatch({ type: "LOGGED_IN" });
  };
  const notLoggedIn = () => {
    dispatch({ type: "NOT_LOGGED_IN" });
  };
  const showingMenu = () => {
    dispatch({ type: "SHOW_MENU" });
  };
  const closingMenu = () => {
    dispatch({ type: "CLOSE_MENU" });
  };
  const getFriendsData = (friendsData) => {
    dispatch({ type: "GET_FRIENDS_DATA", payload: friendsData });
  };
  const showPostPage = () => {
    dispatch({ type: "SHOW_POST_PAGE" });
  };
  const closePostPage = () => {
    dispatch({ type: "CLOSE_POST_PAGE" });
  };

  useEffect(() => {
    //Get user data when page first load
    getUserData(user);
    getFriendsData(friends);
    writeDoc();
    addNewDocument();
  }, []);

  return (
    <div className="bg-gray-100">
      {showMenu ? (
        <Menu closingMenu={closingMenu} />
      ) : (
        <>
          {/* <Header showingMenu={showingMenu} />
          <Sidebar /> */}
          <Feed />
          <PostForm closePostPage={closePostPage} />
        </>
      )}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   return {
//     props: { session },
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);

    return {
      props: { session },
    };
  }
);
