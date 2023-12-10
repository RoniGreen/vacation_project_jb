class Appconfig {
  REGISTER_URL = " http://localhost:3001/api/auth/register";
  LOGIN_URL = " http://localhost:3001/api/auth/login";
  VACATIONS_URL = "http://localhost:3001/api/vacations/";
  //  http://localhost:3001/api/vacations/2
    LIKES_URL= 'http://localhost:3001/api/follow';
      LIKES_COUNT_URL= 'http://localhost:4000/api/likes/count';
}

const config = new Appconfig();
export default config;
