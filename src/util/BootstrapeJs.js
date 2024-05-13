"use client"

import { useEffect } from 'react';

function BootstrapeJs() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}

export default BootstrapeJs;