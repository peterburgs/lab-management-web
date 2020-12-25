import { Drawer, Hidden, IconButton } from "@material-ui/core";
import React from "react";
import useStyles from "./SideBar.styles";
import hamburgerIcon from "../../../assets/images/hamburger-icon.svg";
import NavigationItem from "./NavigationItem/NavigationItem";
import clsx from "clsx";

const SideBar = (props) => {
  const classes = useStyles();

  let navItems = (
    <React.Fragment>
      <NavigationItem
        icon={
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="#C0BDBD"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.82812 14.2089H0.78125C0.349766 14.2089 0 14.5542 0 14.9802V19.6084C0 20.0344 0.349766 20.3797 0.78125 20.3797H8.82812C9.25961 20.3797 9.60938 20.0344 9.60938 19.6084V14.9802C9.60938 14.5542 9.25961 14.2089 8.82812 14.2089ZM8.04688 18.837H1.5625V15.7516H8.04688V18.837Z" />
            <path d="M8.82812 0.632912H0.78125C0.349766 0.632912 0 0.97825 0 1.40427V12.6661C0 13.0922 0.349766 13.4375 0.78125 13.4375H8.82812C9.25961 13.4375 9.60938 13.0922 9.60938 12.6661V1.40427C9.60938 0.97825 9.25961 0.632912 8.82812 0.632912ZM8.04688 11.8948H1.5625V2.17563H8.04688V11.8948Z" />
            <path d="M19.2188 0.632912H11.1719C10.7404 0.632912 10.3906 0.97825 10.3906 1.40427V6.03244C10.3906 6.45846 10.7404 6.8038 11.1719 6.8038H19.2188C19.6502 6.8038 20 6.45846 20 6.03244V1.40427C20 0.97825 19.6502 0.632912 19.2188 0.632912ZM18.4375 5.26108H11.9531V2.17563H18.4375V5.26108Z" />
            <path d="M19.2188 7.57516H11.1719C10.7404 7.57516 10.3906 7.9205 10.3906 8.34652V19.6084C10.3906 20.0344 10.7404 20.3797 11.1719 20.3797H19.2188C19.6502 20.3797 20 20.0344 20 19.6084V8.34652C20 7.9205 19.6502 7.57516 19.2188 7.57516ZM18.4375 18.837H11.9531V9.11788H18.4375V18.837Z" />
          </svg>
        }
        link="/registration"
        onSideBarClose={props.onMobileClose}
      >
        Registration
      </NavigationItem>
      <NavigationItem
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#C0BDBD"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.2837 14.7348C10.9277 15.0023 10.4718 15.1496 10 15.1496C9.52821 15.1496 9.07233 15.0023 8.71637 14.7348L2.9048 10.3684C2.9048 10.3684 2.38025 9.97449 2.38025 10.8668C2.38025 11.8801 2.38025 14.9199 2.38025 14.9199C2.38025 14.9604 2.38025 15.1639 2.38025 15.227C2.38025 17.5239 5.79168 20 9.99987 20C14.2081 20 17.6195 17.5239 17.6195 15.227C17.6195 15.1639 17.6195 14.9604 17.6195 14.9199C17.6195 14.9199 17.6195 11.6957 17.6195 10.621C17.6195 9.90473 17.2466 10.2547 17.2466 10.2547L11.2837 14.7348Z" />
            <path d="M19.6651 6.89516C20.1116 6.55968 20.1116 6.01066 19.6651 5.67511L10.8119 0.251616C10.3653 -0.0838719 9.63461 -0.0838719 9.18806 0.251616L0.334912 5.67511C-0.111637 6.0106 -0.111637 6.55962 0.334912 6.89516L9.18806 13.5469C9.63461 13.8824 10.3653 13.8824 10.8119 13.5469" />
            <path d="M19.299 16.7546C19.299 14.918 19.299 9.40828 19.299 9.40828C19.299 9.40828 19.3031 9.06033 19.1346 9.17523C18.9994 9.2674 18.668 9.4937 18.5513 9.61812C18.4165 9.76164 18.4468 10.0838 18.4468 10.0838C18.4468 10.0838 18.4468 15.0869 18.4468 16.7546C18.4468 16.8493 18.3804 16.8945 18.3487 16.9173C18.0427 17.1377 17.8369 17.5445 17.8369 18.011C17.8369 18.7119 18.3007 19.2801 18.8729 19.2801C19.4451 19.2801 19.9089 18.7119 19.9089 18.011C19.9089 17.5428 19.7016 17.1346 19.3936 16.9148C19.363 16.8929 19.299 16.8492 19.299 16.7546Z" />
          </svg>
        }
        link="/courses"
        onSideBarClose={props.onMobileClose}
      >
        Courses
      </NavigationItem>
      <NavigationItem
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#C0BDBD"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.4138 2.59716L9.01434 0.786468L8.65375 0.284206C8.45474 0.00701989 8.02447 -0.0829405 7.6931 0.0837381L5.29269 1.29084C4.96146 1.4574 4.85406 1.81752 5.05317 2.09486L5.4138 2.59716Z" />
            <path d="M19.8982 13.6746C19.6975 13.3981 19.2667 13.3098 18.9362 13.4777L15.0293 15.4641C15.2151 15.8371 15.3359 16.2375 15.3812 16.6563L19.6629 14.4793C19.9938 14.3113 20.0988 13.9512 19.8982 13.6746Z" />
            <path d="M16.102 18.8281H14.0018V17.0313C14.0018 15.4158 12.4315 14.1016 10.5013 14.1016C8.57119 14.1016 7.0009 15.4158 7.0009 17.0313V18.8281H4.90065C4.51401 18.8281 4.20056 19.0905 4.20056 19.4141C4.20056 19.7377 4.51401 20 4.90065 20H16.102C16.4886 20 16.8021 19.7377 16.8021 19.4141C16.8021 19.0905 16.4886 18.8281 16.102 18.8281ZM10.5013 17.6172C10.1147 17.6172 9.80124 17.3549 9.80124 17.0313C9.80124 16.7077 10.1147 16.4453 10.5013 16.4453C10.888 16.4453 11.2014 16.7077 11.2014 17.0313C11.2014 17.3549 10.888 17.6172 10.5013 17.6172Z" />
            <path d="M5.2953 4.70743L6.03384 5.73614L7.52707 4.98044C9.29712 4.0847 11.5791 4.58388 12.6294 6.02075C13.7104 7.49977 13.1438 9.42922 11.3664 10.3201L9.86499 11.0727L10.3433 11.7389C10.5433 12.0174 10.9754 12.1059 11.306 11.9383C11.3281 11.9272 11.5625 11.8094 11.9163 11.6314L12.9904 13.1275C13.1898 13.4053 13.6206 13.4942 13.951 13.328L16.3514 12.1209C16.6828 11.9542 16.79 11.5943 16.5909 11.3168L15.5168 9.82074C15.8752 9.64055 16.1047 9.52512 16.1047 9.52512C16.4361 9.35844 16.5433 8.99848 16.3442 8.7211C16.3275 8.69778 11.2916 1.68205 11.2732 1.65966C11.0637 1.40435 10.6529 1.32967 10.3356 1.48924L5.53482 3.90341C5.2034 4.07009 5.09614 4.43005 5.2953 4.70743Z" />
            <path d="M5.60068 17.0313C5.60068 15.8846 6.16603 14.8466 7.07534 14.1016H6.30077C5.14269 14.1016 4.20051 13.313 4.20051 12.3438C4.20051 11.3745 5.14269 10.586 6.30049 10.586C6.30081 10.586 7.9161 10.5866 7.91601 10.5866C8.04272 10.5865 8.16701 10.5578 8.27571 10.5033L10.647 9.31469C11.7558 8.75891 12.1095 7.55508 11.4351 6.63231C10.77 5.72251 9.34189 5.43146 8.25158 5.98321L6.0998 7.07223C2.71815 7.1611 0 9.49168 0 12.3438C0 15.0535 2.45469 17.292 5.60068 17.5845V17.0313Z" />
          </svg>
        }
        link="/labs"
        onSideBarClose={props.onMobileClose}
      >
        Laboratories
      </NavigationItem>
      <NavigationItem
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#C0BDBD"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.90931 8.27099L0.617065 9.56834L2.90931 10.7848V8.27099Z" />
            <path d="M19.3647 9.55795L17.1124 8.28236V10.7578L19.3647 9.55795Z" />
            <path d="M4.16589 0V8.01594V11.4516L9.99934 14.5473L15.8557 11.4273V8.02552V0L4.16589 0ZM10.6767 11.2212H9.36093V9.9929H10.6767V11.2212ZM10.6471 8.92027H9.3905V8.02021V7.50426C9.3905 7.01558 9.74931 6.5902 10.2631 6.46976C10.7319 6.35988 11.0479 5.95147 11.0144 5.49865C10.9805 5.03886 10.5835 4.66827 10.091 4.63655C9.80967 4.61817 9.54239 4.70651 9.33806 4.88459C9.13344 5.06291 9.02076 5.30488 9.02076 5.56598H7.76414C7.76414 4.9847 8.02527 4.42375 8.48063 4.027C8.94239 3.62465 9.54465 3.42549 10.1775 3.4662C11.2924 3.538 12.1912 4.37706 12.2681 5.41793C12.3416 6.41306 11.6638 7.31355 10.6472 7.58791V8.02122V8.92027H10.6471Z" />
            <path d="M17.1124 12.1086L10.1667 15.8088L10.0006 15.8973L9.8339 15.8088L2.90933 12.1342L0 10.5903V20H20V10.5702L17.1124 12.1086Z" />
          </svg>
        }
        link="/requests"
        onSideBarClose={props.onMobileClose}
      >
        Requests
      </NavigationItem>
      <NavigationItem
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#C0BDBD"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.84874 9.63402C11.4351 9.63402 12.8089 9.15932 13.9313 8.22274C15.0537 7.28632 15.6226 6.14054 15.6226 4.81685C15.6226 3.49362 15.0537 2.3477 13.9311 1.41097C12.8085 0.474697 11.435 0 9.84874 0C8.26215 0 6.88881 0.474697 5.7664 1.41112C4.64399 2.34755 4.07483 3.49347 4.07483 4.81685C4.07483 6.14054 4.64399 7.28647 5.76658 8.22289C6.88918 9.15917 8.2627 9.63402 9.84874 9.63402Z" />
            <path d="M19.9515 15.3789C19.9192 14.9892 19.8537 14.5641 19.7573 14.1152C19.66 13.6629 19.5347 13.2354 19.3848 12.8446C19.2298 12.4407 19.0191 12.0418 18.7587 11.6596C18.4884 11.2629 18.1709 10.9174 17.8146 10.6332C17.4421 10.3358 16.9859 10.0967 16.4585 9.92227C15.9328 9.74878 15.3503 9.66089 14.7272 9.66089C14.4825 9.66089 14.2458 9.74466 13.7888 9.99292C13.5075 10.146 13.1785 10.323 12.8112 10.5187C12.4972 10.6857 12.0718 10.8421 11.5464 10.9837C11.0337 11.1221 10.5132 11.1922 9.99945 11.1922C9.48571 11.1922 8.96538 11.1221 8.45218 10.9837C7.92728 10.8422 7.50187 10.6858 7.18821 10.5189C6.82444 10.3249 6.49524 10.1479 6.20974 9.99276C5.75324 9.74451 5.5164 9.66074 5.27169 9.66074C4.64839 9.66074 4.06606 9.74878 3.54061 9.92242C3.01352 10.0965 2.5572 10.3356 2.18428 10.6333C1.82819 10.9177 1.51051 11.263 1.24056 11.6596C0.980302 12.0418 0.769611 12.4406 0.614518 12.8448C0.464729 13.2355 0.339448 13.6629 0.242149 14.1152C0.145765 14.5635 0.0802897 14.9888 0.0479178 15.3794C0.0160945 15.7621 0 16.1592 0 16.5604C0 17.6044 0.397791 18.4496 1.18222 19.0729C1.95695 19.688 2.98206 20 4.22865 20H15.7713C17.0179 20 18.0427 19.6881 18.8176 19.0729C19.6022 18.45 20 17.6047 20 16.5602C19.9998 16.1573 19.9835 15.7598 19.9515 15.3789Z" />
          </svg>
        }
        link="/lecturers"
        onSideBarClose={props.onMobileClose}
      >
        Lecturers
      </NavigationItem>
      <NavigationItem
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#C0BDBD"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.6562 1.5625H16.7188V0H15.1562V1.5625H4.84375V0H3.28125V1.5625H2.34375C1.05141 1.5625 0 2.61391 0 3.90625V17.6562C0 18.9486 1.05141 20 2.34375 20H17.6562C18.9486 20 20 18.9486 20 17.6562V3.90625C20 2.61391 18.9486 1.5625 17.6562 1.5625ZM18.4375 17.6562C18.4375 18.087 18.087 18.4375 17.6562 18.4375H2.34375C1.91297 18.4375 1.5625 18.087 1.5625 17.6562V7.34375H18.4375V17.6562ZM18.4375 5.78125H1.5625V3.90625C1.5625 3.47547 1.91297 3.125 2.34375 3.125H3.28125V4.6875H4.84375V3.125H15.1562V4.6875H16.7188V3.125H17.6562C18.087 3.125 18.4375 3.47547 18.4375 3.90625V5.78125Z" />
            <path d="M8.39697 8.98438H6.83447V10.5469H8.39697V8.98438Z" />
            <path d="M11.522 8.98438H9.95947V10.5469H11.522V8.98438Z" />
            <path d="M14.647 8.98438H13.0845V10.5469H14.647V8.98438Z" />
            <path d="M17.772 8.98438H16.2095V10.5469H17.772V8.98438Z" />
            <path d="M5.27197 12.1094H3.70947V13.6719H5.27197V12.1094Z" />
            <path d="M8.39697 12.1094H6.83447V13.6719H8.39697V12.1094Z" />
            <path d="M11.522 12.1094H9.95947V13.6719H11.522V12.1094Z" />
            <path d="M14.647 12.1094H13.0845V13.6719H14.647V12.1094Z" />
            <path d="M5.27197 15.2344H3.70947V16.7969H5.27197V15.2344Z" />
            <path d="M8.39697 15.2344H6.83447V16.7969H8.39697V15.2344Z" />
            <path d="M11.522 15.2344H9.95947V16.7969H11.522V15.2344Z" />
            <path d="M14.647 15.2344H13.0845V16.7969H14.647V15.2344Z" />
            <path d="M17.772 12.1094H16.2095V13.6719H17.772V12.1094Z" />
          </svg>
        }
        link="/schedule"
        onSideBarClose={props.onMobileClose}
      >
        Schedule
      </NavigationItem>
      <NavigationItem
        icon={
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="#C0BDBD"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.5912 7.15401H16.111V4.83648C16.111 4.82204 16.1087 4.80748 16.1068 4.79286C16.106 4.70082 16.0767 4.61047 16.0137 4.53887L12.1577 0.134126C12.1565 0.132995 12.1553 0.132594 12.1546 0.131463C12.1316 0.105674 12.1048 0.0843348 12.0764 0.0659869C12.0681 0.06026 12.0596 0.0555544 12.0508 0.0506301C12.0263 0.0372795 12.0002 0.026154 11.9734 0.0180926C11.9661 0.0160863 11.9596 0.0131317 11.9524 0.0112349C11.9232 0.00430428 11.893 0 11.8624 0H2.38549C1.95276 0 1.60119 0.352039 1.60119 0.784328V7.15368H1.12101C0.50196 7.15368 0 7.65546 0 8.27473V14.1042C0 14.7231 0.50196 15.2252 1.12101 15.2252H1.60119V19.2157C1.60119 19.6481 1.95276 20 2.38549 20H15.3267C15.759 20 16.1109 19.6481 16.1109 19.2157V15.2252H16.5912C17.2101 15.2252 17.7121 14.7231 17.7121 14.1042V8.27495C17.7121 7.6555 17.2101 7.15401 16.5912 7.15401ZM2.38549 0.784328H11.4702V4.79712C11.4702 5.01376 11.6459 5.18925 11.8624 5.18925H15.3267V7.15394H2.38549V0.784328ZM10.4491 11.0681C10.4491 12.8106 9.39221 13.8676 7.83884 13.8676C6.26179 13.8676 5.33903 12.6769 5.33903 11.1627C5.33903 9.56944 6.35626 8.37884 7.92547 8.37884C9.55803 8.37884 10.4491 9.60122 10.4491 11.0681ZM1.85278 13.7806V8.46576H3.05918V12.7715H5.1728V13.7804H1.85278V13.7806ZM15.3267 19.0031H2.38549V15.2252H15.3267V19.0031H15.3267ZM15.6784 13.5363C15.3077 13.6623 14.6059 13.8358 13.9041 13.8358C12.9342 13.8358 12.2323 13.5914 11.7432 13.1185C11.2546 12.6612 10.9863 11.967 10.9944 11.1864C11.0022 9.4196 12.2874 8.41021 14.0303 8.41021C14.7166 8.41021 15.2447 8.54473 15.5051 8.67062L15.2527 9.63251C14.9609 9.50641 14.5982 9.40388 14.0146 9.40388C13.0134 9.40388 12.2561 9.97171 12.2561 11.1232C12.2561 12.2193 12.9421 12.8657 13.9279 12.8657C14.2038 12.8657 14.4248 12.8346 14.5192 12.7872V11.6751H13.6992V10.7368H15.6784V13.5363Z" />
            <path d="M6.60864 11.139C6.60864 12.1798 7.09768 12.9132 7.90181 12.9132C8.71407 12.9132 9.17926 12.1404 9.17926 11.1076C9.17926 10.1536 8.72187 9.33282 7.89393 9.33282C7.08178 9.33279 6.60864 10.1058 6.60864 11.139Z" />
          </svg>
        }
        link="/logs"
        onSideBarClose={props.onMobileClose}
      >
        System logs
      </NavigationItem>
    </React.Fragment>
  );

  if (props.userRole === "lecturer") {
    navItems = (
      <React.Fragment>
        <NavigationItem
          icon={
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="#C0BDBD"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.82812 14.2089H0.78125C0.349766 14.2089 0 14.5542 0 14.9802V19.6084C0 20.0344 0.349766 20.3797 0.78125 20.3797H8.82812C9.25961 20.3797 9.60938 20.0344 9.60938 19.6084V14.9802C9.60938 14.5542 9.25961 14.2089 8.82812 14.2089ZM8.04688 18.837H1.5625V15.7516H8.04688V18.837Z" />
              <path d="M8.82812 0.632912H0.78125C0.349766 0.632912 0 0.97825 0 1.40427V12.6661C0 13.0922 0.349766 13.4375 0.78125 13.4375H8.82812C9.25961 13.4375 9.60938 13.0922 9.60938 12.6661V1.40427C9.60938 0.97825 9.25961 0.632912 8.82812 0.632912ZM8.04688 11.8948H1.5625V2.17563H8.04688V11.8948Z" />
              <path d="M19.2188 0.632912H11.1719C10.7404 0.632912 10.3906 0.97825 10.3906 1.40427V6.03244C10.3906 6.45846 10.7404 6.8038 11.1719 6.8038H19.2188C19.6502 6.8038 20 6.45846 20 6.03244V1.40427C20 0.97825 19.6502 0.632912 19.2188 0.632912ZM18.4375 5.26108H11.9531V2.17563H18.4375V5.26108Z" />
              <path d="M19.2188 7.57516H11.1719C10.7404 7.57516 10.3906 7.9205 10.3906 8.34652V19.6084C10.3906 20.0344 10.7404 20.3797 11.1719 20.3797H19.2188C19.6502 20.3797 20 20.0344 20 19.6084V8.34652C20 7.9205 19.6502 7.57516 19.2188 7.57516ZM18.4375 18.837H11.9531V9.11788H18.4375V18.837Z" />
            </svg>
          }
          link="/registration"
          onSideBarClose={props.onMobileClose}
        >
          Registration
        </NavigationItem>
        <NavigationItem
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#C0BDBD"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.6562 1.5625H16.7188V0H15.1562V1.5625H4.84375V0H3.28125V1.5625H2.34375C1.05141 1.5625 0 2.61391 0 3.90625V17.6562C0 18.9486 1.05141 20 2.34375 20H17.6562C18.9486 20 20 18.9486 20 17.6562V3.90625C20 2.61391 18.9486 1.5625 17.6562 1.5625ZM18.4375 17.6562C18.4375 18.087 18.087 18.4375 17.6562 18.4375H2.34375C1.91297 18.4375 1.5625 18.087 1.5625 17.6562V7.34375H18.4375V17.6562ZM18.4375 5.78125H1.5625V3.90625C1.5625 3.47547 1.91297 3.125 2.34375 3.125H3.28125V4.6875H4.84375V3.125H15.1562V4.6875H16.7188V3.125H17.6562C18.087 3.125 18.4375 3.47547 18.4375 3.90625V5.78125Z" />
              <path d="M8.39697 8.98438H6.83447V10.5469H8.39697V8.98438Z" />
              <path d="M11.522 8.98438H9.95947V10.5469H11.522V8.98438Z" />
              <path d="M14.647 8.98438H13.0845V10.5469H14.647V8.98438Z" />
              <path d="M17.772 8.98438H16.2095V10.5469H17.772V8.98438Z" />
              <path d="M5.27197 12.1094H3.70947V13.6719H5.27197V12.1094Z" />
              <path d="M8.39697 12.1094H6.83447V13.6719H8.39697V12.1094Z" />
              <path d="M11.522 12.1094H9.95947V13.6719H11.522V12.1094Z" />
              <path d="M14.647 12.1094H13.0845V13.6719H14.647V12.1094Z" />
              <path d="M5.27197 15.2344H3.70947V16.7969H5.27197V15.2344Z" />
              <path d="M8.39697 15.2344H6.83447V16.7969H8.39697V15.2344Z" />
              <path d="M11.522 15.2344H9.95947V16.7969H11.522V15.2344Z" />
              <path d="M14.647 15.2344H13.0845V16.7969H14.647V15.2344Z" />
              <path d="M17.772 12.1094H16.2095V13.6719H17.772V12.1094Z" />
            </svg>
          }
          link="/schedule"
          onSideBarClose={props.onMobileClose}
        >
          Schedule
        </NavigationItem>
      </React.Fragment>
    );
  }

  const drawerContent = (
    <React.Fragment>
      <div className={classes.toolbar}>
        <IconButton
          aria-label="open drawer"
          onClick={props.onToggleMaximize}
          className={classes.menuIcon}
        >
          <img alt="hamburger-icon" src={hamburgerIcon} />
        </IconButton>
      </div>
      <div className={classes.navItems}>{navItems}</div>
    </React.Fragment>
  );

  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav
      className={clsx(classes.drawer, {
        [classes.drawerMaximized]: props.maximized,
        [classes.drawerMinimized]: !props.maximized,
      })}
      aria-label="mailbox folders"
    >
      <Hidden mdUp implementation="js">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={props.mobileOpen}
          onClose={props.onMobileClose}
          classes={{
            paper: classes.paperDrawer,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawerContent}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.paperDrawer, {
              [classes.drawerMaximized]: props.maximized,
              [classes.drawerMinimized]: !props.maximized,
            }),
            paperAnchorLeft: classes.paperAnchorLeft,
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideBar;
