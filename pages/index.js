import { wrapper } from "../store/store";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Header from "../components/header";
import Login from "../components/login/Login";
import { getSession } from "next-auth/client";
import Menu from "../components/menu/Menu";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import PostForm from "../components/postform/PostForm";
import { friends } from "../components/friends/friend";
import Widgets from "../components/widgets/Widgets";
import PostOptionBox from "../components/postOptionBox/PostOptionBox";
import EditPostForm from "../components/editPostForm/EditPostForm";
import DeletePostAlert from "../components/deletePostAlert/DeletePostAlert";
import NotLoginInputBox from "../components/notLoginInputBox/NotLoginInputBox";
import NotLoginMenu from "../components/notLoginMenu/NotLoginMenu";

export default function Home({ session }) {
  const dispatch = useDispatch();

  const showingMenu = () => {
    dispatch({ type: "SHOW_MENU" });
  };
  const closingMenu = () => {
    dispatch({ type: "CLOSE_MENU" });
  };

  if (!session)
    return (
      <div className="bg-gray-100">
        <>
          <Head>
            <title>Fakebook</title>
          </Head>
          <Menu closingMenu={closingMenu} showingMenu={showingMenu} />
          <Header showingMenu={showingMenu} />
          <div className="flex justify-between">
            <Sidebar />
            <Feed />
          </div>
        </>
      </div>
    );
  // if (!session) return <Login />;
  const { user } = session;

  //Monitoring db
  // const postsRef = collection(db, "posts");
  // const postsQuery = query(postsRef, orderBy("timeStamp", "desc"));
  // onSnapshot(postsQuery, (snapshot) => {
  //   const newSnapshot = snapshot.docs.map((item) => item.data());
  //   console.log(newSnapshot);
  // });
  //Monitoring db

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
  }, []);

  return (
    <div className="bg-gray-100">
      <>
        <Head>
          <title>Fakebook</title>
        </Head>
        <Menu closingMenu={closingMenu} showingMenu={showingMenu} />
        <Header showingMenu={showingMenu} />
        <div className="flex justify-between">
          <Sidebar />
          <Feed />
          <PostForm closePostPage={closePostPage} />
          <Widgets />
        </div>
      </>
    </div>
  );
}

//Without redux
// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   return {
//     props: { session },
//   };
// }

//With redux
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);

    return {
      props: { session },
    };
  }
);
