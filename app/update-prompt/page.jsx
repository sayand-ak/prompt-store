"use client";

import UpdatePromptComponent from '@components/UpdatePrompt';
import { Suspense } from 'react';

function UpdatePromptPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UpdatePromptComponent />
        </Suspense>
    );
}

export default UpdatePromptPage;


