// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  LOGO_URL: '../assets/img-logo.png',
  ROOM_IMG_URL: '../assets/img-room-default.jpg',
  PLANK_IMG_URL: '../assets/img-plank.jpg',
  PLANK_NAME: 'Copper Ridge',
  PLANK_WIDTH: 5,
  PARTNER_ID: 'CBM',
  UPLOAD_API_URL: 'https://floorpaper.azurewebsites.net/api/upload',
  DETAIL_LINK: 'https://www.google.com',
};
