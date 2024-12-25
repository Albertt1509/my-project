import { createRouter, createWebHistory } from 'vue-router';


import MenuLogin from '@/auth/MenuLogin.vue';
import HomeView from '@/components/HomeView.vue';
import ProfileView from '@/components/ProfileView.vue';
import WorkView from '@/components/WorkView.vue';
import WorkViewDetail from '@/components/WorkViewDetail.vue';
import ProfileSetting from '@/components/ProfileSetting.vue';
import AccountSetting from '@/components/AccountSetting.vue';
import PrivacySetting from '@/components/PrivacySetting.vue';
import MeetingMenu from '@/components/MeetingMenu.vue';
const routes = [
    {
        path: '/',
        name: 'MenuLogin',
        component: MenuLogin,
        meta: { hideNavbarAndFooter: true }
    },
    {
        path: '/home',
        name: 'MenuHome',
        component: HomeView
    },
    {
        path: '/profile',
        name: 'ProfileView',
        component: ProfileView
    },
    {
        path: '/profile-setting',
        name: 'ProfileSetting',
        component: ProfileSetting
    },
    {
        path: '/account-setting',
        name: 'AccountSetting',
        component: AccountSetting
    },
    {
        path: '/privacy-setting',
        name: 'PrivacySetting',
        component: PrivacySetting
    },
    {
        path: '/work',
        name: 'WorkView',
        component: WorkView
    },
    {
        path: '/work/:id',
        name: 'WorkViewDetail',
        component: WorkViewDetail
    },
    {
        path: '/meet',
        name: 'MeetingMenu',
        component: MeetingMenu
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
