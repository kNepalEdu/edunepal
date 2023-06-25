import IndexPage from "../components/home/IndexPage.jsx";
import SignIn from "../components/signIn/SignIn.jsx";
import SignUp from "../components/signup/SignUp.jsx";
import Contact from "../components/contact/Contact.jsx";
import StudentProfile from "../components/studentProfile/StudentProfile.jsx";

const routes = [
    {
        path: "/",
        component: <IndexPage />,
        isPrivate: false,
        sidebar: false
    },
    {
        path: "/signup",
        component: <SignUp />,
        isPrivate: false,
        sidebar: false
    }, 
    {
        path: "/login",
        component: <SignIn />,
        isPrivate: false,
        sidebar: false
    },
    {
        path: "/contact",
        component: <Contact />,
        isPrivate: false,
        sidebar: false
    },
    {
        path: "/studentProfile",
        component: <StudentProfile/>,
        isPrivate: true,
        sidebar: true
    },
]


export default routes;

