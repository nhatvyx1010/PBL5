import IndexPage from "../pages/IndexPage/IndexPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import RegulationsPage from "../pages/RegulationsPage/RegulationsPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import InstructPage from "../pages/InstructPage/InstructPage";
import BlogDetail from "../pages/BlogDetail/BlogDetail";
import AboutMe from "../pages/AboutMe/AboutMe";
import RulesPage from "../pages/RulesPage/RulesPage";
import PolicyPage from "../pages/PolicyPage/PolicyPage";
import QuestionsPage from "../pages/QuestionsPage/QuestionsPage";
import BuyTicket  from "../pages/BuyTicket/BuyTicket";
import ChartPage  from "../pages/ChartPage/ChartPage";
import BasicForm from "../pages/form/BasicForm/BasicForm";
import customVerif from "../pages/form/CustomVerif/CustomVerif";
import HomeAdmin from "../pages/HomeAdmin/HomeAdmin";
import PersonalPage from "../pages/PersonalPage/PersonalPage";


export const routes = [
    {
        path: '/',
        page: IndexPage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/product',
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/search',
        page: SearchPage,
        isShowHeader: true
    },
    {
        path: '/regulations',
        page: RegulationsPage,
        isShowHeader: true
    },
    {
        path: '/blog',
        page: BlogPage,
        isShowHeader: true
    },
    {
        path: '/admin',
        page: AdminPage,
        isShowHeader: true
    },
    {
        path: '/instruct',
        page: InstructPage,
        isShowHeader: true
    },
    {
        path: '/blogdetail',
        page: BlogDetail,
        isShowHeader: true
    },
    {
        path: '/aboutme',
        page: AboutMe,
        isShowHeader: true
    },
    {
        path: '/rules',
        page: RulesPage,
        isShowHeader: true
    },
    {
        path: '/policy',
        page: PolicyPage,
        isShowHeader: true
    },
    {
        path: '/questions',
        page: QuestionsPage,
        isShowHeader: true
    },
    {
        path: '/buyticket',
        page: BuyTicket,
        isShowHeader: true
    },
    {
        path: '/chart',
        page: ChartPage,
        isShowHeader: false
    },
    {
        path: '/basicform',
        page: BasicForm,
        isShowHeader: false
    },
    {
        path: '/customverifform',
        page: customVerif,
        isShowHeader: false
    },
    {
        path: '/homeadmin',
        page: HomeAdmin,
        isShowHeader: false
    },
    {
        path: '/personal',
        page: PersonalPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
]