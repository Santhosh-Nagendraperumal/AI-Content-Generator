// app/dashboard/settings/[[...rest]].tsx
import { UserProfile } from '@clerk/nextjs';

export default function SettingsPage() {
  return (
    <div className='flex gap-5 justify-center items-center'>
      <UserProfile />
    </div>
  );
}
