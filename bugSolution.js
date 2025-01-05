```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [query, setQuery] = useState(null);

  useEffect(() => {
    setQuery(router.query);
  }, [router.query]);

  if (!query) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. Query parameters: {JSON.stringify(query)}</p>
    </div>
  );
}
```