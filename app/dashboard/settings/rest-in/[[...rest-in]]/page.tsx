// app/dashboard/settings/[[...rest]].tsx
import { UserProfile } from '@clerk/nextjs';

export default function SettingsPage() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}
