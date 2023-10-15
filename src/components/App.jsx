import user from './Profile/user.json';
import data from './Statistics/data.json';

import Profile from './Profile/Profile.js';
import Statistics from './Statistics/Statistics.js';
import { Data } from './Statistics/Statistics.js';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="upload stats" stats={data}>
        <Data stats={data} />
      </Statistics>
    </div>
  );
};
