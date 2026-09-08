/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StrategicPortal } from './components/layout/StrategicPortal';

export default function App() {
  return (
    <BrowserRouter>
      <StrategicPortal />
    </BrowserRouter>
  );
}



