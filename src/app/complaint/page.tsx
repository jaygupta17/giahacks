// src/app/complaint/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ComplaintPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/adminuser/index.html');
  }, [router]);

  return null; // This component does not need to render anything
};

export default ComplaintPage;
