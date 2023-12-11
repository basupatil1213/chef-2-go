import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import NotFound from "../pages/PageNotFound/NotFound";
import Login from "../components/authComponent/Login";
// import Signup from "../components/authComponent/Signup";
import SignUp from '../components/SignUp/SignUp';
import About from "../pages/About/About";
import LoginPage from "../pages/LogIn/LoginPage";
import SignupPage from "../pages/Signup/SignupPage";
import PricingPage from "../pages/Premium/PricingPage";
import IconDrop from "../components/IconsDrop/IconDrop";
import RecipeHome from "../pages/Recipe/RecipeHome";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import ChefPage from "../pages/Chef/ChefPage";
import RecipeSearch from "../pages/RecipeSearch/RecipeSearch";
// import LoginTwo from "../components/authComponent/LoginTwo";
import OTPVerificationPage from "../pages/OTPVerificationPage/OTPVerificationPage";
// import SignUp2 from "../components/SignUp/SignUp";
import { topChefs } from "../pages/Chef/chefData";
import Admin from "../pages/Admin/Admin";
import ChefSearchPage from "../pages/ChefsSearchPage/ChefSearchPage";

let ChefRoutes = () => {
    let ChefTwoGoRoutes = useRoutes([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "signup",
            element: <SignupPage />,
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "exp-icon",
            element: <IconDrop />
        },
        {
            path: "premium",
            element: <PricingPage />
        },
        {
            path: "recipe/:recipeId",
            element: <RecipeHome />
        },
        {
            path: "Footer",
            element: <Footer />
        },
        {
            path: "chef",
            element: <ChefPage chefs={topChefs}/>
        },
        {
            path: "searchrecipe",
            element: <RecipeSearch />
        },
        {
            path:"searchchef",
            element:<ChefSearchPage/>
        },
        {
            path: "verification",
            element: <OTPVerificationPage />
        },
        {
            path: "testpath",
            element: <SignUp />
        },
        {
            path: 'search',
            children: [
                {
                    path: 'chefs',
                    element: <ChefSearchPage />
                },
                {
                    path: 'recipes',
                    element: <RecipeSearch />
                }
            ]
        },
        {
            path:"admin",
            element:<Admin/>
        }
    ]);

    return ChefTwoGoRoutes;
}
export default ChefRoutes;