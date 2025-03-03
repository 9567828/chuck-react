# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


```
chuck-react
├─ chuck-react.iml
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ config
│  │  ├─ ssl.crt
│  │  └─ ssl.key
│  └─ img
│     ├─ 202301261737390.jpg
│     ├─ check_box_rounded-off.svg
│     ├─ check_box_rounded.svg
│     ├─ check_box_square-off.svg
│     ├─ check_box_square.svg
│     ├─ contents-img.png
│     ├─ favicon-16x16.png
│     ├─ favicon-32x32.png
│     ├─ favicon-96x96.png
│     ├─ gnb
│     │  ├─ ic_alarm.svg
│     │  ├─ ic_home_medium.svg
│     │  ├─ ic_invite.svg
│     │  └─ ic_tab-menu.svg
│     ├─ google_icon.png
│     ├─ ic_edit.svg
│     ├─ ic_move_in.svg
│     ├─ ic_null_object-black.png
│     ├─ ic_null_object.png
│     ├─ ic_search.svg
│     ├─ loading.gif
│     ├─ logo_combination.svg
│     ├─ main-icons
│     │  ├─ ic_attendance.svg
│     │  ├─ ic_cancle_medium.svg
│     │  ├─ ic_cancle_small-24x24.svg
│     │  ├─ ic_clock.svg
│     │  ├─ ic_fill_calender.svg
│     │  ├─ ic_fill_electric.svg
│     │  ├─ ic_fill_notice.svg
│     │  ├─ ic_plust_medium.svg
│     │  ├─ ic_share_medium.svg
│     │  └─ ic_vacation.svg
│     ├─ small-left-arrow.png
│     └─ small-right-arrow.png
├─ README.md
├─ src
│  ├─ api
│  │  ├─ empAPI.js
│  │  ├─ holiday.js
│  │  └─ index.js
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ lottie
│  │  │  └─ Flow.json
│  │  └─ scss
│  │     ├─ components
│  │     │  ├─ calender.scss
│  │     │  ├─ eidt-workstate-modal.scss
│  │     │  ├─ footer.scss
│  │     │  ├─ header.scss
│  │     │  ├─ index.scss
│  │     │  ├─ invite-alarm-modal.scss
│  │     │  └─ side-menu.scss
│  │     ├─ config
│  │     │  ├─ reset.scss
│  │     │  └─ _variables.scss
│  │     ├─ main.scss
│  │     ├─ media.scss
│  │     ├─ modules
│  │     │  ├─ style.module.scss
│  │     │  └─ workstate.module.scss
│  │     ├─ screen
│  │     │  ├─ account
│  │     │  │  ├─ find-account.scss
│  │     │  │  ├─ join.scss
│  │     │  │  └─ login.scss
│  │     │  ├─ admin
│  │     │  │  ├─ company-info.scss
│  │     │  │  └─ work-state.scss
│  │     │  ├─ home.scss
│  │     │  ├─ index.scss
│  │     │  └─ user
│  │     │     └─ profile.scss
│  │     └─ style.scss
│  ├─ components
│  │  ├─ account
│  │  │  ├─ FindId.jsx
│  │  │  ├─ FindIdResult.jsx
│  │  │  ├─ FindPw.jsx
│  │  │  ├─ Join.jsx
│  │  │  ├─ Login.jsx
│  │  │  ├─ RequestJoin.jsx
│  │  │  ├─ SetPwComponent.jsx
│  │  │  └─ VerifyEmail.jsx
│  │  ├─ admin
│  │  │  ├─ CompanyInfo.jsx
│  │  │  ├─ WorkState.jsx
│  │  │  ├─ WorkStateList.jsx
│  │  │  └─ WorkStateListWM.jsx
│  │  ├─ common
│  │  │  ├─ ButtonComponents.jsx
│  │  │  ├─ Calender.jsx
│  │  │  ├─ Message.jsx
│  │  │  ├─ PeriodSelectorComponent.jsx
│  │  │  ├─ StyledComponent.jsx
│  │  │  └─ VerifyComponent.jsx
│  │  ├─ home
│  │  │  └─ ElectricListComponent.jsx
│  │  ├─ Home.jsx
│  │  ├─ hooks
│  │  │  ├─ CustomMove.jsx
│  │  │  └─ MakeDate.js
│  │  ├─ Loading.jsx
│  │  └─ modal
│  │     ├─ AlamModal.jsx
│  │     ├─ EditWorkStateModal.jsx
│  │     └─ InviteModal.jsx
│  ├─ layouts
│  │  ├─ AccountFooter.jsx
│  │  ├─ AdminLayout.jsx
│  │  ├─ BasicLayout.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  ├─ ProfileSideMenu.jsx
│  │  ├─ SideMenu.jsx
│  │  └─ UserLayout.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ account
│  │  │  ├─ FindIdPage.jsx
│  │  │  ├─ FindPwPage.jsx
│  │  │  ├─ JoinPage.jsx
│  │  │  ├─ LoginPage.jsx
│  │  │  ├─ RequestJoinPage.jsx
│  │  │  ├─ ResetPwPage.jsx
│  │  │  ├─ SetPwPage.jsx
│  │  │  └─ VerifyEmailPage.jsx
│  │  ├─ admin
│  │  │  ├─ CompayInfoPage.jsx
│  │  │  └─ WorkStatePage.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ NotFound.jsx
│  │  └─ user
│  │     └─ ProfilePage.jsx
│  ├─ router
│  │  ├─ adminRouter.jsx
│  │  ├─ JoinRouter.jsx
│  │  ├─ LoginRouter.jsx
│  │  └─ root.jsx
│  └─ utils
│     └─ index.js
└─ vite.config.js

```