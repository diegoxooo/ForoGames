import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'forogames',
  webDir: 'dist/forogames',
  server: {
    androidScheme: 'http'
  }
};

export default config;
