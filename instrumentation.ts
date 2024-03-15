import { registerOTel } from '@vercel/otel';
 
export function register() {
  registerOTel({ serviceName: 'NEXTJS-DASHBOARD' });
}
// NOTE: You can replace `your-project-name` with the actual name of your project