import React from 'react';
import Layout from '@theme-original/Layout';
import { AISelectionProvider } from '../../context/AISelectionContext';
import AskAIButton from '../../components/AISelection/AskAIButton';
import AIRightPanel from '../../components/AISelection/AIRightPanel';
import AISelectionIntegration from '../../components/AISelection/AISelectionIntegration';

export default function LayoutWrapper(props) {
  return (
    <AISelectionProvider>
      <AISelectionIntegration />
      <Layout {...props}>
        {props.children}
        <AskAIButton />
        <AIRightPanel />
      </Layout>
    </AISelectionProvider>
  );
}