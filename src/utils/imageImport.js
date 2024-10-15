import dLogin from "../assets/desktoppics/loginDesk.png";
import dReg from "../assets/desktoppics/register-front.png";
import dMain from "../assets/desktoppics/main-front.png";
import dFriend from "../assets/desktoppics/friends-front.png";
import dSearch from "../assets/desktoppics/friendsearch-front.png";
import dUser from "../assets/desktoppics/userprof-front.png";
import dUserComment from "../assets/desktoppics/usercomments-front.png";
import dEditUser from "../assets/desktoppics/edituser-front.png";
import dOprofile from "../assets/desktoppics/anotherprofile-front.png";

import mLogin from "../assets/mobilepics/loginMobile.png";
import mRegister from "../assets/mobilepics/registerMobile.png";
import mMain from "../assets/mobilepics/mainMobile.png";
import mFriend from "../assets/mobilepics/friendsMobile.png";
import mSearch from "../assets/mobilepics/friendSearchMobile.png";
import mUser from "../assets/mobilepics/usrProfPostMobile.png";
import mUserComment from "../assets/mobilepics/userMobile.png";
import mEditUser from "../assets/mobilepics/editUserMobile.png";
import mOprofile from "../assets/mobilepics/friendMobile.png";

function desktopArray() {
  const desktopItems = [
    dLogin,
    dReg,
    dMain,
    dFriend,
    dSearch,
    dUser,
    dUserComment,
    dEditUser,
    dOprofile,
  ];

  return desktopItems;
}

function mobileArray() {
  const mobileItems = [
    mLogin,
    mRegister,
    mMain,
    mFriend,
    mSearch,
    mUser,
    mUserComment,
    mEditUser,
    mOprofile,
  ];

  return mobileItems;
}

export { desktopArray, mobileArray };
