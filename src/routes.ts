import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  LEADERBOARD: 'leaderBoard',
  CALENDAR: 'calendar',
  POINTS: 'points',
  PROFILE: 'profile',
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.LEADERBOARD, `/${DEFAULT_VIEW_PANELS.LEADERBOARD}`, []),
      createPanel(DEFAULT_VIEW_PANELS.CALENDAR, `/${DEFAULT_VIEW_PANELS.CALENDAR}`, []),
      createPanel(DEFAULT_VIEW_PANELS.POINTS, `/${DEFAULT_VIEW_PANELS.POINTS}`, []),
      createPanel(DEFAULT_VIEW_PANELS.PROFILE, `/${DEFAULT_VIEW_PANELS.PROFILE}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
