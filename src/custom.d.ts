declare module '*.mp4' {
    const src: string;
    export default src;
  }

  declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_ENVIRONMENT_ID: string;      
      REACT_APP_API_URL: string;      
    }
  }